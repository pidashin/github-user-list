export const actionTypes = {
	FETCHDATA: '[USERS]FETCHDATA',
	FETCHDATASUCCESS: '[USERS]FETCHDATASUCCESS',
}

export const fetchData = (url) => {
	return {
		type: actionTypes.FETCHDATA,
		url,
	}
}

export const fetchDataSuccess = (data) => {
	return {
		type: actionTypes.FETCHDATASUCCESS,
		data,
	}
}
