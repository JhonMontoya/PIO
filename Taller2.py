#Ejercicio 4

contactos = {"Cantera": 1234567890,
             "Quintero": 908765431,
             "Guerrero": 5678900123} #Iniciamos con 3 contactos

variableControl = True

while variableControl:
    print("1. Agregar un contacto")
    print("2. Buscar un contacto")
    print("3. Mostrar contactos")
    print("4. Editar un contacto")
    print("0. Salir del programa")

    opcion = input("sleccione una de las opciones: \n")
    
    if opcion == "0":
        variableControl=False
    elif opcion == "1":
        nombre = input("Ingresa el nombre de contacto: \n")
        numero = int(input("ingresa el número de contacto: \n"))
        contactos[nombre] = numero
        print(f"{nombre} ha sido agregado exitosamente a la lista de contactos")
    elif opcion == "2":
        nombre = input("ingresa el nombre del contacto: \n")
        telefono = contactos[nombre]
        print(f"el numero de {nombre} es: {telefono}")
    elif opcion == "4":
        nombre = input("ingresa el nombre del contacto a modificar: \n")
        nuevoNumero = int(input("Ingrese el nuevo número: \n"))
        contactos[nombre] = nuevoNumero
