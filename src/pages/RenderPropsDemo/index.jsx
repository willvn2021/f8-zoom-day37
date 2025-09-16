import DataFetcher from "../../components/DataFetcher";
import LoadingSpinner from "../../components/LoadingSpinner";
import TitleCap from "../../components/TitleCap";
import styles from "./RenderPropsDemo.module.scss";

function RenderPropsDemo() {
    return (
        <div className={styles.wrapper}>
            <h1>Render Prop Demo</h1>

            {/* DataFetcher Posts List */}
            <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                {({ data, loading, error }) => {
                    if (loading) {
                        return (
                            <div className={styles.stateContainer}>
                                <LoadingSpinner />
                            </div>
                        );
                    }
                    if (error) {
                        return (
                            <div
                                className={`${styles.stateContainer} ${styles.error}`}
                            >
                                Error: {error.message}
                            </div>
                        );
                    }

                    return (
                        <div className={styles.card}>
                            <h3>Posts</h3>
                            {data?.map((post) => (
                                <div key={post.id} className={styles.item}>
                                    <TitleCap>{post.title}</TitleCap>
                                </div>
                            ))}
                        </div>
                    );
                }}
            </DataFetcher>

            {/* DataFetcher Users List */}
            <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                {({ data, loading, error }) => {
                    if (loading) {
                        return (
                            <div className={styles.stateContainer}>
                                <LoadingSpinner />
                            </div>
                        );
                    }
                    if (error) {
                        return (
                            <div
                                className={`${styles.stateContainer} ${styles.error}`}
                            >
                                Error: {error.message}
                            </div>
                        );
                    }

                    return (
                        <div className={styles.card}>
                            <h3>Users</h3>
                            {data?.map((user) => (
                                <div key={user.id} className={styles.item}>
                                    <TitleCap>{user.name}</TitleCap> -{" "}
                                    {user.email}
                                </div>
                            ))}
                        </div>
                    );
                }}
            </DataFetcher>
        </div>
    );
}

export default RenderPropsDemo;
