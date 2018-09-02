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

setImmediate(function() {
    Java.perform(function() {
        var sqlite3_key = Module.findExportByName("libsqlcipher_android.so","sqlite3_key");
        var sqlite3_exec = Module.findExportByName("libsqlcipher_android.so","sqlite3_exec");
        var sqlite3_rekey = Module.findExportByName("libsqlcipher_android.so","sqlite3_key");
        
        if (sqlite3_key)
        {
            Interceptor.attach(sqlite3_key, {
                onEnter: function (args)
                {
                  console.log("We got SQLCipher key"); 
                  var len=args[2];
                  var pw=Memory.readUtf8String(args[1],parseInt(len));
                  var send_data = {};
                  send_data.time = new Date();
                  send_data.txnType = 'SQLCipher';
                  send_data.lib = 'libdatabase_sqlcipher.so';
                  send_data.method = 'sqlite3_key';
                  send_data.artifact = [];
                  var data = {};
                  data.name = "Password";
                  data.value = normalizeInput(pw);
                  data.argSeq = 0;
                  send_data.artifact.push(data);
                  send(JSON.stringify(send_data));
                }
            });
        }
        
        if (sqlite3_rekey)
        {
            Interceptor.attach(sqlite3_rekey, {
                onEnter: function (args)
                {
                  console.log("We got SQLCipher rekey"); 
                  var len=args[2];
                  var pw=Memory.readUtf8String(args[1],parseInt(len));
                  var send_data = {};
                  send_data.time = new Date();
                  send_data.txnType = 'SQLCipher';
                  send_data.lib = 'libdatabase_sqlcipher.so';
                  send_data.method = 'sqlite3_key';
                  send_data.artifact = [];
                  var data = {};
                  data.name = "Password";
                  data.value = normalizeInput(pw);
                  data.argSeq = 0;
                  send_data.artifact.push(data);
                  send(JSON.stringify(send_data));
                }
            });
        }
        
        if (sqlite3_exec)
        {
            Interceptor.attach(sqlite3_exec, {
                onEnter: function (args)
                {
                  console.log("We got SQLCipher exec running"); 
                  var command=Memory.readUtf8String(args[1]);
                  var send_data = {};
                  send_data.time = new Date();
                  send_data.txnType = 'SQLCipher';
                  send_data.lib = 'libdatabase_sqlcipher.so';
                  send_data.method = 'sqlite3_exec';
                  send_data.artifact = [];
                  var data = {};
                  data.name = "Cmd";
                  data.value = normalizeInput(command);
                  data.argSeq = 0;
                  send_data.artifact.push(data);
                  send(JSON.stringify(send_data));
                }
            });
        }
        

    });
});
