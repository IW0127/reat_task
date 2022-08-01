import React, { useState } from 'react';

const TodoList = () => {
  const [addTodo, setAddTodo] = useState([]);
  const [todo, setTodo] = useState('');
  const [save, setSave] = useState(false);
  const [setId, setSetId] = useState(null);

  const onclickAddTodo = () => {
    if (todo !== '') {
      setAddTodo([...addTodo, todo]);
      setTodo('');
      setSave(false);
    }
  };

  const onchangeTodo = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
  };

  const onclickEditTodo = (e) => {
    const id = Number(e.target.dataset.id);
    setTodo(addTodo[id]);
    setSave(true);
    setSetId(id);
  };

  const onclickSave = (e) => {
    const id = Number(e.target.dataset.id);
    const updateTodo = [];
    addTodo.map((edit, key) => {
      if (id !== key) {
        updateTodo.push(edit);
      } else {
        updateTodo.push(todo);
      }
    });
    setAddTodo([...updateTodo]);
    setTodo('');
    setSave(false);
  };

  const onclickDeleteTodo = (e) => {
    const id = Number(e.target.dataset.id);
    const deleteTodo = [];
    addTodo.map((del, key) => {
      if (id !== key) deleteTodo.push(del);
    });
    setAddTodo([...deleteTodo]);
  };

  return (
    <div className='container text-center my-3 d-flex justify-content-center flex-column align-items-center'>
      <div className='input-group mb-3 w-25'>
        <input
          type='text'
          className='form-control'
          placeholder='Add Todo'
          aria-label='Text input with dropdown button'
          value={todo}
          onChange={onchangeTodo}
        />
        {!save ? (
          <button
            className='btn btn-primary'
            type='button'
            aria-expanded='false'
            onClick={onclickAddTodo}
            disabled={todo === ''}
          >
            Add
          </button>
        ) : (
          <button
            className='btn btn-success'
            data-id={setId}
            onClick={onclickSave}
          >
            Save
          </button>
        )}
      </div>
      <table className='table align-middle mb-0 bg-white w-50'>
        <thead className='bg-light'>
          <tr>
            <th>Todos</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addTodo.map((todo, id) => (
            <tr key={id}>
              <td>
                <p className='fw-normal mb-1'>{todo}</p>
              </td>

              <td>
                <button
                  className='btn btn-primary btn-sm btn-rounded'
                  onClick={onclickEditTodo}
                  data-id={id}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger btn-sm btn-rounded'
                  onClick={onclickDeleteTodo}
                  data-id={id}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
