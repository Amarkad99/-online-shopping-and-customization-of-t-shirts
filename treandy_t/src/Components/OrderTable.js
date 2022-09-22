import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../components/useTable";
import React, { useEffect, useState,useReducer } from 'react'
import Controls from "../components/controls/Controls";
import { AirlineSeatFlatAngled, EditOutlined, Search } from "@material-ui/icons";
import PageHeader from "../components/PageHeader"
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add'
import Popup from "../components/Popup";
import Products from "./Products"; 
import ProductForm from "./ProductForm";
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'; 
import Notification from "../components/Notification"
import StatusChange from "../ProjectComponents/StatusChange"



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


export default function OrderTable() 
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
    getDeliveryDetails();
},[])

useEffect(()=>{
    getDeliveryDetails();
},[key])


const getDeliveryDetails=async()=>{
    
    let result=await fetch("http://localhost:8080/Order/findall");
    result = await result.json();
    console.warn("Result=",result);
    setRecords(result);
}

return(
<>
<PageHeader
        title="Order DashBoard"
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
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary">
                                            <EditOutlinedIcon fontSize="small"
                                            onClick={()=>{ setOpenPopup(true)}}></EditOutlinedIcon>
                                            
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
                   <StatusChange></StatusChange>

            </Popup>
           

           
            
        
</>)

}
