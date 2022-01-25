<template>
     <ul>
    <list-item
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></list-item>
  </ul>
</template>
<script>
import ListItem from './ListItem.vue'
export default {
    components:{
        ListItem
    },
    inject:['resources']
}
</script>
<style scoped>
ul {
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  list-style: none;
  padding: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: auto;
  width: auto;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
}

</style>