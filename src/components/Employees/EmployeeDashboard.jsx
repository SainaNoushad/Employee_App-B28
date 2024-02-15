import React from "react";
export default function EmployeeDashboard(){
    return(
        <div>
            <h2>Employee Dashboard</h2>
            <table className="employee-table-container">
                <thead>
                   <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Action</th>
                   </tr> 
                </thead>
                <tbody>
                <tr>
                <td>Entri</td>
                <td>entri.com</td>
                <td>Tutor</td>
                <td>
                    <button className="button-container">Edit</button>
                    <button className="button-container">Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
        <div><button onClick={handleAdd}>Add</button> 
        <button>Save</button></div>
    </div>
 )
 }