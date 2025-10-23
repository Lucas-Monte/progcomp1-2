const url = "https://jsonplaceholder.typicode.com/users";

async function consultar() {
  try {
    const resposta = await fetch(url);
    const usuarios = await resposta.json();

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    for (let i = 0; i < usuarios.length; i++) {
      const li = document.createElement("li");
      li.textContent = `Nome: ${usuarios[i].name} - Endereço: ${usuarios[i].address.street}, ${usuarios[i].address.suite}, ${usuarios[i].address.city}, ${usuarios[i].address.zipcode}`;
      lista.appendChild(li);
    }
  } catch (error) {
    console.log(`Erro ao conectar com a API ${error}`);
  }
}
