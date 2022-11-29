import { useState } from 'react';
import AddToDo from './todo/AddToDo';
import Header from './todo/Header';
import Modal from './todo/Modal';
import ToDoList from './todo/ToDoList';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const [todos, setTodos] = useState([]);
  // const [user, setUser] = useState(false);
  const [language, setLanguage] = useState('tr');
  const [dark, setDark] = useState(true);
  // const [modal, setModal] = useState(false);

  const { open: modalIsOpen } = useSelector(state => state.modal);

  // const close = () => setModal(false);

  return (
    <main className="App">
      {/* {modal && (
        <Modal
          close={close}
          setModal={setModal}
          name={modal.name}
          data={modal.data}
        />
      )}
      <Header user={user} setUser={setUser} />
      <AddToDo setTodos={setTodos} user={user} />
      <ToDoList
        setModal={setModal}
        todos={todos}
        setTodos={setTodos}
        user={user}
      /> */}
      {modalIsOpen && <Modal />}
      <Header />
      <AddToDo />
      <ToDoList />
    </main>
  );
}

export default App;
