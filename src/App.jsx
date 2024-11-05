// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlagQuiz from './components/FlagQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlagQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
