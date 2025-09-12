import styles from "./Header.module.scss";

// Components
import AppLogo from "../AppLogo";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import SearchForm from "../SearchForm";
import UserMenu from "../UserMenu";

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <AppLogo />
                </div>
                <SearchForm />
                <div className={styles.actions}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
