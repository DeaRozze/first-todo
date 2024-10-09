const TodoInput = ({ todo, setTodo, addTodo}) => {
  return (
  <div className='input-wrapper'>
    <input
      type='text'
      name='todo'
      value={todo}
      placeholder='Создай новую задачу'
      onChange={(e) => {
        setTodo(e.target.value)
      }}
    />
    <button className='add-button' onClick={addTodo}>Добавить</button>
  </div>
  )
}

export default TodoInput;
