import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  
  return (
    <div>
      <h1>Oops ! An Eroor Occured</h1>
    <NavLink to='/'>Back To Home</NavLink>
    </div>
  );
};

export default ErrorPage;
