import { useCallback, useState } from "react";

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    // useCallback để hàm không bị tạo lại mỗi lần chạy render
    const toggle = useCallback(() => {
        setValue((prevValue) => !prevValue);
    }, []);

    return [value, toggle, setValue];
}

export default useToggle;
