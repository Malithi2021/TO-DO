import React , {useState} from 'react'
import TodoForm from './TodoForm';
import ToDo from './ToDo';
import { v4 as uuidv4} from 'uuid';
import EditToDoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

 
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, 
      completed:false,isEditing:false}]);
  
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));


  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    
          <div className='TodoWrapper'>
          <h1>Get Things Done!</h1>
     <TodoForm addTodo={addTodo}/>
     {todos.map((todo,index) => (
      todo.isEditing ? (
        <EditToDoForm  editTodo={editTask} task={todo} />
      ):(
        <ToDo task={todo}
         key={todo.id} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
           editTodo={editTodo}
        />
      )
      
     ))}
    
    </div>
   
  
  )
}

export default ToDoWrapper;
