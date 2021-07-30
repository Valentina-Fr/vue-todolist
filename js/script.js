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
    }, 
    methods: {
        removeItem(index) {
            this.toDoList.splice(index, 1);
        },

        addTask() {
            if(this.newTask.trim()) {
                this.toDoList.push({text: this.newTask.toUpperCase(), done: false});
            }
            this.newTask = "";
        },

        toggleDone(index) {
            this.toDoList = this.toDoList.map((task, taskIndex) => {
                if(taskIndex === index) {
                    task.done = !task.done;
                }
                return task;
            })
        },

        isDone(index) {
            return this.toDoList[index].done;
        }
    }
});