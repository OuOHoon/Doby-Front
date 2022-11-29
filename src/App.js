import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import StickyFooter from "./Sticky-footer";
import SignIn from "./SignIn";

function App() {
  // const [hello, setHello] = useState('')
  //
  // useEffect(() => {
  //   axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  // }, []);

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
            </Routes>
            <StickyFooter/>
        </div>
    );
}

export default App;
