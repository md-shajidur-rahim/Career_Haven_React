import { useState } from 'react';
// Importing react icon for map
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 'JobListing' component which takes 'job' prop to display the job
const JobListing = ({ job }) => {
  // To control whether the full job description is shown
  const [showFullDescription, setShowFullDescription] = useState(false);

  // To toggle 'showFullDescription'; tranculate 0 to 90
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">

        {/* To display job type, title, truncuated/full description */}
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-5">{description}</div>

        {/* To toggle job description length; displays either more or less based on the current state */}
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        {/* To display job salary by year */}
        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          
          {/* To display job location with a map marker icon */}
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>

          {/* To navigate to the detailed job page using the job's ID */}
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default JobListing;