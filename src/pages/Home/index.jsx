import styles from "./Home.module.scss";
import { Link } from "react-router";

function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Chào mừng bạn đã đến trang Home</h1>
            <p className={styles.subtitle}>
                Trang Demo F8, bấm vào các nút để xem Demo
            </p>
            <ul className={styles.navList}>
                <li>
                    <Link to="/profile" className={styles.navLink}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/ModalDemo" className={styles.navLink}>
                        Modal Demo
                    </Link>
                </li>
                <li>
                    <Link to="/ScrollDemo" className={styles.navLink}>
                        Scroll Demo
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
