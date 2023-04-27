const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const randomNum = uuid.v4();


function generateRandomNumber() {
  const newNoteId = randomNum.slice(0,4);

  return newNoteId;
}

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, notesData) => {
    if (err) {
      return res.status(500).json({ msg: "error reading db" });
    } else {
      const dataArr = JSON.parse(notesData);
      return res.json(dataArr);
    }
  });
});
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "error reading db" });
    } else {
      const dataArr = JSON.parse(data);
      const newNote = {
        id: generateRandomNumber(),
        title: req.body.title,
        text: req.body.text,
      };
      console.log(newNote);
      dataArr.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(dataArr, null, 4), (err) => {
        if (err) {
          return res.status(500).json({ msg: "error writing db" });
        } else {
          return res.json(newNote);
        }
      });
    }
  });
});

app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        return res.status(500).json({ msg: "error reading db" });
      } else {
        const notes = JSON.parse(data);
        const noteID = req.params.id;
        const noteIndex = notes.findIndex((note) => note.id == noteID);
        if (noteIndex !== -1) {
          notes.splice(noteIndex, 1);
          fs.writeFile("./db/db.json", JSON.stringify(notes, null, 4), (err) => {
            if (err) {
              return res.status(500).json({ msg: "error writing db" });
            } else {
              return res.json({
                msg: "note deleted successfully",
              });
            }
          });
        } else {
          return res.status(404).json({
            msg: "no such note!",
          });
        }
      }
    });
  });
  

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
