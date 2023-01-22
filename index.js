const inputANode = document.querySelector('.number-a');
const inputBNode = document.querySelector('.number-b');
const OperationNode = document.querySelector('.selectOperation');
const btnResultNode = document.querySelector('.result');
const outputNode = document.querySelector('.output');


btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = OperationNode.value;

    const result = calculate ({
        a,
        b,
        operation,
        
    });
    
    outputNode.innerHTML = result;

})

