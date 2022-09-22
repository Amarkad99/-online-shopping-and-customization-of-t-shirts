import React from 'react'
import Controls from "../Components/controls/Controls";
import {Dialog,DialogTitle,DialogContent, makeStyles, Typography, DialogActions} from '@material-ui/core'
export default function ConfirmDialog(props)
{
    const {confirmDialog,setConfirmDialog}=props
    return(
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
            <Typography variant="h6">
                {confirmDialog.title}
            </Typography>
            <Typography variant="h2">
                {ConfirmDialog.subTitle}
            </Typography>
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={()=>setConfirmDialog({...confirmDialog,isOpen:false})}/>
                    <Controls.Button
                    text="Yes"
                    color="Secondary"
                    onClick={confirmDialog.onConfirm}/>
            </DialogActions>
        </Dialog>
    )
}