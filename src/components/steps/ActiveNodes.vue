<template>
  <div class="text-center col-12">
    <div class="active-nodes">
      <table class="new-table">
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
            <input class="node-input" v-model="toNode[0]">
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
      <div class="mt-3">
        <button class="display-button" @click="forward">İleri</button>
      </div>
      <div>

      </div>

    </div>

  </div>

</template>

<script>
    import node from "../../store/modules/node";

    export default {
        name: "ActiveNodes",
        data() {
            return {
                nodeFrom: [],
                toNode: [],
                validity: [],
                selectionArr: []
            }
        },
        methods: {
            forward() {
                var validNodeFrom = [];
                var validToNode = [];
                var activeNode = [];
                var graph = [];
                for (var i = 0; i < 6; i++) {
                    if (this.validity[i] === "1") {
                        if (!activeNode.includes(this.nodeFrom[i])) {
                            activeNode.push(this.nodeFrom[i]);
                            console.log("deneme " + this.nodeFrom[i])
                        }
                        if(!activeNode.includes(this.toNode[i])){
                            activeNode.push(this.toNode[i])
                            console.log("deneme " + this.toNode[i])

                        }
                        var validNode = {nodeFrom: this.nodeFrom[i], toNode: this.toNode[i]};
                        graph.push(validNode);
                    }
                }
                this.$store.dispatch("reqNode", graph);
                this.$store.dispatch("reqActiveNode", activeNode);

                this.$emit("changePage","appW")
            }
        }
    }
</script>

<style scoped>
  .node-input {
    width: 150px;
    height: 50px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    border: 0;
    padding: 25px;
    margin-top: 12px;

  }

  .new-table {
    margin: auto;
  }

  .active-nodes {
    width: 1200px;
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
