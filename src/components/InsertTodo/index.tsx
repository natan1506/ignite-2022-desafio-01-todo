import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { PlusCircle } from "phosphor-react";
import styles from './InsertTodo.module.css'


interface InsertTodoProps {
  newTodo: (todo: string) => void,
}

export function InsertTodo({ newTodo }: InsertTodoProps){
  const [newTodoText, setNewTodoText] = useState('')

  function handleCreateNewTodo (event: FormEvent) {
    event.preventDefault();
    newTodo(newTodoText)
    setNewTodoText('');
  }

  function handleNewTodoChange (event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodoText(event?.target.value)
  }

  function handleNewTodoInvalid (event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTodoEmpty = newTodoText.length === 0;

  return (
    <form className={styles.formInsert} onSubmit={handleCreateNewTodo}>
      <input 
        type="text" 
        onChange={handleNewTodoChange}
        value={newTodoText}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <button 
        type="submit" 
        disabled={isNewTodoEmpty}
      >
        Criar
        <PlusCircle size={15} />
      </button>
    </form>
  )
}