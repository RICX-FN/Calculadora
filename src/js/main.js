// Seleção dos elementos
const resultDisplay = document.querySelector('.result');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const deleteButton = document.getElementById('del');
const clearButton = document.getElementById('clear');
const themeButton = document.querySelector('.theme-btn');

// Variáveis para controle
let currentInput = '0';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

// Função para atualizar o display
function updateDisplay() {
    resultDisplay.textContent = currentInput;
}

// Função para limpar a calculadora
function clear() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
    updateDisplay();
}

// Função para deletar o último caractere
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Função para adicionar número
function addNumber(number) {
    if (shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

// Função para adicionar ponto decimal
function addDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Função para operações
function setOperation(op) {
    if (operator && !shouldResetDisplay) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}

// Função para calcular
function calculate() {
    if (!operator || shouldResetDisplay) return;
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    let result;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Erro: Divisão por zero!');
                clear();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

// Event listeners para números
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        addNumber(button.textContent);
    });
});

// Event listeners para operadores
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const op = button.textContent;
        
        if (op === '=') {
            calculate();
        } else if (op === '.') {
            addDecimal();
        } else {
            setOperation(op);
        }
    });
});

// Event listener para deletar
deleteButton.addEventListener('click', deleteLast);

// Event listener para limpar (Clear)
clearButton.addEventListener('click', clear);

// Event listener para tema
themeButton.addEventListener('click', () => {
    const calc = document.querySelector('.calc');
    const numberButtons = document.querySelectorAll('.number-button');
    const operatorButtons = document.querySelectorAll('.operator-button');
    const result = document.querySelector('.result');
    const delButton = document.getElementById('del');
    const clearButton = document.getElementById('clear');
    const themeBtn = document.querySelector('.theme-btn');
    
    // Verificar se está no tema claro
    const isLightTheme = calc.classList.contains('light-theme');
    
    if (isLightTheme) {
        // Mudar para tema escuro
        calc.classList.remove('light-theme');
        calc.style.backgroundColor = 'rgb(25, 5, 63)';
        result.style.color = 'white';
        delButton.style.color = 'white';
        clearButton.style.color = '#ff6b6b';
        themeBtn.style.color = 'white';
        
        numberButtons.forEach(btn => {
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.527)';
            btn.style.color = 'white';
        });
        
        operatorButtons.forEach(btn => {
            btn.style.backgroundColor = 'rgba(57, 2, 255, 0.527)';
            btn.style.color = 'white';
        });
        
        localStorage.setItem('theme', 'dark');
    } else {
        // Mudar para tema claro
        calc.classList.add('light-theme');
        calc.style.backgroundColor = '#ffffff';
        result.style.color = '#000000';
        delButton.style.color = '#333333';
        clearButton.style.color = '#ff4757';
        themeBtn.style.color = '#333333';
        
        numberButtons.forEach(btn => {
            btn.style.backgroundColor = '#e8e8e8';
            btn.style.color = '#333333';
        });
        
        operatorButtons.forEach(btn => {
            btn.style.backgroundColor = '#007bff';
            btn.style.color = 'white';
        });
        
        localStorage.setItem('theme', 'light');
    }
});

// Carregar tema salvo ao inicializar
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        // Aplicar tema claro
        const calc = document.querySelector('.calc');
        const numberButtons = document.querySelectorAll('.number-button');
        const operatorButtons = document.querySelectorAll('.operator-button');
        const result = document.querySelector('.result');
        const delButton = document.getElementById('del');
        const clearButton = document.getElementById('clear');
        const themeBtn = document.querySelector('.theme-btn');
        
        calc.classList.add('light-theme');
        calc.style.backgroundColor = '#ffffff';
        result.style.color = '#000000';
        delButton.style.color = '#333333';
        clearButton.style.color = '#ff4757';
        themeBtn.style.color = '#333333';
        
        numberButtons.forEach(btn => {
            btn.style.backgroundColor = '#e8e8e8';
            btn.style.color = '#333333';
        });
        
        operatorButtons.forEach(btn => {
            btn.style.backgroundColor = '#007bff';
            btn.style.color = 'white';
        });
    }
}

// Carregar tema ao inicializar a página
loadTheme();

// Suporte para teclado
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        addNumber(e.key);
    } else if (e.key === '.') {
        addDecimal();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        const op = e.key === '*' ? 'x' : e.key;
        setOperation(op);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clear();
    }
});

// Inicializar
loadTheme();
updateDisplay();