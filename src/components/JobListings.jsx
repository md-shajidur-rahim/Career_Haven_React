// To manage state and handle effects
import { useState, useEffect } from 'react';
import JobListing from './JobListing';

// Importing spinner component
import Spinner from './Spinner';

// 'JobListings' component accepts 'isHome' prop intialized to 'false' to display all jobs
const JobListings = ({ isHome = false }) => {

  // 'jobs' array to store the fetched job listings
  const [jobs, setJobs] = useState([]);
  // A boolean to track whether data is being loaded, initialized to true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // To fetch job data from the API
    const fetchJobs = async () => {
      // 'apiURL' changes based on the 'isHome' prop
      // If 'isHome' = true, it limits the number of jobs to 3
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

      try {
        // The fetched data is stored in the 'jobs' state
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      }
      
      // Errors during the fetch are logged to the console
       catch (error) {
        console.log("Error fetching data", error);
      } 
      // loading is set to false after fetching is complete
      finally {
        setLoading(false);
      }
    };

    // To fetch the jobs
    fetchJobs(isHome); 
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">

        {/* The title changes based on the 'isHome' prop */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {/* if isHome = true --> "Recent Jobs" render, else "Browse Jobs" render  */}
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {/* If loading is true, the Spinner component is displayed */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          // Once loading is complete, the job listings are displayed in a grid layout
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Each 'JobListing' component contains 'job.id' as key prop and 'job' (job data) */}
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default JobListings;