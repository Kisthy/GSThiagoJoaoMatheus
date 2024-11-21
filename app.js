import express from 'express';
import connectDB from './src/connections/database.js';  
import rotasVeiculo from './src/routes/rotasVeiculo.js';  

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use('/api', rotasVeiculo);

app.listen(PORT, () => {
  console.log(`Servidor Express em execução na porta ${PORT}`);
});

export default app;