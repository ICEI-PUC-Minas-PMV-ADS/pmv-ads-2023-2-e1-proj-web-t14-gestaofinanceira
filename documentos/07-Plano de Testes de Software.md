# Plano de Testes de Software

# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-gestaofinanceira/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="hhttps://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-gestaofinanceira/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento xxxxxx </td>
  <td>
   <ul>
    <li>RF-001:	xxxxxxxxxxxxxxxxxxxxxxx.</li>
   <li>RF-002:	xxxxxxxxxxxxxxxxx.</li>
   </ul>
  </td>
  <td>Verificar se xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar xxxxxxxxxxxxxxxxxx.</li>
    <li>Clicar xxxxxxxxxxxxxxxxxxxxx.</li>
   </ol>
   </td>
  <td>Todos os links da página xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</td>
  <td>xxxxxxx</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento da tela de despesas/td>
  <td>
   <ul>
    <li>RF-08:	Opção para o usuário classificar despesas de acordo com sua categoria      disponíveis.</li>
    <li>RF-09: Permitir que o usuário nomeie suas despesas      disponíveis.</li>
    <li>RF-10: Capacidade de adicionar, editar ou excluir despesas      disponíveis.</li>
    <li>RF-15: Coletar e armazenar dados financeiros do usuário      disponíveis.</li>
    <li>RF-17: Gerar gráficos a partir dos dados processados      disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se a página 'Minhas Despesas' funciona corretamente: inserindo as despesas na lista e gerando o gráfico automaticamente de acordo com a classificação da sua categoria</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Minhas Despesas.</li>
    <li>Inserir os dados do formulário para adicionar as despesas</li>
   </ol>
   </td>
  <td>Os dados inseridos no formulário deve aparecer na lista e ser processado no gráfico da página.</td>
  <td>Letícia e Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
   <td>CT-03: Verificar o funcionamento da tela de receitas/td>
  <td>
   <ul>
    <li>RF-08: Opção para o usuário classificar despesas como fixas ou variáveis      disponíveis.</li>
    <li>RF-09: Permitir que o usuário nomeie suas receitas      disponíveis.</li>
    <li>RF-10: Capacidade de adicionar, editar ou excluir receitas fixa ou variável      disponíveis.</li>
    <li>RF-15: Coletar e armazenar dados financeiros do usuário      disponíveis.</li>
    <li>RF-17: Gerar gráficos a partir dos dados processados      disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se a página 'Minhas Receitas' funciona corretamente: inserindo as receitas na lista e gerando o gráfico automaticamente de acordo com o seu tipo</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Minhas Receitas.</li>
    <li>Inserir os dados do formulário para adicionar as receitas</li>
   </ol>
   </td>
  <td>Os dados inseridos no formulário deve aparecer na lista e ser processado no gráfico da página.</td>
  <td>Letícia e Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar se as páginas de despesas e receitas está integrada ao usuário</td>
  <td>
   <ul>
    <li>RF-15:	 Coletar e armazenar dados financeiros do usuário</li>
   </ul>
  </td>
  <td>Verificar se a página 'Minhas Despesas' e/ou 'Minhas Receitas' estão apresentando as informações cadastradas pelo usuário corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login.</li>
    <li> Clicar no menu 'Minhas Despesas' ou 'Minhas Receitas'.</li>
    <li> Visualizar se a página desejada armazenou suas informações anteriormente inseridas.</li>
   </ol>
   </td>
  <td> Deve ocorrer uma integração entre as páginas 'Minhas Despesas' e/ou 'Minhas Receitas' através do ID único que foi gerado anteriormente no momento do cadastro do usuário na aplicação.</td>
  <td>Letícia e Gabriel</td>
 </tr>
</table>

