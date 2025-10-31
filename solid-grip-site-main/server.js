import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, extname } from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = join('dist', filePath);
  
  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  } catch (error) {
    // Se não encontrar o arquivo, serve o index.html (SPA)
    try {
      const content = readFileSync(join('dist', 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    } catch {
      res.writeHead(404);
      res.end('File not found');
    }
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('✅ Servidor NATIVO rodando na porta 3000!');
});
