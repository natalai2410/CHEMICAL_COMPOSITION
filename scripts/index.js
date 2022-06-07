const addLineBtn = document.querySelector('.chemical-composition__line-primary-default-btn');
const acceptBtn = document.querySelector('.chemical-composition__primary-default-btn');


const template = document.querySelector('.template');
const listContainer = document.querySelector('.table__content');

function addNewLine() {
    listContainer.append(createNewRecord("name", "value") );
}

function checkEmpty()
{
    const elements  = Array.from(document.querySelectorAll('.table__item'));
    if (elements.length > 45) {
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

    newName.textContent = name;
    newValue.textContent = value;

    checkEmpty();

    return newLine;
}
