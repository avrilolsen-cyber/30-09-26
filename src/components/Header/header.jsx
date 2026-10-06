import "./header.css";

function header() {
  return (
    <header class="cabecalho">
      <span class="logo">Studio Alfa</span>
      <nav>
        <ul class="menu">
          <li>
            <a href="#">teste</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a class="botao-contato" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default header;
