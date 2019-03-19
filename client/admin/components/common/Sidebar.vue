<template>
  <div class="main-drawer">
    <v-navigation-drawer
      :value="drawer"
      @input="val => $emit('update:drawer', val)"
      fixed
      clipped
      app
      class="grey lighten-4">
      <v-list dense class="grey lighten-4 pt-4">
        <v-list-tile :to="{ name: 'users' }" exact>
          <v-list-tile-action><v-icon>mdi-contacts</v-icon></v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: { type: Boolean, default: true }
  }
};
</script>

<style lang="scss">
.main-drawer .v-navigation-drawer__border {
  display: none;
}
</style>
