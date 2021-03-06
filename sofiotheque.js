/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);
// Owl
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("src")||e.attr("src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("src-retina")||f.attr("src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);
/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2.1 (22-APRIL-2011)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */


jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.07
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 1;
				$strip.find("li").each(function(i){
				stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width 	
				$strip.width(stripWidth);			
				var totalTravel = stripWidth+containerWidth;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};

/**
 * jquery.hoverdir.js v1.1.2
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    function Hoverdir(element, options) {
        this.$el = $(element);
        // set options
        this.options = $.extend(true, {}, this.defaults, options);
        // initialize visibility to false for show and hide method
        this.isVisible = false;
        // get the hover for this element
        this.$hoverElem = this.$el.find(this.options.hoverElem);
        // transition properties
        this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
        // support for CSS transitions
        this.support = this._supportsTransitions();
        // load the events
        this._loadEvents();
    }

    Hoverdir.prototype = {
        defaults: {
            speed: 300,
            easing: 'ease',
            hoverDelay: 0,
            inverse: false,
            hoverElem: 'div'
        },
        constructor: Hoverdir,
        /**
         * Detect if CSS transitions are supported
         *
         * @return {Boolean}
         */
        _supportsTransitions: function () {
            if (typeof Modernizr !== 'undefined') {
                return Modernizr.csstransitions;
            } else {
                var b = document.body || document.documentElement,
                    s = b.style,
                    p = 'transition';

                if (typeof s[p] === 'string') {
                    return true;
                }

                // Tests for vendor specific prop
                var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
                p = p.charAt(0).toUpperCase() + p.substr(1);

                for (var i = 0; i < v.length; i++) {
                    if (typeof s[v[i] + p] === 'string') {
                        return true;
                    }
                }

                return false;
            }
        },
        /**
         * Bind the events to the element
         */
        _loadEvents: function () {
            this.$el.on('mouseenter.hoverdir mouseleave.hoverdir', $.proxy(function (event) {
                this.direction = this._getDir({x: event.pageX, y: event.pageY});

                if (event.type === 'mouseenter') {
                    this._showHover();
                }
                else {
                    this._hideHover();
                }
            }, this));
        },
        /**
         * Show the hover of the element
         */
        _showHover: function () {
            var styleCSS = this._getStyle(this.direction);

            if (this.support) {
                this.$hoverElem.css('transition', '');
            }

            this.$hoverElem.hide().css(styleCSS.from);
            clearTimeout(this.tmhover);

            this.tmhover = setTimeout($.proxy(function () {
                this.$hoverElem.show(0, $.proxy(function () {
                    if (this.support) {
                        this.$hoverElem.css('transition', this.transitionProp);
                    }
                    this._applyAnimation(styleCSS.to);

                }, this));
            }, this), this.options.hoverDelay);

            this.isVisible = true;
        },
        /**
         * Hide the hover to the element
         */
        _hideHover: function () {
            var styleCSS = this._getStyle(this.direction);
            if (this.support) {
                this.$hoverElem.css('transition', this.transitionProp);
            }
            clearTimeout(this.tmhover);
            this._applyAnimation(styleCSS.from);
            this.isVisible = false;
        },
        /**
         * get the direction when the event is triggered
         * credits : http://stackoverflow.com/a/3647634
         *
         * @param {Object} coordinates
         * @returns {Interger}
         */
        _getDir: function (coordinates) {
            // the width and height of the current div
            var w = this.$el.width(),
                h = this.$el.outerHeight(),
                // calculate the x and y to get an angle to the center of the div from that x and y.
                // gets the x value relative to the center of the DIV and "normalize" it
                x = (coordinates.x - this.$el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - this.$el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
                // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
                // first calculate the angle of the point,
                // add 180 deg to get rid of the negative values
                // divide by 90 to get the quadrant
                // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            return direction;
        },
        /**
         * get the style when the event is triggered
         *
         * @param {(Interger|String)} direction
         * @returns {Object}
         */
        _getStyle: function (direction) {
            var fromStyle, toStyle,
                slideFromTop = {'left': '0', 'top': '-100%'},
            slideFromBottom = {'left': '0', 'top': '100%'},
            slideFromLeft = {'left': '-100%', 'top': '0'},
            slideFromRight = {'left': '100%', 'top': '0'},
            slideTop = {'top': '0'},
            slideLeft = {'left': '0'};

            switch (direction) {
                case 0:
                case 'top':
                    // from top
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                case 'right':
                    // from right
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                case 'bottom':
                    // from bottom
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                case 'left':
                    // from left
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break;
            }

            return {from: fromStyle, to: toStyle};
        },
        /**
         * Apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
         *
         * @param {Object} styleCSS
         */
        _applyAnimation: function (styleCSS) {
            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            this.$hoverElem.stop().applyStyle(styleCSS, $.extend(true, [], {duration: this.options.speed}));
        },
        /**
         * Show $hoverElem from the direction in argument
         *
         * @param {String} [direction=top] direction
         */
        show: function (direction) {
            this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
            if (!this.isVisible) {
                this.direction = direction || 'top';
                this._showHover();
            }
        },
        /**
         * Hide $hoverElem from the direction in argument
         *
         * @param {String} [direction=bottom] direction
         */
        hide: function (direction) {
            this.rebuild();
            if (this.isVisible) {
                this.direction = direction || 'bottom';
                this._hideHover();
            }
        },
        setOptions: function (options) {
            this.options = $.extend(true, {}, this.defaults, this.options, options);
        },
        /**
         * Unbinds the plugin.
         */
        destroy: function () {
            this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
            this.$el.data('hoverdir', null);
        },
        /**
         * Bind the plugin.
         */
        rebuild: function (options) {
            if (typeof options === 'object') {
                this.setOptions(options);
            }
            this._loadEvents();
        }
    };

    $.fn.hoverdir = function (option, parameter) {
        return this.each(function () {
            var data = $(this).data('hoverdir');
            var options = typeof option === 'object' && option;

            // Initialize hoverdir.
            if (!data) {
                data = new Hoverdir(this, options);
                $(this).data('hoverdir', data);
            }

            // Call hoverdir method.
            if (typeof option === 'string') {
                data[option](parameter);

                if (option === 'destroy') {
                    $(this).data('hoverdir', false);
                }
            }
        });
    };

    $.fn.hoverdir.Constructor = Hoverdir;
});
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
*/

!function(a){a.jCarouselLite={version:"1.1"},a.fn.jCarouselLite=function(b){return b=a.extend({},a.fn.jCarouselLite.options,b||{}),this.each(function(){function c(a){return n||(clearTimeout(A),z=a,b.beforeStart&&b.beforeStart.call(this,i()),b.circular?j(a):k(a),m({start:function(){n=!0},done:function(){b.afterEnd&&b.afterEnd.call(this,i()),b.auto&&h(),n=!1}}),b.circular||l()),!1}function d(){if(n=!1,o=b.vertical?"top":"left",p=b.vertical?"height":"width",q=B.find(">ul"),r=q.find(">li"),x=r.size(),w=x<b.visible?x:b.visible,b.circular){var c=r.slice(x-w).clone(),d=r.slice(0,w).clone();q.prepend(c).append(d),b.start+=w}s=a("li",q),y=s.size(),z=b.start}function e(){B.css("visibility","visible"),s.css({overflow:"hidden","float":b.vertical?"none":"left"}),q.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"}),B.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"}),!b.circular&&b.btnPrev&&0==b.start&&a(b.btnPrev).addClass("disabled")}function f(){t=b.vertical?s.outerHeight(!0):s.outerWidth(!0),u=t*y,v=t*w,s.css({width:s.width(),height:s.height()}),q.css(p,u+"px").css(o,-(z*t)),B.css(p,v+"px")}function g(){b.btnPrev&&a(b.btnPrev).click(function(){return c(z-b.scroll)}),b.btnNext&&a(b.btnNext).click(function(){return c(z+b.scroll)}),b.btnGo&&a.each(b.btnGo,function(d,e){a(e).click(function(){return c(b.circular?w+d:d)})}),b.mouseWheel&&B.mousewheel&&B.mousewheel(function(a,d){return c(d>0?z-b.scroll:z+b.scroll)}),b.auto&&h()}function h(){A=setTimeout(function(){c(z+b.scroll)},b.auto)}function i(){return s.slice(z).slice(0,w)}function j(a){var c;a<=b.start-w-1?(c=a+x+b.scroll,q.css(o,-(c*t)+"px"),z=c-b.scroll):a>=y-w+1&&(c=a-x-b.scroll,q.css(o,-(c*t)+"px"),z=c+b.scroll)}function k(a){0>a?z=0:a>y-w&&(z=y-w)}function l(){a(b.btnPrev+","+b.btnNext).removeClass("disabled"),a(z-b.scroll<0&&b.btnPrev||z+b.scroll>y-w&&b.btnNext||[]).addClass("disabled")}function m(c){n=!0,q.animate("left"==o?{left:-(z*t)}:{top:-(z*t)},a.extend({duration:b.speed,easing:b.easing},c))}var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a(this);d(),e(),f(),g()})},a.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null}}(jQuery);
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

