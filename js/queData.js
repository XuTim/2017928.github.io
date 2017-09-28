var queData = [
    { "题型": "单选题", "题干": "全国两会是（ ）和（ ）的简称。", "A": "全国人大常务委员会、中国共产党全国代表大会", "B": "中国人民政治协商会议、全国人民代表大会", "C": "全国人民代表大会、全国人大常务委员会", "D": "中国人民政治协商会议、中国共产党全国代表大会", "答案": "B", "题号": "1" },
    { "题型": "单选题", "题干": "我国首次为经济增长预期目标划定了明确区间。从2014年的7.5%左右，到2015年的7%左右，今年清晰设定在（ ）的区间。", "A": "6.0%～6.5%", "B": "6.5%～7.0%", "C": "7.0%～7.5%", "D": "7.5%～8.0%", "答案": "B", "题号": "2" },
    { "题型": "单选题", "题干": "全国“两会”形成自( )年，在三届政协召开一天后，二届人大也同时召开，政协委员列席人代会听取政府工作报告。", "A": "1949", "B": "1945", "C": "1959", "D": "1979", "答案": "C", "题号": "3" },
    { "题型": "单选题", "题干": "两会（ ）年一届，（ ）年召开一次。", "A": "5；1", "B": "5；2", "C": "2；1", "D": "2；2", "答案": "A", "题号": "4" },
    { "题型": "单选题", "题干": "扶贫脱贫是硬任务，各级政府已经立下军令状，必须按时保质保量完成，预计完成（ ）万以上农村贫困人口脱贫任务。", "A": "100", "B": "200", "C": "1000", "D": "2000", "答案": "C", "题号": "5" },
    { "题型": "单选题", "题干": "以下哪个选项不是中共十八届五中全会公布的“十三五”规划建议中的五大发展理念。", "A": "创新", "B": "合作", "C": "共享", "D": "开放", "答案": "B", "题号": "6" },
    { "题型": "单选题", "题干": "会中提出的国企改革，注重清除“僵尸”产业，其中国企改革是以什么为主要内容的改革呢？", "A": "经济增长", "B": "人才分配", "C": "政策结构", "D": "产权结构", "答案": "D", "题号": "7" },
    { "题型": "单选题", "题干": "中国政府计划用3个10年来实现从工业大国向工业强国的转变。《“中国制造2025”规划纲要》就是第一个10年的行动纲领，目标是把中国从全球制造业的第（ ）方阵，提升到第（ ）方阵。", "A": "二，一", "B": "三，二 ", "C": "四，三 ", "D": "五，四", "答案": "B", "题号": "8" },
    { "题型": "单选题", "题干": "2016年中国两会，承载着“十三五”开好局和（ ）年建成全面小康社会的使命。", "A": "2025", "B": "2030", "C": "2020", "D": "2035", "答案": "C", "题号": "9" },
    { "题型": "单选题", "题干": "作为国家治理的基础和重要支柱，财税体制改革备受社会关注。2014年6月，中央政治局通过《深化财税体制改革总体方案》，以建立现代财政制度为目标，提出了三大改革任务：（ ）", "A": "改进预算管理制度", "B": "完善税收制度", "C": "建立事权和支出责任相适应的制度", "D": "完善财务管理制度", "答案": "A", "题号": "10" }
];
var tiData = [
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第一次全国代表大会", "图片": "css/tipic1.png", "主要": "中国共产党第一次全国代表大会鉴于当时党员人数少、地方组织尚不健全，决定暂不成立中央委员会，先建立三人组成的中央局，并选举陈独秀任书记，张国焘为组织主任，李达为宣传主任。党的第一个中央机关由此产生。1", "重要": "中国共产党第一次全国代表大会鉴于当时党员人数少、地方组织尚不健全，决定暂不成立中央委员会，先建立三人组成的中央局，并选举陈独秀任书记，张国焘为组织主任，李达为宣传主任。党的第一个中央机关由此产生。1", "题号": "1" },
    { "时间": "1922年7月16日至23日", "题干": "中国共产党第二次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "2" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第三次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "3" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第四次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "4" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第五次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "5" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第六次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "6" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第七次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "7" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第八次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "8" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第九次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "9" },
    { "时间": "1921年7月23日至31日", "题干": "中国共产党第十次全国代表大会", "图片": "css/tipic1.png", "主要": "主要2", "重要": "重要2", "题号": "10" }
];