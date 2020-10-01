import React from 'react'
import Comp from '../detail/components/index'

export default {
	title: 'Detail',
	components: Comp,
	args: {
		avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4',
		name: 'Michael D. Ivey',
		bio: null,
		login: 'ivey',
		site_admin: false,
		location: 'Tuscumbia, AL',
		blog: 'http://gweezlebur.com',
	},
}

const Template = (args) => <Comp {...args} />

export const index = Template.bind({})
