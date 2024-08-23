// Import all components for 'HomePage'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

// 'HomePage' Component to display all components
const HomePage = () => {
  
  return (
    <>
      <Hero />
      <HomeCards />
      {/* 'ishome' prop intialized to 'true' in 'JobListings' component */}
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;