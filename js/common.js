const categories = ['文胸', '家居服', '内裤', '保暖衣'];

const activities = [
  {
    id: 1,
    name: '文胸99元3件',
    desc: '任意3件文胸总价99元',
    image: 'goso_img/carousel/文胸.png',
    category: '文胸'
  },
  {
    id: 2,
    name: '内裤买三送二',
    desc: '购买3条内裤，赠送2条',
    image: 'goso_img/carousel/内裤.png',
    category: '内裤'
  },
  {
    id: 3,
    name: '家居服买一送一',
    desc: '购买1件家居服，赠送1件',
    image: 'goso_img/carousel/家居服.png',
    category: '家居服'
  },
  {
    id: 4,
    name: '保暖衣特价',
    desc: '精选保暖衣低至99元',
    image: 'goso_img/carousel/保暖衣.png',
    category: '保暖衣'
  }
];

const productMapping = {
  '【国香致美杯】薄款聚拢记忆钢圈亲肤绵文胸': { category: '文胸', image: 'goso_img/文胸/【国香致美杯】薄款聚拢记忆钢圈亲肤绵文胸.jpg', price: 129 },
  '【国香黑绷带】薄款轻盈无钢圈亲肤绵内衣': { category: '文胸', image: 'goso_img/文胸/【国香黑绷带】薄款轻盈无钢圈亲肤绵内衣.jpg', price: 99 },
  '薄款C+记忆钢圈亲肤绵文胸': { category: '文胸', image: 'goso_img/文胸/薄款C+记忆钢圈亲肤绵文胸.jpg', price: 159 },
  '【时尚露肩穿搭】中厚款轻盈无钢圈亲肤绵文胸': { category: '文胸', image: 'goso_img/文胸/【时尚露肩穿搭】中厚款轻盈无钢圈亲肤绵文胸.jpg', price: 119 },
  '薄款塑身记忆钢圈亲肤绵塑身文胸': { category: '文胸', image: 'goso_img/文胸/薄款塑身记忆钢圈亲肤绵塑身文胸.jpg', price: 79 },
  '薄款健康绵无钢圈轻盈文胸': { category: '文胸', image: 'goso_img/文胸/薄款健康绵无钢圈轻盈文胸.jpg', price: 99 },
  '【无骨聚拢】薄款健康绵无钢圈聚拢简约文胸': { category: '文胸', image: 'goso_img/文胸/【无骨聚拢】薄款健康绵无钢圈聚拢简约文胸.jpg', price: 89 },
  '【张嘉倪同款】背扣式亲肤棉无钢圈舒美无痕文胸': { category: '文胸', image: 'goso_img/文胸/【张嘉倪同款】背扣式亲肤棉无钢圈舒美无痕文胸.jpg', price: 129 },
  '健康棉无钢圈蕾丝调整塑适薄款半码文胸': { category: '文胸', image: 'goso_img/文胸/健康棉无钢圈蕾丝调整塑适薄款半码文胸.jpg', price: 99 },
  '健康棉无钢圈光面无痕聚拢塑适文胸': { category: '文胸', image: 'goso_img/文胸/健康棉无钢圈光面无痕聚拢塑适文胸.jpg', price: 79 },
  '(A/B/C杯)健康棉无钢圈聚拢塑适文胸': { category: '文胸', image: 'goso_img/文胸/(A_B_C杯)健康棉无钢圈聚拢塑适文胸.jpg', price: 89 },
  '魔塑师-(B杯)健康棉无钢圈聚焦调整文胸': { category: '文胸', image: 'goso_img/文胸/魔塑师-(B杯)健康棉无钢圈聚焦调整文胸.jpg', price: 119 },
  '【轻盈羽翼杯】健康棉无钢圈轻盈甜美蕾丝文胸': { category: '文胸', image: 'goso_img/文胸/【轻盈羽翼杯】健康棉无钢圈轻盈甜美蕾丝文胸.jpg', price: 99 },
  '健康棉无钢圈聚拢娇美蕾丝中厚文胸': { category: '文胸', image: 'goso_img/文胸/健康棉无钢圈聚拢娇美蕾丝中厚文胸.jpg', price: 129 },
  '健康棉极美调整塑适文胸半码': { category: '文胸', image: 'goso_img/文胸/健康棉极美调整塑适文胸半码.jpg', price: 99 },
  '无钢圈聚拢塑适光面半码文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈聚拢塑适光面半码文胸.jpg', price: 79 },
  '【副乳克星】无钢圈调整塑适半码文胸': { category: '文胸', image: 'goso_img/文胸/【副乳克星】无钢圈调整塑适半码文胸.jpg', price: 89 },
  '无磁无钢圈聚拢塑适文胸': { category: '文胸', image: 'goso_img/文胸/无磁无钢圈聚拢塑适文胸.jpg', price: 99 },
  '【副乳克星】健康棉无钢圈调整塑适极美蕾丝文胸': { category: '文胸', image: 'goso_img/文胸/【副乳克星】健康棉无钢圈调整塑适极美蕾丝文胸.jpg', price: 129 },
  '亲肤超软无钢圈无痕花苞杯': { category: '文胸', image: 'goso_img/文胸/亲肤超软无钢圈无痕花苞杯.jpg', price: 79 },
  '亲肤棉无钢圈无痕花苞杯': { category: '文胸', image: 'goso_img/文胸/亲肤棉无钢圈无痕花苞杯.jpg', price: 89 },
  '无钢圈包容调整文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈包容调整文胸.jpg', price: 99 },
  '无钢圈贴服调整文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈贴服调整文胸.jpg', price: 79 },
  '时尚亲肤棉无钢圈聚焦调整文胸': { category: '文胸', image: 'goso_img/文胸/时尚亲肤棉无钢圈聚焦调整文胸.jpg', price: 119 },
  '亲肤棉无钢圈包容调整文胸': { category: '文胸', image: 'goso_img/文胸/亲肤棉无钢圈包容调整文胸.jpg', price: 89 },
  '亲肤棉无钢圈聚焦调整文胸': { category: '文胸', image: 'goso_img/文胸/亲肤棉无钢圈聚焦调整文胸.jpg', price: 99 },
  '亲肤棉无钢圈力挺调整文胸': { category: '文胸', image: 'goso_img/文胸/亲肤棉无钢圈力挺调整文胸.jpg', price: 79 },
  '舒适时尚百搭休闲性感文胸': { category: '文胸', image: 'goso_img/文胸/舒适时尚百搭休闲性感文胸.jpg', price: 129 },
  '时尚舒适性感聚拢文胸': { category: '文胸', image: 'goso_img/文胸/时尚舒适性感聚拢文胸.jpg', price: 99 },
  '三角杯无钢圈无痕文胸': { category: '文胸', image: 'goso_img/文胸/三角杯无钢圈无痕文胸.jpg', price: 79 },
  '百搭性感蕾丝前扣聚拢内衣文胸': { category: '文胸', image: 'goso_img/文胸/百搭性感蕾丝前扣聚拢内衣文胸.jpg', price: 119 },
  '简约聚拢休闲文胸（A/B/C-）': { category: '文胸', image: 'goso_img/文胸/简约聚拢休闲文胸（A_B_C-）.jpg', price: 89 },
  '无钢圈性感舒适贴服文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈性感舒适贴服文胸.jpg', price: 99 },
  '无钢圈蕾丝下围无痕文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈蕾丝下围无痕文胸.jpg', price: 79 },
  '无钢圈蕾丝贴服B杯': { category: '文胸', image: 'goso_img/文胸/无钢圈蕾丝贴服B杯.jpg', price: 89 },
  '无钢圈螺纹文胸': { category: '文胸', image: 'goso_img/文胸/无钢圈螺纹文胸.jpg', price: 99 },
  '文胸1': { category: '文胸', image: 'goso_img/文胸/文胸1.jpg', price: 59 },
  '文胸2': { category: '文胸', image: 'goso_img/文胸/文胸2.jpg', price: 69 },
  '文胸3': { category: '文胸', image: 'goso_img/文胸/文胸3.jpg', price: 79 },
  '文胸4': { category: '文胸', image: 'goso_img/文胸/文胸4.jpg', price: 89 },
  '文胸5': { category: '文胸', image: 'goso_img/文胸/文胸5.jpg', price: 99 },
  '文胸6': { category: '文胸', image: 'goso_img/文胸/文胸6.jpg', price: 109 },
  '文胸7': { category: '文胸', image: 'goso_img/文胸/文胸7.jpg', price: 119 },
  '文胸8': { category: '文胸', image: 'goso_img/文胸/文胸8.jpg', price: 129 },
  '文胸9': { category: '文胸', image: 'goso_img/文胸/文胸9.jpg', price: 139 },
  '文胸10': { category: '文胸', image: 'goso_img/文胸/文胸10.jpg', price: 149 },
  '文胸A': { category: '文胸', image: 'goso_img/文胸/文胸A.jpg', price: 79 },
  '休闲文胸（A+B）': { category: '文胸', image: 'goso_img/文胸/休闲文胸（A+B）.jpg', price: 89 },
  '无钢圈聚焦文胸（B）': { category: '文胸', image: 'goso_img/文胸/无钢圈聚焦文胸（B）.jpg', price: 99 },
  '锦纶休闲文胸（ABC）': { category: '文胸', image: 'goso_img/文胸/锦纶休闲文胸（ABC）.jpg', price: 109 },
  '硅胶文胸': { category: '文胸', image: 'goso_img/文胸/硅胶文胸.jpg', price: 69 },
  '「女士」女士家居服情侣款简约牛奶绒长袖套装': { category: '家居服', image: 'goso_img/家居服/「女士」女士家居服情侣款简约牛奶绒长袖套装.jpg', price: 119.98 },
  '休闲开扣家居服套装': { category: '家居服', image: 'goso_img/家居服/休闲开扣家居服套装.jpg', price: 99.9 },
  '柔美简雅长袖套装': { category: '家居服', image: 'goso_img/家居服/柔美简雅长袖套装.jpg', price: 79.9 },
  '男士经典棉质开扣长袖套装': { category: '家居服', image: 'goso_img/家居服/男士经典棉质开扣长袖套装.jpg', price: 59.9 },
  '柔美简雅法式名媛风长袖套装': { category: '家居服', image: 'goso_img/家居服/柔美简雅法式名媛风长袖套装.jpg', price: 99.9 },
  '甜美风缎面雪纺家居服': { category: '家居服', image: 'goso_img/家居服/甜美风缎面雪纺家居服.jpg', price: 79.9 },
  '可爱甜美短袖家居服': { category: '家居服', image: 'goso_img/家居服/可爱甜美短袖家居服.jpg', price: 59.9 },
  '时尚休闲短袖家居服': { category: '家居服', image: 'goso_img/家居服/时尚休闲短袖家居服.jpg', price: 49.9 },
  '保暖印花翻领开扣睡衣套装': { category: '家居服', image: 'goso_img/家居服/保暖印花翻领开扣睡衣套装.jpg', price: 119.98 },
  '印花舒适长袖长裤女士家居服': { category: '家居服', image: 'goso_img/家居服/印花舒适长袖长裤女士家居服.jpg', price: 99.9 },
  '圆领长袖家居服套装': { category: '家居服', image: 'goso_img/家居服/圆领长袖家居服套装.jpg', price: 79.9 },
  '加绒冬中长款睡衣套装': { category: '家居服', image: 'goso_img/家居服/加绒冬中长款睡衣套装.jpg', price: 139.98 },
  '翻领保暖睡衣女士家居服套装': { category: '家居服', image: 'goso_img/家居服/翻领保暖睡衣女士家居服套装.jpg', price: 119.98 },
  '菠萝印花保暖长袍女士家居服': { category: '家居服', image: 'goso_img/家居服/菠萝印花保暖长袍女士家居服.jpg', price: 129.98 },
  '小鹿刺绣加绒睡衣套装': { category: '家居服', image: 'goso_img/家居服/小鹿刺绣加绒睡衣套装.jpg', price: 119.98 },
  '卡通格子家居服女士睡衣套装': { category: '家居服', image: 'goso_img/家居服/卡通格子家居服女士睡衣套装.jpg', price: 99.9 },
  '经典女士翻领开扣长袖套装': { category: '家居服', image: 'goso_img/家居服/经典女士翻领开扣长袖套装.jpg', price: 89.9 },
  '冬季加绒女士家居服': { category: '家居服', image: 'goso_img/家居服/冬季加绒女士家居服.jpg', price: 109.98 },
  '中长款睡衣套装女士家居服': { category: '家居服', image: 'goso_img/家居服/中长款睡衣套装女士家居服.jpg', price: 99.9 },
  '家居服': { category: '家居服', image: 'goso_img/家居服/家居服.jpg', price: 69.9 },
  '家居服1': { category: '家居服', image: 'goso_img/家居服/家居服1.jpg', price: 79.9 },
  '家居服2': { category: '家居服', image: 'goso_img/家居服/家居服2.jpg', price: 89.9 },
  '家居服3': { category: '家居服', image: 'goso_img/家居服/家居服3.jpg', price: 99.9 },
  '家居服4': { category: '家居服', image: 'goso_img/家居服/家居服4.jpg', price: 109.9 },
  '家居服5': { category: '家居服', image: 'goso_img/家居服/家居服5.jpg', price: 119.9 },
  '家居服6': { category: '家居服', image: 'goso_img/家居服/家居服6.jpg', price: 129.9 },
  '家居服7': { category: '家居服', image: 'goso_img/家居服/家居服7.jpg', price: 139.9 },
  '家居服8': { category: '家居服', image: 'goso_img/家居服/家居服8.jpg', price: 149.9 },
  '家居服9': { category: '家居服', image: 'goso_img/家居服/家居服9.jpg', price: 159.9 },
  '家居服10': { category: '家居服', image: 'goso_img/家居服/家居服10.jpg', price: 169.9 },
  '可爱潮趣植物长袖开扣套装': { category: '家居服', image: 'goso_img/家居服/可爱潮趣植物长袖开扣套装.jpg', price: 79.9 },
  '经典优雅长袖开扣套装': { category: '家居服', image: 'goso_img/家居服/经典优雅长袖开扣套装.jpg', price: 89.9 },
  '时尚休闲长袖套头套装': { category: '家居服', image: 'goso_img/家居服/时尚休闲长袖套头套装.jpg', price: 99.9 },
  '清新条纹气质甜美长袖女睡衣家居服套装': { category: '家居服', image: 'goso_img/家居服/清新条纹气质甜美长袖女睡衣家居服套装.jpg', price: 79.9 },
  '可爱简约套头长袖单件裙': { category: '家居服', image: 'goso_img/家居服/可爱简约套头长袖单件裙.jpg', price: 59.9 },
  '【5D立体舱】印花莫莱尔男士内裤': { category: '内裤', image: 'goso_img/内裤/【5D立体舱】印花莫莱尔男士内裤.jpg', price: 29 },
  '【云朵裤】柔软舒适中腰无尺码无痕云朵裤': { category: '内裤', image: 'goso_img/内裤/【云朵裤】柔软舒适中腰无尺码无痕云朵裤.jpg', price: 19 },
  '【无缝超弹裸感裤】淑女中腰无缝内裤': { category: '内裤', image: 'goso_img/内裤/【无缝超弹裸感裤】淑女中腰无缝内裤.jpg', price: 15 },
  '【柔爽裤5A级抗菌】优雅高腰包臀棉质内裤': { category: '内裤', image: 'goso_img/内裤/【柔爽裤5A级抗菌】优雅高腰包臀棉质内裤.jpg', price: 19 },
  '【生姜暖宫】淑女中腰棉质内裤': { category: '内裤', image: 'goso_img/内裤/【生姜暖宫】淑女中腰棉质内裤.png', price: 29 },
  '【生姜暖宫】淑女高腰棉质内裤': { category: '内裤', image: 'goso_img/内裤/【生姜暖宫】淑女高腰棉质内裤.jpg', price: 39 },
  '【羊绒蛋白裤】淑女中腰莫莱尔内裤': { category: '内裤', image: 'goso_img/内裤/【羊绒蛋白裤】淑女中腰莫莱尔内裤.jpg', price: 29 },
  '【羊绒蛋白裤】淑女高腰莫莱尔内裤': { category: '内裤', image: 'goso_img/内裤/【羊绒蛋白裤】淑女高腰莫莱尔内裤.jpg', price: 39 },
  '【蜂巢暖宫】淑女中腰无缝内裤': { category: '内裤', image: 'goso_img/内裤/【蜂巢暖宫】淑女中腰无缝内裤.jpg', price: 19 },
  '【蜂巢暖宫】淑女高腰无缝内裤': { category: '内裤', image: 'goso_img/内裤/【蜂巢暖宫】淑女高腰无缝内裤.jpg', price: 29 },
  '三条装纯棉舒适女士内裤': { category: '内裤', image: 'goso_img/内裤/三条装纯棉舒适女士内裤.jpg', price: 49 },
  '三角镂空大码女士内裤': { category: '内裤', image: 'goso_img/内裤/三角镂空大码女士内裤.jpg', price: 19 },
  '优雅中腰包臀泳布女士内裤': { category: '内裤', image: 'goso_img/内裤/优雅中腰包臀泳布女士内裤.jpg', price: 15 },
  '优雅高腰包臀纯棉女士内裤': { category: '内裤', image: 'goso_img/内裤/优雅高腰包臀纯棉女士内裤.jpg', price: 19 },
  '优雅高腰蕾丝网纱内裤小S裤': { category: '内裤', image: 'goso_img/内裤/优雅高腰蕾丝网纱内裤小S裤.JPG', price: 29 },
  '印花棉质包筋男士内裤': { category: '内裤', image: 'goso_img/内裤/印花棉质包筋男士内裤.jpg', price: 19 },
  '印花棉质男士内裤': { category: '内裤', image: 'goso_img/内裤/印花棉质男士内裤.jpg', price: 15 },
  '印花莫莱尔包筋男士内裤': { category: '内裤', image: 'goso_img/内裤/印花莫莱尔包筋男士内裤.jpg', price: 29 },
  '印花莫莱尔男士内裤': { category: '内裤', image: 'goso_img/内裤/印花莫莱尔男士内裤.jpg', price: 19 },
  '四条装时尚女士内裤': { category: '内裤', image: 'goso_img/内裤/四条装时尚女士内裤.jpg', price: 59 },
  '基础低腰包臀舒适棉质女士内裤': { category: '内裤', image: 'goso_img/内裤/基础低腰包臀舒适棉质女士内裤.jpg', price: 15 },
  '基础棉质男士内裤': { category: '内裤', image: 'goso_img/内裤/基础棉质男士内裤.jpg', price: 19 },
  '基础莫代尔明筋男士内裤': { category: '内裤', image: 'goso_img/内裤/基础莫代尔明筋男士内裤.jpg', price: 29 },
  '基础莫代尔男士内裤': { category: '内裤', image: 'goso_img/内裤/基础莫代尔男士内裤.JPG', price: 19 },
  '基础莫莱尔男士内裤': { category: '内裤', image: 'goso_img/内裤/基础莫莱尔男士内裤.jpg', price: 15 },
  '彩棉色纱抗菌内裤': { category: '内裤', image: 'goso_img/内裤/彩棉色纱抗菌内裤.jpg', price: 29 },
  '新品蕾丝少女低腰无痕大码三角裤': { category: '内裤', image: 'goso_img/内裤/新品蕾丝少女低腰无痕大码三角裤.jpg', price: 19 },
  '时尚低腰包臀泳布女士内裤': { category: '内裤', image: 'goso_img/内裤/时尚低腰包臀泳布女士内裤.jpg', price: 15 },
  '时尚蕾丝泳布小三角女士内裤': { category: '内裤', image: 'goso_img/内裤/时尚蕾丝泳布小三角女士内裤.jpg', price: 29 },
  '明筋基础棉质男士内裤': { category: '内裤', image: 'goso_img/内裤/明筋基础棉质男士内裤.jpg', price: 19 },
  '淑女中腰棉质内裤': { category: '内裤', image: 'goso_img/内裤/淑女中腰棉质内裤.jpg', price: 15 },
  '淑女中腰泳布配套内裤': { category: '内裤', image: 'goso_img/内裤/淑女中腰泳布配套内裤.jpg', price: 19 },
  '淑女中腰磨毛内裤': { category: '内裤', image: 'goso_img/内裤/淑女中腰磨毛内裤.jpg', price: 29 },
  '淑女低腰泳布内裤': { category: '内裤', image: 'goso_img/内裤/淑女低腰泳布内裤.JPG', price: 15 },
  '舒适低腰全棉包臀棉质三角内裤': { category: '内裤', image: 'goso_img/内裤/舒适低腰全棉包臀棉质三角内裤.jpg', price: 19 },
  '韩版平角三条装男士内裤': { category: '内裤', image: 'goso_img/内裤/韩版平角三条装男士内裤.jpg', price: 49 },
  '韩版平角条纹时尚舒适男士内裤': { category: '内裤', image: 'goso_img/内裤/韩版平角条纹时尚舒适男士内裤.jpg', price: 39 },
  '韩版无缝时尚舒适无痕四角男士内裤': { category: '内裤', image: 'goso_img/内裤/韩版无缝时尚舒适无痕四角男士内裤.jpg', price: 29 },
  '「男士」蚕丝羊毛暖绒中厚圆领保暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/「男士」蚕丝羊毛暖绒中厚圆领保暖套装.jpg', price: 169 },
  '「男士一口价」阳离子云朵绒牙签条圆领中厚保暖打底套装': { category: '保暖衣', image: 'goso_img/保暖衣/「男士一口价」阳离子云朵绒牙签条圆领中厚保暖打底套装.jpg', price: 139 },
  '「男士一口价」阳离子超柔绒圆领厚款保暖打底套装': { category: '保暖衣', image: 'goso_img/保暖衣/「男士一口价」阳离子超柔绒圆领厚款保暖打底套装.jpg', price: 159 },
  '「男士一口价」云朵绒锻彩圆领中厚保暖打底套装': { category: '保暖衣', image: 'goso_img/保暖衣/「男士一口价」云朵绒锻彩圆领中厚保暖打底套装.jpg', price: 149 },
  '舒暖亲肤保暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/舒暖亲肤保暖套装.jpg', price: 99 },
  '舒暖亲肤蜜桃绒套装': { category: '保暖衣', image: 'goso_img/保暖衣/舒暖亲肤蜜桃绒套装.jpg', price: 119 },
  '轻塑形收腹收腰保暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/轻塑形收腹收腰保暖套装.jpg', price: 139 },
  '超弹塑暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/超弹塑暖套装.jpg', price: 129 },
  '亲肤棉净版圆领套装': { category: '保暖衣', image: 'goso_img/保暖衣/亲肤棉净版圆领套装.jpg', price: 99 },
  '轻塑形德绒保暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/轻塑形德绒保暖套装.jpg', price: 149 },
  '复合超柔里男打底裤加绒秋裤': { category: '保暖衣', image: 'goso_img/保暖衣/复合超柔里男打底裤加绒秋裤.jpg', price: 79 },
  '女士恒温显瘦修身美体内衣套装': { category: '保暖衣', image: 'goso_img/保暖衣/女士恒温显瘦修身美体内衣套装.jpg', price: 129 },
  '秋季轻薄显瘦连体裤打底袜女士打底裤': { category: '保暖衣', image: 'goso_img/保暖衣/秋季轻薄显瘦连体裤打底袜女士打底裤.jpg', price: 89 },
  '6800D高腰暖宫提臀加绒连袜裤厚女士打底裤': { category: '保暖衣', image: 'goso_img/保暖衣/6800D高腰暖宫提臀加绒连袜裤厚女士打底裤.jpg', price: 99 },
  '700D樱花棉螺纹连脚打底裤': { category: '保暖衣', image: 'goso_img/保暖衣/700D樱花棉螺纹连脚打底裤.jpg', price: 79 },
  'T基础圆领加绒保暖套装': { category: '保暖衣', image: 'goso_img/保暖衣/T基础圆领加绒保暖套装.jpg', price: 109 },
  'T超弹基础圆领爱心美体套装': { category: '保暖衣', image: 'goso_img/保暖衣/T超弹基础圆领爱心美体套装.jpg', price: 129 },
  'T超弹塑暖基础罗纹圆领套装': { category: '保暖衣', image: 'goso_img/保暖衣/T超弹塑暖基础罗纹圆领套装.jpg', price: 139 },
  '基础圆领细绒美体套装': { category: '保暖衣', image: 'goso_img/保暖衣/基础圆领细绒美体套装.jpg', price: 119 },
  '新保暖衣': { category: '保暖衣', image: 'goso_img/保暖衣/新保暖衣.jpg', price: 109 },
  '时尚百搭高领保暖打底衫': { category: '保暖衣', image: 'goso_img/保暖衣/时尚百搭高领保暖打底衫.jpg', price: 99 },
  '时尚细罗纹高领美体上衣': { category: '保暖衣', image: 'goso_img/保暖衣/时尚细罗纹高领美体上衣.jpg', price: 129 },
  '莫代尔高领加绒打底上衣': { category: '保暖衣', image: 'goso_img/保暖衣/莫代尔高领加绒打底上衣.jpg', price: 109 },
  '超弹基础圆领菱形美体套装': { category: '保暖衣', image: 'goso_img/保暖衣/超弹基础圆领菱形美体套装.jpg', price: 139 },
  '高弹力保暖秋裤女打底裤': { category: '保暖衣', image: 'goso_img/保暖衣/高弹力保暖秋裤女打底裤.jpg', price: 79 }
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function getProductsByCategory(category) {
  return Object.entries(productMapping)
    .filter(([name, data]) => data.category === category)
    .map(([name, data], index) => ({
      id: index,
      name: name,
      category: data.category,
      image: data.image,
      price: data.price,
      sales: Math.floor(Math.random() * 1000) + 100
    }));
}

