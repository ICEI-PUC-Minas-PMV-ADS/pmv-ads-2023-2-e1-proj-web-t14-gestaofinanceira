# Plano de Testes de Software


<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-gestaofinanceira/blob/docs/addition/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-gestaofinanceira/blob/docs/addition/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

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
  <td>CT-01: Verificar o funcionamento do formulário e adição das informações na lista </td>
  <td>
   <ul>
    <li>RF-08: Opção para o usuário classificar despesas/receitas de acordo com sua tipo/categoria.</li>
    <li>RF-09: Permitir que o usuário nomeie suas despesas/receitas.</li>
    <li>RF-10: Capacidade de adicionar, editar ou excluir despesas/receitas.</li>
   </ul>
  </td>
  <td>Verificar se está armazenando os dados adicionados, no formulário, na lista da tela</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login na tela respectiva.</li>
    <li>Clicar no botão adicionar na parte inferior da lista</li>
    <li>Adicionar/editar/excluir as informações necessárias no formulário apresentado</li>
    <li>Visualizar essas informações sendo apresentadas na lista na parte principal da página respectiva</li>
   </ol>
   </td>
  <td>Os dados inseridos no formulário devem ser apresentados na lista da tela</td>
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
  <td>CT-02: Verificar se as páginas de despesas e receitas está coletando e armazenando os dados financeiros do usuário</td>
  <td>
   <ul>
    <li>RF-15:Coletar e armazenar dados financeiros do usuário</li>
   </ul>
  </td>
  <td>Verificar se a página 'Minhas Despesas' e 'Minhas Receitas' estão apresentando as informações cadastradas anteriormente pelo usuário corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login.</li>
    <li>Visualizar se a página recuperou as informações anteriormente inseridas.</li>
   </ol>
   </td>
  <td> Deve ocorrer uma integração entre as páginas 'Minhas Despesas' e 'Minhas Receitas' através do ID único que foi gerado anteriormente no momento do cadastro do usuário na aplicação.</td>
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
  <td>CT-03: Verificar o funcionamento do gráfico da página de despesas e receitas</td>
  <td>
   <ul>
    <li>RF-17: Gerar gráficos a partir dos dados processados.</li>
    <li>RF-19: O sistema deve armazenar o perfil do usuário selecionado em seu banco de dados</li>
   </ul>
  </td>
  <td>Verificar se o gráfico é atualizado juntamente com o preenchimento das novas informações na lista</td>
  <td>
   <ol>
     <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Fazer o login na tela respectiva.</li>
    <li>Clicar no link da tela 'Minhas Despesas'/'Minhas Receitas.</li>
    <li>Clicar no botão adicionar na parte inferior da lista</li>
    <li>Inserir as informações necessárias no formulário apresentado</li>
    <li>Visualizar essas informações sendo apresentadas na lista na parte principal da página respectiva</li>
    <li>Visualizar o gráfico atualizado com as novas informações</li>
   </ol>
   </td>
  <td>Os dados inseridos na lista deve aparecer no gráfico classificado por categoria.</td>
  <td>Letícia e Gabriel</td>
 </tr>
</table>

<table>
    <thead>
        <tr>
            <th>Caso de teste</th>
            <th>Requisitos associados</th>
            <th>Objetivo do teste</th>
            <th>Passos</th>
            <th>Critérios de êxito</th>
            <th>Responsável</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CT-04: Verificar a exibição dos elementos da tela principal</td>
            <td>
                RF-21, RF-22, RF-23, RF-24, RF-25, RF-26, RF-27
            </td>
            <td>Verificar se os elementos da tela principal são exibidos corretamente</td>
            <td>
                <ol>
                    <li>Acessar o navegador.</li>
                    <li>Informar o endereço do site.</li>
                    <li>Fazer o login na tela respectiva.</li>
                    <li>Verificar se o logotipo da aplicação é exibido na posição superior esquerda.</li>
                    <li>Verificar se a saudação personalizada é exibida ao lado do logotipo.</li>
                    <li>Confirmar se o saldo atual do usuário é exibido na seção designada.</li>
                    <li>Checar se o total das despesas do usuário é exibido na seção correspondente.</li>
                    <li>Clicar no link para direcionar o usuário para o perfil.</li>
                    <li>Verificar se as opções do menu são apresentadas corretamente.</li>
                    <li>Analisar se o gráfico visual do desempenho financeiro do usuário é exibido na tela.</li>
                </ol>
            </td>
            <td>Todos os elementos da tela principal (logotipo, saudação, saldo, despesas, perfil, menu e gráfico) são exibidos corretamente.</td>
            <td>Rodiney</td>
        </tr>
    </tbody>
</table>
