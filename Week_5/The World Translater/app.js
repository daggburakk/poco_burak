function helloWorld(language_code) {
    const languages = {
        "en": "Hello, World",
        "es": "Hola!!",
        "de": "Gruetzi!",
        "fr": "Bonjour!"
    };
    return languages[language_code];
}


const supported_languages = ["en", "es", "de", "fr"];
supported_languages.forEach(lang => {
    console.log(`${lang}: ${helloWorld(lang)}`);
});