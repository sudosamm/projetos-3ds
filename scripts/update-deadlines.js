const fs = require("fs")

const readmePath = "README.md"
let readme = fs.readFileSync(readmePath, "utf8")

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
    `${start}\n${conteudo}\n${end}`
  )
}

const p1 = tempoRestante("2026-03-06T23:59:59-03:00")
const p2 = tempoRestante("2026-03-18T23:59:59-03:00")

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

fs.writeFileSync(readmePath, readme)
