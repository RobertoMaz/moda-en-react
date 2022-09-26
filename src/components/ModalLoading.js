import styles from "./modal.module.scss";

function ModalLoading() {


    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingView} >
                Loading...
            </div>
        </div>
    );
}

export default ModalLoading;