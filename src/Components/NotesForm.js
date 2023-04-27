import React, { useState, useEffect } from "react";
import "./NotesForm.css";

export default function NotesForm() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleOnChangeTitle = (e) => {};

  const handleOnChangeText = (e) => {
    // console.log(text);
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();
    const titleField = document.getElementById("title");
    const messageField = document.getElementById("text__area");
    setTitle(titleField.value);
    setText(messageField.value);

    const newNote = {
      title: titleField.value,
      text: messageField.value,
    };

    setNotes([...notes, newNote]);

    titleField.value = "";
    messageField.value = "";
  };

  return (
    <>
      <div className="wrapper">
        <div className="form">
          <input type="text" id="title" onChange={handleOnChangeTitle} />
          <textarea
            onChange={handleOnChangeText}
            id="text__area"
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn" onClick={handleSubmitNote}>
            Add note
          </button>
        </div>
        <div className="show__notes">
          <div className="notes__wrapper">
            {notes.map((note, index) => (
              <div className="note" key={index}>
                <h2 className="note__title">{note.title}</h2>
                <p className="note__message">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
