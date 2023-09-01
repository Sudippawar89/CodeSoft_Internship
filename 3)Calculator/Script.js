document.addEventListener('DOMContentLoaded', function () {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            
            if (buttonText === '=') {
                try {
                    resultInput.value = eval(resultInput.value);
                } catch (error) {
                    resultInput.value = 'Error';
                }
            } else if (buttonText === 'C') {
                resultInput.value = '';
            } else {
                resultInput.value += buttonText;
            }
        });
    });
});
