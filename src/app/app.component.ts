import { Component, OnInit, Inject } from '@angular/core';
// import { ENVIRONMENT } from '@com-delta-mts/angular-environment';
export interface Template {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private themeWrapper = document.body.style;

  title = 'CSS Themes Library';
  settings = false;
  currentSettings;
  templates: any[] = [
    {
      id: 'delta',
      label: 'Delta',
      loyaltyTiers: [
        {
          name: 'Delta 360',
          abbrev: '360'
        },
        {
          name: 'Diamond Medallion',
          abbrev: 'DM'
        },
        {
          name: 'Platinum Medallion',
          abbrev: 'PM'
        },
        {
          name: 'Gold Medallion',
          abbrev: 'DM'
        },
        {
          name: 'Silver Medallion',
          abbrev: 'SM'
        },
        {
          name: 'Skymiles Medallion',
          abbrev: 'M'
        },
      ]
    },
    {
      id: 'contrast',
      label: 'Delta Contrast',
      loyaltyTiers: [
        {
          name: 'Delta 360',
          abbrev: '360'
        },
        {
          name: 'Diamond Medallion',
          abbrev: 'DM'
        },
        {
          name: 'Platinum Medallion',
          abbrev: 'PM'
        },
        {
          name: 'Gold Medallion',
          abbrev: 'DM'
        },
        {
          name: 'Silver Medallion',
          abbrev: 'SM'
        },
        {
          name: 'Skymiles Medallion',
          abbrev: 'M'
        },
      ]
    },
    {
      id: 'virgin',
      label: 'Virgin Atlantic',
      loyaltyTiers: [
        {
          name: 'Red',
          abbrev: 'FF'
        },
        {
          name: 'Silver',
          abbrev: 'FO'
        },
        {
          name: 'Gold',
          abbrev: 'GM'
        }
      ]
    }
  ];
  selectedTemplate = 'delta';
  isLoading = false;
  environment = {
    "applicationName": "CSS Themes Example",
    "description": "This application demonstrates the CSS Theming with SASS",
    "language": "en",
    "country": "us",
    "delta": {
      "id": "delta",
      "properties": {
        "--primaryColor": "#18203D",
        "--primaryColor-100": "#C8CBD9",
        "--primaryColor-200": "#7E8499",
        "--primaryColor-300": "#646E8D",
        "--primaryColor-400": "#343D63",
        "--primaryColor-500": "#29304E",
        "--primaryColor-600": "#18203D",
        "--secondaryColor": "#646E8D",
        "--secondaryColor-100": "#F8F8FA",
        "--secondaryColor-200": "#F0F0F2",
        "--secondaryColor-300": "#E4E4E6",
        "--secondaryColor-400": "#A3A6B1",
        "--secondaryColor-500": "#656A7B",
        "--secondaryColor-600": "#4E5260",
        "--notification-success": "#008A00",
        "--notification-danger": "#DF1836",
        "--notification-warning": "#E14B00",
        "--notification-info": "#4470C3",
        "--loyalty-tier1-100": "#8D8E91",
        "--loyalty-tier1-200": "#68686B",
        "--loyalty-tier1-300": "#383838",
        "--loyalty-tier1-400": "#000",
        "--loyalty-tier2-100": "#6590AD",
        "--loyalty-tier2-200": "#4B718C",
        "--loyalty-tier2-300": "#345064",
        "--loyalty-tier2-400": "#182F3E",
        "--loyalty-tier3-100": "#8973B1",
        "--loyalty-tier3-200": "#644F8B",
        "--loyalty-tier3-300": "#393248",
        "--loyalty-tier3-400": "#16131D",
        "--loyalty-tier4-100": "#C7883B",
        "--loyalty-tier4-200": "#9F6A29",
        "--loyalty-tier4-300": "#864F0C",
        "--loyalty-tier4-400": "#472B12",
        "--loyalty-tier5-100": "#A3A4A8",
        "--loyalty-tier5-200": "#7A7B80",
        "--loyalty-tier5-300": "#494A4D",
        "--loyalty-tier5-400": "#2D2D2E",
        "--loyalty-tier6-100": "#5261A1",
        "--loyalty-tier6-200": "#33478C",
        "--loyalty-tier6-300": "#1F2C59",
        "--loyalty-tier6-400": "#0D1840",
        "--loyalty-badge-tier1-100": "#8D8E91",
        "--loyalty-badge-tier1-200": "#68686B",
        "--loyalty-badge-tier1-300": "#383838",
        "--loyalty-badge-tier1-400": "#000",
        "--loyalty-badge-tier2-100": "#6590AD",
        "--loyalty-badge-tier2-200": "#4B718C",
        "--loyalty-badge-tier2-300": "#345064",
        "--loyalty-badge-tier2-400": "#182F3E",
        "--loyalty-badge-tier3-100": "#8973B1",
        "--loyalty-badge-tier3-200": "#644F8B",
        "--loyalty-badge-tier3-300": "#393248",
        "--loyalty-badge-tier3-400": "#16131D",
        "--loyalty-badge-tier4-100": "#C7883B",
        "--loyalty-badge-tier4-200": "#9F6A29",
        "--loyalty-badge-tier4-300": "#864F0C",
        "--loyalty-badge-tier4-400": "#472B12",
        "--loyalty-badge-tier5-100": "#A3A4A8",
        "--loyalty-badge-tier5-200": "#7A7B80",
        "--loyalty-badge-tier5-300": "#494A4D",
        "--loyalty-badge-tier5-400": "#2D2D2E",
        "--loyalty-badge-tier6-100": "#5261A1",
        "--loyalty-badge-tier6-200": "#33478C",
        "--loyalty-badge-tier6-300": "#1F2C59",
        "--loyalty-badge-tier6-400": "#0D1840",
        "--credit-card-100": "#4470C3",
        "--credit-card-200": "#9F6A29",
        "--credit-card-300": "#644F8B",
        "--credit-card-400": "#135E6C",
        "--font-primaryColor": "#656A7B",
        "--font-secondaryColor": "#FFF",
        "--font-tertiaryColor": "#0B1F66",
        "--high-contrastColor": "#fff",
        "--high-contrastBorderColor": "transparent",
        "--font-xs": "5px",
        "--font-xs-100": "6px",
        "--font-xs-200": "7px",
        "--font-xs-300": "8px",
        "--font-xs-400": "9px",
        "--font-sm": "10px",
        "--font-sm-100": "11px",
        "--font-sm-200": "12px",
        "--font-sm-300": "13px",
        "--font-sm-400": "14px",
        "--font-md": "15px",
        "--font-md-100": "16px",
        "--font-md-200": "17px",
        "--font-md-300": "18px",
        "--font-md-400": "19px",
        "--font-md-500": "20px",
        "--font-md-600": "21px",
        "--font-lg": "22px",
        "--font-lg-100": "23px",
        "--font-lg-200": "24px",
        "--font-lg-300": "25px",
        "--font-lg-400": "26px",
        "--font-lg-500": "27px",
        "--font-lg-600": "28px",
        "--font-xl": "32px",
        "--font-xl-100": "33px",
        "--font-xl-200": "34px",
        "--font-xl-300": "35px",
        "--font-xl-400": "36px",
        "--font-xl-500": "37px",
        "--font-xl-600": "38px",
        "--font-xxl": "50px",
        "--font-xxl-100": "52px",
        "--font-xxl-200": "54px",
        "--font-xxl-300": "56px",
        "--font-xxl-400": "58px",
        "--font-xxl-50": "60px",
        "--font-xxl-600": "62px",
        "--tertiaryColor": "#c0392b",
        "--accentColor": "#f39c12",
        "--logoUrl": "url('/assets/img/delta_airlines_logo.png')",
        "--logoWidth": "500px",
        "--logoHeight": "100px",
        "--borderRadius": "0px"
      }
    },
    "contrast": {
      "id": "contrast",
      "properties": {
        "--primaryColor": "#18203D",
        "--primaryColor-100": "#C8CBD9",
        "--primaryColor-200": "#7E8499",
        "--primaryColor-300": "#646E8D",
        "--primaryColor-400": "#343D63",
        "--primaryColor-500": "#29304E",
        "--primaryColor-600": "#18203D",
        "--secondaryColor": "#646E8D",
        "--secondaryColor-100": "#F8F8FA",
        "--secondaryColor-200": "#F0F0F2",
        "--secondaryColor-300": "#E4E4E6",
        "--secondaryColor-400": "#A3A6B1",
        "--secondaryColor-500": "#656A7B",
        "--secondaryColor-600": "#4E5260",
        "--notification-success": "#008A00",
        "--notification-danger": "#DF1836",
        "--notification-warning": "#E14B00",
        "--notification-info": "#4470C3",
        "--loyalty-tier1-100": "#8D8E91",
        "--loyalty-tier1-200": "#68686B",
        "--loyalty-tier1-300": "#383838",
        "--loyalty-tier1-400": "#000",
        "--loyalty-tier2-100": "#6590AD",
        "--loyalty-tier2-200": "#4B718C",
        "--loyalty-tier2-300": "#345064",
        "--loyalty-tier2-400": "#182F3E",
        "--loyalty-tier3-100": "#8973B1",
        "--loyalty-tier3-200": "#644F8B",
        "--loyalty-tier3-300": "#393248",
        "--loyalty-tier3-400": "#16131D",
        "--loyalty-tier4-100": "#C7883B",
        "--loyalty-tier4-200": "#9F6A29",
        "--loyalty-tier4-300": "#864F0C",
        "--loyalty-tier4-400": "#472B12",
        "--loyalty-tier5-100": "#A3A4A8",
        "--loyalty-tier5-200": "#7A7B80",
        "--loyalty-tier5-300": "#494A4D",
        "--loyalty-tier5-400": "#2D2D2E",
        "--loyalty-tier6-100": "#5261A1",
        "--loyalty-tier6-200": "#33478C",
        "--loyalty-tier6-300": "#1F2C59",
        "--loyalty-tier6-400": "#0D1840",
        "--loyalty-badge-tier1-100": "#fff",
        "--loyalty-badge-tier1-200": "#fff",
        "--loyalty-badge-tier1-300": "#fff",
        "--loyalty-badge-tier1-400": "#fff",
        "--loyalty-badge-tier2-100": "#fff",
        "--loyalty-badge-tier2-200": "#fff",
        "--loyalty-badge-tier2-300": "#fff",
        "--loyalty-badge-tier2-400": "#fff",
        "--loyalty-badge-tier3-100": "#fff",
        "--loyalty-badge-tier3-200": "#fff",
        "--loyalty-badge-tier3-300": "#fff",
        "--loyalty-badge-tier3-400": "#fff",
        "--loyalty-badge-tier4-100": "#fff",
        "--loyalty-badge-tier4-200": "#fff",
        "--loyalty-badge-tier4-300": "#fff",
        "--loyalty-badge-tier4-400": "#fff",
        "--loyalty-badge-tier5-100": "#fff",
        "--loyalty-badge-tier5-200": "#fff",
        "--loyalty-badge-tier5-300": "#fff",
        "--loyalty-badge-tier5-400": "#fff",
        "--loyalty-badge-tier6-100": "#fff",
        "--loyalty-badge-tier6-200": "#fff",
        "--loyalty-badge-tier6-300": "#fff",
        "--loyalty-badge-tier6-400": "#fff",
        "--credit-card-100": "#4470C3",
        "--credit-card-200": "#9F6A29",
        "--credit-card-300": "#644F8B",
        "--credit-card-400": "#135E6C",
        "--font-primaryColor": "#656A7B",
        "--font-secondaryColor": "#18203D",
        "--font-tertiaryColor": "#0B1F66",
        "--high-contrastColor": "#18203D",
        "--high-contrastBorderColor": "#18203D",
        "--font-xs": "5px",
        "--font-xs-100": "6px",
        "--font-xs-200": "7px",
        "--font-xs-300": "8px",
        "--font-xs-400": "9px",
        "--font-sm": "10px",
        "--font-sm-100": "11px",
        "--font-sm-200": "12px",
        "--font-sm-300": "13px",
        "--font-sm-400": "14px",
        "--font-md": "15px",
        "--font-md-100": "16px",
        "--font-md-200": "17px",
        "--font-md-300": "18px",
        "--font-md-400": "19px",
        "--font-md-500": "20px",
        "--font-md-600": "21px",
        "--font-lg": "22px",
        "--font-lg-100": "23px",
        "--font-lg-200": "24px",
        "--font-lg-300": "25px",
        "--font-lg-400": "26px",
        "--font-lg-500": "27px",
        "--font-lg-600": "28px",
        "--font-xl": "32px",
        "--font-xl-100": "33px",
        "--font-xl-200": "34px",
        "--font-xl-300": "35px",
        "--font-xl-400": "36px",
        "--font-xl-500": "37px",
        "--font-xl-600": "38px",
        "--font-xxl": "50px",
        "--font-xxl-100": "52px",
        "--font-xxl-200": "54px",
        "--font-xxl-300": "56px",
        "--font-xxl-400": "58px",
        "--font-xxl-50": "60px",
        "--font-xxl-600": "62px",
        "--tertiaryColor": "#c0392b",
        "--accentColor": "#f39c12",
        "--logoUrl": "url('/assets/img/delta_airlines_logo.png')",
        "--logoWidth": "500px",
        "--logoHeight": "100px",
        "--borderRadius": "0px"
      }
    },
    "virgin": {
      "id": "virgin",
      "properties": {
        "--primaryColor": "#8C5394",
        "--primaryColor-100": "#fadbe0",
        "--primaryColor-200": "#eaadbd",
        "--primaryColor-300": "#b88a9f",
        "--primaryColor-400": "#876880",
        "--primaryColor-500": "#554562",
        "--primaryColor-600": "#8C5394",
        "--secondaryColor": "#e4d6d0",
        "--secondaryColor-100": "#efefef",
        "--secondaryColor-200": "#feeee8",
        "--secondaryColor-300": "#e4d6d0",
        "--secondaryColor-400": "#ddd",
        "--secondaryColor-500": "#ccc",
        "--secondaryColor-600": "#e4d6d0",
        "--notification-success": "#6fd273",
        "--notification-danger": "#Ff6659",
        "--notification-warning": "#Ffbb23",
        "--notification-info": "#26ccff",
        "--loyalty-tier1-100": "#ffcbcb",
        "--loyalty-tier1-200": "#ffb5b5",
        "--loyalty-tier1-300": "#eb5f5d",
        "--loyalty-tier1-400": "#bb1542",
        "--loyalty-tier2-100": "#83a0ae",
        "--loyalty-tier2-200": "#7996a4",
        "--loyalty-tier2-300": "#658290",
        "--loyalty-tier2-400": "#476472",
        "--loyalty-tier3-100": "#eceba7",
        "--loyalty-tier3-200": "#f9e090",
        "--loyalty-tier3-300": "#ebce95",
        "--loyalty-tier3-400": "#ffdd67",
        "--loyalty-tier4-100": "#ffc77f",
        "--loyalty-tier4-200": "#ffbf77",
        "--loyalty-tier4-300": "#ffa65e",
        "--loyalty-tier4-400": "#fd9e56",
        "--loyalty-tier5-100": "#C1c1c1",
        "--loyalty-tier5-200": "#Bcbcbc",
        "--loyalty-tier5-300": "#B7b7b7",
        "--loyalty-tier5-400": "#B2b2b2",
        "--loyalty-tier6-100": "#77bcff",
        "--loyalty-tier6-200": "#71b9fe",
        "--loyalty-tier6-300": "#5ea3ff",
        "--loyalty-tier6-400": "#569bfd",
        "--loyalty-badge-tier1-100": "#ffcbcb",
        "--loyalty-badge-tier1-200": "#ffb5b5",
        "--loyalty-badge-tier1-300": "#eb5f5d",
        "--loyalty-badge-tier1-400": "#bb1542",
        "--loyalty-badge-tier2-100": "#83a0ae",
        "--loyalty-badge-tier2-200": "#7996a4",
        "--loyalty-badge-tier2-300": "#658290",
        "--loyalty-badge-tier2-400": "#476472",
        "--loyalty-badge-tier3-100": "#eceba7",
        "--loyalty-badge-tier3-200": "#f9e090",
        "--loyalty-badge-tier3-300": "#ebce95",
        "--loyalty-badge-tier3-400": "#ffdd67",
        "--loyalty-badge-tier4-100": "#ffc77f",
        "--loyalty-badge-tier4-200": "#ffbf77",
        "--loyalty-badge-tier4-300": "#ffa65e",
        "--loyalty-badge-tier4-400": "#fd9e56",
        "--loyalty-badge-tier5-100": "#C1c1c1",
        "--loyalty-badge-tier5-200": "#Bcbcbc",
        "--loyalty-badge-tier5-300": "#B7b7b7",
        "--loyalty-badge-tier5-400": "#B2b2b2",
        "--loyalty-badge-tier6-100": "#77bcff",
        "--loyalty-badge-tier6-200": "#71b9fe",
        "--loyalty-badge-tier6-300": "#5ea3ff",
        "--credit-card-100": "#6274d8",
        "--credit-card-200": "#Dcc818",
        "--credit-card-300": "#8a5dda",
        "--credit-card-400": "#0aa092",
        "--font-primaryColor": "#656A7B",
        "--font-secondaryColor": "#FFF",
        "--font-tertiaryColor": "#0B1F66",
        "--high-contrastColor": "#fff",
        "--high-contrastBorderColor": "transparent",
        "--font-xs": "5px",
        "--font-xs-100": "6px",
        "--font-xs-200": "7px",
        "--font-xs-300": "8px",
        "--font-xs-400": "9px",
        "--font-sm": "10px",
        "--font-sm-100": "11px",
        "--font-sm-200": "12px",
        "--font-sm-300": "13px",
        "--font-sm-400": "14px",
        "--font-md": "15px",
        "--font-md-100": "16px",
        "--font-md-200": "17px",
        "--font-md-300": "18px",
        "--font-md-400": "19px",
        "--font-md-500": "20px",
        "--font-md-600": "21px",
        "--font-lg": "22px",
        "--font-lg-100": "23px",
        "--font-lg-200": "24px",
        "--font-lg-300": "25px",
        "--font-lg-400": "26px",
        "--font-lg-500": "27px",
        "--font-lg-600": "28px",
        "--font-xl": "32px",
        "--font-xl-100": "33px",
        "--font-xl-200": "34px",
        "--font-xl-300": "35px",
        "--font-xl-400": "36px",
        "--font-xl-500": "37px",
        "--font-xl-600": "38px",
        "--font-xxl": "50px",
        "--font-xxl-100": "52px",
        "--font-xxl-200": "54px",
        "--font-xxl-300": "56px",
        "--font-xxl-400": "58px",
        "--font-xxl-50": "60px",
        "--font-xxl-600": "62px",
        "--tertiaryColor": "#c0392b",
        "--accentColor": "#f39c12",
        "--logoUrl": "url('/assets/img/virgin_atlantic_logo.png')",
        "--logoWidth": "500px",
        "--logoHeight": "100px",
        "--borderRadius": "0px"
      }
    }
  }

  // constructor(@Inject(ENVIRONMENT) private environment: any) {
  // }

  ngOnInit() {
    // console.log('App Configuration', this.environment);
    this.setCSSTheme('delta');
  }

  toggleSettings() {
    this.settings = !this.settings;
  }

  onTemplateChange() {
    console.log('this.selectedTemplate: ', this.selectedTemplate);
    this.setCSSTheme(this.selectedTemplate);
  }

  setCSSTheme(id = this.selectedTemplate): void {
    const theme = this.environment[id].properties;
    if (theme) {
      const keys = Object.keys(theme);
      // Object.values() no support for IE11+
      const values = Object.keys(theme).map( key => theme[key] );
      keys.map( (key, i) => {
        const val: any = values[i];
        this.themeWrapper.setProperty(key, val);
      });

      this.currentSettings = this.templates.filter( template => template.id === id);
      console.log('Current Settings: ', this.currentSettings);
    }
  }

}
