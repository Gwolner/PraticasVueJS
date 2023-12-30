<script>
    export default{
        name: 'PrimeiroComponente',
        props:{
            mensagem: String
        }
    }
</script>

<template>
    <h1>{{ mensagem }}</h1>
</template>