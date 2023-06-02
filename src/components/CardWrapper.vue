<template>
  <div class="card-wrapper">
    <p class="card-wrapper__is-separated">
      <input type="checkbox" name="" id="isSeparated" v-model="isSeparated" />
      <label for="isSeparated">Разделение пары</label>
    </p>
    <component
      :is="dynamicCardComponent"
      @click-add="showBaseCard = true"
      @cancel="goBack()"
      @change-week-type="
        (newWeekType) => ((weekType = newWeekType), (showBaseCard = false))
      "
      v-model="data['default']"
    >
      <template #bottomWeek>
        <empty-card
          v-if="
            (showBaseCard || data['separated']['bottom']) &&
            weekType === 'bottom'
          "
          v-model="data['separated']['bottom']"
          @cancel="goBack()"
        />
        <blank-card v-else @click-add="showBaseCard = true" />
      </template>
      <template #topWeek>
        <empty-card
          v-if="
            (showBaseCard || data['separated']['top']) && weekType === 'top'
          "
          v-model="data['separated']['top']"
          @cancel="goBack()"
        />
        <blank-card v-else @click-add="showBaseCard = true" />
      </template>
    </component>
  </div>
</template>

<script>
import BlankCard from "./BlankCard";
import SepBlankCard from "./SepBlankCard";
import EmptyCard from "./EmptyCard";
import _ from "lodash";

export default {
  components: {
    BlankCard,
    SepBlankCard,
    EmptyCard,
  },
  data() {
    return {
      isSeparated: false,
      showCard: false,
      dynamicCardComponent: "blank-card",
      weekType: "",
      data: { default: {}, separated: {} },
    };
  },
  methods: {
    goBack() {
      console.log(this.data);
      if (!this.isSeparated) {
        this.dynamicCardComponent = "blank-card";
        return;
      }
      this.showBaseCard = false;
    },
  },
  computed: {
    showBaseCard: {
      get() {
        return this.showCard;
      },
      set(value) {
        if (!this.isSeparated) {
          this.dynamicCardComponent = "empty-card";
        }

        this.showCard = value;
      },
    },
  },
  watch: {
    isSeparated(newValue, oldValue) {
      this.showCard = false;

      if (newValue) {
        this.dynamicCardComponent = "sep-blank-card";
        return;
      }

      if (!_.isEmpty(this.data["default"]) && !newValue) {
        this.dynamicCardComponent = "empty-card";
        return;
      }

      this.dynamicCardComponent = "blank-card";
    },
    weekType(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    data() {
      console.log(this.data);
    },
  },
};
</script>

<style scoped>
</style>