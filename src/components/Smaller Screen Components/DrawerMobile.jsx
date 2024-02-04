import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "@/styles/Mobile styles/drawerMob.module.css";

const DrawerMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <svg
        className={styles.menu__hamburger}
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 -960 960 960"
        width="40"
        onClick={toggleDrawer}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <Drawer
        open={isOpen}
        // onClose={toggleDrawer}
        direction="left"
        // size="100vw"
        className="bla bla bla"
      >
        <div onClick={toggleDrawer}>Hello World</div>
      </Drawer>
    </>
  );
};

export default DrawerMobile;
