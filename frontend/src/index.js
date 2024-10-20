import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuizHolder from './Context/QuizHolder';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp'
import Login from './Components/Login/Login'
import  Router   from './Router'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizHolder>

     
       <Navbar /> 
      

      <Router/>

    </QuizHolder>
  </React.StrictMode>
);
