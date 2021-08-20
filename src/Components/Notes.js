import React, { useState, useEffect, useRef } from "react";
import pic from "../pics/p1.jpg";
import { firestore as db } from "../firebase";

const Notes = () => {
  const collection = db.collection("notes");
  const characters = [
    "ראמזי",
    "כוכבה",
    "שירה",
    "אסתי",
    "ניסים",
    "אנטולי",
    "אמנון",
  ];

  const [valid1, setValid1] = useState(true);
  const [valid2, setValid2] = useState(true);
  const [note, setNote] = useState("");
  const [character, setCharacter] = useState("");
  const [notes, setNotes] = useState([]);
  const [added, setAdded] = useState(false);
  const input1Ref = useRef();
  const input2Ref = useRef();

  useEffect(async () => {
    const data = await collection.get();
    data.forEach((doc) => {
      setNotes((notes) =>
        notes.concat({
          id: doc.id,
          ...doc.data(),
        })
      );
    });
    console.log("notes: ", notes);
  }, [added]);

  let notesDiv = notes.map((note) => (
    <div key={note.id}>
      <h3 className="Note">
        {note.character}
        <br />
        {note.note}
      </h3>
    </div>
  ));
  if (notesDiv.length === 0) {
    //notesDiv = <h3>!אין משפטים כעת. הוסיפו</h3>;
    notesDiv = <div className="loader" />;
  }

  const addNoteHandle = async (e) => {
    let isValid = note.trim().length > 2 && character.trim() !== "";
    setValid1(note.trim().length > 2);
    setValid2(character.trim() !== "");
    if (!isValid) {
      console.log("not valid");
    } else {
      console.log("valid!");
      try {
        setNotes([]);
        collection.add({ note, character });
        input1Ref.current.value = "";
        input2Ref.current.value = "";
        setCharacter("");
        setNote("");
        setAdded(!added);
      } catch {
        console.log("error");
      }
    }
  };

  return (
    <>
      <div className="container form-control">
        <input
          ref={input1Ref}
          onChange={(e) => {
            setNote(e.target.value);
            setValid1(true);
          }}
          className={[!valid1 && "invalid", "input"].join(" ")}
          placeholder="משפט של הדמות"
        />

        <select
          ref={input2Ref}
          onChange={(e) => {
            setCharacter(e.target.value);
            setValid2(true);
          }}
          className={[!valid2 && "invalid", "input select"].join(" ")}
          placeholder="משפט"
        >
          <option ind={-1} value="">
            בחר דמות...
          </option>
          {characters.map((c, ind) => (
            <option key={ind} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button onClick={addNoteHandle} className="btn" text="text">
          הוסף משפט
        </button>

        <img src={pic} className="pic" />
      </div>

      <div className="container">{notesDiv}</div>
    </>
  );
};

export default Notes;
