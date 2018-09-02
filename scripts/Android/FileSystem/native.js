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
