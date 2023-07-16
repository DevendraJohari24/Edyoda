import React from 'react'
import './Plan.css'

// icon
import { AiFillCheckCircle } from 'react-icons/ai';


export default function Plan({month, selectedPlan, handleSelectedPlan, annualPrice, monthlyPrice, recommended, expired}) {
  return (
    <div className={`plan-container ${selectedPlan===month && !expired && "selected" } ${expired ? "expired": "" }`} onClick={() => !expired && handleSelectedPlan(month)}>
    {expired ? (
        <div className={`${expired ? "plan-expired" : ""} `}>Offer expired</div>
    ) : ''}
    {recommended ? (
        <div className={`${recommended ? "plan-recommended" : ""} `}>Recommended</div>
    ) : ''}
    <div className="plan-title">
        {expired ? (
            <input type="radio" checked  disabled={expired} className='plan-icon'  />
        ): 
        (<>
            <div className={`${selectedPlan===month && "selected-plan"} plan-icon`}>
                {selectedPlan === month && <AiFillCheckCircle className='icon'  />}
            </div>
        </>)
    }
        <p> {month} Months Subscription</p>
    </div>
    <div className="plan-price">
        <p className="price-year">Total <span>&#8377; {annualPrice}</span></p>
        <p className="price-month"><span>&#8377; {monthlyPrice}</span> /mo</p>
    </div>
</div>
  )
}
