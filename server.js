'use strict';

const express = require('express');

	@@ -9,8 +9,8 @@ const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('welcome to the DevOps world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
