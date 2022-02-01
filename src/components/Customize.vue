<template>
    <div class="box">
        <ul>
            <draggable v-model="cols" tag="div" class="tr"
                       @change="chaneCustomizeOrder"
                       @start="drag=true" @end="drag=false">
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
    </div>
</template>


<script>
import draggable from "vuedraggable";

export default {
    name: "Customize",
    components: {
        draggable
    },
    data() {
        return {
            cols: [
                {
                    name: "id",
                    isVisible: true
                },
                {
                    name: "school_name",
                    isVisible: false
                },
                {
                    name: "date",
                    isVisible: false
                },
                {
                    name: "status",
                    isVisible: false
                },
                {
                    name: "rating",
                    isVisible: false
                }
                ],
            selectedCols: ["id"]
        }
    },  
    props: { getUser:Function },
    methods: {
        chaneCustomizeOrder() {

            this.selectedCols = ["id"];
            this.cols.map( c => {
                if ( c.isVisible === true && c.name!=='id' )
                    { this.selectedCols.push(c.name) }
            })

             // Sending data to parent...
            this.getUser(this.selectedCols)
            
        },

        updateCols( col , idx, updatedState) {
            
            this.cols[idx].isVisible=updatedState

            this.selectedCols = ["id"];
            
            this.cols.map( c => {
                if ( c.isVisible === true && c.name!=='id' )
                    { this.selectedCols.push(c.name) }
            })
            
            console.log( this.selectedCols )

            // Sending data to parent...
            this.getUser(this.selectedCols)
        },
      
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