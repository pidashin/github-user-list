export const actionTypes = {
	FETCHDATA: '[DETAIL]FETCHDATA',
	FETCHDATASUCCESS: '[DETAIL]FETCHDATASUCCESS',
}

export const fetchData = (userName) => {
	return {
		type: actionTypes.FETCHDATA,
		userName,
	}
}

export const fetchDataSuccess = (data) => {
	return {
		type: actionTypes.FETCHDATASUCCESS,
		data,
	}
}