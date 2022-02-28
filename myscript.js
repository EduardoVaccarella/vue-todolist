// Funzionamento Vue

let app = new Vue({
    el: '#root',
    data: {
        todo: "",
        itemsArray: []
    },
    methods: {
        addFunction: function() {
            if (this.todo !== "") {
                if(!this.itemsArray.includes(this.todo)) {
                    this.itemsArray.push(this.todo);
                    this.todo = "";
                } else {
                    alert('Attivitá giá inserita');
                }
            } else {
                alert('Impossibile inserire attivitá vuota');
            }
        },

        deleteFunction: function(i) {
            this.itemsArray.splice(i, 1);
        },
    }
});