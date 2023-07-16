import React from 'react'
import {TbClockExclamation} from "react-icons/tb";
import './PaymentSummary.css'

function PaymentSummary({plan}) {
    const subscriptionFee = 18500;
    const offerFee = 18500 - plan.annualPrice;  
    
  return (
    <div className='summary-container'>
    <div className='summary-upper'>
        <p>Subscription Fee</p>
        <p>&#8377; {subscriptionFee.toLocaleString()}</p>
    </div>
    <div className='summary-middle'>
        <div>
            <p>Limited time</p>
            <div>
                <div>
                    <TbClockExclamation className='summary-icon' />
                </div>
                <div>Offer valid till 25th March 2023</div>
            </div>
        </div>
        <div>
            <p><b>- &#8377; {offerFee.toLocaleString()}</b></p>
        </div>
    </div>
    <div className='summary-lower'>
        <p><b>Total</b> (Incl. of 18% GST)</p>
        <p><b>&#8377; {plan?.annualPrice}</b></p>
    </div>
</div>
  )
}

export default PaymentSummary;