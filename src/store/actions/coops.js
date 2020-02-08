import * as actionTypes from 'store/actions/actionsTypes'
import CoopsService from 'api/newservices/coops'

const fetchCoopsStart = () => ({
  type: actionTypes.FETCH_REQESTS_START
})

const fetchCoopsSuccess = coops => ({
  type: actionTypes.FETCH_REQESTS_SUCCESS,
  payload: coops.data.data
})

const fetchCoopsFail = error => ({
  type: actionTypes.FETCH_REQESTS_FAIL,
  error
})

export const fetchCoops= () => {
  return async dispatch => {
    dispatch(fetchCoopsStart())

    try {
      const coops = await CoopsService.get()
      dispatch(fetchCoopsSuccess(coops))
    } catch (error) {
      dispatch(fetchCoopsFail(error))
    }
  }
}
