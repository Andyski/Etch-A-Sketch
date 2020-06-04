const container = document.querySelector('#container');

    function createGrid(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-columns', cols);

        for(i = 0; i <=(rows * cols); i++) {
            const gridBox = document.createElement('div');
            container.appendChild(gridBox).classList.add('gridBox');
        }
    }

    createGrid(16,16);

    function changeColour(e) {
            e.target.style.backgroundColor = 'black';
        }

    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach(gridBox => gridBox.addEventListener('mouseover', changeColour));

    var size = document.getElementById("gridSize");
    size.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
        changeSize(e);
        }
    });

    function changeSize() {
        size = document.getElementById('gridSize').value;
        if (size == "") { 
            size = 16;
            const grids = document.getElementsByClassName('gridBox');
            while (grids.length > 0) grids[0].remove();
            createGrid(size, size);
            const box = document.querySelectorAll('.gridBox');
            box.forEach(gridBox => gridBox.addEventListener('mouseover', changeColour));
            var size = document.getElementById("gridSize");
            size.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                changeSize(e);
                }
            });
        } 
        else if (size > 100) { 
           alert("Your grid size is too large, try 100 or below")
        } 
        else {
            const grids = document.getElementsByClassName('gridBox');
            while (grids.length > 0) grids[0].remove();
            createGrid(size, size);
            const box = document.querySelectorAll('.gridBox');
            box.forEach(gridBox => gridBox.addEventListener('mouseover', changeColour));
            var size = document.getElementById("gridSize");
            size.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                changeSize(e);
                }
            });
        }
    }
