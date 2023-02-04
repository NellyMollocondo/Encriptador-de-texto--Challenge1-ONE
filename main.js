//buttons
const btnEncriptar = document.querySelector('#btn-encriptar');
const btnDesencriptar = document.querySelector('#btn-desencriptar');
const btnCopiar = document.querySelector('#btn-copiar');
// textarea
const text = document.querySelector('#text');
const outputText = document.querySelector('#outputtext');
//messages
const messageHeader = document.querySelector('.message b');
const messageDescription = document.querySelector('.message p');
//container
const containerOutput = document.querySelector('#container-output');
const containerMessage = document.querySelector('.container-message');

let newArray = [];
let newArrayCaracteres = [];

const algoritmo = (caracter) => {
    let newCaracter;
    
    switch(caracter) {
        case 'e':
            newCaracter = 'enter';
            newArray.push(newCaracter);
            break;
        case 'i':
            newCaracter = 'imes';
            newArray.push(newCaracter);
            break;
        case 'a':
            newCaracter = 'ai';
            newArray.push(newCaracter);
            break;
        case 'o':
            newCaracter = 'ober';
            newArray.push(newCaracter);
            break;
        case 'u':
            newCaracter = 'ufat';
            newArray.push(newCaracter);
            break;
        default:
            newArray.push(caracter);
    }
}

const algoritmoDesencriptar = (caracter, index, arrayCaracteres) => {

    if(caracter === 'e'){
            const indiceActual = index;
            if((arrayCaracteres[indiceActual]+arrayCaracteres[indiceActual+1]+arrayCaracteres[indiceActual+2]+arrayCaracteres[indiceActual+3]+arrayCaracteres[indiceActual+4])==='enter'){
                arrayCaracteres.splice(indiceActual+1,4);
            }
        };
    
        if(caracter === 'i'){
            const indiceActual = index;
            if((arrayCaracteres[indiceActual]+arrayCaracteres[indiceActual+1]+arrayCaracteres[indiceActual+2]+arrayCaracteres[indiceActual+3])==='imes'){
                arrayCaracteres.splice(indiceActual+1,3);
            }
        };
    
        if(caracter === 'a'){
            const indiceActual = index;
            if((arrayCaracteres[indiceActual]+arrayCaracteres[indiceActual+1])==='ai'){
                arrayCaracteres.splice(indiceActual+1,1);
            }
        };
    
        if(caracter === 'o'){
            const indiceActual = index;
            if((arrayCaracteres[indiceActual]+arrayCaracteres[indiceActual+1]+arrayCaracteres[indiceActual+2]+arrayCaracteres[indiceActual+3])==='ober'){
                arrayCaracteres.splice(indiceActual+1,3);
            }
        }
        
        if(caracter === 'u'){
            const indiceActual = index;
            if((arrayCaracteres[indiceActual]+arrayCaracteres[indiceActual+1]+arrayCaracteres[indiceActual+2]+arrayCaracteres[indiceActual+3])==='ufat'){
                arrayCaracteres.splice(indiceActual+1,3);
            }
        }
        console.log(arrayCaracteres);
        return arrayCaracteres;
}

const isInvalido = (value) => {
    const newValue = value.replaceAll(' ','');
    const regexp = /[A-Z\u00C0-\u017F\d\W]/;
    let isInvalido = regexp.exec(newValue);
    return isInvalido;
}

const encriptar = () =>  {
    const valueInput = text.value;
   
    if (!valueInput) {
        containerMessage.classList.remove('inactive');
        outputText.classList.add('inactive');
        btnCopiar.classList.add('inactive');
        console.log('No ingreso un mensaje para encriptar');

    } else {
           
        if(isInvalido(valueInput)){
            containerMessage.classList.remove('inactive');
            outputText.classList.add('inactive');
            btnCopiar.classList.add('inactive');
            messageHeader.style.color = 'red';
            messageHeader.innerText = 'Solo letras minúsculas y sin acentos';
            messageDescription.innerText = 'Revisar el texto ingresado.'
            console.log('Solo minúsculas y sin acentos');

        } else{
        
        const arrayCaracteres = valueInput.split("");
        arrayCaracteres.map(algoritmo);
    
        const resultadoFinal = (newArray.toString()).replaceAll(',','');
        outputText.value = resultadoFinal;
        outputText.classList.remove('inactive');
        btnCopiar.classList.remove('inactive');
        containerMessage.classList.add('inactive');
        newArray = [];
        text.value = '';
        }
    }
}

const desencriptar = () =>  {
    const valueInput = text.value;

    if (!valueInput) {
        containerMessage.classList.remove('inactive');
        outputText.classList.add('inactive');
        btnCopiar.classList.add('inactive');

    } else {
           
        if(isInvalido(valueInput)){
            containerMessage.classList.remove('inactive');
            outputText.classList.add('inactive');
            btnCopiar.classList.add('inactive');
            messageHeader.style.color = 'red';
            messageHeader.innerText = 'Solo letras minúsculas y sin acentos';
            messageDescription.innerText = 'Revisar el texto ingresado para desencriptar.'

        } else{        
        
        const arrayCaracteres = text.value.split("");
        let newArrayCaracteres = [...text.value.split("")];

        newArrayCaracteres.map((currentValue,index,array) => algoritmoDesencriptar(currentValue,index,array=newArrayCaracteres) );

        const resultadoFinal = (newArrayCaracteres.toString()).replaceAll(',','');
        outputText.value = resultadoFinal;
        outputText.classList.remove('inactive');
        btnCopiar.classList.remove('inactive');
        containerMessage.classList.add('inactive');
        newArrayCaracteres = [];
        text.value = '';
        }
    }
}

const copy = () => {
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
    outputText.value = "";
    console.log("Texto Copiado");
}

btnEncriptar.addEventListener('click',encriptar);
btnDesencriptar.addEventListener('click',desencriptar);
btnCopiar.addEventListener('click', copy);

