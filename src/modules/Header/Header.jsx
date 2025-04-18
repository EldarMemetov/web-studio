// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import styles from './Header.module.scss';
// import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
// import Button from '@/shared/components/button/Button';
// import Icon from '../../shared/Icon/Icon';
// import { SocialLinks } from './SocialLinks/SocialLinks';
// import Logo from '@/shared/Logo/Logo';

// function HeaderComponent() {
//   const { t, i18n } = useTranslation('header');
//   const pathname = usePathname();

//   const [currentLocale, setCurrentLocale] = useState(i18n.language);
//   useEffect(() => {
//     setCurrentLocale(i18n.language);
//   }, [i18n.language]);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setWindowWidth(window.innerWidth);
//       const handleResize = () => setWindowWidth(window.innerWidth);
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   const activeClass = useMemo(
//     () => ({
//       home: pathname === `/${currentLocale}`,
//       aboutUs: pathname === `/${currentLocale}/about-us`,
//       webDevelopment: pathname === `/${currentLocale}/web-development`,
//       videography: pathname === `/${currentLocale}/videography`,
//       blog: pathname === `/${currentLocale}/blog`,
//     }),
//     [pathname, currentLocale]
//   );

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
//         <ul
//           className={clsx(styles['nav-list'], {
//             [styles['open-menu']]: isMenuOpen,
//           })}
//         >
//           {isMenuOpen && (
//             <div className={styles.mobileHeader}>
//               <Logo />
//             </div>
//           )}
//           {isMenuOpen && (
//             <button onClick={toggleMenu} className={styles['menu-close']}>
//               <Icon iconName="icon-close" className={styles.iconClose} />
//             </button>
//           )}
//           <li
//             className={clsx(styles['nav-list-item'], {
//               [styles['nav-list-item-active']]: activeClass.home,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('home')}
//             </Link>
//           </li>
//           <li
//             className={clsx(styles['nav-list-item'], {
//               [styles['nav-list-item-active']]: activeClass.aboutUs,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/about-us`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('aboutUs')}
//             </Link>
//           </li>
//           <li
//             className={clsx(styles['nav-list-item'], {
//               [styles['nav-list-item-active']]: activeClass.webDevelopment,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/web-development`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('webDevelopment')}
//             </Link>
//           </li>
//           <li
//             className={clsx(styles['nav-list-item'], {
//               [styles['nav-list-item-active']]: activeClass.videography,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/videography`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('videography')}
//             </Link>
//           </li>

//           <li
//             className={clsx(styles['nav-list-item'], {
//               [styles['nav-list-item-active']]: activeClass.blog,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/blog`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('blog')}
//             </Link>
//           </li>
//           {isMenuOpen && (
//             <li className={styles['nav-list-item']}>
//               <div className={styles.socialContainer}>
//                 <SocialLinks />
//               </div>
//             </li>
//           )}
//         </ul>
//       </nav>

//       <div className={styles.containerButtonTrans}>
//         <LanguageSwitcher />
//         <div className={styles.buttonContact}>
//           <Button variant="variant1">{t('kontakt')}</Button>
//         </div>
//         <button
//           onClick={toggleMenu}
//           className={clsx(styles.menuButton, {
//             [styles.hidden]: isMenuOpen && windowWidth >= 768,
//           })}
//         >
//           {!isMenuOpen && (
//             <Icon iconName="icon-open" className={styles.iconOpen} />
//           )}
//         </button>
//       </div>
//     </header>
//   );
// }

// export const Header = React.memo(HeaderComponent);
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setLocale(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={styles.header}>
      <Logo />

      <nav>
        <NavMenu
          variant="header"
          isMobileMenuOpen={isMenuOpen}
          onCloseMenu={closeMenu}
          onToggleMenu={toggleMenu}
          locale={locale}
        />
      </nav>

      <div className={styles.containerButtonTrans}>
        <LanguageSwitcher />
        <div className={styles.buttonContact}>
          <Button variant="variant1">{t('kontakt')}</Button>
        </div>
        <button
          onClick={toggleMenu}
          className={clsx(styles.menuButton, {
            [styles.hidden]: isMenuOpen && windowWidth >= 768,
          })}
        >
          {!isMenuOpen && (
            <Icon iconName="icon-open" className={styles.iconOpen} />
          )}
        </button>
      </div>
    </header>
  );
}

export default React.memo(Header);
