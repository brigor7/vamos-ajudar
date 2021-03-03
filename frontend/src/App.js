import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import User from './components/User/User';
import NotFound from './components/helpers/NotFound';
import ProtectedRoute from './components/helpers/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="/conta/*" element={<User />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
