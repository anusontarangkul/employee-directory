import React from 'react';
import Ascend from "../Ascend";
import Descend from "../Descend"
import "./style.css";


function Employees({ employeeList, setEmployee }) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" >Name&nbsp;
                        <span onClick={() => setEmployee({ type: "ascend" })}><Ascend /></span>
                            <span onClick={() => setEmployee({ type: "descend" })}><Descend /></span>

                        </th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(employee => <tr key={employee.id}>
                        <td>
                            <img src={employee.image} />
                        </td>
                        <td className="info">{employee.name}</td>
                        <td className="info">{employee.phone}</td>
                        <td className="info">{employee.email}</td>
                        <td className="info">{employee.DOB}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>









        // <div className="container container-style">
        //     <div className="row row-style container-style">
        //         <div className="col col-title">
        //             <p>Image</p>
        //             {props.employeeList.map(employee => (
        //                 <img src={employee.image} className="list-group-item"
        //                 />
        //             ))}
        //         </div>
        //         <div className="col col-title">
        //             <p>Name</p>
        //             {props.employeeList.map(employee => (
        //                 <li className="list-group-item">
        //                     {employee.name}
        //                 </li>
        //             ))}
        //         </div>
        //         <div className="col col-title">
        //             <p>Phone</p>
        //             {props.employeeList.map(employee => (
        //                 <li className="list-group-item">
        //                     {employee.phone}
        //                 </li>
        //             ))}
        //         </div>
        //         <div className="col col-title">
        //             <p>Email</p>
        //             {props.employeeList.map(employee => (
        //                 <li className="list-group-item">
        //                     {employee.email}
        //                 </li>
        //             ))}
        //         </div>
        //         <div className="col col-title">
        //             <p>DOB</p>
        //             {props.employeeList.map(employee => (
        //                 <li className="list-group-item">
        //                     {employee.DOB}
        //                 </li>
        //             ))}
        //         </div>
        //     </div>
        //     <div className="employee-body">

        //     </div>
        // </div>
    )
}

export default Employees;

