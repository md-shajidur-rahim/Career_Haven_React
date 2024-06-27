// Importing ClipLoader component from the react-spinners library that renders a clip-style loading spinner
import ClipLoader from 'react-spinners/ClipLoader';

// override component
const override = {
  display: 'block',
  margin: '100px auto',
};

// Spinner component recieves loading as prop
// To display a loading spinner
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