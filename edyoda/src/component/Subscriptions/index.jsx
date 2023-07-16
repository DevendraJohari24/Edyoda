import React from 'react'
import './Subscriptions.css'
import Plan from '../Plan';


export default function Subscriptions({selectedPlan, handleSelectedPlan, subscription}) {
  return (
    <div className='subscription-container'>
            {subscription?.map((item, index) => {
                return (
                    <Plan 
                    key={index} 
                    selectedPlan={selectedPlan}
                    handleSelectedPlan={handleSelectedPlan}
                    month={item.month} 
                    monthlyPrice={item.monthlyPrice} 
                    annualPrice={item.annualPrice} 
                    expired={item.expired} 
                    recommended={item.recommended} 
                    />
                );
            })}

    </div>
  )
}
