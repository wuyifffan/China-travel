answers = []; // 保存用户选择的答案

const cities = [
  { name: "Beijing", history: 100.00, variety: 88.63, mountain: 100.00, beach: 0.00, bioscape: 90.00, river: 80.00, acid: 78.42, sweet: 90.91, salty: 80.72, spicy: 54.96, popularity: 10000.00, transport: 100.00, accommodation: 1.00 },
  { name: "Changchun", history: 41.18, variety: 19.38, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 26.67, acid: 80.74, sweet: 58.18, salty: 93.98, spicy: 58.02, popularity: 1.00, transport: 22.66, accommodation: 42.01 },
  { name: "Changsha", history: 41.18, variety: 35.84, mountain: 53.85, beach: 0.00, bioscape: 30.00, river: 6.67, acid: 64.5, sweet: 67.88, salty: 96.79, spicy: 99.24, popularity: 1.00, transport: 41.53, accommodation: 40.63 },
  { name: "Chengdu", history: 23.53, variety: 68.44, mountain: 61.54, beach: 0.00, bioscape: 100.00, river: 46.67, acid: 85.38, sweet: 55.15, salty: 93.57, spicy: 73.28, popularity: 10000.00, transport: 90.21, accommodation: 21.31 },
  { name: "Dalian", history: 0.00, variety: 21.38, mountain: 23.08, beach: 100.00, bioscape: 10.00, river: 0.00, acid: 78.65, sweet: 65.45, salty: 92.37, spicy: 55.73, popularity: 1.00, transport: 24.80, accommodation: 40.14 },
  { name: "Dongguan", history: 23.53, variety: 29.18, mountain: 15.38, beach: 0.00, bioscape: 10.00, river: 13.33, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 1.00, transport: 24.33, accommodation: 44.51 },
  { name: "Fuzhou", history: 17.65, variety: 22.45, mountain: 61.54, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 1.00, transport: 29.80, accommodation: 26.40 },
  { name: "Guangzhou", history: 64.71, variety: 59.47, mountain: 38.46, beach: 0.00, bioscape: 60.00, river: 0.00, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 10000.00, transport: 86.83, accommodation: 8.94 },
  { name: "Guilin", history: 29.41, variety: 10.60, mountain: 100.00, beach: 0.00, bioscape: 10.00, river: 73.33, acid: 75.17, sweet: 86.06, salty: 87.55, spicy: 73.28, popularity: 10000.00, transport: 21.48, accommodation: 65.29 },
  { name: "Guiyang", history: 23.53, variety: 15.06, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 13.33, acid: 86.54, sweet: 40, salty: 100, spicy: 80.92, popularity: 1.00, transport: 39.02, accommodation: 47.07 },
  { name: "Harbin", history: 5.88, variety: 22.64, mountain: 38.46, beach: 100.00, bioscape: 60.00, river: 0.00, acid: 77.73, sweet: 61.21, salty: 92.77, spicy: 51.91, popularity: 1.00, transport: 31.20, accommodation: 28.06 },
  { name: "Haikou", history: 0.00, variety: 10.69, mountain: 7.69, beach: 100.00, bioscape: 10.00, river: 0.00, acid: 77.73, sweet: 67.27, salty: 92.77, spicy: 77.86, popularity: 1.00, transport: 25.16, accommodation: 55.54 },
  { name: "Hangzhou", history: 58.82, variety: 53.43, mountain: 84.62, beach: 0.00, bioscape: 50.00, river: 60.00, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 63.33, accommodation: 16.55 },
  { name: "Hefei", history: 52.94, variety: 29.52, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 6.67, acid: 89.1, sweet: 80, salty: 74.7, spicy: 55.73, popularity: 1.00, transport: 26.53, accommodation: 46.94 },
  { name: "Hohhot", history: 35.29, variety: 11.78, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 20.00, acid: 79.58, sweet: 62.42, salty: 91.16, spicy: 65.65, popularity: 1.00, transport: 18.50, accommodation: 78.13 },
  { name: "Huangshan", history: 35.29, variety: 7.91, mountain: 76.92, beach: 0.00, bioscape: 0.00, river: 26.67, acid: 89.1, sweet: 80, salty: 74.7, spicy: 55.73, popularity: 10000.00, transport: 11.68, accommodation: 43.67 },
  { name: "Jinan", history: 17.65, variety: 26.91, mountain: 15.38, beach: 0.00, bioscape: 40.00, river: 26.67, acid: 85.85, sweet: 62.42, salty: 85.54, spicy: 59.54, popularity: 1.00, transport: 37.56, accommodation: 21.64 },
  { name: "Kunming", history: 17.65, variety: 26.16, mountain: 53.85, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 78.42, sweet: 60, salty: 85.94, spicy: 98.47, popularity: 1.00, transport: 54.91, accommodation: 31.76 },
  { name: "Lhasa", history: 29.41, variety: 3.58, mountain: 0.00, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 77.49, sweet: 50.3, salty: 89.56, spicy: 77.86, popularity: 1.00, transport: 8.45, accommodation: 52.24 },
  { name: "Lanzhou", history: 17.65, variety: 11.66, mountain: 38.46, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 88.86, sweet: 67.27, salty: 89.56, spicy: 72.52, popularity: 1.00, transport: 24.79, accommodation: 28.09 },
  { name: "Lijiang", history: 17.65, variety: 3.92, mountain: 38.46, beach: 0.00, bioscape: 10.00, river: 13.33, acid: 78.42, sweet: 60, salty: 85.94, spicy: 98.47, popularity: 1.00, transport: 11.01, accommodation: 59.56 },
  { name: "Luoyang", history: 35.29, variety: 17.47, mountain: 100.00, beach: 0.00, bioscape: 40.00, river: 6.67, acid: 85.15, sweet: 72.12, salty: 88.76, spicy: 73.28, popularity: 1.00, transport: 12.61, accommodation: 40.63 },
  { name: "Nanchang", history: 58.82, variety: 17.99, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 75.64, sweet: 70.3, salty: 91.97, spicy: 83.21, popularity: 1.00, transport: 22.22, accommodation: 75.20 },
  { name: "Nanjing", history: 76.47, variety: 37.51, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 26.67, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 47.44, accommodation: 14.01 },
  { name: "Nanning", history: 11.76, variety: 18.98, mountain: 30.77, beach: 0.00, bioscape: 170.00, river: 33.33, acid: 75.17, sweet: 86.06, salty: 87.55, spicy: 73.28, popularity: 1.00, transport: 30.78, accommodation: 74.66 },
  { name: "Ningbo", history: 64.71, variety: 32.94, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 6.67, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 23.08, accommodation: 35.80 },
  { name: "Qinhuangdao", history: 17.65, variety: 6.04, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 84.69, sweet: 66.06, salty: 88.76, spicy: 63.36, popularity: 1.00, transport: 7.55, accommodation: 44.38 },
  { name: "Qingdao", history: 11.76, variety: 36.26, mountain: 53.85, beach: 100.00, bioscape: 40.00, river: 6.67, acid: 85.85, sweet: 62.42, salty: 85.54, spicy: 59.54, popularity: 1.00, transport: 39.33, accommodation: 26.85 },
  { name: "Quanzhou", history: 41.18, variety: 19.78, mountain: 53.85, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 1.00, transport: 17.36, accommodation: 56.07 },
  { name: "Sanya", history: 0.00, variety: 5.50, mountain: 38.46, beach: 100.00, bioscape: 20.00, river: 0.00, acid: 77.73, sweet: 67.27, salty: 92.77, spicy: 77.86, popularity: 1.00, transport: 19.98, accommodation: 24.20 },
  { name: "Shanghai", history: 88.24, variety: 100.00, mountain: 7.69, beach: 100.00, bioscape: 100.00, river: 66.67, acid: 93.04, sweet: 76.36, salty: 83.13, spicy: 58.78, popularity: 10000.00, transport: 90.20, accommodation: 1.36 },
  { name: "Shenyang", history: 35.29, variety: 25.47, mountain: 15.38, beach: 0.00, bioscape: 40.00, river: 0.00, acid: 78.65, sweet: 65.45, salty: 92.37, spicy: 55.73, popularity: 1.00, transport: 31.98, accommodation: 45.17 },
  { name: "Shenzhen", history: 0.00, variety: 58.63, mountain: 0.00, beach: 0.00, bioscape: 60.00, river: 6.67, acid: 76.33, sweet: 100, salty: 82.33, spicy: 68.7, popularity: 10000.00, transport: 61.73, accommodation: 16.66 },
  { name: "Shijiazhuang", history: 23.53, variety: 21.74, mountain: 100.00, beach: 0.00, bioscape: 0.00, river: 13.33, acid: 84.69, sweet: 66.06, salty: 88.76, spicy: 63.36, popularity: 1.00, transport: 24.62, accommodation: 41.40 },
  { name: "Suzhou", history: 70.59, variety: 43.77, mountain: 46.15, beach: 0.00, bioscape: 40.00, river: 80.00, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 30.72, accommodation: 35.75 },
  { name: "Taiyuan", history: 5.88, variety: 16.19, mountain: 15.38, beach: 0.00, bioscape: 30.00, river: 6.67, acid: 100, sweet: 57.58, salty: 93.98, spicy: 67.94, popularity: 1.00, transport: 23.94, accommodation: 29.54 },
  { name: "Tianjin", history: 52.94, variety: 35.49, mountain: 38.46, beach: 0.00, bioscape: 20.00, river: 33.33, acid: 76.1, sweet: 69.7, salty: 91.16, spicy: 59.54, popularity: 1.00, transport: 38.75, accommodation: 20.85 },
  { name: "Wenzhou", history: 17.65, variety: 25.38, mountain: 61.54, beach: 100.00, bioscape: 0.00, river: 33.33, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 26.74, accommodation: 36.59 },
  { name: "Wuhan", history: 41.18, variety: 47.30, mountain: 23.08, beach: 0.00, bioscape: 30.00, river: 13.33, acid: 80.28, sweet: 64.85, salty: 93.57, spicy: 100, popularity: 10000.00, transport: 51.01, accommodation: 34.07 },
  { name: "Urumqi", history: 5.88, variety: 8.00, mountain: 23.08, beach: 0.00, bioscape: 20.00, river: 0.00, acid: 87.47, sweet: 62.42, salty: 92.37, spicy: 75.57, popularity: 1.00, transport: 21.99, accommodation: 41.71 },
  { name: "Wuxi", history: 100.00, variety: 27.17, mountain: 30.77, beach: 0.00, bioscape: 30.00, river: 33.33, acid: 81.44, sweet: 73.33, salty: 87.55, spicy: 70.23, popularity: 1.00, transport: 23.91, accommodation: 35.39 },
  { name: "Xi'an", history: 100.00, variety: 45.02, mountain: 23.08, beach: 0.00, bioscape: 40.00, river: 26.67, acid: 60.56, sweet: 44.24, salty: 97.19, spicy: 80.15, popularity: 10000.00, transport: 52.50, accommodation: 39.24 },
  { name: "Xining", history: 17.65, variety: 5.90, mountain: 7.69, beach: 0.00, bioscape: 10.00, river: 0.00, acid: 87.7, sweet: 61.82, salty: 92.37, spicy: 74.81, popularity: 1.00, transport: 2.21, accommodation: 48.81 },
  { name: "Xiamen", history: 5.88, variety: 20.26, mountain: 15.38, beach: 100.00, bioscape: 30.00, river: 0.00, acid: 80.51, sweet: 78.18, salty: 85.54, spicy: 67.94, popularity: 10000.00, transport: 40.52, accommodation: 36.63 },
  { name: "Yichang", history: 23.53, variety: 8.22, mountain: 69.23, beach: 0.00, bioscape: 0.00, river: 100.00, acid: 80.28, sweet: 64.85, salty: 93.57, spicy: 100, popularity: 1.00, transport: 15.46, accommodation: 63.33 },
  { name: "Yinchuan", history: 17.65, variety: 9.46, mountain: 23.08, beach: 0.00, bioscape: 10.00, river: 6.67, acid: 87.24, sweet: 72.73, salty: 87.95, spicy: 67.18, popularity: 1.00, transport: 20.29, accommodation: 67.91 },
  { name: "Zhangjiajie", history: 11.76, variety: 3.55, mountain: 46.15, beach: 0.00, bioscape: 0.00, river: 6.67, acid: 64.5, sweet: 67.88, salty: 96.79, spicy: 99.24, popularity: 1.00, transport: 7.63, accommodation: 100.00 },
  { name: "Zhengzhou", history: 41.18, variety: 34.59, mountain: 23.08, beach: 0.00, bioscape: 10.00, river: 0.00, acid: 85.15, sweet: 72.12, salty: 88.76, spicy: 73.28, popularity: 1.00, transport: 41.29, accommodation: 34.01 },
  { name: "Chongqing", history: 100.00, variety: 60.61, mountain: 100.00, beach: 0.00, bioscape: 100.00, river: 100.00, acid: 81.67, sweet: 84.85, salty: 86.35, spicy: 62.6, popularity: 10000.00, transport: 75.08, accommodation: 45.32 },
  { name: "Zhuhai", history: 5.88, variety: 11.00, mountain: 0.00, beach: 100.00, bioscape: 0.00, river: 0.00, acid: 82.13, sweet: 64.24, salty: 90.36, spicy: 73.28, popularity: 1.00, transport: 21.17, accommodation: 20.00 },
];


