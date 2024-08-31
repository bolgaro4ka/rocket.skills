<script setup lang="ts">

import {LayoutSider, Menu, SubMenu, MenuItem,Breadcrumb, Layout, type MenuTheme } from 'ant-design-vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const props=defineProps({
    theme: {
        default: 'light',
        type: String
    }
}
)

const currentTheme = ref(window.localStorage.getItem('theme') || props.theme);


const changeTheme = () => {
    if (currentTheme.value === 'light') {
        currentTheme.value = 'dark';
    } else {
        currentTheme.value = 'light';
    }
    window.localStorage.setItem('theme', currentTheme.value);
}


</script>

<template>
    <div style="min-height: 100vh;" class="menu">
        <LayoutSider v-model:collapsed="collapsed" collapsible :theme="currentTheme">
          <div class="logo" />
            <Menu v-model:selectedKeys="selectedKeys" :theme="currentTheme" mode="inline">
                <MenuItem key="1">
                  <RouterLink to="/">
                    <pie-chart-outlined />
                    <span>Главная</span>
                  </RouterLink>
                </MenuItem>
                <MenuItem key="2">
                  <RouterLink to="/about">
                  <desktop-outlined />
                  <span>О нас</span>
                </RouterLink>
                </MenuItem>
            <SubMenu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  <span>User</span>
                </span>
              </template>
              <MenuItem key="3">Tom</MenuItem>
              <MenuItem key="4">Bill</MenuItem>
              <MenuItem key="5">Alex</MenuItem>
            </SubMenu>
            <SubMenu key="sub2">
              <template #title>
                <span>
                  <team-outlined />
                  <span>Team</span>
                </span>
              </template>
              <MenuItem key="6">Team 1</MenuItem>
              <MenuItem key="8">Team 2</MenuItem>
            </SubMenu>
            <MenuItem key="9">
              <file-outlined />
              <span>File</span>
            </MenuItem>
            <MenuItem key="10" @click="changeTheme">
                <file-outlined />
                <span>Change Theme</span>
            </MenuItem>
          </Menu>
        </LayoutSider>
    </div>

</template>



<style scoped lang="scss">
.menu {
    display: flex;

}
</style>