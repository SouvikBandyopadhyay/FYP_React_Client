import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import useFetch from './HelperFunctions/useFetch';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import Inspection from './components/Inspection/Inspection';
import Login from './components/Login/Login';
import Sentiment from './components/Sentiment/Sentimetn';
import Landanalysis from './components/Landanalysis/Landanalysis';


function App() {


  return (
    <div className="App">
        <div className="basic-app-body space-between flex-col">
          <Router>
          <Navbar></Navbar>
            <Routes>
              <Route exact path='/' 
                element={<Home></Home>}
              />
              <Route exact path='inspection' 
                element={<Inspection></Inspection>}
              />
              <Route exact path='landanalysis'
                element={<Landanalysis></Landanalysis>}
              />
              <Route exact path='sentiment' 
                element={<Sentiment></Sentiment>}
              />
              <Route exact path='login' 
                element={<Login></Login>}
              />
            </Routes>
          </Router>
          <Footer></Footer>
        </div>
    </div>
  );
}

  // "proxy":"http://127.0.0.1:5000",
export default App;
