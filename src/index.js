import './styles/index.scss';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const body = document.querySelector('body');
body.appendChild(wrapper);

const upperText = document.createElement('div');
upperText.classList.add('upperText');
upperText.textContent = 'Виртуальная клавиатура';
wrapper.appendChild(upperText);

const textArea = document.createElement('textArea');
textArea.classList.add('textArea');
wrapper.appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

const buttomText = document.createElement('div');
buttomText.classList.add('buttomText');
buttomText.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p>';
wrapper.appendChild(buttomText);

const row1 = document.createElement('div');
row1.classList.add('row');
keyboard.appendChild(row1);

const row2 = document.createElement('div');
row2.classList.add('row');
keyboard.appendChild(row2);

const row3 = document.createElement('div');
row3.classList.add('row');
keyboard.appendChild(row3);

const row4 = document.createElement('div');
row4.classList.add('row');
keyboard.appendChild(row4);

const row5 = document.createElement('div');
row5.classList.add('row');
keyboard.appendChild(row5);

const key = document.createElement('div');
key.classList.add('key');
key.textContent = '`';
row1.appendChild(key);
