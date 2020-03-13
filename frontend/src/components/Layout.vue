<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-soccer</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="$router.push('/')">
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-stadium</v-icon>
          </v-list-item-action>
            <v-list-item-content @click="$router.push('/Draft')">
            <v-list-item-title>
              Draft
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-run</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="$router.push('/Players')">
            <v-list-item-title>
              Players
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-graph</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="$router.push('/Highscore')">
            <v-list-item-title>
              Highscore
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title @click="$router.push('/')">The Ultimate Draft</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="green" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
};
</script>
