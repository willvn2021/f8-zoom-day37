import { useState } from "react";
import styles from "./SearchForm.module.scss";
import SearchResult from "./SearchResult";

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);
    const handleFocus = () => setIsOpen(true);
    //Dùng timeout để khi Click vào kết quả không bị ẩn đi nhanh quá
    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 150);
    };

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                placeholder="Tìm kiếm khóa học"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {isOpen && <SearchResult />}
        </div>
    );
}

export default SearchForm;
