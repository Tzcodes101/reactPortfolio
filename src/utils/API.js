export const getAboutInfo = new Promise(function(resolve) {
    setTimeout(() => {
        resolve({
            id: 1,
            text: "My name is Talia Zisman. I am currently enrolled in Columbia University's Full-Stack Web Development Bootcamp. I am skilled in HTML, CSS, Javascript, MySQL, MongoDB, Mongoose, Node.js, Express, and React. Through group-work, I have learned git workflow and team collaboration. Examples of my assignments and projects can be found on my portfolio page, as well as on my GiHub page as pinned repositories. In my work, I strive to be concise and cleanr for a beautiful and effective application.",
            email: "tzcodes101@gmail.com",
            phone: "(518) - 817 - 7206",
            resume: "https://drive.google.com/file/d/10m9lv4HtVC2qcNfRYYMJRT0eyHYZNTCU/view?usp=sharing",
            github: "https://github.com/Tzcodes101",
            linkedin: "https://www.linkedin.com/in/talia-zisman-4b758a140/"
        })
    }, 1000)
})