/* ____Bluetooth/Bluetooth.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function(argument) {
  var Context = Java.use("android.content.Context");
  var BluetoothGatt = Java.use("android.bluetooth.BluetoothGatt");
  var BluetoothGattCharacteristic = Java.use("android.bluetooth.BluetoothGattCharacteristic");
  
  BluetoothGatt.readCharacteristic.overload("android.bluetooth.BluetoothGattCharacteristic").implementation = function(characteristic) {
    //console.log("characteristic: ", characteristic.getUuid(), " readCharacteristic: ", characteristic.getValue());
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Bluetooth';
    send_data.lib = 'android.bluetooth.BluetoothGatt';
    send_data.method = 'readCharacteristic';
    send_data.artifact = [];
    /*   --- Payload Body --- */
    var data = {};
    data.name = characteristic.getUuid().toString();
    data.value = characteristic.getValue().toString();
    data.argSeq = 0;
    send_data.artifact.push(data);
    send(JSON.stringify(send_data));
    return this.readCharacteristic.overload("android.bluetooth.BluetoothGattCharacteristic").apply(this, arguments);
  };

  BluetoothGattCharacteristic.setValue.overload("[B").implementation = function(value) {
    //console.log("characteristic: ", this.getUuid(), " setValue [B: ", value);
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Bluetooth';
    send_data.lib = 'android.bluetooth.BluetoothGattCharacteristic';
    send_data.method = 'setValue';
    send_data.artifact = [];
    /*   --- Payload Body --- */
    var data = {};
    data.name = this.getUuid().toString();
    data.value = value.toString();
    data.argSeq = 0;
    send_data.artifact.push(data);
    send(JSON.stringify(send_data));
    return this.setValue.overload("[B").apply(this, arguments);
  };

});

/* ____Clipboard/Clipboard.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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
Java.perform(function(argument) {
  var Context = Java.use("android.content.Context");
  var ClipboardManager = Java.use("android.content.ClipboardManager");
  ClipboardManager.setPrimaryClip.implementation = function(clip) {
    //console.log('Count: ' + clip.getItemCount());
    for (var i = 0; i < clip.getItemCount(); i++) {
      if (clip.getItemAt(i).getIntent()) {
        //console.log('getIntent: ' + clip.getItemAt(i).getIntent());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Clipboard';
        send_data.lib = 'android.content.ClipboardManager';
        send_data.method = 'setPrimaryClip';
        send_data.artifact = [];
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Intent";
        data.value = clip.getItemAt(i).getIntent().toString();
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      } else if (clip.getItemAt(i).getHtmlText()) {
        //console.log('getHtmlText: ' + clip.getItemAt(i).getHtmlText());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Clipboard';
        send_data.lib = 'android.content.ClipboardManager';
        send_data.method = 'setPrimaryClip';
        send_data.artifact = [];
        /*   --- Payload Body --- */
        var data = {};
        data.name = "HTML Text";
        data.value = clip.getItemAt(i).getHtmlText().toString();
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      } else if (clip.getItemAt(i).getUri()) {
        //console.log('getUri: ' + clip.getItemAt(i).getUri());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Clipboard';
        send_data.lib = 'android.content.ClipboardManager';
        send_data.method = 'setPrimaryClip';
        send_data.artifact = [];
        /*   --- Payload Body --- */
        var data = {};
        data.name = "URI";
        data.value = clip.getItemAt(i).getUri().toString();
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      } else if (clip.getItemAt(i).getText()) {
        //console.log('getText: ' + clip.getItemAt(i).getText());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Clipboard';
        send_data.lib = 'android.content.ClipboardManager';
        send_data.method = 'setPrimaryClip';
        send_data.artifact = [];
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Text";
        data.value = clip.getItemAt(i).getText().toString();
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      } else {
        //console.log('toString: ' + clip.getItemAt(i).toString());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Clipboard';
        send_data.lib = 'android.content.ClipboardManager';
        send_data.method = 'setPrimaryClip';
        send_data.artifact = [];
        /*   --- Payload Body --- */
        var data = {};
        data.name = "String";
        data.value = clip.getItemAt(i).toString();
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      }
    }
    return this.setPrimaryClip.apply(this, arguments);
  }
});

/* ____Crypto/Cipher.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var getMode = function(Cipher, mode) {
  if (mode === 2) {
    mode = "DECRYPT";
  } else if (mode === 1) {
    mode = "ENCRYPT";
  }
  return mode;
}

var getRandomValue = function(arg) {
  if (!arg) { return 'null'; }
  var type = arg.toString().split('@')[0].split('.');
  type = type[type.length - 1];
  if (type === "SecureRandom") {
    if (arg.getSeed) {
      return byteArraytoHexString(arg.getSeed(10));
    }
  }
}

var normalizeKey = function(cert_or_key) {
  var type = cert_or_key.toString().split('@')[0].split('.');
  type = type[type.length - 1];
  if (type === "SecretKeySpec") {
    return byteArraytoHexString(cert_or_key.getEncoded());
  } else {
    return "non-SecretKeySpec: "+ cert_or_key.toString() + ", encoded: " + byteArraytoHexString(cert_or_key.getEncoded()) + ", object: " + JSON.stringify(cert_or_key);
  }

}

Java.perform(function() {
  var Cipher = Java.use("javax.crypto.Cipher");
  var PBEKeySpec = Java.use("javax.crypto.spec.PBEKeySpec");
  var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
  var SecureRandom = Java.use("java.security.SecureRandom");

  if (Cipher.getInstance) {
    Cipher.getInstance.overloads[0].implementation = function(transformation) {
      //console.log("Cipher.getInstance: " + transformation);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'getInstance';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = transformation;
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.getInstance.overloads[0].apply(this, arguments);
    }

    Cipher.getInstance.overloads[0].implementation = function(transformation, provider) {
      //console.log("Cipher.getInstance: " + transformation);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'getInstance';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = transformation;
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.getInstance.overloads[0].apply(this, arguments);
    }

    Cipher.getInstance.overloads[0].implementation = function(transformation, provider) {
      //console.log("Cipher.getInstance: " + transformation);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'getInstance';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = transformation;
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.getInstance.overloads[0].apply(this, arguments);
    }
  }

  if (Cipher.init) {
    Cipher.init.overloads[0].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[0].apply(this, arguments);
    }

    Cipher.init.overloads[1].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      data = {};
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[1].apply(this, arguments);
    }

    Cipher.init.overloads[2].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[2].apply(this, arguments);
    }

    Cipher.init.overloads[3].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[3].apply(this, arguments);
    }

    Cipher.init.overloads[4].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[4].apply(this, arguments);
    }

    Cipher.init.overloads[5].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[5].apply(this, arguments);
    }

    Cipher.init.overloads[6].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[6].apply(this, arguments);
    }

    Cipher.init.overloads[7].implementation = function(opmode, cert_or_key, params_or_random) {
      if (opmode) {
        //console.log("Mode: " + getMode(this, opmode));
      }
      if (cert_or_key) {
        //console.log("Key: " + normalizeKey(cert_or_key));
      }
      if (params_or_random) {
        //console.log(getRandomValue(params_or_random));
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'init';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Operation Mode";
      data.value = getMode(this, opmode);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Key";
      data.value = normalizeKey(cert_or_key);
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Random Value";
      data.value = getRandomValue(params_or_random);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.init.overloads[7].apply(this, arguments);
    }

  }

  if (Cipher.doFinal) {
    Cipher.doFinal.overloads[0].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[0].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }

    Cipher.doFinal.overloads[1].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[1].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }


    Cipher.doFinal.overloads[2].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[2].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }


    Cipher.doFinal.overloads[3].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[3].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }


    Cipher.doFinal.overloads[4].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[4].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }


    Cipher.doFinal.overloads[5].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[5].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }


    Cipher.doFinal.overloads[6].implementation = function(input) {
      if (input) {
        //console.log("Input Data: " + normalizeInput(input));
      }
      //console.log("Cipher.getAlgorithm: " + this.getAlgorithm());
      //console.log("Cipher.getIV: " + byteArraytoHexString(this.getIV()));
      //console.log("Cipher.getBlockSize: " + this.getBlockSize());
      var retVal = this.doFinal.overloads[6].apply(this, arguments);
      //console.log("Cipher.doFinal retVal: " + byteArraytoHexString(retVal));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'javax.crypto.Cipher';
      send_data.method = 'doFinal';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = this.getAlgorithm();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Initialization Vector";
      data.value = byteArraytoHexString(this.getIV());
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Block Size";
      data.value = this.getBlockSize();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      data = {};
      data.name = "Output";
      data.value = byteArraytoHexString(retVal);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return retVal;
    }

  }

  if (SecureRandom.setSeed) {
    SecureRandom.setSeed.overloads[0].implementation = function(seed) {
      //console.log("SecureRandom.setSeed: " + seed);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.SecureRandom';
      send_data.method = 'setSeed';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Seed Value";
      data.value = seed;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.setSeed.overloads[0].apply(this, arguments);
    }

    SecureRandom.setSeed.overloads[1].implementation = function(seed) {
      //console.log("SecureRandom.setSeed: " + seed);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.SecureRandom';
      send_data.method = 'setSeed';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Seed Value";
      data.value = seed;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.setSeed.overloads[1].apply(this, arguments);
    }
  }
});


/* ____Crypto/Hash.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var byteArraytoHexString = function(byteArray) {
  if (!byteArray) { return 'null'; }
  if (byteArray.map) {
    return byteArray.map(function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
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

var updateInput = function(input) {
  if (input.length && input.length > 0) {
    var normalized = byteArraytoHexString(input);
  } else if (input.array) {
    var normalized = byteArraytoHexString(input.array());
  } else {
    var normalized = input.toString();
  }
  return normalized;
}

Java.perform(function() {
  var MessageDigest = Java.use("java.security.MessageDigest");

  if (MessageDigest.digest) {
    MessageDigest.digest.overloads[0].implementation = function() {
      var digest = this.digest.overloads[0].apply(this, arguments);
      var algorithm = this.getAlgorithm().toString();
      //console.log("MessageDigest.getAlgorithm: " + algorithm);
      //console.log("MessageDigest.digest: " + byteArraytoHexString(digest));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'digest';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = algorithm;
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Digest";
      data.value = byteArraytoHexString(digest);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return digest;
    }

    MessageDigest.digest.overloads[1].implementation = function(input) {
      var digest = this.digest.overloads[1].apply(this, arguments);
      var algorithm = this.getAlgorithm().toString();
      //console.log("MessageDigest.getAlgorithm: " + algorithm);
      //console.log("MessageDigest.digest: " + byteArraytoHexString(digest));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'digest';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Algorithm";
      data.value = algorithm;
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Digest";
      data.value = byteArraytoHexString(digest);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return digest;
    }
  }

  if (MessageDigest.update) {
    MessageDigest.update.overloads[0].implementation = function(input) {
      //console.log("MessageDigest.update input: " + updateInput(input));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'update';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Raw Data";
      data.value = updateInput(input);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.update.overloads[0].apply(this, arguments);
    }

    MessageDigest.update.overloads[1].implementation = function(input, offset, len) {
      //console.log("MessageDigest.update input: " + updateInput(input));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'update';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Raw Data";
      data.value = updateInput(input);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.update.overloads[1].apply(this, arguments);
    }

    MessageDigest.update.overloads[2].implementation = function(input) {
      //console.log("MessageDigest.update input: " + updateInput(input));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'update';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Raw Data";
      data.value = updateInput(input);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.update.overloads[2].apply(this, arguments);
    }

    MessageDigest.update.overloads[3].implementation = function(input) {
      //console.log("MessageDigest.update input: " + updateInput(input));
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Crypto';
      send_data.lib = 'java.security.MessageDigest';
      send_data.method = 'update';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Raw Data";
      data.value = updateInput(input);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.update.overloads[3].apply(this, arguments);
    }
  }

});


/* ____Crypto/OpenSSL.js____ */

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
    if (parseInt(input)==0) return "";
    if (parseInt(inputlen)==0) return "";
    var length=parseInt(inputlen);
    var inp=ptr(input);
    //console.log(inp);
    //console.log(inputlen);
    var rawKey = Memory.readByteArray(inp,length);
    //console.log(rawKey);
    var key=convArray(rawKey);
    return key;
}

