// SVG+D3 margin convention
const margin = {top: 20, right: 30, bottom: 40, left: 20},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// boilerplate for setting up the SVG
let svg = d3.select("#dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

// linearScale

// timeScale

// scaleBand

// use d3 to draw axes based on the scales
// svg.append("g").call(d3.axisBottom(xScale))