// All the default settings

// Default Image Link
var Default_Image_For_Recent_Posts='https://lh3.googleusercontent.com/9dyQN9-2NFEk6E1-1xBgN5vOzI6Wrfh2hhoclRii23LKykT85WFVbpk6Bh86WTjuMdXZt7B9puhCh39deAdxyEK6bvRmQSTBS_E5DDxgQpALPfWOnGJpEsPbI8LHfoKKNls2zHIdqod05DIzSZdLP4IpZi2H7MCot3Fn09UMNxd4SL2wA2bA_j-ssrLzUVRBYMxwR7phEBCHmpxqQ6zHrlKR_M3JfamwHP44YqZueWmV8El9x7QUvAV-eAiumw3VRl-1gLhdfaUutlI6zGe5myNc8JDo-LZmEETTzXdv0kF5-AYDGR3ED6jiVnI8AMTBpw9Rm9zzlkawef6XnvxtUhOGp8LYzHe-a2ddO4pidDS2Bztl_HAQEEDy_LHDYNknTRxNkXeAoUYPqmGe9keU0u-fO3Sn_VjMPNyXg3TEEzGeDhsmxlcuLBSR8abonyDSMAnYw2ps05KCqFtiEx9IpFoW7nNzPOaglZAjJ-dtaihIxuxgHQX0CAvmn2lhFS33-Y11teaWsPC3C3Z6GDHmp_9I5xQmfM6punTJxZgvLn4=s500-no';

// Your disqus shortname
var DISQUS_SHORT_NAME="demoblog12";

// Sidebar tab 1 text
var sidebar_Tab_1='<i class="fa fa-rss"></i> Recent';

// Sidebar tab 2 text
var sidebar_Tab_2='<i class="fa fa-bolt"></i> Popular';

// Sidebar tab 3 text
var sidebar_Tab_3='<i class="fa fa-random"></i> Random';

// Sticky Navigation
var sticky_nav=true;

//Sticky Sidebar
var sticky_sidebar=true;

// Pagination
    var perPage=7;
    var numPages=6;
    var firstText ='First';
    var lastText ='Last';
    var prevText ='« Previous';
    var nextText ='Next »';


// --------- SETTINGS END HERE ---------
if (sticky_nav) {
    $(function() {
        return $(".dd-area").stick_in_parent({
            parent: "body"
        })
    })
}
if (sticky_sidebar) {
    $(function() {
        return $(".sidebar-inner").stick_in_parent({
            parent: ".main-and-side"
        })
    })
}
$(function() {
    if ($(".item-post-body .tl-post-page").length > 0) {
        var articleBody = $(".post-body"),
            pages = "";
        articleBody.find(".tl-post-page").each(function(i) {
            pages += "<button data-target='" + i + "'>" + eval(i + 1) + "</button>"
        }), articleBody.append('<div class="tl-post-pagination">' + pages + "</div>"), $(".tl-post-page").hide(0), $(".tl-post-page").first().fadeIn(), $(".tl-post-pagination button").first().addClass("active")
    }
    $(".tl-post-pagination button").click(function() {
        if (!$(this).hasClass("active")) {
            var e = eval($(this).attr("data-target"));
            $(".tl-post-page").hide().removeClass("active"), $(".tl-post-page").eq(e).fadeIn().addClass("active"), $(".tl-post-pagination button").removeClass("active"), $(this).addClass("active"), $("html,body").animate({
                scrollTop: $(".tl-post-page.active").offset().top
            }, "normal")
        }
    }), $(".searchform").submit(function() {
        return $(".search-item").remove(), findit(), !1
    });
    $("#toTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });
    $('.sidebar h2.title,.sidebar .widget>h2,.panel .widget>h2,.rightCol .widget>h2,.footerw>div>h2').html(function() {
        return '<span>' + $(this).html() + '</span>'
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn()
        } else {
            $('#toTop').fadeOut()
        }
    });
    $('.navicon').click(function() {
        setTimeout(function() {
            $('.poverlay').fadeIn(300)
        }, 300);
        setTimeout(function() {
            $('.panel').addClass('active')
        }, 600);
        $('.navicon').addClass('active')
    });
    $('.poverlay,.close-panel').click(function() {
        setTimeout(function() {
            $('.poverlay').fadeOut(300)
        }, 300);
        setTimeout(function() {
            $('.navicon').removeClass('active')
        }, 600);
        $('.panel').removeClass('active')
    });
    $('.stab-buttons>span:eq(0)').html(sidebar_Tab_1);
    $('.stab-buttons>span:eq(1)').html(sidebar_Tab_2);
    $('.stab-buttons>span:eq(2)').html(sidebar_Tab_3);
    var disqus_shortname = DISQUS_SHORT_NAME;
    $.ajax({
        type: "GET",
        url: "http://" + disqus_shortname + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
    })
});

