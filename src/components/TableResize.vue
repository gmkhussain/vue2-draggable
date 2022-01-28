<template>
    <div>
        <h4>v-columns-resizable</h4>
        <table border="1" cellspacing="0" class="table table-resize" >
            <thead v-columns-resizable>
                <tr>
                <th width="50%">name</th>
                <th width="25%">age</th>
                <th width="25%">gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>John</td>
                <td>20</td>
                <td>male</td>
                </tr>
                <tr>
                <td>Emma</td>
                <td>18</td>
                <td>female</td>
                </tr>
                <tr>
                <td>Peter</td>
                <td>21</td>
                <td>male</td>
                </tr>
            </tbody>
        </table>

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
