import * as actionTypes from 'store/actions/actionsTypes'
import api from 'api/platformsApi'

export const fetchPlatforms = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_PLATFORMS_START
    })

    try {
      const platforms = await api.fetchAll()
      dispatch({
        type: actionTypes.FETCH_PLATFORMS_SUCCESS,
        payload: platforms.data
      })
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_PLATFORMS_FAIL,
        error
      })
    }
  }
}
