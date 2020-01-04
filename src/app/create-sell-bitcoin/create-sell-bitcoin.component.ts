import { Component, OnInit, ViewChild } from '@angular/core';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import { ListItem, IDropdownSettings } from "./multiselect.model";

@Component({
  selector: 'app-create-sell-bitcoin',
  templateUrl: './create-sell-bitcoin.component.html',
  styleUrls: ['./create-sell-bitcoin.component.css']
})
export class CreateSellBitcoinComponent implements OnInit {
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};
  public countries = "";
  disableVPN = "";
  
  constructor() { }
  @ViewChild('multiSelect') multiSelect;
  // public form: FormGroup;
  public loadContent: boolean = false;
  public name = 'Cricketers';
  public data = [];
  public settings = {};



  ngOnInit() {
    this.data = [
      { item_id: 1, item_text: 'Online Payment' },
      { item_id: 2, item_text: 'No Verification Needed' },
      { item_id: 3, item_text: 'e-code Accepeted' },
      { item_id: 4, item_text: 'Cash Only' },
      { item_id: 5, item_text: 'Photo ID Requried' }
    ];
    // setting and support i18n
    this.settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      allowSearchFilter: true,
      limitSelection: 3,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Click here to Search',
      noDataAvailablePlaceholderText: 'Không có dữ liệu',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false
    };
    // this.setForm();
  }

  // public setForm() {
  //   this.form = new FormGroup({
  //     name: new FormControl(this.data, Validators.required)
  //   });
  //   this.loadContent = true;
  // }

  // get f() { return this.form.controls; }




  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  ShowCountries(){
      this.countries = "NOT this countries"
      // this.butDisabled= "true"
  }
  AllowCountries(){
    this.countries = "Only this Countries"
    // this.butDisabled= "true"
  }
  NoneCountries(){
    this.countries = ""
  }
  DisableVPN(){
    this.disableVPN = "Maxmind® GeoIP2 Anonymous IP Database is used for detecting these users. Your offer is still visible, but user can not start a trade."
  }
  ableVPN(){
    this.disableVPN = ""
  }

  

}
