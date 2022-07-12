import styled, { createGlobalStyle } from 'styled-components'
import iconStart from './../icons/play_icon.svg'
import iconRemove from './../icons/remove.svg'
import iconPause from './../icons/pause.svg'
import { size } from './device'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    color: #FC6900;
    font-weight: bold;
    font-size: 20px;
    background-color: #FEF8F4;
    font-family: -apple-system, Open-Sans, Helvetica, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalStyle

export const Container = styled.div`
  border-radius: 5px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  height: auto;

  @media  all and (min-width: ${size.minDesktop}) and (max-width: ${size.maxDesktop}) {
    padding: 10px 0;
    width: 520px;
  }
  @media all and (max-width: ${size.maxMobile}) and (min-width: ${size.minMobile})  {
    max-width: 520px;
    min-width: 320px;
    width: auto;
  }
  @media (max-width: ${size.minMobile})  {
    width: 320px;
  }
`

export const Input = styled.input`
  height: 40px;
  padding: 2px 10px;
  width: 430px;
  background-color: inherit;
  border-radius: 30px;
  border: none;
  padding: 2px 5px;

  &:focus {
    outline: none;
    border: none;
 }
 @media all and (max-width: ${size.maxMobile}) and (min-width: ${size.minMobile}) {
    width: 85%;

  @media (max-width: ${size.minMobile})  {
    width: 320px;
  }
`
export const InputWrapper = styled.form`
  width: 480px;
  height: 45px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #EF7C1D;
  align-items: center;
  margin: 10px 0;
  
  @media all and (max-width: ${size.maxMobile}) and (min-width: ${size.minMobile}) {
    max-width: 450px;
    min-width: 320px;
    width: 80%;
  } 
  @media (max-width: ${size.minMobile})  {
    width: 300px;
  }

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
  border-bottom: 1px solid #EF7C1D; 
  align-items: center;
  margin: 10px 10px;
  animation: showY 1.0s forwards;
  
  @media all and (max-width: ${size.maxMobile}) and (min-width: ${size.minMobile}) {
    min-width: 320px;
    max-width: 400px;
    width: 90%;
  }
  @media (max-width: ${size.minMobile})  {
    width: 300px;
  }
  @keyframes showY {
    0% {
      opacity: 0;
      transform: translateY(-400px);
    }
    50% {
      opacity: 0;
    }
    100% {
     transform: translateY(0);
    }
  }
`

export const NameTracker = styled.div`
  width: 400px;
  
  @media all and (max-width: ${size.maxMobile}) and (min-width: ${size.minMobile}) {
    width: 300px;
  }
  @media (max-width: ${size.minMobile})  {
    width: 230px;
  }
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
