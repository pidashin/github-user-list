import React from 'react'
import Icon from '../common/icon'

export default { title: 'Common/Icon' }

const getIcons = () => {
	const result = []
	for (let i = 1; i <= 7; i++) {
		result.push(`icon-${i}`)
	}

	return result
}

const icons = getIcons()

export const allIcons = () => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: 10,
				}}
			>
				{icons.map((icon) => {
					return (
						<div
							key={icon}
							style={{
								margin: '0 5px',
							}}
						>
							<div
								style={{
									border: '1px solid #EAEDED',
									marginBottom: 2,
								}}
							>
								<Icon iconName={icon} />
							</div>
							<span>{icon}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
