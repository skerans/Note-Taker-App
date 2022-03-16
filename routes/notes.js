const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');

router.get('/', async (req, res) => {
  const data = await readFromFile(path.join(__dirname, '../db/db.json'))
  res.json(JSON.parse(data))
});

router.post('/', async (req, res) => {
  const { title, text } = req.body;
  let newNote;
  if (req.body) {
    newNote = {
      title,
      text,
      id: uuidv4(),
    };
  }

  await writeToFile(path.join(__dirname, '../db/db.json'), newNote)
})




module.exports = router;