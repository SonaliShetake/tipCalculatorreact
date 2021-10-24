import React,{useState}from 'react'
import Footer from './components/Footer'
import InputOutput from './components/InputOutput'
import Header from './components/Header'

function App() {
  const [customername,setCustomerName]= useState([])
  const [totaltip, setTip] = useState([0])

    const AddCustomerName=(data)=>{
      setCustomerName([...customername,data])
    }

    const AddTip=(data)=>{
      setTip([...totaltip,data]);
      console.log(setTip);
      
    }
    console.log(AddTip);
  return (
    <div>
       <div className ="inner">
    <Header/>
    <InputOutput customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip} />
    <Footer/>
    </div>
     
    </div>
  )
}

export default App
