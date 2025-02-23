import React, { Component } from 'react';


class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingTodo: null,  // Which todo we're editing
      editText: ''        // The edited text
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }


  handleDelete = (tdd) => {
    const currentTodos = this.state.todos;
    const newTodos = currentTodos.filter(todo => todo !== tdd);
    this.setState({ todos: newTodos});
  }


  handleEditClick = (todo) => {
    this.setState({
      editingTodo: todo,  // Set which todo we're editing
      editText: todo      // Start with original text
    });
  };
  
  handleSaveEdit = () => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => 
        todo === prevState.editingTodo ? prevState.editText : todo
      ),
      editingTodo: null,  // Stop editing
      editText: ''        // Clear edit text
    }));
  };
  
  handleEditChange = (e) => {
    this.setState({ editText: e.target.value });  // Update edited text
  };
  

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <div className="todo-count">
        Total tasks: {this.state.todos.length}
      </div>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {/* Show input field when editing */}
              {this.state.editingTodo === todo ? (
                <input
                  type="text"
                  value={this.state.editText}
                  onChange={this.handleEditChange}
                />
              ) 
              
              
              : (todo)}
              

              <button 
                type="button"
                onClick={() => this.state.editingTodo === todo ? this.handleSaveEdit() : this.handleEditClick(todo)} >
                {this.state.editingTodo === todo ? 'Save' : 'Edit'}
              </button>

             <button 
            type="button"
            onClick={() =>  this.handleDelete(todo)}>
              Delete
            </button>     
          
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
