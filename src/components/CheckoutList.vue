<template>
    <div class="tile is-parent">
        <div class="tile is-child box">
            <p class="title"> <i class="fas fa-list"></i> Lista de compras</p>
            <button class="button is-success is-fullwidth"> <i class="fas fa-check"></i>  Conferir produtos</button>
            <br>
            <br>
            <b-table :data="produtos" :columns="columns"></b-table>
            <div><strong>Preço total: </strong>{{totalPrice}}</div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase';
export default {
    name: 'chekout',
    data() {
        return {
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
    firestore() {
        return {
            produtos: db.collection('produtos')
        }
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

