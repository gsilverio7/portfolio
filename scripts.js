tailwind.config = {
    darkMode: 'class',
}

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

document.addEventListener("DOMContentLoaded", function () {

    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    // Change the icons inside the button based on previous settings
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        themeToggleLightIcon.classList.remove("hidden");
    } else {
        themeToggleDarkIcon.classList.remove("hidden");
    }


    const themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    });

    const languageToggleBtn = document.getElementById("language-toggle");
    let lang = localStorage.getItem("language") || (navigator.language.startsWith("pt") ? "pt" : "en");

    const greetings = {
        pt: "Olá, eu sou",
        en: "Hi, I'm"
    };

    const title = {
        pt: "Desenvolvedor Web Full Stack",
        en: "Full Stack Web Developer"
    };

    // Function to update text content based on the selected language
    function updateLanguage() {        
        document.getElementById("greetings").innerHTML = greetings[lang];
        document.getElementById("title").innerHTML = title[lang];
    }

    // Set initial language
    updateLanguage();

    languageToggleBtn.addEventListener("click", function () {
        lang = lang === "pt" ? "en" : "pt";
        localStorage.setItem("language", lang);
        updateLanguage();
    });

});