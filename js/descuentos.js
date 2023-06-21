const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const result = document.querySelector('#result');
const cupones= document.querySelector('#cupon');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento()
{
    const cupon={
        perrito: 25,
        gato: 50,
        rata: 75,
        tacaño: 90,

    };
    calcular.classList.add("inactive")
    const price = Number(inputPrice.value);
    const discount = Number(cupon[cupones.value]);
    const newPrice = (price*(100-discount))/100;
    console.log(discount);

    if(!price || !discount)
    {
        result.innerText = 'Uno o mas de los valores no fueron declarados';
        return;
    }
    
    result.innerText = 'El nuevo precio con descuento es $' + newPrice;
}