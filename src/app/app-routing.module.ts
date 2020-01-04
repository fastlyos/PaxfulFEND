import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HelpComponent } from './help/help.component';
import { VendorComponent } from './vendor/vendor.component';
import { TeamsComponent } from './teams/teams.component';
import { PrivacynoticeComponent } from './privacynotice/privacynotice.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserwalletComponent } from './userwallet/userwallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { BanktransferComponent } from './banktransfer/banktransfer.component';
import { InternationalWireTransferComponent } from './international-wire-transfer/international-wire-transfer.component';
import { IMPSTransferComponent } from './impstransfer/impstransfer.component';
import { DomesticWireTransferComponent } from './domestic-wire-transfer/domestic-wire-transfer.component';
import { SEPAComponent } from './sepa/sepa.component';
import { ModelViewComponent } from './model-view/model-view.component';
import { OnlinewalletComponent } from './onlinewallet/onlinewallet.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PhonepeComponent } from './phonepe/phonepe.component';
import { GooglepayComponent } from './googlepay/googlepay.component';
import { MpesaComponent } from './mpesa/mpesa.component';
import { PaypalComponent } from './paypal/paypal.component';
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
import { TradePartnerComponent } from './trade-partner/trade-partner.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateSellBitcoinComponent } from './create-sell-bitcoin/create-sell-bitcoin.component';
import { NotificationComponent } from './notification/notification.component';





const routes: Routes = [
{
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  { path:'signin' ,component: SigninComponent },
  { path:'homepage' ,component: HomepageComponent },
  { path: 'help' ,component: HelpComponent },
  { path: 'vendor' ,component: VendorComponent },
  { path: 'Team&Conditions' ,component: TeamsComponent },
  { path: 'Privacynotice' ,component: PrivacynoticeComponent },
  { path: 'cookiepolicy' ,component: CookiepolicyComponent }, 
  { path: 'login' ,component: LoginComponent },
  { path: 'wallet' ,component: WalletComponent },
  { path: 'send&receive' ,component: UserwalletComponent },
  { path: 'dashboard' ,component: DashboardComponent },
  { path: 'BankTransfer' ,component: AmazonGiftCardComponent },
  { path: 'IWT-SWIFT'  ,component: InternationalWireTransferComponent },
  { path: 'IMPS-Transfer', component: IMPSTransferComponent },
  { path: 'Domestic-Wire-Transfer', component: DomesticWireTransferComponent },
  { path: 'Sepa', component: SEPAComponent },
  { path: 'modelView' ,component: ModelViewComponent},
  { path: 'onlinewallet', component: OnlinewalletComponent },
  { path: 'GooglePay', component: GooglepayComponent },
  { path: 'Paytm', component: PaytmComponent },
  { path: 'Phonepe', component: PhonepeComponent },
  { path: 'MPesa', component: MpesaComponent },
  { path: 'Paypal', component: PaypalComponent },
  { path: 'amazon-gift-card', component: AmazonGiftCardComponent },
  { path: 'steam-wallet-gift-card', component: SteamWalletGiftCardComponent },
  { path: 'i-tunes-gift-card', component: ITunesGiftCardComponent },
  { path: 'google-play-gift-card', component: GooglePlayGiftCardComponent },
  { path: 'e-bay-gift-card', component: EBayGiftCardComponent },
  { path: 'western-union', component: WesternUnionComponent },
  { path: 'money-gram', component: MoneyGramComponent },
  { path: 'cash-in-person', component: CashInPersonComponent },
  { path: 'cash-deposite-to-bank', component: CashDepositeToBankComponent },
  { path: 'ria-money-transfer', component: RIAmoneyTransferComponent },
  { path: 'eth', component: ETHComponent },
  { path: 'ltc', component: LTCComponent },
  { path: 'stellar-lumens-xlm', component: StellarLumensXLMComponent },
  { path: 'bcc-bch', component: BCCBCHComponent },
  { path: 'ripple-xrp', component: RippleXRPComponent },
  { path: 'TradeInfo', component: TransactionpageComponent },
  { path: 'Sell-BitCoin', component: SellBitcoinComponent },
  { path: 'Buy-BitCoin', component: BuyBitCoinComponent },
  { path: 'User/Profile', component: ProfilePageComponent },
  { path: 'User/UserAccount', component: UserAccountComponent },
  { path: 'Trade-Partner', component: TradePartnerComponent },
  { path: 'Transaction-History', component: TransactionHistoryComponent },
  { path: 'VendorDashboard', component: VendorDashboardComponent},
  { path: 'Forgot-Password', component: ForgetPasswordComponent },
  { path: 'Reset-Password', component: ResetPasswordComponent },
  { path: 'Create-SellBitCoin', component: CreateSellBitcoinComponent },
  { path: 'Notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
