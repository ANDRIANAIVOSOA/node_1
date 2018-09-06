class Addtodo {
    constructor(id){
        this.button = document.querySelector(id);
        this.button.addEventListener("click", () => {
            this.add();
        });
    }
    add(){
        if(this.input.get() !== ""){
            this.list.insert(this.input.get());
            this.list.save();
            this.input.vider();
            //console.log(this.list.getList());
        }
        
    }
    //injection dépendance
    setInput(input){
        this.input = input
    }

    insertList(liste) {
        this.list = liste
    }


}
