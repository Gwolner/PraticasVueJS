const MeuNomeApp = {

    data(){
        return{
            nome:"",
            idade: "",
            input_nome: "",
            input_idade: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            this.nome = this.input_nome;
            this.idade = this.input_idade;
        }
    }
}

Vue.createApp(MeuNomeApp).mount("#app");