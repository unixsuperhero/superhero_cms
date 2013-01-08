function toggleVisibility(obj, initialValue) {
    var el;
    if (typeof obj == 'string')
        el = document.getElementById(obj);
    else
        el = obj;
    if ((el.style.display == '') && !(initialValue === undefined)) {
        el.style.display = initialValue;
    }
    if (el.style.display != 'block') {
        el.style.display = 'block';
    }
    else {
        el.style.display = 'none';
    }
}

try {

    suggestAddress = function() { };

    var div = document.createElement('div');

    var phoneNum = getVerizonPhoneNumber();
    $('dvAddressCongratulations').innerHTML =
    //'<div id="endConflict"><div id="resultsWrapper">' +
    //  '<div class="results-padding"> ' +
    //    '<div class="hangLeft">' +
    //      '<h1 class="headline">Unbelievable deals are just <br /> a phone call away!</h1>' +
    //      '<h2 class="sub-headline">Call Now 1-866-123-4569</h2>' +
    //     ' <h3 class="results-info">Specially-trained Verizon representatives are standing by to take your calls!</h3>' +
    //       ' <h4 class="offerAlert">Plus, Learn How to </h4> ' +
    //     ' <div class="halfLeft callout">' +
    //        '<p> Get Up To <br />   <sup>$</sup> <span>360</span> <sup>*</sup> <span>Back</span> </p>' +
    //      '</div>' +
    //      ' <div class="halfRight cardDetail"> ' +
    //        ' &nbsp;' +
    //        ' <p> Plus: Get A<br /> <span>$200 Visa<sup>&reg;</sup></span> <br /> prepaid card </p>' +
    //      ' </div>' +
    //      ' <div class="clear"></div>' +
    //    ' </div> ' +
    //    ' <div class="hangRight">' +
    //      ' &nbsp;' +
    //    ' </div>' +
    //    ' <div class="clear"></div>' +
    //    ' <div class="results-disclaimer"> ' +
    //    '  <p> *FiOS Triple Bundle: $360 Savings: $30/mo. X 12 mos. $100 back via Visa® prepaid card issued by MetaBankTM pursuant to a license from Visa U.S.A. Inc. Use where Visa debit cards are accepted. Must have service for 60 days with no past due balance. Card mailed within 90 days of install date. Other card terms and conditions apply. Offer for new Verizon FiOS TV residential customers  subscribing to a FiOS Triple Play bundle. Promotional rate available via $30 bill credit for first 12 months only; beginning month 13 standard monthly rates apply. $49.99 activation &amp; other fees, taxes, equipment charges &amp; terms apply. Subject to credit approval &amp; may require a deposit. FiOS available in select areas. Actual speeds may vary. Battery backup for standard fiber-based voice service, FiOS Digital Voice &amp; E911 (but not other voice services) for up to 8 hours. Must sign up by 11/05/11. © 2011 Verizon. </p> ' +
    //    '</div> ' +
    //  ' </div>' +
    //  '<!-- End padding -->' +
    //'</div></div>' +

                 '<span>' + getAddressString(Address) + '</span>';
    //                '<span id="lblAddressAvailable" style="display:none;"> </span>';

    $('yuiDataTable').style.display = 'none';
    $('dvFilter').style.display = 'none';
    $('dvAddressAvailable').style.display = 'none';
    $('dvShoppingCart').style.display = 'none';

    var dvLoadBar = $('ajaxSearching');
    dvLoadBar.style.position = "relative";
    dvLoadBar.style.left = "150px"; //org 200px;
    window.location = "/compare-offers.aspx";
}
catch (Error) { };

function getVerizonPhoneNumber() {
    var phoneNum = "Customer Service";
    var phoneDiv = $('divPhoneNum');
    if (phoneDiv != null) {
        if (phoneDiv.innerHTML != null && phoneDiv.innerHTML != "") { phoneNum = phoneDiv.innerHTML; }
    }
    return phoneNum;
}

function getAddressString(a) {
    var AddressString = "";

    AddressString += a.Address1;
    if (a.Address2 != "") {
        AddressString += ", " + a.Address2;
    }
    AddressString += ", " + a.City + ", " + a.State + ", " + a.Zip;

    return AddressString;
}
