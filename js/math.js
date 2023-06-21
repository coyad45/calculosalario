console.group('Cuadrado');
//Formulas basicas para cuadrado
const ladoCuadro = 5;
const perimetroCuadrado = ladoCuadro * 4;
const areaCuadrado = ladoCuadro * ladoCuadro;

function calcularCuadrado(lado) {
    return{
        perimetro:lado * 4,
        area: lado * lado
    };
}

console.log({
    ladoCuadro,
    perimetroCuadrado,
    areaCuadrado,

});

console.groupEnd('Cuadrado')

//Formulas basicas para triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBaseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBaseTriangulo;
const areaTriangulo = (ladoBaseTriangulo  * alturaTriangulo) / 2;

function calcularTriangulo(lado1,lado2,base,altura) {
    return{
        perimetro:lado1 + lado2 + base ,
        area: (base * altura) /2
    };
}

//Formulas basicas para circulo
const radioCirculo = 3;
const diametroCirculo = radioCirculo *2;


const circunferencia = Math.floor(diametroCirculo * Math.PI);
const areaCirculo = Math.floor((radioCirculo ** 2) * Math.PI);
function calcularCirculo(radio) {
    const diametro = radio *2;
    return{
        circunferencia: (diametro * Math.PI.toFixed(2)) ,
        area: ((radio ** 2) * Math.PI.toFixed(2))
    }

}
console.log({
    circunferencia,
    areaCirculo
})

//calcular altura triangulo
function calcularAlturaTrianguo(lado,base) {
    if(lado == base)
    {
        console.warn('Este no es un triangulo isosceles');
    }
    else
    {
        return altura = Math.sqrt((lado ** 2) - ((base ** 2))/4);
    }
}

function calcularEscaleno(a,b,c)
{
   
    const s= ((a+b+c)/2);
    var altura = 2/a*(Math.sqrt(s*((s-a)*(s-b)*(s-c))));
    altura = Math.floor(altura);
    console.log({
       altura
    })
    
    
}