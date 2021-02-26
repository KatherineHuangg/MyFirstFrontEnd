
$(document).ready(function() {
    $.getJSON("https://recruit.ainimal.io/friend_list", "", function (json) {
        var a='';
        for(i=0;i<8;i++){
            if(json[i].animal == '1')
                a += "<img class='img' src='https://attach.setn.com/newsimages/2019/07/29/2044676-XXL.jpg'>";
                //$('.animal').append("<img src='https://attach.setn.com/newsimages/2019/07/29/2044676-XXL.jpg'>");
            else if(json[i].animal == '3')
                a += "<img class='img' src='http://ipets.tw/wp-content/uploads/2020/04/701-1-1000x730.jpeg'>";
                //$('.animal').append("<img src='http://ipets.tw/wp-content/uploads/2020/04/701-1-1000x730.jpeg'>");
            else if(json[i].animal == '2')
                a += "<img class='img' src='https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'>";
                //$('.animal').append("<img src='https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'>");
                
            a += "<div class='data'>";
            $.each(json[i], function(index, value){
                if((index != 'animal') && (index != 'gender') && (index != 'type') && (index != 'friended_at') && (index != 'last_message_timestamp') && (index != 'gmail'))
                    a += "<p>" + index + " : " + value + "</p>";
                else if(index == 'last_message_timestamp'){
                    a += "<p class='time'>" + value + "</p>";
                }    
                else if(index == 'type'){
                    for(j=0;j<value;j++){
                        a += "<img class='star' src='images/—Pngtree—cute stars_401098.png'>";
                    }
                }
                else if(index == 'gmail'){
                    a += "<img class=mail src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'>" + " : " + value;
                }
            });

            a += "</div><br>";
            $('.animal').append(a);
            a='';//
        }
    });   
});
