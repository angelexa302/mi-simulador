const clave = "12345";
let intentos = 0;
let acceso = false;

while (intentos < 3 && !acceso) {
    const entrada = prompt("Ingrese la clave de 5 dígitos:");
    if (entrada === clave) {
        acceso = true;
        alert("Acceso concedido");
    } else {
        intentos++;
        alert(`Clave incorrecta. Intentos restantes: ${3 - intentos}`);
    }
} 
if (!acceso) {
    alert("Acceso denegado. Has agotado tus intentos.");
}