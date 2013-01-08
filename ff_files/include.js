var sWOGateway   = "gateway.respondq.com"; 
var sWOGatewaySSL= "gateway.respondq.com";
var sWODomain    = "www.buyverizon.com";
var sWOChatstart = "https://chat.respondq.com/chat/chatstart.htm";
var sWODepartment="";
var sWOLanguage="";
var sWOBackgroundURL="";
var sWOResponse="Y";
var sWOInvite="Y";
var sWOPreselect="";
var sWOUser="";
var sWOPage="";
var sWOCost=0;var sWORevenue=0;
var sWOName="";var sWOCompany="";var sWOEmail="";var sWOTelephone="";
var sWOProtocol=window.location.protocol;
var sWOImage=document.createElement('img');
var sWOChatElement;var sWOSession;var sWOUrl;var sWOMobile=false;
var sWOChatVars="";
sWOImage.border=0;
if(sWOUser==""){
	var dt=new Date();var sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf("respondq")==-1){sWOSession=parseInt(Math.random()*1000)+"-"+dt.getTime

();document.cookie="respondq="+sWOSession+";expires=Thu, 31-Dec-2020 00:00:00 GMT; path=/";}
	sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf('respondq')==-1){sWOSession="";} else {
		var s=sWOCookie.indexOf("respondq=")+"respondq=".length;var e=sWOCookie.indexOf(";",s);
		if(e==-1)e=sWOCookie.length;sWOSession=sWOCookie.substring(s,e);}}
if(sWOProtocol=="https:")sWOGateway=sWOGatewaySSL;if(sWOUser!="")sWOSession=sWOUser;if(sWOProtocol=="file:")

sWOProtocol="http:";
function sWOStartChat(){if(!sWOMobile){window.open(sWOChatElement.href,"Chat","width=484,height=361");return false;}}
function sWOImageLoaded(){sWOChatElement.href=sWOChatstart+sWOChatVars;
if (!sWOMobile){sWOChatElement.target = "_blank";}sWOChatElement.appendChild(sWOImage);sWOChatElement.onclick=sWOStartChat;}
function sWOTrackPage(){
	if(sWOPage=="")sWOPage=escape(window.location);
	sWOUrl=sWOProtocol+"//"+sWOGateway+"/stat.gif?u="+sWOSession+"&d="+sWODomain;
	if(sWODepartment.length>0)sWOUrl+="&t="+escape(sWODepartment);
	sWOUrl+="&p='"+sWOPage+"'&r='"+escape(document.referrer)+"'";
	if(sWOCost!=0)sWOUrl+="&c="+sWOCost;if(sWORevenue!=0)sWOUrl+="&v="+sWORevenue;
	if(sWOName!=""||sWOCompany!=""||sWOEmail!=""||sWOTelephone!="")
    sWOUrl+="&n="+sWOName+"|"+sWOCompany+"|"+sWOEmail+"|"+sWOTelephone;
	sWOImage.onload=sWOImageLoaded;sWOChatElement=document.getElementById('respondq_chat_link');
		if(! sWOChatElement){document.write("<a id='respondq_chat_link'></a>");sWOChatElement = document.getElementById('respondq_chat_link');}
        sWOUrl+="&response=g";sWOChatstart+="?domain="+sWODomain;if(sWOLanguage.length>0)sWOChatstart+="&"+sWOLanguage;
		if(sWOBackgroundURL!="")sWOChatstart+="&bg="+sWOBackgroundURL;if(sWODepartment.length>0)
		sWOChatstart+="&dept="+escape(sWODepartment);if(sWOPreselect.length>0)sWOChatstart+="&select="+sWOPreselect;
		sWOUrl+='&timestamp='+(new Date()).getTime();
		if(sWOSession!=''){sWOChatstart+='&session='+sWOSession;}
		if(sWOChatVars!=""){sWOChatstart+='&session='+sWOSession;}
		sWOImage.src = sWOUrl;	
	sWOUrl=sWOProtocol+"//"+sWOGateway+"/invite.js?domain="+sWODomain;if(sWOInvite=="Y")document.write("<sc"+"ript src='"+sWOUrl+"'><\/scr"+"ipt>");
}
function sWOAddVariable(pFi,pFv) {
var iWO=new Image(1,1);
var stPUrl=sWOProtocol+"//"+sWOGateway+"/form.gif?u="+sWOSession+"&d="+sWODomain+"&frm='AutoVariable'&frn='"+pFi+"'&frd='"+pFv+"'";iWO.src=stPUrl;
sWOChatVars+=('&x-'+pFi+'='+pFv);
if(typeof(sWOChatElement)!='undefined'){sWOChatElement.href=sWOChatstart+sWOChatVars;}
}
function sWODetectMob(a){if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true
else return false}
sWOMobile=sWODetectMob(navigator.userAgent||navigator.vendor||window.opera);	
if (sWOMobile) {
	sWOChatstart = 'https://chat.respondq.com/mobile/chatstart.aspx';
}
