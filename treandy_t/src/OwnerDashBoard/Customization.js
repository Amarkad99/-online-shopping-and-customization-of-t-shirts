import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Components/useTable";
import React, { useEffect, useState,useReducer } from 'react'
import Controls from "../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import PageHeader from "../Components/PageHeader"
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add'
import Popup from "../Components/Popup";
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'; 
import Notification from "../Components/Notification"
import * as ProductService from '../services/ProductServices'
import ConfirmDialog from '../Components/ConfirmDialog';
import * as OrderService from '../services/OrderService'



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
    { id: 'front_image_to_insert;', label: 'front_image_to_insert;' },
    { id: ' front_upper_text', label: ' front_upper_text' },
    { id: 'front_lower_text', label: 'front_lower_text'},
    { id: 'text_size', label: 'text_size' },
    { id: 't_shirt_color', label: 't_shirt_color' }, 
    { id: 'text_color', label: 'text_color' }, 
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
                return items.filter(x => x.text_size==target.value)
        }
    })
}


useEffect(()=>{
   
    getAllOrderDetails();
},[])

const getAllOrderDetails=async()=>
{
    let res= await OrderService.getAllCustomOrderDetails(productid)
    console.log(res);
    setRecords(res);
    console.log(records);
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
                                <TableCell><img src={item.front_image_to_insert} id="img" height="50" width="50"/></TableCell>
                                    <TableCell>{item.front_upper_text}</TableCell>
                                    <TableCell>{item.front_lower_text}</TableCell>
                                    <TableCell>{item.text_size}</TableCell>
                                    <TableCell>{item.t_shirt_color}</TableCell>
                                    <TableCell>{item.text_color}</TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>)
                                )     
                                
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        
            
        
</>)

}
