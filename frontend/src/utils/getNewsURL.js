function getNewsURL(name){
    return new URL(`../assets/news/${name}`, import.meta.url);

}
export {getNewsURL};