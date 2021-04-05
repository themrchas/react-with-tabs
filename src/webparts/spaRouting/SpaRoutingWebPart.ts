import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpaRoutingWebPartStrings';
import SpaRouting from './components/SpaRouting';
import { ISpaRoutingProps } from './components/ISpaRoutingProps';


import { sp } from '@pnp/sp';
import "@pnp/sp/webs";

export interface ISpaRoutingWebPartProps {
  description: string;
}

export default class SpaRoutingWebPart extends BaseClientSideWebPart<ISpaRoutingWebPartProps> {

  public render(): void {


    setTimeout(async () => {
      const data = await sp.web.select("Title","Description").get();
      console.log("data is", data);
    }, 7000); 
    
     


    const element: React.ReactElement<ISpaRoutingProps> = React.createElement(
      SpaRouting,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected onInit():Promise<void> {
    console.log("SpaRoutingWebPart just initialized in function 'onInit'");

    //Provides the of where the web part is running within the context of spfx
    return super.onInit().then(_ => { 
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
