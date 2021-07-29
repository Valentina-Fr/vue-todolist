console.log("test vue". Vue);
Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        toDoList: ["Fare la spesa", "Fare il bucato", "Pagare bollette", "Pulire casa"],
    }, 
    methods: {
        removeItem(index) {
            this.toDoList.splice(index, 1);
        }
    }
});