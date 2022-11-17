/// ! Sesión 14

/// TODO Ejercicio 1

/* let hombres = +prompt("Ingrese el número de estudiantes varones")
let mujeres = +prompt("Ingrese el número de estudiantes mujeres")
let total = hombres + mujeres


alert(`La cantidad total de alumnos es de ${total}`)
alert(`El porcentaje de varones es de ${[hombres * 100] / total}%`)
alert(`El porcentaje de mujeres es de ${[mujeres * 100] / total}%`) */

/// TODO Ejercicio 2


/* let inversion = +prompt("Ingrese el monto invertido en la reparación")

alert(`La inversión destinada a la Avenida La Mar es de ${inversion * 35 / 100} soles`)
alert(`La inversión destinada a la Avenida Avenida Abancay es de ${inversion * 25 / 100} soles`)
alert(`La inversión destinada a la Avenida 28 de Julio es de ${inversion * 10 / 100} soles`)
alert(`La inversión destinada a la Avenida Aviación es de ${inversion * 15 / 100} soles`)
alert(`La inversión destinada a la Avenida Tacna es de ${inversion * 15 / 100} soles`) */

/// TODO Ejercicio 3

/* let entradag = +prompt("Ingrese el número vendido de entradas genrales")
let entradam = +prompt("Ingrese el número de vendido entradas para mayores de 65 años")
let entradan = +prompt("Ingrese el número de vendido entradas para menores de edad")

alert(`El total de dinero recaudad por entradas generales es de ${entradag * 150} soles`)
alert(`El total de dinero recaudad por entradas para mayores de 65 años es de ${entradam * 50} soles`)
alert(`El total de dinero recaudad por entradas para menores de edad es de ${entradan * 80} soles`) */




/// ! Sesión 15

/// TODO: Ejercicio 1

/* let nombre = prompt("Ingre su nombre")
let sueldo = +prompt("Ingrese su sueldo base")
let hijos = prompt("Ingrese el número de hijos que tiene")
let bonificacion = sueldo * 7 / 100

if (hijos > 0) {
    alert(`Hola, ${nombre}. Su bonificación es de ${bonificacion} soles. Por lo tanto su sueldo final es de ${sueldo + bonificacion} soles`)
}

else {
    alert(`Lo sentimos, ${nombre}. Usted no es beneficiario de la bonificación , su sueldo final es de ${sueldo}`)
}


/// TODO: Ejercicio 2

let numero = +prompt("Ingrese el número")

if (numero > 500) {
    alert(`El 18% del número digitado es ${numero * 18 / 100}`)
}

else {
    alert("Lo sentimos, el número ingresado es igual o inferior a 500, por favor ingrese otro número nuevamente.")
}


/// TODO: Ejercicio 3

let numero = +prompt("Ingrese un número")

let total = 1;

for (let i = 1; i <= numero; i++) {
    total = total * i;
}

alert(`El factorial de ${numero}! es ${total}`)

/// TODO: Ejercicio 4

let compra = +prompt("Ingrese el importe por su compra realizada")

if (compra >= 150) {
    alert(`El precio de su compra ha sido mayor a 150 soles, por lo tanto recibe un descuento de ${compra * 12 / 100} soles. El nuevo precio es de ${(compra - (compra * 12 / 100))} soles`)
}

else {
    alert("Lo sentimos, su compra ha sido inferior a 150 soles, por lo tanto no se le aplica un descuento")
}

/// TODO: EJercicio 5

let nombre = prompt("Ingrese el nombre del alumno")
let notaParcial = +prompt("Ingrese la nota de su evaluación parcial")
let notaFinal = +prompt("Ingrese la nota de su evaluación final")
let notaPracticas = +prompt("Ingrese la nota de sus prácticas")
let promedio = (notaParcial * 25 / 100) + (notaPracticas * 25 / 100) + (notaFinal * 50 / 100)


if (promedio >= 11) {
    alert(`Felicitaciones ${nombre} , has aprobado el curso con un promedio de ${promedio} puntos`)
}

else {
    alert("Lo sentimos, has desaprobado el curso")
}   */



