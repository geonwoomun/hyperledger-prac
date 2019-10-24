import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

class ResponsiveContainer extends Component {
    render(){
        const {children, Home, userType} = this.props;
        return(
            <div>
            <DesktopContainer Home = {Home} userType = {userType}>{children}</DesktopContainer>
            <MobileContainer  Home = {Home} userType = {userType}>{children}</MobileContainer>
          </div>
        )
    }
}
export default withRouter(ResponsiveContainer);