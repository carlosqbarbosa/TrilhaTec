quantidade = int(input("Digite a quantidade de produtos que serão avaliados: "))

maior_nota = 0
vencedor = ""
categoria_vencedora = ""

for i in range(quantidade):
    print(f"\nProduto {i + 1}")

    nome = input("Digite o nome do produto: ")
    categoria = input("Digite a categoria (Frutas ou Vegetais): ")
    nota = float(input("Digite a nota do produto: "))

    if categoria.lower() == "frutas" or categoria.lower() == "vegetais":
        if nota > maior_nota:
            maior_nota = nota
            vencedor = nome
            categoria_vencedora = categoria
    else:
        print("Categoria inválida.")

print("\nResultado da Feira da Agricultura Familiar")
print(f"Vencedor: {vencedor}")
print(f"Categoria: {categoria_vencedora}")
print(f"Nota: {maior_nota}")