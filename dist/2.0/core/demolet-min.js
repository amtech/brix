KISSY.add("brix/core/demolet",function(a,b,c,d){function g(a){if(f[a])return!1;f[a]=!0,c({url:a,dataType:"text",async:!1,complete:function(a,b,c){b=="success"&&e("<style>"+a+"</style>").appendTo("head")}})}function h(b,d,e){e=e||"@",d=d||{};var f=new RegExp("\\{\\{"+e+"(.+)?\\}\\}","ig");return b=b.replace(f,function(b,e){a.log(e);var f="",g=e.replace(/\//ig,"_").replace(/\./ig,"_");return d[g]=d[g]||{},c({url:e+"template.html",dataType:"html",async:!1,success:function(a,b,c){f="{{#"+g+"}}"+a+"{{/"+g+"}}"}}),c({url:e+"data.json",async:!1,dataType:"json",success:function(a,b,c){for(var e in a)d[g][e]=a[e]}}),f}),{tmpl:b,data:d}}var e=d.all,f={},i=b.extend({initializer:function(){var b=this;b.on("beforeAddBehavior",function(c){a.each(b.get("projectCSS"),function(a){g(a)});var d=c.useList;a.each(d,function(b){if(a.startsWith(b,"brix/"))a.use(b+"index.css");else{var c=3;a.startsWith(b,"imports/")&&(c=5);var d=b.split("/");d.length>c&&(d.splice(d.length-2),g(d.join("/")+"/index.css")),g(b.substring(0,b.lastIndexOf("/"))+"/index.css")}})})}},{ATTRS:{projectCSS:{value:[],setter:function(b){return a.isArray(b)?b:[b]}},s:{value:"@"},tmpl:{setter:function(a){var b=this,c=b.get("data")||{},d=h(a,c,b.get("s"));return b.set("data",d.data),d.tmpl}}}},"Demolet");return i},{requires:["./pagelet","ajax","node"]});