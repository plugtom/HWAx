import { useState } from "react";
import axios from 'axios';

function TodoItem(props) {
  const { job, setTrigger } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(job.todo);

  const handleSaveEdit = () => {
    axios.put(`http://localhost:8000/todos/${job.id}`, { todo: editedTodo }).then(res => {
      console.log(res);
      setTrigger(prev => !prev);
      setIsEditing(false);
    });
  };

  const hdldrl = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(res => {
      console.log(res);
      setTrigger(prev => !prev);
    });
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        <p>{job.todo}</p>
      )}
      <div className="btn-group">
        {isEditing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button class="outline outline-offset-4" onClick={() => hdldrl(job.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
