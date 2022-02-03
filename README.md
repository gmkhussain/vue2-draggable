# vue2-draggable

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



```js
npm install --legacy-peer-deps 👈
```

- :white_check_mark: Table Draggable 
- - :white_check_mark: Row
- - :white_check_mark: Col
- - :white_check_mark: Row x Col
- - :white_check_mark: Div Base Table
- - :white_check_mark: with Static Inner HTML Element
- - :white_large_square: with Dynamic Inner HTML Element
- - :white_check_mark: Lock Cell
- - :white_large_square: Lock inside Table: Not able to drag out of current table
- - :white_large_square: Preview stick on previous position 
- - :white_large_square: Preview sync with new position ( High Light LINE on DROP POSITION )

- :white_large_square: Table Resizer
- - :white_large_square:


- :white_large_square: Customize
- - :white_large_square: Offcanvas dynamically toggle on click event
- - :white_check_mark: Col Visiable: [ Show / Hide ]
- - :white_check_mark: Col Order set from Child  Components: [ Move / Down ]
- - :white_large_square: Col Order of Child Sync with Parent Component: [ Left / Right ]
- - - :white_check_mark: Array[] convert to ArrayOfObjects{}


- :white_large_square: Vuex













## Lock Cell
#### Disable dragging on specific element using vue-draggable
```js
<draggable v-model="myArray" draggable=".item:not(.exclude-this-item)"> 👈
  <div v-for="element in myArray" :key="element.id" class="item exclude-this-item"> 👈
    {{element.id}}
  </div>
  <div v-for="element in myArray" :key="element.name" class="item">
    {{element.name}}
  </div>
  <div v-for="element in myArray" :key="element.city" class="item">
    {{element.city}}
  </div>
</draggable>
```















## Detect components exist


```js
//..
let componentExists = 'componentName' in this.$options.components
console.log( componentExists )
//..
```

OR

```js
//..
,
  mounted() {
      console.log( this.$options.components )
  }
//..
```