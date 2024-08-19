// Importing 'NavLink' to create navigation links
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

// 'Navbar' component to allow users to navigate between different pages
const Navbar = () => {
  // 'linkClass' function takes 'isActive' prop and 
  // returns different class names based on whether the link is active or not
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

            {/* To display the logo image and app name */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Career Haven
              </span>
            </NavLink>

            {/* Navigation Links include Home, Jobs, Add Job, and About React */}
            <div className="md:ml-auto">
              <div className="flex space-x-2">

                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>

                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>

                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>

                <NavLink to="/about" className={linkClass}>
                  Learn React & JavaScript
                </NavLink>

              </div>
            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;