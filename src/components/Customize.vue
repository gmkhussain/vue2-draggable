<template>
    <div class="box">
        <ul>
            <draggable v-model="cols" tag="div" class="tr"
                       :list="cols"
                       @update="customizedReOrdered"
                       @start="drag=true" @end="drag=false"
                       :move="onChangeHandler"
                       :sort="true"
                       >

                <li v-for="(col, index) in cols" :key="index">
                    
                    <label :for="col.name">

                        <span>{{col.name}} : </span>
                    
                        {{col.isVisible}}

                        <input type="checkbox"
                            :disabled="col.name=='id' ? true : false"
                            :id="col.name"
                            :value="col.isVisible"
                            :checked="col.isVisible ? true : false"
                            @change="updateCols(col, index, !col.isVisible)"
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
        isOpen: Boolean
    },
    data() {
        return {
            cols: this.dataHeader
        }
    },  
    methods: {
        customizedReOrdered(  ) {

            console.log( "cols", this.cols )

        },

        updateCols( col , idx, updatedState) {
            
            // Updating visibility
            this.cols[idx].isVisible=updatedState
            // Sending data to parent...
        },


        onChangeHandler() {
            console.log( "onChangeHandler works!")
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