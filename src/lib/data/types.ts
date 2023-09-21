export type ToolbarItem = {
	path: String
	label: String
}

export type Experience = {
	designation: string
	company: string
	industry: string
	location: string
	duration: string
	join_year:number
	type: string
	style: {
		bg_color: string
		font_color: string
		icon_path: string
	}
}

export const toolbarItems: ToolbarItem[] = [
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
		path: '/blogs',
		label: 'Blogs'
	},
	{
		path: '/updates',
		label: 'Updates'
	}
]