function getFirstC(e) {
    if (e.category === undefined) {
        return false
    } else {
        return e.category[0].term
    }
}
$(function() {
    function a(a) {
        for (var e = 0; e < a.length; e++) var t = "<span class='authorname'><i class='fa fa-user'></i> " + a[e].name.$t + "</span>";
        return t
    }

    function e(a, s) {
        var rr = s == undefined ? 'View More By' : s;
        var e = '<div class="rhead"><span class="name">' + a + '</span><a class="link" href="/search/label/' + a + '" title="View All By ' + a + '"> // ' + rr + ' ' + a + " <i class='fa-arrow-right'></i></a></div>";
        return e
    }

    function getUrl(theU, theSize, extra) {
        if (theU.indexOf('img.youtube.com') != -1) {
            var s = "<div class='youtube-outer'><span class='y-icon'><i class='fa fa-play-circle-o'></i></span><img src='" + theU.replace('default', 'sddefault') + "'" + extra + "/></div>"
        } else {
            var s = "<img src='" + theU.replace('s72-c', theSize) + "'/>"
        }
        return s
    }

    function t(a, e, t, s) {
        $.ajax({
            type: "GET",
            url: a,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                for (var s = a.feed.entry, l = 0; l < s.length; l++) {
                    for (var n, i, r, d, c, o = s[l], v = 0; v < o.link.length; v++)
                        if ("alternate" == o.link[v].rel) {
                            n = o.link[v].href;
                            break
                        }
                    var imgUrl = "";
                    if (o.media$thumbnail) {
                        imgUrl = getUrl(o.media$thumbnail.url, 'w285-h200-c', ' title="' + o.title.$t + '"')
                    } else {
                        imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                    }
                    var d = o.title.$t,
                        c = getFirstC(o);
                    if (c) {
                        var labelC = "<a class='recentLabel currentLabel' href='/search/label/" + c + "'>" + c + "</a>"
                    } else {
                        var labelC = "<a class='recentLabel currentLabel' href='#'>No Label</a>"
                    }
                    var h = "<div class='n-item'><div class='popup-c'><a href='" + n + "'>" + imgUrl + "</a><div class='ss'><a href='http://www.facebook.com/sharer.php?u=" + n + "' target='_blank' class='ss-f'><i class='fa-facebook-f'></i></a> <a href='https://twitter.com/share?url=" + n + "&text=" + d + "' target='_blank' class='ss-t'><i class='fa-twitter'></i></a> <a href='https://plus.google.com/share?url=" + n + "' target='_blank' class='ss-g'><i class='fa-google-plus'></i></a></div><div class='content'>" + labelC + "</div></div><h3><a href='" + n + "'>" + d + "</a></h3></div>";
                    e.find(t).append(h)
                }
                e.find(t).owlCarousel({
                    items: 4,
                    nav: !0,
                    dots: !1,
                    navText: ["&#xf104;", "&#xf105;"]
                })
            }
        })
    }

    function s(a) {
        function e(a) {
            $.ajax({
                type: "GET",
                url: "/feeds/posts/summary/-/" + a + "?max-results=5&alt=json-in-script",
                async: !1,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(a) {
                    var e = a.feed.entry;
                    if (e)
                        for (var s = 0; s < e.length; s++) {
                            var i, r = e[s];
                            if (-1 == t.indexOf(r.id.$t)) {
                                n++;
                                for (var d = 0; d < r.link.length; d++)
                                    if ("alternate" == r.link[d].rel) {
                                        var c = r.link[d].href;
                                        break
                                    }
                                var o = r.title.$t;
                                var imgUrl = "";
                                if (r.media$thumbnail) {
                                    imgUrl = getUrl(r.media$thumbnail.url, 'w270-h180-c', ' title="' + o + '"')
                                } else {
                                    imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                                }
                                var v = r.category[0].term,
                                    h = l(r.published.$t),
                                    f = "<div class='related-item'><div class='related-img'><a href='" + c + "'>" + imgUrl + "</a><a href='/search/label/" + v + "' class='recentLabel'>" + v + "</a></div><div class='related-content'><h3><a href='" + c + "'>" + o + "</a></h3><div class='related-meta'>" + h + "</div></div></div>";
                                $(".related-posts .related-inner").append(f).trigger("refresh.owl.carousel"), t.push(r.id.$t)
                            }
                        }
                }
            })
        }
        for (var t = [], s = 9, n = 0, i = 0; i < a.length && n != s; i++) e(a[i]);
        $(".related-posts .related-inner").owlCarousel({
            items: 3,
            nav: !0,
            margin: 15,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: !1,
            navText: ["&#xf104;", "&#xf105;"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    nav: true,
                }
            }
        })
    }

    function l(a) {
        var e = new Array;
        e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
        var t = a.substring(0, 4),
            s = a.substring(5, 7),
            l = a.substring(8, 10),
            n = "<span class='recentdate'><i class='fa fa-clock-o'></i> " + e[parseInt(s, 10)] + " " + l + " " + t + "</span> ";
        return n
    }

    function n() {
        var a = $(".unloaded").first(),
            e = a.attr("data-style");
        switch (e) {
            case "headline":
                p(a);
                break;
            case "column":
                i(a);
                break;
            case "simple":
                v(a);
                break;
            case "slider":
                u(a);
                break;
            case "gallery":
                h(a);
                break;
            case "carousel":
                o(a);
                break;
            case "cards":
                r(a);
                break;
            case "wide-gallery":
                f(a);
                break;
            case "home-top":
                m(a);
                break;
            case "single":
                d(a);
                break;
            case "vcar":
                c(a);
                break;
            case "wcar":
                o(a)
        }
    }

    function i(t) {
        var s = t.attr("data-label"),
            i = "/feeds/posts/summary/-/" + s + "?max-results=8&alt=json-in-script",
            r = t,
            vM = t.attr('data-viewmore');
        $.ajax({
            type: "GET",
            url: i,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(t) {
                var i = t.feed.entry;
                if (i) {
                    r.append(e(s, vM)), r.append('<div class="toggler"><div class="column columnleft"></div><div class="columnright column"></div></div>');
                    for (var d = 0; d < i.length; d++) {
                        for (var c, o, v, h, f, u = i[d], p = 0; p < u.link.length; p++)
                            if ("alternate" == u.link[p].rel) {
                                var o = u.link[p].href;
                                break
                            }
                        var imgUrl = "";
                        if (u.media$thumbnail) {
                            imgUrl = getUrl(u.media$thumbnail.url, 's80-c', ' title="' + u.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        v = u.title.$t, h = a(u.author), f = l(u.published.$t);
                        var $ = '<div class="columnitem"><a href="' + o + '">' + imgUrl + '</a><div class="content"><h3><a href="' + o + '">' + v + '</a></h3><div class="columnmeta">' + h + " " + f + "</div></div></div>";
                        4 > d ? r.find(".columnleft").append($) : r.find(".columnright").append($)
                    }
                    r.addClass("loaded").removeClass("unloaded").fadeIn()
                }
                n()
            }
        })
    }

    function r(a) {
        var t = a,
            s = t.attr("data-label"),
            i = "/feeds/posts/summary/-/" + s + "?max-results=6&alt=json-in-script",
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: i,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var n = a.feed.entry;
                if (n) {
                    t.append(e(s, vM)), t.append('<div class="toggler"><ul class="cards-outer"></ul></div>');
                    for (var i = 0; i < n.length; i++) {
                        for (var r, d, c, o, v, h, f = n[i], u = 0; u < f.link.length; u++)
                            if ("alternate" == f.link[u].rel) {
                                d = f.link[u].href;
                                break
                            }
                        var imgUrl = "";
                        if (f.media$thumbnail) {
                            imgUrl = getUrl(f.media$thumbnail.url, 'w265-h150-c', " title='" + f.title.$t + "' class='layerimg'")
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        r = f.title.$t, c = f.category[0].term, v = f.summary.$t.substr(0, 120) + "...", h = l(f.published.$t);
                        var p = '<li class="container"><div class="imgwrap"><a href="' + d + '" class="layer"></a>' + imgUrl + '<div class="hcontent layerc"><a class="recentLabel" href="/search/label/' + c + '">' + c + '</a><h3><a href="' + d + '">' + r + '</a></h3></div></div><div class="content"><p>' + v + '</p><div class="card-meta">' + h + "</div></div></li>";
                        t.find(".cards-outer").append(p)
                    }
                    t.addClass("loaded").removeClass("unloaded").fadeIn()
                }
            }
        })).done(function() {
            n()
        })
    }

    function d(t) {
        var s = t,
            i = s.attr("data-label"),
            r = "/feeds/posts/summary/-/" + i + "?max-results=1&alt=json-in-script",
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: r,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(t) {
                var n = t.feed.entry;
                if (n) {
                    s.append(e(i, vM)), s.append('<div class="single-outer"></div>');
                    for (var r = 0; r < n.length; r++) {
                        for (var d, c, o, v, h, f, u, p = n[r], m = 0; m < p.link.length; m++)
                            if ("alternate" == p.link[m].rel) {
                                c = p.link[m].href;
                                break
                            }
                        var imgUrl = "";
                        if (p.media$thumbnail) {
                            imgUrl = getUrl(p.media$thumbnail.url, 'w383-h250-c', ' title="' + p.title.$t + '" class="layerimg"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        d = p.title.$t, o = p.category[0].term, h = p.summary.$t.substr(0, 120) + "...", u = l(p.published.$t), f = a(p.author);
                        var $ = '<div class="container"><div class="single-author">' + f + '</div><div class="imgwrap"><a href="' + c + '" class="layer"></a>' + imgUrl + '<div class="hcontent layerc"><a class="recentLabel" href="/search/label/' + o + '">' + o + '</a><h3><a href="' + c + '">' + d + '</a></h3></div></div><div class="content"><p>' + h + '</p><div class="card-meta">' + u + "</div></div></div>";
                        s.find(".single-outer").append($)
                    }
                    s.addClass("loaded").removeClass("unloaded").fadeIn()
                }
            }
        })).done(function() {
            n()
        })
    }

    function c(a) {
        var t = a,
            s = a.attr("data-label"),
            l = "/feeds/posts/summary/-/" + s + "?max-results=8&alt=json-in-script",
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: l,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var l = a.feed.entry;
                if (l) {
                    t.append(e(s, vM)), t.append('<div class="jc-container"><ul class="car-inner"></ul></div>');
                    for (var n = 0; n < l.length; n++) {
                        for (var i, r, d, c, o = l[n], v = 0; v < o.link.length; v++)
                            if ("alternate" == o.link[v].rel) {
                                r = o.link[v].href;
                                break
                            }
                        var imgUrl = "";
                        if (o.media$thumbnail) {
                            imgUrl = getUrl(o.media$thumbnail.url, 'w400-h330-c', ' title="' + o.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        i = o.title.$t, d = o.category[0].term;
                        var h = '<li class="container"><div class="imgwrap"><a href="' + r + '">' + imgUrl + '</a></div><div class="wrap"><a class="recentLabel" href="/search/label/' + d + '" target="_blank">' + d + '</a><h3><a href="' + r + '">' + i + "</a></h3></div></li>";
                        t.find(".car-inner").append(h)
                    }
                    t.addClass("loaded").removeClass("unloaded").fadeIn(), t.find(".jc-container").jCarouselLite({
                        vertical: !0,
                        auto: 800,
                        speed: 1e3
                    })
                }
            }
        })).done(function() {
            n()
        })
    }

    function o(a) {
        var t = a,
            s = a.attr("data-label"),
            l = "/feeds/posts/summary/-/" + s + "?max-results=8&alt=json-in-script",
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: l,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var l = a.feed.entry;
                if (l) {
                    t.append(e(s, vM)), t.append('<div class="toggler"><ul class="car-inner"></ul></div>');
                    for (var n = 0; n < l.length; n++) {
                        for (var i, r, d, c, o = l[n], v = 0; v < o.link.length; v++)
                            if ("alternate" == o.link[v].rel) {
                                r = o.link[v].href;
                                break
                            }
                        var imgUrl = "";
                        if (o.media$thumbnail) {
                            imgUrl = getUrl(o.media$thumbnail.url, 'w322-h330-c', ' title="' + o.title$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        i = o.title.$t, d = o.category[0].term;
                        var h = '<li class="container"><div class="imgwrap"><a href="' + r + '">' + imgUrl + '</a></div><div class="wrap"><a class="recentLabel" href="/search/label/' + d + '" target="_blank">' + d + '</a><h3><a href="' + r + '">' + i + "</a></h3></div></li>";
                        t.find(".car-inner").append(h)
                    }
                    t.addClass("loaded").removeClass("unloaded").fadeIn(), "carousel" == t.attr("data-style") ? t.find(".car-inner").owlCarousel({
                        items: 2,
                        nav: !0,
                        dots: !1,
                        navText: ["&#xf104;", "&#xf105;"]
                    }) : "wcar" == t.attr("data-style") && t.find(".car-inner").owlCarousel({
                        items: 4,
                        nav: !0,
                        dots: !1,
                        margin: 20,
                        navText: ["&#xf104;", "&#xf105;"],
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 1,
                                nav: true
                            },
                            600: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                                nav: true,
                            }
                        }
                    })
                }
            }
        })).done(function() {
            n()
        })
    }

    function v(t) {
        var s = t.attr("data-label"),
            i = "/feeds/posts/summary/-/" + s + "?max-results=5&alt=json-in-script",
            r = t,
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: i,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(t) {
                var n = t.feed.entry;
                if (n) {
                    r.append(e(s, vM)), r.append('<div class="toggler"><div class="simple-inner"></div></div>');
                    for (var i = 0; i < n.length; i++) {
                        for (var d, c = n[i], o = 0; o < c.link.length; o++)
                            if ("alternate" == c.link[o].rel) {
                                var v = c.link[o].href;
                                break
                            }
                        var imgUrl = "";
                        if (c.media$thumbnail) {
                            imgUrl = getUrl(c.media$thumbnail.url, 'w411-h230-c', ' title="' + c.title.$t + '" class="layerimg"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        var h = c.title.$t,
                            f = l(c.published.$t),
                            u = a(c.author),
                            p = 0 == i ? '<div class="container simplehead"><div class="imgwrap"><div class="layer"></div><a href="' + v + '">' + imgUrl + '</a><div class="layerc"></div><a href="' + v + '" class="simple-layer-link"></a><div class="simple-content-inner"><h3><a href="' + v + '">' + h + '</a></h3><div class="simplemeta">' + f + u + "</div></div></div></div>" : '<div class="simplesub"><div class="recentcontent"><h3><a href="' + v + '">' + h + '</a></h3><div class="simplesubmeta">' + f + " - " + u + "</div></div>";
                        r.find(".simple-inner").append(p)
                    }
                    r.addClass("loaded").removeClass("unloaded").fadeIn()
                }
            }
        })).done(function() {
            n()
        })
    }

    function h(a) {
        var t = a.attr("data-label"),
            s = "/feeds/posts/summary/-/" + t + "?max-results=9&alt=json-in-script",
            l = a,
            vM = a.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: s,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var s = a.feed.entry;
                if (s) {
                    l.append(e(t, vM)), l.append('<div class="toggler"><div class="gallery-inner"></div></div>');
                    for (var n = 0; n < s.length; n++) {
                        for (var i, r = s[n], d = 0; d < r.link.length; d++)
                            if ("alternate" == r.link[d].rel) {
                                var c = r.link[d].href;
                                break
                            }
                        var imgUrl = "";
                        if (r.media$thumbnail) {
                            imgUrl = getUrl(r.media$thumbnail.url, 'w276-h207-c', ' title="' + r.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        var o = r.title.$t,
                            v = r.category[0].term,
                            h = '<div class="container">' + imgUrl + '<div class="content"><h3><a href="' + c + '">' + o + '</a></h3><a href="/search/label/' + v + '" class="recentLabel">' + v + "</a></div></div>";
                        l.find(".gallery-inner").append(h)
                    }
                    l.find(".gallery-inner .container").hoverdir({
                        hoverDelay: 75,
                        hoverElem: ".content"
                    })
                }
                l.addClass("loaded").removeClass("unloaded").fadeIn()
            }
        })).done(function() {
            n()
        })
    }

    function f(a) {
        var e = a.attr("data-label"),
            t = "/feeds/posts/summary/-/" + e + "?max-results=10&alt=json-in-script",
            s = a;
        $.when($.ajax({
            type: "GET",
            url: t,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var e = a.feed.entry;
                if (e) {
                    s.append('<div class="toggler inner"><div class="w-gallery"></div></div>');
                    for (var t = 0; t < e.length; t++) {
                        for (var n, i = e[t], r = 0; r < i.link.length; r++)
                            if ("alternate" == i.link[r].rel) {
                                var d = i.link[r].href;
                                break
                            }
                        var imgUrl = "";
                        if (i.media$thumbnail) {
                            imgUrl = getUrl(i.media$thumbnail.url, 's400-c', ' title="' + i.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        var c = i.title.$t,
                            o = i.category[0].term,
                            v = l(i.published.$t),
                            h = '<div class="container">' + imgUrl + '<div class="content"><div class="wg-date">' + v + '</div><h3><a href="' + d + '">' + c + '</a></h3><a href="/search/label/' + o + '" class="recentLabel">' + o + "</a></div></div>";
                        s.find(".w-gallery").append(h)
                    }
                }
                s.addClass("loaded").removeClass("unloaded").fadeIn()
            }
        })).done(function() {
            n()
        })
    }

    function u(t) {
        var s = t.attr("data-label"),
            i = "/feeds/posts/summary/-/" + s + "?max-results=5&alt=json-in-script",
            r = t,
            vM = t.attr('data-viewmore');
        $.when($.ajax({
            type: "GET",
            url: i,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(t) {
                var n = t.feed.entry;
                if (n) {
                    r.append(e(s, vM)), r.append('<div class="toggler"><div id="slider"></div></div>');
                    for (var i = 0; i < n.length; i++) {
                        for (var d, c = n[i], o = 0; o < c.link.length; o++)
                            if ("alternate" == c.link[o].rel) {
                                var v = c.link[o].href;
                                break
                            }
                        var imgUrl = "";
                        if (c.media$thumbnail) {
                            imgUrl = getUrl(c.media$thumbnail.url, 'w830-h400-c', ' title="' + c.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        var h = c.title.$t,
                            f = a(c.author),
                            u = l(c.published.$t),
                            p = "<div class='content'><div class='slider-meta'>" + u + f + "</div><h3><a href='" + v + "'>" + h + "</a></h3></div>",
                            m = '<div><a href="' + v + '">' + imgUrl + '</a>' + p + '</div>';
                        r.find("#slider").append(m)
                    }
                    r.find("#slider").owlCarousel({
                        items: 1,
                        nav: !0,
                        stagePadding: 50,
                        loop: true,
                        autoplay: true,
                        dots: !1,
                        navText: ["&#xf104;", "&#xf105;"]
                    });
                    r.addClass("loaded").removeClass("unloaded").fadeIn()
                }
            }
        })).done(function() {
            n()
        })
    }

    function p(e) {
        var t = e,
            s = 4,
            i = t.attr("data-label"),
            r = "/feeds/posts/summary/-/" + i + "?max-results=" + s + "&alt=json-in-script";
        $.when($.ajax({
            type: "GET",
            url: r,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var s = e.feed.entry;
                if (s) {
                    t.append('<div class="tabhead"></div><ul class="tabsub"></ul>');
                    for (var n = 1; n < s.length; n++) {
                        for (var i, r, d, c, o = s[n], v = 0; v < o.link.length; v++)
                            if ("alternate" == o.link[v].rel) {
                                r = o.link[v].href;
                                break
                            }
                        var imgUrl = "";
                        if (o.media$thumbnail) {
                            imgUrl = getUrl(o.media$thumbnail.url, 'w390-h150-c', ' class="layerimg"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        i = o.title.$t, d = o.category[0].term;
                        var h = '<li class="container"><a href="' + r + '" class="layer"></a>' + imgUrl + '<div class="layerc"><a class="recentLabel" href="/search/label/' + d + '" target="_blank">' + d + '</a><h3><a href="' + r + '">' + i + "</a></h3></div></li>";
                        t.find(".tabsub").append(h)
                    }
                    var f, u, p, m, $, b, g, y = s[0];
                    for (var k = 0; k < y.link.length; k++)
                        if ("alternate" == y.link[k].rel) {
                            u = y.link[k].href;
                            break
                        }
                    var imgUrl = "";
                    if (y.media$thumbnail) {
                        imgUrl = getUrl(y.media$thumbnail.url, 'w415-h300-c', "")
                    } else {
                        imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                    }
                    p = "<h3><a href='" + u + "'>" + y.title.$t + "</a></h3>", b = "<p>" + y.summary.$t.substr(0, 180) + "...</p>", $ = a(y.author), m = l(y.published.$t), g = y.category[0].term, t.find(".tabhead").html("<div class='container'><div class='popup-c'><a href='" + u + "'>" + imgUrl + "</a><div class='headOver'><a href='/search/label/" + g + "' class='recentLabel'>" + g + "</a>" + p + "</div><div class='ss'><a href='http://www.facebook.com/sharer.php?u=" + u + "' target='_blank' class='ss-f'>&#xf09a;</a> <a href='https://twitter.com/share?url=" + u + "&text=" + y.title.$t + "' target='_blank' class='ss-t'>&#xf099;</a> <a href='https://plus.google.com/share?url=" + u + "' target='_blank' class='ss-g'><i class='fa-google-plus'></i></a></div></div><div class='headcontent'>" + b + "<div class='headmeta'>" + $ + " - " + m + "</div></div></div>")
                }
                t.addClass("loaded").removeClass("unloaded")
            }
        })).done(function() {
            n()
        })
    }

    function m(e) {
        var t = e,
            s = t.attr("data-label1"),
            i = t.attr("data-label2"),
            r = "/feeds/posts/summary/-/" + s + "?max-results=4&alt=json-in-script",
            d = "/feeds/posts/summary/-/" + i + "?max-results=5&alt=json-in-script";
        t.append('<div class="metro-top"><div class="inner"><div class="right"><div class="top-slider"></div></div><div class="left"><div class="left-top"><div class="rect"></div><div class="sq"></div></div><div class="left-bottom"><div class="rect"></div><div class="sq"></div></div></div></div><div style="clear:both"></div></div>'), $.ajax({
            type: "GET",
            url: r,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var s = e.feed.entry;
                if (s)
                    for (var n = 0; n < s.length; n++) {
                        for (var i, r, d, c, o, v, h = s[n], f = 0; f < h.link.length; f++)
                            if ("alternate" == h.link[f].rel) {
                                r = h.link[f].href;
                                break
                            }
                        var imgUrl = "";
                        if (h.media$thumbnail) {
                            imgUrl = getUrl(h.media$thumbnail.url, 'w430-h220-c', ' title="' + h.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        i = h.title.$t, d = h.category[0].term, v = l(h.published.$t), o = a(h.author);
                        var u = '<div class="imgwrap"><a href="' + r + '">' + imgUrl + '</a></div><div class="content"><a class="recentLabel" href="/search/label/' + d + '" target="_blank">' + d + '</a><h3><a href="' + r + '">' + i + "</a></h3></div>";
                        switch (n) {
                            case 0:
                                t.find(".left .left-top .sq").append(u);
                                break;
                            case 2:
                                t.find(".left .left-bottom .sq").append(u);
                                break;
                            case 1:
                                t.find(".left .left-top .rect").append(u);
                                break;
                            case 3:
                                t.find(".left .left-bottom .rect").append(u)
                        }
                    }
                t.addClass("loaded").removeClass("unloaded")
            }
        }), $.ajax({
            type: "GET",
            url: d,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var s = e.feed.entry;
                if (s) {
                    for (var i = 0; i < s.length; i++) {
                        for (var r, d, c, o, v, h, f = s[i], u = 0; u < f.link.length; u++)
                            if ("alternate" == f.link[u].rel) {
                                d = f.link[u].href;
                                break
                            }
                        var $ = a(f.author),
                            ss = l(f.published.$t);
                        var imgUrl = "";
                        if (f.media$thumbnail) {
                            imgUrl = getUrl(f.media$thumbnail.url, 'w540-h445-c', ' title="' + f.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        r = f.title.$t, c = f.category[0].term, h = l(f.published.$t), v = a(f.author);
                        var p = "<div class='content'><a class='recentLabel' href='/search/label/" + c + "' target='_blank'>" + c + "</a><h3><a href='" + d + "'>" + r + "</a></h3><div class='slider-meta'>" + $ + ss + "</div></div>",
                            m = '<div class="right-outer"><a href="' + d + '">' + imgUrl + '</a>' + p + '</div>';
                        t.find(".right .top-slider").append(m)
                    }
                    t.find(".right .top-slider").owlCarousel({
                        items: 1,
                        nav: !0,
                        autoplay: true,
                        loop: true,
                        autoplayTimeout: 5000,
                        animateOut: 'fadeOut',
                        dots: !1,
                        navText: ["&#xf104;", "&#xf105;"]
                    });
                    t.addClass("loaded").removeClass("unloaded").fadeIn()
                }
                n()
            }
        })
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x
        }
    }

    function g(e, t, s) {
        var n = e,
            i = "/feeds/posts/summary/-/" + t + "?max-results=4&alt=json-in-script";
        $.ajax({
            type: "GET",
            url: i,
            async: s,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var t = e.feed.entry;
                if (t) {
                    n.append('<div class="tabhead"></div><ul class="tabsub"></ul>');
                    for (var s = 1; s < t.length; s++) {
                        for (var i, r, d, c, o = t[s], v = 0; v < o.link.length; v++)
                            if ("alternate" == o.link[v].rel) {
                                r = o.link[v].href;
                                break
                            }
                        var imgUrl = "";
                        if (o.media$thumbnail) {
                            imgUrl = getUrl(o.media$thumbnail.url, 'w390-h150-c', ' title="' + o.title.$t + '" class="layerimg"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        i = o.title.$t, d = o.category[0].term;
                        var h = '<li class="container"><a href="' + r + '" class="layer"></a>' + imgUrl + '<div class="layerc"><a class="recentLabel" href="/search/label/' + d + '" target="_blank">' + d + '</a><h3><a href="' + r + '">' + i + "</a></h3></div></li>";
                        n.find(".tabsub").append(h)
                    }
                    var f, u, p, m, $, b, g, y = t[0];
                    for (var k = 0; k < y.link.length; k++)
                        if ("alternate" == y.link[k].rel) {
                            u = y.link[k].href;
                            break
                        }
                    var imgUrl = "";
                    if (y.media$thumbnail) {
                        imgUrl = getUrl(y.media$thumbnail.url, 'w415-h300-c', ' title="' + y.title.$t + '"')
                    } else {
                        imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                    }
                    p = "<h3><a href='" + u + "'>" + y.title.$t + "</a></h3>", b = "<p>" + y.summary.$t.substr(0, 180) + "...</p>", $ = a(y.author), m = l(y.published.$t), g = y.category[0].term, n.find(".tabhead").html("<div class='container'><div class='popup-c'><a href='" + u + "'>" + imgUrl + "</a><div class='headOver'><a href='/search/label/" + g + "' class='recentLabel'>" + g + "</a>" + p + "</div><div class='ss'><a href='http://www.facebook.com/sharer.php?u=" + u + "' target='_blank' class='ss-f'>&#xf09a;</a> <a href='https://twitter.com/share?url=" + u + "&text=" + y.title.$t + "' target='_blank' class='ss-t'>&#xf099;</a> <a href='https://plus.google.com/share?url=" + u + "' target='_blank' class='ss-g'>&#xf0d5;</a></div></div><div class='headcontent'>" + b + "<div class='headmeta'>" + $ + " - " + m + "</div></div></div>")
                }
                return !0
            }
        })
    }
    $(".nav-button").click(function() {
        $(".DropDownNavigation").toggleClass("active")
    }), $(".topnav .PageList ul").tinyNav();
    var y = [];
    $(".related-posts span.labelname").each(function() {
        y.push($(this).text()), $(this).remove()
    }), 0 == y.length ? $(".related-posts").html("<h2>No Related Post Found</h2>") : ($(".related-posts").append('<h3 class="related-title rhead"><span class="name">Related Articles</span><span class="link">// Thats What You Might Be Looking For</span></h3><div class="related-inner"></div>'), s(y)), $("li.nav-rec").each(function() {
        var a = $(this),
            e = a.attr("data-label"),
            s = "/feeds/posts/summary/-/" + e + "?max-results=15&alt=json-in-script";
        a.append("<div class='nav-outer'><div class='toCenter'><div class='nav-oi'></div></div></div>"), t(s, a, ".nav-oi", 5)
    }), $("li.nav-rec-tab").each(function() {
        var a = $(this),
            e = a.find(".tab-outer li");
        a.hover(function() {
            a.find('.nto .toCenter').stop().fadeIn(300)
        }, function() {
            a.find('.nto .toCenter').stop().fadeOut(300)
        });
        if (e.length > 0) {
            a.find(".tab-outer").wrap('<div class="nto"><div class="toCenter"></div></div>');
            for (var s = "<div class='nav-tab-outer'>", l = 0; l < e.length; l++) {
                var n = 0 == l ? " active" : "";
                s += "<div class='nav-tab" + l + n + "'><div class='nav-tabi'></div></div>"
            }
            s += "</div>", a.find(".nto .toCenter").append(s), e.first().addClass("active");
            a.find(".nav-tabi").hide();
            a.find(".nav-tabi").first().addClass('active');
            e.each(function() {
                var s = $(this).attr("data-label"),
                    l = "/feeds/posts/summary/-/" + s + "?max-results=12&alt=json-in-script",
                    n = $(this).index();
                t(l, a, ".nav-tab" + n + " .nav-tabi", 4);
                $(this).mouseenter(function() {
                    var t = ($(this), $(this).index());
                    a.find(".nav-tab-outer>div").each(function() {
                        $(this).hasClass("nav-tab" + t) ? $(this).find(".nav-tabi").addClass('active') : $(this).find(".nav-tabi").removeClass('active')
                    }), e.removeClass("active"), $(this).addClass("active")
                })
            })
        }
    }), $(".megamenu").each(function() {
        $(this).append("<div class='megamenu-inner'><div class='toCenter'></div></div>"), $(this).find("ul").appendTo(".megamenu-inner .toCenter")
    }), $('div[data-style="headline"]').addClass("recent-post-headline unloaded"), $('div[data-style="small-slider"]').addClass("small-slider"), $('div[data-style="column"]').addClass("recent-post-column unloaded"), $('div[data-style="simple"]').addClass("recent-post-simple unloaded"), $('div[data-style="slider"]').addClass("recent-post-slider unloaded"), $('div[data-style="gallery"]').addClass("recent-post-gallery unloaded"), $('div[data-style="carousel"]').addClass("recent-post-car unloaded"), $('div[data-style="cards"]').addClass("recent-post-cards unloaded"), $('div[data-style="recent-list"]').addClass("recent-post-list"), $('div[data-style="random"]').addClass("random-post"), $('div[data-style="single"]').addClass("recent-post-single unloaded"), $('div[data-style="vcar"]').addClass("recent-post-vcar unloaded"), $('div[data-style="wide-gallery"]').addClass("recent-post-wgallery unloaded"), $('div[data-style="wcar"]').addClass("recent-post-car unloaded"), $('div[data-style="home-top"]').addClass("home-topper unloaded"), $('div[data-style="home-ticker"]').addClass("news-ticker"), $('div[data-style="recent-tab"]').addClass("recent-post-tab"), n(), $(".recent-post-list").each(function() {
        var e = "/feeds/posts/summary/?max-results=5&alt=json-in-script",
            t = $(this);
        t.append('<ul class="recent-post-item"></ul>'), $.ajax({
            type: "GET",
            url: e,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var s = e.feed.entry;
                if (s) {
                    for (var n = 0; n < s.length; n++) {
                        for (var i, r = s[n], d = 0; d < r.link.length; d++)
                            if ("alternate" == r.link[d].rel) {
                                var c = r.link[d].href;
                                break
                            }
                        i = void 0 !== r.media$thumbnail ? r.media$thumbnail.url : Default_Image_For_Recent_Posts;
                        var o = r.title.$t,
                            v = a(r.author),
                            h = l(r.published.$t),
                            f = '<li><img  class="toLoad" src="' + i + '"/><div class="recent-list-c"><h3><a href="' + c + '">' + o + '</a></h3><div class="meta">' + v + " " + h + "</div></div></li>";
                        t.find("ul.recent-post-item").append(f)
                    }
                    t.addClass("loaded").fadeIn()
                }
            }
        })
    });

    function GETH(a, r) {
        var s = r == undefined ? 'View More By' : r;
        var e = '<div class="rhead"><span class="name">' + a + '</span><a class="link" href="/search/label/' + a + '" title="View All By ' + a + '"> // ' + s + ' ' + a + " <i class='fa-arrow-right'></i></a></div>";
        return e
    }

    function auh(a) {
        for (var e = 0; e < a.length; e++) var t = "<span class='authorname'><i class='fa fa-user'></i> " + a[e].name.$t + "</span>";
        return t
    }

    function ttt(a) {
        var e = new Array;
        e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
        var t = a.substring(0, 4),
            s = a.substring(5, 7),
            l = a.substring(8, 10),
            n = "<span class='recentdate'><i class='fa fa-clock-o'></i> " + e[parseInt(s, 10)] + " " + l + " " + t + "</span> ";
        return n
    }
    $('div[data-style="magazine"]').addClass("tl-recentHeadline");
    $(".tl-recentHeadline").each(function() {
        var e = $(this).attr("data-label"),
            n = "/feeds/posts/summary/-/" + e + "?max-results=5&alt=json-in-script",
            l = $(this),
            vM = l.attr('data-viewmore');
        l.append('<div class="tl-wspace"><div class="tl-headlineWrap"><div class="mag-head"></div></div><div class="tl-subheadWrap"><div class="mag-subhead"></div></div></div>'), $.ajax({
            type: "GET",
            url: n,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                l.prepend(GETH(e, vM));
                for (var s = 1; s < a.feed.entry.length; s++) {
                    for (var n = a.feed.entry[s], i = 0; i < n.link.length; i++)
                        if ("alternate" == n.link[i].rel) {
                            var o = n.link[i].href;
                            break
                        }
                    var imgUrl = "";
                    if (n.media$thumbnail) {
                        imgUrl = getUrl(n.media$thumbnail.url, 'w100-h85-c', '')
                    } else {
                        imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                    }
                    var d = n.title.$t,
                        u = n.published.$t,
                        h = "<h3><a href=" + o + ">" + d + "</a></h3>",
                        f = ttt(u),
                        v = auh(n.author),
                        m = '<div class="container"><div class="imagewrap"><a class="featured-thumb" title="' + d + '" href="' + o + '">' + imgUrl + '</a></div><div class="recentcontent">' + h + '<div class="metadata">' + f + "" + v + "</div></div>";
                    l.find(".mag-subhead").append(m)
                }
                var g = a.feed.entry[0];
                for (var b = 0; b < g.link.length; b++)
                    if ("alternate" == a.feed.entry[0].link[b].rel) {
                        var k = a.feed.entry[0].link[b].href;
                        break
                    }
                var imgUrl = "";
                if (a.feed.entry[0].media$thumbnail) {
                    imgUrl = getUrl(a.feed.entry[0].media$thumbnail.url, 'w495-h195-c', "")
                } else {
                    imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                }
                var A = "<h3><a href='" + k + "'>" + g.title.$t + "</a></h3>",
                    x = g.title.$t,
                    j = "<p>" + g.summary.$t.substr(0, 150) + "...</p>",
                    w = auh(g.author),
                    T = g.published.$t,
                    E = ttt(T);
                l.find(".mag-head").html("<div class='tl-magMedia'><a class='featured-thumb' title='" + x + "' href='" + k + "'>" + imgUrl + "</a></div>" + A + "<div class='tl-headm'>" + E + w + "</div>" + j + "")
            }
        })
    });
    $(".small-slider").each(function() {
        var a = $(this),
            e = undefined == a.attr("data-purpose") ? "recent" : a.attr("data-purpose"),
            t = "label" == e ? a.attr("data-label") : !1,
            s = "recent" == e ? "/feeds/posts/summary?max-results=5&alt=json" : "/feeds/posts/summary/-/" + t + "?max-results=5&alt=json-in-script";
        $.ajax({
            type: "GET",
            url: s,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var t = e.feed.entry;
                if (t) {
                    a.append('<div class="toggler"><div id="slider"></div></div>');
                    for (var s = 0; s < t.length; s++) {
                        for (var l, n = t[s], i = 0; i < n.link.length; i++)
                            if ("alternate" == n.link[i].rel) {
                                var r = n.link[i].href;
                                break
                            }
                        var imgUrl = "";
                        if (n.media$thumbnail) {
                            imgUrl = getUrl(n.media$thumbnail.url, 'w400-h250-c', ' title="' + n.title.$t + '"')
                        } else {
                            imgUrl = "<img src='" + Default_Image_For_Recent_Posts + "'/>"
                        }
                        if (getFirstC(n)) {
                            var c = "<a href='/search/label" + getFirstC(n) + "' class='recentLabel'>" + getFirstC(n) + "</a>"
                        } else {
                            var c = "<a href='#' class='recentLabel'>No Label</a>"
                        }
                        var d = n.title.$t,
                            w = auh(n.author),
                            T = n.published.$t,
                            E = ttt(T),
                            o = "<div class='content'><div class='slider-meta'>" + c + "</div><h3><a href='" + r + "'>" + d + "</a></h3><div class='small-slider-meta'>" + E + w + "</div></div>",
                            v = '<div><a href="' + r + '">' + imgUrl + '</a>' + o + '</div>';
                        a.find("#slider").append(v)
                    }
                    a.find("#slider").owlCarousel({
                        items: 1,
                        nav: !0,
                        loop: true,
                        animateOut: 'fadeOut',
                        autoplay: true,
                        autoplayTimeout: 4000,
                        dots: !1,
                        navText: ["&#xf104;", "&#xf105;"]
                    })
                }
            }
        })
    }), $(".news-ticker").each(function() {
        var a = "/feeds/posts/summary/?max-results=10&alt=json-in-script",
            e = $(this);
        $.ajax({
            type: "GET",
            url: a,
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(a) {
                var t = a.feed.entry;
                if (t) {
                    e.append('<div class="inner"><span class="ticker-label"><i class="fa fa-rocket"></i> Recent News</span><ul class="ticker-inner"></ul></div>');
                    for (var s = 0; s < t.length; s++) {
                        for (var l, n = t[s], i = 0; i < n.link.length; i++)
                            if ("alternate" == n.link[i].rel) {
                                var r = n.link[i].href;
                                break
                            }
                        l = void 0 !== n.media$thumbnail ? n.media$thumbnail.url : Default_Image_For_Recent_Posts;
                        var d = n.title.$t,
                            c = getFirstC(n);
                        if (c) {
                            var labelC = "<a class='recentLabel currentLabel' href='/search/label/" + c + "'>" + c + "</a>"
                        } else {
                            var labelC = "<a class='recentLabel currentLabel' href='#'>No Label</a>"
                        }
                        var o = '<li><a href="' + r + '"><img  class="toLoad" src="' + l + '" title="' + d + '"/></a><div class="content">' + labelC + '<h3><a href="' + r + '">' + d + "</a></h3></div></li>";
                        e.find("ul.ticker-inner").append(o)
                    }
                    e.find("ul.ticker-inner").liScroll()
                } else e.hide()
            }
        })
    });
    var k = $(".recent-post-tab");
    k.each(function() {
        var a = $(this),
            e = a.find("span"),
            t = a.attr("data-heading"),
            s = '<div class="rt-outer"><div class="rt-head">';
        t.length > 0 && "undefined" !== t && (s += '<span class="rt-heading">' + t + "</span>"), s += "<ul class='rt-buttons'>";
        for (var l = 0; l < e.length; l++) s += "<li class='rt-button" + l + "' data-load='unloaded'>" + $(e[l]).attr("data-name") + "</li>";
        s += "</ul></div><div class='rt-contents'>";
        for (var l = 0; l < e.length; l++) s += "<div data-label='" + $(e[l]).attr("data-label") + "' class='rt-content' data-class='rt-button" + l + "'></div>";
        s += "</div></div>", a.append(s)
    }), $(".comment-tabs .comment-buttons button:first").addClass("active"), $(".comment-tabs .comment-system>div").hide(), $(".comment-tabs .comment-system>div:first").show(), $(".comment-tabs .comment-buttons button").click(function() {
        $(".comment-tabs .comment-buttons button").removeClass("active");
        var a = $(this).attr("class");
        $(this).addClass("active"), $(".comment-tabs .comment-system>div").each(function() {
            $(this).hasClass(a) ? $(this).fadeIn() : $(this).hide(0)
        })
    }), $(".rt-outer").each(function() {
        var a = $(this).find(".rt-buttons"),
            e = $(this),
            t = $(this).find(".rt-contents");
        a.find("li").first().addClass("active"), t.find(".rt-content").hide(0);
        var s = a.find("li.active");
        t.find(".rt-content").each(function() {
            g($(this), $(this).attr("data-label"), !1);
            s.hasClass($(this).attr("data-class")) ? ($(this).show(), s.attr("data-load", "loaded")) : $(this).hide()
        }), $("li", a).click(function() {
            $("li", a).removeClass("active"), $(this).addClass("active");
            var s = a.find("li.active"),
                l = $(this).attr("data-load");
            t.find(".rt-content").each(function() {
                if (s.hasClass($(this).attr('data-class'))) {
                    t.find('.rt-content').hide(0);
                    $(this).fadeIn()
                }
            })
        })
    }), $(".zd-acc").each(function() {
        $("div", this).hide(), $(this).find("span").first().addClass("active"), $("span.active", this).next("div").slideDown();
        var a = $(this);
        $("span", this).click(function() {
            $("div", a).slideUp(), $("span", a).removeClass("active"), $(this).addClass("active"), $(this).next("div").slideDown()
        })
    }), $(".zd-tab").each(function() {
        var a = $(this),
            e = $(".zd-tabbutton", a),
            t = $(".zd-tabcontent", a);
        t.children("div").hide(), t.children("div").first().fadeIn(), e.children("span").first().addClass("active"), e.children("span").click(function() {
            var a = $(this).index();
            e.children("span").removeClass("active"), $(this).addClass("active"), t.children("div").each(function() {
                $(this).index() == a ? $(this).slideDown() : $(this).slideUp()
            })
        })
    })
}), $(function() {
    function a() {
        var a = $(".searchbar").val(),
            t = $(".search-item").length + 1;
        if (a.length >= 1) {
            $(".search-content").show(), $(".search-filter").attr("data-query", a), $(".search-result span").show().html("Searching ...");
            var s = "/feeds/posts/default?max-results=8&start-index=" + t + "&alt=json&q=" + a;
            $.ajax({
                type: "GET",
                url: s,
                async: !0,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(t) {
                    $(".more-result").hide(), e(t, a)
                }
            })
        } else $(".search-content").hide()
    }

    function e(a, e) {
        if (a.feed.entry) {
            for (var t = 0; t < a.feed.entry.length; t++) {
                for (var s = 0; s < a.feed.entry[t].link.length; s++)
                    if ("alternate" == a.feed.entry[t].link[s].rel) {
                        var l = a.feed.entry[t].link[s].href;
                        break
                    }
                try {
                    var n = a.feed.entry[t].media$thumbnail.url
                } catch (i) {
                    var n = Default_Image_For_Recent_Posts
                }
                var r = a.feed.entry[t].title.$t,
                    d = '<div class="search-item"><img src="' + n + '"/><a href="' + l + '" target="_blank">' + r + "</a></div>";
                $(".search-result").prepend(d)
            }
            $(".search-result span").hide(function() {
                $(".queryword").html("Showing results for:<b>" + e + "</b>"), $(".more-result").show()
            })
        } else $(".search-result span").show().html("No result"), $(".more-result").hide()
    }
    $(".navo").click(function() {
        $(this).toggleClass("open close"), $(".DropDownNavigation").slideToggle()
    });
    var t = $(".stab-buttons span"),
        s = $(".stab-content>div");
    t.first().addClass("active"), s.hide(), s.first().slideDown(), t.click(function() {
        $(".stab-buttons span").removeClass("active");
        var a = $(this).attr("class");
        $(this).addClass("active"), $(".stab-content>div").each(function() {
            $(this).hasClass(a) ? $(this).fadeIn(800) : $(this).hide()
        })
    }), $(".search-button").click(function() {
        $(".searchpop,.overlay").addClass("active").fadeIn(), $(".searchbar").focus()
    }), $(".overlay,.close-search").click(function() {
        $(".searchpop,.overlay").fadeOut().removeClass("active")
    }), $(".liveform").submit(function() {
        return $(".search-item").remove(), a(), !1
    }), $(".close-search").click(function() {
        $(".search-content").hide()
    }), $(".more-result").click(function() {
        $(".more-result").hide(), a()
    })
});

function auh(a) {
    for (var e = 0; e < a.length; e++) var t = "<span class='authorname'><i class='fa fa-user'></i> " + a[e].name.$t + "</span>";
    return t
}

function ttt(a) {
    var e = new Array;
    e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
    var t = a.substring(0, 4),
        s = a.substring(5, 7),
        l = a.substring(8, 10),
        n = "<span class='recentdate'><i class='fa fa-clock-o'></i> " + e[parseInt(s, 10)] + " " + l + " " + t + "</span> ";
    return n
}

function t(t) {
    var t, e, a = [];
    for (e = 0; t > e; e++) a.push(e);
    return shuffle(a)
}
shuffle = function(t) {
    for (var e, a, s = t.length; s; e = parseInt(Math.random() * s), a = t[--s], t[s] = t[e], t[e] = a);
    return t
};
$(function() {
    $(".random-post").each(function() {
        var r = "/feeds/posts/summary/?max-results=500&alt=json-in-script",
            ass = $(this);
        ass.append('<ul class="random-inner"></ul>'), $.ajax({
            type: "GET",
            url: r,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                for (var a = e.feed.entry, r = a.length, l = t(r), i = 0; 5 > i; i++) {
                    for (var o = 0; o < e.feed.entry[l[i]].link.length; o++)
                        if ("alternate" == a[l[i]].link[o].rel) {
                            var c = e.feed.entry[l[i]].link[o].href;
                            break
                        }
                    try {
                        var p = a[l[i]].media$thumbnail.url
                    } catch (d) {
                        var p = "https://lh6.googleusercontent.com/-IqlHLqb7VkI/VJWT8jiJZZI/AAAAAAAAFxo/2Wjhxof4qxs/s500-no/error%2Bimg.jpg"
                    }
                    var u = a[l[i]].title.$t,
                        h = a[l[i]].published.$t,
                        f = ttt(h),
                        v = auh(a[l[i]].author),
                        m = '<li><img  class="toLoad" src="' + p + '"/><div class="recent-list-c"><h3><a href="' + c + '">' + u + '</a></h3><div class="meta">' + v + " " + f + "</div></div></li>";
                    ass.find("ul").append(m)
                }
            }
        })
    });
    var c = $('.tl-sitemap'),
        counter = 1;
    var r = '/feeds/posts/summary?max-results=0&alt=json-in-script';

    function getLabels(e) {
        if (e.category === undefined) {
            return "<span>No Label</span>"
        } else {
            var labels = "";
            for (var i = 0; i < e.category.length; i++) {
                labels += "<a href='/search/label/" + e.category[i].term + "'>" + e.category[i].term + "</a>";
                if (!i == e.category.length - 1) {
                    labels += ","
                }
            }
            return labels
        }
    }

    function getSitemap() {
        var s = '/feeds/posts/summary?max-results=10&alt=json-in-script&start-index=' + counter;
        $.ajax({
            type: "GET",
            url: s,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(e) {
                var t = e.feed.entry,
                    more = t.length < 10 ? false : true;
                for (var s = 0; s < t.length; s++) {
                    for (var l, n = t[s], i = 0; i < n.link.length; i++)
                        if ("alternate" == n.link[i].rel) {
                            var r = n.link[i].href;
                            break
                        }
                    if (!more) {
                        c.find('tfoot').hide()
                    }
                    var title = '<a href="' + r + '">' + n.title.$t + '</a>',
                        date = ttt(n.published.$t),
                        labels = getLabels(n),
                        cc = counter + s;
                    c.find('tbody').append('<tr><td>' + cc + '</td><td>' + title + '</td><td>' + date + '</td><td>' + labels + '</td></tr>')
                }
                counter += 10
            }
        });
        console.log(s)
    }
    $.ajax({
        type: "GET",
        url: r,
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(e) {
            var content = "<h3>Total Post:" + e.feed.openSearch$totalResults.$t + "</h3>";
            c.append(content);
            var more = parseInt(e.feed.openSearch$totalResults.$t) < 10 ? false : true;
            if (e.feed.openSearch$totalResults.$t > 0) {
                c.append("<table><thead><tr><td><i class='fa fa-barcode'></i> S.N</td><td><i class='fa fa-link'></i> Title</td><td><i class='fa fa-calendar'></i> Date Published</td><td><i class='fa fa-tag'></i> Label</td></tr></thead><tbody></tbody></table>");
                if (more) {
                    c.find('table').append('<tfoot><tr><td><button class="load-more">Load More</button></td></tr></tfoot>');
                    console.log('a')
                }
                getSitemap()
            } else {
                c.append("<h4>No post to show</h4>")
            }
            c.find('.load-more').click(getSitemap)
        }
    })
});
