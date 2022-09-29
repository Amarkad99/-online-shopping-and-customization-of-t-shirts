import * as OrderService from "../services/OrderService"
import { Grid,makeStyles,Typography } from '@material-ui/core';
import Controls from "../Components/controls/Controls";
import { useForm, Form } from '../Components/useForm';
import { useEffect } from "react";


const initialFValues = {
    order_id:'',
    status: '',
    
}
export default function StatusChange(props)
{ 
    const {recordForEdit,setOpenPopup,records,setRecords}=props;
    const validate = (fieldValues = values) => {
    let temp = { ...errors }
    /* 
    if ('status' in fieldValues)
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
    if(recordForEdit!=null)
    {
        setValues({...recordForEdit});
    } 
},[recordForEdit])
    
const UpdateDeliveryStatus=(e)=>
{
    e.preventDefault();
    OrderService.UpdateStatus(values);
    console.log(OrderService.getStatusCollection());
    setOpenPopup(false);
   
}
    return(
        <Form onSubmit={UpdateDeliveryStatus}>
        
            <Controls.Select
                    label="Status"
                    name="status"
                    value={values.status}
                    onChange={handleInputChange}
                    options={OrderService.getStatusCollection()}  
                    
            />

                <Controls.Button
                        type="submit"
                        text="Submit"/>
                
        </Form>

    )

}