/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const {todos,setTrigger} = props
  return (
    <div className="todo-container">
    { todos.map( el=> (
      <TodoItem key={el.id} job={el}  setTrigger={setTrigger}/>
    ))   
    }  
    
    </div>
  )
}

export default TodoContainer