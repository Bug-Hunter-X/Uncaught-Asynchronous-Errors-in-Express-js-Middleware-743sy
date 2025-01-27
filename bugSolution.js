const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (err) {
      //Now the error is caught here
      console.error(err.stack);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.use((err, req, res, next) => {
  console.error('Unhandled error in middleware:', err.stack);
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});