const card = document.querySelector('.card');

document.querySelector('#form').addEventListener('submit', function onSubmit(e){
    e.preventDefault();

    const input = document.querySelector('#searchName');

    const searchName = input.value;

    main(searchName);
});

function main(searchName){
    const response = getElement(searchName);
    // const cardContent = createCard(response.results);

    // card.innerHTML = cardContent;
}

const getElement = async (searchName) => {
    const url = `http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=${searchName}`;

    const response = await fetch(url)
    console.log(response)
}

function createCard (response){
    return `
        <h2> ${response.tfvname} </h2>
    `
}



