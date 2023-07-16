import React from 'react'
import './Home.css'
import Lookup from '../../sections/Lookup'
import Form from '../../sections/Form'

export default function Home() {
  return (
    <div className="main">
        <div className="main-item-first">
          <Lookup />
        </div>
        <div className="main-item-second">
          <Form />
        </div>
    </div>
  )
}
