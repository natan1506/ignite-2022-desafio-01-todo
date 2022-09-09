import List from '../../assets/Clipboard.svg'
import styles from './NotTodo.module.css'

export function NotTodo() {
  return (
    <div className={styles.divNotTodo}>
      <div className={styles.contentNotTodo}>
        <div className={styles.divImg}>
          <img src={List} />
        </div>

        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}