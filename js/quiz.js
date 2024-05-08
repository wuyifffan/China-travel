answers = []; // 保存用户选择的答案

const cities = [
  { name: "北京", history: 100.00, variety: 88.63, mountain: 100.00, beach: 0.00, bioscape: 90.00, river: 80.00, acid: 78.42, sweet: 90.91, salty: 80.72, spicy: 54.96, popularity: 10000.00, transport: 100.00, accommodation: 1.00 },
  { name: "长春", history: 41.18, variety: 19.38, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 26.67, acid: 80.74, sweet: 58.18, salty: 93.98, spicy: 58.02, popularity: 1.00, transport: 22.66, accommodation: 42.01 },
  { name: "长沙", history: 41.18, variety: 35.84, mountain: 53.85, beach: 0.00, bioscape: 30.00, river: 6.67, acid: 64.5, sweet: 67.88, salty: 96.79, spicy: 99.24, popularity: 1.00, transport: 41.53, accommodation: 40.63 },
  { name: "成都", history: 23.53, variety: 68.44, mountain: 61.54, beach: 0.00, bioscape: 100.00, river: 46.67, acid: 85.38, sweet: 55.15, salty: 93.57, spicy: 73.28, popularity: 10000.00, transport: 90.21, accommodation: 21.31 },
  { name: "大连", history: 0.00, variety: 21.38, mountain: 23.08, beach: 100.00, bioscape: 10.00, river: 0.00, acid: 78.65, sweet: 65.45, salty: 92.37, spicy: 55.73, popularity: 1.00, transport: 24.80, accommodation: 40.14 },
  { name: "东莞", history: 23.53, variety: 29.18, mountain: 15.38, beach: 0.00, bioscape: 10.00, river: 13.33, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 1.00, transport: 24.33, accommodation: 44.51 },
  { name: "福州", history: 17.65, variety: 22.45, mountain: 61.54, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 1.00, transport: 29.80, accommodation: 26.40 },
  { name: "广州", history: 64.71, variety: 59.47, mountain: 38.46, beach: 0.00, bioscape: 60.00, river: 0.00, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 10000.00, transport: 86.83, accommodation: 8.94 },
  { name: "桂林", history: 29.41, variety: 10.60, mountain: 100.00, beach: 0.00, bioscape: 10.00, river: 73.33, acid: 75.17, sweet: 86.06, salty: 87.55, spicy: 73.28, popularity: 10000.00, transport: 21.48, accommodation: 65.29 },
  { name: "贵阳", history: 23.53, variety: 15.06, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 13.33, acid: 86.54, sweet: 40, salty: 100, spicy: 80.92, popularity: 1.00, transport: 39.02, accommodation: 47.07 },
  { name: "哈尔滨", history: 5.88, variety: 22.64, mountain: 38.46, beach: 100.00, bioscape: 60.00, river: 0.00, acid: 77.73, sweet: 61.21, salty: 92.77, spicy: 51.91, popularity: 1.00, transport: 31.20, accommodation: 28.06 },
  { name: "海口", history: 0.00, variety: 10.69, mountain: 7.69, beach: 100.00, bioscape: 10.00, river: 0.00, acid: 77.73, sweet: 67.27, salty: 92.77, spicy: 77.86, popularity: 1.00, transport: 25.16, accommodation: 55.54 },
  { name: "杭州", history: 58.82, variety: 53.43, mountain: 84.62, beach: 0.00, bioscape: 50.00, river: 60.00, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 63.33, accommodation: 16.55 },
  { name: "合肥", history: 52.94, variety: 29.52, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 6.67, acid: 89.1, sweet: 80, salty: 74.7, spicy: 55.73, popularity: 1.00, transport: 26.53, accommodation: 46.94 },
  { name: "呼和浩特", history: 35.29, variety: 11.78, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 20.00, acid: 79.58, sweet: 62.42, salty: 91.16, spicy: 65.65, popularity: 1.00, transport: 18.50, accommodation: 78.13 },
  { name: "黄山", history: 35.29, variety: 7.91, mountain: 76.92, beach: 0.00, bioscape: 0.00, river: 26.67, acid: 89.1, sweet: 80, salty: 74.7, spicy: 55.73, popularity: 10000.00, transport: 11.68, accommodation: 43.67 },
  { name: "济南", history: 17.65, variety: 26.91, mountain: 15.38, beach: 0.00, bioscape: 40.00, river: 26.67, acid: 85.85, sweet: 62.42, salty: 85.54, spicy: 59.54, popularity: 1.00, transport: 37.56, accommodation: 21.64 },
  { name: "昆明", history: 17.65, variety: 26.16, mountain: 53.85, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 78.42, sweet: 60, salty: 85.94, spicy: 98.47, popularity: 1.00, transport: 54.91, accommodation: 31.76 },
  { name: "拉萨", history: 29.41, variety: 3.58, mountain: 0.00, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 77.49, sweet: 50.3, salty: 89.56, spicy: 77.86, popularity: 1.00, transport: 8.45, accommodation: 52.24 },
  { name: "兰州", history: 17.65, variety: 11.66, mountain: 38.46, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 88.86, sweet: 67.27, salty: 89.56, spicy: 72.52, popularity: 1.00, transport: 24.79, accommodation: 28.09 },
  { name: "丽江", history: 17.65, variety: 3.92, mountain: 38.46, beach: 0.00, bioscape: 10.00, river: 13.33, acid: 78.42, sweet: 60, salty: 85.94, spicy: 98.47, popularity: 1.00, transport: 11.01, accommodation: 59.56 },
  { name: "洛阳", history: 35.29, variety: 17.47, mountain: 100.00, beach: 0.00, bioscape: 40.00, river: 6.67, acid: 85.15, sweet: 72.12, salty: 88.76, spicy: 73.28, popularity: 1.00, transport: 12.61, accommodation: 40.63 },
  { name: "南昌", history: 58.82, variety: 17.99, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 75.64, sweet: 70.3, salty: 91.97, spicy: 83.21, popularity: 1.00, transport: 22.22, accommodation: 75.20 },
  { name: "南京", history: 76.47, variety: 37.51, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 26.67, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 47.44, accommodation: 14.01 },
  { name: "南宁", history: 11.76, variety: 18.98, mountain: 30.77, beach: 0.00, bioscape: 170.00, river: 33.33, acid: 75.17, sweet: 86.06, salty: 87.55, spicy: 73.28, popularity: 1.00, transport: 30.78, accommodation: 74.66 },
  { name: "宁波", history: 64.71, variety: 32.94, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 6.67, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 23.08, accommodation: 35.80 },
  { name: "秦皇岛", history: 17.65, variety: 6.04, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 84.69, sweet: 66.06, salty: 88.76, spicy: 63.36, popularity: 1.00, transport: 7.55, accommodation: 44.38 },
  { name: "青岛", history: 11.76, variety: 36.26, mountain: 53.85, beach: 100.00, bioscape: 40.00, river: 6.67, acid: 85.85, sweet: 62.42, salty: 85.54, spicy: 59.54, popularity: 1.00, transport: 39.33, accommodation: 26.85 },
  { name: "泉州", history: 41.18, variety: 19.78, mountain: 53.85, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 1.00, transport: 17.36, accommodation: 56.07 },
  { name: "三亚", history: 0.00, variety: 5.50, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 77.73, sweet: 67.27, salty: 92.77, spicy: 77.86, popularity: 1.00, transport: 19.98, accommodation: 24.20 },
  { name: "上海", history: 88.24, variety: 100.00, mountain: 7.69, beach: 100.00, bioscape: 100.00, river: 66.67, acid: 93.04, sweet: 76.36, salty: 83.13, spicy: 58.78, popularity: 10000.00, transport: 90.20, accommodation: 1.36 },
  { name: "沈阳", history: 35.29, variety: 25.47, mountain: 15.38, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 78.65, sweet: 65.45, salty: 92.37, spicy: 55.73, popularity: 1.00, transport: 31.98, accommodation: 45.17 },
  { name: "深圳", history: 0.00, variety: 58.63, mountain: 0.00, beach: 0.00, bioscape: 60.00, river: 6.67, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 10000.00, transport: 61.73, accommodation: 16.66 },
  { name: "石家庄", history: 23.53, variety: 21.74, mountain: 100.00, beach: 0.00, bioscape: 0.00, river: 13.33, acid: 84.69, sweet: 66.06, salty: 88.76, spicy: 63.36, popularity: 1.00, transport: 24.62, accommodation: 41.40 },
  { name: "苏州", history: 70.59, variety: 43.77, mountain: 46.15, beach: 0.00, bioscape: 40.00, river: 80.00, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 30.72, accommodation: 35.75 },
  { name: "太原", history: 5.88, variety: 16.19, mountain: 15.38, beach: 0.00, bioscape: 30.00, river: 6.67, acid: 100, sweet: 57.58, salty: 93.98, spicy: 67.94, popularity: 1.00, transport: 23.94, accommodation: 29.54 },
  { name: "天津", history: 52.94, variety: 35.49, mountain: 38.46, beach: 0.00, bioscape: 20.00, river: 33.33, acid: 76.1, sweet: 69.7, salty: 91.16, spicy: 59.54, popularity: 1.00, transport: 38.75, accommodation: 20.85 },
  { name: "温州", history: 17.65, variety: 25.38, mountain: 61.54, beach: 100.00, bioscape: 0.00, river: 33.33, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 26.74, accommodation: 36.59 },
  { name: "武汉", history: 41.18, variety: 47.30, mountain: 23.08, beach: 0.00, bioscape: 30.00, river: 13.33, acid: 80.28, sweet: 64.85, salty: 93.57, spicy: 100, popularity: 10000.00, transport: 51.01, accommodation: 34.07 },
  { name: "乌鲁木齐", history: 5.88, variety: 8.00, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 0.00, acid: 87.47, sweet: 62.42, salty: 92.37, spicy: 75.57, popularity: 1.00, transport: 21.99, accommodation: 41.71 },
  { name: "无锡", history: 100.00, variety: 27.17, mountain: 30.77, beach: 0.00, bioscape: 30.00, river: 33.33, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 23.91, accommodation: 35.39 },
  { name: "西安", history: 100.00, variety: 45.02, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 26.67, acid: 60.56, sweet: 44.24, salty: 97.19, spicy: 80.15, popularity: 10000.00, transport: 52.50, accommodation: 39.24 },
  { name: "西宁", history: 17.65, variety: 5.90, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 0.00, acid: 87.7, sweet: 61.82, salty: 92.37, spicy: 74.81, popularity: 1.00, transport: 2.21, accommodation: 48.81 },
  { name: "厦门", history: 5.88, variety: 20.26, mountain: 15.38, beach: 100.00, bioscape: 30.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 10000.00, transport: 40.52, accommodation: 36.63 },
  { name: "宜昌", history: 23.53, variety: 8.22, mountain: 69.23, beach: 0.00, bioscape: 0.00, river: 100.00, acid: 80.28, sweet: 64.85, salty: 93.57, spicy: 100, popularity: 1.00, transport: 15.46, accommodation: 63.33 },
  { name: "银川", history: 17.65, variety: 9.46, mountain: 23.08, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 87.24, sweet: 72.73, salty: 87.95, spicy: 67.18, popularity: 1.00, transport: 20.29, accommodation: 67.91 },
  { name: "张家界", history: 11.76, variety: 3.55, mountain: 46.15, beach: 0.00, bioscape: 0.00, river: 6.67, acid: 64.5, sweet: 67.88, salty: 96.79, spicy: 99.24, popularity: 1.00, transport: 7.63, accommodation: 100.00 },
  { name: "郑州", history: 41.18, variety: 34.59, mountain: 23.08, beach: 0.00, bioscape: 10.00, river: 0.00, acid: 85.15, sweet: 72.12, salty: 88.76, spicy: 73.28, popularity: 1.00, transport: 41.29, accommodation: 34.01 },
  { name: "重庆", history: 100.00, variety: 60.61, mountain: 100.00, beach: 0.00, bioscape: 100.00, river: 100.00, acid: 81.67, sweet: 84.85, salty: 86.35, spicy: 62.6, popularity: 10000.00, transport: 75.08, accommodation: 45.32 },
  { name: "珠海", history: 5.88, variety: 11.00, mountain: 0.00, beach: 100.00, bioscape: 0.00, river: 0.00, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 21.17, accommodation: 20.00 },
];


