// Card functional component takes childrena and bg as props
const Card = ({ children, bg = "bg-gray-100" }) => {
  
  // To render al elements or components inside card
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>
    {children}
  </div>;
};

export default Card;