"use client";
import React, { useState } from "react";
import ListView from "../components/ListView";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import GoogleMaps from "../components/LocationPicker";
import EmployeeList from "../components/EmployeeList";

const AdminPage = () => {
  const [isListView, setIsListView] = useState(true);

  return (
    <div className="flex items-center justify-center gap-3 overflow-y-hidden bg-[#F5F7FD]">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-[79vw] h-screen flex flex-col items-center p-2 justify-evenly">
        <TopBar setIsListView={setIsListView} isListView={isListView} />
        {isListView ? (
          //   <ListView />
          <EmployeeList />
        ) : (
          <GoogleMaps
            isAdminPage={true}
            compplaintsData={[
              // This is dummy data, replace it with the actual data
              { lat: 40.766537, lng: -73.941052 },
              { lat: 40.743053, lng: -73.972093 },
              { lat: 40.789975, lng: -73.926267 },
              { lat: 40.720212, lng: -73.991235 },
              { lat: 40.803401, lng: -73.900524 },
              { lat: 40.730678, lng: -74.005612 },
              { lat: 40.774294, lng: -73.963849 },
              { lat: 40.715725, lng: -73.935617 },
              { lat: 40.797127, lng: -73.987421 },
              { lat: 40.752949, lng: -73.894895 },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
