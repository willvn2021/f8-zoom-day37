import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <h1>Modal Demo</h1>
            <p>Click vào nút bên dưới để mở Modal.</p>
            <button className={styles.openBtn} onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h2>Nội dung Modal</h2>
                <p>Đây là nội dung modal.</p>
                <p>
                    Bạn có thể đóng bằng phím "Escape" hoặc click ra ngoài
                    Overlay.
                </p>
                <button onClick={() => setIsOpen(false)}>OK</button>
            </Modal>
        </div>
    );
}

export default ModalDemo;
