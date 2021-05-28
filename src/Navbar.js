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

                {/* will work on this later */}
                
                {/*<Link to="/sign-up" style={{
                    color: "white",
                    backgroundColor: '#a76d7e',
                    borderRadius: '8px'
                }}>Sign Up</Link>
                <Link to="/sign-in" style={{
                    color: "white",
                    backgroundColor: '#a76d7e',
                    borderRadius: '8px'
                }}>Sign In</Link>
                <Link to="/sign-out" style={{
                    color: "white",
                    backgroundColor: '#a76d7e',
                    borderRadius: '8px'
                }}>Sign Out</Link>*/}

            </div>
        </nav>
     );
}
 
export default Navbar;