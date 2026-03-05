from datetime import datetime

from datetime import datetime, timedelta
# Para GMT-3
now = datetime.utcnow() - timedelta(hours=3)

# Configure seus projetos aqui
projects = [
    {"name": "[Projeto 01](https://github.com/sudosamm/projetos-3ds/blob/main/projetos/projeto-01.md)", "deadline": "2026-03-06 23:59"},
    {"name": "[Projeto 02](https://github.com/sudosamm/projetos-3ds/blob/main/projetos/projeto-02.md)", "deadline": "2024-03-18 23:59"},
]

def get_remaining(deadline_str):
    deadline = datetime.strptime(deadline_str, "%Y-%m-%d %H:%M")
    now = datetime.now()
    diff = deadline - now
    
    if diff.days < 0:
        return "⚠️ Finalizado"
    if diff.days == 0:
        hours = diff.seconds // 3600
        return f"🔥 Hoje ({hours}h restantes)"
    return f"⏳ {diff.days} dias"

# Gera a string da tabela
table_header = "| Projeto | Prazo Final | Tempo Restante |\n| :--- | :--- | :--- |\n"
rows = ""
for p in projects:
    rows += f"| {p['name']} | {p['deadline']} | {get_remaining(p['deadline'])} |\n"

full_table = f"\n{table_header}{rows}"

# Lê e atualiza o README
with open("README.md", "r", encoding="utf-8") as f:
    content = f.read()

import re
new_content = re.sub(r".*?", 
                     full_table, content, flags=re.DOTALL)

with open("README.md", "w", encoding="utf-8") as f:
    f.write(new_content)
