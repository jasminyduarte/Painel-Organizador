import { Request } from './modules/request/request';
import { Injectable } from '@angular/core';

@Injectable()
export class WebserviceTicketPhone {

    constructor(private _request: Request) { }

    // LOGIN ORGANIZADOR
    loginOrganizador(cpf: string, senha: string) {
        return this._request.call('WebserviceAutenticarTicketCode', {
            'Usuario': cpf,
            'Senha': senha,
            'Origem': 'Site'
        });
    }

    // CADASTRO ORGANIZADOR
    cadastroOrganizador(nome: string, cpf: string, email: string, senha: string) {
        return this._request.call('WebserviceCadOrganizadorTicketCode', {
            'Usuario': cpf,
            'Senha': senha,
            'Registros': JSON.stringify([{
                'cpf': cpf,
                'password': senha,
                'email': email,
                'name': nome
            }])
        });
    }

    // ENVIAR MENSAGEM
    enviarMensagem(
        cpf: string,
        senha: string,
        tipo: string,
        idAtividade: number,
        mensagem: string,
        idTarefa?: any,
        destino?: string,
        id_rel?: any
    ) {
        return this._request.call('WebserviceTicketNovaMensagem', {
            'Tipo': tipo,
            'usuario': cpf,
            'senha': senha,
            'Evento': idAtividade,
            'Atividade': idTarefa || '',
            'mensagem': mensagem,
            'Idrelacionado': id_rel || '',
            'Tpremetente': 'part',
            'destinatario': destino || ''
        });
    }

    // NOVA SENHA
    novaSenha(cpf: string) {
        return this._request.call('WebserviceSolicitacaoAlteracaoSenhaOrganizador', {
            'Particip': cpf
        });
    }
}
