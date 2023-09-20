const GuardarContacto=(db,contacto)=>{
    db.setItem(contacto.id,JSON.stringify(contacto));
    window.location.href='/';
}
const CargarContactos =(db, parentNode)=>{
    let claves = Object.keys(db);
    for(let clave of claves){
        let contacto = JSON.parse(db.getItem(clave));
        CrearContacto(parentNode, contacto,db);
    }
}
const CrearContacto=(parentNode,contacto,db)=>{
    let divContacto=document.createElement('div');
    let CedulaContacto=document.createElement('p');
    let NombreContacto=document.createElement('h3');
    let ApellidosContacto=document.createElement('p');
    let NúmeroContacto=document.createElement('p');
    let CiudadContacto=document.createElement('p');
    let DirecciónContacto=document.createElement('p');
    let IconoBorrar=document.createElement('span');
    
    CedulaContacto.innerHTML=contacto.Cedula;
    NombreContacto.innerHTML=contacto.Nombre;
    ApellidosContacto.innerHTML=contacto.Apellidos;
    NúmeroContacto.innerHTML=contacto.Número;
    CiudadContacto.innerHTML=contacto.Ciudad;
    DirecciónContacto.innerHTML=contacto.Dirección;
    IconoBorrar.innerHTML='delete_forever';

    divContacto.classList.add('Contactos');
    IconoBorrar.classList.add('material-icons', 'icono');
    IconoBorrar.onclick=()=>{
    db.removeItem(contacto.id);
    window.location.href='/'
    }
    divContacto.appendChild(CedulaContacto);
    divContacto.appendChild(NombreContacto);
    divContacto.appendChild(ApellidosContacto);
    divContacto.appendChild(NúmeroContacto);
    divContacto.appendChild(CiudadContacto);
    divContacto.appendChild(DirecciónContacto);
    divContacto.appendChild(IconoBorrar);

    parentNode.appendChild(divContacto);




}