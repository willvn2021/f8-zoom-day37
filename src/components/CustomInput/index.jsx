import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./CustomInput.module.scss";
import PropTypes from "prop-types";

const CustomInput = forwardRef(
    ({ label, placeholder, value, onChange }, ref) => {
        const inputRef = useRef();

        // Các hàm custom trỏ tới input DOM thông qua phương thức useImperativeHandle
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current.focus();
            },
            blur: () => {
                inputRef.current.blur();
            },
            getValue: () => {
                return inputRef.current.value;
            },
        }));

        return (
            <div className={styles.field}>
                {label && <label className={styles.label}>{label}</label>}
                <input
                    type="text"
                    className={styles.input}
                    ref={inputRef}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
);

CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default CustomInput;
