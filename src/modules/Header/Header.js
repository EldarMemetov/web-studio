// 'use client';
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { useState, useMemo } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import styles from './Header.module.scss';
// import Image from 'next/image';
// import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
// import Button from '@/shared/components/button/Button';

// function HeaderComponent() {
//   const { t, i18n } = useTranslation('header');
//   const pathname = usePathname();

//   const currentLocale = i18n.language;

//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const activeClass = useMemo(
//     () => ({
//       home: pathname === `/${currentLocale}`,
//       portfolio: pathname === `/${currentLocale}/portfolio`,
//       aboutUs: pathname === `/${currentLocale}/about-us`,
//       // contact: pathname === `/${currentLocale}/contact`,
//       services: pathname.startsWith(`/${currentLocale}/services`),
//     }),
//     [pathname, currentLocale]
//   );

//   const toggleServices = () => setIsServicesOpen((prev) => !prev);
//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>PixelPro Studio</div>
//       <nav>
//         <ul
//           className={clsx(styles['nav-list'], {
//             [styles['open-menu']]: isMenuOpen,
//           })}
//         >
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
//               [styles['nav-list-item-active']]: activeClass.portfolio,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/portfolio`}
//               className={styles['nav-list-link']}
//               onClick={closeMenu}
//             >
//               {t('portfolio')}
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
//           {/* <li
//             className={clsx(styles["nav-list-item"], {
//               [styles["nav-list-item-active"]]: activeClass.contact,
//             })}
//           >
//             <Link
//               href={`/${currentLocale}/contact`}
//               className={styles["nav-list-link"]}
//               onClick={closeMenu}
//             >
//               {t("contact")}
//             </Link>
//           </li> */}
//           <li
//             className={clsx(styles['nav-list-item'], styles['nav-services'], {
//               [styles['nav-list-item-active']]: activeClass.services,
//             })}
//             onClick={toggleServices}
//           >
//             <span className={styles['nav-list-span']}>{t('services')}</span>
//             {isServicesOpen && (
//               <ul className={styles.submenu}>
//                 <li className={styles['submenu-item']}>
//                   <Link
//                     href={`/${currentLocale}/services/web-development`}
//                     className={styles['submenu-link']}
//                     onClick={closeMenu}
//                   >
//                     {t('webDevelopment')}
//                   </Link>
//                 </li>
//                 <li className={styles['submenu-item']}>
//                   <Link
//                     href={`/${currentLocale}/services/videography`}
//                     className={styles['submenu-link']}
//                     onClick={closeMenu}
//                   >
//                     {t('videography')}
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={toggleMenu}
//         className={clsx(styles.menuButton, {
//           [styles.hidden]: isMenuOpen && window.innerWidth >= 768,
//         })}
//       >
//         <Image
//           src="/icons/open.svg"
//           alt="Open Menu"
//           width={24}
//           height={24}
//           className={styles.iconsOpen}
//         />
//       </button>
//       <div className={styles.containerButtonTrans}>
//         <LanguageSwitcher />
//         <Button variant="variant1" data-aos="zoom-in" data-aos-delay="1000">
//           {t('kontakt')}
//         </Button>
//       </div>
//     </header>
//   );
// }

// export const Header = React.memo(HeaderComponent);
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Image from 'next/image';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher/LanguageSwitcher';
import Button from '@/shared/components/button/Button';

function HeaderComponent() {
  const { t, i18n } = useTranslation('header');
  const pathname = usePathname();

  const currentLocale = i18n.language;

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeClass = useMemo(
    () => ({
      home: pathname === `/${currentLocale}`,
      portfolio: pathname === `/${currentLocale}/portfolio`,
      aboutUs: pathname === `/${currentLocale}/about-us`,
      // contact: pathname === `/${currentLocale}/contact`,
      services: pathname.startsWith(`/${currentLocale}/services`),
    }),
    [pathname, currentLocale]
  );

  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>PixelPro Studio</div>
      <nav>
        <ul
          className={clsx(styles['nav-list'], {
            [styles['open-menu']]: isMenuOpen,
          })}
        >
          <li
            className={clsx(styles['nav-list-item'], {
              [styles['nav-list-item-active']]: activeClass.home,
            })}
          >
            <Link
              href={`/${currentLocale}`}
              className={styles['nav-list-link']}
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
          </li>
          <li
            className={clsx(styles['nav-list-item'], {
              [styles['nav-list-item-active']]: activeClass.portfolio,
            })}
          >
            <Link
              href={`/${currentLocale}/portfolio`}
              className={styles['nav-list-link']}
              onClick={closeMenu}
            >
              {t('portfolio')}
            </Link>
          </li>
          <li
            className={clsx(styles['nav-list-item'], {
              [styles['nav-list-item-active']]: activeClass.aboutUs,
            })}
          >
            <Link
              href={`/${currentLocale}/about-us`}
              className={styles['nav-list-link']}
              onClick={closeMenu}
            >
              {t('aboutUs')}
            </Link>
          </li>
          {/* <li
            className={clsx(styles["nav-list-item"], {
              [styles["nav-list-item-active"]]: activeClass.contact,
            })}
          >
            <Link
              href={`/${currentLocale}/contact`}
              className={styles["nav-list-link"]}
              onClick={closeMenu}
            >
              {t("contact")}
            </Link>
          </li> */}
          <li
            className={clsx(styles['nav-list-item'], styles['nav-services'], {
              [styles['nav-list-item-active']]: activeClass.services,
            })}
            onClick={toggleServices}
          >
            <span className={styles['nav-list-span']}>{t('services')}</span>
            {isServicesOpen && (
              <ul className={styles.submenu}>
                <li className={styles['submenu-item']}>
                  <Link
                    href={`/${currentLocale}/services/web-development`}
                    className={styles['submenu-link']}
                    onClick={closeMenu}
                  >
                    {t('webDevelopment')}
                  </Link>
                </li>
                <li className={styles['submenu-item']}>
                  <Link
                    href={`/${currentLocale}/services/videography`}
                    className={styles['submenu-link']}
                    onClick={closeMenu}
                  >
                    {t('videography')}
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className={styles.containerButtonTrans}>
        <LanguageSwitcher />
        <div className={styles.buttonContact}>
          <Button variant="variant1" data-aos="zoom-in" data-aos-delay="1000">
            {t('kontakt')}
          </Button>
        </div>
        <button
          onClick={toggleMenu}
          className={clsx(styles.menuButton, {
            [styles.hidden]: isMenuOpen && window.innerWidth >= 768,
          })}
        >
          <Image
            src="/icons/open.svg"
            alt="Open Menu"
            width={24}
            height={24}
            className={styles.iconsOpen}
          />
        </button>
      </div>
    </header>
  );
}

export const Header = React.memo(HeaderComponent);
