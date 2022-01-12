<template>
  <div>
    <p>Shopping</p>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
export default {
  name: "Shopping",
  mounted() {
    db.collection("text")
      .add({
        text: "hello world",
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  },
};
</script>
