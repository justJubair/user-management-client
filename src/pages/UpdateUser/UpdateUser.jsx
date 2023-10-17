import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UpdateUser = () => {
    const loadedUser = useLoaderData()
   
    const [gender, setGender] = useState(null)
    const [role, setRole] = useState(null)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, gender, role, password}
        fetch(`https://user-management-server-7wbmovk4y-jubair-ahmeds-projects.vercel.app/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user) 
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data)
            form.reset()
            if(data.modifiedCount>0){
                Swal.fire(
                    'Good job!',
                    'User updated successfully!',
                    'success'
                  )
            }
        })
      };

    const handleGender = (e) => {
        setGender(e.target.value)
      };
      const handleRole = e=>{
        setRole(e.target.value)
      }
    
  return (
    <div>
    <Link to="/" className="btn btn-primary m-4">
      Users
    </Link>

    <div className="w-full max-w-3xl mx-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleUpdate} className="space-y-6" action="#">
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
          Update user
        </h5>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={loadedUser.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="eg: john doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={loadedUser.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="gender" className="text-gray-500">
            Gender
          </label>
          <div className="flex items-center gap-3">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="radio-1"
              value={"male"}
              onChange={handleGender}
              className="radio"
              
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="radio-1"
              value={"female"}
              onChange={handleGender}
              className="radio"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <label htmlFor="gender" className="text-gray-500">
            Role
          </label>
          <div className="flex items-center gap-3">
            <label htmlFor="male">Admin</label>
            <input
              type="radio"
              name="radio-2"
              value={"admin"}
              onChange={handleRole}
              className="radio"
              
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="female">Moderator</label>
            <input
              type="radio"
              name="radio-2"
              value={"moderator"}
              onChange={handleRole}
              className="radio"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={loadedUser.password}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser
