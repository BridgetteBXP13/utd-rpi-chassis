import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import gupta from "../assets/gupta.jpg";
import varun from "../assets/varun.jpg";
import show1 from "../assets/show1.jpg";

/*here we making constant and we will use this constant in about.js, we are exporting it from this file to about.js and in about.js on line 3 pay close attention to how we import, maybe we do this to import the form data as well? keep note */
export const MenuList = [
    {
        image: one,
        name: "Bridgette Bryant",
        work: "Hardware, Obstacle Detection",
        tools: "Python",
        email: "bridgette.bryant99@gmail.com",
        linkedin: "https://www.linkedin.com/in/bridgette-bryant-098938185/"
    },
    {
        image: two,
        name: "Wyatt Kirby",
        work: "Hardware, Obstacle Detection",
        tools: "Python",
        email: "wttkirby@gmail.com",
        linkedin: "https://www.linkedin.com/in/wyatt-kirby-5843b3159"
    },
    {
        image: three,
        name: "Noah",
        work: "Obstacle Detection, Navigation",
        tools: "Python",
        email: "nbc170001@utdallas.edu",
        linkedin: " "
    },
    {
        image: four,
        name: "Dan Abraham",
        work: "Navigation, UI",
        tools: "Flask, React, Python",
        email: "dbraham4@gmail.com",
        linkedin: "https://www.linkedin.com/in/daniel-abraham-43890714b"
    },
    {
        image: five,
        name: "Justin Schwinn",
        work: "Navigation",
        tools: "Python",
        email: "justinsch1029@gmail.com",
        linkedin: "https://www.linkedin.com/in/justin-schwinn-4b4828243/"
    },
    {
        image: six,
        name: "Fernando Torres",
        work: "UI",
        tools: "React, HTML/CSS",
        email: "nandotorresfn@gmail.com",
        linkedin: "https://www.linkedin.com/in/fernando-torres-utd/"
        
    },
    {
        image: gupta,
        name: "Dr. Gopal Gupta",
        work: "UTD Faculty Advisor ",
        tools: " ",
        email: "gopal.gupta@utdallas.edu",
        linkedin: "https://cs.utdallas.edu/people/faculty/gupta-gopal/"
        
    },
    {
        image: varun,
        name: "Varun Nagarajan",
        work: "Technical/Professional Mentor",
        tools: " ",
        email: "",
        linkedin: "https://www.linkedin.com/in/nagarajanvarun/"
        
    },
    {
        image: show1,
        name: "Ro Bert",
        work: "UTD AI Chassis",
        tools: " ",
        email: "ro-bert@aiChassis.com",
        linkedin: "roBertRocks.com"
        
    },

];