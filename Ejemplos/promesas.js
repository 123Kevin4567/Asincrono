function cuadrado(valor) {
    if (typeof valor !=="number") {
        return Promise.reject("Cuidado,Es un Furro disfrazado de meme");
    }
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({
                valor: valor,
                resultado: valor * valor + valor
            });  
        }, 3000);
        });
}

cuadrado(2).then((obj) =>{
console.log(obj);
return cuadrado (++obj.valor)
}).then((obj) =>{
    console.log(obj);
return cuadrado (++obj.valor);
}).then((obj) =>{
    console.log(obj);
    return cuadrado (++obj.valor);
}).then((a) =>{
    console.log(a);
})



