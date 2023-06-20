import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Table from './Table';
import Form from './Form';
import { getData, deleteData, postData,putData } from './api'


function App() {
  const [user, setusers] = useState([])
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [intialForm, setIntilalForm] = useState({
    firstName: '',
    age: '',
    gender: '',
    email: '',
    phone: ''
  })
  useEffect(() => {
    getProducts()
  }, [])

  let getProducts = async () => {
    let res = await getData()
    setusers(res.data)
  }
  let deleteuser = async (id) => {
    if (window.confirm("Are you You Wanted to Delete The User?")) {
      await deleteData(id)
      getProducts()
    }

  }
  let adduser = async (product) => {
let data={
  firstName:product.firstName ,
    age: product.age,
    gender: product.gender,
    email: product.email,
    phone: product.phone
}
    if(edit)
     await putData(intialForm.id, data)
     
    else
    await postData(data)
    getProducts()
    setOpen(false)
    
  }
  let edituser = async (data) => {
    setIntilalForm(data)
    setOpen(true)
    setEdit(true)

  }

  let showForm = () => {
    setOpen(true)
    setIntilalForm({
      firstName: '',
      age: '',
      gender: '',
      email: '',
      phone: ''
    })
  }
  let closeForm = () => {
    setOpen(false)
  }
  return (
    <div className="wrapper m-5 w-50">
      <h2 className="text-primary">crud op</h2>
      <button className="btn btn-primary" onClick={() => { showForm() }}>Add user</button>
      <Table
        user={user}
        deleteuser={deleteuser}
        edituser={edituser}

      ></Table>
      {open &&
        <Form
          closeForm={closeForm}
          data={intialForm}
          adduser={adduser}
          
        ></Form>
      }

    </div>
  );
}

export default App;
