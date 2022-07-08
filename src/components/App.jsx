import React, { useEffect } from 'react'
import TrackerComponent from './TrackerComponent'
import GlobalStyle from '../style/styledComponent'

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
      <TrackerComponent />
    </>
  )
}

export default App
