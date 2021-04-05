import * as React from 'react';
import styles from './SpaRouting.module.scss';
import { ISpaRoutingProps } from './ISpaRoutingProps';
import { escape } from '@microsoft/sp-lodash-subset';

import  SpaComponent1  from './SpaComponent1';
import  SpaComponent2  from './SpaComponent2';


//The following are for React UI
import { AppBar, Tabs, Tab } from '@material-ui/core'


//react router 
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PopupWindowPosition } from '@microsoft/sp-property-pane';


interface IState {
  counterComponent1: number,
  counterComponent2: number
}


export default class SpaRouting extends React.Component<ISpaRoutingProps, IState> {

  state: any;

  constructor(props: ISpaRoutingProps) {
    super(props);

    this.state = {
      counterComponent1: 0,
      counterComponent2: 0
    }
  }

  //Get current compponent 1 counter value
  getCounterComp1 = (): number => {
    return this.state.counterComponent1;
  }

  //Get current compponent 2 counter value
  getCounterComp2 = (): number => {
    return this.state.counterComponent2;
  }



  updateCounterComp1 = (): void => {
    this.setState( (prevState) =>  {
      return {counterComponent1: prevState.counterComponent1 + 1}
  })

}

  updateCounterComp2 = (): void => {
    this.setState( (prevState) =>  {
      return {counterComponent2: prevState.counterComponent2 + 1}
  })
}

tabSelected = (event: object, value: any): void => {

  console.log("tabSelected: event is:",event,"value",value);
  console.log("current url is",window.location.href);
  console.log("current window hash is", window.location.hash);

  if (value == 0) {
    window.location.hash = "#/spacomp1";
  }
  else 
    window.location.hash = "#/spacomp2";
}




  public render(): React.ReactElement<ISpaRoutingProps> {
    return (
      <div className={ styles.spaRouting }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>SpaRouting Component</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>

        <AppBar position="static">
      {/*  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          </Tabs> */}
          <Tabs value="tab value property"  onChange={this.tabSelected} aria-label="simple tabs example">
            <Tab label="Component 1"></Tab>
            <Tab label="Component 2"></Tab>
          </Tabs> 
        </AppBar>



        <HashRouter>

       {/*}   <div> 
            <nav>
              <ul>
                <li>
                  <Link to="/spacomp1">Component 1</Link>
                </li>
                <li>
                <Link to="/spacomp2">Component 2</Link>
                </li>
 
              </ul>
            </nav>
        </div> */}


          <Switch>
            <Route path="/spacomp1">
              <SpaComponent1 description="Router has sent you to component 1" updateCounter={this.updateCounterComp1} getCounter={this.getCounterComp1}/>
            </Route>
            <Route path={["/spacomp2", "/"]}>
              <SpaComponent2 description="Router has sent you to component 2" updateCounter={this.updateCounterComp2} getCounter={this.getCounterComp2}/>
            </Route>
          </Switch>

</HashRouter>

      </div>





    );
  }

 
}



