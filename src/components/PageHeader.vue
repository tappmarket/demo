<script setup>
import { ref, watch } from 'vue';
import { getEl } from '@/utils';

defineOptions({
  name: 'PageHeader'
});

const scrollIntoView = (selector) => {
  menuStatus.value = false;
  setTimeout(() => getEl(selector).scrollIntoView(), 50);
};

const menulist = [
  {
    name: 'HOME',
    to: '/',
    event() {
      menuStatus.value = false;
    }
  },
  {
    name: 'PRODUCTS',
    to: '/products',
    event: () => scrollIntoView('#products')
  },
  {
    name: 'STORES',
    to: '/stores',
    event: () => scrollIntoView('#stores')
  },
  { name: 'ENQUIRY', to: '/enquiry', event: () => scrollIntoView('#enquiry') }
];

const menuStatus = ref(false);
function openMenu(e) {
  menuStatus.value = !menuStatus.value;
}

const body = getEl('body');
watch(menuStatus, (status) => {
  if (status) {
    body.style.overflow = 'hidden';
  } else {
    body.style = '';
  }
});
</script>

<template>
  <!-- header -->
  <header class="header">
    <!-- logo -->
    <router-link to="/">
      <img class="logo" src="@/assets/image/logo.png" />
    </router-link>
    <!-- menu -->
    <nav class="menu">
      <router-link
        v-for="menu in menulist"
        :key="menu.name"
        :to="menu.to"
        class="menu-item"
        active-class="active"
        @click="menu.event"
      >
        <span>{{ menu.name }}</span>
      </router-link>
    </nav>
    <!-- menu mobile -->
    <div class="menu-mobile-layout">
      <ul class="menu-icon" :class="{ open: menuStatus }" @click="openMenu">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <nav class="menu-mobile" :class="{ show: menuStatus }">
        <router-link
          v-for="menu in menulist"
          :key="menu.name"
          :to="menu.to"
          class="menu-item"
          active-class="active"
          @click="menu.event"
        >
          <span>{{ menu.name }}</span>
        </router-link>
      </nav>
      <div class="menu-mask" :class="{ show: menuStatus }" @click="menuStatus = false"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  --header-height: 6.67vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0.93vw 8.53vw;
  background-color: #fff;

  @include respond-to('phone') {
    --header-height: 13.33vw;
    position: relative;
  }

  .logo {
    height: 5.6vw;

    @include respond-to('phone') {
      height: 10.67vw;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    column-gap: 3.6vw;
    font-size: 1.07vw;
    font-family: 'PingFangSC-Medium', 'PingFang SC';
    font-weight: 500;
    line-height: 1.07vw;

    @include respond-to('phone') {
      display: none;
    }

    .menu-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8vw 0;
      cursor: pointer;

      &::before {
        content: '';
        width: 100%;
        height: 0.27vw;
        margin-bottom: 0.53vw;
        background-color: #000;
        opacity: 0;
        transition: opacity 0.24s ease-in;
      }
      &:hover,
      &.active {
        &::before {
          opacity: 1;
        }
      }
    }
  }

  .menu-mobile-layout {
    display: none;

    @include respond-to('phone') {
      display: unset;

      .menu-icon {
        --menu-icon-size: 3px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 8.53vw;
        height: 6.13vw;
        cursor: pointer;

        & li {
          width: 100%;
          height: var(--menu-icon-size);
          border-radius: 0.8vw;
          background-color: #000;
          transition: opacity 0.24s ease, transform 0.24s ease;
        }

        &.open {
          justify-content: center;

          & li {
            width: 80%;
          }

          & li:nth-child(1) {
            transform: translateY(var(--menu-icon-size)) rotateZ(45deg);
          }

          & li:nth-child(2) {
            opacity: 0;
          }

          & li:nth-child(3) {
            transform: translateY(calc(-1 * var(--menu-icon-size))) rotateZ(-45deg);
          }
        }
      }

      .menu-mask {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: calc(100vh - var(--header-height));
        transform: translateY(var(--header-height));
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 5;

        &.show {
          display: unset;
        }
      }

      .menu-mobile {
        overflow: hidden;
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background-color: #fff;
        font-family: 'PingFangSC-Medium', 'PingFang SC';
        font-size: 3.2vw;
        font-weight: 500;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.24s ease;
        z-index: 10;

        &.show {
          transform: scaleY(1);
        }

        .menu-item {
          display: flex;
          align-items: center;
          height: 9.87vw;
          padding-left: 3.2vw;
          border-top: 0.13vw solid rgba(0, 0, 0, 0.5);

          &.active {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
}
</style>
