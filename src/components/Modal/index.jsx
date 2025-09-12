import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import clsx from "clsx";

function Modal({ isOpen = false, children, onRequestClose }) {
    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        } else {
            // Khi đóng, đợi animation kết thúc rồi mới gỡ component khỏi DOM
            const timer = setTimeout(() => {
                setIsRendered(false);
            }, 300); // Số giây phải khớp với thời gian transition trong SCSS
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Effect để xử lý sự kiện nhấn phím Escape
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.code === "Escape") {
                onRequestClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keyup", handleKeyUp);
        }

        // Cleanup effect
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [isOpen, onRequestClose]);

    if (!isRendered) return null;

    return (
        <div
            className={clsx(styles.overlay, { [styles.open]: isOpen })}
            onClick={onRequestClose}
        >
            <div className={styles.body} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeBtn}
                    onClick={onRequestClose}
                    aria-label="Đóng modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    onRequestClose: PropTypes.func,
};

export default Modal;
