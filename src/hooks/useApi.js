import { useEffect, useState, useCallback, useRef } from "react";

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dùng useRef để theo dõi component có còn mounted hay không.
    const isMountedRef = useRef(false);

    useEffect(() => {
        isMountedRef.current = true;
        // cleanup sẽ được gọi khi component unmount
        return () => {
            isMountedRef.current = false;
        };
    }, []); // Chạy 1 lần (mount) và cleanup 1 lần (unmount)

    const fetchData = useCallback(async () => {
        // Reset trạng thái trước khi fetch
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
            }
            const result = await response.json();
            // Chỉ cập nhật state nếu component còn mounted
            if (isMountedRef.current) {
                setData(result);
            }
        } catch (err) {
            if (isMountedRef.current) {
                setError(err);
            }
        } finally {
            if (isMountedRef.current) {
                setLoading(false);
            }
        }
    }, [url]);

    useEffect(() => {
        fetchData();
        // Effect này sẽ chạy khi component mount và khi `fetchData` thay đổi (chính là url thay đổi)
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

export default useApi;
