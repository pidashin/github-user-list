import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fetchData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import Comp from '../components/index'

const Detail = () => {
	const { userName } = useParams()

	const history = useHistory()

	const detailData = useSelector((state) => state.detail)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData(userName))
	}, [dispatch, userName])

	const goBack = () => {
		history.goBack()
	}

	return <Comp {...detailData} goBack={goBack} />
}

export default Detail
