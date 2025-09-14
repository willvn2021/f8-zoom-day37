import { useEffect, useState } from "react";
import styles from "./GoToTop.module.scss";
import clsx from "clsx";

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    //Hiển thị khi cuộn xuống
    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY >= 300 ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        // Cleanup
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Hiệu ứng cuộn mượt mà
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={clsx(styles.goToTop, { [styles.show]: isVisible })}
            onClick={scrollToTop}
        >
            ⬆️
        </button>
    );
}

export default GoToTop;
