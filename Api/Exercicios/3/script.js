async function carregarFilmes() {
  let titulo = document.getElementById("titulo").value;

  const url = `http://www.omdbapi.com/?t=${titulo}&apikey=76ee27bc`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const lista = document.getElementById("listaFilmes");
    lista.innerHTML = "";

    const section = document.createElement("section");
    const imagem = document.createElement("img");

    imagem.src = data.Poster;
    section.appendChild(imagem);
    lista.appendChild(section);
  } catch (error) {
    console.log(`Erro ao conectar com a API ${error}`);
  }
}
