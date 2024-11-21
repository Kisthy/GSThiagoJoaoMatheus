import VeiculoEletricoService from '../services/VeiculoEletricoService.js';

class VeiculoEletricoController {
  static async listarVeiculos(req, res) {
    try {
      const veiculos = await VeiculoEletricoService.listarVeiculos();
      res.json(veiculos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar veículos elétricos' });
    }
  }

  static async criarVeiculo(req, res) {
    try {
      const veiculoData = req.body;
      const novoVeiculo = await VeiculoEletricoService.criarVeiculo(veiculoData);
      res.status(201).json(novoVeiculo);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar o veículo elétrico' });
    }
  }

  static async atualizarVeiculo(req, res) {
    try {
      const { id } = req.params;
      const veiculoData = req.body;
      const veiculoAtualizado = await VeiculoEletricoService.atualizarVeiculo(id, veiculoData);

      if (!veiculoAtualizado) {
        return res.status(404).json({ error: 'Veículo elétrico não encontrado' });
      }

      res.json(veiculoAtualizado);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar o veículo elétrico' });
    }
  }
}

export default VeiculoEletricoController;
