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
import Button from '@/shared/components/button/Button';

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
    <div
      className={clsx(styles.mobileMenuItem, {
        [styles.openMenu]: isMobileMenuOpen,
      })}
    >
      {variant === 'header' && isMobileMenuOpen && (
        <div className={styles.mobileHeader}>
          <button onClick={onToggleMenu} className={styles.menuClose}>
            <Icon iconName="icon-close" className={styles.iconClose} />
          </button>
          <div className={styles.mobileContact}>
            <h3 className={styles.titleMobile}>{t('haveQuestions')}</h3>
            <Button variant="variant4">{t('kontakt')}</Button>
          </div>
        </div>
      )}

      <ul className={clsx(styles.navList, styles[variant])}>
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
    </div>
  );
}
