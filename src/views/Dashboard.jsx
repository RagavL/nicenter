import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar,Pie } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          
          <Row>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Net Revenue</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Customer Retention</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Spend</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Macro-Level ROMI</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="4" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Macro-Level ROMI</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="h1">
                  <p className="h3"><i className="tim-icons icon-single-02 text-success" /> &nbsp;&nbsp;8,974 Total Customers</p>
                  </div>
                  <hr></hr>
                  <div className="h1">
                  <p>In the Last 30 Days</p>
                  <p className="h3"><i className="tim-icons icon-single-02 text-success" />&nbsp;&nbsp;335 New Customers</p>
                  <p className="h3"><i className="tim-icons icon-single-02 text-success" />&nbsp;&nbsp;179 Customers Churned</p>
                  </div>
                  <hr></hr>
                  <div className="chart-area">
                    <Pie
                      data={chartExample4}
                      
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="12">
              <Row>
              <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Net Promoter Score</h5>
                  <CardTitle tag="h3">
                    <p>XX</p>
                    <br/>


                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
              </Col>
              <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Engaged Customers</h5>
                  <CardTitle tag="h3">
                    <p>XX</p>
                    <br/>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
              </Col>
                
              </Row>
              <Row>
              <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">ARPU</h5>
                  <CardTitle tag="h3">
                  <p>XX</p>
                    <br/>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
              </Col>
              <Col lg="6" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Social Sentiment</h5>
                  <CardTitle tag="h3">
                  <p>XX</p>
                    <br/>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
              </Col>
                
              </Row>
              <Row>
              <Col lg="12" md="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">OPT OUT RATE</h5>
                  <CardTitle tag="h3">
                  <h1>XX</h1>
                    <br/>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  
                </CardBody>
              </Card>
              </Col>
                
              </Row>
            </Col>
            <Col lg="4" md="12">
            <Row>
                  <Col lg="12" md="12">
                    <Card className="card-chart">
                      <CardHeader>
                        <h5 className="card-category">Most Popular Products</h5>
                        <CardTitle tag="h3">
                          <i className="tim-icons icon-send text-success" /> 12,100K
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        
                      </CardBody>
                    </Card>
                    </Col>
              </Row>
              <Row>
                  <Col lg="12" md="12">
                    <Card className="card-chart">
                      <CardHeader>
                        <h5 className="card-category">Active Campaigns</h5>
                        <CardTitle tag="h3">
                          <i className="tim-icons icon-send text-success" /> 12,100K
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        
                      </CardBody>
                    </Card>
                    </Col>
              </Row>
              <Row>
                  <Col lg="12" md="12">
                    <Card className="card-chart">
                      <CardHeader>
                        <h5 className="card-category">Social Sentiment</h5>
                        <CardTitle tag="h3">
                          <i className="tim-icons icon-send text-success" /> 12,100K
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        
                      </CardBody>
                    </Card>
                    </Col>
              </Row>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
