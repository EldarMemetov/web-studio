'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from './NavMenu.module.scss';

import Icon from '@/shared/Icon/Icon';
import ScrollButton from '@/shared/ScrollButton/ScrollButton';

function useIsMobile(breakpoint = 1154) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < breakpoint);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export default function NavMenu({
  variant = 'header',
  isMobileMenuOpen = false,
  onCloseMenu = () => {},
  onToggleMenu = () => {},
}) {
  const { t, i18n } = useTranslation('header');
  const locale = i18n.language;
  const pathname = usePathname();
  const isMobile = useIsMobile(1154);

  const links = useMemo(
    () => [
      { href: '', key: 'home' },
      { href: '/about-us', key: 'aboutUs' },
      { href: '/web-development', key: 'webDevelopment' },
      { href: '/videography', key: 'videography' },
      { href: '/blog', key: 'blog' },
    ],
    []
  );

  const activeClass = useMemo(() => {
    return links.reduce((acc, { href, key }) => {
      acc[key] = pathname === `/${locale}${href}`;
      return acc;
    }, {});
  }, [pathname, locale, links]);

  if (variant === 'header') {
    if (isMobile) {
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
                <ScrollButton
                  onClick={onCloseMenu}
                  targetId="feedback-form"
                  variant="variant4"
                >
                  {t('kontakt')}
                </ScrollButton>
              </div>
            </div>
          )}
          <ul className={clsx(styles.navList, styles.header)}>
            {links.map(({ href, key }) => (
              <li
                key={key}
                className={clsx(styles.navItem, styles.header, {
                  [styles.active]: activeClass[key],
                })}
              >
                <Link
                  href={`/${locale}${href}`}
                  className={clsx(styles.navLink, styles.header)}
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

    return (
      <ul className={clsx(styles.navList, styles.header)}>
        {links.map(({ href, key }) => (
          <li
            key={key}
            className={clsx(styles.navItem, styles.header, {
              [styles.active]: activeClass[key],
            })}
          >
            <Link
              href={`/${locale}${href}`}
              className={clsx(styles.navLink, styles.header)}
            >
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

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
