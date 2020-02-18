<template>
  <div class="text-center col-12">
    <div class="active-nodes">
      <table>
        <tr>
          <th>İndex</th>
          <th>Düğüm no</th>
          <th>-></th>
          <th>Düğüm no</th>
          <th>Değer</th>
        </tr>
        <tbody>
        <tr class="">
          <td>
            1
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[0]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[0]" >
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[0]">
          </td>
        </tr>
        <tr class="">
          <td>
            2
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[1]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[1]">
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[1]">
          </td>
        </tr>
        <tr class="">
          <td>
            3
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[2]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[2]">
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[2]">
          </td>
        </tr>
        <tr class="">
          <td>
           4
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[3]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[3]">
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[3]">
          </td>
        </tr>
        <tr class="">
          <td>
           5
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[4]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[4]">
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[4]">
          </td>
        </tr>
        <tr class="">
          <td>
            6
          </td>
          <td class="">
            <input class="node-input" v-model="nodeFrom[5]">
          </td>
          <td>
            ->
          </td>
          <td>
            <input class="node-input" v-model="toNode[5]">
          </td>
          <td>
            <input class="ml-3 node-input" v-model="validity[5]">
          </td>
        </tr>
        </tbody>
      </table>
      <div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "ActiveNodes",
        data(){
            return{
                nodeFrom : [],
                toNode : [],
                validity : []
            }
        },
        methods : {
            forward(){
                console.log(this.validity.length)
                for (var i = 0; i<=this.validity.length ; i++){

                }
            }
        }
    }
</script>

<style scoped>
.node-input{
  width: 150px;
  height: 50px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  border: 0;
  padding: 25px;
}
  .active-nodes{

    width: 1200px;

  }
</style>
