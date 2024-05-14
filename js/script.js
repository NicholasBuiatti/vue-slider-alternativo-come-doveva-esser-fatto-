const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: "img/01.webp",
                    title: "Marvel's Spiderman Miles Morale",
                    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                    image: "img/02.webp",
                    title: "Ratchet & Clank: Rift Apart",
                    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                    image: "img/03.webp",
                    title: "Fortnite",
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: "img/04.webp",
                    title: "Stray",
                    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                    image: "img/05.webp",
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],
            imgAttiva: '',
            timer: '',
            stopInterval: true,
        };
    },
    methods: {
        // blinded(index) {
        //     if (index == this.imgAttiva) {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        activeThumb(index) {
            if (index == this.imgAttiva) {
                return 'active'
            } else {
                return ''
            }
        },
        nextImg() {
            this.imgAttiva++;
            if (this.imgAttiva == 5) {
                this.imgAttiva = 0
            }
        },
        backImg() {
            this.imgAttiva--;
            if (this.imgAttiva == -1) {
                this.imgAttiva = 4
            }
        },
        connectedImg(index) {
            this.imgAttiva = index;
        },
        stop() {
            if (this.stopInterval == true) {
                clearInterval(this.timer)
            }
        },
        play() {
            this.timer = setInterval(() => {
                this.nextImg();
            }, 1000);
        }
    },
    mounted() {

        this.timer = setInterval(() => {
            this.nextImg();
        }, 1000);

        //this.timer = setInterval (this.nextImg, 1000)


    },
}).mount("#app");