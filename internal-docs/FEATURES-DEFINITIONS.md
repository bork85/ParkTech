# Documento de Funcionalidades – MVP Sistema de Gestão de Estacionamento

1. Controle de Entrada e Saída de Veículos
    Funcionalidade responsável pelo registro operacional do fluxo de veículos no estacionamento.

    Detalhes:

    - Registro rápido da entrada, capturando placa, data e hora automaticamente.
    - Prevenção de duplicidade: um veículo não pode entrar duas vezes sem ter uma saída registrada.
    - Registro de saída com cálculo do tempo total estacionado.
    - Movimentação do veículo para histórico após conclusão da saída.

2. Cadastro das Configurações de Valor por Hora e Regras
    Módulo administrativo para definir e atualizar as tarifas cobradas.

    Detalhes:

    - Definição do valor da primeira hora e das horas adicionais.
    - Apenas administradores podem alterar essas regras.

3. Dashboard com Indicadores Operacionais
    Visão clara e objetiva da operação atual do estacionamento.

    Detalhes:

    - Total de veículos presentes no momento.
    - Total de entradas e saídas do dia.
    - Operadores visualizam apenas informações operacionais; administradores visualizam dados financeiros.

4. Controle de Usuários (Operadores e Administradores)
    Gerenciamento de acesso e permissões dentro do sistema.

    Detalhes:

    - Dois níveis de acesso: Operador e Administrador.
    - Operadores podem registrar entradas/saídas e visualizar informações básicas.
    - Administradores podem configurar valores, gerenciar usuários, visualizar relatórios e cancelar registros.
