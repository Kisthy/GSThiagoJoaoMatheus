import VeiculoEletrico from '../Models/VeiculoEletrico.js';

class VeiculoEletricoService {
  static async listarVeiculos() {
    return await VeiculoEletrico.find();
  }

  static async criarVeiculo(dados) {
    const novoVeiculo = new VeiculoEletrico(dados);
    return await novoVeiculo.save();
  }

  static async atualizarVeiculo(id, dados) {
    return await VeiculoEletrico.findByIdAndUpdate(id, dados, { new: true });
  }
}

export default VeiculoEletricoService;
