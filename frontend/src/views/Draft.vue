<template>
  <div class="draft" v-if="is_data_fetched">
    <DraftComponent/>
    <div class="ma-12">
    <Form/></div>
  </div>
</template>

<script>
import Form from '../components/Form'
import DraftComponent from '../components/DraftComponent'

export default {
  name: "draft",
  created() {
    fetch(
      "https://restcountries.eu/rest/v2/all"
    )
      .then(response => response.json())
      .then(result => {
        this.countries = result;
        this.is_data_fetched = true;
      });
  },
  computed: {
  },
  methods: {
  },
  components: {
    Form,
    DraftComponent
  },
  data() {
    return {
      active: false,
      formation: [1, 4, 4, 2],
      is_data_fetched: false
    };
  }
};
</script>