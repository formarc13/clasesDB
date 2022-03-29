function dividir (a, b) {
    if((a && b) == 0){
        return "No se puede dividir por cero";
    } else{
        return a / b;
    };
};

/*   true 0     1 false
if (n1 == 0 && n2 == 0) { 
    return "no se puede dividir por cero"
}

if (n1 == 0 || n2 == 0){
    return 'no se puede dividir entre cero'
} else { 
          return ((n1) / (n2));
}

if(num1 != 0 && num2 != 0){
        return num1 / num2;
    } else {
        return "No se puede dividir por cero";
    }
}

if((a && b) == 0){
        return "No se puede dividir por cero";
    } else{
    return a / b;
    }
*/

module.exports = dividir;