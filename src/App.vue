<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.app {
  width: 100%;
  height: 100%;
}


@font-face {
  font-family: 'Cera Pro Regular';
  src: url('@/fonts/Cera Pro Regular Italic.otf');
}


@font-face {
  font-family: 'Cera Pro Medium';
  src: url('@/fonts/Cera Pro Medium.otf')
}

@media(max-width: 1700px) {
  .form-preview{
    width: 35% !important;
    margin-left: 1100px !important;
  }
}

@media(max-height: 1000px) {
  .save-script-btns {
    margin-top: 230px !important;

  }
  .to-main-btn {
    margin-top: 500px !important;
  }
}


@media(max-height: 800px) {
  .save-script-btns {
    margin-top: 200px !important;

  }


  .attentions  {
    padding-top: 100px !important;
  }
}

@media(max-height:745px) {
  .save-script-btns {
    margin-top: 170px !important;

  }
  
  .attentions  {
    padding-top: 150px !important;
  }
}
</style>
