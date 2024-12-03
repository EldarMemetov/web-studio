"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./Header.module.css";
import Image from "next/image";

function HeaderComponent() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeClass = useMemo(
    () => ({
      home: pathname === "/",
      portfolio: pathname === "/portfolio",
      aboutUs: pathname === "/about-us",
      contact: pathname === "/contact",
      services: pathname.startsWith("/services"),
    }),
    [pathname],
  );

  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>PixelPro Studio</div>
      <nav>
        <ul
          className={clsx(styles["nav-list"], {
            [styles["open-menu"]]: isMenuOpen,
          })}
        >
          <li
            className={clsx(styles["nav-list-item"], {
              [styles["nav-list-item-active"]]: activeClass.home,
            })}
          >
            <Link
              href="/"
              className={styles["nav-list-link"]}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li
            className={clsx(styles["nav-list-item"], {
              [styles["nav-list-item-active"]]: activeClass.portfolio,
            })}
          >
            <Link
              href="/portfolio"
              className={styles["nav-list-link"]}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li
            className={clsx(styles["nav-list-item"], {
              [styles["nav-list-item-active"]]: activeClass.aboutUs,
            })}
          >
            <Link
              href="/about-us"
              className={styles["nav-list-link"]}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li
            className={clsx(styles["nav-list-item"], {
              [styles["nav-list-item-active"]]: activeClass.contact,
            })}
          >
            <Link
              href="/contact"
              className={styles["nav-list-link"]}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li
            className={clsx(styles["nav-list-item"], styles["nav-services"], {
              [styles["nav-list-item-active"]]: activeClass.services,
            })}
            onClick={toggleServices}
          >
            <span className={styles["nav-list-span"]}>Services</span>
            {isServicesOpen && (
              <ul className={styles.submenu}>
                <li className={styles["submenu-item"]}>
                  <Link
                    href="/services/web-development"
                    className={styles["submenu-link"]}
                    onClick={closeMenu}
                  >
                    Web Development
                  </Link>
                </li>
                <li className={styles["submenu-item"]}>
                  <Link
                    href="/services/videography"
                    className={styles["submenu-link"]}
                    onClick={closeMenu}
                  >
                    Videography
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

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
      <button className={styles.pulseButton}>Kontakt</button>
    </header>
  );
}

export const Header = React.memo(HeaderComponent);