var algotoname=function (algo)
{
    if (algo==364) return "AD_DVCS";
    else if (algo==419) return "AES-128-CBC";
    else if (algo==916) return "AES-128-CBC-HMAC-SHA1";
    else if (algo==948) return "AES-128-CBC-HMAC-SHA256";
    else if (algo==421) return "AES-128-CFB";
    else if (algo==650) return "AES-128-CFB1";
    else if (algo==653) return "AES-128-CFB8";
    else if (algo==904) return "AES-128-CTR";
    else if (algo==418) return "AES-128-ECB";
    else if (algo==958) return "AES-128-OCB";
    else if (algo==420) return "AES-128-OFB";
    else if (algo==913) return "AES-128-XTS";
    else if (algo==423) return "AES-192-CBC";
    else if (algo==917) return "AES-192-CBC-HMAC-SHA1";
    else if (algo==949) return "AES-192-CBC-HMAC-SHA256";
    else if (algo==425) return "AES-192-CFB";
    else if (algo==651) return "AES-192-CFB1";
    else if (algo==654) return "AES-192-CFB8";
    else if (algo==905) return "AES-192-CTR";
    else if (algo==422) return "AES-192-ECB";
    else if (algo==959) return "AES-192-OCB";
    else if (algo==424) return "AES-192-OFB";
    else if (algo==427) return "AES-256-CBC";
    else if (algo==918) return "AES-256-CBC-HMAC-SHA1";
    else if (algo==950) return "AES-256-CBC-HMAC-SHA256";
    else if (algo==429) return "AES-256-CFB";
    else if (algo==652) return "AES-256-CFB1";
    else if (algo==655) return "AES-256-CFB8";
    else if (algo==906) return "AES-256-CTR";
    else if (algo==426) return "AES-256-ECB";
    else if (algo==960) return "AES-256-OCB";
    else if (algo==428) return "AES-256-OFB";
    else if (algo==914) return "AES-256-XTS";
    else if (algo==1066) return "ARIA-128-CBC";
    else if (algo==1120) return "ARIA-128-CCM";
    else if (algo==1067) return "ARIA-128-CFB";
    else if (algo==1080) return "ARIA-128-CFB1";
    else if (algo==1083) return "ARIA-128-CFB8";
    else if (algo==1069) return "ARIA-128-CTR";
    else if (algo==1065) return "ARIA-128-ECB";
    else if (algo==1123) return "ARIA-128-GCM";
    else if (algo==1068) return "ARIA-128-OFB";
    else if (algo==1071) return "ARIA-192-CBC";
    else if (algo==1121) return "ARIA-192-CCM";
    else if (algo==1072) return "ARIA-192-CFB";
    else if (algo==1081) return "ARIA-192-CFB1";
    else if (algo==1084) return "ARIA-192-CFB8";
    else if (algo==1074) return "ARIA-192-CTR";
    else if (algo==1070) return "ARIA-192-ECB";
    else if (algo==1124) return "ARIA-192-GCM";
    else if (algo==1073) return "ARIA-192-OFB";
    else if (algo==1076) return "ARIA-256-CBC";
    else if (algo==1122) return "ARIA-256-CCM";
    else if (algo==1077) return "ARIA-256-CFB";
    else if (algo==1082) return "ARIA-256-CFB1";
    else if (algo==1085) return "ARIA-256-CFB8";
    else if (algo==1079) return "ARIA-256-CTR";
    else if (algo==1075) return "ARIA-256-ECB";
    else if (algo==1125) return "ARIA-256-GCM";
    else if (algo==1078) return "ARIA-256-OFB";
    else if (algo==1064) return "AuthANY";
    else if (algo==1049) return "AuthDSS";
    else if (algo==1047) return "AuthECDSA";
    else if (algo==1050) return "AuthGOST01";
    else if (algo==1051) return "AuthGOST12";
    else if (algo==1053) return "AuthNULL";
    else if (algo==1048) return "AuthPSK";
    else if (algo==1046) return "AuthRSA";
    else if (algo==1052) return "AuthSRP";
    else if (algo== 91) return "BF-CBC";
    else if (algo== 93) return "BF-CFB";
    else if (algo== 92) return "BF-ECB";
    else if (algo== 94) return "BF-OFB";
    else if (algo==1056) return "BLAKE2b512";
    else if (algo==1057) return "BLAKE2s256";
    else if (algo== 14) return "C";
    else if (algo==751) return "CAMELLIA-128-CBC";
    else if (algo==962) return "CAMELLIA-128-CCM";
    else if (algo==757) return "CAMELLIA-128-CFB";
    else if (algo==760) return "CAMELLIA-128-CFB1";
    else if (algo==763) return "CAMELLIA-128-CFB8";
    else if (algo==964) return "CAMELLIA-128-CMAC";
    else if (algo==963) return "CAMELLIA-128-CTR";
    else if (algo==754) return "CAMELLIA-128-ECB";
    else if (algo==961) return "CAMELLIA-128-GCM";
    else if (algo==766) return "CAMELLIA-128-OFB";
    else if (algo==752) return "CAMELLIA-192-CBC";
    else if (algo==966) return "CAMELLIA-192-CCM";
    else if (algo==758) return "CAMELLIA-192-CFB";
    else if (algo==761) return "CAMELLIA-192-CFB1";
    else if (algo==764) return "CAMELLIA-192-CFB8";
    else if (algo==968) return "CAMELLIA-192-CMAC";
    else if (algo==967) return "CAMELLIA-192-CTR";
    else if (algo==755) return "CAMELLIA-192-ECB";
    else if (algo==965) return "CAMELLIA-192-GCM";
    else if (algo==767) return "CAMELLIA-192-OFB";
    else if (algo==753) return "CAMELLIA-256-CBC";
    else if (algo==970) return "CAMELLIA-256-CCM";
    else if (algo==759) return "CAMELLIA-256-CFB";
    else if (algo==762) return "CAMELLIA-256-CFB1";
    else if (algo==765) return "CAMELLIA-256-CFB8";
    else if (algo==972) return "CAMELLIA-256-CMAC";
    else if (algo==971) return "CAMELLIA-256-CTR";
    else if (algo==756) return "CAMELLIA-256-ECB";
    else if (algo==969) return "CAMELLIA-256-GCM";
    else if (algo==768) return "CAMELLIA-256-OFB";
    else if (algo==108) return "CAST5-CBC";
    else if (algo==110) return "CAST5-CFB";
    else if (algo==109) return "CAST5-ECB";
    else if (algo==111) return "CAST5-OFB";
    else if (algo==894) return "CMAC";
    else if (algo== 13) return "CN";
    else if (algo==141) return "CRLReason";
    else if (algo==417) return "CSPName";
    else if (algo==1019) return "ChaCha20";
    else if (algo==1018) return "ChaCha20-Poly1305";
    else if (algo==367) return "CrlID";
    else if (algo==391) return "DC";
    else if (algo== 31) return "DES-CBC";
    else if (algo==643) return "DES-CDMF";
    else if (algo== 30) return "DES-CFB";
    else if (algo==656) return "DES-CFB1";
    else if (algo==657) return "DES-CFB8";
    else if (algo== 29) return "DES-ECB";
    else if (algo== 32) return "DES-EDE";
    else if (algo== 43) return "DES-EDE-CBC";
    else if (algo== 60) return "DES-EDE-CFB";
    else if (algo== 62) return "DES-EDE-OFB";
    else if (algo== 33) return "DES-EDE3";
    else if (algo== 44) return "DES-EDE3-CBC";
    else if (algo== 61) return "DES-EDE3-CFB";
    else if (algo==658) return "DES-EDE3-CFB1";
    else if (algo==659) return "DES-EDE3-CFB8";
    else if (algo== 63) return "DES-EDE3-OFB";
    else if (algo== 45) return "DES-OFB";
    else if (algo== 80) return "DESX-CBC";
    else if (algo==380) return "DOD";
    else if (algo==116) return "DSA";
    else if (algo== 66) return "DSA-SHA";
    else if (algo==113) return "DSA-SHA1";
    else if (algo== 70) return "DSA-SHA1-old";
    else if (algo== 67) return "DSA-old";
    else if (algo==297) return "DVCS";
    else if (algo==1087) return "ED25519";
    else if (algo==1088) return "ED448";
    else if (algo== 99) return "GN";
    else if (algo==1036) return "HKDF";
    else if (algo==855) return "HMAC";
    else if (algo==780) return "HMAC-MD5";
    else if (algo==781) return "HMAC-SHA1";
    else if (algo==381) return "IANA";
    else if (algo== 34) return "IDEA-CBC";
    else if (algo== 35) return "IDEA-CFB";
    else if (algo== 36) return "IDEA-ECB";
    else if (algo== 46) return "IDEA-OFB";
    else if (algo==1004) return "INN";
    else if (algo==181) return "ISO";
    else if (algo==183) return "ISO-US";
    else if (algo==645) return "ITU-T";
    else if (algo==646) return "JOINT-ISO-ITU-T";
    else if (algo==773) return "KISA";
    else if (algo==1063) return "KxANY";
    else if (algo==1039) return "KxDHE";
    else if (algo==1041) return "KxDHE-PSK";
    else if (algo==1038) return "KxECDHE";
    else if (algo==1040) return "KxECDHE-PSK";
    else if (algo==1045) return "KxGOST";
    else if (algo==1043) return "KxPSK";
    else if (algo==1037) return "KxRSA";
    else if (algo==1042) return "KxRSA_PSK";
    else if (algo==1044) return "KxSRP";
    else if (algo== 15) return "L";
    else if (algo==856) return "LocalKeySet";
    else if (algo==  3) return "MD2";
    else if (algo==257) return "MD4";
    else if (algo==  4) return "MD5";
    else if (algo==114) return "MD5-SHA1";
    else if (algo== 95) return "MDC2";
    else if (algo==911) return "MGF1";
    else if (algo==388) return "Mail";
    else if (algo==393) return "NULL";
    else if (algo==404) return "NULL";
    else if (algo== 57) return "Netscape";
    else if (algo==366) return "Nonce";
    else if (algo== 17) return "O";
    else if (algo==178) return "OCSP";
    else if (algo==180) return "OCSPSigning";
    else if (algo==1005) return "OGRN";
    else if (algo==379) return "ORG";
    else if (algo== 18) return "OU";
    else if (algo==749) return "Oakley-EC2N-3";
    else if (algo==750) return "Oakley-EC2N-4";
    else if (algo==  9) return "PBE-MD2-DES";
    else if (algo==168) return "PBE-MD2-RC2-64";
    else if (algo== 10) return "PBE-MD5-DES";
    else if (algo==169) return "PBE-MD5-RC2-64";
    else if (algo==147) return "PBE-SHA1-2DES";
    else if (algo==146) return "PBE-SHA1-3DES";
    else if (algo==170) return "PBE-SHA1-DES";
    else if (algo==148) return "PBE-SHA1-RC2-128";
    else if (algo==149) return "PBE-SHA1-RC2-40";
    else if (algo== 68) return "PBE-SHA1-RC2-64";
    else if (algo==144) return "PBE-SHA1-RC4-128";
    else if (algo==145) return "PBE-SHA1-RC4-40";
    else if (algo==161) return "PBES2";
    else if (algo== 69) return "PBKDF2";
    else if (algo==162) return "PBMAC1";
    else if (algo==127) return "PKIX";
    else if (algo==935) return "PSPECIFIED";
    else if (algo==1061) return "Poly1305";
    else if (algo== 98) return "RC2-40-CBC";
    else if (algo==166) return "RC2-64-CBC";
    else if (algo== 37) return "RC2-CBC";
    else if (algo== 39) return "RC2-CFB";
    else if (algo== 38) return "RC2-ECB";
    else if (algo== 40) return "RC2-OFB";
    else if (algo==  5) return "RC4";
    else if (algo== 97) return "RC4-40";
    else if (algo==915) return "RC4-HMAC-MD5";
    else if (algo==120) return "RC5-CBC";
    else if (algo==122) return "RC5-CFB";
    else if (algo==121) return "RC5-ECB";
    else if (algo==123) return "RC5-OFB";
    else if (algo==117) return "RIPEMD160";
    else if (algo== 19) return "RSA";
    else if (algo==  7) return "RSA-MD2";
    else if (algo==396) return "RSA-MD4";
    else if (algo==  8) return "RSA-MD5";
    else if (algo== 96) return "RSA-MDC2";
    else if (algo==104) return "RSA-NP-MD5";
    else if (algo==119) return "RSA-RIPEMD160";
    else if (algo== 42) return "RSA-SHA";
    else if (algo== 65) return "RSA-SHA1";
    else if (algo==115) return "RSA-SHA1-2";
    else if (algo==671) return "RSA-SHA224";
    else if (algo==668) return "RSA-SHA256";
    else if (algo==669) return "RSA-SHA384";
    else if (algo==670) return "RSA-SHA512";
    else if (algo==919) return "RSAES-OAEP";
    else if (algo==912) return "RSASSA-PSS";
    else if (algo==777) return "SEED-CBC";
    else if (algo==779) return "SEED-CFB";
    else if (algo==776) return "SEED-ECB";
    else if (algo==778) return "SEED-OFB";
    else if (algo== 41) return "SHA";
    else if (algo== 64) return "SHA1";
    else if (algo==675) return "SHA224";
    else if (algo==672) return "SHA256";
    else if (algo==1096) return "SHA3-224";
    else if (algo==1097) return "SHA3-256";
    else if (algo==1098) return "SHA3-384";
    else if (algo==1099) return "SHA3-512";
    else if (algo==673) return "SHA384";
    else if (algo==674) return "SHA512";
    else if (algo==1094) return "SHA512-224";
    else if (algo==1095) return "SHA512-256";
    else if (algo==1100) return "SHAKE128";
    else if (algo==1101) return "SHAKE256";
    else if (algo==188) return "SMIME";
    else if (algo==167) return "SMIME-CAPS";
    else if (algo==100) return "SN";
    else if (algo==1006) return "SNILS";
    else if (algo== 16) return "ST";
    else if (algo==143) return "SXNetID";
    else if (algo==1062) return "SipHash";
    else if (algo==1021) return "TLS1-PRF";
    else if (algo==458) return "UID";
    else if (algo==  0) return "UNDEF";
    else if (algo==1034) return "X25519";
    else if (algo==1035) return "X448";
    else if (algo== 11) return "X500";
    else if (algo==378) return "X500algorithms";
    else if (algo== 12) return "X509";
    else if (algo==184) return "X9-57";
    else if (algo==185) return "X9cm";
    else if (algo==125) return "ZLIB";
    else if (algo==478) return "aRecord";
    else if (algo==289) return "aaControls";
    else if (algo==287) return "ac-auditEntity";
    else if (algo==397) return "ac-proxying";
    else if (algo==288) return "ac-targeting";
    else if (algo==368) return "acceptableResponses";
    else if (algo==446) return "account";
    else if (algo==363) return "ad_timestamping";
    else if (algo==376) return "algorithm";
    else if (algo==405) return "ansi-X9-62";
    else if (algo==910) return "anyExtendedKeyUsage";
    else if (algo==746) return "anyPolicy";
    else if (algo==370) return "archiveCutoff";
    else if (algo==484) return "associatedDomain";
    else if (algo==485) return "associatedName";
    else if (algo==501) return "audio";
    else if (algo==177) return "authorityInfoAccess";
    else if (algo== 90) return "authorityKeyIdentifier";
    else if (algo==882) return "authorityRevocationList";
    else if (algo== 87) return "basicConstraints";
    else if (algo==365) return "basicOCSPResponse";
    else if (algo==285) return "biometricInfo";
    else if (algo==921) return "brainpoolP160r1";
    else if (algo==922) return "brainpoolP160t1";
    else if (algo==923) return "brainpoolP192r1";
    else if (algo==924) return "brainpoolP192t1";
    else if (algo==925) return "brainpoolP224r1";
    else if (algo==926) return "brainpoolP224t1";
    else if (algo==927) return "brainpoolP256r1";
    else if (algo==928) return "brainpoolP256t1";
    else if (algo==929) return "brainpoolP320r1";
    else if (algo==930) return "brainpoolP320t1";
    else if (algo==931) return "brainpoolP384r1";
    else if (algo==932) return "brainpoolP384t1";
    else if (algo==933) return "brainpoolP512r1";
    else if (algo==934) return "brainpoolP512t1";
    else if (algo==494) return "buildingName";
    else if (algo==860) return "businessCategory";
    else if (algo==691) return "c2onb191v4";
    else if (algo==692) return "c2onb191v5";
    else if (algo==697) return "c2onb239v4";
    else if (algo==698) return "c2onb239v5";
    else if (algo==684) return "c2pnb163v1";
    else if (algo==685) return "c2pnb163v2";
    else if (algo==686) return "c2pnb163v3";
    else if (algo==687) return "c2pnb176v1";
    else if (algo==693) return "c2pnb208w1";
    else if (algo==699) return "c2pnb272w1";
    else if (algo==700) return "c2pnb304w1";
    else if (algo==702) return "c2pnb368w1";
    else if (algo==688) return "c2tnb191v1";
    else if (algo==689) return "c2tnb191v2";
    else if (algo==690) return "c2tnb191v3";
    else if (algo==694) return "c2tnb239v1";
    else if (algo==695) return "c2tnb239v2";
    else if (algo==696) return "c2tnb239v3";
    else if (algo==701) return "c2tnb359v1";
    else if (algo==703) return "c2tnb431r1";
    else if (algo==1090) return "c3";
    else if (algo==881) return "cACertificate";
    else if (algo==483) return "cNAMERecord";
    else if (algo==179) return "caIssuers";
    else if (algo==785) return "caRepository";
    else if (algo==1023) return "capwapAC";
    else if (algo==1024) return "capwapWTP";
    else if (algo==443) return "caseIgnoreIA5StringSyntax";
    else if (algo==152) return "certBag";
    else if (algo==677) return "certicom-arc";
    else if (algo==771) return "certificateIssuer";
    else if (algo== 89) return "certificatePolicies";
    else if (algo==883) return "certificateRevocationList";
    else if (algo== 54) return "challengePassword";
    else if (algo==407) return "characteristic-two-field";
    else if (algo==395) return "clearance";
    else if (algo==130) return "clientAuth";
    else if (algo==131) return "codeSigning";
    else if (algo== 50) return "contentType";
    else if (algo== 53) return "countersignature";
    else if (algo==153) return "crlBag";
    else if (algo==103) return "crlDistributionPoints";
    else if (algo== 88) return "crlNumber";
    else if (algo==884) return "crossCertificatePair";
    else if (algo==806) return "cryptocom";
    else if (algo==805) return "cryptopro";
    else if (algo==954) return "ct_cert_scts";
    else if (algo==952) return "ct_precert_poison";
    else if (algo==951) return "ct_precert_scts";
    else if (algo==953) return "ct_precert_signer";
    else if (algo==500) return "dITRedirect";
    else if (algo==451) return "dNSDomain";
    else if (algo==495) return "dSAQuality";
    else if (algo==434) return "data";
    else if (algo==390) return "dcobject";
    else if (algo==140) return "deltaCRL";
    else if (algo==891) return "deltaRevocationList";
    else if (algo==107) return "description";
    else if (algo==871) return "destinationIndicator";
    else if (algo==947) return "dh-cofactor-kdf";
    else if (algo==946) return "dh-std-kdf";
    else if (algo== 28) return "dhKeyAgreement";
    else if (algo==941) return "dhSinglePass-cofactorDH-sha1kdf-scheme";
    else if (algo==942) return "dhSinglePass-cofactorDH-sha224kdf-scheme";
    else if (algo==943) return "dhSinglePass-cofactorDH-sha256kdf-scheme";
    else if (algo==944) return "dhSinglePass-cofactorDH-sha384kdf-scheme";
    else if (algo==945) return "dhSinglePass-cofactorDH-sha512kdf-scheme";
    else if (algo==936) return "dhSinglePass-stdDH-sha1kdf-scheme";
    else if (algo==937) return "dhSinglePass-stdDH-sha224kdf-scheme";
    else if (algo==938) return "dhSinglePass-stdDH-sha256kdf-scheme";
    else if (algo==939) return "dhSinglePass-stdDH-sha384kdf-scheme";
    else if (algo==940) return "dhSinglePass-stdDH-sha512kdf-scheme";
    else if (algo==920) return "dhpublicnumber";
    else if (algo==382) return "directory";
    else if (algo==887) return "distinguishedName";
    else if (algo==892) return "dmdName";
    else if (algo==174) return "dnQualifier";
    else if (algo==1092) return "dnsName";
    else if (algo==447) return "document";
    else if (algo==471) return "documentAuthor";
    else if (algo==468) return "documentIdentifier";
    else if (algo==472) return "documentLocation";
    else if (algo==502) return "documentPublisher";
    else if (algo==449) return "documentSeries";
    else if (algo==469) return "documentTitle";
    else if (algo==470) return "documentVersion";
    else if (algo==392) return "domain";
    else if (algo==452) return "domainRelatedObject";
    else if (algo==802) return "dsa_with_SHA224";
    else if (algo==803) return "dsa_with_SHA256";
    else if (algo==791) return "ecdsa-with-Recommended";
    else if (algo==416) return "ecdsa-with-SHA1";
    else if (algo==793) return "ecdsa-with-SHA224";
    else if (algo==794) return "ecdsa-with-SHA256";
    else if (algo==795) return "ecdsa-with-SHA384";
    else if (algo==796) return "ecdsa-with-SHA512";
    else if (algo==792) return "ecdsa-with-Specified";
    else if (algo== 48) return "emailAddress";
    else if (algo==132) return "emailProtection";
    else if (algo==885) return "enhancedSearchGuide";
    else if (algo==389) return "enterprises";
    else if (algo==384) return "experimental";
    else if (algo==172) return "extReq";
    else if (algo== 56) return "extendedCertificateAttributes";
    else if (algo==126) return "extendedKeyUsage";
    else if (algo==372) return "extendedStatus";
    else if (algo==867) return "facsimileTelephoneNumber";
    else if (algo==462) return "favouriteDrink";
    else if (algo==857) return "freshestCRL";
    else if (algo==453) return "friendlyCountry";
    else if (algo==490) return "friendlyCountryName";
    else if (algo==156) return "friendlyName";
    else if (algo==509) return "generationQualifier";
    else if (algo==815) return "gost-mac";
    else if (algo==976) return "gost-mac-12";
    else if (algo==811) return "gost2001";
    else if (algo==851) return "gost2001cc";
    else if (algo==979) return "gost2012_256";
    else if (algo==980) return "gost2012_512";
    else if (algo==813) return "gost89";
    else if (algo==1009) return "gost89-cbc";
    else if (algo==814) return "gost89-cnt";
    else if (algo==975) return "gost89-cnt-12";
    else if (algo==1011) return "gost89-ctr";
    else if (algo==1010) return "gost89-ecb";
    else if (algo==812) return "gost94";
    else if (algo==850) return "gost94cc";
    else if (algo==1015) return "grasshopper-cbc";
    else if (algo==1016) return "grasshopper-cfb";
    else if (algo==1013) return "grasshopper-ctr";
    else if (algo==1012) return "grasshopper-ecb";
    else if (algo==1017) return "grasshopper-mac";
    else if (algo==1014) return "grasshopper-ofb";
    else if (algo==797) return "hmacWithMD5";
    else if (algo==163) return "hmacWithSHA1";
    else if (algo==798) return "hmacWithSHA224";
    else if (algo==799) return "hmacWithSHA256";
    else if (algo==800) return "hmacWithSHA384";
    else if (algo==801) return "hmacWithSHA512";
    else if (algo==432) return "holdInstructionCallIssuer";
    else if (algo==430) return "holdInstructionCode";
    else if (algo==431) return "holdInstructionNone";
    else if (algo==433) return "holdInstructionReject";
    else if (algo==486) return "homePostalAddress";
    else if (algo==473) return "homeTelephoneNumber";
    else if (algo==466) return "host";
    else if (algo==889) return "houseIdentifier";
    else if (algo==442) return "iA5StringSyntax";
    else if (algo==783) return "id-DHBasedMac";
    else if (algo==824) return "id-Gost28147-89-CryptoPro-A-ParamSet";
    else if (algo==825) return "id-Gost28147-89-CryptoPro-B-ParamSet";
    else if (algo==826) return "id-Gost28147-89-CryptoPro-C-ParamSet";
    else if (algo==827) return "id-Gost28147-89-CryptoPro-D-ParamSet";
    else if (algo==819) return "id-Gost28147-89-CryptoPro-KeyMeshing";
    else if (algo==829) return "id-Gost28147-89-CryptoPro-Oscar-1-0-ParamSet";
    else if (algo==828) return "id-Gost28147-89-CryptoPro-Oscar-1-1-ParamSet";
    else if (algo==830) return "id-Gost28147-89-CryptoPro-RIC-1-ParamSet";
    else if (algo==820) return "id-Gost28147-89-None-KeyMeshing";
    else if (algo==823) return "id-Gost28147-89-TestParamSet";
    else if (algo==849) return "id-Gost28147-89-cc";
    else if (algo==840) return "id-GostR3410-2001-CryptoPro-A-ParamSet";
    else if (algo==841) return "id-GostR3410-2001-CryptoPro-B-ParamSet";
    else if (algo==842) return "id-GostR3410-2001-CryptoPro-C-ParamSet";
    else if (algo==843) return "id-GostR3410-2001-CryptoPro-XchA-ParamSet";
    else if (algo==844) return "id-GostR3410-2001-CryptoPro-XchB-ParamSet";
    else if (algo==854) return "id-GostR3410-2001-ParamSet-cc";
    else if (algo==839) return "id-GostR3410-2001-TestParamSet";
    else if (algo==817) return "id-GostR3410-2001DH";
    else if (algo==832) return "id-GostR3410-94-CryptoPro-A-ParamSet";
    else if (algo==833) return "id-GostR3410-94-CryptoPro-B-ParamSet";
    else if (algo==834) return "id-GostR3410-94-CryptoPro-C-ParamSet";
    else if (algo==835) return "id-GostR3410-94-CryptoPro-D-ParamSet";
    else if (algo==836) return "id-GostR3410-94-CryptoPro-XchA-ParamSet";
    else if (algo==837) return "id-GostR3410-94-CryptoPro-XchB-ParamSet";
    else if (algo==838) return "id-GostR3410-94-CryptoPro-XchC-ParamSet";
    else if (algo==831) return "id-GostR3410-94-TestParamSet";
    else if (algo==845) return "id-GostR3410-94-a";
    else if (algo==846) return "id-GostR3410-94-aBis";
    else if (algo==847) return "id-GostR3410-94-b";
    else if (algo==848) return "id-GostR3410-94-bBis";
    else if (algo==818) return "id-GostR3410-94DH";
    else if (algo==822) return "id-GostR3411-94-CryptoProParamSet";
    else if (algo==821) return "id-GostR3411-94-TestParamSet";
    else if (algo==807) return "id-GostR3411-94-with-GostR3410-2001";
    else if (algo==853) return "id-GostR3411-94-with-GostR3410-2001-cc";
    else if (algo==808) return "id-GostR3411-94-with-GostR3410-94";
    else if (algo==852) return "id-GostR3411-94-with-GostR3410-94-cc";
    else if (algo==810) return "id-HMACGostR3411-94";
    else if (algo==782) return "id-PasswordBasedMAC";
    else if (algo==266) return "id-aca";
    else if (algo==355) return "id-aca-accessIdentity";
    else if (algo==354) return "id-aca-authenticationInfo";
    else if (algo==356) return "id-aca-chargingIdentity";
    else if (algo==399) return "id-aca-encAttrs";
    else if (algo==357) return "id-aca-group";
    else if (algo==358) return "id-aca-role";
    else if (algo==176) return "id-ad";
    else if (algo==896) return "id-aes128-CCM";
    else if (algo==895) return "id-aes128-GCM";
    else if (algo==788) return "id-aes128-wrap";
    else if (algo==897) return "id-aes128-wrap-pad";
    else if (algo==899) return "id-aes192-CCM";
    else if (algo==898) return "id-aes192-GCM";
    else if (algo==789) return "id-aes192-wrap";
    else if (algo==900) return "id-aes192-wrap-pad";
    else if (algo==902) return "id-aes256-CCM";
    else if (algo==901) return "id-aes256-GCM";
    else if (algo==790) return "id-aes256-wrap";
    else if (algo==903) return "id-aes256-wrap-pad";
    else if (algo==262) return "id-alg";
    else if (algo==893) return "id-alg-PWRI-KEK";
    else if (algo==323) return "id-alg-des40";
    else if (algo==326) return "id-alg-dh-pop";
    else if (algo==325) return "id-alg-dh-sig-hmac-sha1";
    else if (algo==324) return "id-alg-noSignature";
    else if (algo==907) return "id-camellia128-wrap";
    else if (algo==908) return "id-camellia192-wrap";
    else if (algo==909) return "id-camellia256-wrap";
    else if (algo==268) return "id-cct";
    else if (algo==361) return "id-cct-PKIData";
    else if (algo==362) return "id-cct-PKIResponse";
    else if (algo==360) return "id-cct-crs";
    else if (algo== 81) return "id-ce";
    else if (algo==680) return "id-characteristic-two-basis";
    else if (algo==263) return "id-cmc";
    else if (algo==334) return "id-cmc-addExtensions";
    else if (algo==346) return "id-cmc-confirmCertAcceptance";
    else if (algo==330) return "id-cmc-dataReturn";
    else if (algo==336) return "id-cmc-decryptedPOP";
    else if (algo==335) return "id-cmc-encryptedPOP";
    else if (algo==339) return "id-cmc-getCRL";
    else if (algo==338) return "id-cmc-getCert";
    else if (algo==328) return "id-cmc-identification";
    else if (algo==329) return "id-cmc-identityProof";
    else if (algo==337) return "id-cmc-lraPOPWitness";
    else if (algo==344) return "id-cmc-popLinkRandom";
    else if (algo==345) return "id-cmc-popLinkWitness";
    else if (algo==343) return "id-cmc-queryPending";
    else if (algo==333) return "id-cmc-recipientNonce";
    else if (algo==341) return "id-cmc-regInfo";
    else if (algo==342) return "id-cmc-responseInfo";
    else if (algo==340) return "id-cmc-revokeRequest";
    else if (algo==332) return "id-cmc-senderNonce";
    else if (algo==327) return "id-cmc-statusInfo";
    else if (algo==331) return "id-cmc-transactionId";
    else if (algo==787) return "id-ct-asciiTextWithCRLF";
    else if (algo==1060) return "id-ct-xml";
    else if (algo==1108) return "id-dsa-with-sha3-224";
    else if (algo==1109) return "id-dsa-with-sha3-256";
    else if (algo==1110) return "id-dsa-with-sha3-384";
    else if (algo==1111) return "id-dsa-with-sha3-512";
    else if (algo==1106) return "id-dsa-with-sha384";
    else if (algo==1107) return "id-dsa-with-sha512";
    else if (algo==408) return "id-ecPublicKey";
    else if (algo==1112) return "id-ecdsa-with-sha3-224";
    else if (algo==1113) return "id-ecdsa-with-sha3-256";
    else if (algo==1114) return "id-ecdsa-with-sha3-384";
    else if (algo==1115) return "id-ecdsa-with-sha3-512";
    else if (algo==508) return "id-hex-multipart-message";
    else if (algo==507) return "id-hex-partial-message";
    else if (algo==1102) return "id-hmacWithSHA3-224";
    else if (algo==1103) return "id-hmacWithSHA3-256";
    else if (algo==1104) return "id-hmacWithSHA3-384";
    else if (algo==1105) return "id-hmacWithSHA3-512";
    else if (algo==260) return "id-it";
    else if (algo==302) return "id-it-caKeyUpdateInfo";
    else if (algo==298) return "id-it-caProtEncCert";
    else if (algo==311) return "id-it-confirmWaitTime";
    else if (algo==303) return "id-it-currentCRL";
    else if (algo==300) return "id-it-encKeyPairTypes";
    else if (algo==310) return "id-it-implicitConfirm";
    else if (algo==308) return "id-it-keyPairParamRep";
    else if (algo==307) return "id-it-keyPairParamReq";
    else if (algo==312) return "id-it-origPKIMessage";
    else if (algo==301) return "id-it-preferredSymmAlg";
    else if (algo==309) return "id-it-revPassphrase";
    else if (algo==299) return "id-it-signKeyPairTypes";
    else if (algo==305) return "id-it-subscriptionRequest";
    else if (algo==306) return "id-it-subscriptionResponse";
    else if (algo==784) return "id-it-suppLangTags";
    else if (algo==304) return "id-it-unsupportedOIDs";
    else if (algo==128) return "id-kp";
    else if (algo==280) return "id-mod-attribute-cert";
    else if (algo==274) return "id-mod-cmc";
    else if (algo==277) return "id-mod-cmp";
    else if (algo==284) return "id-mod-cmp2000";
    else if (algo==273) return "id-mod-crmf";
    else if (algo==283) return "id-mod-dvcs";
    else if (algo==275) return "id-mod-kea-profile-88";
    else if (algo==276) return "id-mod-kea-profile-93";
    else if (algo==282) return "id-mod-ocsp";
    else if (algo==278) return "id-mod-qualified-cert-88";
    else if (algo==279) return "id-mod-qualified-cert-93";
    else if (algo==281) return "id-mod-timestamp-protocol";
    else if (algo==264) return "id-on";
    else if (algo==858) return "id-on-permanentIdentifier";
    else if (algo==347) return "id-on-personalData";
    else if (algo==265) return "id-pda";
    else if (algo==352) return "id-pda-countryOfCitizenship";
    else if (algo==353) return "id-pda-countryOfResidence";
    else if (algo==348) return "id-pda-dateOfBirth";
    else if (algo==351) return "id-pda-gender";
    else if (algo==349) return "id-pda-placeOfBirth";
    else if (algo==175) return "id-pe";
    else if (algo==1031) return "id-pkinit";
    else if (algo==261) return "id-pkip";
    else if (algo==258) return "id-pkix-mod";
    else if (algo==269) return "id-pkix1-explicit-88";
    else if (algo==271) return "id-pkix1-explicit-93";
    else if (algo==270) return "id-pkix1-implicit-88";
    else if (algo==272) return "id-pkix1-implicit-93";
    else if (algo==662) return "id-ppl";
    else if (algo==664) return "id-ppl-anyLanguage";
    else if (algo==667) return "id-ppl-independent";
    else if (algo==665) return "id-ppl-inheritAll";
    else if (algo==267) return "id-qcs";
    else if (algo==359) return "id-qcs-pkixQCSyntax-v1";
    else if (algo==259) return "id-qt";
    else if (algo==164) return "id-qt-cps";
    else if (algo==165) return "id-qt-unotice";
    else if (algo==313) return "id-regCtrl";
    else if (algo==316) return "id-regCtrl-authenticator";
    else if (algo==319) return "id-regCtrl-oldCertID";
    else if (algo==318) return "id-regCtrl-pkiArchiveOptions";
    else if (algo==317) return "id-regCtrl-pkiPublicationInfo";
    else if (algo==320) return "id-regCtrl-protocolEncrKey";
    else if (algo==315) return "id-regCtrl-regToken";
    else if (algo==314) return "id-regInfo";
    else if (algo==322) return "id-regInfo-certReq";
    else if (algo==321) return "id-regInfo-utf8Pairs";
    else if (algo==1116) return "id-rsassa-pkcs1-v1_5-with-sha3-224";
    else if (algo==1117) return "id-rsassa-pkcs1-v1_5-with-sha3-256";
    else if (algo==1118) return "id-rsassa-pkcs1-v1_5-with-sha3-384";
    else if (algo==1119) return "id-rsassa-pkcs1-v1_5-with-sha3-512";
    else if (algo==973) return "id-scrypt";
    else if (algo==512) return "id-set";
    else if (algo==191) return "id-smime-aa";
    else if (algo==215) return "id-smime-aa-contentHint";
    else if (algo==218) return "id-smime-aa-contentIdentifier";
    else if (algo==221) return "id-smime-aa-contentReference";
    else if (algo==240) return "id-smime-aa-dvcs-dvc";
    else if (algo==217) return "id-smime-aa-encapContentType";
    else if (algo==222) return "id-smime-aa-encrypKeyPref";
    else if (algo==220) return "id-smime-aa-equivalentLabels";
    else if (algo==232) return "id-smime-aa-ets-CertificateRefs";
    else if (algo==233) return "id-smime-aa-ets-RevocationRefs";
    else if (algo==238) return "id-smime-aa-ets-archiveTimeStamp";
    else if (algo==237) return "id-smime-aa-ets-certCRLTimestamp";
    else if (algo==234) return "id-smime-aa-ets-certValues";
    else if (algo==227) return "id-smime-aa-ets-commitmentType";
    else if (algo==231) return "id-smime-aa-ets-contentTimestamp";
    else if (algo==236) return "id-smime-aa-ets-escTimeStamp";
    else if (algo==230) return "id-smime-aa-ets-otherSigCert";
    else if (algo==235) return "id-smime-aa-ets-revocationValues";
    else if (algo==226) return "id-smime-aa-ets-sigPolicyId";
    else if (algo==229) return "id-smime-aa-ets-signerAttr";
    else if (algo==228) return "id-smime-aa-ets-signerLocation";
    else if (algo==219) return "id-smime-aa-macValue";
    else if (algo==214) return "id-smime-aa-mlExpandHistory";
    else if (algo==216) return "id-smime-aa-msgSigDigest";
    else if (algo==212) return "id-smime-aa-receiptRequest";
    else if (algo==213) return "id-smime-aa-securityLabel";
    else if (algo==239) return "id-smime-aa-signatureType";
    else if (algo==223) return "id-smime-aa-signingCertificate";
    else if (algo==1086) return "id-smime-aa-signingCertificateV2";
    else if (algo==224) return "id-smime-aa-smimeEncryptCerts";
    else if (algo==225) return "id-smime-aa-timeStampToken";
    else if (algo==192) return "id-smime-alg";
    else if (algo==243) return "id-smime-alg-3DESwrap";
    else if (algo==246) return "id-smime-alg-CMS3DESwrap";
    else if (algo==247) return "id-smime-alg-CMSRC2wrap";
    else if (algo==245) return "id-smime-alg-ESDH";
    else if (algo==241) return "id-smime-alg-ESDHwith3DES";
    else if (algo==242) return "id-smime-alg-ESDHwithRC2";
    else if (algo==244) return "id-smime-alg-RC2wrap";
    else if (algo==193) return "id-smime-cd";
    else if (algo==248) return "id-smime-cd-ldap";
    else if (algo==190) return "id-smime-ct";
    else if (algo==210) return "id-smime-ct-DVCSRequestData";
    else if (algo==211) return "id-smime-ct-DVCSResponseData";
    else if (algo==208) return "id-smime-ct-TDTInfo";
    else if (algo==207) return "id-smime-ct-TSTInfo";
    else if (algo==205) return "id-smime-ct-authData";
    else if (algo==1059) return "id-smime-ct-authEnvelopedData";
    else if (algo==786) return "id-smime-ct-compressedData";
    else if (algo==1058) return "id-smime-ct-contentCollection";
    else if (algo==209) return "id-smime-ct-contentInfo";
    else if (algo==206) return "id-smime-ct-publishCert";
    else if (algo==204) return "id-smime-ct-receipt";
    else if (algo==195) return "id-smime-cti";
    else if (algo==255) return "id-smime-cti-ets-proofOfApproval";
    else if (algo==256) return "id-smime-cti-ets-proofOfCreation";
    else if (algo==253) return "id-smime-cti-ets-proofOfDelivery";
    else if (algo==251) return "id-smime-cti-ets-proofOfOrigin";
    else if (algo==252) return "id-smime-cti-ets-proofOfReceipt";
    else if (algo==254) return "id-smime-cti-ets-proofOfSender";
    else if (algo==189) return "id-smime-mod";
    else if (algo==196) return "id-smime-mod-cms";
    else if (algo==197) return "id-smime-mod-ess";
    else if (algo==202) return "id-smime-mod-ets-eSigPolicy-88";
    else if (algo==203) return "id-smime-mod-ets-eSigPolicy-97";
    else if (algo==200) return "id-smime-mod-ets-eSignature-88";
    else if (algo==201) return "id-smime-mod-ets-eSignature-97";
    else if (algo==199) return "id-smime-mod-msg-v3";
    else if (algo==198) return "id-smime-mod-oid";
    else if (algo==194) return "id-smime-spq";
    else if (algo==250) return "id-smime-spq-ets-sqt-unotice";
    else if (algo==249) return "id-smime-spq-ets-sqt-uri";
    else if (algo==974) return "id-tc26";
    else if (algo==991) return "id-tc26-agreement";
    else if (algo==992) return "id-tc26-agreement-gost-3410-2012-256";
    else if (algo==993) return "id-tc26-agreement-gost-3410-2012-512";
    else if (algo==977) return "id-tc26-algorithms";
    else if (algo==990) return "id-tc26-cipher";
    else if (algo==1001) return "id-tc26-cipher-constants";
    else if (algo==994) return "id-tc26-constants";
    else if (algo==981) return "id-tc26-digest";
    else if (algo==1000) return "id-tc26-digest-constants";
    else if (algo==1002) return "id-tc26-gost-28147-constants";
    else if (algo==1003) return "id-tc26-gost-28147-param-Z";
    else if (algo==996) return "id-tc26-gost-3410-2012-512-constants";
    else if (algo==998) return "id-tc26-gost-3410-2012-512-paramSetA";
    else if (algo==999) return "id-tc26-gost-3410-2012-512-paramSetB";
    else if (algo==997) return "id-tc26-gost-3410-2012-512-paramSetTest";
    else if (algo==988) return "id-tc26-hmac-gost-3411-2012-256";
    else if (algo==989) return "id-tc26-hmac-gost-3411-2012-512";
    else if (algo==987) return "id-tc26-mac";
    else if (algo==978) return "id-tc26-sign";
    else if (algo==995) return "id-tc26-sign-constants";
    else if (algo==984) return "id-tc26-signwithdigest";
    else if (algo==985) return "id-tc26-signwithdigest-gost3410-2012-256";
    else if (algo==986) return "id-tc26-signwithdigest-gost3410-2012-512";
    else if (algo==676) return "identified-organization";
    else if (algo==461) return "info";
    else if (algo==748) return "inhibitAnyPolicy";
    else if (algo==101) return "initials";
    else if (algo==647) return "international-organizations";
    else if (algo==869) return "internationaliSDNNumber";
    else if (algo==142) return "invalidityDate";
    else if (algo==294) return "ipsecEndSystem";
    else if (algo==1022) return "ipsecIKE";
    else if (algo==295) return "ipsecTunnel";
    else if (algo==296) return "ipsecUser";
    else if (algo== 86) return "issuerAltName";
    else if (algo==1008) return "issuerSignTool";
    else if (algo==770) return "issuingDistributionPoint";
    else if (algo==492) return "janetMailbox";
    else if (algo==957) return "jurisdictionC";
    else if (algo==955) return "jurisdictionL";
    else if (algo==956) return "jurisdictionST";
    else if (algo==150) return "keyBag";
    else if (algo== 83) return "keyUsage";
    else if (algo==477) return "lastModifiedBy";
    else if (algo==476) return "lastModifiedTime";
    else if (algo==157) return "localKeyID";
    else if (algo==480) return "mXRecord";
    else if (algo==460) return "mail";
    else if (algo==493) return "mailPreferenceOption";
    else if (algo==467) return "manager";
    else if (algo==982) return "md_gost12_256";
    else if (algo==983) return "md_gost12_512";
    else if (algo==809) return "md_gost94";
    else if (algo==875) return "member";
    else if (algo==182) return "member-body";
    else if (algo== 51) return "messageDigest";
    else if (algo==383) return "mgmt";
    else if (algo==504) return "mime-mhs";
    else if (algo==506) return "mime-mhs-bodies";
    else if (algo==505) return "mime-mhs-headings";
    else if (algo==488) return "mobileTelephoneNumber";
    else if (algo==136) return "msCTLSign";
    else if (algo==135) return "msCodeCom";
    else if (algo==134) return "msCodeInd";
    else if (algo==138) return "msEFS";
    else if (algo==171) return "msExtReq";
    else if (algo==137) return "msSGC";
    else if (algo==648) return "msSmartcardLogin";
    else if (algo==649) return "msUPN";
    else if (algo==1091) return "n3";
    else if (algo==481) return "nSRecord";
    else if (algo==173) return "name";
    else if (algo==666) return "nameConstraints";
    else if (algo==369) return "noCheck";
    else if (algo==403) return "noRevAvail";
    else if (algo== 72) return "nsBaseUrl";
    else if (algo== 76) return "nsCaPolicyUrl";
    else if (algo== 74) return "nsCaRevocationUrl";
    else if (algo== 58) return "nsCertExt";
    else if (algo== 79) return "nsCertSequence";
    else if (algo== 71) return "nsCertType";
    else if (algo== 78) return "nsComment";
    else if (algo== 59) return "nsDataType";
    else if (algo== 75) return "nsRenewalUrl";
    else if (algo== 73) return "nsRevocationUrl";
    else if (algo==139) return "nsSGC";
    else if (algo== 77) return "nsSslServerName";
    else if (algo==681) return "onBasis";
    else if (algo==1089) return "organizationIdentifier";
    else if (algo==491) return "organizationalStatus";
    else if (algo==475) return "otherMailbox";
    else if (algo==876) return "owner";
    else if (algo==489) return "pagerTelephoneNumber";
    else if (algo==374) return "path";
    else if (algo==112) return "pbeWithMD5AndCast5CBC";
    else if (algo==499) return "personalSignature";
    else if (algo==487) return "personalTitle";
    else if (algo==464) return "photo";
    else if (algo==863) return "physicalDeliveryOfficeName";
    else if (algo==437) return "pilot";
    else if (algo==439) return "pilotAttributeSyntax";
    else if (algo==438) return "pilotAttributeType";
    else if (algo==479) return "pilotAttributeType27";
    else if (algo==456) return "pilotDSA";
    else if (algo==441) return "pilotGroups";
    else if (algo==444) return "pilotObject";
    else if (algo==440) return "pilotObjectClass";
    else if (algo==455) return "pilotOrganization";
    else if (algo==445) return "pilotPerson";
    else if (algo==1032) return "pkInitClientAuth";
    else if (algo==1033) return "pkInitKDC";
    else if (algo==  2) return "pkcs";
    else if (algo==186) return "pkcs1";
    else if (algo== 27) return "pkcs3";
    else if (algo==187) return "pkcs5";
    else if (algo== 20) return "pkcs7";
    else if (algo== 21) return "pkcs7-data";
    else if (algo== 25) return "pkcs7-digestData";
    else if (algo== 26) return "pkcs7-encryptedData";
    else if (algo== 23) return "pkcs7-envelopedData";
    else if (algo== 24) return "pkcs7-signedAndEnvelopedData";
    else if (algo== 22) return "pkcs7-signedData";
    else if (algo==151) return "pkcs8ShroudedKeyBag";
    else if (algo== 47) return "pkcs9";
    else if (algo==401) return "policyConstraints";
    else if (algo==747) return "policyMappings";
    else if (algo==862) return "postOfficeBox";
    else if (algo==861) return "postalAddress";
    else if (algo==661) return "postalCode";
    else if (algo==683) return "ppBasis";
    else if (algo==872) return "preferredDeliveryMethod";
    else if (algo==873) return "presentationAddress";
    else if (algo==816) return "prf-gostr3411-94";
    else if (algo==406) return "prime-field";
    else if (algo==409) return "prime192v1";
    else if (algo==410) return "prime192v2";
    else if (algo==411) return "prime192v3";
    else if (algo==412) return "prime239v1";
    else if (algo==413) return "prime239v2";
    else if (algo==414) return "prime239v3";
    else if (algo==415) return "prime256v1";
    else if (algo==385) return "private";
    else if (algo== 84) return "privateKeyUsagePeriod";
    else if (algo==886) return "protocolInformation";
    else if (algo==663) return "proxyCertInfo";
    else if (algo==510) return "pseudonym";
    else if (algo==435) return "pss";
    else if (algo==286) return "qcStatements";
    else if (algo==457) return "qualityLabelledData";
    else if (algo==450) return "rFC822localPart";
    else if (algo==870) return "registeredAddress";
    else if (algo==400) return "role";
    else if (algo==877) return "roleOccupant";
    else if (algo==448) return "room";
    else if (algo==463) return "roomNumber";
    else if (algo==  6) return "rsaEncryption";
    else if (algo==644) return "rsaOAEPEncryptionSET";
    else if (algo==377) return "rsaSignature";
    else if (algo==  1) return "rsadsi";
    else if (algo==482) return "sOARecord";
    else if (algo==155) return "safeContentsBag";
    else if (algo==291) return "sbgp-autonomousSysNum";
    else if (algo==290) return "sbgp-ipAddrBlock";
    else if (algo==292) return "sbgp-routerIdentifier";
    else if (algo==159) return "sdsiCertificate";
    else if (algo==859) return "searchGuide";
    else if (algo==704) return "secp112r1";
    else if (algo==705) return "secp112r2";
    else if (algo==706) return "secp128r1";
    else if (algo==707) return "secp128r2";
    else if (algo==708) return "secp160k1";
    else if (algo==709) return "secp160r1";
    else if (algo==710) return "secp160r2";
    else if (algo==711) return "secp192k1";
    else if (algo==712) return "secp224k1";
    else if (algo==713) return "secp224r1";
    else if (algo==714) return "secp256k1";
    else if (algo==715) return "secp384r1";
    else if (algo==716) return "secp521r1";
    else if (algo==154) return "secretBag";
    else if (algo==474) return "secretary";
    else if (algo==717) return "sect113r1";
    else if (algo==718) return "sect113r2";
    else if (algo==719) return "sect131r1";
    else if (algo==720) return "sect131r2";
    else if (algo==721) return "sect163k1";
    else if (algo==722) return "sect163r1";
    else if (algo==723) return "sect163r2";
    else if (algo==724) return "sect193r1";
    else if (algo==725) return "sect193r2";
    else if (algo==726) return "sect233k1";
    else if (algo==727) return "sect233r1";
    else if (algo==728) return "sect239k1";
    else if (algo==729) return "sect283k1";
    else if (algo==730) return "sect283r1";
    else if (algo==731) return "sect409k1";
    else if (algo==732) return "sect409r1";
    else if (algo==733) return "sect571k1";
    else if (algo==734) return "sect571r1";
    else if (algo==1025) return "secureShellClient";
    else if (algo==1026) return "secureShellServer";
    else if (algo==386) return "security";
    else if (algo==878) return "seeAlso";
    else if (algo==394) return "selected-attribute-types";
    else if (algo==1029) return "sendOwner";
    else if (algo==1030) return "sendProxiedOwner";
    else if (algo==1028) return "sendProxiedRouter";
    else if (algo==1027) return "sendRouter";
    else if (algo==105) return "serialNumber";
    else if (algo==129) return "serverAuth";
    else if (algo==371) return "serviceLocator";
    else if (algo==625) return "set-addPolicy";
    else if (algo==515) return "set-attr";
    else if (algo==518) return "set-brand";
    else if (algo==638) return "set-brand-AmericanExpress";
    else if (algo==637) return "set-brand-Diners";
    else if (algo==636) return "set-brand-IATA-ATA";
    else if (algo==639) return "set-brand-JCB";
    else if (algo==641) return "set-brand-MasterCard";
    else if (algo==642) return "set-brand-Novus";
    else if (algo==640) return "set-brand-Visa";
    else if (algo==517) return "set-certExt";
    else if (algo==513) return "set-ctype";
    else if (algo==514) return "set-msgExt";
    else if (algo==516) return "set-policy";
    else if (algo==607) return "set-policy-root";
    else if (algo==624) return "set-rootKeyThumb";
    else if (algo==620) return "setAttr-Cert";
    else if (algo==631) return "setAttr-GenCryptgrm";
    else if (algo==623) return "setAttr-IssCap";
    else if (algo==628) return "setAttr-IssCap-CVM";
    else if (algo==630) return "setAttr-IssCap-Sig";
    else if (algo==629) return "setAttr-IssCap-T2";
    else if (algo==621) return "setAttr-PGWYcap";
    else if (algo==635) return "setAttr-SecDevSig";
    else if (algo==632) return "setAttr-T2Enc";
    else if (algo==633) return "setAttr-T2cleartxt";
    else if (algo==634) return "setAttr-TokICCsig";
    else if (algo==627) return "setAttr-Token-B0Prime";
    else if (algo==626) return "setAttr-Token-EMV";
    else if (algo==622) return "setAttr-TokenType";
    else if (algo==619) return "setCext-IssuerCapabilities";
    else if (algo==615) return "setCext-PGWYcapabilities";
    else if (algo==616) return "setCext-TokenIdentifier";
    else if (algo==618) return "setCext-TokenType";
    else if (algo==617) return "setCext-Track2Data";
    else if (algo==611) return "setCext-cCertRequired";
    else if (algo==609) return "setCext-certType";
    else if (algo==608) return "setCext-hashedRoot";
    else if (algo==610) return "setCext-merchData";
    else if (algo==613) return "setCext-setExt";
    else if (algo==614) return "setCext-setQualf";
    else if (algo==612) return "setCext-tunneling";
    else if (algo==540) return "setct-AcqCardCodeMsg";
    else if (algo==576) return "setct-AcqCardCodeMsgTBE";
    else if (algo==570) return "setct-AuthReqTBE";
    else if (algo==534) return "setct-AuthReqTBS";
    else if (algo==527) return "setct-AuthResBaggage";
    else if (algo==571) return "setct-AuthResTBE";
    else if (algo==572) return "setct-AuthResTBEX";
    else if (algo==535) return "setct-AuthResTBS";
    else if (algo==536) return "setct-AuthResTBSX";
    else if (algo==528) return "setct-AuthRevReqBaggage";
    else if (algo==577) return "setct-AuthRevReqTBE";
    else if (algo==541) return "setct-AuthRevReqTBS";
    else if (algo==529) return "setct-AuthRevResBaggage";
    else if (algo==542) return "setct-AuthRevResData";
    else if (algo==578) return "setct-AuthRevResTBE";
    else if (algo==579) return "setct-AuthRevResTBEB";
    else if (algo==543) return "setct-AuthRevResTBS";
    else if (algo==573) return "setct-AuthTokenTBE";
    else if (algo==537) return "setct-AuthTokenTBS";
    else if (algo==600) return "setct-BCIDistributionTBS";
    else if (algo==558) return "setct-BatchAdminReqData";
    else if (algo==592) return "setct-BatchAdminReqTBE";
    else if (algo==559) return "setct-BatchAdminResData";
    else if (algo==593) return "setct-BatchAdminResTBE";
    else if (algo==599) return "setct-CRLNotificationResTBS";
    else if (algo==598) return "setct-CRLNotificationTBS";
    else if (algo==580) return "setct-CapReqTBE";
    else if (algo==581) return "setct-CapReqTBEX";
    else if (algo==544) return "setct-CapReqTBS";
    else if (algo==545) return "setct-CapReqTBSX";
    else if (algo==546) return "setct-CapResData";
    else if (algo==582) return "setct-CapResTBE";
    else if (algo==583) return "setct-CapRevReqTBE";
    else if (algo==584) return "setct-CapRevReqTBEX";
    else if (algo==547) return "setct-CapRevReqTBS";
    else if (algo==548) return "setct-CapRevReqTBSX";
    else if (algo==549) return "setct-CapRevResData";
    else if (algo==585) return "setct-CapRevResTBE";
    else if (algo==538) return "setct-CapTokenData";
    else if (algo==530) return "setct-CapTokenSeq";
    else if (algo==574) return "setct-CapTokenTBE";
    else if (algo==575) return "setct-CapTokenTBEX";
    else if (algo==539) return "setct-CapTokenTBS";
    else if (algo==560) return "setct-CardCInitResTBS";
    else if (algo==566) return "setct-CertInqReqTBS";
    else if (algo==563) return "setct-CertReqData";
    else if (algo==595) return "setct-CertReqTBE";
    else if (algo==596) return "setct-CertReqTBEX";
    else if (algo==564) return "setct-CertReqTBS";
    else if (algo==565) return "setct-CertResData";
    else if (algo==597) return "setct-CertResTBE";
    else if (algo==586) return "setct-CredReqTBE";
    else if (algo==587) return "setct-CredReqTBEX";
    else if (algo==550) return "setct-CredReqTBS";
    else if (algo==551) return "setct-CredReqTBSX";
    else if (algo==552) return "setct-CredResData";
    else if (algo==588) return "setct-CredResTBE";
    else if (algo==589) return "setct-CredRevReqTBE";
    else if (algo==590) return "setct-CredRevReqTBEX";
    else if (algo==553) return "setct-CredRevReqTBS";
    else if (algo==554) return "setct-CredRevReqTBSX";
    else if (algo==555) return "setct-CredRevResData";
    else if (algo==591) return "setct-CredRevResTBE";
    else if (algo==567) return "setct-ErrorTBS";
    else if (algo==526) return "setct-HODInput";
    else if (algo==561) return "setct-MeAqCInitResTBS";
    else if (algo==522) return "setct-OIData";
    else if (algo==519) return "setct-PANData";
    else if (algo==521) return "setct-PANOnly";
    else if (algo==520) return "setct-PANToken";
    else if (algo==556) return "setct-PCertReqData";
    else if (algo==557) return "setct-PCertResTBS";
    else if (algo==523) return "setct-PI";
    else if (algo==532) return "setct-PI-TBS";
    else if (algo==524) return "setct-PIData";
    else if (algo==525) return "setct-PIDataUnsigned";
    else if (algo==568) return "setct-PIDualSignedTBE";
    else if (algo==569) return "setct-PIUnsignedTBE";
    else if (algo==531) return "setct-PInitResData";
    else if (algo==533) return "setct-PResData";
    else if (algo==594) return "setct-RegFormReqTBE";
    else if (algo==562) return "setct-RegFormResTBS";
    else if (algo==606) return "setext-cv";
    else if (algo==601) return "setext-genCrypt";
    else if (algo==602) return "setext-miAuth";
    else if (algo==604) return "setext-pinAny";
    else if (algo==603) return "setext-pinSecure";
    else if (algo==605) return "setext-track2";
    else if (algo== 52) return "signingTime";
    else if (algo==454) return "simpleSecurityObject";
    else if (algo==496) return "singleLevelQuality";
    else if (algo==387) return "snmpv2";
    else if (algo==660) return "street";
    else if (algo== 85) return "subjectAltName";
    else if (algo==769) return "subjectDirectoryAttributes";
    else if (algo==398) return "subjectInfoAccess";
    else if (algo== 82) return "subjectKeyIdentifier";
    else if (algo==1007) return "subjectSignTool";
    else if (algo==498) return "subtreeMaximumQuality";
    else if (algo==497) return "subtreeMinimumQuality";
    else if (algo==890) return "supportedAlgorithms";
    else if (algo==874) return "supportedApplicationContext";
    else if (algo==402) return "targetInformation";
    else if (algo==864) return "telephoneNumber";
    else if (algo==866) return "teletexTerminalIdentifier";
    else if (algo==865) return "telexNumber";
    else if (algo==459) return "textEncodedORAddress";
    else if (algo==293) return "textNotice";
    else if (algo==133) return "timeStamping";
    else if (algo==106) return "title";
    else if (algo==1020) return "tlsfeature";
    else if (algo==682) return "tpBasis";
    else if (algo==375) return "trustRoot";
    else if (algo==436) return "ucl";
    else if (algo==102) return "uid";
    else if (algo==888) return "uniqueMember";
    else if (algo== 55) return "unstructuredAddress";
    else if (algo== 49) return "unstructuredName";
    else if (algo==880) return "userCertificate";
    else if (algo==465) return "userClass";
    else if (algo==879) return "userPassword";
    else if (algo==373) return "valid";
    else if (algo==678) return "wap";
    else if (algo==679) return "wap-wsg";
    else if (algo==735) return "wap-wsg-idm-ecid-wtls1";
    else if (algo==743) return "wap-wsg-idm-ecid-wtls10";
    else if (algo==744) return "wap-wsg-idm-ecid-wtls11";
    else if (algo==745) return "wap-wsg-idm-ecid-wtls12";
    else if (algo==736) return "wap-wsg-idm-ecid-wtls3";
    else if (algo==737) return "wap-wsg-idm-ecid-wtls4";
    else if (algo==738) return "wap-wsg-idm-ecid-wtls5";
    else if (algo==739) return "wap-wsg-idm-ecid-wtls6";
    else if (algo==740) return "wap-wsg-idm-ecid-wtls7";
    else if (algo==741) return "wap-wsg-idm-ecid-wtls8";
    else if (algo==742) return "wap-wsg-idm-ecid-wtls9";
    else if (algo==804) return "whirlpool";
    else if (algo==868) return "x121Address";
    else if (algo==503) return "x500UniqueIdentifier";
    else if (algo==158) return "x509Certificate";
    else if (algo==160) return "x509Crl";
    else if (algo==1093) return "x509ExtAdmission";
    return algo.toString()
};


