<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <Button @click="removeResource(id)" mode="flat">Delete</Button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">Go To Link</a>
    </nav>
  </li>
</template>
<script>
import Button from './Button.vue';
export default {
  props: ['id','title', 'description', 'link'],
  inject:['removeResource'],
  components: {
    Button,
  },
};
</script>
<style scoped>
li {
  padding: 10px;
  margin: auto;
  width: 40rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid white;
}
li:last-child {
  border-bottom: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
button {
  background: lightgrey;
  color: teal;
  border: none;
  width: auto;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  transition: color 0.3s ease;
}
button:hover {
  background: #ce5c00;
  color: #ffff;
}
</style>
