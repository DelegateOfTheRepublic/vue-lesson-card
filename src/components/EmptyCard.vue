<template>
  <div class="empty-card">
    <template v-if="currMode === 'edit'">
      <input type="text" v-model="cardData['value']" />
      <div class="btns">
        <button @click="save">Сохранить</button>
        <button @click="cancel">Отмена</button>
      </div>
    </template>
    <template v-else>
      <p>{{ cardData["value"] }}</p>
      <button @click="edit">Редактировать</button>
    </template>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    mode: {
      type: String,
      default: "edit",
      validator(newMode) {
        return ["edit", "view"].includes(newMode);
      },
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      cardData: this.$attrs.value || {},
      currMode:
        !_.isEmpty(this.$attrs.value) && _.isObject(this.$attrs.value)
          ? "view"
          : "edit",
    };
  },
  methods: {
    save() {
      this.$emit("save");
      this.$emit("input", this.cardData);
      this.currMode = "view";
    },
    cancel() {
      if (_.isEmpty(this.$attrs.value)) {
        this.$emit("cancel");
        return;
      }

      this.currMode = "view";
    },
    edit() {
      this.currMode = "edit";
    },
  },
};
</script>

<style scoped>
.empty-card {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 180px;
  border: 3px dashed rgb(131, 131, 131);
}
.btns {
  display: flex;
  justify-content: space-around;
  margin-top: auto;
}
</style>