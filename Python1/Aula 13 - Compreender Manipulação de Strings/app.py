mensagem = input("Digite a mensagem encontrada no pergaminho: ")

mensagem = mensagem.lower()
mensagem = mensagem.strip()

print("\nMensagem encontrada:")
print(mensagem)

pista = mensagem.replace("frevo", "passo")

print("\nMensagem decifrada:")
print(pista)

palavras = pista.split()

print("\nCoreografia oculta:")

for palavra in palavras:
    print(palavra.capitalize())