class Todo{
    constructor(id){
        this.input = document.querySelector(id);
        this.input.addEventListener("keypress", (event) => {
            if(event.key === "Enter"){
                this.addTodo.add();
            }
        });
    }
    //injection de addTodo
    addTodo(addTodo){
        this.addTodo = addTodo;
    }

    vider() {
        this.input.value = ""
    }

    get() {
        return this.input.value
    }
}