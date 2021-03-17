import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route } from 'react-router-dom'
import Auxilio from '../Auxilio/Auxilio'
import { FamilyProvider } from '../../context/FamilyContext'
import FamilyList from '../Family/FamilyList'
import FamilyStore from '../Family/FamilyStore'

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <FamilyProvider>
        <Routes>
          <Route path="/" element={<Auxilio />} />
          <Route path="/familia" element={<FamilyList />} />
          <Route path="/familia/store" element={<FamilyStore />} />
        </Routes>
      </FamilyProvider>
    </section>
  )
}

export default User
