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
    { id: 'actions', label: 'Actions',disableSorting:'false' },
    
]

export default function ProductTable() 
{
    const classes = useStyles();
    const [recordForEdit, setRecordsForEdit] = useState(null);
    const [records, setRecords] = useState([]);
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup,setOpenPopup]=useState(false);
    const [title,setTitle]=useState("");
    const [flag,setFlag]=useState(false);
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''});
    const [key,setKey]=useState(0);
    const[confirmDialog,setConfirmDialog]=useState({isOpen:false,title:'',subtitlte:''});
    const [msg,setMsg]=useState("submitted successfully..")
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
    getproductDetails();
},[])

useEffect(()=>{
    getproductDetails();
},[key])
const getproductDetails=async()=>{
  
    var result= await ProductService.getAllProducts();
    console.log(result);
    setRecords(result);
    
    
}

const openInPopup=item=>{ 
    console.log(item.image_front);
    setRecordsForEdit(item)
    setOpenPopup(true)
    setMsg("Edited successfully..")
    setTitle("Edit Product");
   
}

const addorEditNotify=()=>{
    setOpenPopup(true)
    setTitle("Add Product")
    setMsg("submitted successfully..")
   
}

const addOrEdit=(values,resetForm,selectedFiles1,selectedFiles2,selectedFiles3,selectedFiles4)=>
{
    const bbd={
        "productid":values.productid,
          "price":values.price,
          "quantity":values.quantity,
          "color":values.color,
          "material":values.material,
          "sleeve":values.sleeve,
          "neck_type":values.neck_type,
          "size":values.size,
          "image_front":selectedFiles1,
          "image_back":selectedFiles2,
          "image_left":selectedFiles3,
          "image_right":selectedFiles4, 
          "iscustomizable":0
     }


 if(values.productid===''){
     ProductService.createProduct(bbd);
     
 }
 else
 {
   
     ProductService.updateProduct(bbd);
      
 }
    setOpenPopup(false);
    setKey(x=>x+1);
    resetForm();
    getproductDetails();
    setNotify({
        isOpen:true,
        message:msg,
        type:'success'
    })
}
const deleteRecord=(item)=>
{
    setConfirmDialog({...confirmDialog,isOpen:false})
    ProductService.deleteProduct(item);
    setKey(x=>x+1);
    setNotify({
        isOpen:true,
        message:"Deleted Successfully",
        type:'error'
    })
}

return(
<>
<PageHeader
        title="T-Shirt DashBoard"
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
                    <Controls.Button
                    text="Add new"
                    variant="outlined"
                    startIcon={<AddIcon/>}
                    className={classes.newButton}
                    onClick={()=>addorEditNotify()}
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
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary">
                                            <EditOutlinedIcon fontSize="small"
                                            onClick={()=>{  openInPopup(item);}}></EditOutlinedIcon>
                                            
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                        color="secondary">
                                            <CloseIcon fontsize="small" onClick={()=>{
                                                     
                                                setConfirmDialog({
                                                    isOpen:true,
                                                    title:'Are you sure to delete this record?',
                                                    subtitle:"You can't undo this operation",
                                                    onConfirm:()=>{deleteRecord(item)}
                                                })
                            
                                                }}
                                                ></CloseIcon>
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
                    <ProductForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}></ProductForm>

            </Popup>
            <Notification notify={notify}
            setNotify={setNotify}
           
            ></Notification>
            <ConfirmDialog confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}></ConfirmDialog>
           
            
        
</>)

}
