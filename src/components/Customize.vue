<template>
    <div class="box">
        <ul>
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
        </ul>
    </div>
</template>


<script>
export default {
    name: "Customize",
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

        updateCols( col , idx, updatedState) {

            this.cols[idx].isVisible=updatedState

            console.log( this.cols[idx].isVisible )

            if( this.cols[idx].isVisible === true ) {
                this.selectedCols.push(col.name)
            } else {
                this.selectedCols.pop(col.name)
            }
            
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