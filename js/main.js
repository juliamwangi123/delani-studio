$(document).ready(function(){

showToogle();
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
            $(".design1").toggle();
            $("#pic1").hide();
        }if(imgId === "pic2"){
            $(".design2").toggle()
            $("#pic2").fadeOut()
        }else{
            (".design3").fadeIn()
            $("#pic3").fadeOut()
        }

    });
    
};

let showImg =()=>{
    $(".pic").hide();
    $(".design").click(function(){
        $("#pic2").toggle();
    })
    $(".design").click(function(){
        $("#pic1").toggle();
    })
}

