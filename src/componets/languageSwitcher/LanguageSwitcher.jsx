import React from 'react'
import { useTranslation } from 'react-i18next';
import { DataContext } from '../../context/Datacontext';
import { useContext } from 'react';
function LanguageSwitcher() {
  //changing language with i18n
    const { i18n } = useTranslation();
    const { changeDir } = useContext(DataContext);

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      changeDir(lng)

    };
  return (
    <div>
    <div className="hebrow">
                <span  onClick={()=>changeLanguage('en')}>English</span>
              </div>
              <div className="hebrow">
                <span onClick={()=>changeLanguage('he')}>עברית</span>
              </div>
  </div>
  )
}

export default LanguageSwitcher