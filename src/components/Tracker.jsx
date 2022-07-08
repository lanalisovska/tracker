import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'
import { DeleteButton, NameTracker, PauseButton, ResumeButton, TrackerWrapper } from '../style/styledComponent'

const Tracker = (props) => {
  const { tracker, removeFromLocal } = props
  const [time, setTime] = React.useState(0)
  const [timerOn, setTimerOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!timerOn) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  React.useEffect(() => {
    const date2 = localStorage.getItem(`${tracker.id}dateStart`)
    if (date2 !== null) {
      const date = moment()
      setTimerOn(true)
      setTime(moment(date.diff(date2)))
    } else if (localStorage.getItem(`${tracker.id}dateStop`) !== null) {
      setTimerOn(false)
      setTime(moment(localStorage.getItem(`${tracker.id}dateStop`)))
    }
  }, [])

  const stop = () => {
    setTimerOn(false)
    localStorage.removeItem(`${tracker.id}dateStart`)
    setTime(moment(time))
    localStorage.setItem(`${tracker.id}dateStop`, moment(time).format())
  }

  const currentTime = moment(localStorage.getItem(`${tracker.id}dateStart`)).format('HH:mm:ss')

  const removeItem = () => {
    localStorage.removeItem(`${tracker.id}dateStart`)
    localStorage.removeItem(`${tracker.id}dateStop`)
    removeFromLocal(tracker.id)
  }

  return (
     <TrackerWrapper>
      <NameTracker>{tracker.value ? tracker.value : currentTime} </NameTracker>
      <div id="display">
        <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
       <DeleteButton onClick={() => removeItem()}/>
          {timerOn && <PauseButton onClick={() => stop()} />}
          {!timerOn && time > 0 && (
          <ResumeButton onClick={() => setTimerOn(true)} />
          )}
    </TrackerWrapper>
  )
}
export default Tracker

Tracker.propTypes = {
  tracker: PropTypes.object,
  removeFromLocal: PropTypes.func

}
