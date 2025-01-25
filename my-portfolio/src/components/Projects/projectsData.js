import Witch1942 from '../../assets/images/projects/project2.gif'
import Witch1942Logo from '../../assets/images/project-logos/1942-Witch-Logo.png'

import Abenson from "../../assets/images/projects/project3.png"
import AbensonLogo from "../../assets/images/project-logos/abenson-logo.png"

import GenGoLogo from "../../assets/images/project-logos/GenGo-Otaku-Logo.png"

import MeTubeLogo from "../../assets/images/project-logos/MeTube-logo.png"

import NexaMartLogo from "../../assets/images/project-logos/Nexa-Mart-Logo.png"

const projectArr = [
    {
        name: "1942 Witch 魔女",
        logo: Witch1942Logo,
        img: Witch1942,
        bg_color: "black",
        theme:"dark",
        desc: "A game inspired by the 1942 game. It's made with Vanilla JS and Socket.IO",
        link: "https://youtu.be/2MOXbADQeW0",
    },

    {
        name: "Abenson Clone",
        logo: AbensonLogo,
        img: AbensonLogo,
        bg_color: "#1E22AA",
        theme:"dark",
        desc: "Exam of Village88 to clone Abensons Landing page with HTML & CSS",
        link: "https://youtu.be/YSdIg5AyKc4",
    },

    {
        name: "言語・Otaku",
        logo: GenGoLogo,
        img: "",
        bg_color: "#212529",
        theme:"dark",
        desc: "Anime List inspired by MyAnimeList and is made with NodeJS, MongoDB, React, Redux, and axios",
        link: "https://youtu.be/UMGeOVGAk2I",
    },

    {
        name: "NexaMart",
        logo: NexaMartLogo,
        img: "",
        bg_color: "#F1F6F9",
        theme:"light",
        desc: "Capstone Project for Village88 made with Ruby on Rails",
        link: "https://youtu.be/Z_-aiM2y9WI",
    },

    {
        name: "MeTube",
        logo: MeTubeLogo,
        img: "",
        bg_color: "#1D1D1D",
        theme:"dark",
        desc: "Project to make a simplified clone of Youtube by using YoutubeAPI made with React and axios",
        link: "https://youtu.be/YXiSDCGPVzo",
    },
]

export default projectArr