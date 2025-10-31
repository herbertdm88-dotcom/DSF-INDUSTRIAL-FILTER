import express from 'express';
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// USA PORTA 3000 - não 80!
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
