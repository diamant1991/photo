
function check_placeholder(){

	var placeholder = $("#phone").attr("placeholder");
	if (typeof placeholder !== "undefined"){	
		var phone_mask = placeholder.replace(/\_/gi,"9");
			$("#phone").mask(phone_mask);
	}
}

$(document).ready(function() {
		check_placeholder();
});


	
	$("[name='PROPERTY[F_ORDER_NAME]'], [name='PROPERTY[F_WRITE_NAME]'], [name='PROPERTY[F_ORDER_PHONE]'], [name='PROPERTY[F_WRITE_EMAIL]'], [name='PROPERTY[F_WRITE_TEXT]']").keyup(function(){
		CheckData($(this));
	});
	
	$(document).on('click', '.order-photoset', function(e) {
		e.preventDefault();
		if(($("[name='PROPERTY[F_ORDER_NAME]']").val().length > 0) && ($("[name='PROPERTY[F_ORDER_PHONE]']").val().length > 0))
		{
			$.ajax({
				url: site_dir + 'ajax/order.php',
				data: $('.order-photoset-form').serialize(),
				type: 'POST',
				success: function(data) {
					if(data)
					{
						$('.order-photoset-form, .modal-header h3').hide();
						$(".message-order span").text($("[name='PROPERTY[F_ORDER_NAME]']").val());
						$(".message-order").show();
					}
				}
			});
		}	
		else
		{
			CheckData($("[name='PROPERTY[F_ORDER_NAME]']"));
			CheckData($("[name='PROPERTY[F_ORDER_PHONE]']"));
		}
	});
	
	$('.write-submit').click(function(e) {
		e.preventDefault();
		if(($("[name='PROPERTY[F_WRITE_NAME]']").val().length > 0) && ($("[name='PROPERTY[F_WRITE_EMAIL]']").val().length > 0) && ($("[name='PROPERTY[F_WRITE_TEXT]']").val().length > 0))
		{
			if(CheckEmail($("[name='PROPERTY[F_WRITE_EMAIL]']").val()))
			{
				$.ajax({
					url: site_dir + 'ajax/write.php',
					data: $('.write-form').serialize(),
					type: 'POST',
					success: function(data) {
						if(data)
						{
							$('.write-form').hide();
							$(".message-write span").text($("[name='PROPERTY[F_WRITE_NAME]']").val()+', спасибо!');
							$(".message-write").show();
						}
					}
				});
			}
			else
			{
				$("[name='PROPERTY[F_WRITE_EMAIL]']").closest('fieldset').addClass('has-error').find('label').css('display','block')
				return false
			}
		}	
		else
		{
			CheckData($("[name='PROPERTY[F_WRITE_NAME]']"));
			CheckData($("[name='PROPERTY[F_WRITE_EMAIL]']"));
			CheckData($("[name='PROPERTY[F_WRITE_TEXT]']"));
		}
	});

	
	
	
	
	$(document).on('click', '.tz-order-photoset-form', function(e) {
		e.preventDefault();
		
		if(($("[name='PROPERTY[F_ORDER_NAME]']").val().length > 0) && ($("[name='PROPERTY[F_ORDER_PHONE]']").val().length > 0))
		{
			$.ajax({
				url: site_dir + 'ajax/order-service.php',
				data: $('.tz-order-photoset-form').serialize(),
				type: 'POST',
				success: function(data) {
					if(data)
					{
						$(".message-order-detail span").text($("[name='PROPERTY[F_ORDER_NAME]']").val());
						$(".message-order-detail").show();
						
					}
				}
			});
		}	
		else
		{
			CheckData($("[name='PROPERTY[F_ORDER_NAME]']"));
			CheckData($("[name='PROPERTY[F_ORDER_PHONE]']"));
		}
	});
	
	
	
	
	function CheckEmail(email)
	{
		var re = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,6}$/i;
		return re.test(email) ? true : false
	}

	function CheckData(el)
	{
		idel = el.attr("name");
		if(el.val().length == 0)
		{
			$("[name='"+idel+"']").closest('fieldset').addClass('has-error').find('label').css('display','block')
		}
		else
		{
			$("[name='"+idel+"']").closest('fieldset').removeClass('has-error').find('label').css('display','none')
		}
	}






	// Here we apply the actual CollagePlus plugin
	function collage() {
		$('.Collage').removeWhitespace().collagePlus(
			{
				'fadeSpeed'	 : 2000,
				'targetHeight'  : 370,
				'effect' : 'effect-3',
			}
		);
	};

	$(window).load(function () {
		$(document).ready(function(){
			collage();
		});
	});
	// This is just for the case that the browser window is resized
	var resizeTimer = null;
	$(window).bind('resize', function() {
		// hide all the images until we resize them
		$('.Collage .Image_Wrapper').css("opacity", 0);
		// set a timer to re-apply the plugin
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(collage, 200);
	});





	

function set_panel_top(){
	
	var panel = $("#panel");
	var scrolling = $(window).scrollTop();
	if (panel !== "undefined"){
		if($("#bx-panel-back").is(":visible"))
			{
				top_menu = $("#bx-panel-back").height();
				$('.navbar-fixed-top').css("top", top_menu);
			}
		else
		{
			if($("#bx-panel").is(":visible"))
			{
				top_menu = $("#bx-panel").height();
			
				$('.navbar-fixed-top').css("top", top_menu);
				if (scrolling > 0)
				{
					var scr = scrolling - top_menu;
					
					if (scrolling > top_menu){
						$('.navbar-fixed-top').css("top", 0);
					}
					else {
						$('.navbar-fixed-top').css("top", 0);
					}
					
				}
				
			}
		}
	}
}
	
	

$(document).ready(function() {
	set_panel_top();
});
	
	
	
	// GetPanelPos();
$(document).ready(function() {
	 $('#bx-panel-pin').click(function() {
		//GetPanelPos();
		set_panel_top();
	 });
			
	 $('#bx-panel-hider').click(function() {
		//GetPanelPos();
		set_panel_top();
	 });
	 $('#bx-panel-expander').click(function() {
		//GetPanelPos();
		set_panel_top();
	 });
 });


$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	set_panel_top();
	
});	 
	
	
$(document).ready(function() {
	hover_serv();
});

function hover_serv(){
	$('.tz-service-wrap img').hover( function(e){
		
		var serv_images = $(".tz-service-wrap img");

		var description_serv = $(".tz-service-desc p");

		var index_img = serv_images.index($(this));
		
		var desc = description_serv.eq(index_img);

		if ( desc.hasClass("hide")){
			desc.removeClass("hide");
		}
		else {
			desc.addClass("hide");
		}
		
	});
}
	
	
	
	
$(document).on('change', '.tz-select-service', function(event){
	
	var serv_selected= $( ".tz-select-service :selected" ).val();
	console.log(serv_selected);		
	var loc = $(location).attr('href', 'http://'+ serv_selected );
});