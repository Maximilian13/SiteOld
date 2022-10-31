function handleFile(task,file_name, elem) {
    if (file_name.substring(file_name.length-3, file_name.length) != ".py") {
        elem.innerHTML = "Вы пытаетесь загрузить файл не с расширением .py!"
        task.value = '';
    } else {
        elem.innerHTML = "Файл загружен - " + file_name
    }
}

tasks = []
ps = []

for (let i = 1; i < 11; i++) {
    tasks[i] = document.querySelector("#input__file" + i)
    ps[i] = document.querySelector("#file-name" + i)
    tasks[i].addEventListener("change", () => {handleFile(tasks[i], tasks[i].files[0].name, ps[i])}, false);
}

document.querySelector("#result").onclick = () => {
    let user_name = document.querySelector("#POST-name")
    let user_email = document.querySelector("#POST-email")
    let error_mes = document.querySelector("#error-mes")
    error_mes.innerHTML = ""
    console.log(user_name.value)
    if (user_name.value == "") {
        error_mes.innerHTML += "Вы забыли ввести имя!\n"
    }
    if (user_email.value == "") {
        error_mes.innerHTML += "Вы забыли ввести почту!\n"
    }

    for (let i = 1; i < 11; i++) {
        if (tasks[i].value != '') {
            console.log(i + " task - " + tasks[i].files[0].name)
        }
    }
}







