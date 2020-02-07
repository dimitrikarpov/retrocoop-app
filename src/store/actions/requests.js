import * as actionTypes from 'store/actions/actionsTypes'
import CoopsService from 'api/newservices/coops'

const fetchRequestsStart = () => ({
  type: actionTypes.FETCH_REQESTS_START
})

const fetchRequestsSuccess = requests => ({
  type: actionTypes.FETCH_REQESTS_SUCCESS,
  payload: requests
})

const fetchRequestsFail = error => ({
  type: actionTypes.FETCH_REQESTS_FAIL,
  error
})

export const fetchRequests = () => {
  return async dispatch => {
    dispatch(fetchRequestsStart())

    try {
      const requests = await CoopsService.get()
      dispatch(fetchRequestsSuccess(requests))
    } catch (error) {
      dispatch(fetchRequestsFail(error))
    }
  }
}
