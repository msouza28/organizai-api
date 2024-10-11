import { query } from './config/db';

async function testConnection() {
  try {
    const result = await query('SELECT NOW()');
    console.log('Conexão bem-sucedida. Hora atual do banco:', result.rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    process.exit();
  }
}

testConnection();