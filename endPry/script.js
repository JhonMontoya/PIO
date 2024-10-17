let hasResult = false; 

function appendToResult(value) {
    const resultField = document.getElementById("resultado");
    
    if (hasResult) {
        resultField.value = ''; 
        hasResult = false;
    }
    
    resultField.value += value;
}

function clearResult() {
    document.getElementById("resultado").value = '';
    hasResult = true;
}

function calculateResult() {
    const resultField = document.getElementById("resultado");
    try {
        resultField.value = eval(resultField.value);
        hasResult = true; 
    } catch (error) {
        resultField.value = 'Error';
        hasResult = false; 
    }
}