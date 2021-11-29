
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

 Na atenção à montagem da interface do sistema, nos concentramos em questões como acessibilidade e usabilidade. Dessa forma, o projeto possui uma identidade visual padronizada em todas as telas projetadas para desktops e dispositivos móveis.

## Fluxo do Usuário
O diagrama abaixo, representado pela Figura 3 demonstra qual será o fluxo de interação dos usuários e clientes no site. As telas representadas serão detalhadas no próximo tópico.

*Figura 4 - Fluxo de telas do usuário*
![Figura4-Fluxo-de-telas-do-usuario](img/Figura4-Fluxo-de-telas-do-usuario.png)

## Wireframes

Como apresentado na unidade anterior, as telas do sistema apresentam a seguinte estrutura separada em 3 blocos, salvo as telas de login e recuperação de senha, descritos na Figura 4 abaixo:

*Figura 5 – Estrutura padrão do site*
![Figura5-Estrutura-padrao-do-site](img/Figura5-Estrutura-padrao-do-site.png)

- **Cabeçalho:** Apresenta a identidade da plataforma, assim como, um menu e um botão de login do usuário;
- **Conteúdo:** Apresenta o conteúdo da página, sendo variável de acordo a navegação da plataforma;
- **Rodapé:** Conteúdo apresentado ao usuário que irá conter, de forma resumida, o fluxo do site, tendo botões para acesso de tais funcionalidades.

### Tela – Página Inicial 

A página inicial é o ponto de partida do projeto. Neste caso, ao entrar no endereço do website, o usuário será direcionado para uma landing page com um banner principal, contendo um formulário de busca para encontrar médicos a partir de uma filtragem inicial, descrita no passo a passo da linha seguinte (especialidade / data / localização). Ao final da página, há também um chamado para clínicas se cadastrarem e fazerem parte da plataforma, agregando os dois públicos.

*Figura 6 – Página Inicial*
![Figura6-Pagina-Inicial](img/Figura6-Pagina-Inicial.png)

### Tela – Login

Quando um visitante não está logado na plataforma, a barra de navegação (topo do site) oferecerá um botão rápido para efetuar o login. Optou-se pelo uso de uma janela modal para que a navegação do usuário não seja interrompida, seja em qual tela este se encontrar. Haverá, ademais, botões de cadastro para clínicas ou pacientes que ainda não tenham uma conta na plataforma e a possibilidade de efetuar o login por redes sociais.

*Figura 7 – Login do usuário*
![Figura7-Login-do-usuario](img/Figura7-Login-do-usuario.png)

### Tela – Cadastro Paciente

A tela de cadastro de um paciente oferece um formulário no qual o usuário preenche as suas informações pessoais e de contato, bem como a criação de credenciais de acesso futuro à plataforma. Há, também, um link para o cadastro de uma clínica caso seu representante tenha entrado na tela errada ou tenha vindo de um link de buscadores da web.

*Figura 8 – Cadastro do usuário*
![Figura8-Cadastro-do-usuario](img/Figura8-Cadastro-do-usuario.png)

### Tela – Cadastro Clínica

O cadastro de uma clínica segue o mesmo layout de um cadastro de paciente, com exceção de alguns campos e passos adicionais (descritos abaixo). Igualmente ao cadastro de paciente, há um link para um paciente se cadastrar, caso tenha se deparado com esta tela por engano. Ao lado esquerdo, haverá uma prévia das funcionalidades de uma clínica da plataforma.

*Figura 9 – Cadastro da clínica*
![Figura9-Cadastro-da-clinica](img/Figura9-Cadastro-da-clinica.png)

### Tela – Planos

Após a validação inicial dos campos de cadastro de uma clínica, haverá um segundo passo em que seu representante deverá escolher um dos planos ofertados pela plataforma, haja vista que a manutenção de uma clínica no website será um serviço pago. Ao escolher um plano, o usuário será direcionado para a terceira e última etapa do processo de cadastro, descrito a seguir.

*Figura 10 – Tela dos planos ofertados pela plataforma*
![Figura10-Tela-dos-planos-ofertados](img/Figura10-Tela-dos-planos-ofertados.png)

### Tela – Checkout

A terceira e última etapa do cadastro será uma tela de checkout para pagamento inicial do plano contratado. Nesta tela, os campos de endereço da clínica deverão ser preenchidos, bem como as informações de método de pagamento para assinatura e efetivação na plataforma.

*Figura 11 – Checkout do plano*
![Figura11-Checkout-do-plano](img\Figura11-Checkout-do-plano.png)

