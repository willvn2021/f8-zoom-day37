import styles from "./Home.module.scss";
import { Link } from "react-router";

const navLinks = [
    { to: "/profile", name: "Profile" },
    { to: "/ModalDemo", name: "Modal Demo" },
    { to: "/ScrollDemo", name: "Scroll Demo" },
    { to: "/PerformanceDemo", name: "Performance Demo" },
    { to: "/FocusDemo", name: "Focus Demo" },
    { to: "/HOCDemo", name: "HOC Demo" },
    { to: "/RenderPropsDemo", name: "Render Props Demo" },
    { to: "/CustomHooksDemo", name: "Custom Hooks Demo" },
];

function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Chào mừng bạn đã đến trang Home</h1>
            <p className={styles.subtitle}>
                Trang Demo F8, bấm vào các nút để xem Demo
            </p>
            <ul className={styles.navList}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to} className={styles.navLink}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
