import Header from './component/Header';
import Footer from './component/Footer';
import CreateNote from './component/CreateNote/CreateNote';
import Note from './component/Note/Note';
import './App.css';
import { useState } from 'react';

function App() {
  const [additem, setAdditem] = useState([]);
  const [saveNote, setsaveNote] = useState(false);

  function addNote(n) {
    console.log('additem', additem);
    setAdditem((prevData) => {
      return [...prevData, n];
    });
  }

  const onDelete = (id) => {
    const updateData = additem.filter((elem, index) => index !== id);
    setAdditem(updateData);
  };

  const saveHandler = () => {
    setsaveNote(true);
    console.log('save');
  };

  return (
    <>
      <div className="App" onClick={saveHandler}>
        <Header />
        <div className="container overflow-hidden">
          <CreateNote addNote={addNote} saveNote={saveNote} />
          <div className="row justify-content-center row-cols-6 mt-5">
            {additem.map((val, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}
                />
              );
            })}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
