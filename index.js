

let app = ()=>{
    let form = document.querySelector(".form");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let cep = document.querySelector(".input").value;
        let apiURL = `https://viacep.com.br/ws/${cep}/json/`

        if(cep.length !== 8){
            alert("CEP INVALIDO!")
        }else{

            //Consumindo API
            fetch(apiURL).then((response)=>{
                response.json().then((data)=>{
                    showDataToUser(data)
                })
            })
        
        }
    })

    let showDataToUser = (data)=>{
        let ul = document.createElement("ul");
        ul.setAttribute("class", "result");
        let rua = document.createElement("li");
        rua.setAttribute("class", "resultItem");
        let bairro = document.createElement("li");
        bairro.setAttribute("class", "resultItem");
        let complemento = document.createElement("li");
        complemento.setAttribute("class", "resultItem");
        let localidade = document.createElement("li");
        localidade.setAttribute("class", "resultItem");
        let uf = document.createElement("li");
        uf.setAttribute("class", "resultItem");
        let ddd = document.createElement("li");
        ddd.setAttribute("class", "resultItem");
        ul.appendChild(rua);
        ul.appendChild(bairro);
        ul.appendChild(localidade);
        ul.appendChild(uf);
        ul.appendChild(ddd);
        
        rua.innerHTML = `${data.logradouro}`;
        bairro.innerHTML = `${data.bairro}`;
        localidade.innerHTML = `${data.localidade}`;
        uf.innerHTML = `${data.uf}`;
        ddd.innerHTML = `DDD: ${data.ddd}`;

        let sidebar = document.querySelector(".sidebar");
        sidebar.append(ul);
    }
}

app();