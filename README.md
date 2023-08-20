**Live QR Code Generator**
This is a simple Node.js application that generates QR codes on the fly using the Express framework and the qrcode library.

**Installation**
Clone the repository or download the source code:
git clone https://github.com/Muaizo/QR-Code-Generator
Navigate to the project directory:

_Install the required dependencies_:

npm install
Run the server:

node index.js
The server will start and listen on port 3000 by default.

Open your web browser and visit http://localhost:3000/qrcode to see the generated QR code with the default text ("Muaizo").

To generate QR codes with custom text, provide the text query parameter in the URL:

http://localhost:3000/qrcode?text=Hello
http://localhost:3000/qrcode?text=YourCustomText

**Configuration**
You can modify the default text and QR code options in the index.js file:

Change the text variable to set the default text that will be encoded into QR codes when no query parameter is provided.
Adjust the options in the opts object to customize the appearance and quality of the generated QR codes.

**Dependencies**
Express: A fast, unopinionated, minimalist web framework for Node.js.
qrcode: A library to generate QR codes in various formats

**License**
This project is licensed under the MIT License.

