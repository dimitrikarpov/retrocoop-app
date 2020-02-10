import * as actionTypes from 'store/actions/actionsTypes'
import PlatformsService from 'services/api/platformsApi'

export const fetchPlatforms = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_PLATFORMS_START
  })

  try {
    const platforms = await PlatformsService.get()
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
