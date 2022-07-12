import React, { useEffect } from 'react'
import GlobalStyle from '../style/styledComponent'
import TrackerList from './DesktopComponents/TrackerList'

function App () {
  const list = JSON.parse(localStorage.getItem('allTrackers'))
  useEffect(() => {
    if (list === null) {
      localStorage.setItem('allTrackers', JSON.stringify([]))
    }
  }, [])
  return (
    <>
     <GlobalStyle/>
      <TrackerList />
    </>
  )
}

export default App
