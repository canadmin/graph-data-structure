<template>
  <div>
    <canvas id="c" width="1200" height="620" >

    </canvas>

  </div>
 </template>

<script>
    export default {
        name: "Draw",
        data(){
            return{
                vueCanvas : null,
                nodeInfo : []
            }
        },

        methods : {
            draw(){
                this.createNodeInfo();

                var activeNodes = this.$store.getters.getActiveNodes;
                var weight = this.$store.getters.getW;
                var data = this.$store.getters.getNodes;

                var c = document.getElementById("c");
                var ctx = c.getContext("2d");

                for(var i = 0 ; i < activeNodes.length ; i++){
                    this.drawNode(ctx,this.nodeInfo[parseInt(activeNodes[i])]["x"],
                        this.nodeInfo[parseInt(activeNodes[i])]["y"],
                        this.nodeInfo[parseInt(activeNodes[i])]["text"]);
                }
                for(var i = 0; i< data.length ; i++) {
                    var lineData = data[i];
                    var nodeFrom = lineData["nodeFrom"];
                    var toNode = lineData["toNode"];
                    var activeFrom = this.nodeInfo[nodeFrom];
                    var activeTo = this.nodeInfo[toNode];
                    console.log(toNode)
                    this.canvas_arrow(ctx,activeFrom["x"],activeFrom["y"]
                        ,activeTo["x"],activeTo["y"]);

                }
            },
            drawNode(context, x, y ,text){
                context.beginPath();
                context.font = "30px Arial";
                context.fillText(text, x-10, y+10);
                context.arc(x, y, 30, 0, 2 * Math.PI);
                context.stroke();

            },
            canvas_arrow(context, fromx, fromy, tox, toy) {
                if (fromx == tox){
                    context.beginPath();

                    context.stroke();

                }
                context.beginPath()
                var headlen = 35; // length of head in pixels
                var dx = tox - fromx;
                var dy = toy - fromy;
                var angle = Math.atan2(dy, dx);
                context.moveTo(fromx, fromy);
                context.lineTo(tox, toy);
                context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
                context.moveTo(tox, toy);
                context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
                context.stroke();

            },
            createNodeInfo(){
                var node1 = {
                    x : 550,
                    y : 100,
                    text : "2"
                };

                var node2 = {
                    x : 350,
                    y : 200,
                    text : "1"
                };

                var node3 = {
                    x : 750,
                    y : 200,
                    text : "3"
                };
                var node4 = {
                    x : 750,
                    y : 300,
                    text : "4"
                };
                var node5 = {
                    x : 550,
                    y : 400,
                    text : "5"
                };
                var node6 = {
                    x : 350,
                    y : 300,
                    text : "6"
                };
                var nodeTest = {
                };
                this.nodeInfo.push(nodeTest);
                this.nodeInfo.push(node2);
                this.nodeInfo.push(node1);
                this.nodeInfo.push(node3);
                this.nodeInfo.push(node4);
                this.nodeInfo.push(node5);
                this.nodeInfo.push(node6);
            },


        },
        mounted() {
            this.draw();
        },
        activated() {
            this.draw();
        }
    }
</script>

<style scoped>

</style>
