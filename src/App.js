import React,{useState} from 'react'
import Navbar from './Components/NavBar'
import News from './Components/News'
// import LoadingBar from 'react-top-loading-bar'
import{
  Routes,
  Route,
  Router,
  }
  from "react-router-dom";


const App=()=> {
  const pageSize= 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
   
    return (
      <div>
//        <LoadingBar height={3}
//        color='#f11946'
//        progress={progress}/>
        <Navbar/>
        <Routes>
          <Route path="/" element={< News setProgress={setProgress}   key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News setProgress={setProgress} key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress={setProgress} key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress={setProgress} key='general'  pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News setProgress={setProgress} key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News setProgress={setProgress} key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress={setProgress} key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress={setProgress}  key='technology}>' pageSize={pageSize} country="in" category="technology"/>}></Route>

        </Routes>
     
      </div>
    )
  }
export default App
