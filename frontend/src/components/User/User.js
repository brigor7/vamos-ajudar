import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route } from 'react-router-dom'
import Auxilio from '../Auxilio/Auxilio'
import { FamilyProvider } from '../../context/FamilyContext'
import FamilyList from '../Family/FamilyList'
import FamilyStore from '../Family/FamilyStore'
import FamilyDelete from '../Family/FamilyDelete'
import FamilyView from '../Family/FamilyView'

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <FamilyProvider>
        <Routes>
          <Route path="/" element={<Auxilio />} />
          <Route path="/family" element={<FamilyList />} />
          <Route path="/family/store" element={<FamilyStore />} />
          <Route path="/family/remove" element={<FamilyDelete />} />
          <Route path="/family/update" element={<FamilyView />} />
        </Routes>
      </FamilyProvider>
    </section>
  )
}

export default User