window.onload = function () {
  showQuestions(1);
}

function startTest() {
  answers = [];
  document.getElementById("poster-card").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  showQuestions(1);
}

function selectOption(optionId, questionNumber) {
  var value = parseFloat(document.getElementById('option' + optionId).value);
  answers[questionNumber - 1] = value;
}
function showQuestions(page) {
  var questions = document.querySelectorAll('.question');
  questions.forEach(function (question) {
    var questionPage = parseInt(question.getAttribute('data-page'));
    if (questionPage === page) {
      question.style.display = 'block';
    } else {
      question.style.display = 'none';
    }
  });

  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var submitBtn = document.getElementById('submit-btn');

  if (page === 1) {
    prevBtn.style.display = 'none'; // 隐藏上一页按钮
  } else {
    prevBtn.style.display = 'block'; // 显示上一页按钮
  }

  if (page === 3) {
    nextBtn.style.display = 'none'; // 隐藏下一页按钮
    submitBtn.style.display = 'block'; // 显示提交按钮
  } else {
    nextBtn.style.display = 'block'; // 显示下一页按钮
    submitBtn.style.display = 'none'; // 隐藏提交按钮
  }
}

function nextPage() {
  var currentPage = getCurrentPage();
  if (currentPage < 3) {
    currentPage++;
    showQuestions(currentPage);
  }
}

