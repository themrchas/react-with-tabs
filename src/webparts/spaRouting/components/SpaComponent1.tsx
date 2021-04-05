import * as React from 'react';
import styles from './SpaComponent1.module.scss';
import { ISpaComponent1Props } from './ISpaComponent1Props';
import { escape } from '@microsoft/sp-lodash-subset';





export default class SpaComponent1 extends React.Component<ISpaComponent1Props, {}> {

  private getCounter = this.props.getCounter;
  private setCounter = this.props.updateCounter;


  constructor(props: ISpaComponent1Props) {

    super(props);
   
  }
  




  public render(): React.ReactElement<ISpaComponent1Props> {

  
    return (


  
      <div className={ styles.spaComponent1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>React Router</span>
              <p className={ styles.subTitle }>Component 1 has been invoked {this.getCounter()} times</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('SpaComponent1: executing componentDidMount');
    this.setCounter();
  }

  componentWillUnmount() {
    console.log('SpaComponent1: executing componentWillUnmount');
  }
    
  
}