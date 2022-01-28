<template>
  <div id="app">

    <TableResize />

    <hr />

    <TableRow msg="table" />

    <hr/>

    <TableCol />

  </div>
</template>

<script>
import TableRow from './components/TableRow.vue'
import TableCol from './components/TableCol.vue'
import TableResize from './components/TableResize.vue'

export default {
  name: 'App',
  components: {
    TableRow,
    TableCol,
    TableResize
  }
}
</script>