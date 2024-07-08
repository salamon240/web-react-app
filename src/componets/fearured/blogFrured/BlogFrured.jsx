import React from "react";
import "./blogFrured.scss";
import {useTranslation} from 'react-i18next'
import { DataContext } from "../../../context/Datacontext.jsx";
import { useContext } from "react";

function BlogFrured() {
  const { t } = useTranslation();
  const { lng } = useContext(DataContext);

  return (
    <div className="item-blog" dir={lng === 'he' ? 'rtl' : 'ltr'}>
      <h4>{t('blogFooter.titel')}</h4>
      <div className="btn-email">
        <input className="inputBtn" type="text" placeholder={t('blogFooter.holder')} />
        <button className="btnEmail" type="button" onClick={()=>{console.log("hii")}}>{t('blogFooter.input')}</button>
      </div>
      <p>{t('blogFooter.p')}</p>
    </div>
  );
}

export default BlogFrured;
