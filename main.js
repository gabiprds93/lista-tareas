var tareasPredefinidas = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
];

function Tarea(title, completed)
{
    this.title = title;
    this.completed = completed;
    this.mostrar = function()
    {
        var nodoLi = document.createElement("li");
        var check = document.createElement("input");
        check.type = "checkbox";
        nodoLi.appendChild(check);
        var textnode = document.createTextNode(this.title);
        nodoLi.appendChild(textnode);
        ul.appendChild(nodoLi);
        this.editar(nodoLi, textnode);
        this.tachar(nodoLi);
    };
    
    this.editar = function(nodoLi, textnode)
    {
        nodoLi.onclick = () =>
        {
            var nodoInput = document.createElement("input");
            nodoInput.type = "text";
            nodoInput.value = textnode.nodeValue;
            if(nodoLi.lastChild.nodeType == 3)
            {
                nodoLi.appendChild(nodoInput);
                nodoLi.replaceChild(nodoInput, textnode);
                nodoLi.lastChild.focus();
            }
        };
        
        nodoLi.onchange = () =>
        {
            textnode = document.createTextNode(nodoLi.lastChild.value);
            nodoLi.replaceChild(textnode, nodoLi.lastChild);
            this.title = textnode.nodeValue;
        };
    };
    
    this.tachar = function(nodoLi)
    {
        if(this.completed == true)
        {
            nodoLi.firstChild.checked = true;
            nodoLi.style.textDecoration = "line-through";
        }
        nodoLi.firstChild.onclick = () =>
        {
            if(nodoLi.firstChild.checked)
            {
                nodoLi.style.textDecoration = "line-through";
                this.complete = true;
            }
            else
            {
                nodoLi.style.textDecoration = "none";
                this.complete = false;
            }
        }
    }
}

function ListaTareas()
{   
    this.tareas = [];
    this.inputTarea = document.getElementById("tarea");
    this.agregar = function(tarea, completo)
    {
        if(tarea == undefined)
        {
            tarea = this.inputTarea.value;   
        }
        if(completo == undefined)
        {
            completo = false;
        }
        tarea = tarea.charAt(0).toUpperCase() + tarea.slice(1);
        tarea = new Tarea(tarea, completo); 
        this.tareas.push(tarea);
        this.tareas[this.tareas.length - 1].mostrar();
        this.inputTarea.value = "";
        this.inputTarea.focus();
    }
    
    this.agregarTodo = function()
    {
        for(var i of tareasPredefinidas)
        {
            this.agregar(i.title, i.completed);
        }
    }
}

var listaTareas = new ListaTareas();
var ul = document.getElementById("listaTareas");
listaTareas.agregarTodo();