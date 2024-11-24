import { FaAd, FaHome, FaList } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex md:flex-row flex-col">
      {/* dashboard side bar */}
      <div className="md:w-64 md:min-h-screen min-h-64 bg-slate-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/viewProperty">
              <FaList></FaList>
              View a list of properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addNewProperty">
              <FaAd></FaAd>
              Add a new property
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
