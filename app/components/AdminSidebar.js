import Link from "next/link";
import React from "react";

const AdminSidebar = ({selectedCriteria, setSelectedCriteria, setDate}) => {
    const handleSelectedCriteria = (event) => {
        const criteriaId = event.target.id;
        if (event.target.checked) {
            setSelectedCriteria([...selectedCriteria, criteriaId]);
        } else {
            setSelectedCriteria(selectedCriteria.filter((id) => id !== criteriaId));
        }
    };

    const handleDateChange = (event) => {
        const date = event.target.value
            .split("-")
            .reverse()
            .map((str) => parseInt(str, 10).toString())
            .join("/");
        setDate(date);
    };

    return (
        <div className="flex flex-col ">
            <label htmlFor="pit">Pit</label>
            <input onChange={handleSelectedCriteria} type="checkbox" id="pit" />

            <label htmlFor="flood">Flood</label>
            <input onChange={handleSelectedCriteria} type="checkbox" id="flood" />

            <label htmlFor="Date">Date</label>
            <input onChange={handleDateChange} type="date" id="Date" />

        </div>
    );
};

export default AdminSidebar;
