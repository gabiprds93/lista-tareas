function Tarea(title)
{
    this.title = title;
    this.completed = false;
    this.mostrar = function()
    {
        var html = ""; 
        html += "<li>" + this.title + "</li>";
        document.getElementById("listaTareas").innerHTML += html;
    }
}

function ListaTareas()
{
    this.tareas = [];
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
listaTareas.agregar(new Tarea("Qui ullam ratione quibusdam voluptatem quia omnis"));
listaTareas.agregar(new Tarea("Illo expedita consequatur quia in"));
listaTareas.agregar(new Tarea("Quo adipisci enim quam ut ab"));
listaTareas.agregar(new Tarea("Molestiae perspiciatis ipsa"));
listaTareas.agregar(new Tarea("Illo est ratione doloremque quia maiores aut"));