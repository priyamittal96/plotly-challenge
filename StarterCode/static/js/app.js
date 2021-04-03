function init() {
    console.log("Hello World!");

    // Reference to the dropdown selection element
    var selector = d3.select("#selDataset")

    // Use list of sample names to populate selector
    d3.json("../samples.json").then(function(data) {
        console.log(data);
    })
}


// Initialize dahshboard
init()