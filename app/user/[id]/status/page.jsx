"use client"
import ListView from "@/app/components/ListView"
import Sidebar from "@/app/components/Sidebar"
import TopBar from "@/app/components/TopBar"
import React, { useState, useEffect } from "react"

const UserComplaintStatusPage = () => {
  const [complaintList, setComplaintList] = useState([])
  useEffect(() => {
    getAllComplaints(token).then((response) => {
      console.log(response)
      setComplaintList(response.result)
    })
  }, [])
  return (
    <div className="flex items-center justify-center gap-3 overflow-y-hidden bg-[#F5F7FD]">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-[79vw] h-screen flex flex-col items-center p-2 justify-evenly">
        <TopBar />
        <ListView complaintList={complaintList} />
      </div>
    </div>
  )
}

export default UserComplaintStatusPage
