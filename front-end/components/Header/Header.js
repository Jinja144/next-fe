import React from "react";
import styles from "./header.module.scss";

const Header = ({children}) => {
    return (<div className={styles.wrapper}>{children}</div>)
}

export default Header;