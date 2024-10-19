const currentDate = moment().format('YYYY-MM-DD'); // Data atual no formato correto
const quantidade = Number(Input_Quantidade.text);  // Captura a quantidade do input no Appsmith
const id_produto = Select_Produto.selectedOptionValue; // Captura o ID do produto selecionado no dropdown
const estado = Select_Estado.selectedOptionValue; // Captura o estado selecionado no dropdown

// Executa a query com os valores capturados
Query_InsertPedido.run({
  currentDate: currentDate,
  quantidade: quantidade,
  id_produto: id_produto,
  estado: estado
});