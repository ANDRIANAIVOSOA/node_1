class Liste {
    constructor(id){
        this.ul = document.querySelector(id);
        this.listeTab = [];
        this.restore();
    }

    insert(content) {
        const listeJson = document.createElement(this.li);
        
        const span = document.createElement("span");
        span.innerHTML = content;

        const deleteButton = new DeleteTodo();
        deleteButton.insertList(this);
        
        listeJson.appendChild(span);
        listeJson.appendChild(deleteButton.supprim);
        const id = Math.random();
        this.listeTab.push({
            content: content,
            id: id
        });
        deleteButton.setIndex(id);
        //this.save();
        this.ul.appendChild(listeJson);
    }

    getList(){
        return this.listeTab;
    }

    save(){
        fetch('http://localhost:4200/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.listeTab)
        })
        .then(response => response.json())
        .then((responseJson) => console.log(responseJson))
        .catch(error => localStorage.setItem('todos', JSON.stringify(this.listeTab)))
    }

    restore() {
        fetch('http://localhost:4200/')
            .then(function(response){
                return response.json();
            })
            .then((response) => {
                const restore = response
                if(restore){
                    restore.forEach(element => {
                        this.insert(element.nom);
                    });
                    this.save();
                }
                console.log(response);
            })
            .catch(erreur => {
                const restore = localStorage.getItem('todos');
                if(restore){
                    const tabRestore = JSON.parse(restore);
                    tabRestore.forEach(element => {
                        this.insert(element.content);
                    });
                    this.save();
                }
            })
        
    }

    delete(index){
        this.listeTab = this.listeTab.filter(x => x.id !== index);
        this.save();
    }
    
}