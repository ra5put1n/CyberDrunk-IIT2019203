<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new owner</h2>
          <form>
            <!-- Name Input -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input class="a-input-text" v-model="name" style="width: 100%" />
            </div>

            <!-- About Input -->
            <div class="a-spacing-top-medium">
              <label>About</label>
              <input class="a-input-text" v-model="about" style="width: 100%" />
            </div>

            <!-- Photo File
            <div class="a-spacing-top-medium">
              <label style="margin-botton: 0px;">Add Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" @change="onFileSelected" />
                  <p style="margin-top: -70px">{{ fileName }}</p>
                </label>
              </div>
            </div>
-->
            <!-- Submit Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddOwner"
                    >Add owner</span
                  >
                </span>
              </span>
            </div>
          </form>

          <br />
          <ul class="list-group-item">
            <li v-for="owner in owners" :key="owner._id">{{ owner.name }}</li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/owners");

      return {
        owners: response.owners
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      name: "",
      about: ""
      //selectedFile: null,
      //fileName: ""
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },

    async onAddOwner() {
      try {
        let data = {
          name: this.name,
          about: this.about
        };
        //data.append("photo", this.selectedFile, this.selectedFile.name);

        let response = await this.$axios.$post(
          "http://localhost:3000/api/owners",
          data
        );

        this.owners.push({ name: this.name });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
