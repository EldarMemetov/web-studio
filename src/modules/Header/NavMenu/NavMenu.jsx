'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './NavMenu.module.scss';

import Icon from '@/shared/Icon/Icon';

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

  // === Mobile Menu only for header variant ===
  if (variant === 'header') {
    return (
      <div
        className={clsx(styles.mobileMenuItem, {
          [styles.openMenu]: isMobileMenuOpen,
        })}
      >
        {isMobileMenuOpen && (
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
              className={clsx(styles.navItem, styles[variant], {
                [styles.active]: activeClass[key],
              })}
            >
              <Link
                href={`/${locale}${href}`}
                className={clsx(styles.navLink, styles[variant])}
                onClick={onCloseMenu}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // === Footer Variant ===
  return (
    <ul className={clsx(styles.navList, styles.footer)}>
      {links.map(({ href, key }) => (
        <li
          key={key}
          className={clsx(styles.navItem, styles.footer, {
            [styles.active]: activeClass[key],
          })}
        >
          <Link
            href={`/${locale}${href}`}
            className={clsx(styles.navLink, styles.footer)}
          >
            {t(key)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
