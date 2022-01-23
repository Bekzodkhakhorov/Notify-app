<template>
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="message in messages" :key="message.title">
        <td>
          <span>{{ message.title }}</span>
        </td>
      </tr>
    </transition-group>
    <button
      :class="{ btnDisabled: maxLength === 0 }"
      @click="loadMore"
      class="btn btnPrimary"
    >
      Load more
    </button>
  </table>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxLength() {
      return this.$store.getters.getMessageFilter.length;
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMessages").catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 16px 6px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
button {
  display: block;
  width: 70%;
  margin: 25px auto 0 auto;
  &.btnDisabled {
    opacity: 0.2;
    cursor: default;
    
  }
}
</style>