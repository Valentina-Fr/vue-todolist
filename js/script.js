console.log("test vue", Vue);
Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        toDoList: [
            {text: "FARE LA SPESA", done: false}, 
            {text: "FARE IL BUCATO", done: false}, 
            {text: "PAGARE BOLLETTE", done: false}, 
            {text: "PULIRE CASA", done: false}],
        newTask: "",
        isInputVisible: false,
        searchTerm: "",
    }, 
    methods: {
        removeItem(index) {
            this.toDoList.splice(index, 1);
            this.searchTerm = "";
        },

        addTask() {
            if(this.newTask.trim()) {
                this.toDoList.push({text: this.newTask.toUpperCase(), done: false});
                this.toDoList.sort((a,b) => {
                    return a.text.localeCompare(b.text);
                });
                this.toggleInput();
            }
            this.newTask = "";
        },

        toggleDone(index) {
            this.toDoList = this.toDoList.map((task, taskIndex) => {
                if(taskIndex === index) {
                    task.done = !task.done;
                    this.searchTerm = "";
                }
                return task;
            });
        },

        isDone(index) {
            return this.toDoList[index].done;
        },

        toggleInput() {
            this.isInputVisible = !this.isInputVisible;
            this.newTask = "";
        },

        showItem(task) {
            if(!this.searchTerm.trim()) return true;
            const filter = this.searchTerm.trim().toUpperCase();
            task.text = task.text.toUpperCase();
            return task.text.includes(filter);
        }
    }
});