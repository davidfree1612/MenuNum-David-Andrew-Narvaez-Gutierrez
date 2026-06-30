class Division {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  ejecutar() {
    if (this.num2 === 0) return "Error: división entre cero";
    return this.num1 / this.num2;
  }
}

export default Division;
