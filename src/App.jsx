import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar.jsx";
import UserList from "./components/userlist.jsx";
import UserDetails from "./components/userDetails.jsx";
import Company from "./components/company.jsx";
import Companydetails from "./components/companydetails.jsx";
import Jobs from "./components/jobs.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ">
        <Routes>
          <Route path="/" element={<UserList />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/users details" element={<UserDetails />} />

          <Route path="/companies" element={<Company />} />
          <Route path="/companies details" element={<Companydetails />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Jobs />} />
          <Route path="/notifications" element={<Jobs
            />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
