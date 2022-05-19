import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from "react-router-dom";



export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to='/newUser'>
          <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="data:image/jpeg;base64,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" 
            alt="" className="userShowImg" />
          <div className="userShowTopTitle">
            <span className="userShowUsername">Isha Wonder</span>
            <span className="userShowUserTitle">Data Analyst</span>
          </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
         <div className="userShowInfo">
          <PermIdentityIcon className='userShowIcon'/>
          <span className="userShowInfoTitle">ishawonder77</span>
          </div>

          <div className="userShowInfo">
          <CalendarTodayIcon className='userShowIcon'/>
          <span className="userShowInfoTitle">16.12.2004</span>
          </div>

          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
          <PhoneAndroidIcon className='userShowIcon'/>
          <span className="userShowInfoTitle">+1 422 465 24</span>
          </div>

          <div className="userShowInfo">
          <MailOutlineIcon className='userShowIcon'/>
          <span className="userShowInfoTitle">ishawonder77@gmail.com</span>
          </div>

          <div className="userShowInfo">
          <LocationSearchingIcon className='userShowIcon'/>
          <span className="userShowInfoTitle">Anyigba | Kogi-State</span>
          </div>
         </div>
        </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input type="text" placeholder="Isha Wonder" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label>Email</label>
              <input type="text" placeholder="ishawonder77@gmail.com" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label>Phone</label>
              <input type="text" placeholder="+1 422 465 24" className="userUpdateInput" />
            </div>

            <div className="userUpdateItem">
              <label>Address</label>
              <input type="text" placeholder="Anyigba | Kogi-State" className="userUpdateInput" />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img className='userUpdateImg' src="data:image/jpeg;base64,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" alt=''/>
          <label htmlFor="file"><PublishIcon className='userUpdateIcon'/></label>
          <input type="file" id="file" style={{display:'none'}}/>
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
     </div>
    </div>
  )
}
