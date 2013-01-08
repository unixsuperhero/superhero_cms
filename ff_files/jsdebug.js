Type.registerNamespace('Telco.Core.CompareOffers');
Telco.Core.CompareOffers.SaveologyService=function() {
Telco.Core.CompareOffers.SaveologyService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Telco.Core.CompareOffers.SaveologyService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_path();},
SearchProvider:function(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,succeededCallback, failedCallback, userContext) {
/// <param name="ProviderID" type="Number">System.Int64</param>
/// <param name="AddressQueryString" type="String">System.String</param>
/// <param name="Telephone" type="String">System.String</param>
/// <param name="isResubmit" type="Boolean">System.Boolean</param>
/// <param name="SessionID" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'SearchProvider',false,{ProviderID:ProviderID,AddressQueryString:AddressQueryString,Telephone:Telephone,isResubmit:isResubmit,SessionID:SessionID},succeededCallback,failedCallback,userContext); },
SearchProviderWithSession:function(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,succeededCallback, failedCallback, userContext) {
/// <param name="ProviderID" type="Number">System.Int64</param>
/// <param name="AddressQueryString" type="String">System.String</param>
/// <param name="Telephone" type="String">System.String</param>
/// <param name="isResubmit" type="Boolean">System.Boolean</param>
/// <param name="SessionID" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'SearchProviderWithSession',false,{ProviderID:ProviderID,AddressQueryString:AddressQueryString,Telephone:Telephone,isResubmit:isResubmit,SessionID:SessionID},succeededCallback,failedCallback,userContext); },
RefreshCart:function(succeededCallback, failedCallback, userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'RefreshCart',false,{},succeededCallback,failedCallback,userContext); },
AddItemToCart:function(productKey,succeededCallback, failedCallback, userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'AddItemToCart',false,{productKey:productKey},succeededCallback,failedCallback,userContext); },
RemoveItemFromCart:function(productKey,succeededCallback, failedCallback, userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'RemoveItemFromCart',false,{productKey:productKey},succeededCallback,failedCallback,userContext); },
GetCustomizationClientScript:function(productKey,succeededCallback, failedCallback, userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetCustomizationClientScript',false,{productKey:productKey},succeededCallback,failedCallback,userContext); },
SetSessionVar:function(key,value,succeededCallback, failedCallback, userContext) {
/// <param name="key" type="String">System.String</param>
/// <param name="value" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'SetSessionVar',false,{key:key,value:value},succeededCallback,failedCallback,userContext); },
InitializeSupportSquadOrder:function(sku,succeededCallback, failedCallback, userContext) {
/// <param name="sku" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'InitializeSupportSquadOrder',false,{sku:sku},succeededCallback,failedCallback,userContext); },
InitializeSupportSquadDownload:function(sku,succeededCallback, failedCallback, userContext) {
/// <param name="sku" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'InitializeSupportSquadDownload',false,{sku:sku},succeededCallback,failedCallback,userContext); },
FinalizeSupportSquadOrder:function(succeededCallback, failedCallback, userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'FinalizeSupportSquadOrder',false,{},succeededCallback,failedCallback,userContext); },
FinalizeSupportSquadDownload:function(succeededCallback, failedCallback, userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'FinalizeSupportSquadDownload',false,{},succeededCallback,failedCallback,userContext); }}
Telco.Core.CompareOffers.SaveologyService.registerClass('Telco.Core.CompareOffers.SaveologyService',Sys.Net.WebServiceProxy);
Telco.Core.CompareOffers.SaveologyService._staticInstance = new Telco.Core.CompareOffers.SaveologyService();
Telco.Core.CompareOffers.SaveologyService.set_path = function(value) {
Telco.Core.CompareOffers.SaveologyService._staticInstance.set_path(value); }
Telco.Core.CompareOffers.SaveologyService.get_path = function() { 
/// <value type="String" mayBeNull="true">The service url.</value>
return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_path();}
Telco.Core.CompareOffers.SaveologyService.set_timeout = function(value) {
Telco.Core.CompareOffers.SaveologyService._staticInstance.set_timeout(value); }
Telco.Core.CompareOffers.SaveologyService.get_timeout = function() { 
/// <value type="Number">The service timeout.</value>
return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_timeout(); }
Telco.Core.CompareOffers.SaveologyService.set_defaultUserContext = function(value) { 
Telco.Core.CompareOffers.SaveologyService._staticInstance.set_defaultUserContext(value); }
Telco.Core.CompareOffers.SaveologyService.get_defaultUserContext = function() { 
/// <value mayBeNull="true">The service default user context.</value>
return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_defaultUserContext(); }
Telco.Core.CompareOffers.SaveologyService.set_defaultSucceededCallback = function(value) { 
 Telco.Core.CompareOffers.SaveologyService._staticInstance.set_defaultSucceededCallback(value); }
Telco.Core.CompareOffers.SaveologyService.get_defaultSucceededCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default succeeded callback.</value>
return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_defaultSucceededCallback(); }
Telco.Core.CompareOffers.SaveologyService.set_defaultFailedCallback = function(value) { 
Telco.Core.CompareOffers.SaveologyService._staticInstance.set_defaultFailedCallback(value); }
Telco.Core.CompareOffers.SaveologyService.get_defaultFailedCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default failed callback.</value>
return Telco.Core.CompareOffers.SaveologyService._staticInstance.get_defaultFailedCallback(); }
Telco.Core.CompareOffers.SaveologyService.set_path("/CompareOffers/SaveologyService.asmx");
Telco.Core.CompareOffers.SaveologyService.SearchProvider= function(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,onSuccess,onFailed,userContext) {
/// <param name="ProviderID" type="Number">System.Int64</param>
/// <param name="AddressQueryString" type="String">System.String</param>
/// <param name="Telephone" type="String">System.String</param>
/// <param name="isResubmit" type="Boolean">System.Boolean</param>
/// <param name="SessionID" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.SearchProvider(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.SearchProviderWithSession= function(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,onSuccess,onFailed,userContext) {
/// <param name="ProviderID" type="Number">System.Int64</param>
/// <param name="AddressQueryString" type="String">System.String</param>
/// <param name="Telephone" type="String">System.String</param>
/// <param name="isResubmit" type="Boolean">System.Boolean</param>
/// <param name="SessionID" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.SearchProviderWithSession(ProviderID,AddressQueryString,Telephone,isResubmit,SessionID,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.RefreshCart= function(onSuccess,onFailed,userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.RefreshCart(onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.AddItemToCart= function(productKey,onSuccess,onFailed,userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.AddItemToCart(productKey,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.RemoveItemFromCart= function(productKey,onSuccess,onFailed,userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.RemoveItemFromCart(productKey,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.GetCustomizationClientScript= function(productKey,onSuccess,onFailed,userContext) {
/// <param name="productKey" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.GetCustomizationClientScript(productKey,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.SetSessionVar= function(key,value,onSuccess,onFailed,userContext) {
/// <param name="key" type="String">System.String</param>
/// <param name="value" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.SetSessionVar(key,value,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.InitializeSupportSquadOrder= function(sku,onSuccess,onFailed,userContext) {
/// <param name="sku" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.InitializeSupportSquadOrder(sku,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.InitializeSupportSquadDownload= function(sku,onSuccess,onFailed,userContext) {
/// <param name="sku" type="String">System.String</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.InitializeSupportSquadDownload(sku,onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.FinalizeSupportSquadOrder= function(onSuccess,onFailed,userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.FinalizeSupportSquadOrder(onSuccess,onFailed,userContext); }
Telco.Core.CompareOffers.SaveologyService.FinalizeSupportSquadDownload= function(onSuccess,onFailed,userContext) {
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
Telco.Core.CompareOffers.SaveologyService._staticInstance.FinalizeSupportSquadDownload(onSuccess,onFailed,userContext); }