var array=Process.enumerateModulesSync();
var mm=new ModuleMap();

setImmediate(function() {
    Java.perform(function() {
        
        for (var x=0;x<(array.length);x++) 
        { 
            var name=array[x].name;
            if (name=="libstagefright.so") continue;
            else if (name=="libmedia_jni.so") continue;
            else if (name=="libandroid.so") continue;
            else if (name=="libjnigraphics.so") continue;
            else if (name=="libkeymaster1.so") continue;
            else if (name=="libsoftkeymasterdevice.so") continue;
            else if (name=="libkeystore_binder.so") continue;
            else if (name=="libkeystore-engine.so") continue;
            else if (name=="libjavacrypto.so") continue;
            else if (name=="libwebviewchromium_plat_support.so") continue;
            else if (name=="libjavacore.so") continue;
            else if (name=="libssl.so") continue;
            else if (name=="libcrypto.so") continue;
            else if (name=="libinputflinger.so") continue;
            else if (name=="libandroid_runtime.so") continue;
            else if (name=="libdatabase_sqlcipher.so") continue;
            else if (name=="libsqlcipher_android.so") continue;
            else if (name=="app_process32_xposed") continue;
            
            var cipherinit = Module.findExportByName(name,"EVP_CipherInit_ex");
            var cipherupdate = Module.findExportByName(name,"EVP_CipherUpdate");
            var cipherfinal_ex = Module.findExportByName(name,"EVP_CipherFinal_ex");
            
            if (cipherinit!=null)
            {
                console.log("We hooked EVP_CipherInit_ex in: "+array[x].name); 
                
                Interceptor.attach(cipherinit, {
                    onEnter: function (args)
                    {
                      var addr=args[1].toInt32();
                      var algo = Memory.readPointer(ptr(addr)).toInt32();
                      var blocksize = Memory.readPointer(ptr(addr+4)).toInt32();
                      var keysize = Memory.readPointer(ptr(addr+8)).toInt32();
                      var ivsize = Memory.readPointer(ptr(addr+12)).toInt32();
                      
                      var name=algotoname(algo); //obj_dat.h for more
                      
                      var key=decodeArray(args[3],keysize);
                      var iv=decodeArray(args[4],ivsize);
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'EVP_CipherInit_ex';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'EVP_CipherInit_ex('+name+')';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "InitOptions";
                      data.value = "Algo:"+algo.toString()+";Name:"+name+";Key:"+key+";Iv:"+iv+";Blocksize:"+blocksize;
                      
                      /*console.log(hexdump(args[0], { offset: 0, length: parseInt(args[1]), header: true, ansi: false }));
                      console.log(hexdump(args[2], { offset: 0, length: parseInt(args[3]), header: true, ansi: false }));
                      console.log(parseInt(args[4]));
                      */
                      
                      data.argSeq = 0;
                      send_data.artifact.push(data);
                      send(JSON.stringify(send_data));
                    }
                });
            }
            
            if (cipherupdate!=null)
            {
                console.log("We hooked EVP_CipherUpdate in: "+array[x].name); 
                
                Interceptor.attach(cipherupdate, {
                    onEnter: function (args)
                    {
                      this.c1=args[1];
                      this.c2=args[2];
                      this.c3=args[3];
                      this.c4=args[4];
                    },
                    
                    onLeave: function (args)
                    {
                      var size=parseInt(this.c4);
                      if (size>0x40) size=0x40;
                      var outdata=decodeArray(this.c1,size);
                      var indata=decodeArray(this.c3,size);
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'EVP_CipherUpdate';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'EVP_CipherUpdate';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "Input [Size:"+this.c4.toString(16)+"]";
                      data.value = indata;
                      data.argSeq = 0;
                      
                      var data2 = {};
                      data2.name = "Output [Size:"+this.c4.toString(16)+"]";
                      data2.value = outdata;
                      if (parseInt(this.c4)>size) { data.value+="[...]"; data2.value+="[...]"; }
                      data2.argSeq = 0;
                      
                      /*console.log(hexdump(args[0], { offset: 0, length: parseInt(args[1]), header: true, ansi: false }));
                      console.log(hexdump(args[2], { offset: 0, length: parseInt(args[3]), header: true, ansi: false }));
                      console.log(parseInt(args[4]));
                      */
                      
                      send_data.artifact.push(data);
                      send_data.artifact.push(data2);
                      send(JSON.stringify(send_data));  
                    }
                });
            }
            
             if (cipherfinal_ex!=null)
            {
                console.log("We hooked EVP_CipherFinal_ex in: "+array[x].name); 
                
                Interceptor.attach(cipherfinal_ex, {
                    onEnter: function (args)
                    {
                      this.f3=args[1];
                      this.f4=args[2];
                    },
                    
                    onLeave: function (result)
                    {
                      //console.log(this.f4);
                      //console.log("Pointer: "+Memory.readPointer(this.f4)+"\n");
                      var size=parseInt(Memory.readPointer(this.f4));
                      if (size>0x40) size=0x40;
                      var outdata=decodeArray(this.f3,size);
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'EVP_CipherFinal_ex';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'EVP_CipherFinal_ex';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "Output [Size:"+parseInt(Memory.readPointer(this.f4)).toString(16)+"]";
                      data.value = outdata;
                      if (parseInt(Memory.readPointer(this.f4))>size) { data.value+="[...]"; }
                      /*console.log(hexdump(args[0], { offset: 0, length: parseInt(args[1]), header: true, ansi: false }));
                      console.log(hexdump(args[2], { offset: 0, length: parseInt(args[3]), header: true, ansi: false }));
                      console.log(parseInt(args[4]));
                      */
                      
                      data.argSeq = 0;
                      send_data.artifact.push(data);
                      send(JSON.stringify(send_data));  
                    }
                });
            }
        }

    });
});


