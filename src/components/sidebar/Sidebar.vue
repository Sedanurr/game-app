<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSideBar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 50 50"
      >
        <path
          d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
        ></path>
      </svg>
    </span>
    <SidebarContent />
  </div>
</template>
<script>
import { collapsed, toggleSideBar, sidebarWidth } from "./state";
import SidebarContent from "./SidebarContent.vue";
export default {
  data() {
    return {
      collapsed,
      toggleSideBar,
      sidebarWidth
    };
  },
  components: {
    SidebarContent
  }
};
</script>
<style scoped>
.sidebar {
  color: black;
  background-color: #ffaac9;

  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.collapse-icon {
  position: relative;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  padding: 0.75em;
  color: white;
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
