import React,{useState}from 'react'

function InputOutput(props) {
    const [amount, setAmount] = useState("");
        const [service, setService] = useState("");
        const [customer, setCustomer] = useState("");
        const [tip, setTip] = useState([]);
        const [totalCustomer, setTotalCustomer] = useState(0);
        const [tip1, setTip1] = useState([0])


        const handleChange1 = (event) => {
            setAmount(event.target.value)
        }
    
        const handleChange2 = (event) => {
            setService(event.target.value)
    
    
        }
        const handleChange3 = (event) => {
            setCustomer(event.target.value)
            setTip(amount * service)
        }
    
    
    
    
        const getData1 = () => {
            
            props.AddCustomerName(`${customer} Offering a Tip Of - Rs.  ${tip}`);
            props.AddTip(tip);
            setCustomer("");
        }
      
        const getData2 = () => {
            setTip1(`${props.totaltip.reduce((prev, next) => prev + next)}`);
            setTotalCustomer(`${props.customername.length}`);
        }
    

    
    return (
        <>
        <div className=".bg-light" style={{ marginRight:"100px",marginLeft:"100px",justifyContent:"center",textAlign:"center", background: "linear-gradient(to top, #CBCF53 6%, #85FFCE 36%, #72CFCC 81%)"}}>
            <div>
           
                     <label>Enter Bill Amount</label>
                    < input type="number" value={amount} placeholder="Enter Bill Amount" onChange={handleChange1} />
                
                <br></br>
               
         
            <br></br>
            
                   
                    <label>How was the service?</label>
                            <select  value={service} onChange={handleChange2} >
                                <option value="0">Choose Our Services</option>
                                <option value="0.3">30% Excellent</option>
                                <option value="0.15">15% It was OK</option>
                                <option value="0.05">5% Poor</option>
                            </select>
                     
                  
                        <label>Enter Your Name</label>
                            <input type="text" value={customer}  placeholder="Enter Your Name" onChange={handleChange3} />
                        
                        <br></br>
                        <br></br>
        

                    <div className="container d-flex justify-content-center">
                        <button
                        style={{ width: "250px", fontWeight: "600"}} onClick={getData1}>Add Customer</button>
                    </div>
               
                <br></br>
                

                <div className="container">
                <h1 style={{ textAlign: "center", fontFamily: "Times New Roman', Times, serif", fontWeight: "bolder",background:"seaGreen" }}>Customer List</h1>
                <br></br>

            {
                props.customername.map(ele => (
                 <h3>{ele}</h3>
                ))
                    }

                </div>

           
            <br></br>
            
            <br></br>

        </div>
        <div className="container d-flex justify-content-center">
            <button variant="primary" style={{ width: "200px", fontWeight: "600",marginBottom:"50px"}} onClick={getData2} >Calculate Tip & Customer</button>
        </div>
        <br></br>
        <div className="container d-flex justify-content-center">
            <table style={{marginLeft:"auto",marginRight:"auto"}} >
                <thead>
                    <tr >

                        <th>Total Customer</th>
                        <th>Total Tip</th>

                    </tr>
                </thead>
                <tbody >
                     <tr>
                          <td>{totalCustomer}</td>
                                         <td>
                                Rs.{tip1}
                            </td>

                        </tr>
                    
                </tbody>
            </table>
        </div>
        </div>
    </>
        
    )
}

export default InputOutput
