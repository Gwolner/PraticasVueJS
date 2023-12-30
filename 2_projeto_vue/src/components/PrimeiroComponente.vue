<script>
    export default{
        name: 'PrimeiroComponente',
        data(){
            return{
                nome: "Guilherme",
                profissao: "Programador"
            }
        }
    }
</script>



<template>
    <div>
        <h1> Olá Vue.JS!!!</h1>
        <p>Meu nome é {{ nome }} e sou {{ profissao }}</p>
    </div>
</template>