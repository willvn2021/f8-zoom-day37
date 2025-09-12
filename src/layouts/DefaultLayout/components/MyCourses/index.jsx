import { useState } from "react";
import styles from "./MyCourses.module.scss";

// Images
import htmlCssProImage from "../../../../assets/images/html-css.png";
import javascriptProImage from "../../../../assets/images/js-pro.png";
import reactjsProImage from "../../../../assets/images/fullstack-online.png";

// Dữ liệu fake cho các khóa học
const fakeCourses = [
    {
        id: 1,
        title: "HTML CSS Pro",
        image: htmlCssProImage,
        url: "#",
    },
    {
        id: 2,
        title: "JavaScript Pro",
        image: javascriptProImage,
        url: "#",
    },
    {
        id: 3,
        title: "Lập Trình ReactJS Pro",
        image: reactjsProImage,
        url: "#",
    },
];

function MyCourses() {
    const [showCourses, setShowCourses] = useState(false);

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
        >
            <button className={styles.myCoursesBtn}>Khóa học của tôi</button>
            {showCourses && (
                <div className={styles.dropdown}>
                    <h3 className={styles.dropdownHeading}>Khóa học của tôi</h3>
                    <ul className={styles.courseList}>
                        {fakeCourses.map((course) => (
                            <li key={course.id} className={styles.courseItem}>
                                <a href={course.url}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={styles.courseImage}
                                    />
                                    <span className={styles.courseTitle}>
                                        {course.title}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className={styles.viewAll}>
                        Xem tất cả
                    </a>
                </div>
            )}
        </div>
    );
}

export default MyCourses;
