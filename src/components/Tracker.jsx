import moment from 'moment'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DeleteButton, NameTracker, PauseButton, ResumeButton, TrackerWrapper } from '../style/styledComponent'

const Tracker = ({ tracker, removeFromLocal }) => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const timeStart = localStorage.getItem(`${tracker.id}dateStart`)
  const timeStop = localStorage.getItem(`${tracker.id}dateStop`)

  useEffect(() => {
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

  useEffect(() => {
    if (timeStart !== null) {
      const dateNow = moment()
      setTimerOn(true)
      setTime(moment(dateNow.diff(timeStart)))
    } else if (timeStop !== null) {
      setTimerOn(false)
      setTime(moment(timeStop))
    }
  }, [])

  const pause = () => {
    setTimerOn(false)
    localStorage.removeItem(`${tracker.id}dateStart`)
    setTime(moment(time))
    localStorage.setItem(`${tracker.id}dateStop`, moment(time).format())
  }

  const removeItem = () => {
    localStorage.removeItem(`${tracker.id}dateStart`)
    localStorage.removeItem(`${tracker.id}dateStop`)
    removeFromLocal(tracker.id)
  }

  return (
     <TrackerWrapper>
      <NameTracker>{tracker.value || moment(timeStart).format('HH:mm:ss')} </NameTracker>
        <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
       <DeleteButton onClick={() => removeItem()}/>
          {timerOn && <PauseButton onClick={() => pause()} />}
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
