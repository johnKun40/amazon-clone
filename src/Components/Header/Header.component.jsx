import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import './Header.style.css';



//import App from "../../App";

function Header({currentUser, posts}) {

    let history = useNavigate();

    

    return(
        <div className="header">
            <Link to={'/'}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon-logo" />
            </Link>

            <div className="header__search">
                <input type='text' className="header__searchInput"/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className="header__nav">
                {currentUser ? 
                <div className="navBar__option">
                    <span className="navBar__optionOne">{currentUser.displayName}</span>
                    <span className="navBar__optionTwo" onClick={() => auth.signOut()}>Sign Out</span>
                </div> :
                <Link to={'sign-page'} className="header__link">
                <div className="navBar__option">
                    <span className="navBar__optionOne">Hi,</span>
                    <span className="navBar__optionTwo">Sign In</span>
                </div>
                </Link> 
                }

                        
                
                <div className="navBar__option">
                    <span className="navBar__optionOne">Return</span>
                    <span className="navBar__optionTwo">& Order</span>
                </div>
                <div className="navBar__option">
                    <span className="navBar__optionOne">Fit</span>
                    <span className="navBar__optionTwo">Prime</span>
                </div>
                {

                <div className="navBar__option1" onClick={() => history(`/cart-page`)}>
                    <ShoppingCartOutlinedIcon className="header__cartIcon"/>
                    <span className="navBar__counter">{posts}</span>
                </div>

                }
            </div>
            
        </div>
    )
}

export default Header;