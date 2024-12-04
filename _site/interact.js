window.addEventListener('DOMContentLoaded', init, false);

function init() {

    //This is for button growth on mouse over in nav bar
    var buttons = document.querySelectorAll('.button');
    //var buttons = document.getElementsByClassName('button'); rcc: This should work, but I could not get it to work with it!
    var logo = document.querySelector('#logoContainer');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.2s';
        });

        button.addEventListener('mouseout', function () {
            button.style.transform = 'scale(1)';
        });
    });
    logo.addEventListener('mouseover', function () {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = 'transform 0.2s';
    });
    logo.addEventListener('mouseout', function () {
        logo.style.transform = 'scale(1)';
    });

    //This is for spoiler tags on about page
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
    function toggle() {
        var id = this.id;
        switch (id) {
            case "PLAYToggle": {
                var playSpoilers = document.getElementsByClassName('playSpoiler');
                for (var j = 0; j < playSpoilers.length; j++) {
                    playSpoilers[j].classList.toggle("on");
                };
                break;
            }
            case "WATCHToggle": {
                var watchSpoilers = document.getElementsByClassName('watchSpoiler');
                for (var j = 0; j < watchSpoilers.length; j++) {
                    watchSpoilers[j].classList.toggle("on");
                };
            };
                break;
            case "READToggle": {
                var readSpoilers = document.getElementsByClassName('readSpoiler');
                for (var j = 0; j < readSpoilers.length; j++) {
                    readSpoilers[j].classList.toggle("on");
                };
            };
                break;
            case "SPIDER": {
                var spider = document.getElementById('spider');
                if (this.checked) {
                    spider.classList.add("on");
                } else {
                    spider.classList.remove("on");
                }
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('bg-toggle');

    // Load the saved state from localStorage
    const isPlainBackground = localStorage.getItem('usePlainBackground') === 'true';
    if (isPlainBackground) {
        document.body.classList.add('plain-background');
        checkbox.checked = true;
    }

    // Toggle background on checkbox change
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.body.classList.add('plain-background');
            localStorage.setItem('usePlainBackground', 'true');
        } else {
            document.body.classList.remove('plain-background');
            localStorage.setItem('usePlainBackground', 'false');
        }
    });
});