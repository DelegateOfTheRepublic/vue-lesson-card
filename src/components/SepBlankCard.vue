<template>
  <div class="separate-card">
    <div class="separate-card__header">
      <span>Недели</span>
      <div class="week-types">
        <span
          :class="{ 'active-week-type': isActive('bottom') }"
          @click="setCurrWeekType('bottom')"
          >Нижняя</span
        >
        <span
          :class="{ 'active-week-type': isActive('top') }"
          @click="setCurrWeekType('top')"
          >Верхняя</span
        >
      </div>
    </div>
    <div class="separate-card__body">
      <keep-alive
        ><slot v-if="currWeekType == 'bottom'" name="bottomWeek"></slot
      ></keep-alive>
      <keep-alive
        ><slot v-if="currWeekType == 'top'" name="topWeek"></slot
      ></keep-alive>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  emits: {
    changeWeekType(weekType) {
      this.$emit("change-week-type", weekType);
    },
  },
  created() {
    this.$emit("change-week-type", this.currWeekType);
  },
  data() {
    return {
      currWeekType: "bottom",
    };
  },
  methods: {
    isActive(weekType) {
      return _.isEqual(weekType, this.currWeekType);
    },
    setCurrWeekType(newWeekType) {
      this.currWeekType = newWeekType;
      this.$emit("change-week-type", newWeekType);
    },
  },
};
</script>

<style scoped>
.separate-card {
  min-width: 250px;
  min-height: 180px;
  border: 3px solid black;
}
.separate-card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separate-card__body {
  padding: 2px;
}
.week-types {
  display: flex;
  width: 100%;
}
.week-types > span {
  flex: 1;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid rgba(128, 128, 128, 0);
  transition: all 0.5s ease;
}
.active-week-type {
  border-bottom: 2px solid grey !important;
}
.week-types > span:hover {
  border-bottom: 2px solid rgb(189, 189, 189);
}
</style>