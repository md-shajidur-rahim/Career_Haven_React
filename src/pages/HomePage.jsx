import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

// HomePage Component to contain 4 components
const HomePage = () => {
  
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;