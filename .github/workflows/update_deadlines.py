import datetime
import re
import os

# Configuração das Deadlines
deadlines = {
    "P1": datetime.datetime(2026, 3, 6, 23, 59),
    "P2": datetime.datetime(2026, 3, 18, 23, 59),
}

def calcular_restante(data_final):
    agora = datetime.datetime.now()
    diff = data_final - agora
    
    if diff.total_seconds() <= 0:
        return "🔴 Prazo Encerrado"
    
    dias = diff.days
    horas = diff.seconds // 3600
    
    if dias > 0:
        return f"⏳ {dias}d {horas}h restantes"
    return f"⚠️ Apenas {horas}h restantes!"

def atualizar_readme():
    file_path = "README.md"
    if not os.path.exists(file_path):
        print("Arquivo README.md não encontrado!")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        conteudo = f.read()

    for tag, data in deadlines.items():
        texto_novo = calcular_restante(data)
        
        # Esta Regex é mais rigorosa: 
        # Ela procura exatamente o par de tags e captura o que estiver no meio
        # \s* permite espaços em branco opcionais
        padrao = rf"()[\s\S]*?()"
        substituicao = rf"\1 {texto_novo} \2"
        
        if re.search(padrao, conteudo):
            conteudo = re.sub(padrao, substituicao, conteudo)
            print(f"Atualizando {tag}: {texto_novo}")
        else:
            print(f"Erro: Tag {tag} não encontrada ou mal formatada no README.")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(conteudo)

if __name__ == "__main__":
    atualizar_readme()
