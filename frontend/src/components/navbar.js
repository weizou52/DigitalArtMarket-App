import { useHistory } from 'react-router-dom';
import './navbar.css'
import logo from './logo3.png'
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ()=>{
    const history = useHistory()
    return (
        <div className="navbar">
            <Link to="/">
            <div className="n-left" style={{fontSize:'1.3rem'}}>
                <img src={logo} className='n-logo'/>
                Auctions
            </div>
            </Link>
            
            <div className="n-middle">
            <input type="text" placeholder='search object' 
 className='n-input'/>
            <div className='n-link n-searchbtn'>Search</div>
            </div>
            <div className="n-right" style={{fontSize:'1.1rem'}}>
                <ul>
                    <li>
                        <Link to='/post' className='n-link'>Post</Link>
                    </li>
                    <li>
                        <Link to='/login' className='n-link'>Login</Link>
                    </li>
                </ul>
                       
            </div>
        </div>
    )
}

export default Navbar;