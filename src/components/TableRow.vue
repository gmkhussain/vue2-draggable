<template>
  <div class="hello">
    
    <h4>Draggable ROW table</h4>

    <p>{{ msg }}</p>
    <div class="table table-div" border="1" id="table">
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false" class="tbody">
          <div class="tr" v-for="element in myArray" :key="element.id">
            <div class="td">{{element.id}}</div>
            <div class="td">{{element.name}}</div>
          </div>
      </draggable>
    </div>
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
