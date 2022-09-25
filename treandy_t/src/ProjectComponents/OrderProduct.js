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
import * as ProductService from '../services/ProductServices'
import ConfirmDialog from '../Components/ConfirmDialog';
import * as OrderService from '../services/OrderService'
import Customization from '../OwnerDashBoard/Customization';


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
        right:'10px'
    }
}))
const headCells = [
    { id: 'productid', label: 'Product id' },
    { id: 'color', label: 'Color' },
    { id: 'material', label: 'Material' },
    { id: 'Price', label: 'Price'},
    { id: 'Quantity', label: 'Quantity' },
    { id: 'Size', label: 'Size' }, 
    { id: 'neck_type', label: 'Neck-type' }, 
    { id: 'Sleeve_type', label: 'Sleeve-type' },
    { id: 'Cusomizable', label: 'Customizable' },
     { id: 'Image', label: 'Image' },
    
]

export default function OrderProduct(props) 
{
    const classes = useStyles();
    const [recordForEdit, setRecordsForEdit] = useState(null);
    const [records, setRecords] = useState([]);
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup,setOpenPopup]=useState(false);
    const [title,setTitle]=useState("");
    const [flag,setFlag]=useState(false);
    const[orderid,setOrderid]=useState(props);
    const[productid,setproductid]=useState(props);
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
                return items.filter(x => x.price==target.value)
        }
    })
}


useEffect(()=>{
   
    getAllOrderDetails();
},[])

const getAllOrderDetails=async()=>
{
    var result= await OrderService.getAllProductOrderDetails(orderid)
    console.log(result);
    setRecords(result);
}
const openCustomOrderTable=async(productid)=>
{
    setproductid(productid);
    setOpenPopup(true);
   
}
return(
<>
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
                          
                            <TableRow key={item.productid}>
                                <TableCell>{item.productid}</TableCell>
                                <TableCell>{ProductService.getColorByID(item.color)}</TableCell>
                                <TableCell>{ProductService.getMaterialByID(item.material)}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{ProductService.getSizeByID(item.size)}</TableCell>
                                    <TableCell>{ProductService.getNeckTypeByID(item.neck_type)}</TableCell>
                                    <TableCell>{ProductService.getSleeveByID(item.sleeve)}</TableCell>
                                    <TableCell>{item.iscustomizable}<Controls.ActionButton
                                        color="primary">
                                            <EditOutlinedIcon fontSize="small"
                                            onClick={()=>{  openCustomOrderTable(item.productid)}}></EditOutlinedIcon> 
                                        </Controls.ActionButton>
                                        </TableCell>
                                    <TableCell><img src={item.image_front} id="img" height="50" width="50"/></TableCell>
                                    <TableCell>
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

                        <Customization  productid={productid} ></Customization>
            </Popup>
        
            
        
</>)

}
