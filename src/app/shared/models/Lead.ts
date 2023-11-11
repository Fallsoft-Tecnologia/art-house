import { Contato } from "./Contato";

export interface Lead {
    id?: number,
    nome?: string
    dataHoraCriacao?: Date;
    dataHoraAlteracao?: Date;
    contato: Contato[];
}