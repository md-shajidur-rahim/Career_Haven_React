// 'Card' functional component takes 'children' and 'bg' as props
const Card = ({ children, bg = "bg-gray-100" }) => {
  
  // Render all elements or components inside 'Card'
  // Make dynamic by using template literals
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>
    {/* Passing 'children' */}
    {children}
  </div>;
};

export default Card;