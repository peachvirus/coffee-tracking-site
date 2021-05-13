import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>A Coffee Tracker</h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: '#a76d7e',
                    borderRadius: '8px'
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#a76d7e',
                    borderRadius: '8px'
                }}>New Log</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;