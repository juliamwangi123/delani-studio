$(document).ready(function(){
    

showToogle();
showImg();
hover();
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

//hover effect
let hover = ()=>{

    $("#innerbox1").hover(function(){
    $(this).fadeTo("slow", 0.5)
    $("#project1").show()
    }, function(){
    $(this).fadeTo("fast", 1)
    $("#project1").hide()
    })
    
    $("#innerbox2").hover(function(){
        $(this).fadeTo("slow", 0.5)
        $("#project2").show()
        }, function(){
        $(this).fadeTo("fast", 1)
        $("#project2").hide()
        });

     $("#innerbox3").hover(function(){
        $(this).fadeTo("slow", 0.5)
        $("#project3").show()
        }, function(){
        $(this).fadeTo("fast", 1)
        $("#project3").hide()
        });

        $("#innerbox4").hover(function(){
        $(this).fadeTo("slow", 0.5)
        $("#project4").show()
        }, function(){
        $(this).fadeTo("fast", 1)
        $("#project4").hide()
        })

        $("#innerbox5").hover(function(){
            $(this).fadeTo("slow", 0.5)
            $("#project5").show()
            }, function(){
            $(this).fadeTo("fast", 1)
            $("#project5").hide()
            })
        $("#innerbox6").hover(function(){
         $(this).fadeTo("slow", 0.5)
         $("#project6").show()
            }, function(){
             $(this).fadeTo("fast", 1)
             $("#project6").hide()
            })
            $("#innerbox7").hover(function(){
                $(this).fadeTo("slow", 0.5)
                $("#project7").show()
                }, function(){
                $(this).fadeTo("fast", 1)
                $("#project7").hide()
                })
                $("#innerbox8").hover(function(){
                    $(this).fadeTo("slow", 0.5)
                    $("#project8").show()
                    }, function(){
                    $(this).fadeTo("fast", 1)
                    $("#project8").hide()
                    })
            
}




