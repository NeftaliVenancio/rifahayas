var generatedNumbers = [];
		let count = 0;
		
		function generateRandomNumber() {
			count++;
			if(count < 5)
			{
				// Generar un número aleatorio entre 1 y 400
			var randomNumber = Math.floor(Math.random() * 400) + 1;

			// Verificar si el número ya fue generado previamente
			while (generatedNumbers.includes(randomNumber)) {
				randomNumber = Math.floor(Math.random() * 400) + 1;
			}

			// Agregar el número a la lista y mostrarlo en la pantalla
			generatedNumbers.push(randomNumber);
			updateNumberList();
			}
		}

		function updateNumberList() {
			
			// Mostrar los últimos 4 números generados en los elementos con la clase "number"
			var numberElements = document.getElementsByClassName("number");

			for (var i = 0; i < numberElements.length; i++) {
				if (i < generatedNumbers.length) {
					numberElements[i].innerHTML = generatedNumbers[generatedNumbers.length - i - 1];
				} else {
					numberElements[i].innerHTML = "";
				}
			}

			// Mostrar la lista completa de números generados
			var numberListElement = document.getElementById("number-list");
			numberListElement.innerHTML = "<strong>Números generados:</strong>";
			for (var i = 0; i < generatedNumbers.length; i++) {
				var numberItem = document.createElement("div");
				numberItem.classList.add("number-item");
				numberItem.innerHTML = "Número " + (i + 1) + ": " + generatedNumbers[i];
				numberListElement.appendChild(numberItem);
			}
		}