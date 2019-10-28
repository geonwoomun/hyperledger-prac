import React, { Component } from 'react';
import { Home, Signup, Login, Donation, Donation2,Partner,Donacard,Donacoin,
  Donadone,Groupintroduction,Camparegi,Campalist,Buy,Shoppingbasket,Mycampalist,Mydonahistory,
  Myinfo,Groupintroedit,Buydone,Coincharge,Coincharge2,Coincharge3, CamparegiDone, QueryCar,
QueryOneCar, CreateCar, ChangeOwner} from './pages';
import { Route, Switch, withRouter } from 'react-router-dom';
import ResponsiveContainer from '../src/pages/ResponsiveContainer';
import Footer from './pages/Footer';
import { getUserType } from './pages/pageFunction';

class App extends Component {
  state = {
    Home : true,
    userType : false
  }
  componentDidMount() {  // 처음에 마운트하고 난 후 유저타입을 설정한다. 
     this.props.match.isExact === true ? this.setState({Home:true}) : 
     this.setState({Home:false});
     this.setUserType();

}
componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.isExact !== this.props.match.isExact){
     this.props.match.isExact === true ? this.setState({Home:true}) : 
     this.setState({Home:false});
    }
}
setUserType = () => {  // DB에서 받아 설정한 usertoken으로부터 유저타입을 설정하는 것.
  let userType = getUserType();
  this.setState({
    userType
  })
}
  render() {
    const { Home, userType } = this.state;
    return (
      <>
        <ResponsiveContainer Home = {Home} userType={userType}/>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={() => <Login setUserType={this.setUserType}/>} /> {/* Login으로 props를 내려주기 위함. */}
          <Route path="/donation" component={Donation} />
          <Route path="/donation2" component={Donation2} />
          <Route path="/partner" component={Partner} />
          <Route path="/donacard/:proNum" component={Donacard} />
          <Route path="/donacoin/:proNum" component={Donacoin} />
          <Route path="/donadone/:proNum/:coin" component={Donadone} />
          <Route path="/groupintroduction" component={Groupintroduction} />
          <Route path="/groupintroedit" component={Groupintroedit}/>
          <Route path="/camparegi" component={Camparegi} />
          <Route path="/campalist" component={Campalist} />
          <Route path="/buy" component={Buy} />
          <Route path="/shoppingbasket" component={Shoppingbasket} />
          <Route path="/mycampalist" component={Mycampalist} />
          <Route path="/mydonahistory" component={Mydonahistory} />
          <Route path="/mydonahistory" component={Mydonahistory} />
          <Route path="/myinfo" component={Myinfo} />
          <Route path="/coincharge" component={Coincharge} />
          <Route path="/coincharge2" component={Coincharge2} />
          <Route path="/coincharge3" component={Coincharge3} />
          <Route path="/buydone" component={Buydone} />
          <Route path="/camparegidone" component={CamparegiDone} />
          <Route path="/queryallcars" component={QueryCar} />
          <Route path="/queryonecar" component={QueryOneCar}/>
          <Route path="/createcar" component={CreateCar}/>
          <Route path="/changeowner" component={ChangeOwner}/>

        </Switch>
        <Footer/>
      </>
    );
  }
}
export default withRouter(App);
