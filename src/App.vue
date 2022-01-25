<template>
<div class="container">
  
<Header/>
<AResource/>
  
</div>
</template>

<script>

import Header from './components/Header.vue';
import AResource from './components/AResource.vue'
export default {
  components: {
    AResource,
    Header,
  },
 
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  color:#ffffff;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(174, 238, 216);
  background: linear-gradient(
    90deg,
    rgba(174, 238, 216, 1) 0%,
    rgba(148, 233, 175, 1) 16%,
    rgba(148, 233, 189, 1) 36%
  );
 
}
</style>
