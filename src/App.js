import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import useFetch from './HelperFunctions/useFetch';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom';
import Inspection from './components/Inspection/Inspection';
import Login from './components/Login/Login';
import Sentiment from './components/Sentiment/Sentimetn';
import Landanalysis from './components/Landanalysis/Landanalysis';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className="basic-app-body space-between flex-col">
          
          <Navbar></Navbar>
            <Switch>
              <Route exact path='/' ><Home></Home></Route>
              <Route  path='/inspection' ><Inspection></Inspection></Route>
              <Route  path='/landanalysis'><Landanalysis></Landanalysis></Route>
              <Route  path='/sentiment' ><Sentiment></Sentiment></Route>
              <Route  path='/login' ><Login></Login></Route>
            </Switch>
          <Footer></Footer>
        </div>
          </BrowserRouter>
    </div>
  );
}

  // "proxy":"http://127.0.0.1:5000",
export default App;
