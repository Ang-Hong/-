/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
WPS会员 
脚本名称:WPS会员 
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/account.wps.cn.+$ url script-response-body wps.js
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
    obj.data.privilege=  6666666666
  }];
obj.data.enabled=  666666666666
    }];
obj.data.has_ad= 0;
    $done({body: JSON.stringify(obj)});
