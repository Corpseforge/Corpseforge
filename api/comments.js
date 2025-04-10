// api/comments.js
import fs from 'fs';
import path from 'path';

const commentsFilePath = path.resolve(process.cwd(), 'comments.json');

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, message, date } = req.body;

      // Lies die bestehende Datei, falls sie existiert
      const existingComments = fs.existsSync(commentsFilePath)
        ? JSON.parse(fs.readFileSync(commentsFilePath, 'utf-8'))
        : [];

      // Füge den neuen Kommentar hinzu
      const newComment = { name, message, date };
      existingComments.push(newComment);

      // Speichere die Kommentare zurück in die Datei
      fs.writeFileSync(commentsFilePath, JSON.stringify(existingComments, null, 2));

      res.status(200).json({ success: true, message: 'Kommentar erfolgreich gespeichert!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Fehler beim Speichern des Kommentars.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
