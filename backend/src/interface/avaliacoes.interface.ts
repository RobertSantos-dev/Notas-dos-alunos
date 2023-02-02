export interface AvaliacoesReq {
  alunoId: number,
  disciplinaId: number,
  '1°Avaliacao': number,
  '2°Avaliacao': number,
  '3°Avaliacao': number,
  '4°Avaliacao': number,
}

export interface avaliacoesObjInsert extends AvaliacoesReq {
  mediaFinal: number,
  resultadoFinal: number
}

export default interface Avaliacoes extends avaliacoesObjInsert {
  id: number,
};
