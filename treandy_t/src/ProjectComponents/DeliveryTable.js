import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Components/useTable";
import React, { useEffect, useState,useReducer } from 'react'
import Controls from "../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import PageHeader from "../Components/PageHeader"
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add'
import Popup from "../Components/Popup";
import Products from "./Products"; 
import ProductForm from "./ProductForm";
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'; 
import Notification from "../Components/Notification"
import StatusChange from "../ProjectComponents/StatusChange"
import * as OrderService from "../services/OrderService"



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton:{
        position:'absolute',
        right:'10px',
        size:'small'
    }
}))
const headCells = [
    { id: 'first_name', label: 'First Name' },
    { id: 'Last_name', label: 'Last Name' },
    { id: 'Mobile', label: 'Mobile Number' },
    { id: 'Address', label: 'Address'},
    { id: 'Streeet', label: 'Street' },
    { id: 'City', label: 'City' }, 
    { id: 'Pincode', label: 'PinCode' },
    { id: 'Status', label: 'Status' },
    { id: 'Action', label: 'Action' }

]


export default function DeliveryTable() 
{
    const classes = useStyles();
    const [recordForEdit, setRecordsForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup,setOpenPopup]=useState(false);
    const [title,setTitle]=useState("Change Status");
    const [flag,setFlag]=useState(false);
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''});
    const [key,setKey]=useState(0);
   

const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
} = useTable(records, headCells, filterFn);
 
const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.city.toLowerCase().includes(target.value))
        }
    })
}

useEffect(()=>{
    getAllDeliveryDetails();
},[])

useEffect(()=>{
    getAllDeliveryDetails();
},[key])

const openInPopup=(item)=>
{
    console.log(item.status);
    setRecordsForEdit(item)
    setOpenPopup(true)
}
const getAllDeliveryDetails=async()=>
{
    var result= await OrderService.getDeliveryDetails();
    console.log(result);
    setRecords(result);
}

return(
<>
<PageHeader
        title="Delivery DashBoard"
        subTitle=""
       
    />
<Paper className={classes.pageContent}>
            
                <Toolbar>
                    <Controls.Input
                        label="Search"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    
                </Toolbar>
            <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                           
                           
                           recordsAfterPagingAndSorting().map(item=>(
                            <TableRow key={item.order_id}>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                    <TableCell>{item.mobile_number}</TableCell>
                                    <TableCell>{item.address_line}</TableCell>
                                    <TableCell>{item.street}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.pincode}</TableCell>
                                    <TableCell>{OrderService.getStatusByID(item.status)}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary">
                                            <EditOutlinedIcon fontSize="small"
                                            onClick={()=>{ openInPopup(item)}}></EditOutlinedIcon>
                                            
                                        </Controls.ActionButton>
                                        </TableCell>
                                </TableRow>)
                                )       
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                 title={title}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup }
                    setFlag={flag} 
                   
                   >
                   <StatusChange records={records} setRecords={setRecords} recordForEdit={recordForEdit} setOpenPopup={setOpenPopup }></StatusChange>

            </Popup>
           

           
            
        
</>)

}
