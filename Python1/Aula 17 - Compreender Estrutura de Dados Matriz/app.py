import random

numeros = random.sample(range(100), 25)

cartela = []

for i in range(5):
    linha = []

    for j in range(5):
        linha.append(numeros[i * 5 + j])

    cartela.append(linha)

print("CARTELA DE BINGO")

for linha in cartela:
    for numero in linha:
        print(f"{numero:02}", end=" ")

    print()