// Sales Chart Configuration
const salesCtx = echarts.init(document.getElementById('salesChart'));
// Specify the configuration items and data for the chart
var option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        bottom: 20,
    },
    series: [
        {
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            padAngle: 3,
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false,
                position: 'center'
            },
            data: [
                { 
                    value: 1048,
                    name: 'Pending', 
                    itemStyle: {
                        color: '#FF8200'
                    }, 
                },
                { 
                    value: 735, 
                    name: 'In Progress', 
                    itemStyle: {
                        color: '#FFB466'
                    }, 
                },
                { 
                    value: 580, 
                    name: 'Completed', 
                    itemStyle: {
                        color: '#FFD2A3'
                    }, 
                },
                { 
                    value: 484, 
                    name: 'Cancelled',
                    itemStyle: {
                        color: '#FFE1C2'
                    }, 
                },
            ]
        }
    ]
};
// Display the chart using the configuration items and data just specified.
salesCtx.setOption(option);



// Customers line Chart Configuration
const customerCtx = echarts.init(document.getElementById('customersChart'));
// Specify the configuration items and data for the chart
var option = {
    grid: {
        top: "1%",
        right: "1%",
        bottom: "8%",
        left: "1%",
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
        type: 'value',
        offset: 'false'
    },
    series: [
        {
            data: [
                {
                    value: 120,
                    itemStyle: {
                      color: '#A78FE6'
                    }
                },
                {
                  value: 200,
                  itemStyle: {
                    color: '#CBE0CC'
                  }
                },
                {
                    value: 150,
                    itemStyle: {
                      color: '#A78FE6'
                    }
                },
                {
                    value: 80,
                    itemStyle: {
                      color: '#CBE0CC'
                    }
                  },
                  {
                    value: 70,
                    itemStyle: {
                      color: '#A78FE6'
                    }
                },
                {
                    value: 110,
                    itemStyle: {
                      color: '#CBE0CC'
                    }
                  },
                  {
                    value: 140,
                    itemStyle: {
                      color: '#A78FE6'
                    }
                },
            ],
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                borderRadius: [20, 20, 0, 0]
            }
        }
    ]
};
// Display the chart using the configuration items and data just specified.
customerCtx.setOption(option);




// Customers line Chart Configuration
const paymentsCtx = echarts.init(document.getElementById('paymentsChart'));
// Specify the configuration items and data for the chart
var option = {
    grid: {
        top: "5%",
        right: "1%",
        bottom: "10%",
        left: "5%",
    },
    legend: {
        data: ['Paid', 'Un-paid'],
        right: 0,
        top: 0,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Paid',
            data: [920, 800, 850, 1100, 950, 890, 1000],
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(93, 72, 245, 0.2)',
                shadowOffsetY: 6
            },
            itemStyle: {
                color: '#725CFF'
            },
        },
        {
            name: 'Un-paid',
            data: [720, 400, 600, 200, 580, 350, 210],
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(49, 194, 246, 0.2)',
                shadowOffsetY: 6
            },
            itemStyle: {
                color: '#31C2F6'
            },
        }
    ]
};
// Display the chart using the configuration items and data just specified.
paymentsCtx.setOption(option);