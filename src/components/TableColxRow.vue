<template>
  <div class="row">
    <div class="col-8">
      
      <h4>Draggable COL x ROW table</h4>

      <button @click="CustomizeToggler">Customize</button>

      <div v-show="customizeIsOpen">
          <Customize
                :getTHs="getTHsName"
                :dataHeader="headersAll"
                :isOpen="customizeIsOpen"
                />
      </div>
        
      <hr />

      <div class="table table-div">
        
        <div class="thead">
          <!-- <draggable v-model="headersAll" tag="div" class="tr"
            @change="onTHOrderChange">
            <div v-for="header in headersAll" :key="header">
              {{ header }}
            </div>
          </draggable> -->

          <draggable v-model="headersAll" tag="div" class="tr"
            @change="onTHOrderChange">
            
            <div v-for="header in headerActiveFunc" :key="header.name" scope="col" class="th">
              {{ header.name }}
            </div>
          </draggable>
        </div>
        
          
        <draggable v-model="list" group="people" @start="drag=false" @end="drag=false"
                tag="div" class="tbody">
          <div v-for="item in list" :key="item.name" class="tr">
            <div class="td" v-for="header in headerActiveFunc" :key="header.name">
              
              <div v-if="header=='id'">
                {{item[header.name]}}
              </div>
              
              <div v-if="header=='date'">
                {{item[header.name]}}
              </div>

              <div v-else>
                {{ item[header.name] }}
              </div>

            </div>
          </div>
        </draggable>

      </div>

    </div>

    <!-- <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="headers" title="Headers" /> -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsonLocalData from "../data/data.json";

import Customize from './Customize.vue'

export default {
  name: "TableColxRow",
  display: "Table Column",
  order: 9,
  components: {
    draggable,
    Customize
  },
  data() {
    return {
      headersAll: [
        {id: 0, name: "id", isVisible : true },
        {id: 1, name: "school_name", isVisible: true },
        {id: 2, name: "date", isVisible: false },
        {id: 3, name: "status", isVisible: true },
        {id: 4, name: "rating", isVisible: false }
      ],
      headersActive: [],
      list: jsonLocalData,
      dragging: false,
      userName: '',
      customizeIsOpen: false
    };
  },
  mounted() {
    
    this.headersActiveCols()
 
  },
  computed: {
      headerActiveFunc() {
        return this.headersAll.filter( res => { return res.isVisible } )
      },
  },
  methods: {

    headersActiveCols: function() {
      console.log( ":::headersActiveCols", this.headersActive)
      this.headersActive = this.headersAll.filter( d => d.isVisible).map( d => d.name)
    },

    getTHsName: function(x) {
      console.log( x )
      this.headersActive = x;
    },

    onTHOrderChange() {
      console.log( " >>>" , this.headersActive )
    },

    CustomizeToggler( ) {
      this.customizeIsOpen = !this.customizeIsOpen;
    }

  }

};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>