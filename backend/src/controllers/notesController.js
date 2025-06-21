import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 }); //Sort notes by most recently updated first (descending order)
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in the getAllNotes controller fn: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found!' });
    res.json(note); //If no status code is explicitly set, the response defaults to 200
  } catch (error) {
    console.error('Error in the getNoteById controller fn: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (error) {
    console.error('Error in the createNote controller fn: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error in the updateNote controller fn: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: 'Note not found!' });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error('Error in the deleteNote controller fn: ', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
