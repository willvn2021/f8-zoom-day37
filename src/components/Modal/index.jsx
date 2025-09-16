import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import clsx from "clsx";

const Modal = forwardRef((props, ref) => {
    const {
        isOpen = false,
        children,
        onRequestClose,
        shouldCloseOnOverlayClick = true,
        shouldCloseEscKey = true,
        onAfterOpen = () => {},
        onAfterClose = () => {},
        closeTimeoutMS = 0,
        overlayClassName,
        className,
        bodyOpenClassName = "modal-open-body",
        htmlOpenClassName = "modal-open",
    } = props;

    // Các hàm được phép cho component cha
    useImperativeHandle(ref, () => ({
        open: () => {
            return true;
        },
        close: () => {
            onRequestClose?.();
        },
        toggle: () => {
            return !isOpen;
        },
    }));

    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
        let timer;

        if (isOpen) {
            setIsRendered(true);
            // Gọi onAfterOpen sau khi animation mở kết thúc
            timer = setTimeout(() => {
                onAfterOpen();
            }, 300); //Set số thời gian phải khớp với time của transition
        } else {
            // Khi đóng, gọi onAfterClose và gỡ component sau khi animation kết thúc
            timer = setTimeout(() => {
                onAfterClose();
                setIsRendered(false);
            }, closeTimeoutMS);
        }
        // Cleanup: Xóa timer khi component bị unmount hoặc isOpen thay đổi
        return () => clearTimeout(timer);
    }, [isOpen, onAfterClose, onAfterOpen, closeTimeoutMS]);

    // Effect để xử lý sự kiện nhấn phím Escape
    useEffect(() => {
        if (!shouldCloseEscKey) return;

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
    }, [isOpen, onRequestClose, shouldCloseEscKey]);

    // Effect mặc định khóa cuộn trang khi đang Open Modal (body scroll)
    useEffect(() => {
        if (isOpen) document.body.classList.add(bodyOpenClassName);

        // Cleanup:Xóa class khi component unmount hoặc khi modal đóng
        return () => {
            document.body.classList.remove(bodyOpenClassName);
        };
    }, [isOpen, bodyOpenClassName]);

    // Effect để thêm class vào thẻ <html> khi modal mở
    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add(htmlOpenClassName);
        }

        // Cleanup
        return () => {
            document.documentElement.classList.remove(htmlOpenClassName);
        };
    }, [isOpen, htmlOpenClassName]);

    if (!isRendered) return null;

    return (
        // Overlay
        <div
            className={clsx(
                styles.overlay,
                { [styles.open]: isOpen },
                overlayClassName
            )}
            onClick={() => {
                if (shouldCloseOnOverlayClick) onRequestClose();
            }}
        >
            <div
                className={clsx(styles.body, className)}
                onClick={(e) => e.stopPropagation()}
            >
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
});

Modal.displayName = "Modal";

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    onRequestClose: PropTypes.func,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseEscKey: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
};

export default Modal;
