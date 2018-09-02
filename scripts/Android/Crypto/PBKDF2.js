/**
 * Copyright (c) 2017 Bjoern Kerler.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/


'use strict';
var mode = "";

var convArray = function(bytes)
{
    var v=new Uint8Array(bytes);
    var i=0;
    var str="";
    for (i=0;i<v.byteLength;i++)
    {
        str+=('0' + (v[i] & 0xFF).toString(16)).slice(-2);
    }
    return str;
}

var byteArraytoHexString = function(byteArray) {
  if (byteArray && byteArray.map) {
    return byteArray.map(function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  } else {
    return byteArray + "";
  }
}

var hexToAscii = function(input) {
  var hex = input.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

var normalizeInput = function(input) {
  if (input.array) {
    var normalized = byteArraytoHexString(input.array());
  } else if (input.length && input.length > 0) {
    var normalized = byteArraytoHexString(input);
  } else {
    var normalized = input.toString();
  }
  return normalized;
}

var decodeArray = function(input, inputlen) {
    var length=parseInt(inputlen);
    var inp=ptr(input);
    //console.log(inp);
    //console.log(inputlen);
    var rawKey = Memory.readByteArray(inp,length);
    //console.log(rawKey);
    var key=convArray(rawKey);
    return key;
}

var array=Process.enumerateModulesSync();
var mm=new ModuleMap();

setImmediate(function() {
    Java.perform(function() {
        
        for (var x=0;x<(array.length);x++) 
        { 
            var pkcs5 = Module.findExportByName(array[x].name,"PKCS5_PBKDF2_HMAC");
            if (pkcs5!=null)
            {
                console.log("We hooked PKCS5_PBKDF2_HMAC in: "+array[x].name); 
                
                Interceptor.attach(pkcs5, {
                    onEnter: function (args)
                    {
                      this.a0=args[0]
                      this.a1=args[1]
                      this.a2=args[2]
                      this.a3=args[3]
                      this.a4=args[4]
                      this.a5=args[5]
                      this.a6=args[6]
                      this.a7=args[7]
                    },
                    
                    onLeave: function (retval)
                    {
                      var pw=decodeArray(this.a0,this.a1);
                      var salt=decodeArray(this.a2,this.a3);
                      var iteration=parseInt(this.a4).toString();
                      var digest=this.a5;
                      var hash=decodeArray(this.a7,this.a6);
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'PKCS5_PBKDF2_HMAC';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'PKCS5_PBKDF2_HMAC';
                      send_data.artifact = [];
                      /*console.log(hexdump(args[0], { offset: 0, length: parseInt(args[1]), header: true, ansi: false }));
                      console.log(hexdump(args[2], { offset: 0, length: parseInt(args[3]), header: true, ansi: false }));
                      console.log(parseInt(args[4]));
                      */
                      
                      var data = {};
                      data.name = "InitOptions";
                      data.value = "Password:"+pw+";Salt:"+salt+";Iterations:"+iteration+";";
                      data.argSeq = 0;
                      send_data.artifact.push(data);
                      
                      var data2 = {};
                      data2.name = "Hash";
                      data2.value = hash;
                      data2.argSeq = 0;
                      send_data.artifact.push(data2);
                      
                      send(JSON.stringify(send_data));  
                    }
                });
            }
        }

    });
});
