import express from 'express';
const app = express();

app.use(express.static('dist'));

// ✅ HEALTH CHECK OBRIGATÓRIO
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// ✅ PORTA 3000 (NÃO 80!)
app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Servidor rodando na porta 3000 com health check!');
});
