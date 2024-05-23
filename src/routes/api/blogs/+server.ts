import { json } from '@sveltejs/kit'
import type { Blog, Series } from '$lib/data/types'
import { promises as fsPromises, Stats } from 'fs'
import { readFile } from 'fs/promises'
import { join, extname } from 'path'

const getAllCodeLabJson = async (parentFolder: string) => {
	try {
		const jsonFiles: string[] = []
		const stack: string[] = [parentFolder]

		while (stack.length) {
			const currentFolder = stack.pop()!
			const files = await fsPromises.readdir(currentFolder)

			for (const file of files) {
				const filePath = join(currentFolder, file)
				const fileStat: Stats = await fsPromises.stat(filePath)

				if (fileStat.isDirectory()) {
					stack.push(filePath)
				} else if (extname(file) === '.json') {
					jsonFiles.push(filePath)
				}
			}
		}
		return jsonFiles
	} catch (error) {
		console.error(error)
		return []
	}
}

const readJsonFile = async (filePath: string) => {
	try {
		const fileContents = await readFile(filePath, 'utf8')
		return JSON.parse(fileContents)
	} catch (error) {
		throw new Error(`Error reading JSON file: ${error}`)
	}
}

async function getCodelabs(): Promise<Series[]> {
	const currentDirectory: string = process.cwd()
	const codelabPath: string = join(currentDirectory, '/src/lib/codelab')
	const jsonCodelabFilePaths: string[] = await getAllCodeLabJson(codelabPath)
	const jsonContentsPromise = jsonCodelabFilePaths.map(async (path) => {
		let jsonObject = await readJsonFile(path)
		return jsonObject satisfies Series
	})
	const series: Series[] = await Promise.all(jsonContentsPromise)
	const activeSeries = series.filter((series) => series.metadata.published === true)
	const activeSeriesWithBlogs = activeSeries.map((series) => {
		let updatedBlogs = series.blogs.filter((blog: Blog) => blog.published === true)
		series.blogs = updatedBlogs
		return series
	})

	// blogs = blogs.sort(
	// 	(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	// )

	return activeSeriesWithBlogs
}

export async function GET() {
	const blogPosts: Series[] = await getCodelabs()
	return json(blogPosts)
}
