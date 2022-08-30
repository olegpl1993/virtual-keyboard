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
function keydown(e) { // нажатие клавишы клавиатуры
  console.log(e.code);
  const currentKey = document.querySelector(`.${e.code}`); // определяет нажатую клавишу
  currentKey.classList.add('active');
  console.log(currentKey);
  if (currentKey.classList.contains('akey')) { // если нажатая кнопка текстовая
    e.preventDefault();
    textArea.value += currentKey.textContent;
  }
}
function keyup(e) { // отпустил клавишу клавиатуры
  const currentKey = document.querySelector(`.${e.code}`); // определяет отпущеную клавишу
  currentKey.classList.remove('active');
}

keyboard.addEventListener('mousedown', (e) => mousedownBTN(e));
keyboard.addEventListener('mouseup', () => mouseupBTN());
keyboard.addEventListener('mouseover', (e) => mouseoverBTN(e));
keyboard.addEventListener('mouseout', () => mouseoutBTN());
document.addEventListener('keydown', (e) => keydown(e));
document.addEventListener('keyup', (e) => keyup(e));
//-------------------------------------------------------------------------------------

// кнопки клавиатуры (первая строка)----------------------------------------------------
const backquote = document.createElement('div');
backquote.classList.add('key');
backquote.classList.add('akey');
backquote.classList.add('Backquote');
backquote.textContent = '`';
row1.appendChild(backquote);

const digit1 = document.createElement('div');
digit1.classList.add('key');
digit1.classList.add('akey');
digit1.classList.add('Digit1');
digit1.textContent = '1';
row1.appendChild(digit1);

const digit2 = document.createElement('div');
digit2.classList.add('key');
digit2.classList.add('akey');
digit2.classList.add('Digit2');
digit2.textContent = '2';
row1.appendChild(digit2);

const digit3 = document.createElement('div');
digit3.classList.add('key');
digit3.classList.add('akey');
digit3.classList.add('Digit3');
digit3.textContent = '3';
row1.appendChild(digit3);

const digit4 = document.createElement('div');
digit4.classList.add('key');
digit4.classList.add('akey');
digit4.classList.add('Digit4');
digit4.textContent = '4';
row1.appendChild(digit4);

const digit5 = document.createElement('div');
digit5.classList.add('key');
digit5.classList.add('akey');
digit5.classList.add('Digit5');
digit5.textContent = '5';
row1.appendChild(digit5);

const digit6 = document.createElement('div');
digit6.classList.add('key');
digit6.classList.add('akey');
digit6.classList.add('Digit6');
digit6.textContent = '6';
row1.appendChild(digit6);

const digit7 = document.createElement('div');
digit7.classList.add('key');
digit7.classList.add('akey');
digit7.classList.add('Digit7');
digit7.textContent = '7';
row1.appendChild(digit7);

const digit8 = document.createElement('div');
digit8.classList.add('key');
digit8.classList.add('akey');
digit8.classList.add('Digit8');
digit8.textContent = '8';
row1.appendChild(digit8);

const digit9 = document.createElement('div');
digit9.classList.add('key');
digit9.classList.add('akey');
digit9.classList.add('Digit9');
digit9.textContent = '9';
row1.appendChild(digit9);

const digit0 = document.createElement('div');
digit0.classList.add('key');
digit0.classList.add('akey');
digit0.classList.add('Digit0');
digit0.textContent = '0';
row1.appendChild(digit0);

const minus = document.createElement('div');
minus.classList.add('key');
minus.classList.add('akey');
minus.classList.add('Minus');
minus.textContent = '-';
row1.appendChild(minus);

const equal = document.createElement('div');
equal.classList.add('key');
equal.classList.add('akey');
equal.classList.add('Equal');
equal.textContent = '=';
row1.appendChild(equal);

const backspace = document.createElement('div');
backspace.classList.add('key');
backspace.classList.add('fkey');
backspace.classList.add('Backspace');
backspace.textContent = 'Backspace';
row1.appendChild(backspace);

// кнопки клавиатуры (вторая строка)----------------------------------------------------

const tab = document.createElement('div');
tab.classList.add('key');
tab.classList.add('fkey');
tab.classList.add('Tab');
tab.textContent = 'Tab';
row2.appendChild(tab);

const keyQ = document.createElement('div');
keyQ.classList.add('key');
keyQ.classList.add('akey');
keyQ.classList.add('KeyQ');
keyQ.textContent = 'q';
row2.appendChild(keyQ);

const keyW = document.createElement('div');
keyW.classList.add('key');
keyW.classList.add('akey');
keyW.classList.add('KeyW');
keyW.textContent = 'w';
row2.appendChild(keyW);

const keyE = document.createElement('div');
keyE.classList.add('key');
keyE.classList.add('akey');
keyE.classList.add('KeyE');
keyE.textContent = 'e';
row2.appendChild(keyE);

