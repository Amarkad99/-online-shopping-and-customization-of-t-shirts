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
import Popup from '../Components/Popup'
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
    
}
  

export default function ProductForm(props)
{
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''});
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
 


    useEffect(()=>{
       

    },[])

 
    const CreateUpdateProduct= e => {
        e.preventDefault()
           if (validate()){
            const bbd={
                "productid":values.productid,
                  "price":values.price,
                  "quantity":values.quantity,
                  "color":values.color,
                  "material":values.material,
                  "sleeve":values.sleeve,
                  "neck_type":values.neck_type,
                  "size":values.size,
                  "iscustomizable":0
             }
        
        
         if(values.productid===''){
             ProductService.createProduct(bbd);
             
         }
         else
         {
            
             ProductService.updateProduct(bbd);
              
         }
            resetForm();
            setNotify({
                isOpen:true,
                message:"submitted successfully",
                type:'success'
            })
                 
                   
           }
        }
   
        const classes = useStyles();
    return (

    <Form onSubmit={CreateUpdateProduct}>
        <Grid container>
            <Grid item xs={6}>
                
                     <Typography variant="h4" mt={2} align="center">
                       T-Shirt Details</Typography>
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
         
          
         <Controls.Select
                    label="Size"
                    name="size"
                    value={values.size}
                    onChange={handleInputChange}
                    options={ProductService.getSizeCollection()}
                    error={errors.sleevetype} 
                /> 
                 
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