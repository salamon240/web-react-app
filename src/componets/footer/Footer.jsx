import React from 'react'
import "./footer.scss"
import {useTranslation} from 'react-i18next'
import { DataContext } from "../../context/Datacontext.jsx";
import { useContext } from "react";
function Footer() {
  const { t } = useTranslation();
  const { lng } = useContext(DataContext);
  return (
    <div className='footer' dir={lng === 'he' ? 'rtl' : 'ltr'}>
      <a href="">{t('footer.aprivacy')}</a>
      <a href=""> {t('footer.a')}</a>
      <span>esh is a registered trademark of soli Org Ltd. and its affiliates.</span>

    </div>
  )
}

export default Footer