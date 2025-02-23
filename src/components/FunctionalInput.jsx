import React, { useState } from 'react';


//Implement a new class component, Count that displays the count of the number of todos, at any given time. 
// Count class component
class Count extends React.Component {
  render() {
    return (
      <div className="todo-count">
        Total tasks: {this.props.todos.length}
      </div>
    );
  }
}

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState('')

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  //delete button for each task.
  const handleDelete = (tdd) => {
    setTodos(todos.filter(todo => todo != tdd) )
  }
  
  
  //Implement an edit button for each task. It should replace the todo with an input field, and change the button itself to ‘Resubmit’, so the edits can be saved.
  const handleEdit = (tdd) => {
    setEditText(tdd);
    setEditingTodo(tdd);
  }
  
  const handleSaveEdit = () => {
    setTodos(todos.map(todo => 
      todo === editingTodo ? editText : todo
      ))
      setEditingTodo(null)
    }

  
  



  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <Count todos={todos} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
             {editingTodo === todo ? (
               <input 
               type='text'
               value={editText}
               onChange={(e) => setEditText(e.target.value)}
               />
             ) : (
              todo
             )} 
            <button 
            type='butoon' 
            onClick={() => editingTodo === todo ? handleSaveEdit() : handleEdit(todo)}>
              {editingTodo === todo ? 'Resubmit': 'Edit'}
            </button>
            <button 
            type='butoon'
            onClick={() =>  handleDelete(todo)}>
              Delete
            </button>        
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