### Tela – Busca

Quando um usuário procura por um médico, este será direcionado a uma página de busca, com filtros laterais (na visualização do mobile, estes filtros ficarão na primeira linha). Os cards da direita são reativos às mudanças dos filtros, podendo sofrer diversas alterações em visibilidade e ordenação. Ao clicar em um dos cards de médico, o usuário será direcionado para o seu perfil (descrição da tela a seguir).

*Figura 12 – Busca dos médicos da plataforma*
![Figura12-Busca-dos-medicos-da-plataforma](img\Figura12-Busca-dos-medicos-da-plataforma.png)

### Tela – Perfil do Médico (Público)

A tela de perfil do médico é o ponto de entrada para que um usuário saiba quem é o profissional, onde ele trabalha e qual é a sua agenda de horários disponíveis para marcação de consulta. Ao clicar no botão "ver horários disponíveis", o usuário será direcionado para o fluxo de agendamento, detalhado a seguir.

*Figura 13 – Perfil público dos médicos*
![Figura13-Perfil-publico-dos-medicos](img/Figura13-Perfil-publico-dos-medicos.png)

### Tela – Perfil do Médico / Horários disponíveis

Esta tela oferece um calendário com os dias do mês e uma listagem de horários disponíveis ao clicar no horário desejado. Os horários disponíveis aparecem em forma de botão que direcionam o usuário a uma janela modal para confirmar aquele agendamento. Horários ocupados aparecem em botões com menor destaque, mas que ainda proporcionam a funcionalidade de lista de espera.

*Figura 14 – Tela de agendamento*
![Figura14-Tela-de-Agendamento](img/Figura14-Tela-de-Agendamento.png)

*Figura 15 – Janela modal para confirmar o horário selecionado previamente.*
![Figura15-Modal-de-confirmação](img/Figura15-Modal-confirmacao.png)

*Figura 16 – Janela modal para ser adicionado à lista de espera de um horário ocupado.*
![Figura16-Modal-horario-ocupado](img/Figura16-Modal-horario-ocupado.png)

### Tela – Recuperar a Senha

A tela de recuperação de senha será acionada ao usuário acessar o botão de “esqueceu sua senha” da tela de Login, nessa o usuário irá ser encaminhado a uma página o qual deve digitar um e-mail válido, sendo disparado para este um link para a configuração de uma nova senha, assim como, um código de verificação de usuário.

*Figura 17 - Tela de Recuperar a Senha*
![Figura17-Recuperar-senha](img/Figura17-Recuperar-senha.png)

*Figura 18 - Tela para gerar uma nova senha*
![Figura18-gerar-nova-senha](img/Figura18-gerar-nova-senha.png)

### Tela – Suporte e Perguntas Frequentes

A tela de suporte fornecera ao usuário a possibilidade de retirar dúvidas sobre a plataforma, o acesso a esta página será realizado por meio de um botão na tela inicial ou no rodapé da página. Na tela terão blocos com perguntas mais frequentes dos usuários e caso haja uma dúvida mais especifica o usuário é conduzido a uma tela contendo as principais perguntas separadas de acordo com as funcionalidades da plataforma, serão contidos botões para a acessibilidade como: 

- Leitor de texto;
- Botão para aumentar a fonte da página.

*Figura 19 - Tela Suporte ao usuário*
![Figura19-tela-suporte-usuario](img/Figura19-Suporte-usuario.png)

*Figura 20 - Perguntas frequentes elencadas pelas funcionalidades do site*
![Figura20-Perguntas-frequentes](img/Figura20-Perguntas-frequentes.png)

### Tela – Termos de uso e Política da Empresa

As telas de Termos de uso e Política da Empresa são semelhantes e poderão ser acessadas pela tela de Página inicial, nela conterá os termos de contrato da plataforma bem como os termos de uso e política da empresa. Haverá, também, botões de acessibilidade, como leitor do texto e aumento da fonte.

*Figura 21 - Termos de uso e Política da Empresa*
![Figura21-Termos-de-uso](img/Figura21-Termos-de-uso.png)

### Tela – Perfil profissional (visão do profissional)

A tela de perfil do profissional poderá ser acessada a partir do menu lateral, onde o profissional poderá alterar os seus dados pessoais, adicionar uma biografia, alterar a sua foto de perfil e anexar o seu diploma. Nesta tela o profissional poderá fazer a alteração da sua senha de acesso ao site.

