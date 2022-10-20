
import { useState,useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import InitialLoader from "./components/InitialLoader";

function App() {
  const [loader,setLoader] = useState(true)

  useEffect(() =>{
    // setLoader(true)
    setTimeout(() =>{
        setLoader(false)
    },4000)

  },[])

  return (
    <>
    {loader? <InitialLoader/>: <Home />
    }
    </>
  );
}

export default App;
