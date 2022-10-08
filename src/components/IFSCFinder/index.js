import { Component } from 'react'
import './index.css'

class IFSCFinder extends Component {
state={IFSC_Code:"",ifscData:[]}
getBankDetails=async(e)=>{
    e.preventDefault()
    const {IFSC_Code}=this.state
    const response= await fetch(`https://ifsc.razorpay.com/${IFSC_Code}`)
    const fetchedData= await response.json()
    this.setState({ifscData:fetchedData}) 
    console.log(fetchedData)
}  

getIFSC=(e)=>{
this.setState({ifscCode:e.target.value})
}

render() {
    const {ifscData}=this.state
    const {BRANCH,CENTRE,DISTRICT,STATE,ADDRESS,CONTACT,IMPS,CITY,UPI,MICR,RTGS,NEFT,SWIFT,BANK}=ifscData

    return (
      <div className='container'>
      <div className='row'>
        <div className='col-12 p-4'>
            <h1 className='text-center'>Get the branch details of a Bank from IFSC Code</h1>
            <p className='mt-5'>Want to check which bank does a IFSC code belong to? Use this Search by IFSC code feature to double check the IFSC code before making a NEFT or RTGS transfer to a bank account.

</p>
 
<form>  
        <input className='form-control' id="ifsc" placeholder='Enter Ifsc Code' onChange={this.getIFSC} type="text"/>
    <button className='mt-3 btn btn-primary' onClick={this.getBankDetails}>Submit</button></form>
      
      <h1 className='mt-5'>Bank Details:</h1>
    <p>Bank Name:{BRANCH,CENTRE,DISTRICT,STATE,ADDRESS,CONTACT,IMPS,CITY,UPI,MICR,RTGS,NEFT,SWIFT,BANK}</p>
        </div>
      </div>
      </div>
    )
  }
}

export default IFSCFinder