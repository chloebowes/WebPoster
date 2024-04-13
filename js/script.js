let pausePixels = 1000;     //this is how long you scroll as things are paused
let sectionHeight = $(window).width() > 768 ? 400 : 600; 

console.log("testing")
// Basically the way skrollr works is by creating custom attributes to the elements you want to manipulate
// the details are here: https://github.com/Prinzhorn/skrollr?tab=readme-ov-file


//randomly positioning each of the titles
    $(".title-row").each(function(){
        fromLeft = (Math.floor(Math.random()*6000)-3000)+"px"; 
        $(this)
            .attr("data-0","margin-left:"+fromLeft)
            .attr("data-"+$(window).height(),"margin-left: 0px")
    })

//adding custom attributes to each of the sections when to start opening the drawer, when to start closing the drawer.
    $("#content-row-1")
        .attr("data-"+$(window).height(),"height:0px")
        .attr("data-"+($(window).height()+sectionHeight),"height:"+sectionHeight+"px")
        .attr("data-"+($(window).height()+sectionHeight+pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+($(window).height()+2*sectionHeight+pausePixels),"height: 0px")


        $("#content-row-3")
        .attr("data-"+($(window).height()+sectionHeight+pausePixels),"height:0px")
        .attr("data-"+($(window).height()+2*sectionHeight+pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+($(window).height()+2*sectionHeight+2*pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+($(window).height()+3*sectionHeight+2*pausePixels),"height: 0px")

        $("#content-row-8")
        .attr("data-"+($(window).height()+2*sectionHeight+2*pausePixels),"height:0px")
        .attr("data-"+($(window).height()+3*sectionHeight+2*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+($(window).height()+3*sectionHeight+3*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+($(window).height()+4*sectionHeight+3*pausePixels),"height: 0px")


         $("#content-row-10")
        .attr("data-"+($(window).height()+3*sectionHeight+3*pausePixels),"height:0px")
        .attr("data-"+($(window).height()+4*sectionHeight+3*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+($(window).height()+4*sectionHeight+4*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+($(window).height()+5*sectionHeight+4*pausePixels),"height: 0px")

         $("#footer")
        .attr("data-"+($(window).height()+5*sectionHeight+5*pausePixels),"top:"+$(window).height()+"px")
         .attr("data-"+($(window).height()+5*sectionHeight+5*pausePixels+$(window).height()),"top:0px")
          
 
 

    if ($(window).width() > 100) { //online initialize skrolling functionality if the window width > 1000px

        var s = skrollr.init();
    }
    