import * as actionTypes from 'store/actions/actionsTypes'

const initState = state => {
  return {
    ...state,
    loading: true,
    error: false
  }
}

const fetchPlatformsStart = state => {
  return {
    ...state,
    loading: true
  }
}

const fetchPlatformsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    platforms: action.payload
  }
}

const fetchPlatformsFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLATFORMS_START:
      return fetchPlatformsStart(state)
    case actionTypes.FETCH_PLATFORMS_SUCCESS:
      return fetchPlatformsSuccess(state, action)
    case actionTypes.FETCH_PLATFORMS_FAIL:
      return fetchPlatformsFail(state, action)
    default:
      return state
  }
}

export default reducer
