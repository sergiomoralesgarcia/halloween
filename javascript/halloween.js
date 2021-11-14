/********** Aquí están las funciones de halloweem  *********/

/********** función mostrar *********/
/********** una función es un módulo que ejecuta una sola tarea
 *          mostrar --> muestra, ocultar --> oculta
 *          JavaScript toma coo objeto principal document, que  
 *          es la página html actual
 *          tiene una serie de operadores, llamados getters,
 *          que seleccionan elementos para su manipulación.
 *          Un elemento, seleccionado con un getter, puede ser 
 *          modificado: contenido, estilo, los atributos... 
 */

function mostrar (murcielagos) {
    document.getElementById(murcielagos).style.visibility="visible";
}
function ocultar (murcielagos) {
    document.getElementById(murcielagos).style.visibility="hidden";
}
function sonar (bats){
    document.getElementById(bats).play();
}

function mostrar (calabaza) {
    document.getElementById(calabaza).style.visibility="visible";
}
function ocultar (calabaza) {
    document.getElementById(calabaza).style.visibility="hidden";
}

function sonar (sonidocalabaza){
    document.getElementById(sonidocalabaza).play();
}
function sonar (sonidofondo){
    document.getElementById(sonidofondo).play();
}
function sonar (grito){
    document.getElementById(grito).play();
}
function sonar (calabazas){
    document.getElementById(calabazas).play();
}