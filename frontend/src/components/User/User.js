import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import { FamilyProvider } from "../../context/FamilyContext";
import Family from "../Family/Family";
import FamilyStore from "../Family/FamilyStore";
import FamilyDelete from "../Family/FamilyDelete";
import FamilyView from "../Family/FamilyView";
import Auxilio from "../Auxilio/Auxilio";
import Integrant from "../Integrant/Integrant";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Auxilio />} />
        <Route path="/integrant" element={<Integrant />} />
      </Routes>
      <FamilyProvider>
        <Routes>
          <Route path="/family" element={<Family />} />
          <Route path="/family/store" element={<FamilyStore />} />
          <Route path="/family/remove" element={<FamilyDelete />} />
          <Route path="/family/update" element={<FamilyView />} />
        </Routes>
      </FamilyProvider>
    </section>
  );
};

export default User;
