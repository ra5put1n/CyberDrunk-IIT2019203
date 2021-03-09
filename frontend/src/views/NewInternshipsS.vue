<template>
  <div class="Dashboard">
    <v-app id="inspire">

      <v-navigation-drawer v-model="drawer" app>

        <template>
          <v-list>
            <v-list-item class="mb-10 mt-10 d-flex justify-center">
              <v-icon x-large>mdi-account-box-multiple</v-icon>
            </v-list-item>
            <v-list-item-title class="title" align="center">
              TEZ
            </v-list-item-title>
            <v-list-item-subtitle align="center">
              IIT2019220@iiita.ac.in
            </v-list-item-subtitle>

            <v-list-item-group v-model="newitem" color="primary">
              <v-list-item v-for="(item, i) in sideitems" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </template>

      </v-navigation-drawer>


      <v-container
          class="py-8 px-6"
          fluid
      >

        <v-card>
          <v-col cols="12">

            <v-card
                color="#385F73"
                dark
            >
              <v-card-title class="headline">
                Announcements
              </v-card-title>
            </v-card>
          </v-col>

          <v-list two-line>
            <template >
              <v-list-item v-for="(item, i) in announcements" :key="i">
                <v-icon>
                  mdi-arrow-right-bold
                </v-icon>
                <v-list-item-content>
                  <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider
                  v-if="n !== announcements.size"
                  :key="`divider-${n}`"
                  inset
              ></v-divider>
            </template>
          </v-list>
        </v-card>





      </v-container>

      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row dense>
          <v-col cols="12">

            <v-card
                color="#385F73"
                dark
            >
              <v-card-title class="headline">
                New Internships
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="6"
          >
            <v-card
                :color="item.color"
                dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                      class="headline"
                      v-text="item.title"
                  ></v-card-title>

                  <v-card-text>


                    <div class="font-weight-bold">
                      {{item.comp}}
                    </div>

                    <div>Pay: {{item.pay}}</div>
                    <div>Duration: {{item.duration}}</div>
                    <div> {{item.text}}</div>
                  </v-card-text>
                  <v-card-actions>


                    <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                    >
                      Apply
                    </v-btn>
                  </v-card-actions>
                </div>


              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row dense>
          <v-col cols="12">

            <v-card
                color="#385F73"
                dark
            >
              <v-card-title class="headline">
                Old Internships
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
              v-for="(item, i) in oitems"
              :key="i"
              cols="6"
          >
            <v-card
                :color="item.color"
                dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                      class="headline"
                      v-text="item.title"
                  ></v-card-title>

                  <v-card-text>


                    <div class="font-weight-bold">
                      {{item.comp}}
                    </div>

                    <div>Application: {{item.apply}}</div>
                    <div> {{item.text}}</div>
                  </v-card-text>

                </div>


              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: ['Announcements', 'New Internships','My Internships'],

    arrayEvents: null,
    date2: new Date().toISOString().substr(0, 10),
    selected: [2],
    selected1: [1],
    drawer: null,
    selectedItem: 1,
    announcements: [
      {text:'Amazon intern start'},
      {text:'Krihna Buys coffee'},
      {text:'FB opens'}

    ],
    nis: [
      {text:'Amazon Intern , 2 months'},
      {text:'Krihna Buys coffee'},
      {text:'FB opens'}

    ],
    sideitems: [
      { text: 'DASHBOARD', icon: 'mdi-view-dashboard' },
      { text: 'Profile', icon: 'mdi-account-circle' },
      { text: 'Internships', icon: 'mdi-account-search' },
      { text: 'Updates', icon: 'mdi-message' },
      { text: 'Contact Us', icon: 'mdi-help-box' },
      { text: 'Log Out', icon: 'mdi-logout' },

    ],
    items: [
      {
        color: '#1F7087',
        title: 'Amazon Intern',
        comp: 'Amazon.com',
        pay: '50k with equilities',
        duration: '2 months',
        text: 'Apply fast as it is cloasing soon and it will have 16 rounds only 7 openings '
      },
      {
        color: '#952175',
        title: 'Neflix Intern',
        comp: 'Netflix.com',
        pay: '60k with equilities',
        duration: '2 months',
        text: 'Apply slow , veryy slow  '
      },
      {
        color: '#952175',
        title: 'ZOHO Intern',
        comp: 'ZOHO.com',
        pay: '20k with equilities',
        duration: '2 months',
        text: 'Apply slow , veryy slow  '
      },
      {
        color: '#1F7087',
        title: 'Flipkart Intern',
        comp: 'Flipkart.com',
        pay: '30k with equilities',
        duration: '2 months',
        text: 'Apply fast as it is cloasing soon and it will have 16 rounds only 7 openings '
      },
    ],
    oitems: [
      {
        color: '#1F7087',
        title: 'Amazon Intern',
        comp: 'Amazon.com',
        apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
      {
        color: '#952175',
        title: 'Neflix Intern',
        comp: 'Netflix.com',
        apply: 'Selected',
        text: ' Join in few days'
      },
      {
        color: '#952175',
        title: 'ZOHO Intern',
        comp: 'ZOHO.com',
        apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
      {
        color: '#1F7087',
        title: 'Flipkart Intern',
        comp: 'Flipkart.com',
        apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
    ],
  }),
}
</script>