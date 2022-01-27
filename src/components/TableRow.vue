<template>
  <div class="hello">
    
    <p>{{ msg }}</p>
    <table class="table" border="1" id="tt">
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
          <tr v-for="element in myArray" :key="element.id">
            <td>{{element.id}}</td>
            <td>{{element.name}}</td>
          </tr>
      </draggable>
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    draggable
  },
  data() {
    return {
      myArray: [
        {
          id: 1001,
          name: "A for Apple"
        },
        {
          id: 1002,
          name: "B for Berry"
        },
        {
          id: 1003,
          name: "C for Cherry"
        },
        {
          id: 1004,
          name: "D for Duck"
        }
      ]
    }
  },
  mounted() {
    
  },

}
</script>

<style scoped>

</style>
