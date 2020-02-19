import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

const API = "http://192.168.1.11:5000/cine/movie";

charts(FusionCharts);

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
        peliculas: [],
    };
}
  render() {
    const {peliculas} = this.state;
    const datos = {
      chart: {
        caption: "Porcentaje de Ventas",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
          "<b>$percentValue</b> recaudado por <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "candy"
      },
      data: [{
        label:'Lolipop',
        value:'5300'
      },{
        label:'Candy',
        value:'18000'
      }      
      ]
    };
    const chartConfigs = {
      type: 'pie2d',
      dataSource: datos,
    };
    return (
      <ReactFusioncharts
      {...chartConfigs}
      />
    );
  }
}