// Importing ClipLoader component from the react-spinners library 
// to render a clip-style loading spinner
import ClipLoader from 'react-spinners/ClipLoader';

// 'override' component
const override = {
  display: 'block',
  margin: '100px auto',
};

// 'Spinner' component recieves 'loading' prop to display the loading spinner
const Spinner = ({ loading }) => {

  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;