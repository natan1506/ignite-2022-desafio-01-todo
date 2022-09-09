import { Trash } from 'phosphor-react'
import { MouseEvent, useEffect, useState } from 'react'
import styles from './CardTodo.module.css'

interface CardTodoProps {
  todo: TodoProps,
  checkTodo: (id: string) => void,
  deleteTodoforId: (id: string) => void
}

export interface TodoProps {
  id: string,
  description: string,
  check: boolean
}

export function CardTodo({ todo, checkTodo, deleteTodoforId }: CardTodoProps) {
  const [isChecked, setIsChecked] = useState(todo.check)
  const [spanConclusion, setSpanConclusion] = useState(false);

  useEffect(() => {
    setSpanConclusion(todo.check)
  },[])

  function handleCheckedTodo(event: MouseEvent<HTMLInputElement>) {
    setIsChecked(!isChecked)
    checkTodo(todo.id)
    setSpanConclusion(!spanConclusion)
  }

  function handleDeleteTodo (id: string) {
    deleteTodoforId(id)
  }

  return (
    <div className={styles.cardTodo}>
      <div className={styles.checkboxRounded}>
        <input 
          type="checkbox" 
          id={`checkbox${todo.id}`} 
          onClick={handleCheckedTodo} 
          defaultChecked={isChecked}
        />
        <label htmlFor={`checkbox${todo.id}`}></label>
      </div>
      <span className={spanConclusion === true ? styles.spanTodoConclusion : styles.spanTodo }>{todo.description}</span>
      <a 
        onClick={() => {handleDeleteTodo(todo.id)}}
      >
        <Trash size={16}/>
      </a>
    </div>
  )
}