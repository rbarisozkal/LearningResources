<template>
<ErrorDialog @closeDialog="toggleErrorModal" v-if="isInputInvalid" title="Invalid Input">
  <template #default>
    <p>At least one input value is invalid. Please check inputs and re enter.</p>
    <p>At least one input value is invalid. Please check inputs and re enter.</p>
  </template>
  <template #actions>
    <Button @click="toggleErrorModal">OK</Button>
  </template>
</ErrorDialog>

  <div class="container">
    <form @submit.prevent="submitResource">
      <div class="wrapper">
        <label for="title">Title</label>
        <input ref="titleInput" id="title" name="title" type="text" />
      </div>
      <div class="wrapper">
        <label for="description">Description</label>
        <textarea
          ref="descriptionInput"
          id="description"
          rows="3"
          name="description"
        ></textarea>
      </div>
      <div class="wrapper">
        <label for="link">Link</label>
        <input ref="linkInput" id="link" name="link" type="url" />
      </div>
      <Button :type="submit">Add Resource</Button>
    </form>
  </div>
</template>
<script>
import Button from './Button.vue';
import ErrorDialog from './ErrorModal/ErrorDialog.vue';
export default {
  components: {
    Button,
    ErrorDialog,
  },
  inject: ['addResource'],
  data() {
    return {
      isInputInvalid:false
    };
  },
  methods: {
    submitResource() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;
      
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.isInputInvalid=true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    toggleErrorModal(){
      this.isInputInvalid=false;
    }
  },
};
</script>
<style scoped>
.container {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  list-style: none;
  padding: 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: auto;
  width: auto;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
}
.container form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
label,
input {
  margin-bottom: 5px;
  width: 20rem;
}
textarea {
  border: none;
  outline: none;
  border-radius: 4px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
input {
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: black;
}
form .wrapper {
  display: flex;
  flex-direction: column;
  max-height: 450px;
  margin: 20px;
}
form button {
  align-self: flex-end;
  border-radius: 10px;
}
</style>
