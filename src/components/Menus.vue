<template>
  <div>
    <el-submenu v-if="menus.children" :index='menus.url'>
          <template slot="title" >
          <i :class="menus.icon"></i>
          <span>{{menus.name}}</span>
           </template>
           <nav-menus v-for="i in menus.children"  :menus='i' :key="i.name" >
             <i :class="i.icon"></i>
          <span>{{i.name}}</span>
           </nav-menus>
    </el-submenu>
    <el-menu-item v-else :index='menus.url'>{{menus.name}}</el-menu-item>
  </div>

</template>

<script>
export default {
    name:'NavMenus',
    props:{
        menus:{
            type:Object,
            require:true,
        }
    }
}
</script>