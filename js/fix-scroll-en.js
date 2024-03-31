//cover1
$(document).ready(function () {
  var actionHeight = $("#chap1").height();
  var actionfixedHeight = actionHeight * 0.5;

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#trend-cover",
    triggerHook: 0,
    duration: actionfixedHeight
  })
    .setPin("#trend-cover")
    .addTo(controller);
})

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY - 800;
  var image = document.querySelector('.scrolling-emoji');
  var scale = scrollPosition / 300; // 调整分母值以控制放大缩小速度
  image.style.transform = 'translateX(-260%) translateY(-50%) scale(' + scale + ')';
});

//打字机动画
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  // 创建第一个动画的场景
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome1').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome2').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome3').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome4').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene5 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome5').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene6 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome6').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene7 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome7').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene8 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome8').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene9 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome9').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中

  var scene10 = new ScrollMagic.Scene({
    triggerElement: ".intro-text", // 触发元素的选择器
    triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
  })
    .on("enter", function (event) { // 当进入场景时执行的操作
      // 播放动画
      $('.welcome10').addClass('play');
    })
    .addTo(controller); // 将场景添加到控制器中
});


//tiktok视频
$(document).ready(function () {
  var videoboxHeight = $("#video-box").height();
  var tiktoktextHeight = $("#tiktok-text").height();
  var tiktokfixedHeight = tiktoktextHeight + videoboxHeight;

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#video-box",
    triggerHook: 0,
    duration: tiktokfixedHeight
  })
    .setPin("#video-box")
    .addTo(controller);
})

//emoji词云
$(document).ready(function () {
  var fixedElementHeight = $("#fixed-element").height();
  var emojitextHeight = $("#emoji-text").height();
  var fixedHeight = emojitextHeight * 3 + fixedElementHeight * 2;

  $("#emojibox").css("padding-top", fixedElementHeight);


  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#emojibox",
    triggerHook: 0.1,
    duration: fixedHeight
  })
    .setPin("#emojibox")
    .addTo(controller);
})

$(document).ready(function () {
  var emojibox = $("#emojibox");
  var triggerOffset = emojibox.offset().top; // 获取emojibox的初始位置  
  var isFixed = false; // 用来判断是否已经固定  

  // 监听滚动事件  
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= triggerOffset) {
      // 当滚动到emojibox位置时，显示并添加active类  
      emojibox.addClass('active');

      // 稍后添加fixed类来固定位置  
      setTimeout(function () {
        emojibox.addClass('fixed');
        isFixed = true;
      }, 1000); // 等待动画完成  
    } else if (isFixed) {
      // 当滚动回上面时，如果已经是fixed状态，则移除fixed和active类  
      emojibox.removeClass('fixed active');
      isFixed = false;
    }
  });
});

//tiktok评论词云
$(document).ready(function () {
  var fixedWordHeight = $("#fixedword").height();
  var wordtextHeight = $("#word-text").height();
  var wordfixedHeight = wordtextHeight * 2.5 + fixedWordHeight * 2;

  // $("#wordbox").css("padding-top", wordfixedHeight);


  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#wordbox",
    triggerHook: 0.1,
    duration: wordfixedHeight
  })
    .setPin("#wordbox")
    .addTo(controller);
})

$(document).ready(function () {
  var wordbox = $("#wordbox");
  var triggerOffset = wordbox.offset().top;
  var isFixed = false; // 用来判断是否已经固定  

  // 监听滚动事件  
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= triggerOffset) {

      wordbox.addClass('active');

      // 稍后添加fixed类来固定位置  
      setTimeout(function () {
        wordbox.addClass('fixed');
        isFixed = true;
      }, 1000); // 等待动画完成  
    } else if (isFixed) {
      // 当滚动回上面时，如果已经是fixed状态，则移除fixed和active类  
      wordbox.removeClass('fixed active');
      isFixed = false;
    }
  });
});


//关键词共现
$(document).ready(function () {
  var fixedGoHeight = $("#fixed-go").height();
  var gotextHeight = $("#go-text").height();
  var gofixedHeight = gotextHeight * 2 + fixedGoHeight * 2;

  // $("#gobox").css("padding-top", fixedGoHeight);


  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#gobox",
    triggerHook: 0.1,
    duration: gofixedHeight
  })
    .setPin("#gobox")
    .addTo(controller);
})

$(document).ready(function () {
  var gobox = $("#gobox");
  var triggerOffset = gobox.offset().top; // 获取gobox的初始位置  
  var isFixed = false; // 用来判断是否已经固定  

  // 监听滚动事件  
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= triggerOffset) {
      // 当滚动到gobox位置时，显示并添加active类  
      gobox.addClass('active');

      // 稍后添加fixed类来固定位置  
      setTimeout(function () {
        gobox.addClass('fixed');
        isFixed = true;
      }, 1000); // 等待动画完成  
    } else if (isFixed) {
      // 当滚动回上面时，如果已经是fixed状态，则移除fixed和active类  
      gobox.removeClass('fixed active');
      isFixed = false;
    }
  });
});


//cover2
$(document).ready(function () {
  var actionHeight = $("#chap2").height();
  var actionfixedHeight = actionHeight * 0.5;

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#action-cover",
    triggerHook: 0,
    duration: actionfixedHeight
  })
    .setPin("#action-cover")
    .addTo(controller);
})

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY - 2400;
  var image = document.querySelector('.scrolling-fly');
  var chap2Width = document.querySelector('.chap2').offsetWidth / 6; // 获取 .chap2 图片的宽度
  var chap2WidthPercentage = (chap2Width / window.innerWidth) * 100;
  // 根据滚动位置计算放大缩小比例和左右移动距离
  var scale = -260 + scrollPosition / 50; // 调整分母值以控制放大缩小速度
  var moveDistancePercentage = -130 + (scrollPosition / 100);
  // 移动距离的百分比

  // 更新图片的样式
  image.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  image.style.left = 'calc(' + chap2WidthPercentage + '% + ' + moveDistancePercentage + '%)';
});


//cover3
$(document).ready(function () {
  var actionHeight = $("#chap3").height();
  var actionfixedHeight = actionHeight * 0.3;

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#recommend-cover",
    triggerHook: 0,
    duration: actionfixedHeight
  })
    .setPin("#recommend-cover")
    .addTo(controller);
})

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY - 4500;
  var image = document.querySelector('.scrolling-changcheng');
  var chap3Width = document.querySelector('.chap3').offsetWidth / 6;
  var chap3WidthPercentage = (chap3Width / window.innerWidth) * 100;
  var moveDistancePercentage = -185 + (scrollPosition / 100);

  image.style.left = 'calc(' + chap3WidthPercentage + '% + ' + moveDistancePercentage + '%)';
});

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY - 4500;
  var image = document.querySelector('.scrolling-bingmayong');
  var chap3Width = document.querySelector('.chap3').offsetWidth / 6;
  var chap3WidthPercentage = (chap3Width / window.innerWidth) * 100;
  var moveDistancePercentage = -195 + (scrollPosition / 100);
  image.style.right = 'calc(' + chap3WidthPercentage + '% + ' + moveDistancePercentage + '%)';
});

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY - 4500;
  var image = document.querySelector('.scrolling-xiongmao');
  var chap3Width = document.querySelector('.chap3').offsetWidth / 6;
  var chap3WidthPercentage = (chap3Width / window.innerWidth) * 100;
  var moveDistancePercentage = -190 + (scrollPosition / 100);
  image.style.bottom = 'calc(' + chap3WidthPercentage + '% + ' + moveDistancePercentage + '%)';
});



