const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let responseStyle = "default"; // Default style

// Endpoint untuk mengatur sifat respons
app.post('/set-style', (req, res) => {
  const { style } = req.body;
  responseStyle = style;
  res.send(`Sifat respons telah diatur menjadi: ${responseStyle}`);
});

// Endpoint untuk menerima pesan dan memberikan respons
app.post('/message', (req, res) => {
  const { message } = req.body;
  let responseMessage;

  // Logika respons berdasarkan sifat yang diatur
  if (responseStyle === "default") {
    responseMessage = `Hmph! Bukan seolah-olah aku ingin berbicara denganmu atau apa... Tapi karena kamu bertanya, "${message}".`;
  } else if (responseStyle === "friendly") {
    responseMessage = `Oh, kamu! Aku baru saja memikirkanmu. Kamu ingin tahu tentang "${message}"? Yah, aku rasa aku bisa membantu sedikit...`;
  } else {
    responseMessage = `Pesanmu telah diterima: "${message}". Jangan salah paham, oke? Aku hanya melakukan ini karena bisa!`;
  }

  res.send({ response: responseMessage });
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Rimuru sedang berjalan di port ${PORT}`);
});