function prevPage() {
  var currentPage = getCurrentPage();
  if (currentPage > 1) {
    currentPage--;
    showQuestions(currentPage);
  }
}

function getCurrentPage() {
  var currentQuestion = document.querySelector('.question[style="display: block;"]');
  return parseInt(currentQuestion.getAttribute('data-page'));
}

// 本文件中的计算代码由AI辅助生成
function calculateRecommendation() {
  var hasAnswer = answers.some(answer => answer !== undefined);
  if (!hasAnswer) {
    alert("请先选择所有问题的答案！");
    return;
  }
  var unansweredQuestions = answers.filter(answer => answer === undefined);
  if (unansweredQuestions.length > 0) {
    alert("请先选择所有问题的答案！");
    return;
  }

  const scores = cities.map(city => ({
    name: city.name,
    score: (
      city.history * answers[0] +
      city.variety * answers[1] +
      city.mountain * answers[2] +
      city.beach * answers[3] +
      city.bioscape * answers[4] +
      city.river * answers[5] +
      city.acid * answers[6] +
      city.sweet * answers[7] +
      city.salty * answers[8] +
      city.spicy * answers[9] +
      city.popularity * answers[10] +
      city.transport * answers[11] +
      city.accommodation * answers[12]
    )
  }));


  console.log("所有城市的得分结果：", scores);

  scores.sort((a, b) => b.score - a.score);

  const topThree = scores.slice(0, 3);

  // 显示得分最高的三个城市及其描述和图片
  const recommendationText = topThree.map((city, index) => {
    const cityDescription = getCityDescription(city.name);
    return `${index + 1}. ${city.name}:<br>${cityDescription}`;
  }).join("<br><br>");

  document.getElementById("recommendation-text").innerHTML = `推荐您去以下城市旅游：<br><br>${recommendationText}`;

  // 隐藏问题卡片，显示推荐结果卡片
  document.getElementById("question-container").style.display = "none";
  document.getElementById("recommendation").style.display = "block";
}

