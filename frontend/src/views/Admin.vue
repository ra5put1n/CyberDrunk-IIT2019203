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
              <v-list-item
                  v-for="(item, i) in sideitems"
                  :key="i"
                  @click="selected2 = i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                      v-text="item.text"
                      @click="selected2 = i"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </template>
      </v-navigation-drawer>

      <div v-if="selected2 === 0">
        <v-container>
          <v-row dense>
            <v-col cols="6">
              <v-card color="#ffff">
                <v-card>
                  <v-card color="#385F73" dark>
                    <v-card-title class="headline">
                      Highlights
                      <v-spacer></v-spacer>
                      <label for="">
                        <input
                            id="add_item"
                            type="text"
                            placeholder="Add task"
                            autofocus
                            ref="addtask"
                            class="white dark focus: border-solid border-2 px-2 py-1 w-full mb-4 hover:bg-white"
                            @keyup.enter="addItem"
                        />
                      </label>
                    </v-card-title>
                  </v-card>
                  <v-card
                      v-for="(item, index) in anitems"
                      :key="index"
                      cols="6"
                  >
                    <v-card-title>
                      <v-icon>mdi-arrow-right-bold</v-icon>

                      <span
                          v-if="!item.edit"
                          class="px-2 py-1 mr-2 w-40 border-transparent border-solid border-2 hover:border-black"
                          @click="enableEdit(index)"
                      >{{ item.title }}</span
                      >
                      <input
                          v-else
                          type="text"
                          v-model="item.title"
                          :ref="'task'"
                          @keyup.enter="disableEdit(index)"
                          @blur="disableEdit(index)"
                          class="px-2 py-1 mr-2 w-40 border-black border-transparent focus:border-black border-solid border-2 focus:bg-white"
                      />
                      <v-spacer></v-spacer>
                      <button
                          class="border-black border-solid border-2 bg-orange-400 hover:bg-black hover:text-orange-400 focus:bg-black focus:text-orange-400 px-2 py-1 mr-2"
                          @click="removeItem(index)"
                      >
                        Delete
                      </button>
                      <button
                          class="border-black border-solid border-2 bg-blue-400 hover:bg-black hover:text-blue-400 focus:bg-black focus:text-blue-400 px-2 py-1"
                          @click="enableEdit(index)"
                      >
                        Edit
                      </button>
                    </v-card-title>
                  </v-card>
                </v-card>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card color="#ffff">
                <v-card>
                  <v-card color="#385F73" dark>
                    <v-card-title class="headline">
                      Announcements
                      <v-spacer></v-spacer>
                      <label for="">
                        <input
                            type="text"
                            placeholder="Add task"
                            autofocus
                            ref="addtask"
                            class="white dark focus: border-solid border-2 px-2 py-1 w-full mb-4 hover:bg-white"
                            @keyup.enter="addItem1"
                        />
                      </label>
                    </v-card-title>
                  </v-card>
                  <v-card v-for="(item, index) in announ" :key="index" cols="6">
                    <v-card-title>
                      <v-icon>mdi-arrow-right-bold</v-icon>

                      <span
                          v-if="!item.edit"
                          class="px-2 py-1 mr-2 w-40 border-transparent border-solid border-2 hover:border-black"
                          @click="enableEdit1(index)"
                      >{{ item.title }}</span
                      >
                      <input
                          v-else
                          type="text"
                          v-model="item.title"
                          :ref="'task'"
                          @keyup.enter="disableEdit1(index)"
                          @blur="disableEdit1(index)"
                          class="px-2 py-1 mr-2 w-40 border-black border-transparent focus:border-black border-solid border-2 focus:bg-white"
                      />
                      <v-spacer></v-spacer>
                      <button
                          class="border-black border-solid border-2 bg-orange-400 hover:bg-black hover:text-orange-400 focus:bg-black focus:text-orange-400 px-2 py-1 mr-2"
                          @click="removeItem1(index)"
                      >
                        Delete
                      </button>
                      <button
                          class="border-black border-solid border-2 bg-blue-400 hover:bg-black hover:text-blue-400 focus:bg-black focus:text-blue-400 px-2 py-1"
                          @click="enableEdit1(index)"
                      >
                        Edit
                      </button>
                    </v-card-title>
                  </v-card>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
          <p class="error px-2 py-1 rounded" v-if="isError">
            Error!! This task already exists.
          </p>
        </v-container>
      </div>

      <div v-if="selected2 === 1">
        <v-container class="py-8 px-6" fluid>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73" dark>
                <v-card-title class="headline">
                  Internships Database
                  <v-spacer></v-spacer>

                  <div class="search-wrapper">
                    <input type="text" v-model="search" placeholder="Search" />
                    <label
                    ><v-btn icon>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn></label
                    >
                  </div>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col v-for="(item, i) in filteredList3" :key="i" cols="6">
              <v-card :color="item.color" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                        class="headline"
                        v-text="item.title"
                    ></v-card-title>

                    <v-card-text>
                      <div class="font-weight-bold">
                        {{ item.comp }}
                      </div>

                      <div>Pay: {{ item.pay }}</div>
                      <div>Duration: {{ item.duration }}</div>
                      <div>{{ item.text }}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="ml-2 mt-5" outlined rounded small>
                        Close
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="selected2 === 2">
        <v-container class="py-8 px-6" fluid>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73" dark>
                <v-card-title class="headline">
                  Student Database
                  <v-spacer></v-spacer>

                  <div class="search-wrapper">
                    <input
                        type="text"
                        v-model="search"
                        placeholder="Search title.."
                    />
                    <label
                    ><v-btn icon>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn></label
                    >
                  </div>
                </v-card-title>
              </v-card>
            </v-col>

            <v-col
                v-for="(item, index) in filteredList2"
                :key="index"
                cols="12"
            >
              <v-card class="mx-auto" :color="item.color">
                <v-card-text>
                  <div class="title text--primary">
                    Name: {{ item.Name }} || Roll: {{ item.Roll }}

                    <v-btn text color="white " right>
                      Messege
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="selected2 === 3">
        <v-container class="py-8 px-6" fluid>
          <v-row dense>
            <v-col cols="12">
              <v-card color="#385F73" dark>
                <v-card-title class="headline">
                  Study Material
                  <v-spacer></v-spacer>
                  <!--<v-text-field
          hide-details
          single-line
        ></v-text-field>-->
                  <div class="search-wrapper">
                    <input
                        type="text"
                        v-model="search"
                        placeholder="Search title.."
                    />
                    <label
                    ><v-btn icon>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn></label
                    >
                  </div>
                </v-card-title>
              </v-card>
            </v-col>

            <v-col v-for="(item, index) in filteredList" :key="index" cols="6">
              <v-card class="mx-auto" :color="item.color">
                <v-card-text>
                  <p class="display-1 text--primary">
                    {{ item.title }}
                  </p>
                  <p class="title text--primary">by {{ item.auth }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="window.open(item.url)"
                  >
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    addItem: function(e) {
      var value = e.target.value;

      if (value === "") {
        return false;
      }

      if (this.itemExist(value) === true) {
        let repeated = [].filter.call(
            document.getElementsByTagName("span"),
            function(span) {
              return span.textContent === value;
            }
        );
        this.isError = true;
        repeated[0].classList.add("bg-orange-300");
        return false;
      }

      this.isError = false;
      e.target.value = "";
      this.anitems.push({
        title: value,
        edit: false,
      });

      let repeatedClasses = document.querySelectorAll(".bg-orange-300");
      for (let repeatedClass of repeatedClasses) {
        repeatedClass.classList.remove("bg-orange-300");
      }
    },
    removeItem: function(index) {
      this.anitems.splice(index, 1);
      this.$refs.addtask.focus();
    },
    enableEdit: function(index) {
      this.anitems[index].edit = true;
      this.$nextTick(() => {
        let input = this.$refs.task[0];
        input.focus();
      });
    },
    disableEdit: function(index) {
      this.anitems[index].edit = false;
    },
    itemExist: function(value) {
      for (var i = 0; i < this.anitems.length; i++) {
        if (this.anitems[i].title === value) {
          return true;
        }
      }

      return false;
    },
    addItem1: function(e) {
      var value = e.target.value;

      if (value === "") {
        return false;
      }

      if (this.itemExist1(value) === true) {
        let repeated = [].filter.call(
            document.getElementsByTagName("span"),
            function(span) {
              return span.textContent === value;
            }
        );
        this.isError = true;
        repeated[0].classList.add("bg-orange-300");
        return false;
      }

      this.isError = false;
      e.target.value = "";
      this.announ.push({
        title: value,
        edit: false,
      });

      let repeatedClasses = document.querySelectorAll(".bg-orange-300");
      for (let repeatedClass of repeatedClasses) {
        repeatedClass.classList.remove("bg-orange-300");
      }
    },
    removeItem1: function(index) {
      this.announ.splice(index, 1);
      this.$refs.addtask.focus();
    },
    enableEdit1: function(index) {
      this.announ[index].edit = true;
      this.$nextTick(() => {
        let input = this.$refs.task[0];
        input.focus();
      });
    },
    disableEdit1: function(index) {
      this.announ[index].edit = false;
    },
    itemExist1: function(value) {
      for (var i = 0; i < this.announ.length; i++) {
        if (this.announ[i].title === value) {
          return true;
        }
      }

      return false;
    },
  },
  data: () => ({
    search: "",
    cards: ["Announcements", "New Internships", "My Internships"],

    arrayEvents: null,
    selected2: 0,
    date2: new Date().toISOString().substr(0, 10),
    selected: [2],
    selected1: [1],
    drawer: null,
    selectedItem: 1,

    nis: [
      { text: "Amazon Intern , 2 months" },
      { text: "Krihna Buys coffee" },
      { text: "FB opens" },
    ],
    sideitems: [
      { text: "Dashboard", icon: "mdi-view-dashboard" },
      { text: "Internship Database", icon: "mdi-account-search" },
      { text: "Student Database", icon: "mdi-account-search" },
      { text: "Material", icon: "mdi-bookshelf" },
      { text: "Log Out", icon: "mdi-logout" },
    ],
    items: [
      {
        color: "#1F7087",
        title: "Amazon Intern",
        comp: "Amazon.com",
        pay: "50k with equilities",
        duration: "2 months",
        text:
            "Apply fast as it is cloasing soon and it will have 16 rounds only 7 openings ",
      },
      {
        color: "#952175",
        title: "Neflix Intern",
        comp: "Netflix.com",
        pay: "60k with equilities",
        duration: "2 months",
        text: "Apply slow , veryy slow  ",
      },
      {
        color: "#952175",
        title: "ZOHO Intern",
        comp: "ZOHO.com",
        pay: "20k with equilities",
        duration: "2 months",
        text: "Apply slow , veryy slow  ",
      },
      {
        color: "#1F7087",
        title: "Flipkart Intern",
        comp: "Flipkart.com",
        pay: "30k with equilities",
        duration: "2 months",
        text:
            "Apply fast as it is cloasing soon and it will have 16 rounds only 7 openings ",
      },
    ],

    sitems: [
      {
        color: "#FFF59D",
        title: "Jumping Question",
        text: "Amazon.com",
        auth: "Akshat",
        url: "www.google.com",
      },
      {
        color: "#F9A825",
        title: "For loop",
        text: "Traverse it backward <br> Then traverse it forward",
        auth: "Akshat",
        url: "www.facebook.com",
      },
      {
        color: "#F9A825",

        title: "Array Reverse Traversal",
        text: "Traverse it backward <br> Then traverse it forward",
        auth: "Akshat",
        url: "www.google.com",
      },
      {
        color: "#FFF59D",
        title: "Forward Traversal",
        text: "Traverse it backward <br> Then traverse it forward",
        auth: "Akshat",
        url: "www.bing.com",
      },
    ],
    ditems: [
      {
        color: "#6096b1",
        Name: "Divyatez",
        Roll: "IIT2019220",
      },
      {
        color: "#6096b1",
        Name: "Deepak",
        Roll: "IIT2019222",
      },
      {
        color: "#6096b1",
        Name: "Krishna",
        Roll: "IIB2019220",
      },
      {
        color: "#6096b1",
        Name: "Akshat",
        Roll: "IIT2019230",
      },
    ],
    anitems: [
      {
        title: "Total Students registered: 200",
        edit: false,
      },
      {
        title: "Students Placed: 180",
        edit: false,
      },
      {
        title: "Total Companies: 120",
        edit: false,
      },
    ],
    announ: [
      {
        title: "Amazon intern begins",
        edit: false,
      },
      {
        title: "Facebook drive ends",
        edit: false,
      },
      {
        title: "Amazon list released",
        edit: false,
      },
    ],
    taskItem: "",
    isError: false,
  }),

  computed: {
    filteredList() {
      return this.sitems.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    filteredList2() {
      return this.ditems.filter((post) => {
        var p = post.Name.toLowerCase().includes(this.search.toLowerCase());
        var q = post.Roll.toLowerCase().includes(this.search.toLowerCase());
        return p + q;
      });
    },
    filteredList3() {
      return this.items.filter((post) => {
        var p = post.title.toLowerCase().includes(this.search.toLowerCase());
        return p;
      });
    },
  },
};
</script>
