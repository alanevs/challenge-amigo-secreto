// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
amigos=[]
function agregarAmigo()
{
    // En caso de no haber ingresado un nombre, avisar que no se puede añadir un valor vacio
    if(document.getElementById("amigo").value === "")
    {
        alert("Por favor, ingrese un nombre.")
    }
    else
    {
        // Si se ingreso un nombre. almacenar el nombre añadido dentro del array
        let obtenerNombre = document.getElementById("amigo").value;
        amigos.push(obtenerNombre);
        console.log(amigos);
    }
    limpiarCaja();
    actualizarListaAmigos();
}
function actualizarListaAmigos()
{
    let lista = document.getElementById("listaAmigos");// Lista donde se mostraran los amigos
    lista.innerHTML = "";// Limpiar lista para evitar duplicados al actualizar
    // Por cada interacion en el array creo un elemento li para cada  titulos
    for(let i = 0; i<amigos.length ;i++)
        {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
}
function sortearAmigo()
{
    // En caso de tener el array sin amigos
    if(amigos.length === 0)
    {
        mensajeResultado("resultado","No hay amigos ingresados para sortear")
    }
    else 
    {
        // En caso de tener el arrays con amigos
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);// Genero un numero aleatorio de indice del array
        console.log(indiceAleatorio);
        let amigoElegido = amigos[indiceAleatorio] // El indice generado se relaciona con una posicion del array
        mensajeResultado("resultado",`El amigo sorteado es: ${amigoElegido}`)
        let vaciarLista = document.getElementById("listaAmigos");
        vaciarLista.innerHTML= "";// Vacio la lista de amigo agregados
    }


}
function limpiarCaja()
{
    // Vacio el valor de la caja por cada amigo que agrego
    let vaciarCaja=document.getElementById("amigo");
    vaciarCaja.value="";
}
function mensajeResultado(id,texto)
{
    // Mensaje del resultado a la hora de sortear al amigo
    let mensajeHTML = document.getElementById(id);
    mensajeHTML.innerHTML=texto;
}