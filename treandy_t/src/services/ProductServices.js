
export const getSleeveTypeCollection = () => ([
    { id: '1', title: 'Full' },
    { id: '2', title: 'Half' }
])
export const getMaterialCollection = () => ([
    { id: '1', title: 'Cotton' },
    { id: '2', title: 'Polyster' }
])
export const getNeckCollection = () => ([
    { id: '1', title: 'Colar' },
    { id: '2', title: 'without color' }
])
export const getSizeCollection = () => ([
    { id: '1', title: 'S' },
    { id: '2', title: 'M' },
    { id: '3', title: 'L' },
    { id: '4', title: 'XL' },
    { id: '5', title: 'XXL' },
])
export const getColorCollection = () => ([
    { id: '1', title: 'Red' },
    { id: '2', title: 'Black' },
    { id: '3', title: 'White' },
    { id: '4', title: 'Blue' },
    { id: '5', title: 'Gray' },
])
export const getStatusCollection = () => ([
    { id: '1', title: 'Dispatched' },
    { id: '2', title: 'In Transit' },
    { id: '3', title: 'Out for Delivery' },
    { id: '4', title: 'Delivered' },
])
export const getSleeveByID=(id)=>{
    let sleeveTitle='';
    getSleeveTypeCollection().map((item,index)=>{
        if(index==(id-1)){
            sleeveTitle=item.title;
        }
    })
    return sleeveTitle;
}
export const getColorByID=(id)=>{
    let colorTitle='';
    getColorCollection().map((item,index)=>{
        if(index==(id-1)){
            colorTitle=item.title;
        }
    })
    return colorTitle;
}
export const setSleeveByID=(title)=>{
    let sleeveId='';
    getSleeveTypeCollection().map((item)=>{
        if(item.title==title){
            sleeveId=item.id;
        }
    })
    return sleeveId;
}

export const getNeckTypeByID=(id)=>{
    let neckTitle='';
    getNeckCollection().map((item,index)=>{
        if(index==(id-1)){
            neckTitle=item.title;
        }
    })
    return neckTitle;
}
export const getMaterialByID=(id)=>{
    let materialTitle='';
    getMaterialCollection().map((item,index)=>{
        if(index==(id-1)){
            materialTitle=item.title;
        }
    })
    return materialTitle;
}
export const getSizeByID=(id)=>{
    let sizeTitle='';
    getSizeCollection().map((item,index)=>{
        if(index==(id-1)){
            sizeTitle=item.title;
        }
    })
    return sizeTitle;
}

export const deleteProduct=(prod)=>{
   
    const requestOptions = {
        method: 'Delete',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"    
        },            
         body:JSON.stringify({"productid":prod.productid})
         //body:JSON.stringify({"color":"abcd@gmail.com"})
        };
        fetch('http://localhost:8080/product/delete', requestOptions)
        .then(response => response.json())
        .then(data =>{
            if(data.msg==='ok')
            {
                console.log(data.msg);
               
        
            }

        } ); 

}


export const createProduct = (productData )=> {      
           /*const myBody={
                product:JSON.stringify(productData),
                file:file1
           }  */                    
    const requestOptions = {
         method: 'POST',
         headers: { 
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             "Access-Control-Allow-Origin": "*"    
     },            
          body: JSON.stringify(productData) 
         };
 fetch('http://localhost:8080/product/insert', requestOptions)
 .then(response => response.json())
 .then(data =>{
      if(data.msg==='ok')
      {
        console.log(data.msg);
      }

 } );

}

export const updateProduct = productData => {      
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"    
            },            
            body:JSON.stringify( productData)
        };
        fetch('http://localhost:8080/product/update', requestOptions)
        .then(response => response.json())
        .then(data =>{
            if(data.msg==='ok')
            {
                console.log(data.msg);
                
            }

        });


}


export const getAllProducts=async()=>{
  
    let result=await fetch("http://localhost:8080/product/findallproducts");
    result = await result.json();
    console.log("Result=",result);
  
    return result;
    }

