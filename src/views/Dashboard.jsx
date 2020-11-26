/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
//import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <Col md={12}>
              <Card
              plain
                title="Datos Proporcionados por Inteligencia Sanitaria"
                ctTableFullWidth
                ctTableResponsive
                content={
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-note2 text-success" />}
                statsText="Activos"
                statsValue="300"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-note2 text-success" />}
                statsText="Sospechosos"
                statsValue="1.003"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-refresh-2 text-danger" />}
                statsText="Seguimientos"
                statsValue="200"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
          </Row>
          }
          />
        </Col>
        <Col md={12}>
              <Card
              plain
                title="Gestion Call-Center"
                ctTableFullWidth
                ctTableResponsive
                content={
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Total Casos"
                statsValue="2.000"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-like2 text-success" />}
                statsText="Realizados"
                statsValue="1.800"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-attention text-danger" />}
                statsText="Inubicable"
                statsValue="200"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-success" />}
                statsText="Porcentaje"
                statsValue="97%"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="23/11/2020"
              />
            </Col>
          </Row>
          }
          />
        </Col>
          
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Distribucion de llamados por Call"
                category="Gestion realizada el dia 23-11-20"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Rendimiento"
                category="Casos Realizados el 23-10-20"
                stats="Informacion se actualiza los datos del dia anterior"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" options={{
  donut: true,
  donutWidth: 60,
  donutSolid: true,
  startAngle: 270,
  total: 200,
  showLabel: true
}} />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Casos Gestionados 2020"
                category="Total de casos Gestionados por call"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
