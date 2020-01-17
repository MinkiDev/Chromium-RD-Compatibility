// if(check_url()) {
    var eTags = document.getElementsByTagName("span");
    var searchText = "Continue Anyway";
    var searchTextAlt = "계속하기";
    var elm;   

    for (var i = 0; i < eTags.length; i++) {
        if ((eTags[i].textContent == searchText) || (eTags[i].textContent == searchTextAlt)) {
            elm = eTags[i];
            break;
        }
    }

    if (typeof elm !== 'undefined') elm.click();
// }

function check_url() {
    var flag = false;
    var array = [ "remote", "google", "unsupport", "access" ];
    array.forEach(element => {
        if(!window.location.href.includes(element)) {
            flag = false;
            return flag;
        } else {
            flag = true;
        }
    });
    return flag;
}