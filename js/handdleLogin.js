function handleLogin () {
    
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contrasena").value;

    let logstat = document.getElementById("logstatus");

    users = JSON.parse(localStorage.getItem("usuarios"))
    

    users.forEach (element => {
        
        console.log(typeof(element.pass))
        console.log(typeof(pass))

        if (element.name === user && element.pass == pass) {
            logstat.innerHTML = "Usuario logueado correctamente"
            logstat.style.color = "green"
            window.location.href = "../backProductos.html"
        } else {
            logstatus.innerHTML = "Datos incorrectos"
            logstat.style.color = "red"
        }
    })
}
