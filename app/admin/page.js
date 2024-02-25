"use client"
import React, { useEffect, useState } from "react"
import ListView from "../components/ListView"
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar"
import GoogleMaps from "../components/LocationPicker"
import EmployeeList from "../components/EmployeeList"
import { useSelector } from "react-redux"
import { getAllcomplaints } from "../services/operationUser/getAllComplaintAPI"
const AdminPage = () => {
  const user = useSelector((state) => state.auth.user)
  const [isListView, setIsListView] = useState(true)
  const [complaints, setComplaints] = useState([])
  const [employeeListView, setEmployeeListView] = useState(false)

  async function fetchComplaints() {
    console.log("User in admin page: ", user)
    const response = await getAllcomplaints(user?.token)
    console.log("Complaints Response: ", response)
    if (response?.success) {
      const data = response?.result
      setComplaints(data)
      console.log("Complaints: ", complaints)
    }
  }

  useEffect(() => {
    fetchComplaints()
  }, [])


  return (
    <div className="flex items-center justify-center gap-3 overflow-y-hidden bg-[#F5F7FD]">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-[79vw] h-screen flex flex-col items-center p-2 justify-evenly">
        <TopBar setIsListView={setIsListView} isListView={isListView} />
        {employeeListView ? <EmployeeList setEmployeeListView={setEmployeeListView}/> : isListView ? (
            <ListView complaintList={complaints} setEmployeeListView={setEmployeeListView}/>
          // <EmployeeList />
        ) : (
          <GoogleMaps isAdminPage={true} compplaintsData={complaints} setEmployeeListView={setEmployeeListView}/>
        )}
      </div>
    </div>
  )
}

export default AdminPage
