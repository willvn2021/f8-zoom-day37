import { Link } from "react-router";
import logo from "../../../../assets/images/f8-logo.png";
import styles from "./AppLogo.module.scss";

function AppLogo() {
    return (
        <Link to="/" className={styles.wrapper}>
            <img src={logo} alt="F8 Logo" className={styles.logo} />
            <span className={styles.text}>Học Lập Trình Để Đi Làm</span>
        </Link>
    );
}

export default AppLogo;
