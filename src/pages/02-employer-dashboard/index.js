var presets = window.chartColors;
var utils = Samples.utils;
//
var data = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
			backgroundColor: "rgba(9,238,186)",
			borderColor: "rgba(9,238,186)",
			data: [6, 4, 9, 5, 9, 1, 20, 10, 12, 11, 4, 4],
			borderWidth: 3,
			label: "2019",
			pointRadius: 0,
			fill: false,
		},
		{
			backgroundColor: "rgb(3,174,254)",
			borderColor: "rgb(3,174,254)",
			borderWidth: 3,
			data: [17, 12, 27, 38, 19, 11, 9, 15, 29, 10, 7, 12],
			label: "2020",
			fill: false,
			pointRadius: 0,
		},
	],
};

var options = {
	maintainAspectRatio: false,
	spanGaps: false,
	elements: {
		line: {
			tension: 0.000001,
		},
	},
	responsive: true,
	tooltips: {
		mode: "index",
		intersect: true,
	},
	legend: {
		display: false,
		position: "bottom",
	},
	scales: {
		yAxes: [{
			gridLines: {
				drawBorder: false,
			},
			stacked: true,
			ticks: {
				padding: 10,
			},
		}, ],
		xAxes: [{
			gridLines: {
				display: false,
			},
			ticks: {
				padding: 1,
			},
		}, ],
	},
};

var chart = new Chart("myChart", {
	type: "line",
	data: data,
	options: options,
});
document.getElementById("js-legend1").innerHTML = chart.generateLegend();

// Chart 2
Chart.defaults.global.defaultFontSize = "9";
var data2 = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
			backgroundColor: "rgba(9,238,186)",
			borderColor: "rgba(9,238,186)",
			data: [6, 4, 9, 5, 9, 1, 20, 10, 12, 11, 4, 4],
			type: "line",
			borderWidth: 3,
			label: "Candidates",
			pointRadius: 0,
			fill: false,
		},
		{
			backgroundColor: "rgb(3,174,254)",
			// borderColor: "white",
			// borderWidth: 2,
			type: "bar",
			data: [17, 12, 27, 38, 19, 11, 9, 15, 29, 10, 7, 12],
			barPercentage: 0.5,
			// barThickness: 6,
			// maxBarThickness: 8,
			minBarLength: 10,
			label: "Job Posting",
			fill: false,
		},
	],
};

var options2 = {
	maintainAspectRatio: false,
	spanGaps: false,
	elements: {
		line: {
			tension: 0.000001,
		},
	},
	tooltips: {
		mode: "index",
		intersect: true,
	},
	legend: {
		display: false,
		position: "bottom",
	},
	scales: {
		yAxes: [{
			gridLines: {
				drawBorder: false,
			},
			stacked: true,
			// autoSkipPadding: 1,
			ticks: {
				padding: 10,
			},
		}, ],
		xAxes: [{
			gridLines: {
				display: false,
			},
			ticks: {
				padding: 1,
			},
			stacked: true,
		}, ],
	},
};

var chart = new Chart("myChart2", {
	data: data2,
	options: options2,
});
document.getElementById("js-legend2").innerHTML = chart.generateLegend();

// Chart 3
var data = [{
	backgroundColor: [
		"#00aaf7",
		"#e5eaf0",
		"#00e9b4",
		"#a4f7e5",
		"#a3e0fc",
	],
	data: [44.52, 3.25, 6.68, 11.13, 34.42],
	borderColor: "#fff",
	label: "Dataset 1",
}, ];
var options = {
	legend: {
		display: false,
		position: "bottom",
		labels: {
			boxWidth: 5,
			boxHeight: 5,
		},
	},
	tooltips: {
		enabled: true,
	},
	plugins: {
		datalabels: {
			formatter: (value, ctx) => {
				let datasets = ctx.chart.data.datasets;

				if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
					let sum = datasets[0].data.reduce((a, b) => a + b, 0);
					let percentage = Math.round((value / sum) * 100) + "%";
					return percentage;
				} else {
					return percentage;
				}
			},
			color: "#000",
		},
		labels: {
			render: "percentage",
			arc: true,
			position: "border",
		},
	},
};
var ctx = document.getElementById("myChart3").getContext("2d");
var myChart = new Chart(ctx, {
	type: "pie",
	data: {
		datasets: data,
		labels: ["Director", "Manager", "Suppervisor", "Team leader", "Staff"],
	},
	options: options,
});
document.getElementById("js-legend").innerHTML = myChart.generateLegend();
// Chart 4
