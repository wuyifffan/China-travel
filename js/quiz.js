let n1 = null; // 保存用户选择的答案
let n2 = null;
let n3 = null;
let n4 = null;
let n5 = null;

// 假设有50个城市，每个城市的五个维度得分已经确定
const cities = [
  { name: "北京", popularity: 80, culture: 40, landscape: 10, entertainment: 70, richness: 80 },
  { name: "上海", popularity: 90, culture: 20, landscape: 10, entertainment: 80, richness: 80 },
  { name: "桂林", popularity: 70, culture: 40, landscape: 70, entertainment: 30, richness: 50 },

];

// 开始测试函数，切换卡片显示
function startTest() {
  // 隐藏海报卡片
  document.getElementById("poster-card").style.display = "none";
  // 显示问题卡片
  document.getElementById("question-container").style.display = "block";
}

// 用户选择答案的函数
function selectOption(option, questionNumber) {
  switch (questionNumber) {
    case 1:
      n1 = option;
      break;
    case 2:
      n2 = option;
      break;
    case 3:
      n3 = option;
      break;
    case 4:
      n4 = option;
      break;
    case 5:
      n5 = option;
      break;
    default:
      break;
  }
}
function calculateRecommendation() {
  // 检查是否所有问题都已经回答
  if (n1 === null || n2 === null || n3 === null || n4 === null || n5 === null) {
    alert("请先选择答案！");
    return;
  }

  // 计算总得分
  const total = n1 + n2 + n3 + n4 + n5;

  // 计算每个问题的比例
  const ratio1 = n1 / total;
  const ratio2 = n2 / total;
  const ratio3 = n3 / total;
  const ratio4 = n4 / total;
  const ratio5 = n5 / total;

  // 计算每个城市的得分
  const scores = cities.map(city => ({
    name: city.name,
    score: (
      city.popularity * ratio1 +
      city.culture * ratio2 +
      city.landscape * ratio3 +
      city.entertainment * ratio4 +
      city.richness * ratio5
    )
  }));

  // 按照得分降序排序
  scores.sort((a, b) => b.score - a.score);
  console.log(scores);

  // 显示得分最高的城市
  const recommendation = scores[0];
  const cityDescription = getCityDescription(recommendation.name); // 获取城市描述和图片
  document.getElementById("recommendation-text").innerHTML = `推荐您去 ${recommendation.name} 旅游！`;
  document.getElementById("city-description").innerHTML = cityDescription;
  document.getElementById("question-container").style.display = "none";
  document.getElementById("recommendation").style.display = "block";
}

// 获取城市描述和图片
function getCityDescription(cityName) {
  // 这里可以根据城市名称获取对应的描述和图片链接，这里只是示例
  const descriptions = {
    "北京": {
      description: "北京：千年古都，现代国际都市，融合古今之美。著名景点：故宫、天安门广场、颐和园、长城。",
      image: "./images/Beijing.png"
    },
    "上海": {
      description: "上海：东方之珠，国际大都市，繁华与典雅并存。著名景点：外滩、东方明珠、城隍庙。",
      image: "./images/Shanghai.png",
    },
    "桂林": {
      description: "桂林：山水甲天下，漓江风光美不胜收。<br><br>著名景点：漓江、象鼻山、阳朔西街。",
      image: "./images/Guilin.png",
      // 添加更多城市的描述和图片链接
    }
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
  // 显示海报卡片
  document.getElementById("poster-card").style.display = "block";
  // 隐藏推荐结果卡片
  document.getElementById("recommendation").style.display = "none";
  // 重置用户选择的答案
  n1 = null;
  // 重置问题卡片的显示状态
  document.getElementById("question-container").style.display = "none";
}