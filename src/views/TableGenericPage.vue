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
          <div v-for="(item, idx) in list" :key="idx" class="div">
            
                <div class="tr">
                    <div class="td" v-for="header in headers" :key="header">{{ item[header] }}</div>
                </div>
            
                    
            
                <b-button v-b-toggle="'collapse-'+idx" variant="primary">Toggle Collapse</b-button>
                <b-collapse :id="'collapse-'+idx" class="mt-2">
                    <b-card>

                        <draggable v-model="list2" group="people" @start="drag=true" @end="drag=false" tag="div" class="tbody">
                            
                            <div class="tr" v-for="itemOutter2 in list2" :key="itemOutter2.id">
                                <div class="td" v-for="(itemInner2, idx2) in headers" :key="itemInner2">
                                    {{ idx2 }} | {{ itemOutter2[itemInner2] }}
                                </div>
                            </div>
                        
                        </draggable>
                        
                    </b-card>
                </b-collapse>
                
          </div>
        </draggable>


      </div>

    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsonLocalData from "@/data/data.json";
import jsonLocalData2 from "@/data/data2.json";
 
export default {
  name: "TableGeneric",
  display: "Table Column",
  order: 9,
  components: {
    draggable
  },
  data() {
    return {
      headers: ["id", "school_name", "date", "status", "rating"],
      list: jsonLocalData,
      list2: jsonLocalData2,
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