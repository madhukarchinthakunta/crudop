import React from 'react'

function Table(props) {
    return (
        <table className='table' >
            <thead>
                
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                       
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                
            </thead>
            <tbody>
                {
                    props.user.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className='btn btn-primary m-1' onClick={()=>{props.edituser(item)}}>Edit</button>
                                    <button className='btn btn-danger m-1'onClick={()=>{props.deleteuser(item.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>
        


    )
}

export default Table
