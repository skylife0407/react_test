import React from 'react';
import './App.css';

import {Row, Col} from 'react-bootstrap';
import {/*BrowserRouter as Router, Switch,*/ Route, HashRouter} from 'react-router-dom';

import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Dashboard from './containers/Dashboard';
import Alerts from './containers/Alerts';
import Alerts_copy from './containers/Alerts_copy';
import Users from './containers/configurations/Users';
import Objects from './containers/configurations/Objects';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    /*<Router>
      <Header />
      <SideBar />
      <div className="content"> 
      <Container>
            <Row>
                <Col lg={12} className={"margin-top"}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/alerts" exact component={Alerts}/>
                        <Route path="/users" exact component={Users}/>
                        <Route path="/configurations" exact component={Configurations}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer/>
    </Router>
    */
   <HashRouter>
     <Header />
      <SideBar />
      <Title title="Dashboard"></Title>
      <div className="content"> 
      {/*<Container>*/}
            <Row>
                <Col lg={12} className={"margin-top"}>
                    {/** <Switch>*/}
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/alerts" exact component={Alerts}/>
                        <Route path="/alerts_c" exact component={Alerts_copy}/>
                        <Route path="/users" exact component={Users}/>
                        <Route path="/configurations/objects" exact component={Objects}/>
                    {/*</Switch>*/}
                </Col>
            </Row>
        {/*</Container> */}
        </div>
        <Footer/>
   </HashRouter>
  );
}

export default App;
