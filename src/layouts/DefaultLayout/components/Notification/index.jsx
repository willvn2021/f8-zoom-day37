import { useState, useRef } from "react";
import styles from "./Notification.module.scss";

// Images
import avatarQuocDung from "../../../../assets/images/avatar-quoc-dung.png";
import avatarSonDang from "../../../../assets/images/avatar-thay-son.jpg";
import avatarF8 from "../../../../assets/images/avatar-f8.png";

// Dữ liệu giả cho các thông báo
const fakeNotifications = [
    {
        id: 1,
        image: avatarSonDang,
        message:
            "Sơn Đặng đã bình luận về một bài viết trong khóa học HTML CSS Pro của bạn.",
        timestamp: "10 phút trước",
        isRead: false,
    },
    {
        id: 2,
        image: avatarQuocDung,
        message:
            "Quốc Dũng đã đăng một bài viết trong khóa học JavaScript Pro.",
        timestamp: "1 giờ trước",
        isRead: false,
    },
    {
        id: 3,
        image: avatarF8,
        message: "Khóa học ReactJS Pro sắp bắt đầu. Hãy chuẩn bị sẵn sàng!",
        timestamp: "Hôm qua",
        isRead: true,
    },
];

function Notification() {
    const [showNotify, setShowNotify] = useState(false);
    const timeoutRef = useRef(null);

    const unreadCount = fakeNotifications.filter(
        (notify) => !notify.isRead
    ).length;

    const handleMouseEnter = () => {
        // Nếu có hẹn giờ đóng dropdown thì hủy
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowNotify(true);
    };

    const handleMouseLeave = () => {
        // Hẹn giờ đóng dropdown sau 200ms
        timeoutRef.current = setTimeout(() => {
            setShowNotify(false);
        }, 200);
    };

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.notifyBtn}>
                <span>🔔</span>
                {unreadCount > 0 && (
                    <span className={styles.badge}>{unreadCount}</span>
                )}
            </div>

            {showNotify && (
                <div className={styles.dropdown}>
                    <header className={styles.header}>
                        <h3>Thông báo</h3>
                    </header>
                    <ul className={styles.notifyList}>
                        {fakeNotifications.map((notify) => (
                            <li
                                key={notify.id}
                                className={`${styles.notifyItem} ${
                                    notify.isRead ? styles.read : ""
                                }`}
                            >
                                <a href="#">
                                    <img
                                        src={notify.image}
                                        alt="Avatar"
                                        className={styles.avatar}
                                    />
                                    <div className={styles.info}>
                                        <p className={styles.message}>
                                            {notify.message}
                                        </p>
                                        <span className={styles.timestamp}>
                                            {notify.timestamp}
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <footer className={styles.footer}>
                        <a href="#">Xem tất cả</a>
                    </footer>
                </div>
            )}
        </div>
    );
}

export default Notification;
