(function () {
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
        operatorType = '',
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
    equBtn.addEventListener('click', result);

    function result() {
        if (operatorType) {
            arithmeticOperation(operatorType);
        }
        flagChange();
        firstNum = 0;
        operatorType = '';
    }

    function clearDisplay() {
        display.value = 0;
        operatorFlag = false;
        firstNum = 0;
    }
    function addOperation() {
        operatorType = 'add';
        arithmeticOperation(operatorType);
        flagChange();
    }

    function substractOperation() {
        operatorType = 'sub';
        arithmeticOperation(operatorType);
        flagChange();
    }

    function divisionOperation() {
        operatorType = 'div';
        arithmeticOperation(operatorType);
        flagChange();
    }

    function multiplicationOperation() {
        operatorType = 'mul';
        arithmeticOperation(operatorType);
        flagChange();
    }

    function flagChange() {
        operatorFlag = true ? true : false;
    }

    function arithmeticOperation(opr) {
        if (firstNum) {
            firstNum = opr === 'add' ? parseInt(firstNum) + parseInt(display.value) :
                (opr === 'sub' ? parseInt(firstNum) - parseInt(display.value) :
                    (opr === 'mul' ? parseInt(firstNum) * parseInt(display.value) :
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
}());
