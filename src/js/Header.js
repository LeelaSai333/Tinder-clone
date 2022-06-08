import React from 'react';
import "../css/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link , useNavigate} from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className='header'>
      { backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header_icon' />
        </IconButton>    
      ) : (
        <IconButton>
          <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>  
      )}
       
       <Link to="/">
       <img 
           className="header_logo"
           src="https://spng.pngfind.com/pngs/s/13-131073_this-post-is-a-part-of-tinder-logo.png"
           alt="tinder-logo" 
       /> 
       </Link>
       
       <Link to="/chat">
       <IconButton>
       <ForumIcon fontSize="large" className="header_icon"/>
       </IconButton>
       </Link>
       
    </div>
  )
}

export default Header