// Jab pura HTML page load ho jaye, tab yeh function chalega
document.addEventListener("DOMContentLoaded", ()=>{
    // Page ke pehle <h1> element ko select karo
    const heading = document.querySelector("h1");
    // Agar <h1> mila hai to uska color badal do
    if (heading) heading.style.color = "darkred";
    // Console mein message show karo (browser inspect -> console tab)
    console.log("index.js file is running successfully!");
});


//# sourceMappingURL=index.js.map
