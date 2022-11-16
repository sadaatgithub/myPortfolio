
import { useState,useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import InitialLoader from "./components/InitialLoader";

function App() {
  const [loader,setLoader] = useState(true)
  const [toggleDark,setToggleDark] = useState(false)

  const toggleDarkLight = ()=>{
    setToggleDark(!toggleDark)
  }
  useEffect(() =>{
    // setLoader(true)
    setTimeout(() =>{
        setLoader(false)
    },4000)

  },[])

  return (
    <>
    <div className={`${toggleDark? "dark":""}`}>
    {loader? <InitialLoader/>: <Home toggleTheme={toggleDarkLight} toggle={toggleDark} />
    }
    </div>
    </>
  );
}

export default App;
