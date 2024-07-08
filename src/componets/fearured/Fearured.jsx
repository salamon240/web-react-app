import React from 'react'
import "./fearured.scss"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Fearured() {
  const { t } = useTranslation();
  console.log("titelHome ")
  return (
    <div className='Fearured'>
        <div className="info">
        <h1>{t('fearured.titelHome')}</h1>
        <Link to="/blog" className='linkButton'>{t('fearured.liinkHome')}</Link>
        </div>
    </div>
  )
}

export default Fearured