const str = new URL("https://github.com/search?q=search1223");
if (str.pathname === "/search") {
    console.log("Welcome to the search page!");
} else {
    console.log("Invalid URL!");
}
