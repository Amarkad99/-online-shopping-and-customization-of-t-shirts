import React, { Children, useRef } from 'react'
import {Dialog,DialogTitle,DialogContent, makeStyles, Typography} from '@material-ui/core'
import Controls from "./controls/Controls";
import CloseIcon from "@material-ui/icons/Close";
import { Reset } from './useForm';
import {getProductDetails } from '../ProjectComponents/ProductTable';
const useStyles=makeStyles(theme=>({
    dialogWrapper:{
    padding:theme.spacing(2),
    position:'absolute',
    top:theme.spacing(5)
    },
    DialogTitle:{
        paddingRight:'0px'
    }

}))


export default function Popup(props){

    const{title,children,openPopup,setOpenPopup,setFlag}=props;
    const classes=useStyles();
   
    const closePopup=()=>{
        setOpenPopup(false);

      
    }


    return(
        <Dialog open={openPopup} maxWidth="md" className={{paper:classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
               <div style={{display:'flex'}}>
                <Typography variant='h6' component="div" style={{flexGrow:1}}>
                {title}
                    </Typography> 
                <Controls.ActionButton
                color="secondary"
                onClick={()=>{closePopup()}}>
                        <CloseIcon/>
               </Controls.ActionButton>
</div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}