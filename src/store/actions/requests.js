import * as actionTypes from 'store/actions/actionsTypes'
import api from 'api/requestsApi'

export const fetchRequestsStart = () => {
  return {
    type: actionTypes.FETCH_REQESTS_START
  }
}

export const fetchRequestsSuccess = requests => {
  return {
    type: actionTypes.FETCH_REQESTS_SUCCESS,
    payload: requests
  }
}

export const fetchRequestsFail = error => {
  return {
    type: actionTypes.FETCH_REQESTS_FAIL,
    error
  }
}

export const fetchRequests = () => {
  return async dispatch => {
    dispatch(fetchRequestsStart())

    try {
      const requests = await api.getRequests()
      dispatch(fetchRequestsSuccess(requests))
    } catch (error) {
      dispatch(fetchRequestsFail(error))
    }
  }
}
