<template>
  <div class="main">
    <card-wrapper />
    <!-- <empty-card />
    <sep-blank-card>
      <template #bottomWeek
        ><blank-card>
          <template #item="{ toAdd }"><p @click="toAdd">123</p></template>
        </blank-card>
      </template>
      <template #topWeek
        ><blank-card
          ><template #item="{ toAdd }"
            ><p @click="toAdd">321</p></template
          ></blank-card
        ></template
      >
    </sep-blank-card> -->
  </div>
</template>

<script>
import CardWrapper from "./components/CardWrapper";

export default {
  name: "App",
  components: {
    CardWrapper,
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

p {
  margin: 0;
}

.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
</style>
