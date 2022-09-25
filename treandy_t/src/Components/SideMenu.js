import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import Controls from './controls/Controls';
import ProductTable from '../ProjectComponents/ProductTable';
import { Navigate ,Link,Outlet} from 'react-router-dom';
import Header from "../Components/Header"


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
const SideMenu = (props) => {
    const classes2 = useStyles();
    const { classes } = props;
  
    return (
        <div>
        <div className={classes.sideMenu} id="SideMenuBar">
                    <Controls.Button
                        text="Products"
                        color="primary"
                        className={classes.button}
                        variant="contained" href="http://localhost:3000/ownerDashboard/productTable"
                        />
                        <Controls.Button
                        text="Orders"
                        color="primary"
                        className={classes.button}
                        href="http://localhost:3000/ownerDashboard/orderTable"
                        />
                        <Controls.Button
                        text="Order History"
                        color="primary"
                        className={classes.button}
                        href="http://localhost:3000/ownerDashboard/orderHistory"
                     />
                    
           

        </div>

        
         <div id="SideMenuBarBody" className={classes.appMain}>
            <Header></Header>
            <Outlet >

            </Outlet>
           
        </div>
        </div>
    )
}

export default withStyles(style)(SideMenu);
