<template>
    <div>
        <h4>v-columns-resizable</h4>
        <div class="table table-div" >
            <div class="thead" v-columns-resizable>
                <div class="tr">
                    <div class="th" width="50%">name</div>
                    <div class="th" width="25%">age</div>
                    <div class="th" width="25%">gender</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr">
                    <div class="td">John</div>
                    <div class="td">20</div>
                    <div class="td">male</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "TableResize",

}
</script>

<style scoped>
.table-resize {
    width: 500px;
}

</style>
