const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3000;
const messagesFile = path.join(__dirname, 'data', 'messages.json');

app.use(express.json());

async function ensureMessagesFile() {
  try {
    await fs.access(messagesFile);
  } catch (error) {
    await fs.mkdir(path.dirname(messagesFile), { recursive: true });
    await fs.writeFile(messagesFile, '[]', 'utf8');
  }
}

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, service, message } = req.body;

  if (!name || !email || !subject || !message || !service) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const newMessage = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone || '').trim(),
    subject: String(subject).trim(),
    service: String(service).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString()
  };

  try {
    await ensureMessagesFile();
    const content = await fs.readFile(messagesFile, 'utf8');
    const messages = JSON.parse(content || '[]');
    messages.push(newMessage);
    await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), 'utf8');
    res.json({ success: true, message: 'Contact request saved successfully' });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    res.status(500).json({ success: false, error: 'Unable to save contact message' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
