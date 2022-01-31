<template>
    <div class="box">
        <ul>
            <li v-for="(col, index) in cols" :key="index">
                <span>{{col.name}}</span>
                <label>
                    {{col.isVisible}}
                    <input type="checkbox"
                        :value="col.isVisible"
                        :checked="col.isVisible ? true : false"
                        @change="updateCols(index, !col.isVisible)"
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
                    isVisible: true
                },
                {
                    name: "date",
                    isVisible: true
                },
                {
                    name: "status",
                    isVisible: true
                },
                {
                    name: "rating",
                    isVisible: false
                }
            ]

        }
    },
    methods: {
        updateCols(id, state) {

            this.cols[id].isVisible=state
            console.log( this.cols )
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

.box ul li {
    border: 1px solid #ddd;
    padding: 5px;
    display: flex;
}

label {margin-left: auto;}

</style>