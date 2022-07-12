import React, { useState } from 'react'
import moment from 'moment'
import { addTrackerAction } from '../store/actions/tracker'
import { useDispatch, useSelector } from 'react-redux'
import Tracker from './Tracker'
import { ButtonAdd, Container, Input, InputWrapper } from '../style/styledComponent'
import { removeTracker } from '../store/reducers/trackerReducer'

export default function TrackerList () {
  const trackers = useSelector(state => state.tracker.trackers)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  let allTrackers = JSON.parse(localStorage.getItem('allTrackers'))
  const setAllTrackers = (trackers) => localStorage.setItem('allTrackers', JSON.stringify(trackers))

  const trackersList = trackers
    ? trackers.sort((a, b) => b.id - a.id)
    : null

  const addToLocal = (tracker) => {
    allTrackers.push(tracker)
    setAllTrackers(allTrackers)
  }

  function removeFromLocal (trackerId) {
    allTrackers = allTrackers.filter(track => track.id !== trackerId)
    setAllTrackers(allTrackers)
    dispatch(removeTracker(trackerId))
  }

  function submitTracker (e) {
    e.preventDefault()
    if (e.which === 13) {
      addTracker()
    } addTracker()
  }

  function addTracker () {
    const id = Date.now()
    const newTracker = { id, value }
    dispatch(addTrackerAction(newTracker))
    addToLocal(newTracker)
    localStorage.removeItem(`${id}dateStop`)
    localStorage.setItem(`${id}dateStart`, moment().format())
    setValue('')
  }

  return (
        <Container>
            <h2>Tracker</h2>
            <InputWrapper onSubmit={(e) => submitTracker(e)}>
                <Input
                    placeholder='Enter tracker name'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <ButtonAdd onClick={() => addTracker()}/>
            </InputWrapper>
            { trackersList ? trackersList.map(tracker => <Tracker removeFromLocal={removeFromLocal} key={tracker.id} tracker={tracker} />) : ''}
        </Container>
  )
}
