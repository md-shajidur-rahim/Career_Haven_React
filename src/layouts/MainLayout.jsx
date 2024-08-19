// 'Outlet' placeholder component used for routing which renders 
// the matched child route component within the layout
import { Outlet } from 'react-router-dom';

// 'ToastContainer' component to render the toast messages, and it handles their positioning, styling, and behavior 
import { ToastContainer } from 'react-toastify';

// Importing 'react-toastify' library to display toast notifications (pop-up messages) and default CSS
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';

// 'MainLayout' component contais all elements
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;