/* ____Crypto/PBKDF2.js____ */

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


/* ____Database/DB.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function () {
	var ContextWrapper = Java.use("android.content.ContextWrapper");

	if (ContextWrapper.openOrCreateDatabase) {
	
		// Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase.CursorFactory, android.database.DatabaseErrorHandler)
		ContextWrapper.openOrCreateDatabase.overloads[0].implementation = function (name, mode, factory) {
			//console.log("SQLiteDatabase Name: " + name);
			//console.log("SQLiteDatabase Mode: " + mode);
			return this.openOrCreateDatabase.overloads[0].apply(this, arguments);
		}
		
		// Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase.CursorFactory)
		ContextWrapper.openOrCreateDatabase.overloads[1].implementation = function (name, mode, factory, errorHandler) {
			//console.log("SQLiteDatabase Name: " + name);
			//console.log("SQLiteDatabase Mode: " + mode);
			return this.openOrCreateDatabase.overloads[0].apply(this, arguments);
		}
		
	}

	if (ContextWrapper.databaseList) {
		// Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#databaseList()
		ContextWrapper.databaseList.implementation = function () {
			var database_list = this.databaseList.call(this);
			//console.log(typeof database_list);
			return database_list;
		};
	}

	if (ContextWrapper.deleteDatabase) {
		// Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#deleteDatabase(java.lang.String)
		ContextWrapper.deleteDatabase.overload("java.lang.String").implementation =  function (dbName) {
			//console.log('Delete Database: ' + dbName);
			return this.deleteDatabase.overload("java.lang.String").apply(this, arguments);
		};
	}
});

/* ____FileSystem/IO.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
      var ContextWrapper = Java.use("android.content.ContextWrapper");
      var FileNotFoundException = Java.use("java.io.FileNotFoundException");
      if (ContextWrapper.openFileInput) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#openFileInput(java.lang.String)
        ContextWrapper.openFileInput.overload("java.lang.String").implementation = function(fileName) {
          
          /*   --- Payload Header --- */
          var send_data = {};
          send_data.time = new Date();
          send_data.txnType = 'File I/O';
          send_data.lib = 'android.content.ContextWrapper';
          send_data.method = 'openFileInput';
          send_data.artifact = [];

          /*   --- Payload Body --- */
          var data = {};
          data.name = "File";
          data.value = fileName.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          send(JSON.stringify(send_data));
          try {
            return this.openFileInput.overload("java.lang.String").apply(this, arguments);
          } catch (e) {
            return FileNotFoundException.$new(fileName);
          }
        };
      }

      if (ContextWrapper.openFileOutput) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#openFileOutput(java.lang.String, int)
        ContextWrapper.openFileOutput.overload("java.lang.String", "int").implementation = function(fileName, mode) {
          
          

          /*   --- Payload Header --- */
          var send_data = {};
          send_data.time = new Date();
          send_data.txnType = 'File I/O';
          send_data.lib = 'android.content.ContextWrapper';
          send_data.method = 'openFileOutput';
          send_data.artifact = [];

          /*   --- Payload Body --- */
          var data = {};
          data.name = "File";
          data.value = fileName.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          /*   --- Payload Body --- */
          var data = {};
          data.name = "Output Mode";
          data.value = mode.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          send(JSON.stringify(send_data));
          return this.openFileOutput.overload("java.lang.String", "int").apply(this, arguments);
        };
      }

      if (ContextWrapper.deleteFile) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#deleteFile(java.lang.String)
        ContextWrapper.deleteFile.overload("java.lang.String").implementation = function(fileName) {
          
          /*   --- Payload Header --- */
          var send_data = {};
          send_data.time = new Date();
          send_data.txnType = 'File I/O';
          send_data.lib = 'android.content.ContextWrapper';
          send_data.method = 'deleteFile';
          send_data.artifact = [];

          /*   --- Payload Body --- */
          var data = {};
          data.name = "File";
          data.value = fileName.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          send(JSON.stringify(send_data));
          return this.deleteFile.overload("java.lang.String").apply(this, arguments);
        };
      }
    });

    /*
     To-do: Hook constructors for File class
    */

