import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { NgSelectModule } from '@ng-select/ng-select';

import {SelectModule} from 'ng2-select';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,MatInputModule,MatSlideToggleModule,MatNativeDateModule,MatDatepickerModule,MatTooltipModule,MatCheckboxModule,MatButtonModule,MatTabsModule,MatIconModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import { HelpComponent } from './help/help.component';
import { VendorComponent } from './vendor/vendor.component';
import { WalletComponent } from './wallet/wallet.component';
import { TeamsComponent } from './teams/teams.component';
import { PrivacynoticeComponent } from './privacynotice/privacynotice.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
// import { SliderModule } from 'angular-image-slider';
import { ModalModule } from 'ngx-bootstrap/modal'
import { TabsModule,  } from 'ngx-bootstrap/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import { SendReceiveComponent } from './send-receive/send-receive.component';
import { QRCodeModule } from 'angularx-qrcode';
import { UserwalletComponent } from './userwallet/userwallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { BanktransferComponent } from './banktransfer/banktransfer.component';
import { InternationalWireTransferComponent } from './international-wire-transfer/international-wire-transfer.component';
import { IMPSTransferComponent } from './impstransfer/impstransfer.component';
import { DomesticWireTransferComponent } from './domestic-wire-transfer/domestic-wire-transfer.component';
import { SEPAComponent } from './sepa/sepa.component';
import { OnlinewalletComponent } from './onlinewallet/onlinewallet.component';
import { PaypalComponent } from './paypal/paypal.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModelViewComponent } from './model-view/model-view.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PhonepeComponent } from './phonepe/phonepe.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { MpesaComponent } from './mpesa/mpesa.component';
import { AmazonGiftCardComponent } from './amazon-gift-card/amazon-gift-card.component';
import { SteamWalletGiftCardComponent } from './steam-wallet-gift-card/steam-wallet-gift-card.component';
import { ITunesGiftCardComponent } from './i-tunes-gift-card/i-tunes-gift-card.component';
import { EBayGiftCardComponent } from './e-bay-gift-card/e-bay-gift-card.component';
import { GooglePlayGiftCardComponent } from './google-play-gift-card/google-play-gift-card.component';
import { WesternUnionComponent } from './western-union/western-union.component';
import { MoneyGramComponent } from './money-gram/money-gram.component';
import { CashInPersonComponent } from './cash-in-person/cash-in-person.component';
import { CashDepositeToBankComponent } from './cash-deposite-to-bank/cash-deposite-to-bank.component';
import { RIAmoneyTransferComponent } from './riamoney-transfer/riamoney-transfer.component';
// import { DebitCardComponent } from './Credit/debit-card/debit-card.component';
import { CreditDebitCardComponent } from './credit-debit-card/credit-debit-card.component';
import { PaysafecardComponent } from './paysafecard/paysafecard.component';
import { GreendotcardComponent } from './greendotcard/greendotcard.component';
import { BluebirdamericanexpressComponent } from './bluebirdamericanexpress/bluebirdamericanexpress.component';
import { ETHComponent } from './eth/eth.component';
import { LTCComponent } from './ltc/ltc.component';
import { StellarLumensXLMComponent } from './stellar-lumens-xlm/stellar-lumens-xlm.component';
import { BCCBCHComponent } from './bcc-bch/bcc-bch.component';
import { RippleXRPComponent } from './ripple-xrp/ripple-xrp.component';
import { TransactionpageComponent } from './transactionpage/transactionpage.component';
import { SellBitcoinComponent } from './sell-bitcoin/sell-bitcoin.component';
import { BuyBitCoinComponent } from './buy-bit-coin/buy-bit-coin.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SecurityComponent } from './security/security.component';
import { TradePartnerComponent } from './trade-partner/trade-partner.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateSellBitcoinComponent } from './create-sell-bitcoin/create-sell-bitcoin.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomepageComponent,
    HelpComponent,
    VendorComponent,
    WalletComponent,
    TeamsComponent,
    PrivacynoticeComponent,
    CookiepolicyComponent,
    FooterComponent,
    LoginComponent,
    SendReceiveComponent,
    UserwalletComponent,
    DashboardComponent,
    // BanktransferComponent,
    InternationalWireTransferComponent,
    IMPSTransferComponent,
    DomesticWireTransferComponent,
    SEPAComponent,
    OnlinewalletComponent,
    PaypalComponent,
    ModelViewComponent,
    NavbarComponent,
    PaytmComponent,
    PhonepeComponent,
    GooglepayComponent,
    MpesaComponent,
    AmazonGiftCardComponent,
    SteamWalletGiftCardComponent,
    ITunesGiftCardComponent,
    EBayGiftCardComponent,
    GooglePlayGiftCardComponent,
    WesternUnionComponent,
    MoneyGramComponent,
    CashInPersonComponent,
    CashDepositeToBankComponent,
    RIAmoneyTransferComponent,
    // DebitCardComponent,
    CreditDebitCardComponent,
    PaysafecardComponent,
    GreendotcardComponent,
    BluebirdamericanexpressComponent,
    ETHComponent,
    LTCComponent,
    StellarLumensXLMComponent,
    BCCBCHComponent,
    RippleXRPComponent,
    TransactionpageComponent,
    SellBitcoinComponent,
    BuyBitCoinComponent,
    ProfilePageComponent,
    UserAccountComponent,
    SecurityComponent,
    TradePartnerComponent,
    TransactionHistoryComponent,
    VendorDashboardComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CreateSellBitcoinComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule, 
    MatButtonModule,
    ReactiveFormsModule,MatCheckboxModule,    NgMultiSelectDropDownModule.forRoot(),
    MatTabsModule,MatButtonToggleModule,MatSlideToggleModule,SelectModule,
    MatNativeDateModule,MatDatepickerModule,Ng2SearchPipeModule,FilterPipeModule,

    ClipboardModule, ToastrModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([]),
    RecaptchaModule.forRoot(),
  
    HttpClientModule,
    // SliderModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TabsModule.forRoot(),
    HighchartsChartModule,
    QRCodeModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
