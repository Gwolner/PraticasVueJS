const MeuNomeApp = {

    data(){
        return{
            nome:"Guilherme",
            idade: 31,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            this.nome = this.input_name;
        }
    }
}

Vue.createApp(MeuNomeApp).mount("#app");