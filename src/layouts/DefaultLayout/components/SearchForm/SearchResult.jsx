import styles from "./SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faNewspaper,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

// Dữ liệu giả cho kết quả tìm kiếm
const fakeData = {
    courses: {
        title: "KHÓA HỌC",
        icon: faBook,
        items: [
            {
                title: "Khóa học JavaScript Cơ Bản",
                desc: "Học JavaScript cơ bản cho người mới bắt đầu.",
            },
            {
                title: "Khóa học JavaScript Nâng Cao",
                desc: "Đi sâu vào các khái niệm nâng cao trong JavaScript.",
            },
            {
                title: "Xây dựng Web với ReactJS & JavaScript",
                desc: "Thực hành xây dựng ứng dụng web hiện đại.",
            },
        ],
    },
    posts: {
        title: "BÀI VIẾT",
        icon: faNewspaper,
        items: [
            {
                title: "Hướng dẫn học JavaScript hiệu quả",
                desc: "Các phương pháp học JavaScript tốt nhất.",
            },
            {
                title: "ES6 là gì? Các tính năng mới",
                desc: "Tổng quan về các tính năng của ECMAScript 2015.",
            },
            {
                title: "So sánh JavaScript, TypeScript",
                desc: "Nên chọn ngôn ngữ nào cho dự án của bạn?",
            },
        ],
    },
    videos: {
        title: "VIDEO",
        icon: faVideo,
        items: [
            {
                title: "Làm chủ vòng lặp trong JavaScript",
                desc: "Video hướng dẫn chi tiết về for, while, do-while.",
            },
            {
                title: "Series JavaScript cho người mới",
                desc: "Chuỗi video học lập trình JavaScript từ A-Z.",
            },
        ],
    },
};

function SearchResult() {
    return (
        <div className={styles.searchResult}>
            {Object.values(fakeData).map((group, index) => (
                <div key={index} className={styles.group}>
                    <h4 className={styles.groupTitle}>
                        <FontAwesomeIcon
                            icon={group.icon}
                            className={styles.groupIcon}
                        />
                        {group.title}
                    </h4>
                    <ul className={styles.itemList}>
                        {group.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.item}>
                                <div className={styles.itemInfo}>
                                    <span className={styles.itemTitle}>
                                        {item.title}
                                    </span>
                                    <p className={styles.itemDesc}>
                                        {item.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {group.items.length > 0 && (
                        <div className={styles.viewMore}>Xem thêm</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SearchResult;
