import styles from './app.module.css'
import { Game } from './components/game.tsx'
import { Result } from './components/result.tsx'

function App() {
    return (
        <div className={styles.quizWrapper}>
            <Game />
            {/* <Result /> */}
        </div>
    )
}

export { App }
