let input = document.getElementById("inp")
let btn = document .getElementById("button")
let boxes = document.querySelectorAll(".box")
let drag = null;
btn.onclick = function () {
    if (input.value != '') {
        boxes[0].innerHTML+=`<p class="item" draggable="true">${input.value}</p>`
        input.value='';
    }
    dragItem();
}
function dragItem() {
    let items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.addEventListener('dragstart',function () {
            drag = item;
            item.style.opacity = ".5" 
        })

        item.addEventListener('dragend',function() {
            drag = null;
            item.style.opacity='1';
        })

        boxes.forEach(box => {
            box.addEventListener('dragover',function (e) {
                e.preventDefault();
                box.style.background = 'blue'
                box.style.color = 'white'
            })

            box.addEventListener('dragleave',function () {
                box.style.background = 'white'
                box.style.color = 'black'
            })
            box.addEventListener('drop',function () {
                box.append(drag);
                box.style.background = 'white'
                box.style.color = 'black'
            })
        });
    });
}