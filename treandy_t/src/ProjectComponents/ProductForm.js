import React, { useState, useEffect } from 'react'
import { Grid,makeStyles,Typography } from '@material-ui/core';
import Controls from "../Components/controls/Controls";
import { useForm, Form,Reset } from '../Components/useForm';
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as ProductService from '../services/ProductServices'
import { Colorize } from '@material-ui/icons';
import axios from 'axios';
import { upload } from '@testing-library/user-event/dist/upload';
import PageHeader from "../Components/PageHeader"
import ActionButton from '../Components/controls/ActionButton';
import Popup from "../Components/Popup";
import ProductTable from './ProductTable';
import FormData from 'form-data';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "secondary"
    },
  }));

  const initialFValues = {
    productid: '',
    color: '',
    material: '',
    size: '',
    sleeve: '',
    neck_type: '',
    price: '',
    quantity:''  ,
    image_front:'',
    image_back:'',
    image_left:'',
    image_right:'',
    
}
  

export default function ProductForm(props)
{
    const [selectedFiles1,setSelectedFiles1]=useState();
    const [selectedFiles2,setSelectedFiles2]=useState();
    const [selectedFiles3,setSelectedFiles3]=useState();
    const [selectedFiles4,setSelectedFiles4]=useState();
    const {addOrEdit, recordForEdit,flag,resetFormFields}=props;
   
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        /* if ('productid' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
       if ('color' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
        if ('size' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
        if ('quantity' in fieldValues)
             temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
        if ('price' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
        if ('neck_type' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."
        if ('material' in fieldValues)
            temp.id = fieldValues.id.length != 0 ? "" : "This field is required."*/
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate);
 //================================================================================================   
    

 const fileSelectedHandler=e=>{

        const reader1 = new FileReader();
    reader1.onload = () =>{
       setSelectedFiles1(reader1.result)
    }
    reader1.readAsDataURL(e.target.files[0])
    console.log(selectedFiles1);



    const reader2 = new FileReader();
    reader2.onload = () =>{
       setSelectedFiles2(reader2.result)
    }
    reader2.readAsDataURL(e.target.files[1])
    console.log(selectedFiles2);

    const reader3 = new FileReader();
    reader3.onload = () =>{
       setSelectedFiles3(reader3.result)
        
    }
    reader3.readAsDataURL(e.target.files[2])
    console.log(selectedFiles3);


    const reader4 = new FileReader();
    reader4.onload = () =>{
       setSelectedFiles4(reader4.result)
     
    }
    reader4.readAsDataURL(e.target.files[3])
    console.log(selectedFiles4);

    document.getElementById('image_stack1').style.display = 'block';
    document.getElementById('image_stack2').style.display = 'block';

    }
    useEffect(()=>{
        document.getElementById('image_stack1').style.display = 'none';
        document.getElementById('image_stack2').style.display = 'none';

    },[])

  //============================================================================================
        /*values.image=selectedFiles;
        console.log("image File=",values.image);   
    }*/
    
  //============================================================================================
    const CreateUpdateProduct= e => {
        e.preventDefault()
           if (validate()){
                    addOrEdit(values,resetForm,selectedFiles1,selectedFiles2,selectedFiles3,selectedFiles4)
                 
                   
           }
        }
    //================================================================================================
    useEffect(()=>{
        if(recordForEdit!=null)
        {
        setValues({...recordForEdit});
        

            // setSelectedFiles1(values.image_front);
            // setSelectedFiles2(values.image_back);
            // setSelectedFiles3(values.image_left); 
        //setSelectedFiles4(values.image_right);
        document.getElementById('image_stack1').style.display = 'block';
        document.getElementById('image_stack2').style.display = 'block';
        document.getElementById('img1').setAttribute("src",recordForEdit.image_front);
        document.getElementById('img2').setAttribute("src",recordForEdit.image_back);
        document.getElementById('img3').setAttribute("src",recordForEdit.image_left);
        document.getElementById('img4').setAttribute("src",recordForEdit.image_right);
        
        console.log(selectedFiles1);
        }
    },[recordForEdit])
        const classes = useStyles();
//====================================================================================================
    return (

    <Form onSubmit={CreateUpdateProduct}>
        <Grid container>
            <Grid item xs={6}>
                <Controls.Input
                    name="productid"
                    label="Product ID"
                    value={values.productid}
                    onChange={handleInputChange}
                    error={errors.id}
                   disabled
                />
                
                <Controls.Select
                    label="Color"
                    name="color"
                    value={values.color}
                    onChange={handleInputChange}
                    options={ProductService.getColorCollection()}
                    error={errors.color}
                   
                />
                
                <Controls.Select
                    label="Material"
                    name="material"
                    value={values.material}
                    onChange={handleInputChange}
                    options={ProductService.getMaterialCollection()}
                    error={errors.material}
                   
                    
                />
                <Controls.Input
                    label="Price"
                    name="price"
                    value={values.price}
                    onChange={handleInputChange}
                    error={errors.price}
                    
                />
                <Controls.Input
                    label="Quantity"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleInputChange}
                    error={errors.quantity}
                    
                />
               
                <Controls.Select
                    label="Sleeve-Type"
                    name="sleeve"
                    value={values.sleeve}
                    onChange={handleInputChange}
                    options={ProductService.getSleeveTypeCollection()}
                    error={errors.sleevetype}
                    
                />
                
                <Controls.Select
                    label="Neck-Type"
                    name="neck_type"
                    value={values.neck_type}
                    onChange={handleInputChange}
                    options={ProductService.getNeckCollection()}
                    error={errors.necktype}
                    
                />
         
      
        </Grid>
       
         <Grid item xs={6}> 
                     
         <Controls.Select
                    label="Size"
                    name="size"
                    value={values.size}
                    onChange={handleInputChange}
                    options={ProductService.getSizeCollection()}
                    error={errors.sleevetype} 
                /> 
                 <div>
               <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                 
                <input
                    type="file" onChange={fileSelectedHandler}   accept="image/*" name="image" id="input" multiple 
                />
               
                </Button>
                </div>
               <div id="image_stack1">
                { 
                
                <img src={selectedFiles1} alt="" name="image_front" id="img1" className="img_front" width={150} height={150} /> 
                }
               { 
                
                <img src={selectedFiles2} alt="" name="image_back" id="img2" className="img_front" width={150} height={150} /> 
                }
               

               </div>
               <div id="image_stack2">
                { 
                
                <img src={selectedFiles3} alt="" name="image_right" id="img3" className="img_front" width={150} height={150} /> 
                }
               { 
                
                <img src={selectedFiles4} alt="" name="image_left" id="img4" className="img_front" width={150} height={150} /> 
                }
               

               </div>
       

                <div>
                    
                    <Controls.Button
                        type="submit"
                        text="Submit"/>

                    <Controls.Button
                        text="Reset"
                        color="default"
                         />
                </div>
            </Grid>
            </Grid>
    </Form>
    
    )
    
}