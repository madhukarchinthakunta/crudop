import React from "react";
import { button, Table } from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Employees from "./Employees";
import { Button } from "react-bootstrap/lib/InputGroup";

function Home() {
    return (
        <>
            <div style={{ margin: "10rem" }}>
                <Table border="1" striped bordered hover size='sm'>
                    <thead>
                        <tr>

                            <th> 
                                Name
                                </th>
                            <th>Age</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Employees.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                    <Button onClick={()=>alert(item.id)} className="Button-edit">EDIT </Button><nbsp></nbsp>
                                        <Button onClick={()=>alert(item.id)} className="Button-delete">DELETE</Button>
                                    </td>


                                </tr>
                            )
                        })}



                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Home
