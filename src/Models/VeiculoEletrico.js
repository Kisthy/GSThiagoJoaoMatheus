import mongoose from 'mongoose';

const VeiculoEletricoSchema = new mongoose.Schema({
    id: { type: String, required: true },               // Identificador único do veículo
    tipo: { type: String, required: true },             // Tipo do veículo (carro, ônibus, etc.)
    modelo: { type: String, required: true },           // Modelo do veículo
    bateriaCapacidade: { type: Number, required: true }, // Capacidade da bateria em kWh
    bateriaNivel: { type: Number, required: true },     // Nível atual da bateria (em %)
    autonomia: { type: Number, required: true },        // Autonomia do veículo com carga cheia (em km)
    consumoEnergia: { type: Number, required: true },   // Consumo de energia (kWh/km)
    estacaoRecargaId: { type: String, required: true }, // ID da estação de recarga mais próxima
    dataUltimaRecarga: { type: Date, required: true }, // Data da última recarga
    distanciaPercorrida: { type: Number, required: true }, 
});

const VeiculoEletrico = mongoose.model('VeiculoEletrico', VeiculoEletricoSchema);

export default VeiculoEletrico;