/* ____FileSystem/native.js____ */

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
    if (parseInt(input)==0) return "";
    if (parseInt(inputlen)==0) return "";
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
            var name=array[x].name;
            if (name=="libstagefright.so") continue;
            else if (name=="libmedia_jni.so") continue;
            else if (name=="libandroid.so") continue;
            else if (name=="libjnigraphics.so") continue;
            else if (name=="libkeymaster1.so") continue;
            else if (name=="libsoftkeymasterdevice.so") continue;
            else if (name=="libkeystore_binder.so") continue;
            else if (name=="libkeystore-engine.so") continue;
            else if (name=="libjavacrypto.so") continue;
            else if (name=="libwebviewchromium_plat_support.so") continue;
            else if (name=="libjavacore.so") continue;
            else if (name=="libssl.so") continue;
            else if (name=="libcrypto.so") continue;
            else if (name=="libinputflinger.so") continue;
            else if (name=="libandroid_runtime.so") continue;
            else if (name=="libc.so") continue;
            else if (name=="libc++.so") continue;
            else if (name=="libbinder.so") continue;
            else if (name=="liblog.so") continue;
            else if (name=="libm.so") continue;
            else if (name=="libmemtrack.so") continue;
            else if (name=="libbacktrace.so") continue;
            else if (name=="libselinux.so") continue;
            else if (name=="libcutils.so") continue;
            else if (name=="libandroidfw.so") continue;
            else if (name=="libexpat.so") continue;
            else if (name=="libnetutils.so") continue;
            else if (name=="libgui.so") continue;
            else if (name=="libui.so") continue;
            else if (name=="libinput.so") continue;
            else if (name=="libcamera_client.so") continue;
            else if (name=="libcamera_metadata.so") continue;
            else if (name=="libnativehelper.so") continue;
            else if (name=="libutils.so") continue;
            else if (name=="libhardware.so") continue;
            else if (name=="libexif.so") continue;
            else if (name=="app_process32_xposed") continue;
            else if (name=="frida-agent-32.so") continue;
            else if (name=="libtxc_dxtn.so") continue;
            else if (name=="gallium_dri.so") continue;
            else if (name=="libdrm_amdgpu.so") continue;
            else if (name=="libvorbisidec.so") continue;
            else if (name=="libstagefright_omx.so") continue;
            else if (name=="libopus.so") continue;
            else if (name=="libdrmframework.so") continue;
            else if (name=="libstagefright_amrnb_common.so") continue;
            else if (name=="libcompiler_rt.so") continue;
            else if (name=="libglapi.so") continue;
            else if (name=="libdrm_radeon.so") continue;
            else if (name=="libdrm_intel.so") continue;
            else if (name=="libdrm.so") continue;
            else if (name=="libgralloc_drm.so") continue;
            else if (name=="libGLES_mesa.so") continue;
            else if (name=="libwebviewchromium_loader.so") continue;
            else if (name=="libkeymaster_messages.so") continue;
            else if (name=="libmtp.so") continue;
            else if (name=="libstagefright_avc_common.so") continue;
            else if (name=="libstagefright_yuv.so") continue;
            else if (name=="libstagefright_enc_common.so") continue;
            else if (name=="libmediautils.so") continue;
            else if (name=="libxposed_art.so") continue;
            else if (name=="libstlport_shared.so") continue;
            else if (name=="libart.so") continue;
            else if (name=="libsigchain.so") continue;
            else if (name=="libLLVM.so") continue;
            else if (name=="libbcinfo.so") continue;
            else if (name=="libbcc.so") continue;
            else if (name=="libcommon_time_client.so") continue;
            else if (name=="libpowermanager.so") continue;
            else if (name=="libprotobuf-cpp-lite.so") continue;
            else if (name=="libRScpp.so") continue;
            else if (name=="libRS.so") continue;
            else if (name=="libspeexresampler.so") continue;
            else if (name=="libnbaio.so") continue;
            else if (name=="libstagefright_foundation.so") continue;
            else if (name=="libwpa_client.so") continue;
            else if (name=="libGLES_trace.so") continue;
            else if (name=="libft2.so") continue;
            else if (name=="libpng.so") continue;
            else if (name=="libsync.so") continue;
            else if (name=="libstdc++.so") continue;
            else if (name=="libunwind.so") continue;
            else if (name=="libbase.so") continue;
            else if (name=="libpcre.so") continue;
            else if (name=="libhwui.so") continue;
            else if (name=="libnativebridge.so") continue;
            else if (name=="libprocessgroup.so") continue;
            else if (name=="libminikin.so") continue;
            else if (name=="libsoundtrigger.so") continue;
            else if (name=="libradio.so") continue;
            else if (name=="libnetd_client.so") continue;
            else if (name=="libimg_utils.so") continue;
            else if (name=="libpdfium.so") continue;
            else if (name=="libaudioutils.so") continue;
            else if (name=="libz.so") continue;
            else if (name=="libharfbuzz_ng.so") continue;
            else if (name=="libusbhost.so") continue;
            else if (name=="libjpeg.so") continue;
            else if (name=="libmedia.so") continue;
            else if (name=="libicui18n.so") continue;
            else if (name=="libicuuc.so") continue;
            else if (name=="libsonivox.so") continue;
            else if (name=="libhardware_legacy.so") continue;
            else if (name=="libhardware.so") continue;
            else if (name=="libETC1.so") continue;
            else if (name=="libGLESv2.so") continue;
            else if (name=="libGLESv1_CM.so") continue;
            else if (name=="libEGL.so") continue;
            else if (name=="libsqlite.so") continue;
            else if (name=="libskia.so") continue;
            else if (name=="libutils.so") continue;
            else if (name=="libdrm_nouveau.so") continue;
            else if (name=="gralloc.default.so") continue;
            else if (name=="libradio_metadata.so") continue;

            
            var fopen = Module.findExportByName(name,"fopen");
            var fread = Module.findExportByName(name,"fread");
            var fwrite = Module.findExportByName(name,"fwrite");
            
            if (fopen!=null)
            {
                console.log("We hooked fopen in: "+array[x].name); 
                
                Interceptor.attach(fopen, {
                    onEnter: function (args)
                    {
                      var filename=Memory.readUtf8String(ptr(args[0])).toString();
                      var mode = Memory.readUtf8String(ptr(args[1])).toString();
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'fopen';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'fopen';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "Options";
                      data.value = "Filename:"+filename+";Mode:"+mode+";";

                      data.argSeq = 0;
                      send_data.artifact.push(data);
                      send(JSON.stringify(send_data));
                    }
                });
            }
            
            if (fwrite!=null)
            {
                console.log("We hooked fwrite in: "+array[x].name); 
                
                Interceptor.attach(fwrite, {
                    onEnter: function (args)
                    {
                      var fsize=args[2].toInt32();
                      var size=fsize;
                      if (size>0x40) size=0x40;
                      var outdata=decodeArray(args[0],size);
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'fwrite';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'fwrite';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "Data";
                      data.value = "Size:"+fsize.toString(16)+";Data:"+outdata;
                      if (size<fsize) data.value+="[...]";
                      data.argSeq = 0;
                      
                      send_data.artifact.push(data);
                      send(JSON.stringify(send_data));  
                    },
                    
                    onLeave: function (args)
                    {
                      
                    }
                });
            }
            
            if (fread!=null)
            {
                console.log("We hooked fread in: "+array[x].name); 
                
                Interceptor.attach(fread, {
                    onEnter: function (args)
                    {
                      this.fsize=args[2].toInt32();
                      this.fdata=args[0];
                    },
                    
                    onLeave: function (args)
                    {
                      var size=this.fsize;
                      if (size>0x40) size=0x40;
                      var outdata=decodeArray(this.fdata,size);
                      
                      var send_data = {};
                      send_data.time = new Date();
                      send_data.txnType = 'fread';
                      send_data.lib = mm.findName(ptr(this.returnAddress));
                      send_data.method = 'fread';
                      send_data.artifact = [];
                      var data = {};
                      data.name = "Data";
                      data.value = "Size:"+this.fsize.toString(16)+";Data:"+outdata;
                      if (size<this.fsize) data.value+="[...]";
                      data.argSeq = 0;
                      
                      send_data.artifact.push(data);
                      send(JSON.stringify(send_data));  
                    }
                });
            }

        }

    });
});


