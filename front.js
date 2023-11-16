function irPara(url) {
  document.body.classList.add("animacao-surgir");
  setTimeout(function () {
    window.location.href = url;
  }, 200);
}

function table() {
  fetch("/pedidos")
    .then((response) => response.json())
    .then((data) => {
      const table = document.getElementById("bruxinho-table");
      const rows = data.map((pedido) => {
        return `
        <tr>
        <td>${pedido.nome}</td>
        <td>${pedido.qtd}</td>
        <td>${pedido.total}</td>
        </tr>
        `;
      });
      table.innerHTML = `
      <tr>
      <th>Nome</th>
      <th>Quantidade</th>
      <th>Total</th>
      </tr>${rows.join("")}
      
      `;
    })
    .catch((error) => alert(error));
}

{/* <tr>
      <td colspan="3" id="total_carrinho">Total</td>
      </tr> */}

function total() {
  fetch("/total")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => alert(error));
}

function login() {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      senha: senha.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (senha.value == data[0].senha) {
        alert("Alohomora!");
        window.location.href = "/home";
      } else {
        alert("Trouxaa!");
      }
    })
    .catch((error) => {
      alert("Insira o login seu bobo... tá achando que é mágica é!");
      console.error(error);
    });
}

function register() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let confirmar_senha = document.getElementById("confirmar_senha");
  fetch("/register", {
    method: "POST",
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      senha: senha.value,
      confirmar_senha: confirmar_senha.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => {
      alert("Um novo bruxinho em hogwarts!");
      window.location.href = "/index";
    })
    .catch((error) => console.error(error));
}

function buy(nome_elm, qtd_elm, total_elm) {
  let nome = document.getElementById(nome_elm);
  let qtd = document.getElementById(qtd_elm);
  let total = document.getElementById(total_elm);
  fetch("/pedido", {
    method: "POST",
    body: JSON.stringify({
      nome: nome.textContent,
      qtd: qtd.value,
      total: total.textContent,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => {
      alert("Pedido realizado!");
      table();
    })
    .catch((error) => console.error(error));
}
