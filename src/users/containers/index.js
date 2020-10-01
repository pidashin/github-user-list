import React, { useEffect, useState } from 'react'
import Comp from '../components/index'
import { fetchData } from '../actions'
import { useDispatch } from 'react-redux'
import useShallowEqualSelector from '../../utils/useShallowEqualSelector'
import { useHistory } from 'react-router-dom'

const pageSize = 20

const Users = () => {
	const history = useHistory()

	const dispatch = useDispatch()

	const [pages, setPages] = useState([null, null])

	const { users, next, loading } = useShallowEqualSelector((state) => {
		const {
			users: { data, next, loading },
		} = state

		const startNo = (pages.length - 2) * pageSize + 1
		const users = data.map((item, idx) => {
			return Object.assign({ number: startNo + idx }, item)
		})

		return {
			users,
			next,
			loading,
		}
	})

	const goPrev =
		pages.length > 2
			? () => {
					setPages((prev) => {
						const tmp = Array.from(prev)
						const url = tmp[tmp.length - 2]
						tmp.pop()
						dispatch(fetchData(url))
						return tmp
					})
			  }
			: null

	const goNext = () => {
		setPages((prev) => {
			return prev.concat(next)
		})
		return dispatch(fetchData(next))
	}

	const viewDetail = (userName) => {
		return history.push(`/detail/${userName}`)
	}

	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])

	return (
		<Comp
			goPrev={goPrev}
			goNext={goNext}
			users={users}
			viewDetail={viewDetail}
			loading={loading}
		/>
	)
}

export default Users
