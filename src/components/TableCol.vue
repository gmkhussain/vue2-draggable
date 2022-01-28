<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable table</h3>

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

        <!-- <tr v-for="item in list" :key="item.name">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
        </tr> -->
        
      </div>

    </div>

    <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="headers" title="Headers" />
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "TablCol",
  display: "Table Column",
  order: 9,
  components: {
    draggable
  },
  data() {
    return {
      headers: ["id", "name", "sport"],
      list: [
        { id: 1, name: "Abby", sport: "basket" },
        { id: 2, name: "Brooke", sport: "foot" },
        { id: 3, name: "Courtenay", sport: "volley" },
        { id: 4, name: "David", sport: "rugby" }
      ],
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