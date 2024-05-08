$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  // 创建动画的函数
  function createScene(className, delay) {
    return new ScrollMagic.Scene({
      triggerElement: "#intro-text", // 触发元素的选择器
      triggerHook: 0.5 // 触发位置，0.5 表示元素中间位置
    })
      .on("enter", function (event) { // 当进入场景时执行的操作
        // 延迟播放动画
        setTimeout(function () {
          // 播放动画
          $('.' + className).addClass('play');
        }, delay);
      })
      .addTo(controller); // 将场景添加到控制器中
  }

  // 使用循环创建多个动画场景
  createScene('welcome1', 0);
  createScene('welcome2', 0);
  createScene('welcome3', 3000);
  createScene('welcome4', 3000);
  createScene('welcome5', 3000);
  createScene('welcome6', 3000);
  createScene('welcome7', 3000);
  createScene('welcome8', 3000);
  createScene('welcome9', 3000);
  createScene('welcome10', 3000);
});


//tiktok视频
$(document).ready(function () {
  var videoboxHeight = $(".video-background").height();
  var tiktoktextHeight = $("#tiktok-text").height();
  var tiktokfixedHeight = tiktoktextHeight + videoboxHeight;

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: ".video-background",
    triggerHook: 0,
    duration: tiktokfixedHeight
  })
    .setPin(".video-background")
    .addTo(controller);
})


$(document).ready(function () {
  // 设置每个图表的固定高度和切换触发点
  var fixedElementHeights = [
    // $("#fixed-element-0").height() * 2,
    // $("#fixed-element-1").height() * 1.5,
    // $("#fixed-element-2").height()
    $(".emoji-text").height() * 1.2,
    $(".word-text").height() * 1.2,
    $(".go-text").height() * 1.4
  ];
  var switchPoints = [
    fixedElementHeights[0],
    fixedElementHeights[1],
    fixedElementHeights[2]
  ];

  // 初始化图表状态
  // var currentChartIndex = 0;

  // 监听滚动事件
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    // 根据滚动位置切换图表
    for (var i = 0; i < switchPoints.length; i++) {
      if (scrollTop >= switchPoints[i]) {
        currentChartIndex = i + 1;
      }
    }

    // 更新图表状态
    $(".fixed-element").removeClass('active');
    $("#fixed-element-" + currentChartIndex).addClass('active');

    // 如果当前图表已经是最后一个，则隐藏所有图表
    if (currentChartIndex === switchPoints.length) {
      $(".fixed-element").removeClass('active');
    }
  });

  // 设置每个图表的固定效果
  for (var i = 0; i < fixedElementHeights.length; i++) {
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#fixed-element-" + i,
      triggerHook: 0.1,
      duration: fixedElementHeights[i]
    })
      .setPin("#fixed-element-" + i)
      .addTo(controller);
  }
});