/* ____FileSystem/SharedPreferences.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
  var SharedPreferencesImpl = Java.use("android.app.SharedPreferencesImpl");
  var SharedPreferencesImpl_EditorImpl = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
  
  SharedPreferencesImpl.contains.implementation = function(key) {
    var value = this.contains.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'contains';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getInt.implementation = function(key, defValue) {
    var value = this.getInt.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getInt';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getFloat.implementation = function(key, defValue) {

    var value = this.getFloat.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getFloat';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getLong.implementation = function(key, defValue) {
    var value = this.getLong.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getLong';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getBoolean.implementation = function(key, defValue) {

    var value = this.getBoolean.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getBoolean';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getString.implementation = function(key, defValue) {
    var value = this.getString.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getString';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl.getStringSet.implementation = function(key, defValue) {
    var value = this.getStringSet.apply(this, arguments);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'getStringSet';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return value;
  };

  SharedPreferencesImpl_EditorImpl.putString.implementation = function(key, value) {

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl';
    send_data.method = 'putString';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putString.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.putStringSet.implementation = function(key, values) {
    
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'putStringSet';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putStringSet.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.putInt.implementation = function(key, value) {
    
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'putInt';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putInt.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.putFloat.implementation = function(key, value) {
    
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'putFloat';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putFloat.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.putBoolean.implementation = function(key, value) {
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'putBoolean';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putBoolean.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.putLong.implementation = function(key, value) {
    
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'putLong';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Value";
    data.value = value ? value.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.putLong.apply(this, arguments);
  };

  SharedPreferencesImpl_EditorImpl.remove.implementation = function(key) {
    
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'SharedPreferences';
    send_data.lib = 'android.app.SharedPreferencesImpl$EditorImpl';
    send_data.method = 'remove';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Key";
    data.value = key ? key.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.remove.apply(this, arguments);
  };
});

/* ____FileSystem/Storage.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
      var ContextWrapper = Java.use("android.content.ContextWrapper");

      if (ContextWrapper.getCacheDir) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#getCacheDir()
        ContextWrapper.getCacheDir.implementation = function() {
          var cache_dir = this.getCacheDir.call(this);
          
          /*   --- Payload Header --- */
          var send_data = {};
          send_data.time = new Date();
          send_data.txnType = 'Storage';
          send_data.lib = 'android.content.ContextWrapper';
          send_data.method = 'getCacheDir';
          send_data.artifact = [];

          /*   --- Payload Body --- */
          var data = {};
          data.name = "Cache Directory";
          data.value = cache_dir.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          send(JSON.stringify(send_data));
          return cache_dir;
        };
      }

      if (ContextWrapper.getDataDir) { //Not available below API Level 24
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#getDataDir()
        ContextWrapper.getDataDir.implementation = function() {
          var data_dir = this.getDataDir.call(this);

          /*   --- Payload Header --- */
          var send_data = {};
          send_data.time = new Date();
          send_data.txnType = 'Storage';
          send_data.lib = 'android.content.ContextWrapper';
          send_data.method = 'getDataDir';
          send_data.artifact = [];

          /*   --- Payload Body --- */
          var data = {};
          data.name = "Data Directory";
          data.value = cache_dir.toString();
          data.argSeq = 0;
          send_data.artifact.push(data);

          send(JSON.stringify(send_data));
          return data_dir;
        };
      }
    });

/* ____FlagSecure/FlagSecure.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var FLAG_SECURE_VALUE = "";

Java.perform(function() {
  var Window = Java.use("android.view.Window");
  var WindowManager = Java.use("android.view.WindowManager");
  var SurfaceView = Java.use("android.view.SurfaceView");

  if (Window.setFlags) {
    //Ref: https://developer.android.com/reference/android/view/Window.html#setFlags(int, int)
    Window.setFlags.implementation = function(flag, mask) {
      if (WindowManager.LayoutParams && flag === WindowManager.LayoutParams.FLAG_SECURE) {
        console.log("setFlags FLAG_SECURE: True");
        FLAG_SECURE_VALUE = true;
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.Window';
      send_data.method = 'setFlags';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "FLAG_SECURE";
      data.value = FLAG_SECURE_VALUE;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.setFlags.apply(this, arguments);
    }
  }

  if (Window.addFlags) {
    //Ref: https://developer.android.com/reference/android/view/Window.html#addFlags(int)
    Window.addFlags.implementation = function(flag) {
      if (WindowManager.LayoutParams && flag === WindowManager.LayoutParams.FLAG_SECURE) {
        console.log("addFlags FLAG_SECURE: True");
        FLAG_SECURE_VALUE = true;
      }

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.Window';
      send_data.method = 'setFlags';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "FLAG_SECURE";
      data.value = FLAG_SECURE_VALUE;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.addFlags.apply(this, arguments);
    }
  }

  if (SurfaceView.setSecure) {
    //Ref: https://developer.android.com/reference/android/view/SurfaceView.html#setSecure(boolean)
    SurfaceView.setSecure.implementation = function(isSecure) {
      console.log("SurfaceView setSecure: " + isSecure);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.SurfaceView';
      send_data.method = 'setSecure';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "isSecure";
      data.value = isSecure.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.setSecure.apply(this, arguments);
    }
  }
});

/* ____IPC/IPC.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
  var ContextWrapper = Java.use("android.content.ContextWrapper");

  if (ContextWrapper.sendBroadcast) {
    // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent)
    ContextWrapper.sendBroadcast.overload("android.content.Intent").implementation = function(intent) {
      //console.log("Intent toString: " + intent.toString());
      //console.log("Intent getExtras: " + intent.getExtras());
      //console.log("Intent getFlags: " + intent.getFlags());

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Broadcast Sent';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'sendBroadcast';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent (Stringified)";
      data.value = intent.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Extras";
      data.value = intent ? intent.getExtras() ? intent.getExtras().toString() : "null" : "null";
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Flags";
      data.value = intent.getFlags().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.sendBroadcast.overload("android.content.Intent").apply(this, arguments);
    };

    // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent, java.lang.String)
    ContextWrapper.sendBroadcast.overload("android.content.Intent", "java.lang.String").implementation = function(intent, receiverPermission) {
      //console.log("Intent toString: " + intent.toString());
      //console.log("Intent getExtras: " + intent.getExtras());
      //console.log("Intent getFlags: " + intent.getFlags());
      //console.log("Intent receiverPermission: " + receiverPermission);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Broadcast Sent';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'sendBroadcast';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent (Stringified)";
      data.value = intent.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Extras";
      data.value = intent.getExtras().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Flags";
      data.value = intent.getFlags().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Receiver Permission";
      data.value = receiverPermission.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.sendBroadcast.overload("android.content.Intent", "java.lang.String").apply(this, arguments);
    };
  }

  if (ContextWrapper.sendStickyBroadcast) {
    // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyBroadcast(android.content.Intent)
    ContextWrapper.sendStickyBroadcast.overload("android.content.Intent").implementation = function(intent) {
      //console.log("Intent toString: " + intent.toString());
      //console.log("Intent getExtras: " + intent.getExtras());
      //console.log("Intent getFlags: " + intent.getFlags());

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Sticky Broadcast Sent';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'sendStickyBroadcast';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent (Stringified)";
      data.value = intent.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Extras";
      data.value = intent.getExtras().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent Flags";
      data.value = intent.getFlags().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.sendStickyBroadcast.overload("android.content.Intent").apply(this, arguments);
    };
  }

  if (ContextWrapper.startActivity) {
    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent)
    ContextWrapper.startActivity.overload("android.content.Intent").implementation = function(intent) {
      //console.log("Intent: " + intent);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Activity Started';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'startActivity';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent (Stringified)";
      data.value = intent.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.startActivity.overload("android.content.Intent").apply(this, arguments);
    };

    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent, android.os.Bundle)
    ContextWrapper.startActivity.overload("android.content.Intent", "android.os.Bundle").implementation = function(intent, bundle) {
      //console.log("Intent: " + intent);
      //console.log("Bundle: " + bundle);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Activity Started';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'startActivity';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Intent (Stringified)";
      data.value = intent.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Bundle";
      data.value = bundle.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.startActivity.overload("android.content.Intent", "android.os.Bundle").apply(this, arguments);
    };
  }

  if (ContextWrapper.startService) {
    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startService(android.content.Intent)
    ContextWrapper.startService.implementation = function(service) {
      //console.log("startService: " + service);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Service Started';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'startService';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Service";
      data.value = service.toUri(0).toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.startService.apply(this, arguments);
    };
  }

  if (ContextWrapper.stopService) {
    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#stopService(android.content.Intent)
    ContextWrapper.stopService.implementation = function(name) {
      //console.log("stopService: " + name);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Service Stopped';
      send_data.lib = 'android.content.ContextWrapper';
      send_data.method = 'stopService';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Service Intent URL";
      data.value = service.toUri(0);
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.stopService.apply(this, arguments);
    };
  }

  if (ContextWrapper.registerReceiver) {
    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)
    ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter").implementation = function(receiver, filter) {
      return this.registerReceiver.apply(this, arguments);
    };

    //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)
    ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter", "java.lang.String", "android.os.Handler").implementation = function(receiver, filter, broadcastPermission, scheduler) {
      return this.registerReceiver.apply(this, arguments);
    };
  }
});

/* ____Network/HTTP.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var methodURL = "";
var requestHeaders = "";
var requestBody = "";
var responseHeaders = "";
var responseBody = "";

Java.perform(function() {
  try {
    var HttpURLConnection = Java.use("com.android.okhttp.internal.http.HttpURLConnectionImpl");
  } catch (e) {
    try {
      var HttpURLConnection = Java.use("com.android.okhttp.internal.huc.HttpURLConnectionImpl");
    } catch (e) { return }
  }
  //var BufferedInputStream = Java.use("java.io.BufferedInputStream");
  //var StringBuilder = Java.use("java.lang.StringBuilder");
  var InputStreamReader =  Java.use("java.io.InputStreamReader");
  var BufferedReader = Java.use("java.io.BufferedReader");
  
  HttpURLConnection.getInputStream.overloads[0].implementation = function() {
    try {
      methodURL = "";
    responseHeaders = "";
    responseBody = "";
    var Connection = this;
    var stream = this.getInputStream.overloads[0].apply(this, arguments);

    var requestURL = Connection.getURL().toString();
    var requestMethod = Connection.getRequestMethod();
    var requestProperties
    methodURL = requestMethod + " " + requestURL;
    if (Connection.getHeaderFields) {
      var Keys = Connection.getHeaderFields().keySet().toArray();
      var Values = Connection.getHeaderFields().values().toArray();
      responseHeaders = "";
      for (var key in Keys) {
        if (Keys[key] && Keys[key] !== null && Values[key]) {
          responseHeaders += Keys[key] + ": " + Values[key].toString().replace(/\[/gi, "").replace(/\]/gi, "") + "\n";
        } else if (Values[key]) {
          responseHeaders += Values[key].toString().replace(/\[/gi, "").replace(/\]/gi, "") + "\n";
        }
      }
    }
    if (stream) {
      var BufferedReaderStream = BufferedReader.$new(InputStreamReader.$new(stream));
      var inputLine = "";
    while ((inputLine = BufferedReaderStream.readLine()) != null){
      responseBody += inputLine + "\n";
    }
    BufferedReaderStream.close();

    //var divider = "\n==================\n";
    //console.log(methodURL + "\n" + requestHeaders + "\n" + requestBody + "\n\n" + responseHeaders + "\n" + responseBody + divider);

    }
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'HTTP';
    send_data.lib = 'com.android.okhttp.internal.http.HttpURLConnectionImpl';
    send_data.method = 'getInputStream';
    send_data.artifact = [];
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Request/Response";
    data.value = methodURL + "\n" + requestHeaders + "\n" + requestBody + "\n\n" + responseHeaders + "\n" + responseBody;
    data.argSeq = 0;
    send_data.artifact.push(data);
    send(JSON.stringify(send_data));
    return stream;
    } catch (e) {
      this.getInputStream.overloads[0].apply(this, arguments);
    }
  }

  HttpURLConnection.getOutputStream.overloads[0].implementation = function() {
    requestHeaders = "";
    requestBody = "";
    var Connection = this;
    if (Connection.getRequestProperties) {
      var Keys = Connection.getRequestProperties().keySet().toArray();
      var Values = Connection.getRequestProperties().values().toArray();
      requestHeaders = "";
      for (var key in Keys) {
        if (Keys[key] && Keys[key] !== null && Values[key]) {
          requestHeaders += Keys[key] + ": " + Values[key].toString().replace(/\[/gi, "").replace(/\]/gi, "") + "\n";
        } else if (Values[key]) {
          requestHeaders += Values[key].toString().replace(/\[/gi, "").replace(/\]/gi, "") + "\n";
        }
      }
    }
    var stream = this.getOutputStream.overloads[0].apply(this, arguments);
    return stream;
  }
});


/* ____Process/start.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
  var Process = Java.use("android.os.Process");
  if (Process.start) {
    Process.start.implementation = function(processClass, niceName, uid,
      gid, gids, debugFlags, mountExternal, targetSdkVersion, seInfo,
      abi, instructionSet, appDataDir, zygoteArgs) {

      //console.log("processClass: " + processClass);
      //console.log("niceName: " + niceName);
      //console.log("uid: " + uid);
      //console.log("gid: " + gid);
      //console.log("gids: " + gids);
      //console.log("debugFlags: " + debugFlags);
      //console.log("mountExternal: " + mountExternal);
      //console.log("targetSdkVersion: " + targetSdkVersion);
      //console.log("seInfo: " + seInfo);
      //console.log("abi: " + abi);
      //console.log("instructionSet: " + instructionSet);
      //console.log("appDataDir: " + appDataDir);
      //console.log("zygoteArgs: " + zygoteArgs);


      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Process';
      send_data.lib = 'android.os.Process';
      send_data.method = 'start';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Process Class";
      data.value = processClass.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);
      
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Nice Name";
      data.value = niceName.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "uid";
      data.value = uid.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "gid";
      data.value = gid.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "gids";
      data.value = gids.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Debug Flags";
      data.value = debugFlags.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Mount External";
      data.value = mountExternal.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Target Sdk Version";
      data.value = targetSdkVersion.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SElinux Info";
      data.value = seInfo.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "abi";
      data.value = abi.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Instruction Set";
      data.value = instructionSet.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Application Data Directory";
      data.value = appDataDir.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Zygote Args";
      data.value = zygoteArgs.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.start.apply(this, arguments);
    }
  }
});

/* ____Runtime/Runtime.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var processArgs = function(command, envp, dir) {
  var output = {};
  if (command) {
    //console.log("Command: " + command);
    output.command = command;
  }
  if (envp) {
    //console.log("Environment: " + envp);
    output.envp = envp;
  }
  if (dir) {
    //console.log("Working Directory: " + dir);
    output.dir = dir;
  }
  return output;
}

Java.perform(function() {
    var Runtime = Java.use("java.lang.Runtime");
    if (Runtime.exec) {
      Runtime.exec.overloads[0].implementation = function(command, envp, dir) {
        //console.log(processArgs(command, envp, dir));
        var args = processArgs(command, envp, dir);
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Runtime Command Execution';
        send_data.lib = 'java.lang.Runtime';
        send_data.method = 'exec';
        send_data.artifact = [];

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Command";
        data.value = args.command ? args.command.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Environment";
        data.value = args.envp ? args.envp.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Working Directory";
        data.value = args.dir ? args.dir.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        send(JSON.stringify(send_data));
        return this.exec.overloads[0].apply(this, arguments);
      }

      Runtime.exec.overloads[1].implementation = function(command, envp, dir) {
        var args = processArgs(command, envp, dir);
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'Runtime Command Execution';
        send_data.lib = 'java.lang.Runtime';
        send_data.method = 'exec';
        send_data.artifact = [];

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Command";
        data.value = args.command ? args.command.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Environment";
        data.value = args.envp ? args.envp.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Working Directory";
        data.value = args.dir ? args.dir.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
        return this.exec.overloads[1].apply(this, arguments);
      }

      Runtime.exec.overloads[2].implementation = function(command, envp, dir) {
        //console.log(processArgs(command, envp, dir));
        var args = processArgs(command, envp, dir);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'Runtime Command Execution';
      send_data.lib = 'java.lang.Runtime';
      send_data.method = 'exec';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Command";
      data.value = args.command ? args.command.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Environment";
      data.value = args.envp ? args.envp.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Working Directory";
      data.value = args.dir ? args.dir.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.exec.overloads[2].apply(this, arguments);
    }

    Runtime.exec.overloads[3].implementation = function(command, envp, dir) {
      //console.log(processArgs(command, envp, dir));
      var args = processArgs(command, envp, dir);
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Runtime Command Execution';
    send_data.lib = 'java.lang.Runtime';
    send_data.method = 'exec';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Command";
    data.value = args.command ? args.command.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Environment";
    data.value = args.envp ? args.envp.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Working Directory";
    data.value = args.dir ? args.dir.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));

    return this.exec.overloads[3].apply(this, arguments);
  }

  Runtime.exec.overloads[4].implementation = function(command, envp, dir) {
    //console.log(processArgs(command, envp, dir));
    var args = processArgs(command, envp, dir);
  /*   --- Payload Header --- */
  var send_data = {};
  send_data.time = new Date();
  send_data.txnType = 'Runtime Command Execution';
  send_data.lib = 'java.lang.Runtime';
  send_data.method = 'exec';
  send_data.artifact = [];

  /*   --- Payload Body --- */
  var data = {};
  data.name = "Command";
  data.value = args.command ? args.command.toString() : 'null';
  data.argSeq = 0;
  send_data.artifact.push(data);

  /*   --- Payload Body --- */
  var data = {};
  data.name = "Environment";
  data.value = args.envp ? args.envp.toString() : 'null';
  data.argSeq = 0;
  send_data.artifact.push(data);

  /*   --- Payload Body --- */
  var data = {};
  data.name = "Working Directory";
  data.value = args.dir ? args.dir.toString() : 'null';
  data.argSeq = 0;
  send_data.artifact.push(data);
  send(JSON.stringify(send_data));
  return this.exec.overloads[4].apply(this, arguments);
}

