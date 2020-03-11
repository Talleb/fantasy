<template>
  <v-app id="inspire">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1000">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <SelectPlayer></SelectPlayer>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import SelectPlayer from "./SelectPlayer";
export default {
  name: "Modal",
  components: {
    SelectPlayer
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
