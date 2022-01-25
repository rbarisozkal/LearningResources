<template>
  <div class="container">
    <Button :mode="resourcesButtonMode" @click="setSelectedTab('resources')">Stored Resources</Button>
    <Button :mode="addResourceButtonMode" @click="setSelectedTab('add-list-item')">Add Resource</Button>
  </div>
  <keep-alive>
  <component :is="selectedTab"> </component>
  </keep-alive>
</template>
<script>
import Button from './Button.vue';
import Resources from './Resources.vue';
import AddListItem from './AddListItem.vue';
export default {
  components: {
    Button,
    Resources,
    AddListItem,
  },
  
  data() {
    return {
      selectedTab: 'resources',
      resources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
 
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResourceNew(title,description,link){
      const newResource={
        id: new Date().toISOString(),
        title:title,
        description:description,
        link:link
      }
      this.resources.unshift(newResource);
      this.selectedTab='resources';
    },
    removeResource(resourceID){
      const index = this.resources.findIndex(resource=> resource.id === resourceID);
      this.resources.splice(index,1);
    }

  },
   computed:{
    resourcesButtonMode(){
      return this.selectedTab==='resources' ? null : 'flat';
    },
    addResourceButtonMode(){
      return this.selectedTab==='add-list-item' ? null : 'flat';
    },
    
  },
  
  provide(){
      return{
          resources:this.resources,
          addResource:this.addResourceNew,
          removeResource:this.removeResource
      }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
