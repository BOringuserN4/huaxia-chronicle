/* 秦汉卷：秦、西汉、东汉 */
window.HISTORY_DATA = window.HISTORY_DATA || [];
window.HISTORY_DATA.push(
  {
    id: 'qin',
    kind: 'dynasty',
    name: '秦',
    fullName: '秦朝',
    seal: '秦',
    start: -221,
    end: -207,
    riverStart: -221,
    riverEnd: -207,
    capital: '咸阳',
    tagline: '六王毕，四海一',
    intro:
      '公元前二二一年，秦王政扫灭六国，建立起中国历史上第一个大一统帝国。书同文、车同轨、行郡县，奠定此后两千余年的国家形态；然而严刑峻法与滥用民力，也让这个帝国在十五年里轰然崩塌。',
    theme: {
      dark: true,
      bg: '#141310',
      panel: '#1d1a15',
      paper: '#211d17',
      ink: '#f1e6cf',
      muted: '#b3a68c',
      seal: '#b04635',
      river: '#8a6a35',
      accent: '#c8a45c',
      line: 'rgba(200,164,92,.26)',
      wash: 'rgba(200,164,92,.09)',
      motif: 'qin'
    },
    emperors: [
      {
        id: 'qin-shihuang',
        name: '嬴政',
        title: '秦始皇',
        era: '秦王政二十六年起',
        start: -221,
        end: -210,
        reigns: [[-221, -210]],
        bio: '十三岁即秦王位，三十九岁完成统一。废分封、立郡县，统一文字、货币与度量衡，自号“始皇帝”。晚年求仙、兴役，巡游途中崩于沙丘。',
        portrait: { hat: 'mian', beard: 'long', face: 'lean', age: 'old', expression: 'stern' }
      },
      {
        id: 'qin-ershi',
        name: '胡亥',
        title: '秦二世',
        era: '二世',
        start: -210,
        end: -207,
        reigns: [[-210, -207]],
        bio: '在赵高、李斯拥立下即位。深居宫中，诛杀宗室，听任赵高专权。天下大乱之际被赵高逼杀于望夷宫。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'qin-ziying',
        name: '子婴',
        title: '秦王',
        era: '在位四十六日',
        start: -207,
        end: -207,
        reigns: [[-207, -207]],
        bio: '二世之后被立为秦王，去帝号。设计诛杀赵高，却已无力回天。刘邦兵临咸阳，子婴素车白马出降，秦亡。',
        portrait: { hat: 'guan', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      }
    ],
    events: [
      {
        id: 'qin-unify',
        year: -221,
        era: '秦王政二十六年',
        title: '六王毕，四海一',
        type: 'politics',
        emperor: 'qin-shihuang',
        summary: '秦灭六国，中国首次形成中央集权的大一统帝国。',
        detail:
          '自公元前二三〇年灭韩起，秦军十年间依次荡平赵、魏、楚、燕、齐。秦王政称“始皇帝”，分天下为三十六郡，废分封而行郡县，统一法律、货币、度量衡与文字，修筑驰道，北筑长城。',
        significance:
          '“百代皆行秦政法”。皇帝制度、郡县制与文书行政，成为此后两千余年中国国家治理的基本框架。',
        tags: ['大一统', '郡县制', '车同轨']
      },
      {
        id: 'qin-greatwall',
        year: -214,
        era: '始皇三十三年',
        title: '北筑长城，南征百越',
        type: 'war',
        emperor: 'qin-shihuang',
        summary: '蒙恬北逐匈奴，连接旧长城；秦军南平百越，设三郡。',
        detail:
          '蒙恬率三十万北击匈奴，收复河南地，将燕、赵、秦旧长城连缀为万里防线。南面继续用兵百越，设桂林、南海、象郡，并开灵渠沟通湘漓水系。',
        significance:
          '奠定帝国疆域的基本轮廓，也因工程浩大、徭役繁重，埋下民怨与崩溃的隐患。',
        tags: ['长城', '百越', '灵渠']
      },
      {
        id: 'qin-bookburning',
        year: -213,
        endYear: -212,
        era: '始皇三十四年—三十五年',
        title: '焚书坑儒',
        type: 'culture',
        emperor: 'qin-shihuang',
        summary: '禁私学、焚诗书，次年坑杀方士儒生四百六十余人。',
        detail:
          '李斯建议焚毁民间所藏《诗》《书》与诸子著作，只留医药、卜筮、种树之书，禁以古非今。次年，始皇因方士求仙不成而震怒，坑杀相关方士、儒生四百六十余人。',
        significance:
          '思想专制的极端尝试。秦亡之后，“焚书坑儒”成为历代反思暴政与学术自由的重要镜鉴。',
        tags: ['思想专制', '李斯']
      },
      {
        id: 'qin-shaqiu',
        year: -210,
        era: '始皇三十七年',
        title: '沙丘之变',
        type: 'politics',
        emperor: 'qin-shihuang',
        summary: '始皇崩于沙丘，赵高、李斯矫诏立胡亥，赐死扶苏。',
        detail:
          '秦始皇东巡途中病逝于沙丘平台。中车府令赵高与丞相李斯秘不发丧，篡改遗诏，立少子胡亥为太子，并以始皇名义赐死长子扶苏与大将蒙恬。',
        significance:
          '一次宫廷政变改变了帝国继承秩序。胡亥即位后诛戮宗室、加重赋役，秦廷迅速失控。',
        tags: ['沙丘', '赵高', '扶苏']
      },
      {
        id: 'qin-daze',
        year: -209,
        era: '二世元年',
        title: '大泽乡起义',
        type: 'society',
        emperor: 'qin-ershi',
        summary: '陈胜、吴广揭竿而起，喊出“王侯将相宁有种乎”。',
        detail:
          '九百名戍卒因大雨误期，按秦法当斩。陈胜、吴广在蕲县大泽乡率众起义，建“张楚”政权。六国旧贵族与各地民众纷纷响应，反秦烈火迅速蔓延。',
        significance:
          '中国历史上第一次大规模农民起义。“王侯将相宁有种乎”成为后世反抗暴政的经典宣言。',
        tags: ['陈胜吴广', '农民起义', '张楚']
      },
      {
        id: 'qin-julu',
        year: -207,
        era: '二世三年',
        title: '巨鹿之战',
        type: 'war',
        emperor: 'qin-ershi',
        summary: '项羽破釜沉舟，以少胜多，击溃秦军主力。',
        detail:
          '章邯、王离率秦军围赵王歇于巨鹿。项羽渡漳水后沉船破釜，只带三日粮，率楚军九战九捷，大破王离，迫使章邯投降。诸侯将入辕门，皆膝行而前。',
        significance:
          '秦军主力覆灭，帝国失去最后屏障。项羽由此确立反秦联军领袖地位。',
        tags: ['项羽', '破釜沉舟', '巨鹿']
      },
      {
        id: 'qin-fall',
        year: -207,
        era: '秦王婴元年',
        title: '子婴出降，秦亡',
        type: 'politics',
        emperor: 'qin-ziying',
        summary: '刘邦入武关，子婴素车白马出降；项羽入咸阳，焚宫室。',
        detail:
          '刘邦避实就虚，经武关进入关中。子婴诛赵高后出降于轵道旁。不久项羽率军入咸阳，杀子婴，焚秦宫室，大火三月不灭。',
        significance:
          '十五年的大一统实验骤然终结，天下进入楚汉相争。秦制的遗产却被汉朝继承并改造。',
        tags: ['秦亡', '刘邦', '项羽']
      }
    ]
  },
  {
    id: 'western-han',
    kind: 'dynasty',
    name: '西汉',
    fullName: '西汉',
    seal: '汉',
    start: -202,
    end: 9,
    riverStart: -202,
    riverEnd: 9,
    capital: '长安',
    tagline: '犯强汉者，虽远必诛',
    intro:
      '刘邦在楚汉相争中胜出，定都长安，承秦制而矫其弊。文景之世休养生息，武帝一朝开疆拓土、独尊儒术，汉家制度与“汉”之名号自此凝成民族共同体的长久记忆。',
    theme: {
      bg: '#efe5d2',
      panel: '#f7efdf',
      paper: '#f3e9d6',
      ink: '#241d16',
      muted: '#75695a',
      seal: '#8e2f27',
      river: '#8e2f27',
      accent: '#3e6157',
      line: 'rgba(62,97,87,.28)',
      wash: 'rgba(142,47,39,.07)',
      motif: 'han'
    },
    emperors: [
      {
        id: 'han-gaozu',
        name: '刘邦',
        title: '汉高祖',
        era: '汉五年称帝',
        start: -202,
        end: -195,
        reigns: [[-202, -195]],
        bio: '沛县亭长出身的开国皇帝。楚汉相争五年，垓下合围项羽。称帝后剪除异姓王，与民休息，命萧何定律令、叔孙通制礼仪。',
        portrait: { hat: 'mian', beard: 'long', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'han-huidi',
        name: '刘盈',
        title: '汉惠帝',
        era: '惠帝',
        start: -195,
        end: -188,
        reigns: [[-195, -188]],
        bio: '刘邦嫡子，仁弱宽厚。即位后推行黄老无为，减轻赋役；因目睹吕后残害戚夫人母子，郁郁而终。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'han-lühou',
        name: '吕雉',
        title: '高后',
        era: '临朝称制',
        start: -188,
        end: -180,
        reigns: [[-188, -180]],
        bio: '刘邦皇后。惠帝死后临朝称制八年，分封诸吕，延续休养生息政策。司马迁将其列入“本纪”，是中国历史上第一位实际执政的女性统治者。',
        portrait: { hat: 'hou', beard: 'none', face: 'oval', age: 'mature', expression: 'stern', sex: 'f' }
      },
      {
        id: 'han-wendi',
        name: '刘恒',
        title: '汉文帝',
        era: '文帝',
        start: -180,
        end: -157,
        reigns: [[-180, -157]],
        bio: '以代王入继大统。躬行节俭，轻徭薄赋，废除肉刑，纳贾谊、晁错之言。与其子景帝共创“文景之治”。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'han-jingdi',
        name: '刘启',
        title: '汉景帝',
        era: '景帝',
        start: -157,
        end: -141,
        reigns: [[-157, -141]],
        bio: '继续与民休息，平定七国之乱，削弱诸侯王势力，巩固中央集权。因错杀晁错、废黜太子等事，后世评价不一。',
        portrait: { hat: 'mian', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'han-wudi',
        name: '刘彻',
        title: '汉武帝',
        era: '建元—后元',
        start: -141,
        end: -87,
        reigns: [[-141, -87]],
        bio: '在位五十四年。罢黜百家、独尊儒术，设太学、行推恩，北击匈奴，通西域，开疆拓土。晚年穷兵黩武、巫蛊之祸，下轮台诏反省。',
        portrait: { hat: 'mian', beard: 'long', face: 'square', age: 'old', expression: 'stern' }
      },
      {
        id: 'han-zhaodi',
        name: '刘弗陵',
        title: '汉昭帝',
        era: '始元—元平',
        start: -87,
        end: -74,
        reigns: [[-87, -74]],
        bio: '八岁即位，由霍光等辅政。轻徭薄赋，重启和亲，召开盐铁会议，扭转武帝晚年的国力虚耗，史称“昭宣中兴”的开端。',
        portrait: { hat: 'mian', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        id: 'han-xuandi',
        name: '刘询',
        title: '汉宣帝',
        era: '本始—黄龙',
        start: -74,
        end: -49,
        reigns: [[-74, -49]],
        bio: '巫蛊之祸中流落民间的皇曾孙。即位后励精图治，整饬吏治，降服匈奴，设立西域都护府。常被称为西汉最有作为的皇帝之一。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'han-yuandi',
        name: '刘奭',
        title: '汉元帝',
        era: '初元—竟宁',
        start: -49,
        end: -33,
        reigns: [[-49, -33]],
        bio: '好儒术，重用宦官石显，朝政渐趋紊乱。竟宁元年，王昭君出塞和亲，汉匈维持和平。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'han-chengdi',
        name: '刘骜',
        title: '汉成帝',
        era: '建始—绥和',
        start: -33,
        end: -7,
        reigns: [[-33, -7]],
        bio: '沉湎酒色，宠信赵飞燕姐妹，委政于外戚王氏。王莽由此步入权力中心。西汉衰象已显。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'han-aidi',
        name: '刘欣',
        title: '汉哀帝',
        era: '建平—元寿',
        start: -7,
        end: -1,
        reigns: [[-7, -1]],
        bio: '以定陶王入继。试图限制外戚与豪强，重用董贤，政令反复。在位六年而崩，王氏势力再度抬头。',
        portrait: { hat: 'mian', beard: 'none', face: 'oval', age: 'young', expression: 'mild' }
      },
      {
        id: 'han-pingdi',
        name: '刘衎',
        title: '汉平帝',
        era: '元始',
        start: -1,
        end: 6,
        reigns: [[-1, 6]],
        bio: '九岁即位，由王莽辅政。元始年间王莽声望日隆，加九锡、称安汉公。平帝十四岁暴崩，死因成谜。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'calm' }
      },
      {
        id: 'han-ruzi',
        name: '刘婴',
        title: '孺子婴',
        era: '居摄—初始',
        start: 6,
        end: 9,
        reigns: [[6, 9]],
        bio: '两岁被立为皇太子，号“孺子”，王莽居摄践祚。公元九年王莽称帝，改国号为新，西汉灭亡。',
        portrait: { hat: 'guan', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'wh-found',
        year: -202,
        era: '汉高祖五年',
        title: '垓下决胜，汉室开基',
        type: 'war',
        emperor: 'han-gaozu',
        summary: '刘邦合围项羽于垓下，同年称帝，定都长安。',
        detail:
          '韩信、彭越、英布等合兵垓下，楚军夜闻四面楚歌，项羽突围至乌江自刎。同年二月，刘邦在定陶氾水之阳即皇帝位，初都洛阳，后从娄敬、张良之议西都长安。',
        significance:
          '楚汉相争落幕，汉朝建立。汉承秦制而有所损益，开启四百年汉家天下。',
        tags: ['垓下', '项羽', '长安']
      },
      {
        id: 'wh-baideng',
        year: -200,
        era: '汉高祖七年',
        title: '白登之围',
        type: 'diplomacy',
        emperor: 'han-gaozu',
        summary: '刘邦北征匈奴被围七日，此后汉匈以和亲维持和平。',
        detail:
          '韩王信降匈奴，刘邦亲率大军北征，轻敌冒进，被冒顿单于四十万骑围困于白登山七日七夜。陈平以重金贿赂阏氏，方得脱险。此后汉廷采娄敬之策，与匈奴和亲。',
        significance:
          '汉初国力不足，只能以和亲、互市换取边境安宁，为文景之治的休养生息赢得时间。',
        tags: ['匈奴', '和亲', '冒顿']
      },
      {
        id: 'wh-lü',
        year: -180,
        era: '高后八年',
        title: '诸吕之乱平定',
        type: 'politics',
        emperor: 'han-wendi',
        summary: '周勃、陈平平定诸吕，迎立代王刘恒为文帝。',
        detail:
          '吕后死后，吕禄、吕产掌握南北军，图谋作乱。太尉周勃持节入北军，与丞相陈平、朱虚侯刘章合谋诛灭诸吕，迎立代王刘恒。',
        significance:
          '刘氏皇统得以恢复，功臣集团与宗室达成新的平衡，为文景之治铺平道路。',
        tags: ['周勃', '陈平', '文帝']
      },
      {
        id: 'wh-wenjing',
        year: -180,
        endYear: -141,
        era: '文帝元年—景帝十六年',
        title: '文景之治',
        type: 'society',
        emperor: 'han-wendi',
        summary: '轻徭薄赋、与民休息，成就中国帝制时代第一个治世。',
        detail:
          '文帝、景帝奉行黄老无为，田租由十五税一减为三十税一，屡次减免徭役，废除肉刑与连坐。仓廪充实，刑罚大省，社会秩序趋于稳定。',
        significance:
          '为汉武帝的积极有为积累雄厚国力。“文景之治”成为后世轻徭薄赋、休养生息的典范。',
        tags: ['黄老', '休养生息', '三十税一']
      },
      {
        id: 'wh-seven',
        year: -154,
        era: '景帝前元三年',
        title: '七国之乱',
        type: 'war',
        emperor: 'han-jingdi',
        summary: '吴楚等七国以“诛晁错、清君侧”为名反叛，三月而平。',
        detail:
          '晁错力主削藩，吴王刘濞联合楚、赵、济南、淄川、胶西、胶东六国起兵。景帝一度腰斩晁错以求和，未果，遂命周亚夫率军平叛。周亚夫断吴楚粮道，三月内击溃叛军。',
        significance:
          '诸侯王势力受到致命打击，中央集权显著加强，为武帝推行推恩令创造条件。',
        tags: ['削藩', '周亚夫', '晁错']
      },
      {
        id: 'wh-zhangqian',
        year: -138,
        era: '建元三年',
        title: '张骞凿空西域',
        type: 'diplomacy',
        emperor: 'han-wudi',
        summary: '张骞奉使西行，十三年后归来，首次打开中原对西域的系统认知。',
        detail:
          '武帝欲联合大月氏夹击匈奴，张骞应募出使。途中两度被匈奴扣留，历十三年，经大宛、康居、大月氏、大夏而归，带回西域山川、物产与道路的详尽信息。',
        significance:
          '“凿空”之举促成丝绸之路的开辟，中原与中亚、西亚的联系由此进入新阶段。',
        tags: ['丝绸之路', '西域', '张骞']
      },
      {
        id: 'wh-confucian',
        year: -134,
        era: '元光元年',
        title: '独尊儒术',
        type: 'culture',
        emperor: 'han-wudi',
        summary: '董仲舒对策，儒学上升为国家意识形态。',
        detail:
          '武帝诏举贤良方正，董仲舒上《天人三策》，主张“诸不在六艺之科、孔子之术者，皆绝其道”。朝廷设太学，置五经博士，以经术取士。',
        significance:
          '儒学成为官方正统，经学、察举与士大夫政治由此展开，深刻塑造此后两千年的政治文化。',
        tags: ['董仲舒', '太学', '经学']
      },
      {
        id: 'wh-mobei',
        year: -119,
        era: '元狩四年',
        title: '漠北之战',
        type: 'war',
        emperor: 'han-wudi',
        summary: '卫青、霍去病深入漠北，匈奴远遁，“漠南无王庭”。',
        detail:
          '卫青出定襄，霍去病出代郡，各率五万骑深入漠北。霍去病封狼居胥，禅于姑衍，登临瀚海；卫青大破单于主力。汉军斩获七万余级，自身亦损失惨重。',
        significance:
          '匈奴势力遭到决定性打击，汉朝控制河西与西域的通道，北方边境格局为之一变。',
        tags: ['卫青', '霍去病', '封狼居胥']
      },
      {
        id: 'wh-wugu',
        year: -91,
        era: '征和二年',
        title: '巫蛊之祸',
        type: 'politics',
        emperor: 'han-wudi',
        summary: '江充构陷太子，长安流血，皇后、太子相继自杀。',
        detail:
          '武帝晚年多病，宠臣江充借“巫蛊”之名陷害太子刘据。太子被迫起兵诛江充，兵败后自缢；卫皇后亦自杀。事后武帝建思子宫，下轮台诏，悔悟征伐之弊。',
        significance:
          '西汉由盛转衰的转折点。统治集团内部的猜忌与酷吏政治，暴露了专制皇权的深层危机。',
        tags: ['江充', '太子刘据', '轮台诏']
      },
      {
        id: 'wh-xiyu',
        year: -60,
        era: '神爵二年',
        title: '西域都护府设立',
        type: 'diplomacy',
        emperor: 'han-xuandi',
        summary: '汉朝正式在西域设官治理，丝绸之路进入稳定发展期。',
        detail:
          '匈奴日逐王率众降汉，汉宣帝任命郑吉为西域都护，治乌垒城，统领南北道三十六国。这是中央王朝首次在西域设立正式行政机构。',
        significance:
          '西域纳入汉朝的政治秩序，商旅、使节往来不绝，丝绸之路的官营保障体系初步形成。',
        tags: ['郑吉', '西域都护', '丝绸之路']
      },
      {
        id: 'wh-zhaojun',
        year: -33,
        era: '竟宁元年',
        title: '昭君出塞',
        type: 'diplomacy',
        emperor: 'han-yuandi',
        summary: '王昭君远嫁呼韩邪单于，汉匈和平延续数十年。',
        detail:
          '匈奴呼韩邪单于入朝求亲，宫女王昭君自愿请行。她被封为宁胡阏氏，随单于出塞。此后汉匈之间保持和平，边境“牛马布野，三世无犬吠之警”。',
        significance:
          '和亲政策的高光时刻，也成为后世文学、绘画反复书写的文化母题。',
        tags: ['王昭君', '和亲', '匈奴']
      },
      {
        id: 'wh-wangmang',
        year: 9,
        era: '始建国元年',
        title: '王莽代汉',
        type: 'politics',
        emperor: 'han-ruzi',
        summary: '王莽废孺子婴，称帝建新，西汉灭亡。',
        detail:
          '王莽借外戚身份与儒生拥戴，逐步总揽朝政，封安汉公、加九锡、居摄称“假皇帝”。公元九年，他正式代汉称帝，改国号为新，托古改制。',
        significance:
          '西汉灭亡，新朝登场。王莽改制脱离现实，十余年后天下大乱，汉室重建。',
        tags: ['王莽', '新朝', '篡汉']
      }
    ]
  },
  {
    id: 'eastern-han',
    kind: 'dynasty',
    name: '东汉',
    fullName: '东汉',
    seal: '汉',
    start: 25,
    end: 220,
    riverStart: 25,
    riverEnd: 220,
    capital: '洛阳',
    tagline: '光武中兴，风化最美',
    intro:
      '刘秀重建汉室，定都洛阳，史称东汉。前期有“光武中兴”“明章之治”，造纸术、地动仪相继问世；中后期外戚与宦官交替专权，党锢之祸摧折士林，黄巾一起，天下遂分。',
    theme: {
      bg: '#eee2cc',
      panel: '#f6ecdb',
      paper: '#f0e4cf',
      ink: '#271e16',
      muted: '#7a6957',
      seal: '#9b3a2b',
      river: '#a45b32',
      accent: '#6b5433',
      line: 'rgba(107,84,51,.28)',
      wash: 'rgba(155,58,43,.07)',
      motif: 'han-east'
    },
    emperors: [
      {
        id: 'eh-guangwu',
        name: '刘秀',
        title: '汉光武帝',
        era: '建武—中元',
        start: 25,
        end: 57,
        reigns: [[25, 57]],
        bio: '起兵于舂陵，昆阳一战成名。称帝后削平群雄，统一天下；退功臣、进文吏，释放奴婢，度田劝农，史称“光武中兴”。',
        portrait: { hat: 'mian', beard: 'long', face: 'square', age: 'mature', expression: 'calm' }
      },
      {
        id: 'eh-mingdi',
        name: '刘庄',
        title: '汉明帝',
        era: '永平',
        start: 57,
        end: 75,
        reigns: [[57, 75]],
        bio: '光武帝第四子。严察吏治，打击豪强，遣班超使西域，迎佛教入中原，建白马寺。与其子章帝并称“明章之治”。',
        portrait: { hat: 'mian', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'eh-zhangdi',
        name: '刘炟',
        title: '汉章帝',
        era: '建初—章和',
        start: 75,
        end: 88,
        reigns: [[75, 88]],
        bio: '宽仁好儒，诏令减轻刑罚，召开白虎观会议，统一经义。对外经营西域，班超以“不入虎穴，焉得虎子”威震鄯善。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'eh-hedi',
        name: '刘肇',
        title: '汉和帝',
        era: '永元',
        start: 88,
        end: 106,
        reigns: [[88, 106]],
        bio: '十岁即位，由窦太后临朝。永元四年联合宦官郑众诛窦宪，亲政后励精图治，击破北匈奴，西域复通，史称“永元之隆”。',
        portrait: { hat: 'mian', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        id: 'eh-shangdi',
        name: '刘隆',
        title: '汉殇帝',
        era: '延平',
        start: 106,
        end: 106,
        reigns: [[106, 106]],
        bio: '出生百余日即位，是中国历史上年龄最小的皇帝，在位不足一年夭折。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'eh-andi',
        name: '刘祜',
        title: '汉安帝',
        era: '永初—延光',
        start: 106,
        end: 125,
        reigns: [[106, 125]],
        bio: '由邓太后与邓骘迎立。亲政后乳母王圣、宦官江京干政，朝政渐坏。在位期间西羌叛乱、边患频仍。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'eh-shundi',
        name: '刘保',
        title: '汉顺帝',
        era: '永建—汉安',
        start: 125,
        end: 144,
        reigns: [[125, 144]],
        bio: '被宦官拥立。在位时梁皇后家族势力上升，外戚梁冀开始专权。阳嘉元年，张衡造候风地动仪。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'eh-chongdi',
        name: '刘炳',
        title: '汉冲帝',
        era: '永嘉',
        start: 144,
        end: 145,
        reigns: [[144, 145]],
        bio: '两岁即位，梁太后临朝，梁冀专权。在位仅半年而夭。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'eh-zhidi',
        name: '刘缵',
        title: '汉质帝',
        era: '本初',
        start: 145,
        end: 146,
        reigns: [[145, 146]],
        bio: '八岁即位，因在朝堂上称梁冀为“跋扈将军”，被梁冀毒杀。',
        portrait: { hat: 'mian', beard: 'none', face: 'oval', age: 'young', expression: 'stern' }
      },
      {
        id: 'eh-huandi',
        name: '刘志',
        title: '汉桓帝',
        era: '建和—永康',
        start: 146,
        end: 168,
        reigns: [[146, 168]],
        bio: '由梁冀拥立，后联合宦官单超等诛灭梁氏，宦官由此专权。延熹九年兴党锢之狱，士大夫与宦官矛盾激化。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'eh-lingdi',
        name: '刘宏',
        title: '汉灵帝',
        era: '建宁—中平',
        start: 168,
        end: 189,
        reigns: [[168, 189]],
        bio: '卖官鬻爵，宠信宦官，称“十常侍”。中平元年黄巾起义爆发，州郡割据之势已成。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'eh-shaodi',
        name: '刘辩',
        title: '汉少帝',
        era: '光熹—昭宁',
        start: 189,
        end: 189,
        reigns: [[189, 189]],
        bio: '灵帝长子，即位后何进与宦官火并，董卓入京，被废为弘农王，不久遇害。',
        portrait: { hat: 'mian', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'eh-xiandi',
        name: '刘协',
        title: '汉献帝',
        era: '初平—建安',
        start: 189,
        end: 220,
        reigns: [[189, 220]],
        bio: '九岁被董卓立为帝，此后辗转于李傕、郭汜、曹操之手。建安元年被曹操迎都许县，在位三十一年，最终禅位曹丕，东汉灭亡。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      }
    ],
    events: [
      {
        id: 'eh-founded',
        year: 25,
        era: '建武元年',
        title: '光武称帝，东汉建立',
        type: 'politics',
        emperor: 'eh-guangwu',
        summary: '刘秀在鄗城即皇帝位，沿用“汉”国号，定都洛阳。',
        detail:
          '刘秀在昆阳之战后声望日隆，逐步经营河北。建武元年称帝，随后用十余年时间削平更始、赤眉与各地割据势力，重建大一统。',
        significance:
          '汉室中兴，洛阳成为新的政治中心。东汉在制度上进一步强化尚书台与皇权。',
        tags: ['刘秀', '光武中兴', '洛阳']
      },
      {
        id: 'eh-banchao',
        year: 73,
        era: '永平十六年',
        title: '班超经营西域',
        type: 'diplomacy',
        emperor: 'eh-mingdi',
        summary: '班超以三十六人出使鄯善，夜袭匈奴使团，重新打通西域。',
        detail:
          '班超随窦固出击北匈奴后，奉命出使西域。在鄯善，他率三十六人夜袭匈奴使者营地，以“不入虎穴，焉得虎子”震慑鄯善王。此后三十一年，他经营西域五十余国。',
        significance:
          '西域与中原的联系在东汉重新恢复，班超以极小的代价维持了汉朝在西域的威望。',
        tags: ['班超', '三十六人', '西域']
      },
      {
        id: 'eh-yanran',
        year: 89,
        era: '永元元年',
        title: '燕然勒石',
        type: 'war',
        emperor: 'eh-hedi',
        summary: '窦宪大破北匈奴，登燕然山刻石纪功，班固作铭。',
        detail:
          '车骑将军窦宪率军出塞三千余里，大破北匈奴于稽落山，追至燕然山，令班固撰《封燕然山铭》刻石。北匈奴由此西迁，漠北格局剧变。',
        significance:
          '汉匈三百年战争走向终局，也留下了边塞纪功文学的典范。二零一七年，燕然山铭刻石在蒙古国被发现。',
        tags: ['窦宪', '班固', '燕然山']
      },
      {
        id: 'eh-paper',
        year: 105,
        era: '元兴元年',
        title: '蔡伦改进造纸术',
        type: 'culture',
        emperor: 'eh-hedi',
        summary: '蔡伦以树皮、麻头、破布、旧渔网造纸，纸开始广泛使用。',
        detail:
          '宦官蔡伦总结前人经验，用树皮、麻头、破布、旧渔网等廉价原料造纸，奏报朝廷，时称“蔡侯纸”。造纸工艺自此逐步传播。',
        significance:
          '纸张取代简帛成为主要书写材料，极大降低了知识传播成本，是人类文明史上的关键技术突破。',
        tags: ['蔡伦', '造纸术', '四大发明']
      },
      {
        id: 'eh-seismograph',
        year: 132,
        era: '阳嘉元年',
        title: '张衡造候风地动仪',
        type: 'culture',
        emperor: 'eh-shundi',
        summary: '张衡制成候风地动仪，可测知地震方位。',
        detail:
          '太史令张衡以精铜铸造地动仪，形似酒樽，八方位设龙首衔珠，下有蟾蜍承之。某次京师无震感而一龙吐珠，数日后陇西果然奏报地震。',
        significance:
          '代表汉代天文、力学与机械制造的高峰，也是世界最早的地震方位探测装置之一。',
        tags: ['张衡', '地动仪', '科技']
      },
      {
        id: 'eh-partisan',
        year: 166,
        era: '延熹九年',
        title: '党锢之祸',
        type: 'politics',
        emperor: 'eh-huandi',
        summary: '宦官诬告士大夫结党，李膺等二百余人被捕，士林遭重创。',
        detail:
          '士大夫与太学生激扬清议，抨击宦官。宦官以“共为部党”诬告李膺等人，桓帝下诏逮捕党人，后虽赦免，却禁锢终身。灵帝时再次大兴党狱，死者百余人。',
        significance:
          '东汉士大夫政治遭受毁灭性打击，朝廷失去自我修复能力，为黄巾之乱与军阀割据埋下伏笔。',
        tags: ['党锢', '李膺', '清议']
      },
      {
        id: 'eh-yellowturban',
        year: 184,
        era: '中平元年',
        title: '黄巾起义',
        type: 'society',
        emperor: 'eh-lingdi',
        summary: '张角以“苍天已死，黄天当立”号召，八州并起。',
        detail:
          '太平道教主张角以符水治病、传教十余年，徒众数十万。原定甲子年三月五日起事，因泄密提前举兵，头裹黄巾，焚烧官府，旬日之间天下响应。',
        significance:
          '东汉朝廷被迫放权州牧、允许地方募兵，军阀割据由此合法化，三国序幕拉开。',
        tags: ['张角', '太平道', '州牧']
      },
      {
        id: 'eh-dongzhuo',
        year: 189,
        era: '中平六年',
        title: '董卓入京',
        type: 'war',
        emperor: 'eh-shaodi',
        summary: '何进召外兵诛宦官，董卓乘乱入洛阳，废少帝、立献帝。',
        detail:
          '灵帝崩后，何进与宦官集团火并。何进被宦官所杀，袁绍等攻入宫禁，尽诛宦官。并州牧董卓率西凉军入京，吞并何进部曲，废少帝，立陈留王刘协。',
        significance:
          '东汉中央权威彻底崩塌，关东诸侯起兵讨董，天下进入群雄逐鹿的时代。',
        tags: ['董卓', '何进', '献帝']
      },
      {
        id: 'eh-xuchang',
        year: 196,
        era: '建安元年',
        title: '曹操迎献帝都许',
        type: 'politics',
        emperor: 'eh-xiandi',
        summary: '曹操奉天子以令不臣，屯田许下，奠定霸业根基。',
        detail:
          '献帝东归洛阳，宫室残破，百官乏食。曹操听从荀彧之策，迎献帝迁都许县，改元建安。此后以天子名义发号施令，并推行屯田，解决军粮问题。',
        significance:
          '曹操获得政治正统性，在群雄中脱颖而出。“挟天子以令诸侯”成为汉末政治的关键一步。',
        tags: ['曹操', '荀彧', '屯田']
      },
      {
        id: 'eh-guandu',
        year: 200,
        era: '建安五年',
        title: '官渡之战',
        type: 'war',
        emperor: 'eh-xiandi',
        summary: '曹操以少胜多，焚袁绍乌巢粮草，奠定统一北方的基础。',
        detail:
          '袁绍率十万大军南下，曹操兵少粮缺，扼守官渡。许攸叛投曹操，献计奇袭乌巢。曹操亲率五千精骑焚毁袁军粮仓，袁军崩溃，袁绍仅带八百骑北逃。',
        significance:
          '中国历史上以弱胜强的经典战例，曹操由此成为北方最强大的势力。',
        tags: ['曹操', '袁绍', '乌巢']
      },
      {
        id: 'eh-chibi',
        year: 208,
        era: '建安十三年',
        title: '赤壁之战',
        type: 'war',
        emperor: 'eh-xiandi',
        summary: '孙刘联军以火攻大破曹操，奠定三国鼎立之势。',
        detail:
          '曹操南下荆州，孙权、刘备结盟抵抗。周瑜、程普率水军与曹军对峙于赤壁。黄盖诈降，以火船突袭曹军连环船，火势延及岸上营寨，曹军大败。',
        significance:
          '曹操统一全国的势头被遏制，刘备、孙权各自发展，三分天下的格局基本形成。',
        tags: ['赤壁', '周瑜', '孙刘联盟']
      }
    ]
  }
);
