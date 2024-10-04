import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListWithLoader from './components/ListWithLoader';
import ConditionalRendering from './components/ConditionalRendering';
import MultiStepForm from './components/MultiStepForm';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link> | <Link to="/form">Multi-Step Form</Link> | <Link to="/list">List</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={
                    <>
                        <UserForm />
                        <UserList />
                    </>
                } />
                <Route path="/form" element={<MultiStepForm />} />
                <Route path="/list" element={<ListWithLoader />} />
            </Routes>
            <ConditionalRendering />
        </Router>
    );
};

export default App;
