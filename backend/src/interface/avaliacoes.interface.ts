
// insert
export interface AvaliacoesFk {
  alunoId: number,
  disciplinaId: number,
}

export interface Avaliacao {
  '1°Avaliacao': number,
  '2°Avaliacao': number,
  '3°Avaliacao': number,
  '4°Avaliacao': number,
}

export interface Result {
  media: number,
  resultado: number,
}

export interface AvaliacoesReq extends AvaliacoesFk, Avaliacao, Result {}

export interface Avaliacoes extends AvaliacoesReq {
  id: number,
}

// updade
export interface Atualizacao {
  avaliacao: number,
  disciplinaId: number,
  nota: number,
  media?: number,
  resultado?: number,
}
