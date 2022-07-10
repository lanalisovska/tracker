import React, { useEffect } from 'react'
import MobileTrackerList from './MobileComonents/MobileTrackerList'
import TrackerList from './DesktopComponents/TrackerList'

const TrackerComponent = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 560

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width < breakpoint ? <MobileTrackerList /> : <TrackerList />
}

export default TrackerComponent
