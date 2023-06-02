<template>
  <div class="blank-card" @click="$emit('click-add')">
    <span class="blank-card__add">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        width="50"
        height="50"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <path
            fill="#18191a"
            fill-rule="evenodd"
            d="M12.75 4a.75.75 0 0 0-1.5 0v7.25H4a.75.75 0 0 0 0 1.5h7.25V20a.75.75 0 0 0 1.5 0v-7.25H20a.75.75 0 0 0 0-1.5h-7.25z"
            clip-rule="evenodd"
            data-original="#18191a"
            class=""
          ></path>
        </g>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  emits: {
    clickAdd() {
      this.$emit("click-add");
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.blank-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 180px;
  border: 3px dashed rgb(131, 131, 131);
  transition: background 0.5s ease;
  cursor: pointer;
}
.blank-card__add {
  display: flex;
  width: fit-content;
  height: fit-content;
  border: 2px dashed rgb(131, 131, 131);
  border-radius: 50%;
}

.blank-card:hover {
  background-color: rgb(196, 196, 196);
}
</style>