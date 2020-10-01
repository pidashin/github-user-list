import React from 'react'
import styles from './icon.module.scss'

const Icon = ({ iconName, className, ...rest }) => (
	<svg className={`${styles.icon} ${className || ''}`} {...rest}>
		<use xlinkHref={`#icon-${iconName}`}></use>
	</svg>
)

export default Icon
