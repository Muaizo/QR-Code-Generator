/** @format */

const express = require("express");
const QRCode = require("qrcode");
const app = express();
const port = 3000;

app.get("/qrcode", (req, res) => {
  const text = req.query.text || "Muaizo"; // Default text or use query parameter
  const opts = {
    errorCorrectionLevel: "H",
    type: "image/jpeg",
    quality: 0.92,
    margin: 1,
  };

  QRCode.toFileStream(res, text, opts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
