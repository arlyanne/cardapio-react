export const handlePriceChange = (e:any) => {
    const value = e.target.value
        .replace(/\D/g, "") // Remove tudo que não é dígito
        .replace(/(\d)(\d{8})$/, "$1.$2") // Adiciona ponto antes dos últimos 2 dígitos
        .replace(/(\d)(\d{5})$/, "$1.$2") // Adiciona ponto antes dos últimos 5 dígitos
        .replace(/(\d)(\d{2})$/, "$1,$2"); // Adiciona vírgula antes dos últimos 2 dígitos
      e.target.value = `R$ ${value}`; // Formata como moeda
    };
  
export const formatCurrency = (value:any) => {
      if (typeof value !== "number") return value; // Retorna o valor original se não for um número
      return `R$ ${value.toFixed(2).replace('.', ',')}`; // Formata o número como moeda
    };
  