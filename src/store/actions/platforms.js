import * as actionTypes from 'store/actions/actionsTypes'
// import api from 'api/platformsApi'
import PlatformsService from 'api/services/platforms'

export const fetchPlatforms = () => {

  console.log(PlatformsService)

  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_PLATFORMS_START
    })

    try {
      const platforms = await PlatformsService.getAll()
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
