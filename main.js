const Cedula =document.querySelector('.Cedula');
const Nombre =document.querySelector('.Nombre');
const Apellidos =document.querySelector('.Apellidos');
const Número =document.querySelector('.Número');
const Ciudad =document.querySelector('.Ciudad');
const Dirección =document.querySelector('.Dirección');
const BtnAgregarContacto =document.querySelector('.Button_Agregar_tarea');

const ListadoContactos= document.querySelector('.Listado-Contactos');

const db =window.localStorage;

BtnAgregarContacto.onclick=() =>{
    let contacto = {
        id:Math.random(1,100),
        Cedula:Cedula.value,
        Nombre:Nombre.value,
        Apellidos:Apellidos.value,
        Número:Número.value,
        Ciudad:Ciudad.value,
        Dirección:Dirección.value,
    }
    GuardarContacto(db, contacto);
}
CargarContactos(db,ListadoContactos);