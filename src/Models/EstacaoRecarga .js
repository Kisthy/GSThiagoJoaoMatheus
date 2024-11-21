import mongoose from 'mongoose';

const EstacaoRecargaSchema = new mongoose.Schema({
    id: { type: String, required: true },              // Identificador único da estação
    localizacao: { type: String, required: true },     // Localização da estação de recarga (endereço ou coordenadas geográficas)
    totalCarregadores: { type: Number, required: true }, // Número total de carregadores na estação
    carregadoresDisponiveis: { type: Number, required: true }, // Número de carregadores disponíveis
    potenciaTotal: { type: Number, required: true },   // Potência total disponível para carregamento (em kW)
    custoPorKWh: { type: Number, required: true },     // Custo de recarga por kWh de energia
    emOperacao: { type: Boolean, required: true },     // Se a estação está operacional
    dataUltimaManutencao: { type: Date, required: true }, // Data da última manutenção
});

const EstacaoRecarga = mongoose.model('EstacaoRecarga', EstacaoRecargaSchema);

export default EstacaoRecarga;
