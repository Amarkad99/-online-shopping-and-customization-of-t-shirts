export const getStatusCollection = () => ([
    { id: '1', title: 'Processing' },
    { id: '2', title: 'Ready For Packing' },
    { id: '3', title: 'Ready To Deliver' },
    { id: '4', title: 'Dispatch' },
    { id: '5', title: 'In Transit' },
    { id: '6', title: 'Out for Delivery' },
    { id: '7', title: 'Delivered' },

])

export const getStatusByID=(id)=>{
    let statusTitle='';
    getStatusCollection().map((item,index)=>{
        if(index==(id-1)){
            statusTitle=item.title;
        }
    })
    return statusTitle;
}
export const getDeliveryDetails=async()=>{
    
    let result=await fetch("http://localhost:8080/Delivery/findall");
    result = await result.json();
    return result;
}
export const UpdateStatus=item=>
{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
            "Access-Control-Allow-Origin": "*"    
        },            
        body:JSON.stringify(item)
    };
    fetch(`http://localhost:8080/Delivery/changestatus`, requestOptions)
    .then(response => response.json())
    .then(data =>{
        if(data.msg==='ok')
        {
            console.log(data.msg);
            
        }

    });


}
export const getAllProductOrderDetails=async(orderid)=>{
     
let result=await fetch(`http://localhost:8080/order/getAllProductOrderDetails/${orderid.orderid}`);
result= await result.json();
console.log("Order1:",result);
return result;
}

export const getAllCustomOrderDetails=async(productid)=>{
     
    let result=await fetch(`http://localhost:8080/customization/getCusomizedDetail/${productid.productid}`);
    result= await result.json();
    console.log("Order1:",result);
    return result;
    }
    