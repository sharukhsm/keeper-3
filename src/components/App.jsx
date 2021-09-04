import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Saving the note items inside an array called notes(plural)
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* //Getting note from CreateArea->submitNote and passing it to addNote fn */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality
//- Create a variable that keeps track of the title and content
//- Pass the new note back to the app component.
//- Take the array and render seperate Note components for each item.

//2. Implement the delete note functionality
//- Callback from the note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass an id over to the Note component, pass it back to App when deleting.
