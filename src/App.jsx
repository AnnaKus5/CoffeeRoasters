import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Main from "/src/components/Main.jsx"
import HomePage from "/src/components/HomePage.jsx"
import AboutUs from "/src/components/AboutUs.jsx"
import SubscripionPage from "/src/components/SubscriptionPage.jsx"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<HomePage />}/>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="subscription" element={<SubscripionPage />} />
      </Route>
    </Routes>
)
}

export default App
