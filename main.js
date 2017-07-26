function Tarea(title)
{
    this.title = title;
    this.completed = false;
    this.mostrar = function()
    {
        var node = document.createElement("li");
        var textnode = document.createTextNode(this.title);
        node.appendChild(textnode);
        var ul = document.getElementById("listaTareas");
        ul.appendChild(node);
        node.onclick = function()
        {
            var node1 = document.createElement("li");
            var a = document.createElement("input");
            a.type = "text";
            a.value = textnode.nodeValue;
            //var textnode1 = document.createTextNode("fdsfd");
            node1.appendChild(a);
            ul.appendChild(node1);
            ul.replaceChild(node1, node);
            node1.firstChild.focus();
            //node.style.backgroundColor = "#ffd1a3";
        };
    }
}

function ListaTareas()
{
    this.tareas = [];

    this.li = document.getElementsByTagName("li");
    this.seleccion = undefined;
    this.agregar = function(tarea)
    {
        var inputTarea = document.getElementById("tarea");
        if(tarea == undefined)
        {
            tarea = inputTarea.value.charAt(0).toUpperCase() + inputTarea.value.slice(1);
            tarea = new Tarea(tarea);    
        }
        this.tareas.push(tarea);
        this.tareas[this.tareas.length - 1].mostrar();
        inputTarea.value = "";
        inputTarea.focus();
        console.log(this.li);
    }

    this.editar = function()
    {
                
    }
}

var listaTareas = new ListaTareas();
listaTareas.agregar(new Tarea("Delectus aut autem"));
listaTareas.agregar(new Tarea("Quis ut nam facilis et officia qui"));
listaTareas.agregar(new Tarea("Fugiat veniam minus"));
listaTareas.agregar(new Tarea("Et porro tempora"));
listaTareas.agregar(new Tarea("Laboriosam mollitia et enim quasi adipisci quia provident illum"));
listaTareas.agregar(new Tarea("Qui ullam ratione quilistaTareasdam voluptatem quia omnis"));
listaTareas.agregar(new Tarea("Illo expedita consequatur quia in"));
listaTareas.agregar(new Tarea("Quo adipisci enim quam ut ab"));
listaTareas.agregar(new Tarea("Molestiae perspiciatis ipsa"));
listaTareas.agregar(new Tarea("Illo est ratione doloremque quia maiores aut"));