# 🧮 Calculadora Web

Uma calculadora web moderna e responsiva com tema claro/escuro, desenvolvida com HTML, CSS e JavaScript vanilla.

## 🎯 Funcionalidades

- ✅ **Operações básicas**: Adição, subtração, multiplicação e divisão
- ✅ **Números decimais**: Suporte a ponto decimal
- ✅ **Botão DEL**: Remove o último caractere digitado
- ✅ **Botão Clear (C)**: Limpa completamente a calculadora
- ✅ **Tema claro/escuro**: Alternância entre temas com persistência
- ✅ **Suporte ao teclado**: Use o teclado para operar a calculadora
- ✅ **Layout responsivo**: Design adaptável e moderno
- ✅ **Prevenção de erros**: Evita divisão por zero e outros erros comuns

## 🚀 Demonstração


### Tema Escuro (Padrão)
- Fundo roxo escuro
- Botões com transparência
- Visual moderno e elegante

![Captura de tela de 2025-07-08 16-26-28](https://github.com/user-attachments/assets/a11ad093-5448-4148-8bce-8c0b67f278d8)

### Tema Claro
- Fundo branco limpo
- Botões com cores contrastantes
- Interface clara e profissional

![Captura de tela de 2025-07-08 16-26-50](https://github.com/user-attachments/assets/80ded0e5-4c62-42f3-9c8d-e2701a14d954)


## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e layout Grid
- **JavaScript**: Lógica e funcionalidades
- **Google Fonts**: Fonte Poppins
- **Material Icons**: Ícone do tema

## 📁 Estrutura do Projeto

```
calculadora/
├── index.html
├── src/
│   ├── styles/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## 🎮 Como Usar

### Mouse
1. Clique nos números para inserir valores
2. Clique nos operadores (+, -, x, /) para operações
3. Clique em "=" para calcular o resultado
4. Use "DEL" para apagar o último caractere
5. Use "C" para limpar completamente
6. Clique no ícone ☀️ para alternar entre temas

### Teclado
- **Números (0-9)**: Inserir dígitos
- **Operadores (+, -, *, /)**: Operações matemáticas
- **Enter ou =**: Calcular resultado
- **Backspace**: Funciona como DEL
- **Escape**: Funciona como Clear
- **.**: Inserir ponto decimal

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/RICX-FN/Calculadora.git
```

2. Navegue até o diretório:
```bash
cd calculadora
```

3. Abra o arquivo `index.html` no seu navegador preferido

## 🎨 Personalização

### Cores do Tema Escuro
```css
.calc {
    background-color: rgb(25, 5, 63); /* Fundo principal */
}

.number-button {
    background-color: rgba(255, 255, 255, 0.527); /* Botões numéricos */
}

.operator-button {
    background-color: rgba(57, 2, 255, 0.527); /* Botões de operação */
}
```

### Cores do Tema Claro
```css
/* Aplicado via JavaScript */
background-color: #ffffff; /* Fundo principal */
background-color: #e8e8e8; /* Botões numéricos */
background-color: #007bff; /* Botões de operação */
```

## 🔄 Funcionalidades Técnicas

- **Persistência de tema**: Salva a preferência no localStorage
- **Validação de entrada**: Previne erros de digitação
- **Operações sequenciais**: Permite cálculos em cadeia
- **Tratamento de erros**: Alerta para divisão por zero
- **Reset inteligente**: Limpa o display após operações

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Ricardo Bernardo**
- GitHub: https://github.com/RICX-FN
- LinkedIn: https://www.linkedin.com/in/ricardo-bernardo-024a58301/

## 🙏 Agradecimentos

- [Google Fonts](https://fonts.google.com/) pela fonte Poppins
- [Material Icons](https://fonts.google.com/icons) pelos ícones
- Comunidade dev pela inspiração

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
