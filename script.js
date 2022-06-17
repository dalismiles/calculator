function operation() {
  const numFirst = parseInt(prompt("Digita il primo numero"));
  const operatorSign = prompt(
    "Inserisci qui l'operazione (digita + , - , * oppure /)"
  );
  const numSecond = parseInt(prompt("Digita il secondo numero"));

  switch (operatorSign) {
    case "+":
      return numFirst + numSecond;
    case "-":
      return numFirst - numSecond;
    case "*":
      return numFirst * numSecond;
    case "/":
      return numFirst / numSecond;
    default:
      alert("Hey! Non hai selezionato l'operazione!");
  }
}

alert(operation());
