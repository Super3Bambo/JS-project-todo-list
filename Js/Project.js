var ListName = function () {

    location.assign('project.html');
}

function hideShow(c) {

    var x = c.id;
    console.log(x);
    $("#"+x).css('display', 'none');
    
    $('#' + x + '+ #hiddeninput').slideToggle(700).css('display', 'block');
    $("textarea").focus();
    //console.log(c.id)
}

function showHide(c) {
    var x = c.id;
            console.log(x)

            $('#' + x).parent().siblings().css('display', 'block');

            $('#' + x).parent().slideUp(500);
}

function addNewList(c) {
    var x = c.id;
    console.log(x)
    $('#' + x).css('display', 'none');
    $('#' + x + "+ #listinput").fadeIn(700).css('display', 'block');

}

function Cancel(c) {
    var x = c.id;
    console.log(x)
    $('#' + x).parent().one().fadeOut(10);
    $('#addlist').fadeIn(1000);
    
}
var count = 0;
function cloneNewList() {
    var title = $('#input').val();

    if (!title == null || !title == '') {
        var newnode = document.getElementById('mainlist').cloneNode(true);
        newnode.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.id='s'+Math.floor(Math.random() * 100);

        newnode.removeAttribute('id')
        mynode=newnode.firstElementChild.nextElementSibling;
        while (mynode.lastElementChild) {
            mynode.removeChild(mynode.lastElementChild);}
       

        newnode.firstElementChild.nextElementSibling.nextElementSibling.id = 's'+Math.floor(Math.random() * 100);
        newnode.firstElementChild.innerHTML = title;

        
        newnode.lastElementChild.lastElementChild.id = 's'+Math.floor(Math.random() * 100)
            $(newnode).css("display","none");
        document.body.firstElementChild.nextElementSibling.nextElementSibling.
            firstElementChild.append(newnode);
            $(newnode).fadeIn(1000);
            
        $('#input').val('');
        count++;
        if (count >= 3) {
            var wid = document.getElementById('window_width');
            console.log(getComputedStyle(wid).width)
            wid.style.width = (parseInt(getComputedStyle(wid).width) + 250.0271) + 'px';
        }
    }

}
function addCard(c) {
    var x=c.id;
            var cardContent = $('#'+x).parent().siblings("#textarea").val();
            $('#'+x).parent().siblings("#textarea").focus();
            if(!cardContent==null || !cardContent==''){
            var newcard = document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.cloneNode(true);
            $(newcard).fadeIn(1000);
            newcard.id='s'+Math.floor(Math.random() * 100);
            var placetoappend=
            document.getElementById(x).parentNode.parentNode.previousElementSibling.previousElementSibling;

            placetoappend.append(newcard);
            newcard.firstElementChild.innerHTML+=cardContent;
            $('#'+x).parent().siblings("#textarea").val("");
        }
    }

function moveList(c){
    var x=c.id;
    $('#listssss').sortable({
        start:function(){
            $('.list_description').css("background-color","gray");
        },
        stop:function(){$('.list_description').css("background-color","purple");},
        revert: true
            });
            $( '#listssss' ).disableSelection();
}
function removeCard(c){
    $(c).parent().effect("shake",200);
            $(c).parent().fadeOut(500);
            setTimeout(function(){
                $(c).parent().remove();
            },1500);
}
function moveCard(c){
    $(".cardsss").sortable({
        connectWith: ".cardsss",
        revert: true
    });}

function update_card(c){
    var x=c.id;
     var cardContent =$('#'+x).parent().siblings("#textarea").val();
     if(!cardContent==null || !cardContent==''){
    $('#'+x).parent().parent().prev().children().first().text(cardContent);
    $('#'+x).parent().parent().prev().css("display", "block");
    $('#'+x).parent().parent().css("display", "none")}
}
function cancel_update(c){
    var x=c.id;
    $("#"+x).parent().prev().css("display", "block");
    $("#"+x).parent().css("display", "none")
}



    function editCard(c){
        var butid= 's'+Math.floor(Math.random() * 100);
        var crossid='c'+Math.floor(Math.random() * 100);
            var x=c.id;
        $("#"+ x).css("display","none");
        
       var old= $(c).children().first().text();


        $('<div id="hiddeninput" class="hiddeninput" >'+'<textarea id="textarea">'+old+'</textarea>'+
        '<div id="butt">'+
                '<button id='+butid+' onclick="update_card(this)">Edit</button>'+
           ' </div>'+
            '<div id='+crossid+' class="cross" onclick="cancel_update(this)"> &#10006; </div>'+
            '</div>').insertAfter($("#"+ x));
        //$(c).children().first().css("display","block");///////////////////////////////

    }
    function goBack(){
        location.assign('Begin.html')
    }


var listnames=getcookie("listname");
document.getElementById('nameoflist').innerHTML=  listnames+" List " ;
