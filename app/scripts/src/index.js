import echarts from "../plugins/echarts";

// init echarts
const testChart = echarts.init(document.getElementById("main"));
testChart.setOption({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [{
    data: [],
    type: "line"
  }]
});

// open WebSocket connection
const socket = new WebSocket("ws://localhost:3141");

// update line
socket.onmessage = ({data}) => {
  testChart.setOption({
    series: [{
      data: JSON.parse(data)
    }]
  });
};
