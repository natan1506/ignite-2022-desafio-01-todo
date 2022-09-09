import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CardTodo, TodoProps } from '../CardTodo'
import { InsertTodo } from '../InsertTodo'
import { NotTodo } from '../NotTodo'
import styles from './Body.module.css'

const todos = [
  {
    id: 1,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    check: true
  },
  {
    id: 2,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    check: false
  },
  {
    id: 3,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    check: false
  },
  {
    id: 4,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    check: false
  },
]

export function Body() {
  const [countCreated, setCountCreated] = useState(0);
  const [countConclusion, setCountConclusion] = useState('0 de 0');
  const [listTodo, setListTodo] = useState<TodoProps[]>([]);

  useEffect(() => {
    setCountCreated(listTodo.length);
    countConclusionTodo();
  }, [listTodo])

  const countConclusionTodo = () => {
    const filterConclusionTodo = listTodo.filter((todo) => todo.check === true);
    setCountConclusion(`${filterConclusionTodo.length} de ${listTodo.length}`)
  }

  const checkTodo = (id: string) => {
    const arrTodos = listTodo;
    const objIndex = arrTodos.findIndex(element => element.id == id);
    arrTodos[objIndex].check = !arrTodos[objIndex].check;
    setListTodo(arrTodos)
    countConclusionTodo();
  }

  const newTodo = (todo: string) => {
    const newTodo = {
      id: uuidv4(),
      description: todo,
      check: false
    }

    setListTodo([...listTodo, newTodo])
    setCountCreated(listTodo.length)
  }

  const deleteTodoforId = (id: string) => {
    const listTodoDelete = listTodo.filter(element => element.id != id);
    setListTodo(listTodoDelete)
    console.log(listTodoDelete.length, listTodo)
    setCountCreated(listTodo.length)
  }
  
  return (
    <div className={styles.content}>
      <InsertTodo newTodo={newTodo}/>
      <div className={styles.listTodo}>
        <div className={styles.title}>
          <span className={styles.createdTodo}>Tarefas criadas <span>{countCreated}</span></span>
          <span className={styles.doneTodo}>Concluídas <span>{countConclusion}</span></span>
        </div> 
        {listTodo.length > 0 ?
          listTodo.map(item =>
            <CardTodo todo={item} key={item.id} checkTodo={checkTodo} deleteTodoforId={deleteTodoforId} />
            ) 
          :
          <NotTodo />
        }
      </div>
    </div>
  )
}