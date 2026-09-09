import random

def verificar_vencedor(heroi1, pontos1, heroi2, pontos2):
    if pontos1 > pontos2:
        return heroi1
    elif pontos2 > pontos1:
        return heroi2
    else:
        return None


def realizar_competicao():
    heroi1 = input("Digite o nome do primeiro herói: ")
    afiliacao1 = input("Digite a afiliação do primeiro herói (Marvel ou DC): ")

    heroi2 = input("Digite o nome do segundo herói: ")
    afiliacao2 = input("Digite a afiliação do segundo herói (Marvel ou DC): ")

    vencedor = None

    while vencedor is None:
        pontos1 = 0
        pontos2 = 0

        print(f"\nCompetição entre {heroi1} e {heroi2}")

        for tentativa in range(1, 4):
            resultado1 = random.randint(0, 10)
            resultado2 = random.randint(0, 10)

            print(f"\nTentativa {tentativa}")
            print(f"{heroi1}: {resultado1} vacinas distribuídas")
            print(f"{heroi2}: {resultado2} vacinas distribuídas")

            pontos1 += resultado1
            pontos2 += resultado2

        vencedor = verificar_vencedor(heroi1, pontos1, heroi2, pontos2)

        if vencedor is None:
            print("\nHouve um empate. A competição será repetida.")

    if vencedor == heroi1:
        afiliacao = afiliacao1
    else:
        afiliacao = afiliacao2

    print("\nResultado da competição")
    print(f"Herói vencedor: {vencedor}")
    print(f"Afiliação: {afiliacao}")


realizar_competicao()