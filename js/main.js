$(document).ready(function(){
    
// $(".overlay").hide();
    $(".innerbox").hover(function(){
        $(this).fadeTo("slow",0.6)
        $(".overlay").show();},
        function(){
            $(this).fadeTo("slow",1)
            $(".overlay").hide();


        

    });

showToogle();
showImg();
});

//if th desing image is clicked toggle and show  what we do class
let showToogle = ()=>{
    // $(".design").fadeOut()
    // $(".design2").fadeOut()
    // $(".design3").fadeOut()
    let imgClick= $(".pic")
    imgClick.click(function(){

        let imgId = this.id
        if(imgId ==="design-image"){
            $("#design").show();
            $("#design-image").hide();
        

        }if(imgId === "development-image"){
            $("#development").show()
            $("#development-image").hide();
        }
        if(imgId === "product-image"){
            $("#product").show()
            $("#product-image").hide()
           }

    
    
});
}

 let showImg = ()=>{

        let description = $(".para")
        description.click(function(){
            let descriptionId = this.id;
            if(descriptionId === "design"){
                $("#design-image").show();
                $("#design").hide()

            }
            if(descriptionId === "development"){
                $("#development-image").show();
                $("#development").hide()

            }
            if(descriptionId === "product"){
                $("#product-image").show();
                $("#product").hide()

            }
        

    });
 }

