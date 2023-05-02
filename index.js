var screen = document.querySelector('#screen');
var button = document.querySelectorAll('.button');

    // Turning the multiplication button and the division button into something the computer understands. 
    for (item of button) {
        item.addEventListener('click', (e) => {
          btntext = e.target.innerText;

            if (btntext == '×') {
              btntext = '*';
            }

            if (btntext == '÷') {
              btntext = '/';
            }

            screen.value += btntext;
        });
    }

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        document.querySelector('#eval').click();
      }
    });

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function e() {
      screen.value = Math.pow(Math.E, screen.value);
  }

    function thirdPow() {
      screen.value = Math.pow(screen.value, 3);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function cubert() {
      screen.value = Math.cbrt(screen.value, 3);
    }

    function log() {
      screen.value = Math.log(screen.value);
  }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

