// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import clsx from 'clsx';
// import styles from './Header.module.scss';
// import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
// import Button from '@/shared/components/button/Button';
// import Icon from '@/shared/Icon/Icon';
// import Logo from '@/shared/Logo/Logo';
// import NavMenu from './NavMenu/NavMenu';

// function Header() {
//   const { t, i18n } = useTranslation('header');
//   const [locale, setLocale] = useState(i18n.language);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setLocale(i18n.language);
//   }, [i18n.language]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setWindowWidth(window.innerWidth);
//       const handleResize = () => setWindowWidth(window.innerWidth);
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => {
//       document.body.style.overflow = !prev ? 'hidden' : 'auto';
//       return !prev;
//     });
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <header className={styles.header}>
//       <Logo />

//       <nav>
//         <NavMenu
//           variant="header"
//           isMobileMenuOpen={isMenuOpen && windowWidth < 1154}
//           onCloseMenu={closeMenu}
//           onToggleMenu={toggleMenu}
//           locale={locale}
//         />
//       </nav>

//       <div className={styles.containerButtonTrans}>
//         <button
//           onClick={toggleMenu}
//           className={clsx(styles.menuButton, {
//             [styles.hidden]: windowWidth >= 1154,
//           })}
//         >
//           {!isMenuOpen && (
//             <Icon iconName="icon-open" className={styles.iconOpen} />
//           )}
//         </button>

//         <div
//           className={clsx(styles.buttonContact, {
//             [styles.mobileButton]: windowWidth < 1154,
//           })}
//         ></div>
//         <div className={styles.buttonContact}>
//           <Button variant="variant1">{t('kontakt')}</Button>
//         </div>
//         <LanguageSwitcher />
//       </div>
//     </header>
//   );
// }

// export default React.memo(Header);
'use client';

'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';
import Logo from '@/shared/Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

function Header() {
  const { t, i18n } = useTranslation('header');
  const [locale, setLocale] = useState(i18n.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync locale
  useEffect(() => {
    setLocale(i18n.language);
  }, [i18n.language]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Logo />

      <nav id="main-navigation">
        <NavMenu
          variant="header"
          isMobileMenuOpen={isMenuOpen}
          onToggleMenu={toggleMenu}
          onCloseMenu={closeMenu}
          locale={locale}
        />
      </nav>

      <div className={styles.containerButtonTrans}>
        <div className={styles.buttonContact}>
          <Button variant="variant1">{t('kontakt')}</Button>
        </div>

        <LanguageSwitcher />

        <button
          type="button"
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label={t('openMenu')}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <Icon iconName="icon-open" className={styles.iconOpen} />
        </button>
      </div>
    </header>
  );
}

export default React.memo(Header);
