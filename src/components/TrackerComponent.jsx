import React from 'react'
import { useSelector } from 'react-redux'
import MobileTrackerList from './MobileTrackerList'
import TrackerList from './TrackerList'

const TrackerComponent = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 560
  const trackersList = useSelector(state => state.tracker.trackers)

  React.useEffect(() => {
    trackersList.sort(function (a, b) {
      return b.id - a.id
    })
  }, [trackersList])

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width < breakpoint ? <MobileTrackerList /> : <TrackerList />
}

export default TrackerComponent
