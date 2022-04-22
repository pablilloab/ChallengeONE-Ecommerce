let users = [];

let user  = {
    name:"",
    email:"",
    wsp:"",
    dni:"",
    pass:""
}



function handleNewUser () {
    event.preventDefault();

    

    let name = document.newUser.name.value;
    let email = document.newUser.email.value;
    let wsp = document.newUser.wsp.value;
    let dni = document.newUser.dni.value;
    let pass = document.newUser.pass.value;

    let error = document.getElementById("newUserStatus");

    if (name.length < 3) {
        error.innerHTML = "El nombre debe tener mas de 3 caracteres";
    } else if (email.length < 5) {
        error.innerHTML = "El email debe tener mas de 5 caracteres"
    } else if (isNaN(wsp)) {
        error.innerHTML = "El Wsp debe ser un numero";
    } else if (isNaN(dni)) {
        error.innerHTML = "El dni debe ser un numero";
    } else if (pass.length < 8) {
        error.innerHTML = "El password debe ser mayor a 8 caracteres";        
    } else {
        if (users.length === 0) {
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green";
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);
        }else{
            users = JSON.parse(localStorage.getItem("usuarios"))
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green";
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);            
        }
        
    }    
}