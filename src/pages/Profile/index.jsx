import styles from "./Profile.module.scss";
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import { useEffect, useState } from "react";

function Profile() {
    const [previewURL, setPreviewURL] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewURL);
        };
    }, [previewURL]);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const previewURL = URL.createObjectURL(image);
        setPreviewURL(previewURL);
    };

    return (
        <div className={styles.wrapper}>
            <label>
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleChange}
                ></input>
                <img
                    alt="avatar"
                    src={previewURL || defaultAvatar}
                    className={styles.avatar}
                />
            </label>
        </div>
    );
}

export default Profile;
