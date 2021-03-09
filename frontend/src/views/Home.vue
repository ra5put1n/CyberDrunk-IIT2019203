<template>
  <div class="home grey lighten-4">
    <v-app-bar flat>
      <v-app-bar-title class="grey--text">
        <span class="font-weight-medium ">IIIT-A </span>
        <span class="font-weight-light">Internship Portal</span>



      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="dialog=true">Login</v-btn>

    </v-app-bar>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >

      <v-card>

        <v-card class="elevation-12">
          <v-toolbar dark color="grey">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  name="login"
                  prepend-icon="mdi-person"
                  label="Login"
                  type="text"
              ></v-text-field>
              <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>


          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <!--<v-btn color="primary" to="/">Login</v-btn>-->
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>


    </v-dialog>




    <v-main>
      <v-container>
        <v-row>
          <v-col
              v-for="n in 12"
              :key="n"
              cols="4"
          >
            <v-card height="200" class="grey lighten-2"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
  }),
}
</script>