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

Java.perform(function() {
  var SQLCipher = Java.use("net.sqlcipher.database.SQLiteDatabase");
  var SQLHelper = Java.use("net.sqlcipher.database.SQLiteOpenHelper");
  
  if (SQLHelper.getWritableDatabase) {
    console.log("We got getWritableDatabase");
    SQLHelper.getWritableDatabase.overload.implementation = function(password) {
      console.log("Tada");
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLCipher';
      send_data.lib = 'net.sqlcipher.database.SQLiteDatabase';
      send_data.method = 'getWritableDatabase';
      send_data.artifact = [];
      var data = {};
      data.name = "Password";
      data.value = normalizeInput(password);
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.getWritableDatabase.overload.apply(this, arguments);
    }
  }
  
  if (SQLCipher.openDatabase) {
    console.log("We got SQLCipher");
    SQLCipher.openDatabase.overloads[0].implementation = function(path,password,factory,Flags,databaseHook) {
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLCipher';
      send_data.lib = 'net.sqlcipher.database.SQLiteDatabase';
      send_data.method = 'openDatabase';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = normalizeInput(password);
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.openDatabase.overloads[0].apply(this, arguments);
    }
  }
      
  if (SQLCipher.openOrCreateDatabase) {
    SQLCipher.openOrCreateDatabase.overloads[0].implementation = function(file,password,factory,databaseHook) {
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLCipher';
      send_data.lib = 'net.sqlcipher.database.SQLiteDatabase';
      send_data.method = 'openOrCreateDatabase';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = normalizeInput(password);
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.openOrCreateDatabase.overloads[0].apply(this, arguments);
    }
    
    SQLCipher.openOrCreateDatabase.overloads[1].implementation = function(file,password,factory) {
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLCipher';
      send_data.lib = 'net.sqlcipher.database.SQLiteDatabase';
      send_data.method = 'openOrCreateDatabase';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = normalizeInput(password);
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.openOrCreateDatabase.overloads[1].apply(this, arguments);
    }
    
      SQLCipher.openOrCreateDatabase.overloads[2].implementation = function(file,password,factory,databaseHook,errorHandler) {
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLCipher';
      send_data.lib = 'net.sqlcipher.database.SQLiteDatabase';
      send_data.method = 'openOrCreateDatabase';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = normalizeInput(password);
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.openOrCreateDatabase.overloads[2].apply(this, arguments);
    }

  }
});
