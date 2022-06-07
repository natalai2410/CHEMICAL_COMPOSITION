const addLineBtn = document.querySelector('.chemical-composition__line-primary-default-btn');
const acceptBtn = document.querySelector('.chemical-composition__primary-default-btn');


const template = document.querySelector('.template');
const listContainer = document.querySelector('.table__content');

function addNewLine() {

    listContainer.append(createNewRecord("name", "value") );
}

function removeLine(event) {
 const element = event.target.closest('.table__item');
    element.remove();
    checkEmpty();
}

function loadComponent() {
    //представили как массив все кнопки
    const elements  = Array.from(document.querySelectorAll('.table__cross-btn'));
    elements.forEach(function (item) {
        console.log(item);
       item.addEventListener('click', removeLine);
    });
}

function checkEmpty()
{
    const elements  = Array.from(document.querySelectorAll('.table__item'));
    if (elements.length < 2) {
        acceptBtn.classList.toggle('chemical-composition__primary-default-btn_disabled');
        acceptBtn.disabled = true;
    }
}


addLineBtn.addEventListener('click', addNewLine);

function createNewRecord(name, value) {

    const newLine = template.content.cloneNode(true);
    //получаем элемент temlate по id
    const newName = newLine.getElementById('line-name');
    const newValue = newLine.getElementById('line-value');

    //const newRemoveBtn = newLine.querySelector('.table__cross-btn');
    //newRemoveBtn.addEventListener('click', removeLine);

    newName.textContent = name;
    newValue.textContent = value;
    checkEmpty();

    return newLine;
}

loadComponent();