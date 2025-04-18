'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './NavMenu.module.scss';
import Logo from '@/shared/Logo/Logo';
import Icon from '@/shared/Icon/Icon';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export default function NavMenu({
  variant = 'header',
  isMobileMenuOpen = false,
  onCloseMenu = () => {},
  onToggleMenu = () => {},
  locale,
}) {
  const { t } = useTranslation('header');
  const pathname = usePathname();

  const activeClass = useMemo(
    () => ({
      home: pathname === `/${locale}`,
      aboutUs: pathname === `/${locale}/about-us`,
      webDevelopment: pathname === `/${locale}/web-development`,
      videography: pathname === `/${locale}/videography`,
      blog: pathname === `/${locale}/blog`,
    }),
    [pathname, locale]
  );

  const links = [
    { href: '', key: 'home' },
    { href: '/about-us', key: 'aboutUs' },
    { href: '/web-development', key: 'webDevelopment' },
    { href: '/videography', key: 'videography' },
    { href: '/blog', key: 'blog' },
  ];

  return (
    <ul
      className={clsx(styles.navList, styles[variant], {
        [styles.openMenu]: isMobileMenuOpen,
      })}
    >
      {variant === 'header' && isMobileMenuOpen && (
        <div className={styles.mobileHeader}>
          <Logo />
          <button onClick={onToggleMenu} className={styles.menuClose}>
            <Icon iconName="icon-close" className={styles.iconClose} />
          </button>
        </div>
      )}

      {links.map(({ href, key }) => (
        <li
          key={key}
          className={clsx(styles.navItem, {
            [styles.active]: activeClass[key],
          })}
        >
          <Link
            href={`/${locale}${href}`}
            className={styles.navLink}
            onClick={onCloseMenu}
          >
            {t(key)}
          </Link>
        </li>
      ))}

      {variant === 'header' && isMobileMenuOpen && (
        <li className={styles.navItem}>
          <div className={styles.socialContainer}>
            <SocialLinks />
          </div>
        </li>
      )}

      {variant === 'footer' && (
        <>
          <div className={styles.footerLogo}>
            <Logo />
          </div>

          <li className={styles.navItem}>
            <div className={styles.socialContainer}>
              <SocialLinks />
            </div>
          </li>
        </>
      )}
    </ul>
  );
}
