import "./userList.css";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../../dummyData";
import {Link} from 'react-router-dom';

export default function UserList() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200,  renderCell: (params)=> {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avater} alt="" />
          {params.row.username}
        </div>
      ) } },
    { field: 'email', headerName: 'Email', width: 130 },
    {field: 'status', headerName: 'Status', width: 120 },
    {field: 'transaction', headerName: 'Transaction Volume', width: 160,},
    {field: 'action', headerName: 'Action', width: 150, renderCell: (params)=> {
      return (
        <>
        <Link to= {"/user/"+ params.row.id}>
        <button className="UserListEdit">Edit</button>
        </Link>
        <DeleteOutlineIcon className="UserListDelete"/> 
        </>
             ) 
           } 
         },
       ];
    
  return (
    <div className="userList">
      <DataGrid
        rows={userRows} 
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
