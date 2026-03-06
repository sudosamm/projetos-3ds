const fs = require("fs")

const readmePath = "README.md"
let readme = fs.readFileSync(readmePath, "utf8")

function tempoRestante(dataFinalISO) {

  const agora = new Date()

  const final = new Date(dataFinalISO)

  const diff = final.getTime() - agora.getTime()

  if (diff <= 0) {
    return "Prazo encerrado"
  }

  const horasTotais = Math.floor(diff / (1000 * 60 * 60))
  const dias = Math.floor(horasTotais / 24)
  const horas = horasTotais % 24
  
  if (dias < 0) {
    return `Apenas ${horas} horas restantes!`
  }
  else {
    return `${dias} dias e ${horas} horas restantes`
  }
}

const deadlines = {
  P1: "2026-03-06T23:59:59-03:00",
  P2: "2026-03-18T23:59:59-03:00"
}

const resultadoP1 = tempoRestante(deadlines.P1)
const resultadoP2 = tempoRestante(deadlines.P2)

readme = readme.replace(/<!--P1-->/, `Finaliza em ${resultadoP1}`)
readme = readme.replace(/<!--P2-->/, `Finaliza em ${resultadoP2}`)

fs.writeFileSync(readmePath, readme)
