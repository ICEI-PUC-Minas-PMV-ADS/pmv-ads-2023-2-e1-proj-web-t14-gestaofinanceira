# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Usuário Novato em Finanças</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que estão começando a gerenciar suas próprias finanças e têm pouco ou nenhum conhecimento sobre o assunto</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de orientação passo a passo, tutoriais e materiais didáticos para entender melhor como gerenciar suas finanças. Deseja ter uma visão clara de suas despesas e renda</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Usuário Experiente em Finanças</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que já têm experiência em gerenciamento financeiro e estão confortáveis em tomar suas próprias decisões financeiras</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de orientação passo a passo, tutoriais e materiais didáticos para entender melhor como gerenciar suas finanças. Deseja ter uma visão clara de suas despesas e renda</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Usuário de Investimentos</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que estão interessados em investir e aumentar sua riqueza ao longo do tempo</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de ferramentas para rastrear o desempenho de seus investimentos e receber recomendações de investimento. Deseja ter acesso a análises financeiras e insights</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Eu como usuário    | quero que o aplicativo seja fácil de usar e intuitivo| para facilitar o gerenciamento de minhas finanças |
| Eu como usuário    | desejo ver um resumo de minhas finanças, incluindo despesas e renda  | para entender melhor para onde meu dinheiro está indo  |
| Eu como usuário    | quero ver um gráfico de minhas despesas mensais | para entender melhor para onde meu dinheiro está indo|
| Eu como usuário    | quero ver um gráfico de minha renda versus minhas despesas ao longo do tempo |para avaliar minha saúde financeira geral  |
| Eu como usuário    | quero poder inserir os lucros dos meus últimos investimentos|para poder ver o panorama das minhas ações |
| Eu como usuário    | quero aprender sobre os fundos de investimentos com exemplos reais | para que eu possa ampliar meus conhecimentos e tenha segurança de aplicar na prática |
| Eu como usuário    | entender como está dividido meus gastos de forma clara | saber como organizar minha vida nos próximos meses|
| Eu como usuário    | visualizar barras de progresso das minhas metas| entender como está o andamento dos meus objetivos|
| Eu como usuário    | aprender o básico de educação financeira | direcionar melhor meus gastos |
| Eu como usuário    | desejo que o aplicativo seja seguro e proteja minhas informações financeiras | para evitar fraudes e roubo de identidade                              |
| Eu como usuário    | quero selecionar meu perfil financeiro durante o processo de criação da conta | para ter uma experiência personalizada e conteúdo adaptado às minhas necessidades  |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | Opção de login/cadastro | Alta |
| RF-02 | Inclusão de termo de uso | Alta |
| RF-03 | Controle de encerramento de sessão | Média |
| RF-04 | Opção de cadastro através de contas Google, Apple ID ou Microsoft | Baixa |
| RF-05 | Requisito de senhas alfanuméricas | Alta |
| RF-06 | Limitação do número de tentativas de login | Alta |
| RF-07 | Opção de recuperação e redefinição de senha | Alta |
| RF-08 | Opção para o usuário classificar despesas como fixas ou variáveis | Alta |
| RF-09 | Permitir que o usuário nomeie suas despesas | Alta |
| RF-10 | Capacidade de adicionar, editar ou excluir despesas fixas ou recorrentes | Alta |
| RF-11 | Opção para o usuário definir lembretes para pagamentos futuros | Média |
| RF-12 | Opção para o usuário definir um orçamento mensal | Alta |
| RF-13 | Opção para o usuário exportar seus dados financeiros (por exemplo, para Excel) | Média |
| RF-14 | Capacidade de fornecer análises preditivas com base nos padrões de gastos do usuário | Média |
| RF-15 | Coletar e armazenar dados financeiros do usuário | Alta |
| RF-16 | Processar dados financeiros para identificar padrões, tendências e insights | Alta |
| RF-17 | Gerar gráficos a partir dos dados processados | Alta |
| RF-18 | O sistema deve permitir que o usuário selecione seu perfil durante o processo de criação da conta | Alta |
| RF-19 | O sistema deve armazenar o perfil do usuário selecionado em seu banco de dados | Alta |
| RF-20 | O sistema deve personalizar a experiência do usuário com base no perfil selecionado | Média |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | Usabilidade intuitiva e interface amigável | Alta |
| RNF-02 | Segurança e privacidade dos dados do usuário | Alta |
| RNF-03 | Desempenho e tempo de resposta eficiente | Alta |
| RNF-04 | Disponibilidade e confiabilidade do sistema | Alta |
| RNF-05 | Facilidade de manutenção e escalabilidade do sistema | Média |
| RNF-06 | Compatibilidade com diferentes plataformas e dispositivos | Alta |
| RNF-07 | Implementação de autenticação de dois fatores | Alta |
| RNF-08 | Notificação de possíveis falhas ou atividades suspeitas | Alta |
| RNF-09 | Incorporação de elementos de gamificação | Baixa |
| RNF-10 | Criação de um espaço onde os usuários possam interagir e compartilhar ideias | Média |
| RNF-11 | O sistema deve ser capaz de suportar um grande número de usuários simultaneamente | Alta |
| RNF-12 | O sistema deve ser capaz de se recuperar rapidamente de falhas | Alta |
| RNF-13 | O sistema deve ser fácil de usar para usuários com diferentes níveis de habilidade técnica | Alta |
| RNF-14 | O sistema deve ser acessível para usuários com deficiências | Média |
| RNF-15 | O sistema deve ser capaz de manter a privacidade e a segurança dos dados do usuário em todas as situações | Alta |
| RNF-16 | Gráficos devem ser fáceis de entender e interpretar | Alta |
| RNF-17 | Sistema deve gerar gráficos rapidamente | Alta |
| RNF-18 | Dados financeiros do usuário devem ser armazenados e transmitidos de forma segura | Alta |
| RNF-19 | Gráficos devem ser exibidos corretamente em diferentes dispositivos e navegadores | Alta |
| RNF-20 | A seleção do perfil deve ser intuitiva e fácil de usar | Alta |
| RNF-21 | O sistema deve garantir a privacidade e segurança dos dados do perfil do usuário | Alta || 

**Prioridade: Alta / Média / Baixa. 

