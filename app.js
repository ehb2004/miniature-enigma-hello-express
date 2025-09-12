app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  const now = new Date();
  const datetime = now.toLocaleString();
  res.send(`Hello, ${name}, today is ${datetime}`);
});
