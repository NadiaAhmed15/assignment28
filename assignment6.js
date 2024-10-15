let counter = 0;

function increase() {
    counter++;
    document.getElementById('counterValue').textContent = counter;
}

function decrease() {
 
        counter--;
        document.getElementById('counterValue').textContent = counter;
    
}