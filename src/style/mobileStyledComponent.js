import styled from 'styled-components'
import iconStart from './../icons/play_icon.svg'
import iconRemove from './../icons/remove.svg'
import iconPause from './../icons/pause.svg'

export const MobileContainer = styled.div`
 
  border-radius: 5px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  max-width: 520px;
  padding: 0 40px;
  min-width: 320px;

  justify-content: center;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`

export const MobileInputWrapper = styled.div`
max-width: 520px;
min-width: 320px;
width: 90%;
height: 45px;
display: flex;
flex-direction: row;
background-color: #fff;
border-radius: 30px;
border: 1px solid #EF7C1D;
align-items: center;

`

export const MobileInput = styled.input`
height: 40px;
padding: 2px 5px;
width: 85%;
background-color: inherit;
border-radius: 30px;
border: none;
&:focus {
  outline: none;
  border: none;

`
export const MobileButtonAdd = styled.div`
   width: 45px;
   height: 40px;
   background-image: url(${iconStart});
  background-repeat: no-repeat; 
  background-size: 100%;
  background-position: right;
`
export const MobileTrackerWrapper = styled.div`
min-width: 320px;
max-width: 430px;
height: 50px;
display: flex;
flex-direction: row;
border-bottom: 1px solid #EF7C1D; 
align-items: center;
margin: 10px 0;
width: 90%;

`
export const MobileNameTracker = styled.div`
width: 300px;
`

export const MobileDeleteButton = styled.button`
background-image: url(${iconRemove});
width: 45px;
height: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
background-color: inherit;

`
export const MobileResumeButton = styled.button`
background-image: url(${iconStart});
width: 45px;
height: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
background-color: inherit;


`
export const MobilePauseButton = styled.button`
background-image: url(${iconPause});
width: 45px;
height: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
background-color: inherit;
backround-color: none;

`
