const MeuTeste = {
    data(){
        return{
            nome: "",
            idade: "",
            input_nome: "",
            input_idade: ""
        }
    },
    methods:{
        submeterForm(e){
            e.preventDefault();
            if(this.input_nome != ""){
                this.nome = this.input_nome;
            }else{
                this.nome = "Não informado."
            }

            if(this.input_idade){
                this.idade = this.input_idade;
            }else{
                this.idade = "Não informado."
            }
            

            this.input_nome = "";
            this.input_idade = "";

        },
        limparForm(){
            this.nome = "",
            this.idade = ""
            this.input_nome = "";
            this.input_idade = "";
        }
    }
}

Vue.createApp(MeuTeste).mount("#app");