const axios = require('axios');

class Api{
    static async ObterEndereco(cep){
       const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data.localidade;
       return response; 
    }
}

Api.ObterEndereco('59900000').then(v => {console.log(v)})