// 初始化页面时，只显示第一页的问题容器
window.onload = function () {
  showQuestions(1);
}

// 开始测试函数，切换卡片显示
function startTest() {
  // 清空之前的答案
  answers = [];
  // 隐藏海报卡片
  document.getElementById("poster-card").style.display = "none";
  // 显示问题卡片
  document.getElementById("question-container").style.display = "block";
  // 显示第一页的问题
  showQuestions(1);
}

// 用户选择答案的函数
function selectOption(optionId, questionNumber) {
  // 获取选项的value值
  var value = parseFloat(document.getElementById('option' + optionId).value);
  // 将得分记录在answers数组中
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

  // 控制上一页和下一页按钮的显示和隐藏
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



// 计算推荐城市
function calculateRecommendation() {
  // 检查是否有任何答案被选择
  var hasAnswer = answers.some(answer => answer !== undefined);
  if (!hasAnswer) {
    alert("Please answer all questions before generating the recommendation!");
    return;
  }

  // 检查是否所有问题都已经回答
  var unansweredQuestions = answers.filter(answer => answer === undefined);
  if (unansweredQuestions.length > 0) {
    alert("Please answer all questions before generating the recommendation!");
    return;
  }

  // 计算每个城市的总分
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

  // 打印所有城市的得分结果到控制台
  console.log("所有城市的得分结果：", scores);

  // 按照得分降序排序
  scores.sort((a, b) => b.score - a.score);

  // 获取前三个城市
  const topThree = scores.slice(0, 3);

  // 显示得分最高的三个城市及其描述和图片
  const recommendationText = topThree.map((city, index) => {
    const cityDescription = getCityDescription(city.name);
    return `${index + 1}. ${city.name}:<br>${cityDescription}`;
  }).join("<br><br>");

  document.getElementById("recommendation-text").innerHTML = `We recommend you to visit the following cities:<br><br>${recommendationText}`;

  // 隐藏问题卡片，显示推荐结果卡片
  document.getElementById("question-container").style.display = "none";
  document.getElementById("recommendation").style.display = "block";
}

// 获取城市描述和图片
function getCityDescription(cityName) {
  // 这里可以根据城市名称获取对应的描述和图片链接，这里只是示例
  const descriptions = {
    "Beijing": {
          description: "As the capital of China, Beijing blends the beauty of ancient and modern times. Here you can admire the red walls and golden tiles of the Forbidden City and feel the grandeur of Tiananmen Square. The crispy Peking Duck with tender skin and the fried noodles with rich sauce are both memorable.<br>For more info about the city:https://www.trip.com/travel-guide/destination/beijing-1/",
          image: "images/Beijing.png"
        },
    "Changchun": {
              description: "Changchun's Forged Manchu Palace gives you a glimpse of history, while the lakes and mountains of Jingyuetan are a delight. Don't forget to try the pot roast and snow-coated bean paste, which are Changchun's specialties.<br>For more info about the city:https://us.trip.com/travel-guide/destination/changchun-216",
              image: "images/Changchun.png"
            },
    "Changsha": {
              description: "In Changsha, you can stroll around Orange Island Head and enjoy the beautiful scenery of Xiangjiang River, while Yuelu Academy gives you a strong cultural atmosphere. Remember to go out for a stroll in the evening. Stinky tofu with crispy outside and tender inside and sweet, soft and sticky sugar-oil panda are a must at Changsha's night market.<br>For more info about the city:https://us.trip.com/travel-guide/destination/changsha-148",
              image: "images/Changsha.png"
            },
    "Chengdu": {
              description: "The Broad and Narrow Alley can take you back to old Chengdu, while the Panda Base is home to the cute and cuddly pandas. Here you can indulge in spicy hot pots and skewers and experience the culinary charms of Chengdu.<br>For more info about the city:https://us.trip.com/travel-guide/destination/chengdu-104",
              image: "images/Chengdu.png"
            },
    "Dalian": {
              description: "Dalian's Xinghai Square is dazzling at night, while the Tiger Beach Ocean Park is full of fun. Seafood dinners are one of Dalian's great specialties, especially the grilled squid with its mouth-watering aroma.<br>For more info about the city:https://us.trip.com/travel-guide/destination/dalian-4",
              image: "images/Dalian.png"
            },
    "Dongguan": {
              description: "When you come to Dongguan, you can feel the lush greenery of Lingnan, taste the sweet lychee, and visit famous historical sites such as Humen Fortress and Ke Yuan. The kuey teow soup and roast goose here are also not to be missed.<br>For more info about the city:https://us.trip.com/travel-guide/destination/dongguan-212",
              image: "images/Dongguan.png"
            },
    "Fuzhou": {
              description: "Fuzhou's Three Square and Seven Alleys are full of ancient flavors, while Gushan Mountain has beautiful and magnificent scenery. The rich soup of Buddha Jumping Over the Wall and the thin-skinned and stuffed Pork Bird's Nest are very characteristic of the region.They are representative of the local cuisine.<br>For more info about the city:https://us.trip.com/travel-guide/destination/fuzhou-164",
              image: "images/Fuzhou.png"
            },
    "Guangzhou": {
              description: "Guangzhou's night tour of the Pearl River gives you a taste of the bustling night scenery of the South, while the Canton Tower towers majestically above the clouds. From morning tea and dim sum, refreshing sugar water to crispy BBQ pork ...... Guangzhou's food will never let you down either.<br>For more info about the city:https://us.trip.com/travel-guide/destination/guangzhou-152",
              image: "images/Guangzhou.png"
            },
    "Guilin": {
              description: "Guilin's landscape scenery is known as the best in the world, and the Li River is even more picturesque. Don't forget to try the Guilin rice noodles and beer fish, the rice noodles are smooth and delicious, and the beer fish is fresh and tasty, with a unique Guilin flavor.<br>For more info about the city:https://us.trip.com/travel-guide/destination/guilin-28",
              image: "images/Guilin.png"
            },
    "Guiyang": {
              description: "While Qianling Mountain in Guiyang is beautiful and magnificent, Qingyan Ancient Town is simple and elegant. Here, you can savor local delicacies such as fish in sour soup and tofu dumplings. The sour fish in soup is spicy and sour, and the tofu dumplings are crispy on the outside and tender on the inside.<br>For more info about the city:https://us.trip.com/travel-guide/destination/guiyang-33",
              image: "images/Guiyang.png"
            },
    "Harbin": {
              description: "Harbin is also known as the &quot;Ice City&quot;, in which the Ice World is most famous for its ice sculptures and snow scenery, and Central Street and Sun Island are also worth visiting. You will be warmed up by a meal of rich and flavorful iron pot stew.<br>For more info about the city:https://us.trip.com/travel-guide/destination/harbin-151",
              image: "images/Harbin.png"
            },
    "Haikou": {
              description: "In Haikou, you can enjoy the flavor of the tropical seaside city and enjoy the relaxing fun of the sunny beaches. Qingbuliang and coconut chicken are delicious dishes not to be missed, and they can also help you cool down and relieve the heat.<br>For more info about the city:https://us.trip.com/travel-guide/destination/haikou-37/",
              image: "images/Haikou.png"
            },
    "Hangzhou": {
              description: "Hangzhou is known as &quot;Paradise on Earth&quot;, where you can enjoy the picturesque West Lake and come to Lingyin Temple to feel the atmosphere of Buddhist culture. The West Lake Vinegar Fish and Longjing Shrimp are the best food in Hangzhou.<br>For more info about the city:https://us.trip.com/travel-guide/destination/hangzhou-14",
              image: "images/Hangzhou.png"
            },
    "Hefei": {
              description: "Hefei is a city of science and education, and is also highly cultural, with the Science and Technology University and the Anhui Museum both worth a visit. You can also enjoy unique specialties such as stinky Mandarin fish and Mao tofu.<br>For more info about the city:https://us.trip.com/travel-guide/destination/hefei-196",
              image: "images/Hefei.png"
            },
    "Hohhot": {
              description: "In Hohhot, you can have a glimpse of the vastness of the grassland and witness the history of heroes in the Mausoleum of Genghis Khan. Traditional grassland cuisine such as hand-held meat and mutton hot pot are most authentic here.<br>For more info about the city:https://us.trip.com/travel-guide/destination/hohhot-156/",
              image: "images/Hohhot.png"
            },
    "Huangshan": {
              description: "When you come here, the most unmissable thing is the Huangshan Mountain, known as &quot;the most wonderful mountain in the world&quot;, where the strange peaks and rocks and the sunrise over the sea of clouds make people forget to come back. It is also worthwhile to try the Huizhou Mao Tofu and Huangshan Baklava.<br>For more info about the city:https://us.trip.com/travel-guide/destination/huangshan-120061",
              image: "images/Huangshan.png"
            },
    "Jinan": {
              description: "Jinan has seventy-two famous springs, of which Baotu is the most famous for its sweet water, and Daming Lake and Thousand Buddha Mountain are also the business cards of Jinan's landscape and culture. From pancakes to sweet and sour carp, you can also savor the classic Shandong flavors in Jinan.<br>For more info about the city:https://us.trip.com/travel-guide/destination/jinan-128/",
              image: "images/Jinan.png"
            },
    "Kunming": {
              description: "Kunming is a city of spring, where flowers flourish in all seasons. Among the attractions, the wonders of the Stone Forest are breathtaking, while the Dianchi Pond with its beautiful environment is a delight. Bridge Rice Noodle and Rose Rice Cold Shrimp are the classic delicacies of Kunming.<br>For more info about the city:https://us.trip.com/travel-guide/destination/kunming-29/",
              image: "images/Kunming.png"
            },
    "Lhasa": {
              description: "In Lhasa, you can enjoy the sacred and solemn Tibetan culture at the Potala Palace and the Da Zhao Monastery, and the traditional cuisine of the Tibetans - ghee tea and tsampa ...... will surely bring you a novel experience.<br>For more info about the city:https://us.trip.com/travel-guide/destination/lhasa-36/",
              image: "images/Lhasa.png"
            },
    "Lanzhou": {
              description: "When it comes to Lanzhou, Lanzhou Ramen is its gold standard, and the beef noodles and barbecue meat here are also unique. You can also visit the White Pagoda Mountain and the Yellow River Iron Bridge to experience the beauty and historical heritage of Lanzhou.<br>For more info about the city:https://us.trip.com/travel-guide/destination/lanzhou-231/",
              image: "images/Lanzhou.png"
            },
    "Lijiang": {
              description: "Lijiang is a city with distinctive features. You can enjoy its natural scenery at Jade Dragon Snow Mountain or stroll through the old town to experience its flavorful atmosphere. Cold noodles with chickpeas and hot pot with preserved pork ribs are the specialties of Lijiang.<br>For more info about the city:https://us.trip.com/travel-guide/destination/lijiang-32/",
              image: "images/Lijiang.png"
            },
    "Luoyang": {
              description: "In Luoyang, you can check out the majestic Longmen Grottoes Buddha statues or feel the strong Buddhist cultural atmosphere at the White Horse Temple. And remember to try the Luoyang water mat and peony cake, the food here will not disappoint you either.<br>For more info about the city:https://us.trip.com/travel-guide/destination/luoyang-198/",
              image: "images/Luoyang.png"
            },
    "Nanchang": {
              description: "Nanchang has a rich red culture, while the ancient Tengwang Pavilion and the uniquely scenic Poyang Lake represent the city's simplicity and beauty. Fried noodle and jar soup are the specialties of Nanchang, which are very worth tasting.<br>For more info about the city:https://us.trip.com/travel-guide/destination/nanchang-175/",
              image: "images/Nanchang.png"
            },
    "Nanjing": {
              description: "Nanjing is a city where history meets modernity, with the solemnity of the Sun Yat-sen Mausoleum and the bustle of the Fuzimiao Temple. Nanjing is also famous for its food, with salt water duck and duck blood vermicelli soup being some of its representatives.<br>For more info about the city:https://us.trip.com/travel-guide/destination/nanjing-9/",
              image: "images/Nanjing.png"
            },
    "Nanning": {
              description: "You can experience the ultimate natural beauty in Nanning, where mountains and water are close to each other. Qingxiu Mountain, Daming Mountain and Nanhu Park are all great places to travel and relax. You can also taste the spicy and sour Laoyou Vermicelli and Lemon Duck, which have a distinctive flavor.<br>For more info about the city:https://us.trip.com/travel-guide/destination/nanning-166/",
              image: "images/Nanning.png"
            },
    "Ningbo": {
              description: "When traveling in Ningbo, the book-rich Tianyi Pavilion and the exotic Old Bund are worth visiting. In addition, the delicious soup dumplings and Bad halogen  are specialties not to be missed.<br>For more info about the city:https://us.trip.com/travel-guide/destination/ningbo-83/",
              image: "images/Ningbo.png"
            },
    "Qinhuangdao": {
              description: "Qinhuangdao is a famous seaside city where you can watch the spectacular sunrise over the sea, challenge the famous Shanhaiguan Great Wall, and don't forget to have a fresh and delicious seafood feast before you leave.<br>For more info about the city:https://us.trip.com/travel-guide/destination/qinhuangdao-132",
              image: "images/Qinhuangdao.png"
            },
    "Qingdao": {
              description: "Qingdao has a charming seaside scenery and rich European flavor, Trestle Bridge and Bada Guan are very representative of the attractions, mellow beer and seafood barbecue here is the best food partner.<br>For more info about the city:https://us.trip.com/travel-guide/destination/qingdao-5/",
              image: "images/Qingdao.png"
            },
    "Quanzhou": {
              description: "In Quanzhou, the bells of the Kaiyuan Temple are ringing loudly, Qingyuan Mountain is picturesque, and you can also experience the traditional hairpin culture that's heating up here.Sea Worm Jelly and Marinated Chicken Claws are representative of Quanzhou's cuisine.<br>For more info about the city:https://us.trip.com/travel-guide/destination/quanzhou-243",
              image: "images/Quanzhou.png"
            },
    "Sanya": {
              description: "Sanya is a tropical seaside resort, Yalong Bay and Nanshan Cultural and Tourism Zone will both give you a great experience, remember to pair it with a fresh and tasty seafood dinner and coconut rice, you won't be disappointed.<br>For more info about the city:https://us.trip.com/travel-guide/destination/sanya-61",
              image: "images/Sanya.png"
            },
    "Shanghai": {
              description: "Shanghai's prosperity and elegance go hand in hand, with the Bund's sparkling night view and the City God Temple full of old Shanghai flavor. You can also savor the thin-skinned and stuffed xiaolongbao and the rich and tasty crabmeat noodles, which are Shanghai's specialties.<br>For more info about the city:https://us.trip.com/travel-guide/destination/shanghai-2",
              image: "images/Shanghai.png"
            },
    "Shenyang": {
              description: "In Shenyang, you can visit the historic Shenyang Imperial Palace and stroll through the scenic Beiling Park. Shenyang's food is also very unique, with mouth-watering aromas of fried chicken racks and grilled cold noodles.<br>For more info about the city:https://us.trip.com/travel-guide/destination/shenyang-155",
              image: "images/Shenyang.png"
            },
    "Shenzhen": {
              description: "Shenzhen, with its skyscrapers, is a modern city. Window of the World and Eastern Overseas Chinese Town are the characteristic scenic spots in Shenzhen. Cantonese dim sum and seafood congee are delicious and rich in flavor, and are representative of Shenzhen's cuisine.<br>For more info about the city:https://us.trip.com/travel-guide/destination/shenzhen-26",
              image: "images/Shenzhen.png"
            },
    "Shijiazhuang": {
              description: "Shijiazhuang has the beautiful scenery of Huoxizhai and the ancient city of Zhengding, which is full of history. Jinfeng Steak Chicken is tender and juicy, and Donkey Burger is crispy and flavorful, making it a delicacy not to be missed when in Shijiazhuang.<br>For more info about the city:https://us.trip.com/travel-guide/destination/shijiazhuang-199",
              image: "images/Shijiazhuang.png"
            },
    "Suzhou": {
              description: "Suzhou is the representative of Jiangnan water town, a city of gardens, with the Humble Administrator's Garden and the Liouyuan Garden being the best of them. Squirrel Gui Fish and Ao Zao Noodles are Suzhou's specialties with unique flavors.<br>For more info about the city:https://us.trip.com/travel-guide/destination/suzhou-11",
              image: "images/Suzhou.png"
            },
    "Taiyuan": {
              description: "Taiyuan has a deep cultural heritage, with the Twin Pagodas Temple, Jin Ancestral Temple and Tianlongshan Grottoes representing Taiyuan's attractions. It is most famous for its noodle dishes, and local delicacies such as over-fried pork and Taiyuan Brain are also memorable.<br>For more info about the city:https://us.trip.com/travel-guide/destination/taiyuan-167",
              image: "images/Taiyuan.png"
            },
    "Tianjin": {
              description: "When you come to Tianjin, you can sit on the Tianjin Eye overlooking the Haihe River, or feel the exotic atmosphere of Italian style street. Dog-break Buns and Eighteen Street Sesame Flowers are Tianjin's specialty snacks, which are well worth tasting.<br>For more info about the city:https://us.trip.com/travel-guide/destination/tianjin-154",
              image: "images/Tianjin.png"
            },
    "Wenzhou": {
              description: "Wenzhou has prosperous commerce and beautiful scenery. It has a temperate climate, and scenic spots such as Yandang Mountain, Nanxi River, and Jiangxinyu Island are perfect for traveling excursions, while Wenzhou fishballs and glutinous rice are Wenzhou's culinary calling cards.<br>For more info about the city:https://us.trip.com/travel-guide/destination/wenzhou-153",
              image: "images/Wenzhou.png"
            },
    "Wuhan": {
              description: "Wuhan's Yellow Crane Tower is famous all over the world, and the East Lake is also a good place to relax. You can taste the famous hot dry noodles and spicy and delicious duck necks here, and there are many more delicacies waiting for you to discover.<br>For more info about the city:https://us.trip.com/travel-guide/destination/wuhan-145",
              image: "images/Wuhan.png"
            },
    "Urumqi": {
              description: "Urumqi is the capital of the Western Region, with its picturesque Tianshan Tianchi and the exotic International Grand Bazaar. The roasted whole sheep and hand-held rice are delicious and tempting, and are the most authentic Western specialties.<br>For more info about the city:https://us.trip.com/travel-guide/destination/urumqi-117/",
              image: "images/Urumqi.png"
            },
    "Wuxi": {
              description: "When you come to Wuxi, what you can't miss is Taihu Lake and Soft-Shelled Turtle Lake, which harmonize the softness of the water town and the magnificence of the mountains and waters in a unique way, and the Lingshan Giant Buddha is also a famous scenic spot. Xiao Long Bao and Sweet and Sour Spare Ribs are representative of the local cuisine.<br>For more info about the city:https://us.trip.com/travel-guide/destination/wuxi-10/",
              image: "images/Wuxi.png"
            },
    "Xi'an": {
              description: "Xi'an is known as the ancient capital of the 13th Dynasty, with the Terracotta Warriors and Horses, the Big Wild Goose Pagoda and the Bell Tower all telling the story of the city's prosperous history. Xi'an is also a paradise of carbohydrates, meat buns and mutton steamed buns are fragrant and delicious, which are the must-eat food here.<br>For more info about the city:https://us.trip.com/travel-guide/destination/xi-an-7",
              image: "images/Xi'an.png"
            },
    "Xining": {
              description: "Xining is a shining pearl on the Qinghai-Tibet Plateau, with rich ethnic culture and beautiful natural scenery, which is represented by the Tal Templeh and the surrounding Qinghai Lake. In addition to yogurt, stuffed skin and other delicacies, you can also taste mutton in many ways and experience the flavor of the Great Northwest.<br>For more info about the city:https://us.trip.com/travel-guide/destination/xining-237",
              image: "images/Xining.png"
            },
    "Xiamen": {
              description: "Xiamen is known as the Garden of the Sea, full of romantic and literary atmosphere, Gulangyu Island and the Round Island Road are popular attractions. Xiamen is also a city of food, ginger duck, sand tea noodles and oyster cake are not to be missed.<br>For more info about the city:https://us.trip.com/travel-guide/destination/xiamen-21",
              image: "images/Xiamen.png"
            },
    "Yichang": {
              description: "When you come to Yichang, you can view the majestic Three Gorges Dam, feel the simplicity and historical flavor of the old streets of Yiling, and local delicacies such as cold shrimp and radish dumplings have an authentic flavor.<br>For more info about the city:https://us.trip.com/travel-guide/destination/yichang-313",
              image: "images/Yichang.png"
            },
    "Yinchuan": {
              description: "Yinchuan is known as the &quot;South River on the Seaside&quot;, where deserts and oases coexist, and where Zhen Beibu Western Movie City, the Mausoleum of the Western Xia Kings, and Mount Helan are the classic attractions of Yinchuan.You can savor the delicious and enticing mutton noodles and mutton meat noodles here.<br>For more info about the city:https://us.trip.com/travel-guide/destination/yinchuan-239",
              image: "images/Yinchuan.png"
            },
    "Zhangjiajie": {
              description: "Zhangjiajie is most famous for its natural beauty of mountains and water. In scenic spots such as Zhangjiajie National Forest Park and Tianmen Mountain, you can feel relaxed as well as experience some adventures, and the local Tujia cuisine is very authentic and delicious.<br>For more info about the city:https://us.trip.com/travel-guide/destination/zhangjiajie-23",
              image: "images/Zhangjiajie.png"
            },
    "Zhengzhou": {
              description: "Zhengzhou is a famous city in the Central Plains, Songshan Shaolin Temple is famous all over the world, and the scenery of the Yellow River Excursion Area is also excellent. You can also taste the famous Zhengzhou cuisine such as Hoisin soup and chow mein.<br>For more info about the city:https://us.trip.com/travel-guide/destination/zhengzhou-157",
              image: "images/Zhengzhou.png"
            },
    "Chongqing": {
              description: "Known as a mountain city, Chongqing has unique landforms and scenery, and Hongyadong and Jiefangbei are all recommended attractions. You can also taste the authentic spicy hot pot here and feel the passion and vigor of Chongqing.<br>For more info about the city:https://us.trip.com/travel-guide/destination/chongqing-158",
              image: "images/Chongqing.png"
            },
    "Zhuhai": {
              description: "Zhuhai seashore has beautiful scenery, and the statue of fisherwoman and Changlong Ocean Park are the local landmarks. You can also enjoy the seafood of Zhuhai and feel the romance and coziness of the seaside city.<br>For more info about the city:https://us.trip.com/travel-guide/destination/zhuhai-27/",
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