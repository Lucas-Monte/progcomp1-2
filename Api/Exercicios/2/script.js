const url = "https://jsonplaceholder.typicode.com/posts";

async function consultar() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const lista = document.getElementById("listaPostagens");

    for (let i = 0; i < data.length; i++) {
      const ul = document.createElement("ul");
      const li = document.createElement("li");

      ul.textContent = `Titulo - ${data[i].title}`;
      li.textContent = `Conteudo - ${data[i].body}`;

      ul.appendChild(li);
      lista.appendChild(ul);
    }
  } catch (error) {
    console.log(`Erro ao conectar com a API ${error}`);
  }
}
