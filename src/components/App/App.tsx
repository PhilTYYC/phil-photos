import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ImageList from '../ImageViewer/ImageList';
import Login from '../Login/LoginForm';
import { AuthProvider } from 'src/hooks/useAuth';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { Secret } from '../secret/Secret';

function App() {
  return (
    <div className="App-body">
      <Router basename={process.env.PUBLIC_URL}>
        <AuthProvider children={[]}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ImageList />} />
            <Route path='/imageList' element={<ImageList />} />
            <Route
              path="/secret"
              element={
                <ProtectedRoute children={[]}>
                  <Secret />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
