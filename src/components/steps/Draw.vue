<template>
  <div>
    <canvas id="c" width="1200" height="620" >

    </canvas>
    <button class="display-button" @click="exportPdf()">PDf Çıkar</button>
  </div>
 </template>

<script>
    import jsPDF from 'jspdf'
    export default {
        name: "Draw",
        data(){
            return{
                vueCanvas : null,
                nodeInfo : [],
                weight : []
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
                        ,activeTo["x"],activeTo["y"],this.weight[i]);

                }
            },
            drawNode(context, x, y ,text){
                context.beginPath();
                context.font = "30px Arial";
                context.fillText(text, x-10, y+10);
                context.arc(x, y, 30, 0, 2 * Math.PI);
                context.stroke();

            },
            canvas_arrow(context, fromx, fromy, tox, toy,text) {

                context.beginPath();
                var headlen = 35;
                var dx = tox - fromx;
                var dy = toy - fromy;
                var angle = Math.atan2(dy, dx);
                context.moveTo(fromx, fromy);
                context.lineTo(tox, toy);
                context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
                context.moveTo(tox, toy);
                context.font = "30px Arial";
                if(fromy>toy){
                    if(fromx>tox){
                        context.fillStyle = "red";

                        context.fillText(text, ((fromx+40)+tox)/2, ((fromy+40)+toy)/2 );
                    }else if (fromx === tox){
                        context.fillStyle = "red";

                        context.fillText(text, (fromx+tox)/2, ((fromy+170)+toy)/2 );
                    }
                    else{
                        context.fillStyle = "red";

                        context.fillText(text, ((fromx-100)+tox)/2, ((fromy+50)+toy)/2 );
                    }
                }else if(fromy<toy){
                    if(fromx>tox){
                        context.fillStyle = "red";

                        context.fillText(text, ((fromx+40)+tox)/2, ((fromy-40)+toy)/2 );
                    }else if (fromx === tox){
                        context.fillStyle = "red";

                        context.fillText(text, (fromx+tox)/2, ((fromy-40)+toy)/2 );
                    }else {
                        context.fillStyle = "red";
                        context.fillText(text, ((fromx-120)+tox)/2, ((fromy-10)+toy)/2 );
                    }
                }else{
                    if(fromx>tox){
                        context.fillText(text, ((fromx+130)+tox)/2, (fromy+toy)/2 );
                    }else if(fromx<tox) {
                        context.fillStyle = "red";

                        context.fillText(text, ((fromx-130)+tox)/2, (fromy+toy)/2 );
                    }else{
                        context.fillStyle = "green";
                        context.fillText(text, ((fromx-130)+tox)/2, (fromy+toy)/2 );

                    }
                }
                //context.fillText(text, (fromx+tox)/2, (fromy+toy)/2 );

                context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
                context.strokeStyle = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

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
                    y : 400,
                    text : "4"
                };
                var node5 = {
                    x : 550,
                    y : 570,
                    text : "5"
                };
                var node6 = {
                    x : 350,
                    y : 400,
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
            exportPdf(){
                var canvas = document.getElementById('c');
                var imgData = canvas.toDataURL("image/png", 1.0);
                var pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', -50, -10);
                pdf.save("download.pdf");
                console.log(pdf)
            }
        },
        activated() {
            var c = document.getElementById("c");
            var ctx = c.getContext("2d");

            ctx.beginPath();
            ctx.clearRect(0, 0, c.width, c.height);

            this.weight = this.$store.getters.getW;

            this.draw();

        }
    }
</script>

<style scoped>
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
