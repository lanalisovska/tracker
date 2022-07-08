import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import iconStart  from './../icons/play_icon.svg'
import iconRemove from './../icons/remove.svg'
import iconPause from './../icons/pause.svg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    background-color: #FEF8F4;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export default GlobalStyle;
 

export const Container = styled.div`

  border-radius: 5px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 520px;
  padding: 10px 0;
`





export const Input = styled.input`
  height: 40px;
  padding: 2px 10px;
  width: 430px;
  background-color: inherit;
  border-radius: 30px;
  border: none;
  &:focus {
    outline: none;
    border: none;
}
`
export const InputWrapper = styled.div`
width: 480px;
height: 45px;
display: flex;
flex-direction: row;
background-color: #fff;
border-radius: 30px;
border: 1px solid #EF7C1D;
align-items: center;
margin: 10px 0;

`

export const ButtonAdd = styled.div`
   width: 45px;
   height: 40px;
   background-image: url(${iconStart});
  background-repeat: no-repeat; 
  background-size: 100%;
  background-position: right;
  
`
export const TrackerWrapper = styled.div`
width: 480px;
height: 50px;
display: flex;
flex-direction: row;
backround-color: red;
border-bottom: 1px solid gray; 
align-items: center;
margin: 10px 0;

`

export const NameTracker = styled.div`
width: 400px;
`

export const DeleteButton = styled.button`
background-image: url(${iconRemove});
height: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
width: 40px;
background-color: inherit;

`
export const ResumeButton = styled.button`
background-image: url(${iconStart});
height: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
width: 40px;
background-color: inherit;


`
export const PauseButton = styled.button`
background-image: url(${iconPause});
height: 40px;
width: 40px;
background-repeat: no-repeat; 
background-size: 100%;
border: none;
background-color: inherit;
backround-color: none;

`