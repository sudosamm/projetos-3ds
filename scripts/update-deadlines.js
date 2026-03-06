const fs = require("fs")

const readmePath = "README.md"
let readme = fs.readFileSync(readmePath, "utf8")

/*function projetoAtual() {

  const agora = new Date()

  const projetos = [
    {
      nome: "Projeto 01 - Mini Sistema de Tarefas",
      deadline: new Date("2026-03-06T23:59:59-03:00"),
      link: "https://github.com/sudosamm/projetos-3ds/blob/main/projetos/projeto-01.md"
    },
    {
      nome: "Projeto 02 - Sistema de Loja Mobile",
      deadline: new Date("2026-03-18T23:59:59-03:00"),
      link: "https://github.com/sudosamm/projetos-3ds/blob/main/projetos/projeto-02.md"
    }
  ]

  for (const p of projetos) {
    if (agora < p.deadline) {
      return `\n🚀 **${p.nome}**  
📎 ${p.link}`
    }
  }

  return "Nenhum projeto ativo no momento."
}*/

function tempoRestante(dataFinalISO) {

  const agora = new Date()
  const final = new Date(dataFinalISO)

  const diff = final - agora

  if (diff <= 0) return "Prazo encerrado"

  const horasTotais = Math.floor(diff / (1000 * 60 * 60))
  const dias = Math.floor(horasTotais / 24)
  const horas = horasTotais % 24
  
  if (dias === 0) {
    return `Apenas ${horas} horas restantes para a entrega final!`
  }
  
  return `${dias} dias e ${horas} horas restantes para a entrega final!`
}

function atualizarBloco(readme, start, end, conteudo){

  const regex = new RegExp(`${start}[\\s\\S]*?${end}`)

  return readme.replace(
    regex,
    `${start} ${conteudo} ${end}`
  )
}

function barraProgresso(inicio, fim) {

  const agora = new Date()

  const total = fim - inicio
  const atual = agora - inicio

  let progresso = Math.max(0, Math.min(1, atual / total))

  const blocos = 10
  const preenchidos = Math.round(progresso * blocos)

  const barra =
    "█".repeat(preenchidos) +
    "░".repeat(blocos - preenchidos)

  return `${barra} ${Math.round(progresso*100)}%`
}

const p1 = tempoRestante("2026-03-06T23:59:59-03:00")
const p2 = tempoRestante("2026-03-18T23:59:59-03:00")
const pA = projetoAtual()
const pro1 = barraProgresso("2026-02-25T09:30:00-03:00", "2026-03-06T23:59:59-03:00")
const pro2 = barraProgresso("2026-03-05T10:30:00-03:00", "2026-03-18T23:59:59-03:00")

readme = atualizarBloco(
  readme,
  "<!--P1_START-->",
  "<!--P1_END-->",
  `${p1}`
)

readme = atualizarBloco(
  readme,
  "<!--P2_START-->",
  "<!--P2_END-->",
  `${p2}`
)

readme = atualizarBloco(
  readme,
  "<!--PRO1_START-->",
  "<!--PRO1_END-->",
  `${pro1}`
)

readme = atualizarBloco(
  readme,
  "<!--PRO2_START-->",
  "<!--PRO2_END-->",
  `${pro2}`
)

/*readme = atualizarBloco(
  readme,
  "<!--PROJETO_START-->",
  "<!--PROJETO_END-->",
  `${pA}`
)*/

fs.writeFileSync(readmePath, readme)
