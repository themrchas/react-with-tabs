import * as React from 'react';
import styles from './SpaComponent2.module.scss';
import { ISpaComponent2Props } from './ISpaComponent2Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpaComponent2 extends React.Component<ISpaComponent2Props, {}> {

  private getCounter = this.props.getCounter;
  private setCounter = this.props.updateCounter;



  public render(): React.ReactElement<ISpaComponent2Props> {
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
    console.log('SpaComponent2: executing componentDidMount');
    this.setCounter();
  }

  componentWillUnmount() {
    console.log('SpaComponent2: executing componentWillUnmount');
  }

}