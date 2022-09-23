import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import Controls from "../Components/controls/Controls"

import { Navigate ,Link,Outlet} from 'react-router-dom';


// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        position:'horizontal',
        spacing: 10,
        left: '0px',
        width: '200px',
        height: '10%',
        backgroundColor: '#BFD7ED',
        color:''
    },
    appMain: {
        paddingLeft: '320px',
        width: '100%'
      }
}
const useStyles = makeStyles({
    
  })
const DeliveryDashBoard = (props) => {
    const classes2 = useStyles();
    const { classes } = props;
  
    return (
        <div>
        <div className={classes.sideMenu} id="SideMenuBar">
                    <Controls.Button
                        text="Delivery Details"
                        color="primary"
                        className={classes.button}
                        variant="contained" href="http://localhost:3000/DeliveryDashboard/deliveryTable"
                        />
                        <Controls.Button
                        text="Orders"
                        color="primary"
                        className={classes.button}
                        />
                        <Controls.Button
                        text="Order History"
                        color="primary"
                        className={classes.button}
                     />
                    
           

        </div>

        
         <div id="SideMenuBarBody" className={classes.appMain}>
            <Outlet >

            </Outlet>
           
        </div>
        </div>
    )
}

export default withStyles(style)(DeliveryDashBoard);
