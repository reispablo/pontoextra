// Renderização do mural de pontos extras e controle das abas.
// Depende do objeto global ALUNOS definido em data.js.

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

  document.querySelectorAll(".tab-btn").forEach((botao) => {
    botao.addEventListener("click", () => ativarAba(botao.dataset.tab));
  });
}

init();
