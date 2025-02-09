import React from 'react'
import './header.css';
import neflixLogo from '../../assets/images/neflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='outer-header-container'>
        <div className="container">
            <div className="header-left">
                <ul>
                    <li className='logo'><img src={neflixLogo} alt="" width='150'/></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyLists</li>
                    <li>Browse By Language</li>
                </ul>
            </div>
            <div className="header-right">
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;