     // Once the video is ready
    _V_("example_video_1").ready(function(){
      
      // Store the video object
      var myPlayer = this; 
      // Make up an aspect ratio
      var aspectRatio = 385/700; 

      function resizeVideoJS(){
        var width = document.getElementById(myPlayer.id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
       // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
      window.onresize = resizeVideoJS; 

    });