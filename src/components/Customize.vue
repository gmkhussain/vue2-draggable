<template>
    <div>
        <ul>
            <li v-for="(col, index) in cols" :key="index">
                <span>{{col.name}}</span>
                <label>
                    {{col.isVisible}}
                    <input type="checkbox"
                        :value="col.isVisible"
                        :checked="col.isvisible ? true : false"
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
    }
}
</script>