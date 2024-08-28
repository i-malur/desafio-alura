document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('output-text').textContent = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('output-text').textContent = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText);
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').textContent = 'Nenhuma mensagem encontrada';
});

