import { useState, useRef } from "react";
import styles from "./UserMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faGear,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import avatarQuocDungImage from "../../../../assets/images/avatar-quoc-dung.png";

// user Data Fake
const fakeUser = {
    name: "Quốc Dũng",
    avatar: avatarQuocDungImage,
};

// Danh sách các mục trong menu
const menuItems = [
    {
        icon: faUser,
        title: "Trang cá nhân",
        to: "/profile",
    },
    {
        icon: faGear,
        title: "Cài đặt",
        to: "/settings",
    },
    {
        icon: faRightFromBracket,
        title: "Đăng xuất",
        to: "/logout",
        separator: true, // Đánh dấu để tạo đường kẻ phân cách
    },
];

function UserMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowMenu(false);
        }, 200);
    };
    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.wrapper}
        >
            <img
                src={fakeUser.avatar}
                alt={fakeUser.name}
                className={styles.avatar}
            />

            {showMenu && (
                <div className={styles.dropdown}>
                    <div className={styles.userInfo}>
                        <img
                            src={fakeUser.avatar}
                            alt={fakeUser.name}
                            className={styles.avatar}
                        />
                        <span className={styles.userName}>{fakeUser.name}</span>
                    </div>
                    <ul className={styles.menuList}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={styles.menuItem}>
                                <a href={item.to}>
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className={styles.icon}
                                    />
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
