
function Graph_viz(data)
{
	this.data = data;
	this.svg = d3.select('body')
				.append('svg')
				.attr('width', 1000)
				.attr('height', 400);
	
	this.rect = null;
	this.redraw();
}

Graph_viz.prototype.redraw = function()
{
	this.svg.selectAll("rect").remove();

	this.rect = this.svg.selectAll('rect')
					.data(this.data)
					.enter()
						.append('rect')
						.attr('width', 1)
						.attr('height', (d) => d * 2)
						.attr('y', (d) => (400 - d * 2))
						.attr('x', (d, i) => i * 5);

}

Graph_viz.prototype.update_data = function(data)
{// updates the data variable of the object 
	this.data = data;
}// update_data