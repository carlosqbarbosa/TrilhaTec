lanche = input("Escolha o tipo de sanduíche (carne, frango ou vegetariano): ").lower()

if lanche == "carne":
    preco_lanche = 15.00
elif lanche == "frango":
    preco_lanche = 13.00
elif lanche == "vegetariano":
    preco_lanche = 12.00
else:
    print("Opção de sanduíche inválida.")
    preco_lanche = 0

extras = 0

if preco_lanche > 0:
    queijo = input("Deseja adicionar queijo? (sim ou nao): ").lower()

    if queijo == "sim":
        preco_lanche += 2.00
        extras += 1

    bacon = input("Deseja adicionar bacon? (sim ou nao): ").lower()

    if bacon == "sim":
        preco_lanche += 3.00
        extras += 1

    bebida = input("Escolha uma bebida (refrigerante, suco ou agua): ").lower()

    if bebida == "refrigerante":
        preco_bebida = 5.00
    elif bebida == "suco":
        preco_bebida = 4.00
    elif bebida == "agua":
        preco_bebida = 2.00
    else:
        preco_bebida = 0

    preco_total = preco_lanche + preco_bebida

    print(f"\nTipo de lanche: {lanche}")
    print(f"Quantidade de extras: {extras}")
    print(f"Bebida: {bebida}")
    print(f"Preço total: R$ {preco_total:.2f}")