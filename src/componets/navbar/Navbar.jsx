import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import "./navbar.scss";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher.jsx";
import { DataContext } from "../../context/Datacontext.jsx";
import { useContext } from "react";

function Navbar() {
  const [status, setStatus] = useState("optionNone");
  const [barStatus, setBarStatus] = useState(true);
  const { t } = useTranslation();
  const { lng } = useContext(DataContext);

  const handelLang = () => {
    if (status == "optionBlock") {
      setStatus("optionNone");
    } else {
      setStatus("optionBlock");
    }
    console.log("soli", status);
  };

  const handelbar = () => {
    if (barStatus == false) {
      setBarStatus(true);
    } else {
      setBarStatus(false);
    }
    console.log(barStatus);
  };
// FUNCTION TO CHANG LANGUGE
  console.log("langueg",lng)
 
  
  return (
    <div className="navbar" dir={lng === 'he' ? 'rtl' : 'ltr'} >
      <div className="container ">
        <div className="left">
          <div className="menu">
            <span onClick={handelbar}>
              <IoIosMenu size={50} />
            </span>
          </div>
          <img
            src="https://files.logomakr.com/8D3kg7-LogoMakr.png"
            alt="soli"
          />
          <nav className={barStatus ? "linknav activ" : "linknav"}>
            <Link to="/" className="link-home">
              <span>{t('navbar.home')}</span>
            </Link>
            <Link to="/blog" className="link blog">
              <span>{t('navbar.blog')}</span>
            </Link>
            <a href="https://www.instagram.com/salamon240/" className="link">
              <span>{t('navbar.instgram')}</span>
            </a>
          </nav>
        </div>

        <div className="right">
          <div className="profile">
            <div className={status}>
             <LanguageSwitcher />
            </div>
          </div>
          <span
            className="material-icons"
            style={{ marginLeft: "50px" }}
            onClick={handelLang}
          >
            {t('language')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
