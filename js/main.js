const result = document.querySelector('.result');

document.querySelector('#form').addEventListener('submit', function onSubmit(e){
    e.preventDefault();

    const input = document.querySelector('#searchName');

    const searchName = input.value;

    input.value = '';

    main(searchName);
});

async function main(searchName){
    const response = await getElement(searchName);
    const cardContent = createCard(response);

    result.innerHTML = cardContent;
}

const getElement = async (searchName) => {
    const responseTemp = await (await fetch('../json/data.json')).json();
    const  responseFinal = responseTemp.frutas;
    let frutaEncontrada =  null;

    for (const f of responseFinal) {
        if(searchName.toUpperCase() === f.nome.toUpperCase()){
            frutaEncontrada = f;
        }
    }

    return frutaEncontrada;
}

const createCard = (response) => {
    if(response === null){
        return `
        <div class="card">
            <h2 class="notFound"> Nenhuma fruta com esse nome foi encontrada em nosso banco de dados.</h2>
        </div>
        `
    }else{
        return `
            <div class="card">
                <h2> ${response.nome}</h2>
                
                <div  class="topics">
                <h4>Descrição</h4>
                <p>${response.descricao}</p>
                </div>
                <img src=${response.imagem} alt="${response.nome}"/>
                <div class="topics">
                    <h4>Solo</h4>
                    <p>${response.solo}</p>
                </div>
                <div class="topics">
                    <h4>Clima</h4>
                    <p>${response.clima}</p>
                </div>
                <div class="topics">
                    <h4>Propagação</h4>
                    <p>${response.propagacao}</p>
                </div>
        </div>
        `
    }
}



