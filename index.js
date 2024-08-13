function gerarChunks() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    result.textContent = criarChunks(parseInt(input));
}

function criarChunks(n) {
    
    if (n <= 0) return '';

    
    return (n === 1 ? 'chunk' : criarChunks(n - 1) + '-chunk');
}