   
   $(document).ready(function()
   {
      $('#wb_Heading1').addClass('visibility-hidden');
      $("a[href*='#intro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#intro').offset().top }, 600, 'easeOutQuad');
      });
      function Heading1Scroll()
      {
         var $obj = $("#wb_Heading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading1', 'vanish-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading1').inViewPort(true))
      {
         $('#wb_Heading1').addClass("in-viewport");
      }
      Heading1Scroll();
      $(window).scroll(function(event)
      {
         Heading1Scroll();
      });
      $(window).on('resize', function()
      {
         ResponsiveVideo('intro-video');
      });
      ResponsiveVideo('intro-video');
   });
   
   $(document).ready(function()
   {
      // move arrow outside the layer container
      $('#wb_down-arrow').appendTo('#intro');
   });
