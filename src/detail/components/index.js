import React from 'react'
import Icon from '../../common/icon'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

const Row = ({ title, value }) => {
	let content = value
	if (typeof value === 'boolean') {
		content = (
			<Icon
				iconName={value ? 'icon-2' : 'icon-1'}
				className={`${styles.icon} ${
					value ? styles['icon--yes'] : styles['icon--no']
				}`}
			/>
		)
	}

	return (
		<div className={styles.row}>
			<div className={styles.row__col1}>{title}</div>
			<div className={styles.row__col2}>{content}</div>
		</div>
	)
}

Row.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

const titles = ['avatar_url', 'name', 'bio', 'site_admin', 'location', 'blog']

const Detail = ({ login, goBack, ...rest }) => {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<Icon iconName="icon-7" className={styles.userIcon} />
				<h2>{login}</h2>
			</div>

			<div>
				{titles.map((title) => {
					return <Row key={title} title={title} value={rest[title]} />
				})}
			</div>

			<div className={styles.btnContainer}>
				<button className={styles.btn} onClick={goBack}>
					Go Back
				</button>
			</div>
		</div>
	)
}

Detail.propTypes = {
	avatar_url: PropTypes.string,
	name: PropTypes.string,
	bio: PropTypes.string,
	login: PropTypes.string.isRequired,
	site_admin: PropTypes.bool,
	location: PropTypes.string,
	blog: PropTypes.string,
	goBack: PropTypes.func.isRequired,
}

export default Detail