*Figura 22 – Perfil do profissional (visão do profissional)*
![Figura22-Perfil-do-profissional](img/Figura22-Perfil-do-profissional.png)

### Tela – Agenda (visão do profissional)

A tela de agenda poderá ser acessada a partir do menu lateral, onde o profissional será capaz de verificar os horários em que irá realizar os atendimentos, podendo fazer essa verificação através da seleção de dia e mês no calendário.

*Figura 23 – Agenda (visão do profissional)*
![Figura23-Agenda-do-profissional](img/Figura23-Agenda-profissional.png)

### Tela – Pacientes

A tela de pacientes poderá ser acessada a partir do menu lateral, onde o profissional poderá visualizar os pacientes atendidos por ele.

*Figura 24 - Pacientes*
![Figura24-Pacientes](img\Figura24-Pacientes.png)

### Tela – Consultas (visão do profissional)

A tela de consultas poderá ser acessada a partir do menu lateral, onde o profissional poderá visualizar o seu histórico de atendimentos, tendo a opção de anexar o prontuário de atendimento. 

*Figura 25 – Consultas (visão do profissional)*
![Figura25-Consultas-visão-do-profissional](img/Figura25-Consultas-profissional.png)

### Tela - Perfil do paciente

A tela de perfil do paciente poderá ser acessada a partir do menu lateral, onde o paciente poderá alterar os seus dados pessoais e alterar a sua foto de perfil. Nesta tela o paciente poderá fazer a alteração da sua senha de acesso ao site.

*Figura 26 – Perfil do paciente*
![Figura26-Perfil-do-paciente](img/Figura26-Perfil-do-paciente.png)

### Tela – Consultas (visão do paciente)

A tela de consultas poderá ser acessada a partir do menu lateral, onde o paciente poderá visualizar as suas consultas marcadas.

*Figura 27 - Consultas (visão do paciente)*
![Figura27-Consultas-paciente](img/Figura27-Consultas-paciente.png)

### Tela - Histórico (visão do paciente)

A tela de histórico poderá ser acessada a partir do menu lateral, onde o paciente poderá visualizar o seu histórico de consultas, tendo a opção de baixar o prontuário de atendimento.

*Figura 28 - Histórico (visão do paciente)*
![Figura28-Historico-paciente](img/Figura28-Historico-paciente.png)

### Tela- Dashboard (visão da clínica)

A tela de Dashbord é um painel visual que contém informações sobre a clínica. Esse Dashbord monitora o fluxo de pacientes, os planos de saúde conveniados, faturamento anual e últimas consultas realizadas.

*Figura 29 – Dashboards (visão da clínica)*
![Figura29-Dashboards](img/Figura29-Dashboards.png)

### Tela – Agenda Clínica
A tela Agenda Clínica exibe os agendamentos nos formatos: mensal, semanal e diários. E apresenta filtragem dos agendamentos por especialidades médicas.

*Figura 30 - Agenda (visão da clínica)*
![Figura30-Agenda-Clinica](img/Figura30-Agenda-clinica.png)

### Tela de Agendamentos

Apresenta visualização detalhada do agendamento de pacientes por especialidade médica.

*Figura 31 - Agendamentos (visão da clínica)*
![Figura31-Agendamentos-clinicas](img/Figura31-Agendamentos-clinica.png)

### Tela de cadastro Médico

Apresenta a funcionalidade de alterar, inserir, filtrar e excluir informações profissional de cada médico.

*Figura 32 – Cadastro dos médicos (visão da clínica)*
![Figura32-Cadastro-medicos-clinica](img/Figura32-Cadastro-medicos.png)

### Tela de Gerenciar Planos

Permite ao usuário cadastrar informações do plano de saúde para emissão de nota fiscal.

*Figura 33 – Gerenciamento dos planos (visão da clínica)*
![Figura33-Gerenciamento-dos-planos](img/Figura33-Gerenciamento-planos.png)

### Tela de Notificações

Fornecer ao usuário, a clínica e aos médicos lembretes e comunicados sobre pagamentos, consultas e agendamentos médicos.

*Figura 34 – Tela de notificações (visão da clínica)*
![Figura34-Tela-de-notificações](img/Figura34-Tela-de-notificacoes.png)

### Tela Janela de Notificações

Poderá visualizar de forma rápida as informações disponíveis através das janelas de notificação pop-up.

*Figura 35 – Pop-up de notificações*
![Figura35-Pop-up-notificações](img/Figura35-Pop-up-notificacoes.png)






































