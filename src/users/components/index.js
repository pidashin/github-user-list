import React from 'react'
import Icon from '../../common/icon'
import Loading from '../../common/loading'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

const Row = ({ number, avatar_url, login, site_admin, viewDetail }) => (
	<div className={styles.row} onClick={() => viewDetail(login)}>
		<div className={`${styles.col} ${styles['col--num']}`}>{number}</div>
		<div className={`${styles.col} ${styles['col--avatar']}`}>
			{avatar_url}
		</div>
		<div className={styles.col}>{login}</div>
		<div className={styles.col}>
			<Icon
				iconName={site_admin ? 'icon-2' : 'icon-1'}
				className={`${styles.icon} ${
					styles[`icon--${site_admin ? 'yes' : 'no'}`]
				}`}
			/>
		</div>
	</div>
)

Row.propTypes = {
	number: PropTypes.number.isRequired,
	avatar_url: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	site_admin: PropTypes.bool.isRequired,
	viewDetail: PropTypes.func.isRequired,
}

const Users = ({ users, goPrev, goNext, viewDetail, loading }) => {
	const hadData = users.length > 0

	return (
		<div>
			<div className={styles.main}>
				{loading && <Loading />}
				<div
					className={`${styles.usersTable} ${
						loading ? styles['usersTable--loading'] : ''
					}`}
				>
					<div className={`${styles.row} ${styles['row--header']}`}>
						<div className={`${styles.col} ${styles['col--num']}`}>
							No.
						</div>
						<div
							className={`${styles.col} ${styles['col--avatar']}`}
						>
							avatar_url
						</div>
						<div className={styles.col}>login</div>
						<div className={styles.col}>site_admin</div>
					</div>
					<div
						className={`${styles['usersTable__content']} ${
							hadData ? '' : styles['usersTable__content--empty']
						} `}
					>
						{hadData ? (
							users.map((user, idx) => {
								return (
									<Row
										key={idx}
										{...user}
										viewDetail={viewDetail}
									/>
								)
							})
						) : (
							<p>No Data!</p>
						)}
					</div>
				</div>
			</div>

			<div className={styles.pagination}>
				<button
					className={styles.btn}
					disabled={loading || !goPrev}
					onClick={goPrev}
				>
					<Icon className={styles.icon} iconName="icon-3" />
				</button>
				<button
					className={styles.btn}
					disabled={loading || !goNext}
					onClick={goNext}
				>
					<Icon className={styles.icon} iconName="icon-4" />
				</button>
			</div>
		</div>
	)
}

Users.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			number: PropTypes.number.isRequired,
			avatar_url: PropTypes.string.isRequired,
			login: PropTypes.string.isRequired,
			site_admin: PropTypes.bool.isRequired,
		})
	),
	goPrev: PropTypes.func,
	goNext: PropTypes.func,
	viewDetail: PropTypes.func,
	loading: PropTypes.bool.isRequired,
}

export default Users
