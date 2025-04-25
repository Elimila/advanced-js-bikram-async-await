//DESARROLLA AQUI TUS SOLUCIONES

// 1.
async function getRandomPokemon() {
       const randomId = Math.floor(Math.random() * 898) + 1;
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
  
    // Paso 4: retornar los datos del Pokémon
    return data;
  }

  // 2.
async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}
 // 3.
async function printImageAndName(pokemon="pikachu") {
    const { name, img } = await getImageAndName(pokemon);
    return `<section>
                <img src="${img}" alt="${name}">
                <h1>${name}</h1>
            </section>
    `;
    
}

/*printImageAndName("pikachu").then(html => {
    document.body.innerHTML = html;
  });*/
  

// 4.

async function getRandomDogImage() {
    const response = await fetch ("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message; 
    
}

// 5. 

async function getRandomPokemonImage() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    return data.sprites.front_default;
} 

// 6.
async function printPugVsPikachu() {
    const pugResponse =await fetch ("https://dog.ceo/api/breed/pug/images/random");
    const pugData = await pugResponse.json();
    const pugImg = pugData.message;
    


const { name, img } = await getImageAndName("pikachu");

const html = `
 <section>
    <img src="${pugImg}" alt ="pug">
    <h1>Pug</h1>
 </section>
 <section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
 </section>
`;

document.body.innerHTML += html;
}

printPugVsPikachu();

// 7. Ejercicio 7.- Declara una función **
// getRandomCharacter**
//  que retorne un personaje aleatorio.

async function getRandomCharacter() {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await response.json(); 
    return data; 
    
}

// 8. Declara una función **getRandomCharacterInfo** 
// que retorne de un personaje su imagen, nombre, episodios en los
// que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, 
// tendrás que hacer otro fetch para llegar a los ultimos datos.
// Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo () {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await response.json();

    console.log("👤 Nombre:", data.name);
    console.log("🖼️ Imagen:", data.image);
    console.log("📺 Episodios:", data.episode);

    const firstEpisodeUrl = data.episode[0];
    const firstResponse = await fetch(firstEpisodeUrl);
    const firstData =await firstResponse.json();
    
    console.log("🎬Primer Episodio", firstData.name);
    console.log("📅 Fecha de estreno:", firstData.air_date);

    return {
        img: data.image,
        name: data.name,
        episodes: data.episode,
        firstEpisode: firstData.name,
        dateEpisode: firstData.air_date
    }; 
    
}

// 9. Pinta los anteriores datos en el DOM 

async function printCharacterInfo() {
    const { img, name, episodes, firstEpisode, dateEpisode } = await getRandomCharacterInfo();
  
    const html = `
      <section>
        <img src="${img}" alt="${name}">
        <h1>${name}</h1>
        <p>Aparece en <strong>${episodes.length}</strong> episodios</p>
        <p>Primer episodio: <strong>${firstEpisode}</strong></p>
        <p>Fecha de estreno: <strong>${dateEpisode}</strong></p>
      </section>
    `;
  
    document.body.innerHTML += html;
  }
  

  printCharacterInfo();




  