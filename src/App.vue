<template>
  <div id="app">

    <TableRow msg="table" />

    <hr/>

    <TableCol />

  </div>
</template>

<script>
import TableRow from './components/TableRow.vue'
import TableCol from './components/TableCol.vue'

export default {
  name: 'App',
  components: {
    TableRow,
    TableCol
  }
}
</script>