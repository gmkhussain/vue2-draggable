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

          <draggable  tag="div" class="tr"
                      v-model="headersAll" 
                      handle=".vd-handler"
                      @change="onTHOrderChange">
            
            <div  v-for="(header, index) in headersAll"
                  scope="col" :class="'th td-'+header.name"
                  :key="header.name"
                  v-show="header.isVisible"
                  :data-isVisible="header.isVisible"
                  :data-colindex="index"
                  :style="`width: ${header.width}`"
                  >

                  <span class="vd-handler">
                    {{ header.name }}
                  </span>

            </div>

          </draggable>
        </div>
        
          
        <draggable tag="div" class="tbody"
                v-model="list"
                group="people"
                @start="drag=false"
                @end="drag=false"
                >

          <div  class="tr"
                v-for="item in list"
                :key="item.name"
                >

            <div :class="'td td-'+header.name"
                      v-for="(header, index) in headersAll"
                            :key="header.name"
                            v-show="header.isVisible"
                            :data-colindex="index"
                            >
              
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
        {id: 0, name: "id", isVisible : true, width: '320px' },
        {id: 1, name: "school_name", isVisible: true, width: '120px' },
        {id: 2, name: "date", isVisible: false, width: '120px' },
        {id: 3, name: "status", isVisible: true, width: '120px' },
        {id: 4, name: "rating", isVisible: false, width: '120px' },
        {id: 5, name: "BLANK", isVisible: true, width: '120px' }
      ],
      headersActive: [],
      list: jsonLocalData,
      dragging: false,
      userName: '',
      customizeIsOpen: false
    };
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
      console.log( "Data From Child", x )
      this.headersActive = x;
    },

    CustomizeToggler( ) {
      this.customizeIsOpen = !this.customizeIsOpen;
    },

        
    
      tableResizerFunc () {
            
            console.log( "tableResizerFunc RUNNED! ")

            var thElm;
            var currIndex;
            var startOffset;


            Array.prototype.forEach.call(
            
              document.querySelectorAll(".table .th"),
            
              function (th, index) {
                  th.style.position = 'relative';
                  th.setAttribute('data-colindex', index )
                  
                  if( th.querySelector('.resizeHandler') ) {
                    console.log("Hai Ga")
                  } else {
                  
                  var grip = document.createElement('div');
                      grip.setAttribute("class", `resizeHandler`);
                      grip.innerHTML = "&nbsp;";
                      grip.addEventListener('mousedown', function (e) {
                          thElm = th;
                          currIndex = index;
                          
                          startOffset = th.offsetWidth - e.pageX;
                      });

                      th.appendChild(grip);
                  }


              });

              document.addEventListener('mousedown', function () {
                  if (thElm) {
                    thElm.setAttribute('data-active', 'true')
                  }
              })
        
              document.addEventListener('mouseup', function () {
                  if (thElm) {
                    thElm.setAttribute('data-active', 'false')
                  }
              })
        
              document.addEventListener('mousemove', function (e) {
                if (thElm) {
                    console.log( currIndex )
                    document.querySelectorAll("[data-colindex='"+currIndex+"']").forEach( div => {
                        div.style.width = startOffset + e.pageX + 'px';
                    })
                }
              });

              document.addEventListener('mouseup', function () {
                  thElm = undefined;
              });
        
        },




    
    // Debugging Only
    onTHOrderChange() {
      console.log( "onTHOrderChange() ->" , this.headersActive )

      this.tableResizerFunc()
    },

  

  },
  mounted() {
    
    this.headersActiveCols()
    
    this.tableResizerFunc()
  },

};
</script>


<style >
.buttons {
  margin-top: 35px;
}






.resizeHandler {
    background: transparent;
    position: absolute;
    right: -2px;
    top: 0px;
    z-index: 888;
    height: 100%;
    width: 5px;
    cursor: col-resize;
}

.resizeHandler:hover {
    background: #007bff;
}

        
[data-active="true"] .resizeHandler:before  {
    content: " ";
    position: absolute;
    top: 0;
    left: 2px;
    height: 100vh;
    background: blue;
    width: 1px;
}

</style>