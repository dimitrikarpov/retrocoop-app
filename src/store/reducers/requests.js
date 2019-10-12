import * as types from 'store/actions/actionsTypes'

const initState = {
  requests: [],
  error: false,
  loading: false
}

const fetchRequestsStart = state => {
  return {
    ...state,
    loading: true
  }
}

const fetchRequestSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    requests: action.payload
  }
}

const fetchRequestsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_REQESTS_START:
      return fetchRequestsStart(state)
    case types.FETCH_REQESTS_SUCCESS:
      return fetchRequestSuccess(state, action)
    case types.FETCH_REQESTS_FAIL:
      return fetchRequestsFail(state, action)
    default:
      return state
  }
}

export default reducer
