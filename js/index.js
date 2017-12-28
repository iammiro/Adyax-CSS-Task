'use strict';

;(function (document, window, index) {
    var inputs = document.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            fileNameSpan = document.getElementById('choose-file'),
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            } else {
                fileName = e.target.value.split('\\').pop();
            }
            if (fileName) {
                fileNameSpan.innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });

        // Firefox bug fix
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));