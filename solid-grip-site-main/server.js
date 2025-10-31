import express from 'express';
const app = express();

// Tenta servir de várias formas
app.use(express.static('dist'));
app.use(express.static('./dist'));
app.use(express.static('/app/dist'));

app.get('*', (req, res) => {
  // Tenta todos os caminhos possíveis
  try {
    res.sendFile('index.html', { root: 'dist' });
  } catch (err) {
    try {
      res.sendFile('/app/dist/index.html');
    } catch (err2) {
      res.sendFile('./dist/index.html');
    }
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Servidor rodando - procurando index.html...');
});
