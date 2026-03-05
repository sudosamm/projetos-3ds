const fs = require("fs")

const readmePath = "README.md"
let readme = fs.readFileSync(readmePath, "utf8")

function tempoRestante(dataFinal) {
  const agora = new Date()
  const final = new Date(dataFinal)

  const diff = final - agora

  if (diff <= 0) {
    return "Prazo encerrado"
  }

  const horas = Math.floor(diff / (1000 * 60 * 60))
  const dias = Math.floor(horas / 24)
  const horasRestantes = horas % 24

  return `${dias} dias e ${horasRestantes} horas restantes`
}

const projeto1 = tempoRestante("2026-03-06T23:59:59")
const projeto2 = tempoRestante("2026-03-18T23:59:59")

readme = readme.replace(/<!--P1-->/, `Finaliza em ${projeto1}`)
readme = readme.replace(/<!--P2-->/, `Finaliza em ${projeto2}`)

fs.writeFileSync(readmePath, readme)
