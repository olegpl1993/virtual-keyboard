import './styles/index.scss';

// верстка приложения ---------------------------------------------------------
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
// ------------------------------------------------------------------------------------

// функции клавиатуры -----------------------------------------------------------------
function mouseupBTN() { // отпустил ЛКМ
  const allKey = document.querySelectorAll('.key');
  allKey.forEach((el) => {
    el.classList.remove('active');
  });
}
function mousedownBTN(e) { // нажал ЛКМ
  if (e.target.classList.contains('key')) { // нажатие на клавишу
    e.target.classList.add('active');
  }
  if (e.target.classList.contains('akey')) { // нажатие на текстовую клавишу
    textArea.value += e.target.textContent;
  }
}
function mouseoutBTN() { // убрал курсор
  const allKey = document.querySelectorAll('.key');
  allKey.forEach((el) => {
    el.classList.remove('over');
  });
}
function mouseoverBTN(e) { // навел курсор
  if (e.target.classList.contains('key')) {
    e.target.classList.add('over');
  }
}

keyboard.addEventListener('mousedown', (e) => mousedownBTN(e));
keyboard.addEventListener('mouseup', () => mouseupBTN());
keyboard.addEventListener('mouseover', (e) => mouseoverBTN(e));
keyboard.addEventListener('mouseout', () => mouseoutBTN());
//-------------------------------------------------------------------------------------

// кнопки клавиатуры (первая строка)----------------------------------------------------
const backquote = document.createElement('div');
backquote.classList.add('key');
backquote.classList.add('akey');
backquote.textContent = '`';
row1.appendChild(backquote);

const digit1 = document.createElement('div');
digit1.classList.add('key');
digit1.classList.add('akey');
digit1.textContent = '1';
row1.appendChild(digit1);

const digit2 = document.createElement('div');
digit2.classList.add('key');
digit2.classList.add('akey');
digit2.textContent = '2';
row1.appendChild(digit2);

const digit3 = document.createElement('div');
digit3.classList.add('key');
digit3.classList.add('akey');
digit3.textContent = '3';
row1.appendChild(digit3);

const digit4 = document.createElement('div');
digit4.classList.add('key');
digit4.classList.add('akey');
digit4.textContent = '4';
row1.appendChild(digit4);

const digit5 = document.createElement('div');
digit5.classList.add('key');
digit5.classList.add('akey');
digit5.textContent = '5';
row1.appendChild(digit5);

const digit6 = document.createElement('div');
digit6.classList.add('key');
digit6.classList.add('akey');
digit6.textContent = '6';
row1.appendChild(digit6);

const digit7 = document.createElement('div');
digit7.classList.add('key');
digit7.classList.add('akey');
digit7.textContent = '7';
row1.appendChild(digit7);

const digit8 = document.createElement('div');
digit8.classList.add('key');
digit8.classList.add('akey');
digit8.textContent = '8';
row1.appendChild(digit8);

const digit9 = document.createElement('div');
digit9.classList.add('key');
digit9.classList.add('akey');
digit9.textContent = '9';
row1.appendChild(digit9);

const digit0 = document.createElement('div');
digit0.classList.add('key');
digit0.classList.add('akey');
digit0.textContent = '0';
row1.appendChild(digit0);

const minus = document.createElement('div');
minus.classList.add('key');
minus.classList.add('akey');
minus.textContent = '-';
row1.appendChild(minus);

const equal = document.createElement('div');
equal.classList.add('key');
equal.classList.add('akey');
equal.textContent = '=';
row1.appendChild(equal);

const backspace = document.createElement('div');
backspace.classList.add('key');
backspace.classList.add('fkey');
backspace.classList.add('backspace');
backspace.textContent = 'Backspace';
row1.appendChild(backspace);

// кнопки клавиатуры (вторая строка)----------------------------------------------------
