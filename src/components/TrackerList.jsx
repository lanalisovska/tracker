import React, {useState } from 'react'
import moment from 'moment'
import { addTrackerAction } from '../store/actions/tracker'
import { useDispatch, useSelector } from 'react-redux'
import Test from './Test'
import { ButtonAdd, Container, Input, InputWrapper } from '../style/styledComponent'
import { removeTracker } from '../store/reducers/trackerReducer'

export default function TrackerList() {
 const trackersList = useSelector(state => state.tracker.trackers)



   
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    function addToLocal(tracker) {
        let allTrackers = JSON.parse(localStorage.getItem('allTrackers'))
        allTrackers.push(tracker)
        localStorage.setItem('allTrackers', JSON.stringify(allTrackers))

    }
    function removeFromLocal(trackerId){
        let allTrackers = JSON.parse(localStorage.getItem('allTrackers')).filter(track => track.id !== trackerId)
        localStorage.setItem('allTrackers', JSON.stringify(allTrackers))

        dispatch(removeTracker(trackerId))
        console.log(trackerId)
    }

    function addTracker() {
        let id = Date.now()
        const newTracker = { id: id, value: value }
        dispatch(addTrackerAction(newTracker))
        addToLocal(newTracker)
        const date = moment().format()
        localStorage.removeItem(`${id}dateStop`)
        localStorage.setItem(`${id}dateStart`, date)
    }

    return (
        <Container>
               <h2>Tracker</h2>
            <InputWrapper>
           
                <Input
                    placeholder='Enter tracker name'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <ButtonAdd onClick={() => addTracker()} />
            </InputWrapper>
            {trackersList.map(tracker => <Test removeFromLocal={removeFromLocal} key={tracker.id} tracker={tracker} />)}
        </Container>
    )
}
