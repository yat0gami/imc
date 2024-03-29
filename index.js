function calculate(){
    var height = document.getElementById("height").value/100
    var weight = document.getElementById("weight")

    var inc = weight / height ** 2;
    var text=""
    if (imc<18.5){
        window.alert("Você está magro(a) demais!")
    }else if(imc<24.9){
        window.alert("você está no peso ideal!")
    }else if(imc<29.9){
        window.alert("você está com sobrepeso")
    }else if(imc<39.9){
        window.alert("você está com obesidade")
    }else if(imc>39.9){
        window.alert("você está igual a thais carla")
    }
    document.getElementById("text_area").innerText=text
}    