const keyR = document.createElement('div');
keyR.classList.add('key');
keyR.classList.add('akey');
keyR.classList.add('KeyR');
keyR.textContent = 'r';
row2.appendChild(keyR);

const keyT = document.createElement('div');
keyT.classList.add('key');
keyT.classList.add('akey');
keyT.classList.add('KeyT');
keyT.textContent = 't';
row2.appendChild(keyT);

const keyY = document.createElement('div');
keyY.classList.add('key');
keyY.classList.add('akey');
keyY.classList.add('KeyY');
keyY.textContent = 'y';
row2.appendChild(keyY);

const keyU = document.createElement('div');
keyU.classList.add('key');
keyU.classList.add('akey');
keyU.classList.add('KeyU');
keyU.textContent = 'u';
row2.appendChild(keyU);

const keyI = document.createElement('div');
keyI.classList.add('key');
keyI.classList.add('akey');
keyI.classList.add('KeyI');
keyI.textContent = 'i';
row2.appendChild(keyI);

const keyO = document.createElement('div');
keyO.classList.add('key');
keyO.classList.add('akey');
keyO.classList.add('KeyO');
keyO.textContent = 'o';
row2.appendChild(keyO);

const keyP = document.createElement('div');
keyP.classList.add('key');
keyP.classList.add('akey');
keyP.classList.add('KeyP');
keyP.textContent = 'p';
row2.appendChild(keyP);

const bracketLeft = document.createElement('div');
bracketLeft.classList.add('key');
bracketLeft.classList.add('akey');
bracketLeft.classList.add('BracketLeft');
bracketLeft.textContent = '[';
row2.appendChild(bracketLeft);

const bracketRight = document.createElement('div');
bracketRight.classList.add('key');
bracketRight.classList.add('akey');
bracketRight.classList.add('BracketRight');
bracketRight.textContent = ']';
row2.appendChild(bracketRight);

const backslash = document.createElement('div');
backslash.classList.add('key');
backslash.classList.add('akey');
backslash.classList.add('Backslash');
backslash.textContent = '\\';
row2.appendChild(backslash);

const del = document.createElement('div');
del.classList.add('key');
del.classList.add('fkey');
del.classList.add('Delete');
del.textContent = 'Del';
row2.appendChild(del);

// кнопки клавиатуры (третья строка)------------------------------------------------

const capsLock = document.createElement('div');
capsLock.classList.add('key');
capsLock.classList.add('fkey');
capsLock.classList.add('CapsLock');
capsLock.textContent = 'CapsLock';
row3.appendChild(capsLock);

const keyA = document.createElement('div');
keyA.classList.add('key');
keyA.classList.add('akey');
keyA.classList.add('KeyA');
keyA.textContent = 'a';
row3.appendChild(keyA);

const keyS = document.createElement('div');
keyS.classList.add('key');
keyS.classList.add('akey');
keyS.classList.add('KeyS');
keyS.textContent = 's';
row3.appendChild(keyS);

const keyD = document.createElement('div');
keyD.classList.add('key');
keyD.classList.add('akey');
keyD.classList.add('KeyD');
keyD.textContent = 'd';
row3.appendChild(keyD);

const keyF = document.createElement('div');
keyF.classList.add('key');
keyF.classList.add('akey');
keyF.classList.add('KeyF');
keyF.textContent = 'f';
row3.appendChild(keyF);

const keyG = document.createElement('div');
keyG.classList.add('key');
keyG.classList.add('akey');
keyG.classList.add('KeyG');
keyG.textContent = 'g';
row3.appendChild(keyG);

const keyH = document.createElement('div');
keyH.classList.add('key');
keyH.classList.add('akey');
keyH.classList.add('KeyH');
keyH.textContent = 'h';
row3.appendChild(keyH);

const keyJ = document.createElement('div');
keyJ.classList.add('key');
keyJ.classList.add('akey');
keyJ.classList.add('KeyJ');
keyJ.textContent = 'j';
row3.appendChild(keyJ);

const keyK = document.createElement('div');
keyK.classList.add('key');
keyK.classList.add('akey');
keyK.classList.add('KeyK');
keyK.textContent = 'k';
row3.appendChild(keyK);

const keyL = document.createElement('div');
keyL.classList.add('key');
keyL.classList.add('akey');
keyL.classList.add('KeyL');
keyL.textContent = 'l';
row3.appendChild(keyL);

const semicolon = document.createElement('div');
semicolon.classList.add('key');
semicolon.classList.add('akey');
semicolon.classList.add('Semicolon');
semicolon.textContent = ';';
row3.appendChild(semicolon);

const quote = document.createElement('div');
quote.classList.add('key');
quote.classList.add('akey');
quote.classList.add('Quote');
quote.textContent = '\'';
row3.appendChild(quote);

const enter = document.createElement('div');
enter.classList.add('key');
enter.classList.add('fkey');
enter.classList.add('Enter');
enter.textContent = 'Enter';
row3.appendChild(enter);

