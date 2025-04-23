import React from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import './App.css'
function App() {
  return (
    <div className="app">
      <h1>My Personal Profile Card</h1>
      <ProfileCard
        name="John Doe"
        photo="/profile.jpg"
        bio="A passionate web developer who loves creating interactive UIs."
      />
    </div>
  )
}

export default App
