import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Biến kiểm tra mounted tránh fetch làm memory leak
        let isMounted = true;

        const fetchData = async () => {
            // Reset tất cả trạng thái
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
                }

                const result = await response.json();
                // Nếu còn mounted thì update state
                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        // Cleanup
        return () => {
            isMounted = false;
        };
    }, [url]);

    return children({ data, loading, error });
}

DataFetcher.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
};

export default DataFetcher;
