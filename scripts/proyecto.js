
function comprar (){
    let producto = prompt("ingrese un producto")
     switch (producto){
        case "bikini print":
        case "bikini mara":
        case "bikini sara":
        alert("disponemos en talles: S,M,L");
        break;
        default:
            alert("te pedimos disculpas estamos reponiendo stock");
            break;
        
    }
}
comprar();
