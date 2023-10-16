import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Link to="/register" className="btn btn-primary m-4">New User</Link>
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr className="hover">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
       
      </tbody>
    </table>
  </div>
    </>
  )
}

export default Home
