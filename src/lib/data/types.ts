export type TabItem = {
	path: string
	label: string
}

export type Blog = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	published: boolean
}

export type Experience = {
	designation: string
	company: string
	industry: string
	location: string
	duration: string
	join_year: number
	type: string
	style: {
		bg_color: string
		font_color: string
		icon_path: string
	}
}

export type Award = {
	title: string
	organization: string
	type: string
	description: string
	time: string
	year: number
	proof_link: string
	style: {
		bg_color: string
		font_color: string
		icon_path: string
	}
}

export const toolbarItems: TabItem[] = [
	{
		path: '/',
		label: 'Home'
	},
	{
		path: '/work',
		label: 'Work Experience'
	},
	{
		path: '/contributions',
		label: 'Contributions'
	},
	{
		path: '/awards',
		label: 'Awards'
	}
]
