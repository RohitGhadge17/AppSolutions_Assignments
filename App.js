import './App.css';
import {db} from './firebase';
import {uid} from 'uid';
import { onValue, ref, remove, set, update } from 'firebase/database';
import { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  //read
  useEffect(() => {
    onValue(ref(db), snapshot => {
      setTodos([]);
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map((todo) => {
          setTodos(oldArray => [...oldArray, todo])
        });
      }
    })
  },[])
  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db,`/${uuid}`), {
      todo,
      uuid
    })

    setTodo("");
  }
  //edit
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid)
    setTodo(todo.todo);
  }

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    })

    setTodo("");
    setIsEdit(false);
  }

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`))
  }
  return (
    <div className="container">
      <label className='form-label'><h3>Product Description</h3></label>
      <input type="text" className='form-control' value={todo} onChange={handleTodoChange} />
      <br></br>
      {isEdit ? (
        <>
          <button className='btn btn-primary' onClick={handleSubmitChange}>Submit Changes</button>
          <button className='btn btn-danger' onClick={() => {setIsEdit(false); setTodo("")}}>Close</button>
        </>
      ) : (
        <button className='btn btn-primary' onClick={writeToDatabase}>Submit</button>
      )}<hr></hr>
      {todos.map(todo => (
        <>
          <h1>{todo.todo}</h1>
          <button className='btn btn-primary' onClick={() => handleUpdate(todo)}>update</button>
          <button className='btn btn-danger' onClick={() => handleDelete(todo)}>delete</button>
          <hr></hr>
        </>
      ))}
    </div>
  );
}

export default App;
