import React, { useState } from 'react'

function Form(props) {
    const [user, setusers] = useState(props.data)
    const [send,setSend]=useState(false)
    const handleFormChange = (e, field) => {
        const { name, value } = e.target
        setusers({ ...user, [name]: value })
    }
    return (
        <div className='form-overlay'>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail">Name</label>
                    <input type="text" name="firstName" 
                    className="form-control mt-2" 
                    placeholder="Enter Name" 
                    value={user.firstName} onChange={handleFormChange}
                    
                    
                    />
                    {send && user.firstName==="" && <span className='text-danger'>Name is Required</span>}
                </div>
                <div class="form-group">
                    <label for="exampleInputAge">Age</label>
                    <input type="number" className="form-control mt-2" name="age" placeholder="Enter Age" value={user.age} onChange={handleFormChange} />
                    {send && user.age==="" && <span className='text-danger'>Age is Required</span>}
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <select className="form-control mt-2" name="gender" value={user.gender} onChange={handleFormChange}>
                        <option value={'male'}>Male</option>
                        <option value={'feamle'}>Female</option>
                        <option value={'other'}>Other</option>
                    </select>
                    {send && user.gender==="" && <span className='text-danger'>Gender is Required</span>}
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mt-2" name="email" placeholder="Enter email" value={user.email} onChange={handleFormChange} />
                    {send && user.email==="" && <span className='text-danger'>Email is Required</span>}
                </div>
                <div class="form-group">
                    <label for="exampleInputAge">Phone</label>
                    <input type="number" className="form-control mt-2" name="phone" placeholder="Enter Phone no" value={user.phone} onChange={handleFormChange} />
                    {send && user.phone==="" && <span className='text-danger'>phone no is Required</span>}

                </div>
                <button type="submit" className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault()
                        props.closeForm()
                    }}


                >Cancel</button>
                <button type="submit" className="btn btn-primary float-end" onClick={(e) => {
                    e.preventDefault()
                    setSend(true)
                    if(!!user.firstName && !!user.age && !!user.gender && !!user.email && !!user.phone ){
                    props.adduser(user)
                    }
                }}
                >Submit</button>
            </form>

        </div>
    )
}

export default Form
