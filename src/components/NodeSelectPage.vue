<template>
  <div>
  <div class="deneme">
    <div class="stepper text-center  ">
      <div class="col-4 step" :class="activePage === 'appNodes' ? 'active-step' : 'bg-white'" @click="beActive(1)">Aktif Düğümler</div>
      <div class="col-4  step" :class="activePage === 'appW' ? 'active-step' : 'bg-white'" @click="beActive(2)">Ağırlık Seçimi</div>
      <div class="col-4  step" :class="activePage === 'appDraw' ? 'active-step' : 'bg-white'" @click="beActive(3)">Görüntüle</div>
    </div>
    <div class="">
      <keep-alive>
      <component :is="activePage" @changePage ="newActivePage">

      </component>
      </keep-alive>
    </div>
  </div>
   <!-- <div class="bottom-bar col-12">
      <div class="col-6">

      </div>
      <div class="col-6 ">
        <button class="float-right display-button ml-3 mt-4">İleri</button>
        <button class="float-right display-button mt-4">Geri</button>
      </div>
    </div>--->
  </div>
</template>

<script>
  import ActiveNodes from "./steps/ActiveNodes";
  import SetW from "./steps/SetW";
  import Draw from "./steps/Draw";
    export default {
        data(){
          return{
              activePage:"appNodes"
          }
        },
        components:{
            appNodes:ActiveNodes,
            appW : SetW,
            appDraw : Draw
        },
        methods : {
            newActivePage(activePage){
                this.activePage = activePage
            },
            beActive(value){
                if(value === 1)
                    this.activePage ="appNodes";
                if (value === 2)
                    this.activePage = "appW";
                if(value === 3)
                    this.activePage = "appDraw"
            }

        }


    }
</script>

<style scoped>
  .deneme {
    width: 1200px;
    height: 700px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f5f5f5;
    margin-top: 100px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
  }

  .stepper {
    height: 70px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    background-color: #f3f3f3;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .step{
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    padding: 15px;
  }
  .active-step{
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    color: white;
    padding: 15px;
    background-color: green;
  }
  .bottom-bar{
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    height: 70px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .display-button{
    width: 150px;
  }
</style>
