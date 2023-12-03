var one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    four = document.getElementById('four'),
    five = document.getElementById('five'),
    six = document.getElementById('six'),
    seven = document.getElementById('seven'),
    eight = document.getElementById('eight'),
    nine = document.getElementById('nine'),
    zero = document.getElementById('zero'),
    point = document.getElementById('point'),
    addBtn = document.getElementById('addBtn'),
    subBtn = document.getElementById('subBtn'),
    mulBtn = document.getElementById('mulBtn'),
    divBtn = document.getElementById('divBtn'),
    equBtn = document.getElementById('equBtn'),
    clearnBtn = document.getElementById('clearBtn'),
    display = document.getElementById('result'),
    numArray = document.querySelectorAll('.number'),
    operatorFlag = false,
    firstNum = 0;

numArray.forEach(function (num) {
    num.addEventListener('click', function initalClick(event) {
        numberClick(event.target.value);
    });
});

addBtn.addEventListener('click', addOperation);
subBtn.addEventListener('click', substractOperation);
divBtn.addEventListener('click', divisionOperation);
mulBtn.addEventListener('click', multiplicationOperation);
clearnBtn.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.value = 0;
    operatorFlag = false;
    firstNum = 0;
}
function addOperation() {
    arithmeticOperation('add');
    flagChange();
}

function substractOperation() {
    console.log('sub')
    arithmeticOperation('sub');
    flagChange();
}

function divisionOperation() {
    arithmeticOperation('div');
    flagChange();
}

function multiplicationOperation() {
    arithmeticOperation('mul');
    flagChange();
}

function flagChange() {
    operatorFlag = true ? true : false;
}

function arithmeticOperation(opr) {
    if (firstNum) {
        firstNum = opr === 'add' ? parseInt(firstNum) + parseInt(display.value) :
            (opr === 'sub' ? parseInt(firstNum) - parseInt(display.value) :
                (opr === 'div' ? parseInt(firstNum) * parseInt(display.value) :
                    parseInt(firstNum) / parseInt(display.value)));
        display.value = parseInt(firstNum);
    } else {
        firstNum = display.value;
    }
}

function numberClick(num) {
    if (operatorFlag) {
        display.value = 0;
        display.value = num;
        operatorFlag = false;
    } else {
        if (display.value == 0) {
            if (num == 0) {
                display.value = 0;
            } else {
                display.value = num;
            }
        } else {
            display.value = display.value + num;
        }
    }
}

(function () {
    // alert('hi');
    // console.log('yes');
}());
