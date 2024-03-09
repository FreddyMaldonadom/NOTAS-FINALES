1. **document.getElementById()**:
   Esta función se utiliza para obtener una referencia al elemento HTML que tenga el ID especificado.

   let nota01html = document.getElementById("nota01html");

   En este caso, se obtiene una referencia al elemento HTML con el ID "nota01html" y se guarda en la variable `nota01html`.

2. **prompt()**:
   Esta función muestra un cuadro de diálogo en el navegador que solicita al usuario ingresar un valor. El valor ingresado se devuelve como una cadena de texto. Por ejemplo:
   nota01html.innerHTML = prompt("Nota 01 HTML");

   Aquí, se muestra un cuadro de diálogo con el mensaje "Nota 01 HTML", y el valor ingresado por el usuario se asigna al contenido (`innerHTML`) del elemento HTML al que hace referencia `nota01html`.

3. **parseFloat()**:
   Esta función convierte una cadena de texto en un número de punto flotante. Se utiliza en la función `calcularPromedio` para convertir las cadenas de texto que contienen las notas en números:
   const suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
   Esto es necesario porque los valores ingresados por el usuario a través de `prompt` son cadenas de texto, y para realizar cálculos aritméticos, se deben convertir a números.

4. **toFixed()**:
   Esta función se utiliza para formatear un número con una cantidad específica de dígitos decimales. En el código, se utiliza `toFixed(2)` para redondear el promedio a dos decimales:
   return promedio.toFixed(2);

5. **Template Literals**:
   Se utilizan template literals (cadenas de texto delimitadas por comillas invertidas `` ` ``), que permiten incrustar expresiones JavaScript utilizando la sintaxis `${expresión}`. Esto se utiliza para construir la cadena de texto que se asigna al contenido del elemento HTML:
   
   resultadonota01.innerHTML = `El promedio de la nota 1 es: ${promedio1}`;

   Aquí, `${promedio1}` se reemplaza con el valor de la variable `promedio1` dentro de la cadena de texto.

En resumen de las funciones:

- `document.getElementById()` para obtener referencias a elementos HTML.
- `prompt()` para solicitar al usuario que ingrese las notas.
- `parseFloat()` para convertir cadenas de texto en números de punto flotante.
- `toFixed()` para formatear números con una cantidad específica de dígitos decimales.
- Template literals para incrustar valores en cadenas de texto.
