(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{mBAS:function(e,t,a){e.exports={canvasFrame:"canvasFrame___2Cnhn"}},yDfP:function(e,t,a){"use strict";a.r(t);var n=a("qIgq"),o=a.n(n),r=a("q1tI"),s=a.n(r),i=a("sPgi"),c=a.n(i),l=a("OREr"),m=a.n(l),u=a("MZFn"),d=a.n(u),p=a("mBAS"),f=a.n(p),h=a("zbOI"),M=function(){var e,t=Object(r["useRef"])(),a=Object(r["useState"])(),n=o()(a,2),i=n[0],l=n[1],u=Object(r["useState"])(),p=o()(u,2),M=p[0],x=p[1],v=Object(r["useState"])(100),w=o()(v,2),y=w[0],b=(w[1],Object(r["useState"])(100)),C=o()(b,2),g=C[0];C[1];Object(r["useEffect"])((function(){t.current&&(l(t.current.clientWidth),x(t.current.clientHeight))}),[]),Object(r["useEffect"])((function(){var a,n,o,r=new d.a;document.body.appendChild(r.dom);var s=function(){e=new c.a.WebGLRenderer({antialias:!0}),r.showPanel(0),r.domElement.style.position="absolute",r.domElement.style.left="0px",r.domElement.style.top="0px",e.setSize(i,M),t.current.appendChild(e.domElement),e.setClearColor(16777215,1)},l=function(){a=new c.a.PerspectiveCamera(45,i&&M?i/M:0,1,1e4),a.position.x=0,a.position.y=600,a.position.z=-1e3,a.up.x=0,a.up.y=0,a.up.z=1,a.lookAt({x:0,y:0,z:1e3})},u=function(){n=new c.a.Scene};function p(){o=new c.a.DirectionalLight(16711680,1,0),o.position.set(0,300,0),n.add(o)}var f=function(){var t=new c.a.CubeGeometry(1,1,1);t.applyMatrix((new c.a.Matrix4).makeTranslation(0,.5,0)),t.faces.splice(3,1),t.faceVertexUvs[0].splice(3,1),t.faceVertexUvs[0][2][0].set(0,0),t.faceVertexUvs[0][2][1].set(0,0),t.faceVertexUvs[0][2][2].set(0,0);for(var a=new c.a.Mesh(t),o=new c.a.Color(16777215),r=new c.a.Color(3158096),s=new c.a.Geometry,i=0;i<200;i++){a.position.x=10*Math.floor(200*Math.random()-100),a.position.z=10*Math.floor(200*Math.random()-100),a.rotation.y=Math.random()*Math.PI*2,a.scale.x=Math.random()*Math.random()*Math.random()*Math.random()*50+10,a.scale.y=Math.random()*Math.random()*Math.random()*a.scale.x*8+8,a.scale.z=a.scale.x;for(var l=1-Math.random()*Math.random(),m=(new c.a.Color).setRGB(l+.1*Math.random(),l,l+.1*Math.random()),u=m.clone().multiply(o),d=m.clone().multiply(r),p=(t=a.geometry,0),f=t.faces.length;p<f;p++)t.faces[p].vertexColors=2===p?[m,m,m,m]:[u,d,d,u];c.a.GeometryUtils.merge(s,a)}var M=new c.a.Texture(c.a.ImageUtils.loadTexture(h));M.anisotropy=e.getMaxAnisotropy(),M.needsUpdate=!0;var x=new c.a.MeshLambertMaterial({map:M,vertexColors:c.a.VertexColors}),v=new c.a.Mesh(s,x);n.add(v)};function x(){}var v=function t(){e.clear(),e.render(n,a),requestAnimationFrame(t)},w=function t(){e.render(n,a),r.update(),requestAnimationFrame(t),m.a.update()};s(),l(),u(),p(),f(),v(),x(),w()}),[M,e,i,y,g]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:f.a.canvasFrame,ref:function(e){t.current=e}}))};t["default"]=M},zbOI:function(e,t,a){e.exports=a.p+"static/yay.05eb60c6.jpg"}}]);