import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route } from 'react-router-dom'
import Auxilio from '../Auxilio/Auxilio'
import FamilyStore from '../Family/FamilyStore'
import { FamilyProvider } from '../../context/FamilyContext'

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Auxilio />} />
        <FamilyProvider>
          <Route path="/familia" element={<FamilyStore />} />
        </FamilyProvider>
      </Routes>
    </section>
  )
}

export default User
