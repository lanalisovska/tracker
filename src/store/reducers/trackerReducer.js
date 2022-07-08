const SHOW_LOADER = 'SHOW_LOADER'
const ADD_TRACKER = 'ADD_TRACKER'
const START_WORKOUT = 'START_WORKOUT'
const DISCARD_WORKOUT = 'DISCARD_WORKOUT'
const REMOVE_TRACKER = 'REMOVE_TRACKER'

const defaultState = {
  isLoading: true,
  trackers: JSON.parse(localStorage.getItem('allTrackers')),
  workoutInProgress: false
}

export default function trackerReducer (state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER: return { ...state, isLoading: true }
    case ADD_TRACKER:
      return { ...state, trackers: [...state.trackers, action.payload] }
    case START_WORKOUT: return { ...state, workoutInProgress: true }
    case DISCARD_WORKOUT: return { ...state, workoutInProgress: false }
    case REMOVE_TRACKER: return { ...state, trackers: [...state.trackers.filter(tracker => tracker.id !== action.payload)] }
    default:
      return state
  }
}

export const showLoader = () => ({ type: SHOW_LOADER })
export const addTrackerAC = (tracker) => ({ type: ADD_TRACKER, payload: tracker })
export const startTimerAC = () => ({ type: START_WORKOUT })
export const stopTimerAC = () => ({ type: DISCARD_WORKOUT })
export const removeTracker = (id) => ({ type: REMOVE_TRACKER, payload: id })
