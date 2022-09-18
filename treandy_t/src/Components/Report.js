<<<<<<< HEAD:treandy_t/src/Report.js
import React ,{useState}from "react";
import './box.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nvabar1 } from "./Orderhistory";
export default function Report()
{

 




    return(
        <div>
            <Nvabar1></Nvabar1>
    <div className="reportbox">
        <center >
            <formset>
         <Headline></Headline>
          <Dates1></Dates1>  

     <br></br><br></br>

         <Button1></Button1><br></br>

          

        <GeneratedReport></GeneratedReport>
        

</formset>
</center>
</div>
    </div>)
}

function Headline()
{
    return(<div >
        <h1> Report</h1>
    </div>)
}
function Dates1()
{
    return(<div>
        <formset>
        From Date <input type="Date" name="date1"></input>   To Date <input type="Date" name="date2"></input>
        </formset>
    </div>)
}
function Button1()
{

    let [data,setData]=useState("")

   function handler1(event)
   {
setData(event.target.value)
console.log(event.target.value)

   }



    return(<div>
         <Button type="submit"   onClick={handler1}  >Generate Report</Button>{' '}
         <p>{data}</p>
    </div>)
}

function GeneratedReport()
{
    return(
    <textarea name="ta" rows="10" cols="50" placeholder="Your generated report will shown here"></textarea>
    )
=======
import React ,{useState}from "react";
import '../box.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Report()
{

 




    return(<div className="Box">
        <center >
            <formset>
         <Headline></Headline>
          <Dates1></Dates1>  

     <br></br><br></br>

         <Button1></Button1><br></br>

                <br></br>

        <GeneratedReport></GeneratedReport>
        

</formset>
</center>
    </div>)
}

function Headline()
{
    return(<div >
        <h1> Report</h1>
    </div>)
}
function Dates1()
{
    return(<div>
        <formset>
        From Date <input type="Date" name="date1"></input>   To Date <input type="Date" name="date2"></input>
        </formset>
    </div>)
}
function Button1()
{

    let [data,setData]=useState("default")

   function handler1(event)
   {
setData(event.target.value)
console.log(event.target.value)

   }



    return(<div>
         <Button type="submit"   onClick={handler1}  >Generate Report</Button>{' '}
         <p>{data}</p>
    </div>)
}

function GeneratedReport()
{
    return(
    <textarea name="ta" rows="10" cols="50" placeholder="Your generated report will shown here"></textarea>
    )
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca:treandy_t/src/Components/Report.js
}