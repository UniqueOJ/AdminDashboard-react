import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem active">
          <LineStyleIcon className="sidebarIcon"/>
           Home
          </li>
          <li className="sidebarListItem">
          <TimelineIcon className="sidebarIcon" />
           Analytics
          </li>
          <li className="sidebarListItem">
          <TrendingUpIcon className="sidebarIcon"/>
           Sales
          </li>
          </ul>
           </div>
          </div>
  
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">

            <Link to= '/users' className="link">
          <li className="sidebarListItem">
          <PersonOutlineIcon/>
           Users
          </li>
          </Link>

           <Link to='/products' className="link">
          <li className="sidebarListItem">
          <Inventory2OutlinedIcon/>
           Products
          </li>
          </Link>

          <li className="sidebarListItem">
          <AttachMoneyOutlinedIcon/>
           Transactions
          </li>

          <li className="sidebarListItem">
          <BarChartOutlinedIcon/>
           Reports
          </li>
          
          </ul>
         </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
          <EmailOutlinedIcon/>
           Mail
          </li>
          <li className="sidebarListItem">
          <DynamicFeedOutlinedIcon />
           Feedback
          </li>
          <li className="sidebarListItem">
          <ChatBubbleOutlineOutlinedIcon/>
           Messages
          </li>
          </ul>
         </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
          <WorkOutlineOutlinedIcon/>
           Manage
          </li>
          <li className="sidebarListItem">
          <TimelineIcon/>
           Analytics
          </li>
          <li className="sidebarListItem">
          <ReportIcon/>
           Reports
          </li>
          </ul>
         </div>
       </div>
      </div>
     
    
    
  )
}
