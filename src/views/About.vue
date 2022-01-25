<template>
<main>
    <section class="section">
        <div class="container">
            <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/LogoDes.png">
            </figure>
        </div>
        <div class="container">
            <h1 class="title is-1">
                @The Capircorn Dev
            </h1>

            <h2 class="subtitle is-5">
                The Capircorn Dev team welcomes you to our application created with the VUEjs framework, where you can search for your favorite songs by consulting an API and play a sample of it, we invite you to download this project from gitHub
            </h2>

            <github-button href="https://github.com/AlexisBustamante">Follow @CapricornDev</github-button>
        </div>

    </section>

    <v-divider></v-divider>
    <v-card>
        <v-card-title class="indigo white--text text-h5">
            Colaboradores
        </v-card-title>
        <v-row class="pa-4" justify="space-between">
            <v-col cols="5">
                <v-treeview :active.sync="active" :items="items" :load-children="fetchUsers" :open.sync="open" activatable color="warning" open-on-click transition>
                    <template v-slot:prepend="{ item }">
                        <v-icon v-if="!item.children">
                            mdi-account
                        </v-icon>
                    </template>
                </v-treeview>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col class="d-flex text-center">
                <v-scroll-y-transition mode="out-in">
                    <div v-if="!selected" class="text-h6 grey--text text--lighten-1 font-weight-light" style="align-self: center;">

                    </div>
                    <v-card v-else :key="selected.id" class="pt-6 mx-auto" flat max-width="400">
                        <v-card-text>
                            <v-avatar v-if="avatar" size="88">
                                <v-img :src="`https://avataaars.io/${avatar}`" class="mb-6"></v-img>
                            </v-avatar>
                            <h3 class="text-h5 mb-2">
                                {{ selected.name }}
                            </h3>
                            <div class="blue--text mb-2">
                                {{ selected.email }}
                            </div>
                            <div class="blue--text subheading font-weight-bold">
                                {{ selected.username }}
                            </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-row class="text-left" tag="v-card-text">
                            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                Company:
                            </v-col>
                            <v-col>{{ selected.company.name }}</v-col>
                            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                Website:
                            </v-col>
                            <v-col>
                                <a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
                            </v-col>
                            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                                Phone:
                            </v-col>
                            <v-col>{{ selected.phone }}</v-col>
                        </v-row>
                    </v-card>
                </v-scroll-y-transition>
            </v-col>
        </v-row>
    </v-card>
</main>
</template>

<script>
import GithubButton from 'vue-github-button'

const avatars = [
    '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
    '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
    '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
    '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
    '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
]

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
    data: () => ({
        active: [],
        avatar: null,
        open: [],
        users: [],
    }),
    components:{
      GithubButton
    },

    computed: {
        items() {
            return [{
                name: 'Usuarios',
                children: this.users,
            }, ]
        },
        selected() {
            if (!this.active.length) return undefined

            const id = this.active[0]

            return this.users.find(user => user.id === id)
        },
    },

    watch: {
        selected: 'randomAvatar',
    },

    methods: {
        async fetchUsers(item) {
            // Remove in 6 months and say
            // you've made optimizations! :)
            //
            await pause(10)

            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => (item.children.push(...json)))
                .catch(err => console.warn(err))
        },
        randomAvatar() {
            this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
        },
    },
}
</script>

<style lang="scss" scoped>
.title {
    color: black
}
</style>
