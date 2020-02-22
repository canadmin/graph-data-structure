<template>

  <div class="set-weight text-center">
    <div>
    <table class="new-table">
      <tr>
      <th>
        başlangıç
      </th>
        <th>
          <span class="mr-2 ml-3">-></span>
        </th>
      <th>
        bitiş
      </th>
      <th>
        Ağırlık
      </th>
      </tr>
      <tbody>
      <tr v-for="(item, index) in activeNodes">
        <td>
          {{activeNodes[index]["nodeFrom"]}}.nolu düğüm
        </td>
        <td>
          <span class="mr-2 ml-3">-></span>
        </td>
        <td>
          <span class="ml-5 mr-5">
            {{activeNodes[index]["toNode"]}}.nolu düğüm
      </span>
        </td>
        <td>
        <input class="node-input" v-model="newW[index]">
      </td>

      </tr>

      </tbody>
    </table>
    </div>
    <div class="mt-3">
      <button class="display-button" @click="forward">İleri</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SetW",
        data(){
            return{
                activeNodes : [],
                newW : []
            }
        },
        created() {
            this.activeNodes = this.$store.getters.getNodes;
        },
        activated() {
            this.activeNodes = this.$store.getters.getNodes;
        },
        methods:{
            forward(){
                this.$emit("changePage","appDraw")

            }
        }
    }
</script>

<style scoped>
.set-weight{

}
.new-table {
  margin: auto;
}
.node-input {
  width: 150px;
  height: 40px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  border: 0;
  padding: 25px;
  margin-top: 12px;
}
.display-button {
  width: 150px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  border: 0;
  color: black;
  background-color: white;
}

.display-button:hover {
  background-color: #f3f3f3;
}
</style>
