import { useState } from "react";
import { useLanguageChanger } from "../../../i18n/utils/LanguageChanger";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (locale) => {
    handleChangeLanguage(locale);
    setIsOpen(false);
  };

  // Фильтруем список языков, исключая текущий язык
  const availableLanguages = ["ua", "en", "de"].filter(
    (lang) => lang !== currentLocale,
  );

  return (
    <div className={styles.languageSwitcherContainer}>
      <button className={styles.languageButton} onClick={toggleDropdown}>
        {currentLocale.toUpperCase()}
      </button>

      {isOpen && (
        <ul className={styles.languageList}>
          {availableLanguages.map((lang) => (
            <li key={lang}>
              <button
                className={styles.languageOption}
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
