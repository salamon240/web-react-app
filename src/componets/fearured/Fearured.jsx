import React from 'react'
import "./fearured.scss"
import { Link } from 'react-router-dom'

function Fearured() {
  return (
    <div className='Fearured'>
        <div className="info">
        <h1>A new Beauty Care is coming</h1>
        <Link to="/blog" className='linkButton'>Read Lastest Update</Link>
        </div>
    </div>
  )
}

export default Fearured