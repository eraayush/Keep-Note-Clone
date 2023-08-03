import { useState } from 'react';
import './createNote.css';

export default function CreateNote({ addNote }) {
  const [note, setNote] = useState({
    id: Math.random(),
    title: '',
    content: '',
  });
  const [expand, setExpand] = useState(false);

  function expandItem() {
    setExpand(true);
  }

  function backToNormal() {
    setExpand(false);
  }

  function InputEvent(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  }

  function addEvent(e) {
    console.log(e);
    const typedTag = e?.relatedTarget?.localName;
    if (typedTag !== 'input' && typedTag !== 'textarea') {
      if (note.title !== '' || note.content !== '') {
        addNote(note);
        setNote({ title: '', content: '' });
      }
    }

    // setNote({ title: '', content: '' });
    // setExpand(false);
  }

  return (
    <>
      <div
        className="d-flex justify-content-center"
        onDoubleClick={backToNormal}>
        <form className="rounded mt-4" onBlur={addEvent}>
          {expand ? (
            <input
              type="text"
              className={expand ? 'show' : 'hide'}
              placeholder="Title"
              autoComplete="off"
              value={note.title}
              onChange={InputEvent}
              name="title"
            />
          ) : null}
          <textarea
            type="text"
            className={expand ? 'my-3' : 'm-0'}
            placeholder="Take a note....."
            value={note.content}
            onChange={InputEvent}
            name="content"
            onClick={expandItem}
            rows="1"
            cols="1"
          />
          {/* {expand ? (
            <button className="btn btn-primary" onClick={addEvent}>
              Add
            </button>
          ) : null} */}
        </form>
      </div>
    </>
  );
}
