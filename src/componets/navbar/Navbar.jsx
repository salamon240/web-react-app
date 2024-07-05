import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    const [status,setStatus]=useState("optionNone")

    const handelLang=()=>{
        if(status=="optionBlock")
            {
               setStatus("optionNone")
            }else{
                setStatus("optionBlock")
            }
        console.log("soli",status)
    }
  return (
    <div className="navbar">
    <div className="container">
        <div className="left">
            <img src="https://files.logomakr.com/8D3kg7-LogoMakr.png" alt="netflix" />
            <Link to="/" className='link-home'>
            <span>Home</span>
                        </Link>
            <Link to="/blog" className='link-blog'>
            <span>Blog</span>
            </Link>
            <a href="https://www.comeet.com/jobs/esh/87.003" className='link'>
            <span>career</span> 
            </a>
           
        </div>

        <div className="right">
        <span className="material-icons" style={{marginLeft: "50px"}} onClick={handelLang}>
              language
             </span>

            <div className="profile">
          
            <div className={status} >
                <div className="hebrow">

                <span>English</span>
                </div>
                <div className="hebrow">

                <span>עברית</span>
                </div>
                
            </div>

            </div>
        </div>
    </div>
        
        </div>
  )
}

export default Navbar