<template>
    <div class="box">
        <ul>
            <draggable v-model="dataHeader" tag="div" class="tr"
                       :list="dataHeader"
                       @update="customizeUpdatedOrder"
                       @start="drag=true"
                       @end="drag=false"
                       :move="onMoveHandler"
                       :sort="true"
                       >

                <li v-for="(col, index) in dataHeader" :key="index">
                    
                    <label :for="col.name">

                        <span>{{col.name}} : </span>
                    
                        {{col.isVisible}}

                        <input type="checkbox"
                            :disabled="col.name=='id' ? true : false"
                            :id="col.name"
                            :value="col.isVisible"
                            :checked="col.isVisible ? true : false"
                            @change="onChangeHandler(col, index, !col.isVisible)"
                        />
                    </label>
                </li>
            </draggable>
        </ul>

            {{dataHeader}}
        
    </div>
</template>


<script>
import draggable from "vuedraggable";

export default {
    name: "Customize",
    components: {
        draggable
    },
    props: {
        getTHs:Function,
        dataHeader:Array,
        isOpen:Boolean
    },
    // data() {
    //     return {
    //         cols: this.dataHeader
    //     }
    // },  
    methods: {
        customizeUpdatedOrder(  ) {
            // console.log( "cols", this.cols )
        },

        onChangeHandler( col , idx, updatedState) {

            console.log ( "onChangeHandler", col , idx, updatedState )
            // Updating visibility
             this.dataHeader[idx].isVisible=updatedState
            // Sending data to parent...
        },


        onMoveHandler() {
            console.log( "onMoveHandler works!")
        }
      
    }
}
</script>


<style scoped>
.box {
    border: 1px solid #ddd;
    border-radius: 10px;
    max-width: 240px;
    overflow: hidden;
}

.box ul {
    padding-left: 0;
    list-style: none;
    margin: 0;
}

.box ul li label {
    border: 1px solid #ddd;
    padding: 5px;
    display: flex;
}

label input {margin-left: auto;}

</style>