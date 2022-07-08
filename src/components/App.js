import { useEffect} from 'react';
import TrackerComponent from './TrackerComponent';
import GlobalStyle from '../style/styledComponent';

function App() {

  localStorage.setItem('allTrackers', JSON.stringify([]))
 
// useEffect(() => { 
//     if(trackersList === null){
//       localStorage.setItem('allTrackers', JSON.stringify([]))
//     }
//   }, [])
      
  return (
    <>
     <GlobalStyle/>
      <TrackerComponent />
    </>
  );
}

export default App;
