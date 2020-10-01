import React from 'react'
import styles from './loading.module.scss'
import { ReactComponent as LoadingSVG } from '../assets/loading.svg'

const Loading = () => (
	<div className={styles.main}>
		<LoadingSVG className={styles.loading} />
	</div>
)

export default Loading
