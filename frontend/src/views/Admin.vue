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
								<v-list-item v-for="(item, i) in sideitems" :key="i" @click="selected2 = i">
									<v-list-item-icon>
										<v-icon v-text="item.icon"></v-icon>
									</v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title v-text="item.text" @click="selected2 = i"></v-list-item-title>
                                         
                                    </v-list-item-content>
								</v-list-item>
							</v-list-item-group>
						</v-list>
					</template>
				
			</v-navigation-drawer>

        <div v-if="selected2 === 0" >
        <v-container>
        <v-row dense>
        <v-col cols="6">
        <v-card color="#ffff" >
       
            <v-card>      
            <v-card color="#385F73" dark>
              <v-card-title class="headline">
               Announcements
              </v-card-title>
            </v-card>
            <v-card v-for="(item, i) in announcements" :key="i" cols="6">
                <v-card-title>
                    <v-icon>mdi-arrow-right-bold</v-icon> 
                    {{ item.text}}
                </v-card-title>
            </v-card>
            </v-card>
            
        </v-card>
        </v-col>
        <v-col cols="6">
        <v-card color="#ffff" >
       
            <v-card>      
            <v-card color="#385F73" dark>
              <v-card-title class="headline">
               Announcements
              </v-card-title>
            </v-card>
            <v-card v-for="(item, i) in announcements" :key="i" cols="6">
                <v-card-title>
                    <v-icon>mdi-arrow-right-bold</v-icon> 
                    {{ item.text}}
                </v-card-title>
            </v-card>
            </v-card>
            
        </v-card>
        </v-col>
        </v-row>
        </v-container>
      </div>
     
     
     
     
      <div v-if="selected2 === 2">
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
      </div>

 <div v-if="selected2 === 1">
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
              Profile
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            v-for="(item, i) in pitems"
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
        
  
       
      </v-card-text>
                  
                </div>
  
               
              </div>
            </v-card>
          </v-col>
        </v-row>
</v-container>
    </div>

      <div v-if="selected2 === 3">
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
    </div>

   

     <div v-if="selected2 === 4">
<v-container
        class="py-8 px-6"
        fluid
      >
         <v-row dense>
                <v-col cols="12">
                   
            <v-card
              color="#E65100"
              dark
            >
              <v-card-title class="headline">
               Study Material
                 <v-spacer></v-spacer>
               <v-text-field
          hide-details
          single-line
        ></v-text-field>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
              </v-card-title>
              
            </v-card>
          </v-col>
          <v-col
            v-for="(item, i) in sitems"
            :key="i"
            cols="6"
          >
            <v-card class="mx-auto" :color="item.color">
      <v-card-text>
        
        <p class="display-1 text--primary">
          {{item.title}}
        </p>
        <p class="title text--primary">
          by {{item.auth}}
        </p>
        
       
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
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
    data: () => ({
      cards: ['Announcements', 'New Internships','My Internships'],
      
      arrayEvents: null,
      selected2: 0,
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
        { text: 'Dashboard', icon: 'mdi-view-dashboard' },
        { text: 'Profile', icon: 'mdi-account-circle' },
        { text: 'Internships', icon: 'mdi-account-search' },
        { text: 'Search', icon: 'mdi-account-search' },
        { text : 'Prepare' , icon: 'mdi-bookshelf'},
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
     phitems: [
      {
        color: '#1F7087',
        title: 'Akshat Agrawal',
        email: 'akshat22@gmail.com',
        phone: '+91-9163883910',
        },
      {
        color: '#952175',
        title: 'Divyatez',
        email: 'Divyatez22@gmail.com',
        phone: '+91-91653883910',
      },
      {
        color: '#952175',
        title: 'Krishna Kaipa',
        email: 'Kri@gmail.com',
        phone: '+91-9185883910',
      },
      {
        color: '#1F7087',
        title: 'Deepak Agrawal',
        email: 'aksdljeil22@gmail.com',
        phone: '+91-9163883910',
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
    pitems: [
      {
        color: '#1F7087',
        title: 'Name',
        comp: 'Amazon.com',
        apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
      {
        color: '#952175',
        title: 'Roll',
        comp: 'Netflix.com',
        apply: 'Selected',
        text: ' Join in few days'
      },
      {
        color: '#952175',
        title: 'CGPA',
        comp: 'ZOHO.com',
         apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
      {
        color: '#1F7087',
        title: 'Contact',
        comp: 'Flipkart.com',
         apply: 'Active Stage 2',
        text: ' Next interview in 2 days'
      },
    ],
    sitems: [
      {
        color: '#FFF59D',
        title: 'Array Traversal',
        text: 'Amazon.com',
        auth: 'Akshat'
        },
      {
          color: '#F9A825',
        title: 'Array Reverse Traversal',
        text: 'Traverse it backward <br> Then traverse it forward',
        auth: 'Akshat'
      },
      {
          color: '#F9A825',
        
        title: 'Array Reverse Traversal',
        text: 'Traverse it backward <br> Then traverse it forward',
        auth: 'Akshat'
      },
      {
          color: '#FFF59D',
        title: 'Array Reverse Traversal',
        text: 'Traverse it backward <br> Then traverse it forward',
        auth: 'Akshat'
      },
    ],
    }),
  }
</script>