import React from 'react'
import { ReactComponent as SVG } from '../src/assets/icon.svg'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
	(Story) => (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<SVG />
			<Story />
		</div>
	),
]
