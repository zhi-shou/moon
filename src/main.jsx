import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Circle from './pages/circle/circle';
import Moments from './pages/moments/moments';
import Groups from './pages/groups/groups';
import Activities from './pages/activities/activities';
import QA from './pages/qa/qa';
import Market from './pages/market/market';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
