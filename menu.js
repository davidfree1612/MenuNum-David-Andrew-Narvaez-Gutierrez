import inquirer from "inquirer";
import chalk from "chalk";
import Suma from "./operaciones/Suma.js";
import Resta from "./operaciones/Resta.js";
import Multiplicacion from "./operaciones/Multiplicacion.js";
import Division from "./operaciones/Division.js";


class Menu {
  async mostrar() {
    let continuar = true;

    while (continuar) {
      const { opcion } = await inquirer.prompt([
        {
          type: "select",
          name: "opcion",
          message: "Selecciona una opción:",
          choices: [
            { name: "Sumar", value: "sumar" },
            { name: "Restar", value: "restar" },
            { name: "Multiplicar", value: "multiplicar" },
            { name: "Dividir", value: "dividir" },
            { name: "Salir", value: "salir" }
          ]
        }
      ]);

      if (opcion === "salir") {
        console.log(chalk.red("Saliendo del programa..."));
        continuar = false;
        break;
      }

      const { num1, num2 } = await inquirer.prompt([
        { type: "number", name: "num1", message: "Ingresa el primer número:" },
        { type: "number", name: "num2", message: "Ingresa el segundo número:" }
      ]);

      let resultado;
      switch (opcion) {
        case "sumar":
          resultado = new Suma(num1, num2).ejecutar();
          console.log(chalk.green(`Resultado: ${resultado}`));
          break;
        case "restar":
          resultado = new Resta(num1, num2).ejecutar();
          console.log(chalk.yellow(`Resultado: ${resultado}`));
          break;
        case "multiplicar":
          resultado = new Multiplicacion(num1, num2).ejecutar();
          console.log(chalk.blue(`Resultado: ${resultado}`));
          break;
        case "dividir":
          resultado = new Division(num1, num2).ejecutar();
          console.log(chalk.magenta(`Resultado: ${resultado}`));
          break;
      }
    }
  }
}

export default Menu;
