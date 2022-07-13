
export const SET_DATA = 'SET_DATA';
export const SET_COLOR = 'SET_COLOR';
export const SET_DIFF = 'SET_DIFF';

export function setData(data) {
	return {
		type: SET_DATA,
		payload: {
			data
		}
	}
}

export function setColor() {
	return {
		type: SET_COLOR,
		payload: {}
	}
}

export function setDiff(diff) {
	return {
		type: SET_DIFF,
		payload: {
			diff
		}
	}
}

