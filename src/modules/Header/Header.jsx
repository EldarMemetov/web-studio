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
