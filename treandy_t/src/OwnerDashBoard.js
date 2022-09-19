import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS_OwnerDash.css';
import NavBarOwner from './NavBarOwner';

export default function OwnerDashBoard()
{
    return(
        <div >
            <NavBarOwner></NavBarOwner>


           

            
                <h2 className='title' ><b ><i >Product DASHBOARD</i></b></h2>
            
                <div className='button1'>
            <Button variant="primary"></Button>{' '}
                <button >Product DashBoard</button>
            </div>

            <div className='button2'>
            <Button variant="primary"></Button>{' '}
                <button className=''>Order DashBoard</button>
            </div>

            <div className='button3'>
            <Button variant="primary"></Button>{' '}
                <button className=''>Order History</button>
            </div>

            <div className='button4'>
            <Button variant="primary"></Button>{' '}
                <button className=''>Order Report</button>
            </div>

        </div>



    );

}
