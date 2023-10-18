var countList = 0;
document.querySelector('#save').onclick = function() {
    if (document.querySelector('#input').value.length == 0) {
        alert('Input tidak boleh kosong');
    } else {
        var toDoList = document.getElementById('toDoList');
        toDoList.removeAttribute("style");
        toDoList.setAttribute("style", "display: true");
        var inputValue = document.querySelector("#input").value;
        var taskList = document.querySelector('#task');

        var newTaskHTML = `
            <div class="columns" id="task-${countList}">
                <div class="column is-four-fifths">
                    <div class="control">
                        <input class="input" type="text" disabled value="${inputValue}" id="text-${countList}">
                    </div>
                </div>
                <div class="column button-action" id="hidden-${countList}" style="display: none;">
                    <a href="#" id="btn-${countList}" class="card-footer-item" onclick="functionNewSave(${countList})">
                    <i class="fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
                    </a>
                </div>
                <div class="column button-action" id="reguler-check-${countList}">
                    <a href="#" class="card-footer-item" id="done" onclick="functionChecklist('text-${countList}')">
                        <i class="fa-solid fa-check"></i>
                    </a>
                </div>
                <div class="column button-action" id="reguler-edit-${countList}">
                      <a id="edit" href="#" class="card-footer-item" onclick="functionEditList(${countList})">
                      <i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i>
                      </a>
                </div>
                <div class="column button-action" id="reguler-trash-${countList}">
                    <a id="trash" href="#" class="card-footer-item" onclick="functionDelete('task-${countList}')">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </div>
            </div>
        `;
        countList += 1;
        taskList.innerHTML += newTaskHTML;
    }
}

function functionDelete(id) {
    const element = document.getElementById(id);
    element.remove();
}

function functionChecklist(id) {
    const element = document.getElementById(id);
    element.style.textDecoration = "line-through";
    element.setAttribute
}

function functionEditList(id) {
    var edit = document.getElementById(`reguler-edit-${id}`)
    var check = document.getElementById(`reguler-check-${id}`)
    var trash = document.getElementById(`reguler-trash-${id}`)
    var valueEdit = document.getElementById(`text-${id}`);
    var buttonSave = document.getElementById(`hidden-${id}`)
    valueEdit.disabled = false;
    buttonSave.setAttribute("style", "display: ");
    edit.setAttribute("style", "display: none;");
    check.setAttribute("style", "display: none;");
    trash.setAttribute("style", "display: none;");
}

function functionNewSave(id) {
    var edit = document.getElementById(`reguler-edit-${id}`)
    var check = document.getElementById(`reguler-check-${id}`)
    var trash = document.getElementById(`reguler-trash-${id}`)
    var newvalue = document.getElementById(`text-${id}`).value;
    var oldvalue = document.getElementById(`text-${id}`);
    var buttonSave = document.getElementById(`hidden-${id}`)
    oldvalue.setAttribute("value", newvalue)
    oldvalue.disabled = true;
    buttonSave.setAttribute("style", "display: none");
    edit.setAttribute("style", "display: true;");
    check.setAttribute("style", "display: true;");
    trash.setAttribute("style", "display: true;");
}