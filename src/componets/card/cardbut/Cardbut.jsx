import React from "react";
import "./cardbut.scss";
import {useTranslation} from 'react-i18next'
import { DataContext } from "../../../context/Datacontext.jsx";
import { useContext } from "react";
function Cardbut() {
  const { t } = useTranslation();
  const { lng } = useContext(DataContext);
  return (
    //info to the blog page card
    <div className="item-details" dir={lng === 'he' ? 'rtl' : 'ltr'}>
      <p className="date-p">{t('card.pdate')}</p>
      <h4 className="titel-but">{t('card.titel')}</h4>
      <p className="details">
      {t('card.pdtails')}
      </p>
    </div>
  );
}

export default Cardbut;
