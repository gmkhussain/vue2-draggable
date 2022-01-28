<template>
  <div class="row">
    <div class="col-8">
      
      <h4>Nested Draggable COL x ROW table</h4>

      <div class="table table-div" border="1">
        
        <div class="thead">
          <draggable v-model="headers" tag="div" class="tr">
            <div v-for="header in headers" :key="header" scope="col" class="th">
              {{ header }}
            </div>
          </draggable>
        </div>
        
          
        <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false" tag="div" class="tbody">
          <div v-for="item in list" :key="item.name" class="tr">
            <div class="td" v-for="header in headers" :key="header">{{ item[header] }}</div>
          </div>
        </draggable>

      </div>

    </div>

    <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="headers" title="Headers" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsonLocalData from "../data/data.json";

export default {
  name: "TableColxRowNested",
  display: "Table Column",
  order: 9,
  components: {
    draggable
  },
  data() {
    return {
      headers: ["id", "school_name", "date", "status", "rating"],
      list: jsonLocalData,
      dragging: false
    };
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>