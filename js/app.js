// Renderização do mural de pontos extras e controle das abas.
// Depende dos objetos globais ALUNOS e PROVAS definidos em data.js.

function formatarDataProva(iso) {
  const data = new Date(iso);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const hora = String(data.getHours()).padStart(2, "0");
  return `Contagem até a prova · ${dia}/${mes}/${data.getFullYear()} às ${hora}h`;
}

function formatarContagem(msRestante) {
  const totalSegundos = Math.floor(msRestante / 1000);
  const dias = Math.floor(totalSegundos / 86400);
  const horasTotais = Math.floor(totalSegundos / 3600); // total de horas até a prova, sem descontar os dias
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;
  const pad = (n) => String(n).padStart(2, "0");
  const relogio = `${pad(horasTotais)}:${pad(minutos)}:${pad(segundos)}`;

  if (dias <= 0) return relogio;
  const diasTexto = dias === 1 ? "1 dia" : `${dias} dias`;
  return `${diasTexto} · ${relogio}`;
}

function atualizarContador(turma) {
  const clockEl = document.getElementById("countdown-clock-" + turma);
  if (!clockEl) return;

  const msRestante = new Date(PROVAS[turma]).getTime() - Date.now();

  if (msRestante <= 0) {
    clockEl.textContent = "Prova encerrada";
    clockEl.classList.add("encerrado");
    return;
  }

  clockEl.textContent = formatarContagem(msRestante);
}

function iniciarContadores() {
  Object.keys(PROVAS).forEach((turma) => {
    document.getElementById("countdown-label-" + turma).textContent = formatarDataProva(PROVAS[turma]);
    atualizarContador(turma);
  });

  setInterval(() => Object.keys(PROVAS).forEach(atualizarContador), 1000);
}

function ordenarPorNome(nomes) {
  return [...nomes].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function renderizarListaVazia(listEl) {
  listEl.innerHTML = `
    <div class="empty">
      <span class="glyph">☆</span>
      <p>Ainda não há nomes cadastrados nesta turma. Assim que forem enviados, aparecem aqui.</p>
    </div>`;
}

function renderizarRoster(listEl, nomes) {
  listEl.innerHTML = `
    <ul class="roster">
      ${nomes
        .map(
          (nome, i) => `
        <li>
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="name">${nome}</span>
          <span class="badge">extra</span>
        </li>`
        )
        .join("")}
    </ul>`;
}

function renderPanel(turma) {
  const nomes = ordenarPorNome(ALUNOS[turma]);
  const listEl = document.getElementById("list-" + turma);
  const countEl = document.getElementById("count-" + turma);
  const subEl = document.getElementById("sub-" + turma);

  countEl.textContent = nomes.length;

  if (nomes.length === 0) {
    subEl.textContent = "";
    renderizarListaVazia(listEl);
    return;
  }

  subEl.textContent = nomes.length === 1 ? "1 aluno" : nomes.length + " alunos";
  renderizarRoster(listEl, nomes);
}

function ativarAba(turmaAlvo) {
  document.querySelectorAll(".tab-btn").forEach((botao) => {
    botao.setAttribute("aria-selected", String(botao.dataset.tab === turmaAlvo));
  });

  document.querySelectorAll(".panel").forEach((painel) => {
    if (painel.dataset.tab === turmaAlvo) {
      painel.setAttribute("data-active", "true");
    } else {
      painel.removeAttribute("data-active");
    }
  });
}

function init() {
  Object.keys(ALUNOS).forEach(renderPanel);
  iniciarContadores();

  document.querySelectorAll(".tab-btn").forEach((botao) => {
    botao.addEventListener("click", () => ativarAba(botao.dataset.tab));
  });
}

init();
