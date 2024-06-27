import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import AboutPage from './pages/AboutPage';

// App Component defines asynchronous functions addJob, deleteJob, and updateJob to handle API requests 
// for adding, deleting, and updating jobs
const App = () => {

  // To add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // To delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // To update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  // To define the routes and their respective components
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<MainLayout />}>

        {/* To HomePage */}
        <Route index element={<HomePage />} />

        {/* To JobsPage */}
        <Route path="/jobs" element={<JobsPage />} />

        {/* To AddJobPage */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        {/* To EditJobPage */}
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        {/* To deleteJob */}
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        {/* To JobsPage */}
        <Route path="/about" element={<AboutPage />} />

        {/* To NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;