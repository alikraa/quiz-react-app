import styles from '../app.module.css'

function Result() {
    const image = 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
    return (
        <div className={styles.resultWrapper}>
            <img src={image} alt="Finish" className={styles.resultImg} />
            <h2 className={styles.resultTitle}>Вы отгадали 3 ответа из 10</h2>
            <button type="button" className={styles.resultButton}>
                Попробовать снова
            </button>
        </div>
    )
}

export { Result }
