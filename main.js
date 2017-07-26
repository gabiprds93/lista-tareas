function Tarea(title)
{
    this.title = title;
    this.completed = false;
    this.mostrar = function()
    {
        var nodoLi = document.createElement("li");
        var textnode = document.createTextNode(this.title);
        nodoLi.appendChild(textnode);
        ul.appendChild(nodoLi);
        this.seleccionar(nodoLi, textnode);
    }
    
    this.seleccionar = function(nodoLi, textnode)
    {
        var nodoInput = document.createElement("input");
        nodoInput.type = "text";
        nodoInput.value = textnode.nodeValue;
        //var textnode1 = document.createTextNode("fdsfd");
        //var nodoLi2 = document.createElement("li");
        nodoLi.onclick = function()
        {
            //if(nodoLi.childElementCount == 0)
            //var nodoLi2 = document.createElement("li");
            //{
            nodoLi.appendChild(nodoInput);
            //nodoLi.appendChild(textnode);
            //ul.appendChild(nodoLi);
            nodoLi.replaceChild(nodoInput, textnode);
            nodoLi.firstChild.focus();
        //}
            //nodoLi2.firstChild.style.backgroundColor = "#ffd1a3";
        };
        nodoLi.onchange = function()
        {
            textnode = document.createTextNode(nodoLi.firstChild.value);
            nodoLi.replaceChild(textnode, nodoLi.firstChild);
            //ul.appendChild(nodoLi);
            //ul.replaceChild(nodoLi, nodoLi2);
            //nodoLi2.firstChild.style.backgroundColor = "#ffd1a3";
        };
    }
}

function ListaTareas()
{
    this.tareasPredefinidas = [
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
    this.tareas = [];
    this.inputTarea = document.getElementById("tarea");
    this.seleccion = undefined;
    this.agregar = function(tarea)
    {
        if(tarea == undefined)
        {
            tarea = this.inputTarea.value;   
        }
        tarea = tarea.charAt(0).toUpperCase() + tarea.slice(1);
        tarea = new Tarea(tarea); 
        this.tareas.push(tarea);
        this.tareas[this.tareas.length - 1].mostrar();
        this.inputTarea.value = "";
        this.inputTarea.focus();
    }
    
    this.agregarTodo = function()
    {
        for(var i of this.tareasPredefinidas)
        {
            this.agregar(i.title);
        }
    }
}

var listaTareas = new ListaTareas();
var ul = document.getElementById("listaTareas");
listaTareas.agregarTodo();