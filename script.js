function mostrarSurpresa() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if (numero >= 1 && numero <= 5) {
        var surpresas = ["cineminha", "lanchinho na praça", "datezinho de casa (com direito a vinhos e comidinhas)", "cervejinha na praia", "lugar aleatório"];
        resultado.innerHTML = "Surpresa: " + surpresas[numero - 1];
    } else {
        resultado.innerHTML = "Por favor, escolha um número de 1 a 5.";
    }
}
