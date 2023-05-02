import styles from '../app.module.css'

function Game() {
    return (
        <div className={styles.gameWrapper}>
            <div className={styles.gameProgress}>
                <div
                    className={styles.gameProgressInner}
                    style={{ width: '50%' }}
                />
            </div>
            <div className={styles.gameContent}>
                <h1 className={styles.gameQuestion}>Question</h1>
                <ul className={styles.gameListAnswers}>
                    <li className={styles.gameAnswerOptions}>
                        Это функция для хранения данных компонента
                    </li>
                    <li className={styles.gameAnswerOptions}>
                        Это глобальный стейт
                    </li>
                    <li className={styles.gameAnswerOptions}>
                        Это когда на ты никому не нужен
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Game }
