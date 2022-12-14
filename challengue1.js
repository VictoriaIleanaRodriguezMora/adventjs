// El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

// console.log(wrapped)
/* [
    "*****\\n*cat*\\n*****",
    "******\\n*game*\\n******",
    "*******\\n*socks*\\n*******"
] */
// Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

// Nota: El carácter \n representa un salto de línea.

// ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

// Ah, y no modifiques (mutes) el array original.
// 3 letras > 5 *

const gifts2 = ['cat', 'game', 'socks']
function wrapping(gifts) {

    let asterisco = "*"
    let largeItem
    let items = []

    gifts.forEach((element, index) => {
        largeItem = element.length + 2

        items.push(`${asterisco.repeat(largeItem)}\n${asterisco}${element}${asterisco}\n${asterisco.repeat(largeItem)}`)

    });
    // console.log(items);
    // console.log(gifts);
    return items

}

const wrapped = wrapping(gifts2)

console.log(wrapped);














