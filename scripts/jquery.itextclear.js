(function(b){b.iTextClear=function(c,f){var a=this,e=false,d=b('<a class="iTextClearButton"></a>');a.$el=b(c);a.el=c;a.$el.data("iTextClear",a);a.init=function(){a.options=b.extend({},b.iTextClear.defaultOptions,f);a.$el.wrap('<span class="iTextClearButtonContainer"></span>').after(d.hide()).bind("focus.itextclear",function(){d.show()}).bind("focusout.itextclear",function(){e?e=false:d.hide()});d.bind("mousedown.itextclear",function(){e=true;a.$el.val("");setTimeout(function(){a.$el.focus()},0)})};
a.init()};b.iTextClear.defaultOptions={};b.fn.iTextClear=function(c){return this.each(function(){new b.iTextClear(this,c)})}})(jQuery);