// кнопки клавиатуры (четвертая строка)------------------------------------------------

const shiftLeft = document.createElement('div');
shiftLeft.classList.add('key');
shiftLeft.classList.add('fkey');
shiftLeft.classList.add('ShiftLeft');
shiftLeft.textContent = 'Shift';
row4.appendChild(shiftLeft);

const keyZ = document.createElement('div');
keyZ.classList.add('key');
keyZ.classList.add('akey');
keyZ.classList.add('KeyZ');
keyZ.textContent = 'z';
row4.appendChild(keyZ);

const keyX = document.createElement('div');
keyX.classList.add('key');
keyX.classList.add('akey');
keyX.classList.add('KeyX');
keyX.textContent = 'x';
row4.appendChild(keyX);

const keyC = document.createElement('div');
keyC.classList.add('key');
keyC.classList.add('akey');
keyC.classList.add('KeyC');
keyC.textContent = 'c';
row4.appendChild(keyC);

const keyV = document.createElement('div');
keyV.classList.add('key');
keyV.classList.add('akey');
keyV.classList.add('KeyV');
keyV.textContent = 'v';
row4.appendChild(keyV);

const keyB = document.createElement('div');
keyB.classList.add('key');
keyB.classList.add('akey');
keyB.classList.add('KeyB');
keyB.textContent = 'b';
row4.appendChild(keyB);

const keyN = document.createElement('div');
keyN.classList.add('key');
keyN.classList.add('akey');
keyN.classList.add('KeyN');
keyN.textContent = 'n';
row4.appendChild(keyN);

const keyM = document.createElement('div');
keyM.classList.add('key');
keyM.classList.add('akey');
keyM.classList.add('KeyM');
keyM.textContent = 'm';
row4.appendChild(keyM);

const comma = document.createElement('div');
comma.classList.add('key');
comma.classList.add('akey');
comma.classList.add('Comma');
comma.textContent = ',';
row4.appendChild(comma);

const period = document.createElement('div');
period.classList.add('key');
period.classList.add('akey');
period.classList.add('Period');
period.textContent = '.';
row4.appendChild(period);

const slash = document.createElement('div');
slash.classList.add('key');
slash.classList.add('akey');
slash.classList.add('Slash');
slash.textContent = '/';
row4.appendChild(slash);

const arrowUp = document.createElement('div');
arrowUp.classList.add('key');
arrowUp.classList.add('fkey');
arrowUp.classList.add('ArrowUp');
arrowUp.textContent = '🡅';
row4.appendChild(arrowUp);

const shiftRight = document.createElement('div');
shiftRight.classList.add('key');
shiftRight.classList.add('fkey');
shiftRight.classList.add('ShiftRight');
shiftRight.textContent = 'Shift';
row4.appendChild(shiftRight);

// кнопки клавиатуры (пятая строка)----------------------------------------------------

const controlLeft = document.createElement('div');
controlLeft.classList.add('key');
controlLeft.classList.add('fkey');
controlLeft.classList.add('ControlLeft');
controlLeft.textContent = 'Ctrl';
row5.appendChild(controlLeft);

const metaLeft = document.createElement('div');
metaLeft.classList.add('key');
metaLeft.classList.add('fkey');
metaLeft.classList.add('MetaLeft');
metaLeft.textContent = 'Win';
row5.appendChild(metaLeft);

const altLeft = document.createElement('div');
altLeft.classList.add('key');
altLeft.classList.add('fkey');
altLeft.classList.add('AltLeft');
altLeft.textContent = 'Alt';
row5.appendChild(altLeft);

const space = document.createElement('div');
space.classList.add('key');
space.classList.add('akey');
space.classList.add('Space');
space.textContent = ' ';
row5.appendChild(space);

const altRight = document.createElement('div');
altRight.classList.add('key');
altRight.classList.add('fkey');
altRight.classList.add('AltRight');
altRight.textContent = 'Alt';
row5.appendChild(altRight);

const arrowLeft = document.createElement('div');
arrowLeft.classList.add('key');
arrowLeft.classList.add('fkey');
arrowLeft.classList.add('ArrowLeft');
arrowLeft.textContent = '🡄';
row5.appendChild(arrowLeft);

const arrowDown = document.createElement('div');
arrowDown.classList.add('key');
arrowDown.classList.add('fkey');
arrowDown.classList.add('ArrowDown');
arrowDown.textContent = '🡇';
row5.appendChild(arrowDown);

const arrowRight = document.createElement('div');
arrowRight.classList.add('key');
arrowRight.classList.add('fkey');
arrowRight.classList.add('ArrowRight');
arrowRight.textContent = '🡆';
row5.appendChild(arrowRight);

const controlRight = document.createElement('div');
controlRight.classList.add('key');
controlRight.classList.add('fkey');
controlRight.classList.add('ControlRight');
controlRight.textContent = 'Ctrl';
row5.appendChild(controlRight);