// 获取城市描述和图片
function getCityDescription(cityName) {
  // 这里可以根据城市名称获取对应的描述和图片链接，这里只是示例
  const descriptions = {
    "北京": {
          description: "作为中国的首都，北京融合了古今之美。在这里，你可以欣赏故宫的红墙金瓦，感受天安门广场的宏伟。<br>香脆皮嫩的北京烤鸭和酱香浓郁的炸酱面，都让人回味无穷。<br>更多城市信息请查看：https://www.trip.com/travel-guide/destination/beijing-1/",
          image: "images/Beijing.png"
        },
    "长春": {
          description: "长春的伪满皇宫让你一窥历史的风云变幻，净月潭的湖光山色则让人心旷神怡。<br>别忘了尝尝锅包肉、雪衣豆沙，它们都是长春的特色美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/changchun-216",
          image: "images/Changchun.png"
        },
    "长沙": {
              description: "在长沙，你可以漫步橘子洲头，欣赏湘江的美景，岳麓书院则让你感受到浓厚的文化氛围。<br>记得在晚上出门逛逛，外酥里嫩的臭豆腐、香甜软糯的糖油粑粑是长沙夜市的必备。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/changsha-148",
              image: "images/Changsha.png"
            },
    "成都": {
              description: "宽窄巷子可以带你穿越回老成都，熊猫基地则是萌态可掬的熊猫们的家。<br>在这里，你可以尽情品尝麻辣火锅和串串香，感受成都的美食魅力。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/chengdu-104",
              image: "images/Chengdu.png"
            },
    "大连": {
              description: "大连的星海广场夜景璀璨夺目，老虎滩海洋公园则充满趣味。<br>海鲜大餐是大连的一大特色美味，特别是烤鱿鱼，香气四溢，让人垂涎欲滴。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/dalian-4",
              image: "images/Dalian.png"
            },
    "东莞": {
              description: "来到东莞，你可以感受岭南的绿意盎然，品尝甜美的荔枝，也可以去参观虎门炮台和可园等著名历史景点。<br>这里的粿条汤和烧鹅也是不可错过的美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/dongguan-212",
              image: "images/Dongguan.png"
            },
    "福州": {
              description: "福州的三坊七巷充满古色古香，鼓山则风景秀美壮丽，<br>汤汁浓郁的佛跳墙和皮薄馅足的肉燕极具地方特色，是当地的美食代表。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/fuzhou-164",
              image: "images/Fuzhou.png"
            },
    "广州": {
          description: "广州的珠江夜游让你领略到南国的繁华夜景，广州塔则耸立云端，气势磅礴。<br>从早茶点心、清润糖水到酥脆烧腊……广州的美食也绝对不会让你失望。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/guangzhou-152",
          image: "images/Guangzhou.png"
        },
    "桂林": {
              description: "桂林的山水风光被誉为甲天下，漓江的美景更是如画般美丽。<br>别忘了品尝桂林米粉和啤酒鱼，米粉爽滑可口，啤酒鱼鲜美无比，有着独特的桂林风味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/guilin-28",
              image: "images/Guilin.png"
            },
    "贵阳": {
              description: "贵阳的黔灵山秀美壮丽，青岩古镇则古朴典雅。<br>在这里，你可以品尝到酸汤鱼和豆腐圆子等地道美食。酸汤鱼酸辣可口，豆腐圆子外酥里嫩，让人回味无穷。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/guiyang-33",
              image: "images/Guiyang.png"
            },
    "哈尔滨": {
              description: "哈尔滨也被称为“冰城”，其中冰雪大世界的冰雕雪景最为著名，中央大街、太阳岛也是哈尔滨值得一去景点。<br>再来一顿香醇浓郁的铁锅炖，你会倍感温暖。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/harbin-151",
              image: "images/Harbin.png"
            },
    "海口": {
              description: "在海口，你可以尽情享受热带海滨城市的风情，体验阳光沙滩的悠闲乐趣，<br>清补凉、椰子鸡等是不可错过的美味佳肴，还能帮助你清凉解暑。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/haikou-37/",
              image: "images/Haikou.png"
            },
    "杭州": {
              description: "杭州被誉为“人间天堂”，你可以在这里观赏如诗如画的西湖美景，来到灵隐寺感受佛教文化氛围。<br>西湖醋鱼、龙井虾仁鲜美无比，是杭州一绝。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/hangzhou-14",
              image: "images/Hangzhou.png"
            },
    "合肥": {
              description: "合肥是科教之城，也极具文化底蕴，科大讯飞和安徽博物院都值得一游。<br>你还可以在这里品尝到臭鳜鱼、毛豆腐等独具风味的特色美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/hefei-196",
              image: "images/Hefei.png"
            },
    "呼和浩特": {
              description: "在呼和浩特，你可以一览草原的辽阔，在成吉思汗陵中见证英雄的历史。<br>传统草原美食手抓肉、羊肉火锅等，在这里吃到的则最为正宗。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/hohhot-156/",
              image: "images/Hohhot.png"
            },
    "黄山": {
              description: "来到这里，最不可错过的是被誉为“天下第一奇山”的黄山，这里的奇峰怪石和云海日出让人流连忘返。<br>徽州毛豆腐、黄山烧饼也很值得一尝。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/huangshan-120061",
              image: "images/Huangshan.png"
            },
    "济南": {
              description: "济南有七十二名泉，其中趵突泉泉水甘甜，最负盛名，大明湖、千佛山也是济南风景和文化的名片。<br>从煎饼到糖醋鲤鱼，你还可以在济南品味到经典的山东风味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/jinan-128/",
              image: "images/Jinan.png"
            },
    "昆明": {
              description: "昆明是一座春城，这里四季如春，鲜花茂盛。在景点中，石林奇观让人叹为观止，环境优美的滇池则让人心旷神怡。<br>过桥米线、玫瑰米凉虾是昆明的经典美味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/kunming-29/",
              image: "images/Kunming.png"
            },
    "拉萨": {
              description: "在拉萨，你可以在布达拉宫、大昭寺领略到神圣庄严的藏族文化，<br>藏族人的传统美食——酥油茶、糌粑……也一定会给你带来新奇的体验。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/lhasa-36/",
              image: "images/Lhasa.png"
            },
    "兰州": {
              description: "提到兰州，兰州拉面是它的金字招牌，这里的牛肉面和烤肉也独具特色。<br>你还可以去看看白塔山和黄河铁桥，欣赏兰州的美景，感受这座城市的历史底蕴。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/lanzhou-231/",
              image: "images/Lanzhou.png"
            },
    "丽江": {
              description: "丽江是一个特色鲜明的城市，你可以在玉龙雪山欣赏这里的自然风光，也可以漫步古城之中，体会它的风情万种。<br>鸡豆凉粉、腊排骨火锅则是丽江的特色佳肴。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/lijiang-32/",
              image: "images/Lijiang.png"
            },
    "洛阳": {
              description: "在洛阳，你可以去看看雄伟的龙门石窟佛像，也可以在白马寺感受到浓厚的佛教文化氛围。<br>再记得去尝尝洛阳水席和牡丹饼，这里的美食也不会让你失望。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/luoyang-198/",
              image: "images/Luoyang.png"
            },
    "南昌": {
              description: "南昌有着丰富的红色文化，古色古香的滕王阁和风景独好的鄱阳湖则代表着这座城市的古朴和秀美。<br>炒粉、瓦罐汤是南昌的特色美食，非常值得品尝。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/nanchang-175/",
              image: "images/Nanchang.png"
            },
    "南京": {
              description: "南京是一座历史与现代交融的城市，中山陵庄严肃穆，夫子庙则繁华热闹。<br>南京的美食也很有名，盐水鸭、鸭血粉丝汤是其中的代表。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/nanjing-9/",
              image: "images/Nanjing.png"
            },
    "南宁": {
              description: "在山水相依的南宁，你可以体验到极致的自然之美，青秀山、大明山和南湖公园都是旅行休闲的好去处。<br>你还可以品尝到酸辣可口的老友粉和柠檬鸭，它们别有一番风味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/nanning-166/",
              image: "images/Nanning.png"
            },
    "宁波": {
              description: "来到宁波旅游，藏书丰富的天一阁和充满异国情调的老外滩都很值得一去。<br>另外，这里的汤圆和糟卤则口感鲜美，是不可错过的特色美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/ningbo-83/",
              image: "images/Ningbo.png"
            },
    "秦皇岛": {
              description: "秦皇岛是著名的海滨之城，你可以在这里观赏到壮观的海上日出，挑战著名的山海关长城，<br>离开之前别忘了来一顿鲜美可口的海鲜大咖。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/qinhuangdao-132",
              image: "images/Qinhuangdao.png"
            },
    "青岛": {
              description: "青岛有着迷人的海滨风光和浓郁的欧洲风情，栈桥和八大关都是极具代表性的景点，<br>醇香的啤酒和海鲜烧烤在这里则是最佳美食搭档。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/qingdao-5/",
              image: "images/Qingdao.png"
            },
    "泉州": {
              description: "泉州的开元寺钟声悠扬，清源山风景如画，你还可以在这里体验到正火热的传统簪花文化。<br>土笋冻、卤鸡爪则是泉州美食的代表。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/quanzhou-243",
              image: "images/Quanzhou.png"
            },
    "三亚": {
              description: "三亚是一个热带海滨度假胜地，亚龙湾和南山文化旅游区都会给你带来绝佳的体验，<br>记得搭配鲜美可口的海鲜大餐和椰子饭，你一定不会感到失望。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/sanya-61",
              image: "images/Sanya.png"
            },
    "上海": {
              description: "上海繁华与典雅并存，外滩的夜景璀璨，城隍庙则充满了老上海风情。<br>你还可以品尝到皮薄馅足的小笼包和浓郁鲜美的蟹黄面，它们是上海的特色。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/shanghai-2",
              image: "images/Shanghai.png"
            },
    "沈阳": {
              description: "在沈阳，你可以去看看具有历史特色的沈阳故宫，漫步在风景秀丽的北陵公园。<br>沈阳的美食也极具特色，炸鸡架和烤冷面香气四溢，让人垂涎欲滴。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/shenyang-155",
              image: "images/Shenyang.png"
            },
    "深圳": {
              description: "深圳摩天大楼林立，是一座现代化都市，世界之窗、东部华侨城是深圳的特色景区。<br>广式点心、海鲜粥味道鲜美、口感丰富，是深圳的美食代表。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/shenzhen-26",
              image: "images/Shenzhen.png"
            },
    "石家庄": {
              description: "石家庄有着风景秀美的抱犊寨和充满历史气息的正定古城。<br>金凤扒鸡鲜嫩多汁，驴肉火烧香酥可口，是来到石家庄不容错过的美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/shijiazhuang-199",
              image: "images/Shijiazhuang.png"
            },
    "苏州": {
              description: "苏州是江南水乡的代表，一座园林之城，拙政园、留园是其中的佼佼者。<br>松鼠桂鱼、奥灶面则是苏州的特色美食，有着独特的滋味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/suzhou-11",
              image: "images/Suzhou.png"
            },
    "太原": {
              description: "太原有着深厚的文化底蕴，双塔寺、晋祠、天龙山石窟是太原景点的代表。<br>这里的面食最为有名，过油肉、太原头脑等当地美食也让人回味无穷。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/taiyuan-167",
              image: "images/Taiyuan.png"
            },
    "天津": {
              description: "来到天津，你可以坐上天津之眼俯瞰海河，也可以在意式风情街感受异国情调。<br>狗不理包子、十八街麻花都是天津的特色小吃，非常值得品尝。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/tianjin-154",
              image: "images/Tianjin.png"
            },
    "温州": {
              description: "温州有着繁荣的商贸和秀美的风光，这里气候温润，雁荡山、楠溪江、江心屿等景区都非常适合旅行游玩，<br>温州鱼丸、糯米饭则是温州的美食名片。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/wenzhou-153",
              image: "images/Wenzhou.png"
            },
    "武汉": {
              description: "武汉的黄鹤楼名扬四海，东湖也是休闲好去处。<br>你可以在这里品尝到有名的热干面和香辣可口的鸭脖，还有更多美食等待你的发掘。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/wuhan-145",
              image: "images/Wuhan.png"
            },
    "乌鲁木齐": {
              description: "乌鲁木齐是西域之都，这里既有如画般的天山天池美景，也有充满异域风情的国际大巴扎。<br>这里的烤全羊、手抓饭美味诱人，是最为正宗的西域特色美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/urumqi-117/",
              image: "images/Urumqi.png"
            },
    "无锡": {
              description: "来到无锡，最不能错过的当属太湖和鼋头渚，它们将水乡的柔情和山水的壮阔和谐统一，别有韵味，灵山大佛也是有名的景区。<br>小笼包、糖醋排骨则是当地美食的代表。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/wuxi-10/",
              image: "images/Wuxi.png"
            },
    "西安": {
              description: "西安是有名的十三朝古都，兵马俑、大雁塔和钟楼都在诉说着这座城市繁华的历史故事。<br>西安也是碳水的天堂，肉夹馍、羊肉泡馍香醇美味，是这里的必吃美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/xi-an-7",
              image: "images/Xi'an.png"
            },
    "西宁": {
              description: "西宁是青藏高原上的一颗璀璨明珠，这里民族文化浓郁，自然风光秀丽，塔尔寺和周边的青海湖是其中的代表。<br>除了酸奶、酿皮等美食，你还能品尝到多种做法的羊肉，感受大西北的风味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/xining-237",
              image: "images/Xining.png"
            },
    "厦门": {
              description: "厦门被誉为海上花园，充满着浪漫和文艺气息，鼓浪屿、环岛路等是热门景点。<br>厦门也是一座美食之城，姜母鸭、沙茶面、海蛎饼都是不可错过的美味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/xiamen-21",
              image: "images/Xiamen.png"
            },
    "宜昌": {
              description: "来到宜昌，你可以观赏雄伟壮观的三峡大坝，感受夷陵老街的古朴和历史韵味，<br>当地的凉虾、萝卜饺子等美食都有着地道的风味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/yichang-313",
              image: "images/Yichang.png"
            },
    "银川": {
              description: "银川有“塞上江南”的美称，沙漠与绿洲并存，镇北堡西部影城、西夏王陵和贺兰山是银川的经典景点，<br>你还可以在这里品尝到美味诱人的羊肉粉、羊肉臊子面。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/yinchuan-239",
              image: "images/Yinchuan.png"
            },
    "张家界": {
              description: "张家界最著名的是它的山水自然风光。在张家界国家森林公园、天门山等景区，<br>你既可以感受到放松，也可以体验一些冒险，当地的土家菜也十分地道美味。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/zhangjiajie-23",
              image: "images/Zhangjiajie.png"
            },
    "郑州": {
              description: "郑州是一座中原名城，嵩山少林寺名扬四海，黄河游览区的风景也是一绝。<br>你还可以在这里品尝到胡辣汤、烩面等有名的郑州美食。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/zhengzhou-157",
              image: "images/Zhengzhou.png"
            },
    "重庆": {
              description: "重庆被誉为山城，有着独特的地貌和风光，洪崖洞、解放碑都是值得推荐的景点。<br>你还可以在这里品尝地道的麻辣火锅，感受重庆热情与活力。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/chongqing-158",
              image: "images/Chongqing.png"
            },
    "珠海": {
          description: "珠海海滨风光旖旎，渔女像、长隆海洋公园是当地的地标。<br>你还可以在这里尽情品尝珠海海鲜，感受海滨城市的浪漫与惬意。<br>更多城市信息请查看：https://us.trip.com/travel-guide/destination/zhuhai-27/",
          image: "images/Zhuhai.png"
        },
  };

  const cityInfo = descriptions[cityName];
  if (cityInfo) {
    return `
    <p>${cityInfo.description}</p>
    <img src="${cityInfo.image}" alt="${cityName}">
      
    `;
  } else {
    return `<p>暂无描述</p>`;
  }
}


// 重新开始测试的函数
function restartTest() {
  // 清空用户的答案
  answers = [];

  // 清除选中的选项样式
  var options = document.querySelectorAll('input[type="radio"]');
  options.forEach(function (option) {
    option.checked = false;
  });
  // 显示问题容器
  // 显示海报卡片
  document.getElementById("poster-card").style.display = "none";
  // 隐藏推荐结果卡片
  document.getElementById("recommendation").style.display = "none";
  // 显示问题容器，并且显示第一页的问题
  document.getElementById("question-container").style.display = "block";
  showQuestions(1);
}