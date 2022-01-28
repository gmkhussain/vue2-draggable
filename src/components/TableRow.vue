<template>
  <div class="hello">
    
    <p>{{ msg }}</p>
    <div class="table table-div" border="1" id="table">
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false" class="tbody">
          <div class="tr" v-for="element in myArray" :key="element.id">
            <div class="td">{{element.id}}</div>
            <div class="td">{{element.name}}</div>
          </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    draggable
  },
  data() {
    return {
      myArray: [
        {
          id: 1001,
          name: "A for Apple"
        },
        {
          id: 1002,
          name: "B for Berry"
        },
        {
          id: 1003,
          name: "C for Cherry"
        },
        {
          id: 1004,
          name: "D for Duck"
        }
      ]
    }
  },
  mounted() {
    
  },

}
</script>

<style scoped>
.table-div .tr.sortable-chosen .td {
  border-top: 1px solid #227de6 !important;
}

.table-div { display: table; }

.table-div .tbody { display: table-row-group; }

.table-div .tr {
  display: table-row;
}

.table-div .td {
  display: table-cell;
  border: 1px solid #e7e7e7;
  padding: 4px 10px;
  margin-left: -1px;
  margin-top: -1px;
}

.table-div .td:hover {
  border: 1px solid #979797;
}
</style>
