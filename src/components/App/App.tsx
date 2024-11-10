import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ImageList from '../ImageViewer/ImageList';

function App() {
  return (
    <div className="App-body">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<ImageList />} />
          <Route path='/imageList' element={<ImageList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
