import { addTrackerAC } from '../reducers/trackerReducer'

export const addTrackerAction = (tracker) => {
  return dispatch => {
    try {
      dispatch(addTrackerAC(tracker))
    } catch (e) {
      console.log(e)
    }
  }
}
