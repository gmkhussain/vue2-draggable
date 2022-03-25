<template>
    <div>
        
        <TableColxRow />
        
        <hr />

        <TableColxRowNested />

        <hr />

        <TableResize />

        <hr />

        <TableRow msg="table" />

        <hr />

        <TableCol />
        
    </div>
</template>

<script>

import TableColxRowNested from '@/components/TableColxRowNested.vue'

import TableRow from '@/components/TableRow.vue'
import TableCol from '@/components/TableCol.vue'
import TableColxRow from '@/components/TableColxRow.vue'
import TableResize from '@/components/TableResize.vue'


export default {
  name: 'About',
  components: {
    TableRow,
    TableCol,
    TableColxRow,
    TableResize,
    TableColxRowNested
  }
  
}
</script>