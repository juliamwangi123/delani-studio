$(document).ready(function(){

showToogle();
showImg();
showToogle()
});

//if th desing image is clicked toggle and show  what we do class
let showToogle = ()=>{
    $(".design").fadeOut()
    // $(".design2").fadeOut()
    // $(".design3").fadeOut()
    let imgClick= $(".pic")
    imgClick.click(function(){

        let imgId = this.id
        if(imgId ==="pic1"){
            $(".design1").show();
            $("#pic1").hide();
        }if(imgId === "pic2"){
            $(".design2").show()
            $("#pic2").hide()
        }
        if(imgId === "pic3"){
            $(".design3").show()
            $("#pic3").hide()
           }

    });
    
};

let showImg =()=>{
    $(".pic1").hide();
    $(".design1").click(function(){
        $("#pic1").show();
        $(".design1").hide();
    })
    $(".design2").click(function(){
        $("#pic2").toggle();
        $(".design2").hide()
    })
    $(".design3").click(function(){
        $("#pic3").toggle();
        $(".design3").hide()
    })
}
