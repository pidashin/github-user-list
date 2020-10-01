import React from 'react'
import Users from '../users/components/index'

const genUser = (count) => {
	const result = []
	for (let i = 0; i < count; i++) {
		result.push({
			number: i + 1,
			login: `demo_${i}`,
			avatar_url: `https://avatars0.githubusercontent.com/u/${i}?v=4`,
			site_admin: i % 4 === 0,
		})
	}

	return result
}

export default {
	title: 'Users',
	components: Users,
	args: {
		// goPrev: () => {},
		goNext: () => {},
		users: genUser(5),
		loading: false,
	},
}

const Template = (args) => <Users {...args} />

export const index = Template.bind({})

export const withScroll = Template.bind({})
withScroll.args = {
	users: genUser(20),
}

export const empty = Template.bind({})
empty.args = {
	users: [],
}

export const loading = Template.bind({})
loading.args = {
	loading: true,
}
