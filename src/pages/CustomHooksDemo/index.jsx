import clsx from "clsx";
import LoadingSpinner from "../../components/LoadingSpinner";
import TitleCap from "../../components/TitleCap";
import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToggle";
import styles from "../RenderPropsDemo/RenderPropsDemo.module.scss";

function PostList() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (loading) {
        return (
            <div className={styles.stateContainer}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={`${styles.stateContainer} ${styles.error}`}>
                Error: {error.message}
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h3>Posts</h3>
            <button onClick={refetch}>Refetch</button>
            {data?.map((post) => (
                <div key={post.id} className={styles.item}>
                    <TitleCap>{post.title}</TitleCap>
                </div>
            ))}
        </div>
    );
}

function UserList() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
    );

    if (loading) {
        return (
            <div className={styles.stateContainer}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={`${styles.stateContainer} ${styles.error}`}>
                Error: {error.message}
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h3>Users</h3>
            <button onClick={refetch}>Refetch</button>
            {data?.map((user) => (
                <div key={user.id} className={styles.item}>
                    <TitleCap>{user.name}</TitleCap> - {user.email}
                </div>
            ))}
        </div>
    );
}

function CustomHooksDemo() {
    const [showPosts, toggleShowPosts] = useToggle(true);
    const [showUsers, toggleShowUsers] = useToggle(false);
    const [isDark, toggleTheme] = useToggle(false);

    return (
        <div className={clsx(styles.wrapper, { [styles.dark]: isDark })}>
            <h1>Custom Hooks Demo</h1>

            {/* Nút chuyển đổi dark/light */}
            <button className={styles.themeToggleButton} onClick={toggleTheme}>
                {isDark ? "💡 Light" : "⚫ Dark"}
            </button>

            <div className={styles.divider}></div>

            {/* Section for Posts */}
            <div className={styles.card}>
                <button
                    className={styles.toggleButton}
                    onClick={toggleShowPosts}
                >
                    {showPosts ? "Hide Posts" : "Show Posts"}
                </button>
                {showPosts && <PostList />}
            </div>

            {/* Section for Users */}
            <div className={styles.card}>
                <button
                    className={styles.toggleButton}
                    onClick={toggleShowUsers}
                >
                    {showUsers ? "Hide Users" : "Show Users"}
                </button>
                {showUsers && <UserList />}
            </div>
        </div>
    );
}

export default CustomHooksDemo;
