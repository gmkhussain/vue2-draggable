<template>
  <div class="row">
    <div class="col-8">
      
      <h4>Nested Draggable COL x ROW table</h4>

      <div class="table table-div" border="1">
        
        <div class="thead">
            <div class="tr">
                <draggable v-model="headers" tag="div" class="div">
              
                    <div v-for="header in headers" :key="header" scope="col" class="td">
                        {{ header }}
                    </div>
              </draggable>
            </div>
        </div>
        
          
        <draggable v-model="list" group="people" @start="drag=true" @end="drag=false" tag="div" class="div">
          <div v-for="item in list" :key="item.name" class="div">
            <div class="tbody">
                <div class="tr">
                    <div class="td" v-for="header in headers" :key="header">{{ item[header] }}</div>
                </div>
            </div>

            <div class="tbody">
                <div class="tr">
                    <div class="td" v-for="s in students" :key="s.id">
                        {{s.id}} | {{s.name}}
                    </div>
                </div>
            </div>
          </div>
        </draggable>


<!-- 
            <div v-for="s in item.students" :key="s.id">
                <strong> {{s.id}} </strong>
                <strong> {{s.name}} </strong>
            </div> -->

      </div>

    </div>

    <!-- <rawDisplayer class="col-2" :value="list" title="List" /> -->
    <rawDisplayer class="col-2" :value="headers" title="Headers" />

  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsonLocalData from "../data/data.json";
import jsonStudentData from "../data/students.json";

import rawDisplayer from './RawDisplayer.vue';

export default {
  name: "TableColxRowNested",
  display: "Table Column",
  order: 9,
  components: {
    draggable,
    rawDisplayer
  },
  data() {
    return {
      headers: ["id", "school_name", "date", "status", "rating"],
      list: jsonLocalData,
      students: jsonStudentData,
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