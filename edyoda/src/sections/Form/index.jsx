import React from 'react'
import './Form.css';
import { useState } from "react";
import Subscriptions from '../../component/Subscriptions';
import PaymentSummary from '../../component/PaymentSummary';

// Icon
import RazorIcon from "../../assets/icons/RazorpayIcon.png";


const subscription = [
    {
        month: 12,
        annualPrice: 99,
        monthlyPrice: 8,
        expired: true,
        recommended: false
    },
    {
        month: 12,
        annualPrice: 179,
        monthlyPrice: 15,
        expired: false,
        recommended: true,
    },
    {
        month: 6,
        annualPrice: 149,
        monthlyPrice: 25,
        expired: false,
        recommended: false,
    },
    {
        month: 3,
        annualPrice: 99,
        monthlyPrice: 33,
        expired: false,
        recommended: false
    }
  ]
  

export default function Form() {
    const [selectedPlan, setSelectedPlan] = useState(12);

    const handleSelectedPlan = (value) => {
        setSelectedPlan(value);
    }
  return (
    <>
    <div className="main-form">
            <div className="form-progress">
                  <div className="stage">
                      <div>1</div>
                      <p>Sign Up</p>
                  </div>
                  <div className="stage">
                    <div>2</div>
                    <p>Subscribe</p>
                  </div>
            </div>
            <div className="form-header">
                Select your subscription plan
            </div>
            <Subscriptions subscription={subscription} selectedPlan={selectedPlan} handleSelectedPlan={handleSelectedPlan} />
            <PaymentSummary plan={subscription.find((item) =>(item.month===selectedPlan) && (!item.expired) )} />
            <div className="form-button">
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-success">Proceed To Pay</button>
            </div>
            <div className="form-icon">
              <img src={RazorIcon} alt="" />
            </div>
          </div>
    </>
  )
}
