import * as types from 'store/actions/actionsTypes'

const initState = {
  coops: [],
  error: false,
  loading: false
}

const fetchCoopsStart = state => ({
  ...state,
  loading: true
})

const fetchCoopsSuccess = (state, action) => ({
  ...state,
  loading: false,
  coops: action.payload
})

const fetchCoopsFail = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
})

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_COOPS_START:
      return fetchCoopsStart(state)
    case types.FETCH_COOPS_SUCCESS:
      return fetchCoopsSuccess(state, action)
    case types.FETCH_COOPS_FAIL:
      return fetchCoopsFail(state, action)
    default:
      return state
  }
}

export default reducer
