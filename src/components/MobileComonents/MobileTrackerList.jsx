import React, { useState } from 'react'
import { MobileButtonAdd, MobileContainer, MobileInput, MobileInputWrapper } from '../../style/mobileStyledComponent'
import moment from 'moment'
import { addTrackerAction } from '../../store/actions/tracker'
import { useDispatch, useSelector } from 'react-redux'
import { removeTracker } from '../../store/reducers/trackerReducer'
import MobileTracker from './MobileTracker'

export default function MobileTrackerList () {
  const trackersList = useSelector(state => state.tracker.trackers)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  function addToLocal (tracker) {
    const allTrackers = JSON.parse(localStorage.getItem('allTrackers'))
    allTrackers.push(tracker)
    localStorage.setItem('allTrackers', JSON.stringify(allTrackers))
  }
  function removeFromLocal (trackerId) {
    const allTrackers = JSON.parse(localStorage.getItem('allTrackers')).filter(track => track.id !== trackerId)
    localStorage.setItem('allTrackers', JSON.stringify(allTrackers))

    dispatch(removeTracker(trackerId))
    console.log(trackerId)
  }

  function addTracker () {
    const id = Date.now()
    const newTracker = { id, value }
    dispatch(addTrackerAction(newTracker))
    addToLocal(newTracker)
    const date = moment().format()
    localStorage.removeItem(`${id}dateStop`)
    localStorage.setItem(`${id}dateStart`, date)
    setValue('')
  }

  return (
      <MobileContainer>
         <div>Tracker</div>
         <MobileInputWrapper>
           <MobileInput
             placeholder='Enter tracker name'
             value={value}
             onChange={(e) => setValue(e.target.value)} />
          <MobileButtonAdd onClick={() => addTracker()}/>
         </MobileInputWrapper>
         { trackersList ? trackersList.map(tracker => <MobileTracker removeFromLocal={removeFromLocal} key={tracker.id} tracker={tracker} />) : ''}
      </MobileContainer>
  )
}
