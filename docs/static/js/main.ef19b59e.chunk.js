(this["webpackJsonpyoutube-tutorial-maker"]=this["webpackJsonpyoutube-tutorial-maker"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/play.a9759291.svg"},function(e,t,n){e.exports=n.p+"static/media/stop.664d473c.svg"},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/pause.2e6b892b.svg"},,function(e,t,n){"use strict";n.r(t);var r,a,o,i=n(0),c=n.n(i),s=n(5),l=n.n(s),u=(n(14),n(1)),d=n.n(u),p=n(2),f=n(3),m=(n(16),n(6)),h=n.n(m),g=n(7),v=n.n(g),y=(n(17),n(8)),b=n.n(y),w=document.querySelector("video"),k={};var E=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],s=t[1],l=Object(i.useState)(!1),u=Object(f.a)(l,2),m=u[0],g=u[1];function y(e,t){e.addEventListener("ended",(function(){t(),t=function(){}}),!1),e.addEventListener("inactive",(function(){t(),t=function(){}}),!1),e.getTracks().forEach((function(e){e.addEventListener("ended",(function(){t(),t=function(){}}),!1),e.addEventListener("inactive",(function(){t(),t=function(){}}),!1)}))}function E(e){navigator.mediaDevices.getUserMedia({video:{width:160,height:120,frameRate:15},audio:!0}).then(function(){var t=Object(p.a)(d.a.mark((function t(n){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fullcanvas=!0,e.width=1920,e.height=1080,n.width=parseInt(.15*e.width),n.height=parseInt(.15*e.width),n.top=e.height-n.height,n.left=e.width-n.width,(r=new b.a([e,n])).frameInterval=1,r.startDrawingFrames(),(w=document.querySelector("video")).srcObject=r.getMixedStream(),o=[],i={mimeType:"video/mp4;codecs=vp9,opus"},MediaRecorder.isTypeSupported(i.mimeType)||(console.error("".concat(i.mimeType," is not supported")),i={mimeType:"video/webm;codecs=vp8,opus"},MediaRecorder.isTypeSupported(i.mimeType)||(console.error("".concat(i.mimeType," is not supported")),i={mimeType:"video/webm"},MediaRecorder.isTypeSupported(i.mimeType)||(console.error("".concat(i.mimeType," is not supported")),i={mimeType:""}))),t.prev=15,a=new MediaRecorder(r.getMixedStream(),i),t.next=23;break;case 19:return t.prev=19,t.t0=t.catch(15),console.error("Exception while creating MediaRecorder:",t.t0),t.abrupt("return");case 23:console.log("Created MediaRecorder",a,"with options",i),a.onstop=function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("Recorder stopped: ",a),console.log("Recorded Blobs: ",o),r.releaseStreams(),w.pause(),w.src=null,w!==document.pictureInPictureElement){t.next=8;break}return t.next=8,document.exitPictureInPicture();case 8:n.getTracks().forEach((function(e){e.stop()})),e.getTracks().forEach((function(e){e.stop()})),R();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.ondataavailable=M,a.start(),console.log("MediaRecorder started",a),g(!0),y(e,Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("inactive"===a.state){t.next=10;break}if(a.stop(),r.releaseStreams(),w.pause(),w.src=null,w!==document.pictureInPictureElement){t.next=8;break}return t.next=8,document.exitPictureInPicture();case 8:n.getTracks().forEach((function(e){e.stop()})),e.getTracks().forEach((function(e){e.stop()}));case 10:case"end":return t.stop()}}),t)}))));case 30:case"end":return t.stop()}}),t,null,[[15,19]])})));return function(e){return t.apply(this,arguments)}}())}function x(){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Error: "+e.t0);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function T(){n&&(navigator.getDisplayMedia?navigator.getDisplayMedia({video:!0}).then((function(e){E(e)})):navigator.mediaDevices.getDisplayMedia?navigator.mediaDevices.getDisplayMedia({video:!0}).then((function(e){E(e)})):alert("getDisplayMedia API is not supported by this browser."))}function M(e){console.log("handleDataAvailable",e),e.data&&e.data.size>0&&o.push(e.data)}function R(){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Blob(o,{type:"video/mp4"}),n=window.URL.createObjectURL(t),(r=document.createElement("a")).style.display="none",r.href=n,r.download=(new Date).getTime()+".mp4",document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)}),100),g(!1),w.pause(),w.src=null;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.value="camera-screen",e.next=3,x();case 3:t=e.sent,s(null!==t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),c.a.createElement("div",{className:"App"},c.a.createElement("h2",null,"Youtube Tutorial Maker - By Arghyadeep"),c.a.createElement("p",{className:"info"},"Not supported in small devices. Please open in desktop browser"),c.a.createElement("p",{style:{textAlign:"center"}},"Supported Browser:"," ",c.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",target:"_blank",rel:"noopener noreferrer"},"Screen Capture"),","," ",c.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices",target:"_blank",rel:"noopener noreferrer"},"Camera & Audio")),c.a.createElement("div",{className:"layout"},!n&&c.a.createElement("div",null,c.a.createElement("video",{src:"",style:{backgroundColor:"#444",height:200}}),c.a.createElement("p",null,c.a.createElement("span",{style:{fontWeight:600}},"Note: "),"You need to allow camera & audio permission to start recording")),n&&c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%"}},c.a.createElement("video",{id:"video",style:{height:"70%",backgroundColor:"#444"},autoPlay:!0,muted:!0,playsInline:!0},"Your browser does not support the video tag."),c.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",marginTop:24}},!m&&c.a.createElement("button",{style:{border:"1px solid #111",borderRadius:4,cursor:"pointer",margin:"auto",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",padding:8,width:100,backgroundColor:"#fff"},onClick:function(){return T()}},c.a.createElement("img",{src:h.a,alt:"play",style:{height:36,marginRight:8}})," ","Start"),m&&c.a.createElement("button",{style:{border:"1px solid #111",borderRadius:4,cursor:"pointer",margin:"auto",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",padding:8,width:180,backgroundColor:"#fff"},onClick:function(){a.stop()}},c.a.createElement("img",{src:v.a,alt:"stop",style:{height:36,marginRight:8}})," ","Stop & Save")))),c.a.createElement("p",{style:{textAlign:"center",marginTop:24}},"Devloped by"," ",c.a.createElement("a",{href:"https://github.com/argodeep?tab=repositories",target:"_blank",rel:"noopener noreferrer"},"Arghyadeep")))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.ef19b59e.chunk.js.map