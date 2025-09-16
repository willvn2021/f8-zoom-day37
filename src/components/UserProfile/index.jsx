import withLoading from "../../hoc/withLoading";
import styles from "./UserProfile.module.scss";

const UserProfile = withLoading(() => {
    // Dữ liệu người dùng giả
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    };

    return (
        <div className={styles.profileCard}>
            <img src={user.avatar} alt={`${user.name}'s avatar`} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
});

export default UserProfile;
