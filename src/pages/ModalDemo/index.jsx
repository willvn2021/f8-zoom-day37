import { useRef, useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

function ModalDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    // Tạo function quản lý khi muốn dùng qua ref
    const handleOpenImperative = () => {
        const shouldOpen = modalRef.current?.open();
        if (shouldOpen) setIsOpen(true);
    };

    const handleCloseImperative = () => {
        modalRef.current?.close();
    };

    const handleToggleImperative = () => {
        setIsOpen(modalRef.current?.toggle());
    };

    return (
        <div className={styles.wrapper}>
            <h1>Modal Demo</h1>
            <p>Click vào nút bên dưới để mở Modal.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ratione rem ipsam accusantium iusto. Omnis delectus ratione,
                accusamus dignissimos tempore sit eos qui maxime, quas neque,
                doloremque incidunt numquam culpa necessitatibus facilis
                eligendi consequatur rerum veritatis recusandae soluta.
                Recusandae temporibus officia cumque quia ad expedita quibusdam
                nobis doloribus obcaecati quis! Odio ducimus dicta, ad voluptas
                sed placeat quod! Perspiciatis alias nesciunt quos libero
                officia eligendi excepturi ad facilis voluptatum cupiditate
                necessitatibus saepe provident, neque aliquam dolorum. Nostrum,
                doloribus explicabo. Libero, vel cum. Assumenda debitis ratione
                deserunt. Quos, pariatur corrupti soluta voluptates aliquid
                adipisci inventore explicabo fuga ullam, nulla, nisi doloremque
                ducimus distinctio rem. Molestias amet, veniam pariatur illum
                odit dolore eum dolorem sunt asperiores laboriosam veritatis
                quas at qui, unde temporibus, omnis ducimus facilis ea
                accusantium quaerat suscipit vel! Accusantium dolore qui quae
                sequi, nihil magni quidem beatae, esse eaque laborum fugiat
                saepe sint numquam fuga, possimus animi ipsam dicta. Cupiditate
                explicabo voluptatibus incidunt placeat.
            </p>
            <button className={styles.openBtn} onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <div className={styles.imperativeActions}>
                <button onClick={handleOpenImperative}>Open với Ref</button>
                <button onClick={handleCloseImperative}>Close với Ref</button>
                <button onClick={handleToggleImperative}>Toggle với Ref</button>
            </div>
            <p>
                Distinctio perferendis fugit ex aspernatur eveniet quis hic,
                consequatur quae autem eaque? Explicabo sunt cupiditate
                assumenda reprehenderit aliquam a delectus quidem minus facilis!
                Voluptatum, reiciendis? Harum hic ex voluptates, esse
                repellendus doloremque aut necessitatibus explicabo provident,
                nihil quibusdam eligendi quidem eveniet dignissimos numquam quos
                quae praesentium quam aspernatur distinctio. Neque
                exercitationem suscipit incidunt ullam quis aspernatur
                dignissimos molestiae vero, minus voluptates porro odit
                laudantium. Animi nihil quo dolorum ea et, libero iste
                perferendis doloribus dolorem rerum harum minima amet illum
                explicabo omnis eos repudiandae esse dolor enim. Quos, impedit!
                Debitis, assumenda reprehenderit! Nam quo praesentium cum, at
                repellendus corrupti animi fuga aperiam aliquam pariatur nostrum
                quidem nesciunt corporis, est voluptatem! Ex at accusantium quod
                error labore laboriosam. Sed ea dolorum facere sapiente sunt
                odit exercitationem dignissimos laudantium perferendis iste iure
                neque magnam architecto eum, minima impedit alias possimus
                quisquam minus nisi. Dicta cumque libero architecto nostrum quod
                recusandae qui veniam ex. Cum minus autem deleniti ea sed quis
                sunt corrupti quam mollitia quia, pariatur quas repellendus,
                sequi commodi necessitatibus ipsam voluptatum voluptatem quasi
                deserunt sit harum quidem. Aliquid quisquam iure illo ratione
                vel ad esse, modi suscipit! Voluptatem quasi corrupti
                reprehenderit. Nihil quo ab ipsam. Mollitia, corporis aspernatur
                minima enim in consequuntur porro vitae eius sunt quos odit
                voluptas ex vero perferendis. Fugit aut minima veritatis
                provident similique tenetur consequuntur nisi, dolor earum quam
                cumque labore ducimus aliquam harum corrupti officiis odit.
                Itaque rerum corporis dolorum soluta, consequuntur aut. Non
                officiis soluta quisquam animi totam. Rerum, ratione voluptate
                sed adipisci eius eaque repellendus dolor voluptatem earum
                temporibus fuga animi esse voluptatibus veniam dicta consequatur
                pariatur aliquam maxime? Ut dolorum unde aliquid, tempora autem
                tempore corporis, voluptates atque nemo est sunt. Asperiores
                quia fugiat eligendi repellat assumenda iste aspernatur in est
                unde facilis enim, veritatis earum vero. Voluptates officia
                laborum hic aperiam distinctio quasi architecto assumenda
                molestias maiores, tempora ex fuga exercitationem accusantium
                quos vel optio! Labore numquam placeat nulla sapiente beatae id
                ipsam, magnam illum recusandae enim sint minima debitis itaque
                necessitatibus, eos ex! At tempore fugit, iste minima atque
                dolore quibusdam! Officia, veniam quisquam!
            </p>

            <Modal
                ref={modalRef}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnOverlayClick={false}
                shouldCloseEscKey={false}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
                closeTimeoutMS={500}
                overlayClassName={styles.customOverlay}
                className={styles.customModalBody}
            >
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
