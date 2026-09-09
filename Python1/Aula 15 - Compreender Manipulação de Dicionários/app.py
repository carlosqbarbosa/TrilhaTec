codigos_magicos = {
    "A": "Milho",
    "B": "Amendoim",
    "C": "Coco",
    "D": "Canela",
    "E": "Leite"
}

elementos_escolhidos = []

for i in range(1, 6):
    codigo = input(f"Digite o código {i} (ou '0' para encerrar): ").upper()

    if codigo == "0":
        break
    elif codigo in codigos_magicos:
        elementos_escolhidos.append(codigos_magicos[codigo])
    else:
        print("Código inválido.")

print("\nElementos escolhidos:")

for elemento in elementos_escolhidos:
    print(elemento)

if len(elementos_escolhidos) > 0:
    print("\nParabéns! Você decifrou o Código Mágico e criou a receita emprestada de São João.")
else:
    print("\nNenhum elemento foi escolhido.")