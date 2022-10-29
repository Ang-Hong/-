/*******************************
  
群1772500
*******************************
[rewrite_local]
^http[s]?:\/\/account.wps.cn.+$ url script-response-body https://raw.githubusercontent.com/Ang-Hong/-/main/Ceshwps.js
[mitm] 
hostname = *.wps.*
*******************************
Surge

[Script]
^http[s]?:\/\/account.wps.cn.+$ requires-body=1,max-size=0,script-path=wps.js

[MITM]
hostname = *.wps.*

*******************************/
var obj = JSON.parse($response.body);
    obj.privilege=  6666666666
  }];
obj.enabled=  666666666666
    }];
obj.has_ad= 0;
    $done({body: JSON.stringify(obj)});
