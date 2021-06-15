<template>
  <q-page>
<div class="row q-pa-sm">
      <div class="col-5">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Conheça os Planetas</div>
        <div class="text-subtitle2">Por Gustavo</div>
      </q-card-section>
        <q-btn flat>Detalhes</q-btn>
        <q-btn flat>Cidadões Ilustres</q-btn>
    </q-card>
      </div>
    </div>

    <div class="row q-pa-sm">
      <q-table
      title="Cidadões Ilustres"
      :data="posts"
      :columns="columns"
      row-key="name"
      class="col-5"
    />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
          align: 'left',
          sortable: true
        },
        {
          name: 'height',
          label: 'Altura',
          field: 'height',
          align: 'left',
          sortable: true
        },
        {
          name: 'homeworld',
          label: 'Terra natal',
          field: 'homeworld',
          align: 'left',
          sortable: true
        }
      ],
      posts: []
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    getPosts () {
      this.$axios.get('https://swapi.dev/api/people')
        .then((res) => {
          this.post = res.data
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
