import * as ProductService from "../services/ProductServices"
import { Grid,makeStyles,Typography } from '@material-ui/core';
import Controls from "../Components/controls/Controls";
import { useForm, Form } from '../Components/useForm';
export default function StatusChange()
{
    const handleInputChange = e => {
        const { name, value } = e.target    
        
    }
    return(
        <Form>
        <Grid container>
    <Grid item xs={6}>
    <Controls.Select
                    label="Status"
                    name="Status"
                    value="Status"
                    onChange={handleInputChange}
                    options={ProductService.getStatusCollection()}
                    
                />

            <Controls.Button
                    text="Submit"
                    variant="outlined"
                   
                    onClick={()=>{}}
                    />
                </Grid>
                </Grid>
                </Form>

    )

}