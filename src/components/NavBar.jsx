import React, { useState } from "react";
import styles from "@/styles/navbar.module.css";
const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    const dropdown = document.querySelector(`.${styles.dropdown}`);
    dropdown.style.visibility = dropdownVisible ? "visible" : "";
  };
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.nav__list}>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Stock Video</li>
          </a>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Video Templates</li>
          </a>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Music</li>
          </a>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Sound Effects</li>
          </a>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Graphic Templates</li>
          </a>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Graphics</li>
          </a>
          <a
            href="/"
            target="blank"
            className={`${styles.nav__link} ${styles.pT}`}
          >
            <li className={styles.nav__items}>Presentation Templates</li>
          </a>
          <a href="/" className={`${styles.nav__link} ${styles.phot}`}>
            <li className={styles.nav__items}>Photos</li>
          </a>
          <a href="/" className={`${styles.nav__link} ${styles.fnts}`}>
            <li className={styles.nav__items}>Fonts</li>
          </a>
          {/* For Dropdown menu */}
          <section className={`${styles.dropdown} ${styles.section}`}>
            <a href="/" className={styles.nav__link}>
              <li className={styles.nav__items}>Presentation Templates</li>
            </a>
            <a href="/" className={styles.nav__link}>
              <li className={styles.nav__items}>Photos</li>
            </a>
            <a href="/" className={styles.nav__link}>
              <li className={styles.nav__items}>Fonts</li>
            </a>
          </section>
          <a className={`${styles.nav__link}`} onClick={toggleDropdown}>
            <li className={styles.nav__items}>More</li>
          </a>
        </ul>

        <ul className={styles.nav__list}>
          <a href="/" className={styles.nav__link}>
            <li className={styles.nav__items}>Learn</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
