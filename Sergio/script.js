await fetch('https://viacep.com.br/ws/01001000/json/')
      .then(resposta => resposta.json())
      .then(json => {
              console.log(json?.erro)
            if(json?.erro && typeof json?.erro != 'undefined'){
                console.log("cep inválido!")
            }else {
                console.log(json.logradouro)
            }
          })
          .catch(error => {
                console.log("cep inválido! - 2 ")
          });



