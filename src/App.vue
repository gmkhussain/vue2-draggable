<template>
  <div id="app">

    <Customize />
    
    <hr />

    <TableColxRowNested />

    <hr />

    <TableColxRow />

    <hr />

    <TableResize />

    <hr />

    <TableRow msg="table" />

    <hr />

    <TableCol />

  </div>
</template>

<script>

import TableColxRowNested from './components/TableColxRowNested.vue'

import TableRow from './components/TableRow.vue'
import TableCol from './components/TableCol.vue'
import TableColxRow from './components/TableColxRow.vue'
import TableResize from './components/TableResize.vue'

import Customize from './components/Customize.vue'

export default {
  name: 'App',
  components: {
    TableRow,
    TableCol,
    TableColxRow,
    TableResize,
    TableColxRowNested,
    Customize
  }
}
</script>

 