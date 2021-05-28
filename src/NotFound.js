import { Link } from "react-router-dom"

const NotFound = () => {
   return ( 
      <div className="not-found">
         <h2>Sorry!</h2>
         <p>Looks like this page no longer exists.</p>
         <Link to="/">Go home</Link>
      </div>
    );
}
 
export default NotFound;