"use client"
import React from 'react'

const AdminSidebar = () => {
    const [selectedCriteria, setSelectedCriteria] = React.useState([]);

    const handleSelectedCriteria = () => {
        setSelectedCriteria([...selectedCriteria, event.target.id])
        console.log(selectedCriteria)
    }
  return (
    <div className="flex flex-col ">
        <label for="criteria1">Criteria1</label>
        <input onChange={handleSelectedCriteria} type="checkbox" id="criteria1" />

        <label for="criteria2">Criteria2</label>
        <input onChange={handleSelectedCriteria} type="checkbox" id="criteria2" />

        <label for="criteria3">Criteria3</label>
        <input onChange={handleSelectedCriteria} type="checkbox" id="criteria3" />

        <label for="criteria4">Criteria4</label>
        <input onChange={handleSelectedCriteria} type="checkbox" id="criteria4" />

        <label for="criteria5">Criteria5</label>
        <input onChange={handleSelectedCriteria} type="checkbox" id="criteria5" />
    </div>
  )
}

export default AdminSidebar