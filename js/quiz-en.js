// let answers = []; // 保存用户选择的答案

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

// 开始测试函数，切换卡片显示
function startTest() {
  // 清空之前的答案
  answers = [];
  // 隐藏海报卡片
  document.getElementById("poster-card").style.display = "none";
  // 显示问题卡片
  document.getElementById("question-container").style.display = "block";
}
// 用户选择答案的函数
function selectOption(optionId, questionNumber) {
  // 获取选项的value值
  var value = parseFloat(document.getElementById('option' + optionId).value);
  // 将得分记录在answers数组中
  answers[questionNumber - 1] = value;
}



// 计算推荐城市
function calculateRecommendation() {
  // 检查是否所有问题都已经回答
  if (answers.includes(undefined)) {
    alert("Please select the answers to all questions first!");
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

  document.getElementById("recommendation-text").innerHTML = `We recommend you to visit the following cities:<br>${recommendationText}`;

  // 隐藏问题卡片，显示推荐结果卡片
  document.getElementById("question-container").style.display = "none";
  document.getElementById("recommendation").style.display = "block";
}

// 获取城市描述和图片
function getCityDescription(cityName) {
  // 这里可以根据城市名称获取对应的描述和图片链接，这里只是示例
  const descriptions = {
    "北京": {
      description: "北京：千年古都，现代国际都市，融合古今之美。<br>著名景点：故宫、天安门广场、颐和园、长城。",
      image: "images/Beijing.png"
    },
    "长春": {
      description: "长春：北国春城，汽车工业的摇篮，四季分明，景色宜人。<br>著名景点：伪满皇宫博物院、南湖公园、净月潭。",
      image: "images/Changchun.png"
    },
    "长沙": {
      description: "长沙：星城长沙，楚汉文化之地，美食与美景并存。<br>著名景点：岳麓山、橘子洲头、世界之窗。",
      image: "images/Changsha.png"
    },
    "成都": {
      description: "成都：天府之国，悠闲之都，美食与熊猫的故乡。<br>著名景点：大熊猫繁育研究基地、武侯祠、宽窄巷子。",
      image: "images/Chengdu.png"
    },
    "大连": {
      description: "大连：浪漫之都，海滨风光旖旎，东北的明珠。<br>著名景点：星海广场、老虎滩海洋公园、棒棰岛。",
      image: "images/Dalian.png"
    },
    "东莞": {
      description: "东莞：世界工厂，制造业发达，现代与传统交相辉映。<br>著名景点：虎门炮台、可园、观音山国家森林公园。",
      image: "images/Dongguan.png"
    },
    "福州": {
      description: "福州：榕城福州，温泉之都，历史文化底蕴深厚。<br>著名景点：三坊七巷、鼓山、西湖公园。",
      image: "images/Fuzhou.png"
    },
    "广州": {
      description: "广州：羊城广州，岭南文化的代表，商贸繁荣。<br>著名景点：广州塔、白云山、陈家祠。",
      image: "images/Guangzhou.png"
    },
    "桂林": {
      description: "桂林：山水甲天下，漓江风光美不胜收。<br>著名景点：漓江、象鼻山、阳朔西街。",
      image: "images/Guilin.png"
    },
    "贵阳": {
      description: "贵阳：高原明珠，避暑胜地，少数民族文化丰富。<br>著名景点：青岩古镇、黔灵山公园、花溪公园。",
      image: "images/Guiyang.png"
    },
    "哈尔滨": {
      description: "哈尔滨：冰城哈尔滨，冬季雪景如画，欧陆风情浓郁。<br>著名景点：中央大街、太阳岛、冰雪大世界。",
      image: "images/Harbin.png"
    },
    "海口": {
      description: "海口：椰城海口，热带海滨城市，阳光沙滩的乐园。<br>著名景点：万绿园、假日海滩、五公祠。",
      image: "images/Haikou.png"
    },
    "杭州": {
      description: "杭州：人间天堂，西湖美景名扬四海。<br>著名景点：西湖、灵隐寺、千岛湖。",
      image: "images/Hangzhou.png"
    },
    "合肥": {
      description: "合肥：科教之城，历史悠久，现代气息浓厚。<br>著名景点：包公祠、三河古镇、巢湖。",
      image: "images/Hefei.png"
    },
    "呼和浩特": {
      description: "呼和浩特：草原明珠，蒙古族文化浓厚，风光无限。<br>著名景点：大召寺、五塔寺、草原文化博物馆。",
      image: "images/Hohhot.png"
    },
    "黄山": {
      description: "黄山：天下第一奇山，云海、奇松、怪石、温泉四绝。<br>著名景点：黄山风景区、西递宏村古村落。",
      image: "images/Huangshan.png"
    },
    "济南": {
      description: "济南：泉城济南，七十二名泉，历史文化名城。<br>著名景点：趵突泉、大明湖、千佛山。",
      image: "images/Jinan.png"
    },
    "昆明": {
      description: "昆明：春城昆明，四季如春，花海之都。<br>著名景点：石林、滇池、西山。",
      image: "images/Kunming.png"
    },
    "拉萨": {
      description: "拉萨：雪域高原的圣地，藏传佛教的文化中心。<br>著名景点：布达拉宫、大昭寺、罗布林卡。",
      image: "images/Lhasa.png"
    },
    "兰州": {
      description: "兰州：黄河之都，拉面之乡，自然风光与人文景观交相辉映。<br>著名景点：白塔山、五泉山、黄河风情线。",
      image: "images/Lanzhou.png"
    },
    "丽江": {
      description: "丽江：古城丽江，纳西文化的瑰宝，风情万种。<br>著名景点：丽江古城、玉龙雪山、束河古镇。",
      image: "images/Lijiang.png"
    },
    "洛阳": {
      description: "洛阳：牡丹花城，十三朝古都，文化底蕴深厚。<br>著名景点：龙门石窟、白马寺、关林庙。",
      image: "images/Luoyang.png"
    },
    "南昌": {
      description: "南昌：英雄城南昌，红色文化丰富，湖光山色美。<br>著名景点：滕王阁、八一起义纪念馆、庐山。",
      image: "images/Nanchang.png"
    },
    "南京": {
      description: "南京：六朝古都，金陵风华，历史与现代交融。<br>著名景点：中山陵、夫子庙、秦淮河。",
      image: "images/Nanjing.png"
    },
    "南宁": {
      description: "南宁：绿城南宁，壮族文化的摇篮，山水相依。<br>著名景点：青秀山、南湖公园、大明山。",
      image: "images/Nanning.png"
    },
    "宁波": {
      description: "宁波：东方商埠，海港城市，历史与现代并存。<br>著名景点：天一阁、东钱湖、老外滩。",
      image: "images/Ningbo.png"
    },
    "秦皇岛": {
      description: "秦皇岛：海滨之城，长城的起点，历史与自然共融。<br>著名景点：山海关、北戴河、秦皇求仙入海处。",
      image: "images/Qinhuangdao.png"
    },
    "青岛": {
      description: "青岛：海滨明珠，啤酒之城，德国风情浓郁。<br>著名景点：八大关、栈桥、崂山。",
      image: "images/Qingdao.png"
    },
    "泉州": {
      description: "泉州：海上丝绸之路的起点，文化名城，风光旖旎。<br>著名景点：清源山、开元寺、崇武古城。",
      image: "images/Quanzhou.png"
    },
    "三亚": {
      description: "三亚：南海明珠，热带海滨度假胜地，阳光沙滩的乐园。<br>著名景点：亚龙湾、天涯海角、南山文化旅游区。",
      image: "images/Sanya.png"
    },
    "上海": {
      description: "上海：东方之珠，国际大都市，繁华与典雅并存。<br>著名景点：外滩、东方明珠、城隍庙。",
      image: "images/Shanghai.png"
    },
    "沈阳": {
      description: "沈阳：一朝发祥地，两代帝王都，历史文化与现代气息交相辉映。<br>著名景点：沈阳故宫、张氏帅府、北陵公园。",
      image: "images/Shenyang.png"
    },
    "深圳": {
      description: "深圳：中国的硅谷，创新之城，现代化程度高。<br>著名景点：世界之窗、东部华侨城、深圳湾公园。",
      image: "images/Shenzhen.png"
    },
    "石家庄": {
      description: "石家庄：燕赵大地，历史文化名城，现代气息浓厚。<br>著名景点：正定古城、抱犊寨、赵州桥。",
      image: "images/Shijiazhuang.png"
    },
    "苏州": {
      description: "苏州：人间天堂，园林之城，江南水乡的代表。<br>著名景点：拙政园、留园、虎丘。",
      image: "images/Suzhou.png"
    },
    "太原": {
      description: "太原：龙城太原，晋商故里，历史文化底蕴深厚。<br>著名景点：晋祠、双塔寺、天龙山石窟。",
      image: "images/Taiyuan.png"
    },
    "天津": {
      description: "天津：北方明珠，近代历史文化名城，中西建筑交相辉映。<br>著名景点：天津之眼、意式风情街、盘山风景区。",
      image: "images/Tianjin.png"
    },
    "温州": {
      description: "温州：东瓯名城，商贸繁荣，山水风光秀美。<br>著名景点：雁荡山、楠溪江、江心屿。",
      image: "images/Wenzhou.png"
    },
    "武汉": {
      description: "武汉：九省通衢，江城武汉，历史与现代交融。<br>著名景点：黄鹤楼、东湖、汉口江滩。",
      image: "images/Wuhan.png"
    },
    "乌鲁木齐": {
      description: "乌鲁木齐：西域之都，多民族文化交融，自然风光独特。<br>著名景点：天山天池、国际大巴扎、红山公园。",
      image: "images/Urumqi.png"
    },
    "无锡": {
      description: "无锡：太湖明珠，江南水乡的代表，历史文化名城。<br>著名景点：鼋头渚、灵山大佛、寄畅园。",
      image: "images/Wuxi.png"
    },
    "西安": {
      description: "西安：古都西安，十三朝古都，历史文化底蕴深厚。<br>著名景点：兵马俑、大雁塔、钟楼。",
      image: "images/Xi'an.png"
    },
    "西宁": {
      description: "西宁：高原古城，多民族聚居，自然风光与人文景观丰富。<br>著名景点：塔尔寺、东关清真大寺、南山公园。",
      image: "images/Xining.png"
    },
    "厦门": {
      description: "厦门：海上花园，浪漫鹭岛，文艺气息浓厚。<br>著名景点：鼓浪屿、南普陀寺、环岛路。",
      image: "images/Xiamen.png"
    },
    "宜昌": {
      description: "宜昌：三峡门户，水电之都，自然风光与人文景观交相辉映。<br>著名景点：三峡大坝、西陵峡、神农架。",
      image: "images/Yichang.png"
    },
    "银川": {
      description: "银川：塞上江南，回族之乡，沙漠与绿洲共存。<br>著名景点：西夏王陵、镇北堡西部影城、贺兰山。",
      image: "images/Yinchuan.png"
    },
    "张家界": {
      description: "张家界：武陵源奇观，峰林王国，自然风光旖旎。<br>著名景点：张家界国家森林公园、天门山、黄龙洞。",
      image: "images/Zhangjiajie.png"
    },
    "郑州": {
      description: "郑州：中原腹地，商都郑州，历史文化与现代气息并存。<br>著名景点：嵩山少林寺、黄河游览区、二七纪念塔。",
      image: "images/Zhengzhou.png"
    },
    "重庆": {
      description: "重庆：山城重庆，火锅之都，长江与嘉陵江交汇之地。<br>著名景点：洪崖洞、解放碑、武隆仙女山。",
      image: "images/Chongqing.png"
    },
    "珠海": {
      description: "珠海：浪漫之城，海滨度假胜地，现代化程度高。<br>著名景点：珠海渔女、长隆海洋王国、圆明新园。",
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
  // 清空之前的答案
  answers = [];
  // 重新加载页面
  location.reload();
  // 显示问题容器
  // 显示海报卡片
  document.getElementById("poster-card").style.display = "block";
  // 隐藏推荐结果卡片
  document.getElementById("recommendation").style.display = "none";
  // 重置用户选择的答案
  n1 = null;
  // 重置问题卡片的显示状态
  document.getElementById("question-container").style.display = "none";
}