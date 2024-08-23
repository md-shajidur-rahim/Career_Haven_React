// Importing functions and components from React Router DOM
// To define and manage the app's routing
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Importing the layout
import MainLayout from './layouts/MainLayout';

// Importing all page components
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import AboutPage from './pages/AboutPage';

// 'App' Root Component defines the routing structures and includes asynchronous functions 
// For handling API requests for managing jobs using CRUD operations
const App = () => {

  // 'addJob' function to add new job
  const addJob = async (newJob) => {
    // Sends a 'POST' request to add a new job which converts the 'newJob' object to a 'JSON' string 
    // and sends it to the server endpoint = /api/jobs 
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // 'deleteJob' function to delete job
  const deleteJob = async (id) => {
  // Sends a 'DELETE' request to remove a job by its 'id' 
  // The server endpoint = /api/jobs/{id}
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // 'updateJob' function to update job
  const updateJob = async (job) => {
    // Sends a 'PUT' request to update an existing job. The job's data is serialized to 'JSON' 
    // and sent to the server endpoint = /api/jobs/{job.id} 
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  // 'router' component to define the routes and their respective components
  const router = createBrowserRouter(
    createRoutesFromElements(

      // Root route which uses 'MainLayout' as the wrapper component for all nested routes
      <Route path="/" element={<MainLayout />}>

        {/* Index route renders 'HomePage' when the user visits the root path */}
        <Route index element={<HomePage />} />

        {/* Renders 'JobsPage' when the user navigates to /jobs */}
        <Route path="/jobs" element={<JobsPage />} />

        {/* Renders 'AddJobPage' when the user navigates to /add-job  */}
        {/* The 'addJobSubmit' prop is passed to handle job submission */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        {/* Renders 'EditJobPage' when the user navigates to /edit-job/{id} */}
        {/* The 'updateJobSubmit' prop is passed to handle job updates, and 
        the 'jobLoader' is used to fetch the job data for the given 'id' before rendering the page  */}
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        {/* Renders 'JobPage' when the user navigates to /jobs/{id} */}
        {/* The 'deleteJob' function is passed to handle job deletion, and 'jobLoader' preloads the job data  */}
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        {/* Renders 'AboutPage' when the user navigates to /about */}
        <Route path="/about" element={<AboutPage />} />

        {/* Renders 'NotFoundPage' for any undefined route */}
        <Route path="*" element={<NotFoundPage />} />
        
      </Route>
    )
  );

  // To enable navigation between different routes
  return <RouterProvider router={router} />;
};

export default App;