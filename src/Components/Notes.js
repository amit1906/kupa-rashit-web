import React, { useState, useEffect, useRef } from 'react';
import p1 from '../pics/characters/p1.jpg';
import am1 from '../pics/characters/am1.jpg';
import an1 from '../pics/characters/an1.jpg';
import ch1 from '../pics/characters/ch1.jpg';
import es1 from '../pics/characters/es1.jpg';
import it1 from '../pics/characters/it1.jpg';
import ko1 from '../pics/characters/ko1.jpg';
import na1 from '../pics/characters/na1.jpg';
import ni1 from '../pics/characters/ni1.jpg';
import ra1 from '../pics/characters/ra1.jpg';
import sh1 from '../pics/characters/sh1.jpg';
import st1 from '../pics/characters/st1.jpg';
import pe1 from '../pics/characters/pe1.jpg';
import { firestore as db } from '../firebase';

const Notes = () => {
  const characters = [
    { 'שירה': sh1 },
    { 'ראמזי': ra1 },
    { 'כוכבה': ko1 },
    { 'אסתי': es1 },
    { 'נעמי': na1 },
    { 'ניסים': ni1 },
    { 'אנטולי': an1 },
    { 'אמנון טיטינסקי': am1 },
    { "צ'יבוטרו": ch1 },
    { 'גברת סטרטינר': st1 },
    { 'גברת יצחקי': it1 },
    { 'גברת פפרני': pe1 },
  ];

  const [valid1, setValid1] = useState(true);
  const [valid2, setValid2] = useState(true);
  const [note, setNote] = useState('');
  const [character, setCharacter] = useState('');
  const [pic, setPic] = useState(p1);
  const [notes, setNotes] = useState([]);
  const [added, setAdded] = useState(false);
  const input1Ref = useRef();
  const input2Ref = useRef();

  useEffect(
    (notes) => {
      const getData = async () => {
        const collection = db.collection('notes');
        const data = await collection.get();
        data.forEach((doc) => {
          setNotes((notes) =>
            notes.concat({
              id: doc.id,
              ...doc.data(),
            })
          );
        });
      };
      getData();
    },
    [added]
  );

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
    const collection = db.collection('notes');
    let isValid = note.trim().length > 2 && character.trim() !== '';
    setValid1(note.trim().length > 2);
    setValid2(character.trim() !== '');
    if (!isValid) {
      console.log('not valid');
    } else {
      console.log('valid!');
      try {
        setNotes([]);
        collection.add({ note, character });
        input1Ref.current.value = '';
        input2Ref.current.value = '';
        setCharacter('');
        setNote('');
        setAdded(!added);
      } catch {
        console.log('error');
      }
    }
  };

  const selectPic = (id) => {
    const ch = characters.find((ch) => Object.keys(ch)[0] === id);
    if (ch) {
      setPic(ch[id]);
    } else {
      setPic(p1);
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
          className={[!valid1 && 'invalid', 'input'].join(' ')}
          placeholder="משפט של הדמות"
        />

        <select
          ref={input2Ref}
          onChange={(e) => {
            selectPic(e.target.value);
            setCharacter(e.target.value);
            setValid2(true);
          }}
          className={[!valid2 && 'invalid', 'input select'].join(' ')}
          placeholder="משפט"
        >
          <option ind={-1} value="">
            בחר דמות...
          </option>
          {characters.map((ch, ind) => {
            return (
              <option key={ind} value={Object.keys(ch)[0]}>
                {Object.keys(ch)[0]}
              </option>
            );
          })}
        </select>

        <button onClick={addNoteHandle} className="btn" text="text">
          הוסף משפט
        </button>

        <img src={pic} alt="XXX" className="pic" />
      </div>

      <div className="container">{notesDiv}</div>
    </>
  );
};

export default Notes;
