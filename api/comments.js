// api/comments.js
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, message, date } = req.body;
      
      // Hier kannst du die Logik einfügen, um den Kommentar zu speichern (z.B. in einer Datenbank)
      console.log({ name, message, date });

      res.status(200).json({ success: true, message: 'Kommentar erfolgreich gespeichert!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Fehler beim Speichern des Kommentars.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
