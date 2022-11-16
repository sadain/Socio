$( document ).ready(function() {        
   
  var chatMessages = [{
    name: "ms1",
    msg: "Who are you?",
    delay: 300,
    align: "right",
  },
  {
    name: "ms2",
    msg: "Hi there! I was looking for aface mask for wrinkles",
    delay: 300,
    align: "left",
  },
  {
    name: "ms3",
    msg: "Hi Neha, welcome to Cybot! What kind of skin do you have?",
    delay: 300,
    align: "right",
  },
  {
    name: "ms4",
    msg: "Dry",
    delay: 300,
    align: "left",
  },
  {
    name: "ms5",
    msg: "Oily",
    delay: 300,
    align: "right",
  },
  {
    name: "ms6",
    msg: "Normal",
    delay: 300,
    align: "left",
  },
  {
    name: "ms7",
    msg: "Why? Because there is no solution out there to help students",
    delay: 1000,
    align: "left",
  },
  {
    name: "ms8",
    msg: "I have dry skin and want a mask for weekly use",
    delay: 1000,
    align: "left",
  },
  {
    name: "ms9",
    msg: "Ok Neha. Here are some great anti-wrinkle face masks that work well with dry skin",
    delay: 1000,
    align: "right",
  },
  {
    name: "ms10",
    msg: "We understand the needs of individual student.",
    delay: 1000,
    align: "left",
  },
  {
    name: "ms11",
    msg: "<img src='/static/contents/images/pro-1.png'>",
    delay: 1000,
    align: "right",
  },
  {
    name: "ms12",
    msg: "Somthing else or more options",
    delay: 1000,
    align: "left",
  },
  {
    name: "ms14",
    msg: "<img src='/static/contents/images/pro-2.png'>",
    delay: 1000,
    align: "right",
  },
  {
    name: "ms15",
    msg: "<img src='/static/contents/images/smily.png'> Thanks!",
    delay: 1000,
    align: "left",
  },
  {
    name: "ms16",
    msg: "You are welcome! Yes, check out!",
    delay: 1000,
    align: "right",
  }
                     ];
  var chatDelay = 0;

  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  $.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });
 });