Runtime.exec.overloads[5].implementation = function(command, envp, dir) {
  //console.log(processArgs(command, envp, dir));
  var args = processArgs(command, envp, dir);
/*   --- Payload Header --- */
var send_data = {};
send_data.time = new Date();
send_data.txnType = 'Runtime Command Execution';
send_data.lib = 'java.lang.Runtime';
send_data.method = 'exec';
send_data.artifact = [];

/*   --- Payload Body --- */
var data = {};
data.name = "Command";
data.value = args.command ? args.command.toString() : 'null';
data.argSeq = 0;
send_data.artifact.push(data);

/*   --- Payload Body --- */
var data = {};
data.name = "Environment";
data.value = args.envp ? args.envp.toString() : 'null';
data.argSeq = 0;
send_data.artifact.push(data);

/*   --- Payload Body --- */
var data = {};
data.name = "Working Directory";
data.value = args.dir ? args.dir.toString() : 'null';
data.argSeq = 0;
send_data.artifact.push(data);
send(JSON.stringify(send_data));
return this.exec.overloads[5].apply(this, arguments);
}
}

if (Runtime.loadLibrary) {
  Runtime.loadLibrary.overloads[0].implementation = function(libname) {
    //console.log("Runtime.loadLibrary: " + libname);
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Runtime Load Library';
    send_data.lib = 'java.lang.Runtime';
    send_data.method = 'loadLibrary';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Library Path";
    data.value = libname ? libname.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.loadLibrary.overloads[0].apply(this, arguments);
  }

    Runtime.loadLibrary.overloads[1].implementation = function(libname) {
    //console.log("Runtime.loadLibrary: " + libname);
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Runtime Load Library';
    send_data.lib = 'java.lang.Runtime';
    send_data.method = 'loadLibrary';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Library Path";
    data.value = libname ? libname.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.loadLibrary.overloads[1].apply(this, arguments);
  }
}

if (Runtime.load) {
  Runtime.load.overloads[0].implementation = function(filename) {
    //console.log("Runtime.load: " + filename);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Runtime Load Library';
    send_data.lib = 'java.lang.Runtime';
    send_data.method = 'load';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Library Path";
    data.value = filename ? filename.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.load.overloads[0].apply(this, arguments);
  }

  Runtime.load.overloads[1].implementation = function(filename) {
    //console.log("Runtime.load: " + filename);

    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'Runtime Load Library';
    send_data.lib = 'java.lang.Runtime';
    send_data.method = 'load';
    send_data.artifact = [];

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Library Path";
    data.value = filename ? filename.toString() : 'null';
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
    return this.load.overloads[1].apply(this, arguments);
  }
}
});

/* ____SQLCipher/SQLCipher.js____ */

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


/* ____SQLCipher/SQLCipher_native.js____ */

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


