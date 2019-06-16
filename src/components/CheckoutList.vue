<template>
    <div> 
        <div class="tile is-parent">
        <div class="tile is-child box">
            <p class="title"> <i class="fas fa-list"></i> Lista de compras</p>
            <button v-on:click="show=true" class="button is-warning is-fullwidth"> <i class="fas fa-check"></i>  Conferir produtos</button>
            <br>
            <br>
            <b-table v-if="show" :data="produtos" :columns="columns"></b-table>
        </div>
    </div>
    {{show}}
    </div>
</template>

<script>
import Camera from './Camera'
import axios from 'axios';
import { db } from '../firebase';
import { async } from 'q';
export default {
    name: 'chekout',
    components: {
        Camera
    },
    data() {
        return {
            show: false,
            produtos: [],
            columns: [
                {
                    field: 'descricao',
                    label: 'Descrição'
                },
                {
                    field: 'preco',
                    label: 'Preço'
                },
                {
                    field: 'qtd',
                    label: 'Quantidade'
                }
            ]
        }
    },
    methods: {
        takePicture: () => {
            this.show = true
        }
    },
    firestore() {
        return {
            produtos: db.collection('produtos')
        }
    },

    mounted() {
        axios.get('http://127.0.0.1:5000/getprediction').then(res => console.log(res)).catch(
            erro => {
                console.log(erro)
                axios.get('http://127.0.0.1:5000/getprediction').then(res => console.log(res))
            }
        )
    }
}
</script>

<style scoped>
    .tile {
        width: 700px;
        margin: auto
    }

    .title {
        font-size: 1rem;
    }
</style>

