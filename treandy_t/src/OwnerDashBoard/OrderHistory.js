import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Components/useTable";
import React, { useEffect, useState,useReducer } from 'react'
import Controls from "../Components/controls/Controls";
import { AirlineSeatFlatAngled, EditOutlined, Search } from "@material-ui/icons";
import PageHeader from "../Components/PageHeader"
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add'
import Popup from "../Components/Popup";
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'; 
import Notification from "../Components/Notification"
import StatusChange from "../ProjectComponents/StatusChange";
import * as OrderService from "../services/OrderService"
import OrderProduct from '../ProjectComponents/OrderProduct';




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
    { id: 'Customer Name', label: 'Customer  Name' },
    { id: 'Order Status', label: 'Order Status' },
    { id: 'Total Amount', label: 'Total Amount' },
    { id: 'Shipping Address', label: 'Shipping Address'},
    { id: 'Order Date', label: 'Order Date' }, 
    { id: 'Order Status Changed DateTime', label: 'Order Status Changed DateTime' },
    { id: 'Action', label: 'Action' }

]


export default function OrderTable() 
{
    const classes = useStyles();
    const [recordForEdit, setRecordsForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup,setOpenPopup]=useState(false);
    const [title,setTitle]=useState("Products");
    const [flag,setFlag]=useState(false);
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''});
    const [key,setKey]=useState(0);
    let [orderid,setOrderid]=useState();
    const [productrecords, setProductRecords] = useState([])
   

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
                return items.filter(x => x.totalprice==target.value)
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
    
    let result=await fetch("http://localhost:8080/order/getAllOrderHistoryDetails");
    result = await result.json();
    setRecords(result);
    console.log("Order:",result);

}

const openProductOrderTable=async(orderid)=>
{
    setOrderid(orderid);
    setOpenPopup(true);
   
}

return(
<>
<PageHeader
        title="Order History DashBoard"
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
                            <TableRow key={item.orderid}>
                                <TableCell>{item.userid.first_name}</TableCell>
                                <TableCell>{OrderService.getStatusByID(item.status)}</TableCell>
                                    <TableCell>{item.totalprice}</TableCell>
                                    <TableCell>{item.address.address_line},{item.address.street},{item.address.city},{item.address.pincode}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>{item.orderdate}</TableCell>
                                    <TableCell>{item.orderStatusChangedDate}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary">
                                            <EditOutlinedIcon fontSize="small"
                                            onClick={()=>{  openProductOrderTable(item.orderid)}}></EditOutlinedIcon> 
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
                        <OrderProduct  orderid={orderid} ></OrderProduct>
            </Popup>
           

           
            
        
</>)

}