/* ____SQLiteDatabase/SQLiteDatabase.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var byteArraytoHexString = function(byteArray) {
  if (byteArray && byteArray.map) {
    return byteArray.map(function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  } else {
    return byteArray + "";
  }
}

var normalize = function(input) {
  if (input.length && input.length > 0) {
    var normalized = byteArraytoHexString(input);
  } else if (input.array) {
    var normalized = byteArraytoHexString(input.array());
  } else {
    var normalized = input.toString();
  }
  return normalized;
}


var hexToAscii = function(input) {
  var hex = input.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

Java.perform(function() {
  var SQLiteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String)
  if (SQLiteDatabase.execSQL) {
    SQLiteDatabase.execSQL.overloads[0].implementation = function(sql) {
      //console.log('SQLiteDatabase.execSQL sql: ' + sql.toString());
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'execSQL';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.execSQL.overloads[0].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String, java.lang.Object[])
  if (SQLiteDatabase.execSQL) {


    SQLiteDatabase.execSQL.overloads[1].implementation = function(sql, bindArgs) {

      //console.log('SQLiteDatabase.execSQL sql: ' + sql.toString());
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'execSQL';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (bindArgs) {
        //console.log('SQLiteDatabase.execSQL bindArgs: ' + bindArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "SQL BindArgs";
        data.value = bindArgs ? bindArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }

      send(JSON.stringify(send_data));
      return this.execSQL.overloads[1].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getPath()
  if (SQLiteDatabase.getPath) {
    SQLiteDatabase.getPath.implementation = function() {
      var dbPath = this.getPath.call(this);
      //console.log("SQLiteDatabase.getPath DB: " + dbPath);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'getPath';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DB Path";
      data.value = dbPath ? dbPath.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return dbPath;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insert(java.lang.String, java.lang.String, android.content.ContentValues)
  if (SQLiteDatabase.insert) {
    SQLiteDatabase.insert.implementation = function(table, nullColumnHack, values) {
      //console.log("SQLiteDatabase.insert table: " + table);
      //console.log("SQLiteDatabase.insert nullColumnHack: " + nullColumnHack);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'insert';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table Name";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "NullColumnHack";
      data.value = nullColumnHack ? nullColumnHack.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (values) {
        //console.log("SQLiteDatabase.insert values: " + values.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Values";
        data.value = values ? values.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }

      send(JSON.stringify(send_data));
      return this.insert.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertOrThrow(java.lang.String, java.lang.String, android.content.ContentValues)
  if (SQLiteDatabase.insertOrThrow) {
    SQLiteDatabase.insertOrThrow.implementation = function(table, nullColumnHack, values) {
      //console.log("SQLiteDatabase.insertOrThrow table: " + table);
      //console.log("SQLiteDatabase.insertOrThrow nullColumnHack: " + nullColumnHack);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'insertOrThrow';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table Name";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "NullColumnHack";
      data.value = nullColumnHack ? nullColumnHack.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (values) {
        //console.log("SQLiteDatabase.insertOrThrow values: " + values.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Values";
        data.value = values ? values.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }

      send(JSON.stringify(send_data));
      return this.insertOrThrow.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertWithOnConflict(java.lang.String, java.lang.String, android.content.ContentValues, int)
  if (SQLiteDatabase.insertWithOnConflict) {
    SQLiteDatabase.insertWithOnConflict.implementation = function(table, nullColumnHack, values, conflictAlgorithm) {
      //console.log("SQLiteDatabase.insertWithOnConflict table: " + table);
      //console.log("SQLiteDatabase.insertWithOnConflict nullColumnHack: " + nullColumnHack);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'insertWithOnConflict';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table Name";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "NullColumnHack";
      data.value = nullColumnHack ? nullColumnHack.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (values) {
        //console.log("SQLiteDatabase.insertWithOnConflict values: " + values.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Values";
        data.value = values ? values.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.insertWithOnConflict conflictAlgorithm: " + conflictAlgorithm);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "conflictAlgorithm";
      data.value = conflictAlgorithm ? conflictAlgorithm.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.insertWithOnConflict.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase.CursorFactory, int)
  if (SQLiteDatabase.openDatabase) {
    SQLiteDatabase.openDatabase.overloads[0].implementation = function(path, factory, flags) {
      if (flags === SQLiteDatabase.OPEN_READWRITE) {
        flags = "OPEN_READWRITE";
      } else if (flags === SQLiteDatabase.OPEN_READONLY) {
        flags = "OPEN_READONLY";
      } else if (flags === SQLiteDatabase.CREATE_IF_NECESSARY) {
        flags = "CREATE_IF_NECESSARY";
      } else if (flags === SQLiteDatabase.NO_LOCALIZED_COLLATORS) {
        flags = "NO_LOCALIZED_COLLATORS";
      }
      //console.log("SQLiteDatabase.openDatabase path: " + path);
      //console.log("SQLiteDatabase.openDatabase flags: " + flags);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'openDatabase';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DB Path";
      data.value = path ? path.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Flags";
      data.value = flags;
      data.argSeq = 0;

      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.openDatabase.overloads[0].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase.CursorFactory, int, android.database.DatabaseErrorHandler)
  if (SQLiteDatabase.openDatabase) {


    SQLiteDatabase.openDatabase.overloads[1].implementation = function(path, factory, flags, errorHandler) {
      if (flags === SQLiteDatabase.OPEN_READWRITE) {
        flags = "OPEN_READWRITE";
      } else if (flags === SQLiteDatabase.OPEN_READONLY) {
        flags = "OPEN_READONLY";
      } else if (flags === SQLiteDatabase.CREATE_IF_NECESSARY) {
        flags = "CREATE_IF_NECESSARY";
      } else if (flags === SQLiteDatabase.NO_LOCALIZED_COLLATORS) {
        flags = "NO_LOCALIZED_COLLATORS";
      }
      //console.log("SQLiteDatabase.openDatabase path: " + path);
      //console.log("SQLiteDatabase.openDatabase flags: " + flags);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'openDatabase';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DB Path";
      data.value = path ? path.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Flags";
      data.value = flags;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.openDatabase.overloads[1].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.io.File, android.database.sqlite.SQLiteDatabase.CursorFactory)
  if (SQLiteDatabase.openOrCreateDatabase) {
    SQLiteDatabase.openOrCreateDatabase.overloads[0].implementation = function(file, factory) {
      if (file) {
        //console.log("SQLiteDatabase.openOrCreateDatabase dbPath: " + file.toString());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'SQLiteDatabase';
        send_data.lib = 'android.database.sqlite.SQLiteDatabase';
        send_data.method = 'openOrCreateDatabase';
        send_data.artifact = [];

        /*   --- Payload Body --- */
        var data = {};
        data.name = "DB Path";
        data.value = file ? file.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      }
      return this.openOrCreateDatabase.overloads[0].apply(this, arguments);
    }
  }

  //Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase.CursorFactory, android.database.DatabaseErrorHandler)
  if (SQLiteDatabase.openOrCreateDatabase) {
    SQLiteDatabase.openOrCreateDatabase.overloads[1].implementation = function(file, factory, errorHandler) {
      if (file) {
        //console.log("SQLiteDatabase.openOrCreateDatabase dbPath: " + file.toString());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'SQLiteDatabase';
        send_data.lib = 'android.database.sqlite.SQLiteDatabase';
        send_data.method = 'openOrCreateDatabase';
        send_data.artifact = [];

        /*   --- Payload Body --- */
        var data = {};
        data.name = "DB Path";
        data.value = file ? file.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
        send(JSON.stringify(send_data));
      }
      return this.openOrCreateDatabase.overloads[1].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase.CursorFactory)
  if (SQLiteDatabase.openOrCreateDatabase) {


    SQLiteDatabase.openOrCreateDatabase.overloads[2].implementation = function(path, factory) {
      //console.log("SQLiteDatabase.openOrCreateDatabase dbPath: " + path);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'openOrCreateDatabase';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DB Path";
      data.value = path ? path.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.openOrCreateDatabase.overloads[2].apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)
  if (SQLiteDatabase.query) {
    SQLiteDatabase.query.overloads[0].implementation = function(distinct, table, columns, selection, selectionArgs, groupBy, having, orderBy, limit) {

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'query';
      send_data.artifact = [];

      //console.log("SQLiteDatabase.query distinct: " + distinct);
      //console.log("SQLiteDatabase.query table: " + table);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DISTINCT";
      data.value = distinct ? distinct.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (columns) {
        //console.log("SQLiteDatabase.query columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query selection: " + selection);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (selectionArgs) {
        //console.log("SQLiteDatabase.query selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query groupBy: " + groupBy);
      //console.log("SQLiteDatabase.query having: " + having);
      //console.log("SQLiteDatabase.query orderBy: " + orderBy);
      //console.log("SQLiteDatabase.query limit: " + limit);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy ? groupBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Limit";
      data.value = limit ? limit.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.query.overloads[0].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";
      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)
  if (SQLiteDatabase.query) {
    SQLiteDatabase.query.overloads[1].implementation = function(table, columns, selection, selectionArgs, groupBy, having, orderBy, limit) {
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'query';
      send_data.artifact = [];

      //console.log("SQLiteDatabase.query table: " + table);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (columns) {
        //console.log("SQLiteDatabase.query columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query selection: " + selection);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (selectionArgs) {
        //console.log("SQLiteDatabase.query selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query groupBy: " + groupBy);
      //console.log("SQLiteDatabase.query having: " + having);
      //console.log("SQLiteDatabase.query orderBy: " + orderBy);
      //console.log("SQLiteDatabase.query limit: " + limit);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy ? groupBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Limit";
      data.value = limit ? limit.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.query.overloads[1].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";
      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");

          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)
  if (SQLiteDatabase.query) {
    SQLiteDatabase.query.overloads[2].implementation = function(distinct, table, columns, selection, selectionArgs, groupBy, having, orderBy, limit, cancellationSignal) {
      //console.log("SQLiteDatabase.query distinct: " + distinct);
      //console.log("SQLiteDatabase.query table: " + table);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'query';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DISTINCT";
      data.value = distinct ? distinct.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);


      if (columns) {
        //console.log("SQLiteDatabase.query columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query selection: " + selection);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (selectionArgs) {
        //console.log("SQLiteDatabase.query selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query groupBy: " + groupBy);
      //console.log("SQLiteDatabase.query having: " + having);
      //console.log("SQLiteDatabase.query orderBy: " + orderBy);
      //console.log("SQLiteDatabase.query limit: " + limit);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy ? groupBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Limit";
      data.value = limit ? limit.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.query.overloads[2].apply(this, arguments);
      var CursorCopy = Cursor;

      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i)));
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String)
  if (SQLiteDatabase.query) {
    SQLiteDatabase.query.overloads[3].implementation = function(table, columns, selection, selectionArgs, groupBy, having, orderBy) {
      //console.log("SQLiteDatabase.query table: " + table);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'query';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (columns) {
        //console.log("SQLiteDatabase.query columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.query selection: " + selection);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (selectionArgs) {
        //console.log("SQLiteDatabase.query selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

      }
      //console.log("SQLiteDatabase.query groupBy: " + groupBy);
      //console.log("SQLiteDatabase.query having: " + having);
      //console.log("SQLiteDatabase.query orderBy: " + orderBy);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.query.overloads[3].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob;

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase.CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)
  if (SQLiteDatabase.queryWithFactory) {
    SQLiteDatabase.queryWithFactory.overloads[0].implementation = function(cursorFactory, distinct, table, columns, selection, selectionArgs, groupBy, having, orderBy, limit, cancellationSignal) {
      //console.log("SQLiteDatabase.queryWithFactory table: " + table);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'queryWithFactory';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (columns) {
        //console.log("SQLiteDatabase.queryWithFactory columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.queryWithFactory selection: " + selection);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (selectionArgs) {
        //console.log("SQLiteDatabase.queryWithFactory selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selection ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.queryWithFactory groupBy: " + groupBy);
      //console.log("SQLiteDatabase.queryWithFactory having: " + having);
      //console.log("SQLiteDatabase.queryWithFactory orderBy: " + orderBy);
      //console.log("SQLiteDatabase.queryWithFactory limit: " + limit);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy ? groupBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Limit";
      data.value = limit ? limit.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);


      var Cursor = this.queryWithFactory.overloads[0].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase.CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)
  if (SQLiteDatabase.queryWithFactory) {
    SQLiteDatabase.queryWithFactory.overloads[1].implementation = function(cursorFactory, distinct, table, columns, selection, selectionArgs, groupBy, having, orderBy, limit) {
      //console.log("SQLiteDatabase.queryWithFactory table: " + table);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'queryWithFactory';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);


      if (columns) {
        //console.log("SQLiteDatabase.queryWithFactory columns: " + columns.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Columns";
        data.value = columns ? columns.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.queryWithFactory selection: " + selection);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Selection";
      data.value = selection ? selection.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (selectionArgs) {
        //console.log("SQLiteDatabase.queryWithFactory selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.queryWithFactory groupBy: " + groupBy);
      //console.log("SQLiteDatabase.queryWithFactory having: " + having);
      //console.log("SQLiteDatabase.queryWithFactory orderBy: " + orderBy);
      //console.log("SQLiteDatabase.queryWithFactory limit: " + limit);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Group By";
      data.value = groupBy ? groupBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Having";
      data.value = having ? having.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Order By";
      data.value = orderBy ? orderBy.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Limit";
      data.value = limit ? limit.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.queryWithFactory.overloads[1].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));

            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";

            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";

              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[], android.os.CancellationSignal)
  if (SQLiteDatabase.rawQuery) {
    SQLiteDatabase.rawQuery.overloads[0].implementation = function(sql, selectionArgs, cancellationSignal) {
      //console.log("SQLiteDatabase.rawQuery sql: " + sql);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'rawQuery';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (selectionArgs) {
        //console.log("SQLiteDatabase.rawQuery selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Arguments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }

      var Cursor = this.rawQuery.overloads[0].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[])
  if (SQLiteDatabase.rawQuery) {

    SQLiteDatabase.rawQuery.overloads[1].implementation = function(sql, selectionArgs) {
      //console.log("SQLiteDatabase.rawQuery sql: " + sql);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'rawQuery';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (selectionArgs) {
        //console.log("SQLiteDatabase.rawQuery selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Argruments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      var Cursor = this.rawQuery.overloads[1].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";

      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase.CursorFactory, java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)
  if (SQLiteDatabase.rawQueryWithFactory) {
    SQLiteDatabase.rawQueryWithFactory.overloads[0].implementation = function(cursorFactory, sql, selectionArgs, editTable, cancellationSignal) {
      //console.log("SQLiteDatabase.rawQueryWithFactory sql: " + sql);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'rawQueryWithFactory';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (selectionArgs) {
        //console.log("SQLiteDatabase.rawQueryWithFactory selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Argruments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.rawQueryWithFactory editTable: " + editTable);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Edit Table";
      data.value = editTable ? editTable.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      var Cursor = this.rawQueryWithFactory.overloads[0].apply(this, arguments);
      var CursorCopy = Cursor;

      var queryOutput = "";
      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase.CursorFactory, java.lang.String, java.lang.String[], java.lang.String)
  if (SQLiteDatabase.rawQueryWithFactory) {
    SQLiteDatabase.rawQueryWithFactory.overloads[1].implementation = function(cursorFactory, sql, selectionArgs, editTable) {
      //console.log("SQLiteDatabase.rawQueryWithFactory sql: " + sql);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'rawQueryWithFactory';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (selectionArgs) {
        //console.log("SQLiteDatabase.rawQueryWithFactory selectionArgs: " + selectionArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "Selection Argruments";
        data.value = selectionArgs ? selectionArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      //console.log("SQLiteDatabase.rawQueryWithFactory editTable: " + editTable);
      /*   --- Payload Body --- */
      var data = {};
      data.name = "Edit Table";
      data.value = editTable ? editTable.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      var Cursor = this.rawQueryWithFactory.overloads[1].apply(this, arguments);
      var CursorCopy = Cursor;
      var queryOutput = "";
      if (Cursor && Cursor.getColumnCount && Cursor.moveToFirst()) {
        var ColumnCount = parseInt(Cursor.getColumnCount());
        if (ColumnCount > 0) {
          //console.log("Returned Columns");
          for (var i = 0; i < ColumnCount; i++) {
            ////console.log("DEBUG: " + i);
            //console.log("ColumnName: " + Cursor.getColumnName(i));
            ////console.log("ColumnData: " + Cursor.getColumnIndex(Cursor.getColumnName(i)));
            queryOutput += "ColumnName: " + Cursor.getColumnName(i) + "\n";
            if (!Cursor.isNull(i)) {
              try {
                //console.log("ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))));
                queryOutput += "ColumnData: " + Cursor.getString(Cursor.getColumnIndex(Cursor.getColumnName(i))) + "\n";
              } catch (e) {
                var blob = Cursor.getBlob(Cursor.getColumnIndex(Cursor.getColumnName(i)));
                var strBlob = normalize(blob);
                //console.log("ColumnData: " + strBlob);
                queryOutput += "ColumnData: " + strBlob + "\n";

                /*   --- Payload Body --- */
                var data = {};
                data.name = "Returned Columns";
                data.value = queryOutput;
                data.argSeq = 0;
                send_data.artifact.push(data);
              }
            }
          }
        }
      }
      send(JSON.stringify(send_data));
      return CursorCopy;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#update(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[])
  if (SQLiteDatabase.update) {
    SQLiteDatabase.update.implementation = function(table, values, whereClause, whereArgs) {
      //console.log("SQLiteDatabase.update table: " + table);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'update';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (values) {
        //console.log("SQLiteDatabase.update values: " + values.toString());

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Values";
        data.value = values ? values.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

      }
      //console.log("SQLiteDatabase.update whereClause: " + whereClause);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "WHERE Clause";
      data.value = whereClause ? whereClause.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (whereArgs) {
        //console.log("SQLiteDatabase.update whereArgs: " + whereArgs.toString());
        /*   --- Payload Body --- */
        var data = {};
        data.name = "WHERE Arguments";
        data.value = whereArgs ? whereArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);
      }
      send(JSON.stringify(send_data));
      return this.update.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#updateWithOnConflict(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[], int)
  if (SQLiteDatabase.updateWithOnConflict) {
    SQLiteDatabase.updateWithOnConflict.implementation = function(table, values, whereClause, whereArgs, conflictAlgorithm) {
      //console.log("SQLiteDatabase.updateWithOnConflict table: " + table);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'updateWithOnConflict';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Table";
      data.value = table ? table.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);
      if (values) {
        //console.log("SQLiteDatabase.updateWithOnConflict values: " + values.toString());

        /*   --- Payload Body --- */
        var data = {};
        data.name = "Values";
        data.value = values ? values.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

      }
      //console.log("SQLiteDatabase.updateWithOnConflict whereClause: " + whereClause);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "WHERE Clause";
      data.value = whereClause ? whereClause.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      if (whereArgs) {
        //console.log("SQLiteDatabase.updateWithOnConflict whereArgs: " + whereArgs.toString());

        /*   --- Payload Body --- */
        var data = {};
        data.name = "WHERE Arguments";
        data.value = whereArgs ? whereArgs.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

      }
      //console.log("SQLiteDatabase.updateWithOnConflict conflictAlgorithm: " + conflictAlgorithm);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Conflict Algorithm";
      data.value = conflictAlgorithm ? conflictAlgorithm.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.updateWithOnConflict.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#validateSql(java.lang.String, android.os.CancellationSignal)
  if (SQLiteDatabase.validateSql) {
    SQLiteDatabase.validateSql.implementation = function(sql, cancellationSignal) {
      //console.log("SQLiteDatabase.validateSql SQL: " + sql);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'validateSql';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.validateSql.apply(this, arguments);
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#compileStatement(java.lang.String)
  if (SQLiteDatabase.compileStatement) {
    SQLiteDatabase.compileStatement.implementation = function(sql) {
      //console.log("SQLiteDatabase.compileStatement SQL: " + sql);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'compileStatement';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "SQL Statement";
      data.value = sql ? sql.toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.compileStatement.apply(this, arguments);
    }
  }

  //Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#create(android.database.sqlite.SQLiteDatabase.CursorFactory)
  if (SQLiteDatabase.create) {
    SQLiteDatabase.create.implementation = function(factory) {
      var db = this.create.apply(this, arguments);
      //console.log("SQLiteDatabase.create DB: " + db.getPath());
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'SQLiteDatabase';
      send_data.lib = 'android.database.sqlite.SQLiteDatabase';
      send_data.method = 'create';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "DB Path";
      data.value = db.getPath() ? db.getPath().toString() : 'null';
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return db;
    }
  }

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#delete(java.lang.String, java.lang.String, java.lang.String[])
  /*
  if (SQLiteDatabase.delete) {
    SQLiteDatabase.delete.implementation = function(table, whereClause, whereArgs) {
      //console.log("SQLiteDatabase.updateWithOnConflict table: " + table);
      //console.log("SQLiteDatabase.updateWithOnConflict whereClause: " + whereClause);
      if (whereArgs) {
        //console.log("SQLiteDatabase.updateWithOnConflict whereArgs: " + whereArgs.toString());
      }
      return this.delete.apply(this, arguments);
    }
  }
  */

  // Ref: https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#deleteDatabase(java.io.File)
  if (SQLiteDatabase.deleteDatabase) {
    SQLiteDatabase.deleteDatabase.implementation = function(file) {
      if (file) {
        //console.log("SQLiteDatabase.deleteDatabase File: " + file.toString());
        /*   --- Payload Header --- */
        var send_data = {};
        send_data.time = new Date();
        send_data.txnType = 'SQLiteDatabase';
        send_data.lib = 'android.database.sqlite.SQLiteDatabase';
        send_data.method = 'deleteDatabase';
        send_data.artifact = [];

        /*   --- Payload Body --- */
        var data = {};
        data.name = "DB Path";
        data.value = file ? file.toString() : 'null';
        data.argSeq = 0;
        send_data.artifact.push(data);

        send(JSON.stringify(send_data));
      }
      return this.deleteDatabase.apply(this, file);
    }
  }
});

/* ____Syscall/libc.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

var fd = '';
var fchmod_fd = '';
var fchmod_mode = '';
var chmod_pathname = '';
var chmod_mode = '';

var chown_pathname = '';
var chown_owner = '';
var chown_group = '';


var hexify = function (hexdump_output) {
  var hexified = " ";
  var raw_array = hexdump_output.split("\n");
  for (var a = 0; a < raw_array.length; a++) {
    var line_array = raw_array[a].split(" ");
    for (var b = 1; b < line_array.length - 1; b++) {
      if(line_array[b].length === 2){
        hexified += line_array[b];
        hexified = hexified.trim()
      }
    }
  };
  return hexified;
};

// Man Page: http://man7.org/linux/man-pages/man2/chmod.2.html

Interceptor.attach(Module.findExportByName('libc.so', 'chmod'), {
  onEnter: function(args) {
    chmod_pathname = Memory.readUtf8String(args[0]);
    chmod_mode = args[1].toInt32();
  },
  
  onLeave: function(retval) {
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'syscall';
    send_data.lib = 'libc.so';
    send_data.method = 'chmod';
    send_data.artifact = [];
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Pathname";
    data.value = chmod_pathname;
    data.argSeq = 1;
    send_data.artifact.push(data);
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Mode";
    data.value = chmod_mode;
    data.argSeq = 2;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Status";
    var ret = retval.toInt32() === 0 ? "Success" : retval.toInt32() === -1 ? "Error" : "Unknown (" + retval.toInt32() + ")";
    data.value = ret;
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
  }
});

// Man Page: http://man7.org/linux/man-pages/man2/fchmod.2.html

Interceptor.attach(Module.findExportByName('libc.so', 'fchmod'), {
  onEnter: function(args) {
    fd = args[0].toInt32();
    mode = args[1].toInt32();
  },
  
  onLeave: function(retval) {
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'syscall';
    send_data.lib = 'libc.so';
    send_data.method = 'fchmod';
    send_data.artifact = [];
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "File Descriptor";
    data.value = fchmod_fd;
    data.argSeq = 1;
    send_data.artifact.push(data);
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Mode";
    data.value = fchmod_mode;
    data.argSeq = 2;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Status";
    var ret = retval.toInt32() === 0 ? "Success" : retval.toInt32() === -1 ? "Error" : "Unknown (" + retval.toInt32() + ")";
    data.value = ret;
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
  }
});

// Man page: http://man7.org/linux/man-pages/man2/chown.2.html

Interceptor.attach(Module.findExportByName('libc.so', 'chown'), {
  onEnter: function(args) {
    chown_pathname = Memory.readUtf8String(args[0]);
    chown_owner = args[1].toInt32();
    chown_group = args[2].toInt32();
  },
  
  onLeave: function(retval) {
    /*   --- Payload Header --- */
    var send_data = {};
    send_data.time = new Date();
    send_data.txnType = 'syscall';
    send_data.lib = 'libc.so';
    send_data.method = 'chown';
    send_data.artifact = [];
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Pathname";
    data.value = chown_pathname;
    data.argSeq = 1;
    send_data.artifact.push(data);
    
    /*   --- Payload Body --- */
    var data = {};
    data.name = "Owner";
    data.value = chown_owner;
    data.argSeq = 2;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Group";
    data.value = chown_group;
    data.argSeq = 2;
    send_data.artifact.push(data);

    /*   --- Payload Body --- */
    var data = {};
    data.name = "Status";
    var ret = retval.toInt32() === 0 ? "Success" : retval.toInt32() === -1 ? "Error" : "Unknown (" + retval.toInt32() + ")";
    data.value = ret;
    data.argSeq = 0;
    send_data.artifact.push(data);

    send(JSON.stringify(send_data));
  }
});


/* ____WebView/WebView.js____ */

/**
 * Copyright (c) 2016 Nishant Das Patnaik.
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

Java.perform(function() {
  var WebView = Java.use("android.webkit.WebView");
  var WebSettings = Java.use("android.webkit.WebSettings");

  /*
  function checkSettings(wv) {
    if (WebView.getSettings) {
      if (WebView.$new().getSettings().getJavaScriptEnabled()) {
        //console.log("WebView getJavaScriptEnabled: True");
      } else {
        //console.log("WebView getJavaScriptEnabled: False");
      }

      if (WebView.$new().getSettings().getPluginState() === WebSettings.$new().PluginState.OFF) {
        //console.log("WebView getPluginState: OFF");
      } else {
        //console.log("WebView getPluginState: ON");
      }

      if (WebView.$new().getSettings().getAllowFileAccess()) {
        //console.log("WebView getAllowFileAccess: True");
      } else {
        //console.log("WebView getAllowFileAccess: False");
      }
    }
  }
*/
  if (WebView.loadUrl) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadUrl(java.lang.String)
    WebView.loadUrl.overloads[0].implementation = function(url) {
      //checkSettings(this);
      //console.log("WebView Navigation: " + url.toString());
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'loadUrl';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "URL";
      data.value = url.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));

      return this.loadUrl.overloads[0].apply(this, arguments);
    };

    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadUrl(java.lang.String, java.util.Map<java.lang.String, java.lang.String>)
    WebView.loadUrl.overloads[1].implementation = function(url, additionalHttpHeaders) {
      //checkSettings(this);
      //console.log("WebView Navigation: " + url.toString());
      //console.log("WebView Headers: " + additionalHttpHeaders);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'loadUrl';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "URL";
      data.value = url.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Additional Headers";
      data.value = additionalHttpHeaders.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));
      return this.loadUrl.overloads[1].apply(this, arguments);
    }
  }

  if (WebView.loadData) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadData(java.lang.String, java.lang.String, java.lang.String)
    WebView.loadData.implementation = function(data, mimeType, encoding) {
      //checkSettings(this);
      //console.log("WebView loadData data: " + data);
      //console.log("WebView loadData mimeType: " + mimeType);
      //console.log("WebView loadData encoding: " + encoding);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'loadData';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Data";
      data.value = data.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "MIME Type";
      data.value = mimeType.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Encoding";
      data.value = encoding.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));

      return this.loadData.apply(this, arguments);
    }
  }

  if (WebView.loadDataWithBaseURL) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#loadDataWithBaseURL(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    WebView.loadDataWithBaseURL.implementation = function(baseUrl, data, mimeType, encoding, historyUrl) {
      //checkSettings(this);
      //console.log("WebView loadDataWithBaseURL baseUrl: " + baseUrl);
      //console.log("WebView loadDataWithBaseURL data: " + data);
      //console.log("WebView loadDataWithBaseURL mimeType: " + mimeType);
      //console.log("WebView loadDataWithBaseURL encoding: " + encoding);
      //console.log("WebView loadDataWithBaseURL historyUrl: " + historyUrl);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'loadDataWithBaseURL';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Base URL";
      data.value = data.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Data";
      data.value = data.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "MIME Type";
      data.value = mimeType.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Encoding";
      data.value = encoding.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "History URL";
      data.value = historyUrl.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.loadDataWithBaseURL.apply(this, arguments);
    }
  }

  if (WebView.addJavascriptInterface) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#addJavascriptInterface(java.lang.Object, java.lang.String)
    WebView.addJavascriptInterface.implementation = function(object, name) {
      //console.log("addJavascriptInterface Object: " + object.toString());
      //console.log("addJavascriptInterface Name: " + name);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'addJavascriptInterface';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Object";
      data.value = object.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Name";
      data.value = name.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);
      send(JSON.stringify(send_data));

      return this.addJavascriptInterface.apply(this, arguments);
    }
  }

  if (WebView.evaluateJavascript) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#evaluateJavascript(java.lang.String, android.webkit.ValueCallback<java.lang.String>)
    WebView.evaluateJavascript.implementation = function(script, resultCallback) {
      //console.log("WebView evaluateJavascript Script: " + script);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'evaluateJavascript';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Script";
      data.value = script.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.evaluateJavascript.apply(this, arguments);
    }
  }

  if (WebView.postUrl) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#postUrl(java.lang.String, byte[])
    WebView.postUrl.implementation = function(url, postData) {
      //checkSettings(this);
      //console.log("WebView postUrl URL: " + url);
      //console.log("WebView postUrl postData: " + postData);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'postUrl';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "URL";
      data.value = url.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "POST Data";
      data.value = postData.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.postUrl.apply(this, arguments);
    }
  }

  if (WebView.postWebMessage) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#postWebMessage(android.webkit.WebMessage, android.net.Uri)
    WebView.postWebMessage.implementation = function(message, targetOrigin) {
      //console.log("WebView postWebMessage message: " + message.getData());
      //console.log("WebView postWebMessage targetOrigin: " + targetOrigin.toString());

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'postWebMessage';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Message";
      data.value = message.getData().toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Target Origin";
      data.value = targetOrigin.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.postWebMessage.apply(this, arguments);
    }
  }

  if (WebView.savePassword) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#savePassword(java.lang.String, java.lang.String, java.lang.String)
    WebView.savePassword.implementation = function(host, username, password) {
      //console.log("WebView savePassword Host: " + host);
      //console.log("WebView savePassword Username: " + username);
      //console.log("WebView savePassword Password: " + password);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'savePassword';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Host";
      data.value = host.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Username";
      data.value = username.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = password.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.savePassword.apply(this, arguments);
    }
  }

  if (WebView.setHttpAuthUsernamePassword) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#setHttpAuthUsernamePassword(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    WebView.setHttpAuthUsernamePassword.implementation = function(host, realm, username, password) {
      //console.log("WebView setHttpAuthUsernamePassword Host: " + host);
      //console.log("WebView setHttpAuthUsernamePassword Realm: " + realm);
      //console.log("WebView setHttpAuthUsernamePassword Username: " + username);
      //console.log("WebView setHttpAuthUsernamePassword Password: " + password);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'setHttpAuthUsernamePassword';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Host";
      data.value = host.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Realm";
      data.value = realm.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Username";
      data.value = username.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Password";
      data.value = password.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return this.setHttpAuthUsernamePassword.apply(this, arguments);
    }
  }

  if (WebView.getHttpAuthUsernamePassword) {
    //Ref: https://developer.android.com/reference/android/webkit/WebView.html#getHttpAuthUsernamePassword(java.lang.String, java.lang.String)
    WebView.getHttpAuthUsernamePassword.implementation = function(host, realm) {
      var credentials = this.getHttpAuthUsernamePassword.apply(this, arguments);
      //console.log("WebView getHttpAuthUsernamePassword Host: " + host);
      //console.log("WebView getHttpAuthUsernamePassword Host: " + realm);
      //console.log("WebView getHttpAuthUsernamePassword Credentials: " + credentials);

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'WebView';
      send_data.lib = 'android.webkit.WebView';
      send_data.method = 'savePassword';
      send_data.artifact = [];

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Host";
      data.value = host.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Realm";
      data.value = realm.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      /*   --- Payload Body --- */
      var data = {};
      data.name = "Credentials";
      data.value = credentials.toString();
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));
      return credentials;
    }
  }
});

