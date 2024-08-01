import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure the path is correct
import CenteredButton from './components/CenteredButton'; // Ensure the path is correct
import Quiz from './components/Quiz'; // Ensure the path is correct
import ToggleButtons from './components/Button';
import ImageAvatars from './components/Profile';
const App = () => {
  return (
    <>
     {/* <Navbar /> 
         <ImageAvatars/>
         <Quiz /> */}
          <Router>
            <Navbar /> 
      <Routes>
       {/* <Navbar />  */}
         <ImageAvatars/>
        <Route path="/" element={<CenteredButton />} /> {/* Main page with the "Start" button */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz page */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
