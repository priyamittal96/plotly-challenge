function buildMetadata(sample) {
     
}

function buildCharts(sample){
    d3.json("../samples.json").then(function(data){
        var samples = data.samples;
        var resultsArray = samples.filter(function(data){
            return data.id === sample; 
        })
        var result = resultsArray[0];

    })
}


function init() {
    console.log("Hello World!");

    // Reference to the dropdown selection element
    var selector = d3.select("#selDataset")

    // Use list of sample names to populate selector
    d3.json("../samples.json").then(function(data) {
        console.log(data);
        var sampleNames = data.names;

        sampleNames.forEach(function(name) {
            selector
            .append("option")
            .text(name)
            .property("value", name)
        })

        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);

    })
}


// Initialize dahshboard
init()