function getAllProducts() {
  return Object.entries(productMapping).map(([name, data], index) => ({
    id: index,
    name: name,
    category: data.category,
    image: data.image,
    price: data.price,
    sales: Math.floor(Math.random() * 1000) + 100
  }));
}

function addToCart(productId) {
  const products = getAllProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartBadge();
  showToast('已添加到购物车');
}

function addToCartCommon(product) {
  if (!product) return;
  
  const existingItem = cart.find(item => item.productId === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartBadge();
  showToast('已添加到购物车');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  updateCartBadge();
  showToast('已从购物车移除');
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.productId === productId);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity < 1) {
    item.quantity = 1;
  }
  
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-btn .badge');
  if (badge) {
    const count = getCartCount();
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function showToast(message, duration = 2000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, duration);
}

function formatPrice(price) {
  return '¥' + price.toFixed(2);
}

function navigateTo(page) {
  window.location.href = page + '.html';
}

function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  
  navItems.forEach(item => {
    item.classList.remove('active');
    const page = item.getAttribute('data-page');
    if (page === currentPage) {
      item.classList.add('active');
    }
  });
}

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  
  const inner = carousel.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  
  let currentIndex = 0;
  let interval;
  
  function showSlide(index) {
    inner.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }
  
  function nextSlide() {
    showSlide((currentIndex + 1) % items.length);
  }
  
  function prevSlide() {
    showSlide((currentIndex - 1 + items.length) % items.length);
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
  });
  
  carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
  });
  
  interval = setInterval(nextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
  updateCartBadge();
  initCarousel();
});