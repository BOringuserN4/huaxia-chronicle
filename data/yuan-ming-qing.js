/* 元明清卷 */
window.HISTORY_DATA.push(
  {
    id: 'yuan',
    kind: 'dynasty',
    name: '元',
    fullName: '元朝',
    seal: '元',
    start: 1206,
    end: 1368,
    riverStart: 1271,
    riverEnd: 1368,
    capital: '大都（北京）',
    tagline: '大哉乾元，万物资始',
    intro:
      '从成吉思汗统一蒙古，到忽必烈定国号“大元”，草原帝国与中原王朝在十三世纪完成了一次空前的整合。元朝疆域辽阔，驿站、海运与中外贸易兴盛；但民族等级、纸钞法与统治集团内耗，也使这个王朝不足百年而亡。',
    theme: {
      dark: true,
      bg: '#111c2b',
      panel: '#18273a',
      paper: '#1b2b40',
      ink: '#eee4cf',
      muted: '#9dabbf',
      seal: '#b04b3b',
      river: '#2f5278',
      accent: '#c9a45c',
      line: 'rgba(201,164,92,.26)',
      wash: 'rgba(201,164,92,.1)',
      motif: 'yuan'
    },
    emperors: [
      {
        id: 'yuan-taizu',
        name: '铁木真',
        title: '元太祖',
        era: '成吉思汗',
        start: 1206,
        end: 1227,
        reigns: [[1206, 1227]],
        bio: '统一蒙古各部，被推举为“成吉思汗”，建立大蒙古国。发动西征，灭西夏，奠定横跨欧亚的帝国基础。',
        portrait: { hat: 'dome', beard: 'long', face: 'square', age: 'old', expression: 'stern' }
      },
      {
        id: 'yuan-taizong',
        name: '窝阔台',
        title: '元太宗',
        era: '太宗',
        start: 1229,
        end: 1241,
        reigns: [[1229, 1241]],
        bio: '成吉思汗第三子。即位后联宋灭金，命拔都西征，建立驿站制度，任用耶律楚材治理中原。',
        portrait: { hat: 'dome', beard: 'full', face: 'round', age: 'mature', expression: 'stern' }
      },
      {
        id: 'yuan-dingzong',
        name: '贵由',
        title: '元定宗',
        era: '定宗',
        start: 1246,
        end: 1248,
        reigns: [[1246, 1248]],
        bio: '窝阔台长子。在乃马真后称制数年后即位，在位不足两年，帝国中枢的继承纷争日益公开化。',
        portrait: { hat: 'dome', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'yuan-xianzong',
        name: '蒙哥',
        title: '元宪宗',
        era: '宪宗',
        start: 1251,
        end: 1259,
        reigns: [[1251, 1259]],
        bio: '拖雷长子。即位后整顿政令，命忽必烈经略汉地，旭烈兀西征，亲征南宋，崩于钓鱼城下。',
        portrait: { hat: 'dome', beard: 'full', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'yuan-shizu',
        name: '忽必烈',
        title: '元世祖',
        era: '中统—至元',
        start: 1260,
        end: 1294,
        reigns: [[1260, 1294]],
        bio: '拖雷第四子。击败阿里不哥夺取汗位，1271年建国号“大元”，1279年灭南宋。行省制、纸币、海运与大都城都在其手中成型。',
        portrait: { hat: 'dome', beard: 'long', face: 'square', age: 'old', expression: 'stern' }
      },
      {
        id: 'yuan-chengzong',
        name: '铁穆耳',
        title: '元成宗',
        era: '元贞—大德',
        start: 1294,
        end: 1307,
        reigns: [[1294, 1307]],
        bio: '忽必烈之孙。即位后停止对外征伐，与西北诸汗国达成和解，财政危机却日益显现。',
        portrait: { hat: 'dome', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'yuan-wuzong',
        name: '海山',
        title: '元武宗',
        era: '至大',
        start: 1307,
        end: 1311,
        reigns: [[1307, 1311]],
        bio: '以军事实力夺取汗位，大肆封赏，滥发纸钞，财政急剧恶化。在位四年而崩。',
        portrait: { hat: 'dome', beard: 'full', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'yuan-renzong',
        name: '爱育黎拔力八达',
        title: '元仁宗',
        era: '皇庆—延祐',
        start: 1311,
        end: 1320,
        reigns: [[1311, 1320]],
        bio: '推行“汉法”，恢复科举，编修《大元通制》，试图以儒术整顿吏治。与武宗旧臣矛盾加深。',
        portrait: { hat: 'dome', beard: 'short', face: 'oval', age: 'mature', expression: 'calm' }
      },
      {
        id: 'yuan-yingzong',
        name: '硕德八剌',
        title: '元英宗',
        era: '至治',
        start: 1320,
        end: 1323,
        reigns: [[1320, 1323]],
        bio: '少年即位，锐意改革，裁汰冗官，推行《大元通制》。在南坡之变中被保守贵族弑杀。',
        portrait: { hat: 'dome', beard: 'none', face: 'oval', age: 'young', expression: 'stern' }
      },
      {
        id: 'yuan-taiding',
        name: '也孙铁木儿',
        title: '泰定帝',
        era: '泰定—致和',
        start: 1323,
        end: 1328,
        reigns: [[1323, 1328]],
        bio: '南坡之变后被拥立。在位期间局势相对平稳，但皇位继承问题始终未解决，死后两都之战爆发。',
        portrait: { hat: 'dome', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'yuan-wenzong',
        name: '图帖睦尔',
        title: '元文宗',
        era: '天历—至顺',
        start: 1328,
        end: 1332,
        reigns: [[1328, 1332]],
        bio: '在两都之战中获胜，两度在位。设立奎章阁，编修《经世大典》，推崇汉文化，但皇位更迭频繁，政局动荡。',
        portrait: { hat: 'dome', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'yuan-mingzong',
        name: '和世㻋',
        title: '元明宗',
        era: '天历二年',
        start: 1329,
        end: 1329,
        reigns: [[1329, 1329]],
        bio: '文宗之兄，在漠北被拥立为帝，南下途中暴卒，在位仅数月。死因成为元廷疑案。',
        portrait: { hat: 'dome', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'yuan-ningzong',
        name: '懿璘质班',
        title: '元宁宗',
        era: '至顺三年',
        start: 1332,
        end: 1332,
        reigns: [[1332, 1332]],
        bio: '七岁即位，在位五十余日而夭。元朝皇位继承的混乱达到顶点。',
        portrait: { hat: 'dome', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'yuan-shundi',
        name: '妥懽帖睦尔',
        title: '元顺帝',
        era: '元统—至正',
        start: 1333,
        end: 1368,
        reigns: [[1333, 1368]],
        bio: '元朝最后一位皇帝。在位前期有脱脱更化，后期怠于政事，河患、纸钞崩溃与红巾起义并起。1368年北逃上都，元朝在中原的统治结束。',
        portrait: { hat: 'dome', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'yuan-mongol',
        year: 1206,
        era: '成吉思汗元年',
        title: '统一蒙古，建立大蒙古国',
        shortTitle: '大蒙古国建立',
        type: 'war',
        emperor: 'yuan-taizu',
        summary: '铁木真统一草原各部，被尊为成吉思汗，建立千户与怯薛制度。',
        detail:
          '铁木真先后击败塔塔儿、克烈、乃蛮等部，于斡难河源召开忽里台，被推举为“成吉思汗”。他推行千户制，组建怯薛军，颁布札撒，将草原诸部整合为统一的军事政治共同体。',
        significance:
          '蒙古帝国崛起，十三世纪欧亚大陆的政治格局由此被彻底改写。',
        tags: ['铁木真', '千户制', '斡难河']
      },
      {
        id: 'yuan-genghis',
        year: 1227,
        era: '成吉思汗二十二年',
        title: '成吉思汗病逝',
        type: 'politics',
        emperor: 'yuan-taizu',
        summary: '成吉思汗在征西夏途中去世，蒙古帝国进入继承与扩张的新阶段。',
        detail:
          '成吉思汗在攻打西夏时病逝于六盘山附近，遗命秘不发丧，并留下联宋灭金的战略。西夏随后灭亡，蒙古大军继续西征与南下。',
        significance:
          '第一代征服者谢幕，帝国在窝阔台、拔都、旭烈兀等人手中继续扩张，横跨欧亚。',
        tags: ['成吉思汗', '西夏', '继承']
      },
      {
        id: 'yuan-founded',
        year: 1271,
        era: '至元八年',
        title: '建国号“大元”',
        type: 'politics',
        emperor: 'yuan-shizu',
        summary: '忽必烈取《易经》“大哉乾元”之义，定国号大元，定都大都。',
        detail:
          '忽必烈在击败阿里不哥、稳固汗位后，采纳刘秉忠等汉臣建议，取《易经》“大哉乾元，万物资始”之义，建国号为“大元”。次年改中都为大都，确立两都制。',
        significance:
          '蒙古政权正式采用中原王朝的国号与礼制，元朝作为中国正统王朝的形态确立。',
        tags: ['忽必烈', '大元', '大都']
      },
      {
        id: 'yuan-unify',
        year: 1279,
        era: '至元十六年',
        title: '崖山灭宋，混一南北',
        type: 'war',
        emperor: 'yuan-shizu',
        summary: '元军在崖山击败南宋残部，完成对中国本土的统一。',
        detail:
          '元将张弘范、李恒率军进攻崖山，宋军以铁索连舟，水源被断，最终溃败。陆秀夫负幼帝赵昺投海，南宋灭亡。元朝疆域南抵南海，北达漠北。',
        significance:
          '自唐末以来数百年的多政权并立结束，元朝建立起空前规模的大一统帝国。',
        tags: ['崖山', '张弘范', '大一统']
      },
      {
        id: 'yuan-keju',
        year: 1313,
        era: '皇庆二年',
        title: '恢复科举',
        type: 'culture',
        emperor: 'yuan-renzong',
        summary: '仁宗下诏恢复科举，以朱熹《四书章句集注》为考试标准。',
        detail:
          '元仁宗采纳李孟等建议，下诏恢复科举，次年开考。考试分蒙古、色目与汉人、南人两组，以经义、策论取士，朱子学成为官方考试内容。',
        significance:
          '科举在停废数十年后恢复，程朱理学正式成为官学，深刻影响明清两代的考试制度。',
        tags: ['科举', '朱熹', '仁宗']
      },
      {
        id: 'yuan-redturban',
        year: 1351,
        era: '至正十一年',
        title: '红巾军起义',
        type: 'society',
        emperor: 'yuan-shundi',
        summary: '韩山童、刘福通以“明王出世”为号起义，天下响应。',
        detail:
          '元末黄河泛滥，朝廷强征民夫治河，民怨沸腾。韩山童、刘福通在颍州起义，头裹红巾，号称“红巾军”。徐寿辉、郭子兴、张士诚等纷纷起兵，元朝统治土崩瓦解。',
        significance:
          '元末农民战争的总爆发。朱元璋从郭子兴部崛起，最终建立明朝。',
        tags: ['红巾军', '刘福通', '朱元璋']
      },
      {
        id: 'yuan-fall',
        year: 1368,
        era: '至正二十八年',
        title: '明军北伐，元室北迁',
        type: 'war',
        emperor: 'yuan-shundi',
        summary: '徐达、常遇春攻入大都，顺帝北逃上都，元朝在中原的统治结束。',
        detail:
          '朱元璋在应天称帝后命徐达、常遇春北伐，先取山东、河南，再破潼关。洪武元年闰七月，明军逼近大都，元顺帝携后妃太子北逃上都，徐达入城。',
        significance:
          '元朝退回蒙古草原，史称“北元”。明朝继承元朝版图的大部分，并重构华夷秩序。',
        tags: ['徐达', '大都', '北元']
      }
    ]
  },
  {
    id: 'ming',
    kind: 'dynasty',
    name: '明',
    fullName: '大明',
    seal: '明',
    start: 1368,
    end: 1644,
    riverStart: 1368,
    riverEnd: 1644,
    capital: '南京 → 北京',
    tagline: '日月重开大宋天',
    intro:
      '朱元璋驱逐元廷，建立明朝，恢复汉家衣冠。永乐迁都、郑和远航，使大明一度拥有陆海双重雄心；中叶以后，内阁与宦官、边患与财政相互纠缠。嘉靖大礼议、万历三大征、崇祯亡国，构成明代政治最富戏剧性的几幕。',
    theme: {
      bg: '#efe3cd',
      panel: '#f8eeda',
      paper: '#f3e7d1',
      ink: '#261b15',
      muted: '#7b6856',
      seal: '#a8322a',
      river: '#a8322a',
      accent: '#2d5d7b',
      line: 'rgba(45,93,123,.28)',
      wash: 'rgba(168,50,42,.08)',
      motif: 'ming'
    },
    emperors: [
      {
        id: 'ming-taizu',
        name: '朱元璋',
        title: '明太祖',
        era: '洪武',
        start: 1368,
        end: 1398,
        reigns: [[1368, 1398]],
        bio: '濠州钟离人，出身贫寒，参加红巾军后逐步崛起。1368年称帝，国号大明，年号洪武。废丞相、设锦衣卫，以严刑峻法整顿吏治，也大兴起狱。',
        portrait: { hat: 'yishan', beard: 'long', face: 'lean', age: 'old', expression: 'stern' }
      },
      {
        id: 'ming-jianwen',
        name: '朱允炆',
        title: '建文帝',
        era: '建文',
        start: 1398,
        end: 1402,
        reigns: [[1398, 1402]],
        bio: '太子朱标之子，即位后推行宽政，重用齐泰、黄子澄、方孝孺，锐意削藩。燕王朱棣起兵“靖难”，四年后南京陷落，建文帝下落不明。',
        portrait: { hat: 'yishan', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        id: 'ming-chengzu',
        name: '朱棣',
        title: '明成祖',
        era: '永乐',
        start: 1402,
        end: 1424,
        reigns: [[1402, 1424]],
        bio: '朱元璋第四子，初封燕王。靖难夺位后，设内阁、迁都北京、五征漠北、遣郑和下西洋、修《永乐大典》，将明朝推向鼎盛，也以残酷清洗建文旧臣著称。',
        portrait: { hat: 'yishan', beard: 'long', face: 'square', age: 'old', expression: 'stern' }
      },
      {
        id: 'ming-renzong',
        name: '朱高炽',
        title: '明仁宗',
        era: '洪熙',
        start: 1424,
        end: 1425,
        reigns: [[1424, 1425]],
        bio: '成祖长子。即位后罢下西洋、停采办，平反冤狱，与民休息。在位不足一年而崩，与其子宣宗并称“仁宣之治”。',
        portrait: { hat: 'yishan', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ming-xuanzong',
        name: '朱瞻基',
        title: '明宣宗',
        era: '宣德',
        start: 1425,
        end: 1435,
        reigns: [[1425, 1435]],
        bio: '仁宗长子。平定汉王朱高煦之叛，整顿吏治，发展生产，宣德炉、青花瓷与宫廷艺术兴盛。晚年教宦官读书批红，为宦官干政留下制度缝隙。',
        portrait: { hat: 'yishan', beard: 'short', face: 'square', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ming-yingzong',
        name: '朱祁镇',
        title: '明英宗',
        era: '正统、天顺',
        start: 1435,
        end: 1464,
        reigns: [[1435, 1449], [1457, 1464]],
        bio: '九岁即位，宠信宦官王振。正统十四年亲征瓦剌，土木堡兵败被俘。景泰帝即位后一年被迎回，幽居南宫。夺门之变后复辟，改元天顺。',
        portrait: { hat: 'yishan', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ming-daizong',
        name: '朱祁钰',
        title: '明代宗',
        era: '景泰',
        start: 1449,
        end: 1457,
        reigns: [[1449, 1457]],
        bio: '英宗之弟。土木堡之变后临危即位，任用于谦组织北京保卫战，击退瓦剌。后废英宗之子、改立己子为太子，病中被夺门之变推翻。',
        portrait: { hat: 'yishan', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ming-xianzong',
        name: '朱见深',
        title: '明宪宗',
        era: '成化',
        start: 1464,
        end: 1487,
        reigns: [[1464, 1487]],
        bio: '英宗长子。即位后为于谦平反，设置西厂，宠信万贵妃与宦官汪直。成化瓷与宫廷文化发达，朝政却渐趋壅蔽。',
        portrait: { hat: 'yishan', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ming-xiaozong',
        name: '朱祐樘',
        title: '明孝宗',
        era: '弘治',
        start: 1487,
        end: 1505,
        reigns: [[1487, 1505]],
        bio: '宪宗第三子。即位后勤于政事，广开言路，罢黜佞幸，厉行节俭，史称“弘治中兴”。一生只有张皇后一位皇后，为明代皇帝中的异数。',
        portrait: { hat: 'yishan', beard: 'short', face: 'oval', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ming-wuzong',
        name: '朱厚照',
        title: '明武宗',
        era: '正德',
        start: 1505,
        end: 1521,
        reigns: [[1505, 1521]],
        bio: '孝宗长子。即位后荒嬉无度，建豹房，宠信刘瑾等“八虎”，自封“总督军务威武大将军”。应州之战亲征蒙古，然朝政为宦官与边将把持。',
        portrait: { hat: 'yishan', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'ming-shizong',
        name: '朱厚熜',
        title: '明世宗',
        era: '嘉靖',
        start: 1521,
        end: 1567,
        reigns: [[1521, 1567]],
        bio: '兴献王之子，以藩王入继大统。通过“大礼议”追尊生父，强化皇权。后期沉迷道教斋醮，严嵩专权，倭患与庚戌之变相继爆发。',
        portrait: { hat: 'yishan', beard: 'long', face: 'square', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ming-muzong',
        name: '朱载坖',
        title: '明穆宗',
        era: '隆庆',
        start: 1567,
        end: 1572,
        reigns: [[1567, 1572]],
        bio: '世宗第三子。即位后开放海禁，与蒙古俺答汗达成“隆庆和议”，史称“隆庆开关”。任用徐阶、高拱、张居正，朝政为之一新。',
        portrait: { hat: 'yishan', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ming-shenzong',
        name: '朱翊钧',
        title: '明神宗',
        era: '万历',
        start: 1572,
        end: 1620,
        reigns: [[1572, 1620]],
        bio: '十岁即位，前期在张居正辅政下推行改革，史称“万历中兴”。亲政后因国本之争长期怠政，后期又发动万历三大征。明朝在繁荣与危机中走向晚景。',
        portrait: { hat: 'yishan', beard: 'long', face: 'round', age: 'old', expression: 'mild' }
      },
      {
        id: 'ming-guangzong',
        name: '朱常洛',
        title: '明光宗',
        era: '泰昌',
        start: 1620,
        end: 1620,
        reigns: [[1620, 1620]],
        bio: '神宗长子，国本之争的焦点。即位后罢矿监税使、发内帑犒军，朝野寄予厚望。在位仅二十九天，因“红丸案”暴崩。',
        portrait: { hat: 'yishan', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ming-xizong',
        name: '朱由校',
        title: '明熹宗',
        era: '天启',
        start: 1620,
        end: 1627,
        reigns: [[1620, 1627]],
        bio: '光宗长子。痴迷木工，被称为“木匠皇帝”。朝政委于宦官魏忠贤与乳母客氏，东林党人遭残酷迫害。辽东战局日益恶化。',
        portrait: { hat: 'yishan', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'ming-sizong',
        name: '朱由检',
        title: '明思宗',
        era: '崇祯',
        start: 1627,
        end: 1644,
        reigns: [[1627, 1644]],
        bio: '熹宗之弟。即位后铲除魏忠贤，勤勉理政，然刚愎多疑，频换阁臣。内有农民起义，外有后金压境，终在甲申之变中自缢煤山。',
        portrait: { hat: 'yishan', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'ming-founded',
        year: 1368,
        era: '洪武元年',
        title: '朱元璋称帝，明朝建立',
        shortTitle: '明朝建立',
        type: 'politics',
        emperor: 'ming-taizu',
        summary: '朱元璋在应天称帝，国号大明，同年北伐攻克大都。',
        detail:
          '朱元璋以“驱逐胡虏，恢复中华”为号召，在应天即皇帝位，建元洪武。徐达、常遇春率军北伐，元顺帝北逃，明朝接管中原。随后逐步平定四川、云南、辽东。',
        significance:
          '元朝统治结束，汉人政权重建。明初以严刑峻法与里甲制度恢复社会秩序。',
        tags: ['洪武', '应天', '北伐']
      },
      {
        id: 'ming-huweiyong',
        year: 1380,
        era: '洪武十三年',
        title: '胡惟庸案，废除丞相',
        type: 'politics',
        emperor: 'ming-taizu',
        summary: '朱元璋以谋反罪诛胡惟庸，废中书省与丞相，皇权空前集中。',
        detail:
          '丞相胡惟庸专权，被控谋反，朱元璋将其处死，并株连三万余人。随后废除中书省与丞相制度，分权于六部，直接对皇帝负责；又设锦衣卫，强化特务监察。',
        significance:
          '沿袭千余年的丞相制度终结，君主专制达到新高度。明代后期以内阁与司礼监分担政务，形成新的权力平衡。',
        tags: ['胡惟庸', '废丞相', '锦衣卫']
      },
      {
        id: 'ming-jingnan',
        year: 1399,
        endYear: 1402,
        era: '建文元年—四年',
        title: '靖难之役',
        type: 'war',
        emperor: 'ming-jianwen',
        summary: '燕王朱棣以“清君侧”为名起兵，四年后攻入南京，夺取皇位。',
        detail:
          '建文帝削藩，周、湘、代、齐、岷诸王相继被废。燕王朱棣在北平起兵，自称“靖难”。朝廷先后以耿炳文、李景隆为将，屡战失利。建文四年，朱棣绕过济南，直取南京，谷王朱橞与李景隆开金川门迎降。宫中大火，建文帝下落不明。朱棣即位，是为明成祖，对建文旧臣展开残酷清洗，方孝孺被诛十族。',
        significance:
          '明朝皇位转入燕王一系，迁都北京、郑和下西洋等永乐事业由此展开；建文帝失踪也成为明史第一疑案。',
        tags: ['朱棣', '削藩', '金川门', '方孝孺']
      },
      {
        id: 'ming-yongle-dadian',
        year: 1403,
        endYear: 1408,
        era: '永乐元年—六年',
        title: '编纂《永乐大典》',
        type: 'culture',
        emperor: 'ming-chengzu',
        summary: '解缙、姚广孝主持编成两万余卷的大型类书，保存大量佚籍。',
        detail:
          '成祖命解缙、姚广孝等汇集天下图书，编成《永乐大典》，共二万二千八百七十七卷、一万一千零九十五册，按韵目编排，被誉为“世界有史以来最大的百科全书”。',
        significance:
          '中国古代最大的类书，保存了大量宋元以前的珍稀文献。正本下落至今成谜，副本亦多散佚。',
        tags: ['永乐大典', '解缙', '类书']
      },
      {
        id: 'ming-zhenghe',
        year: 1405,
        endYear: 1433,
        era: '永乐三年—宣德八年',
        title: '郑和下西洋',
        type: 'diplomacy',
        emperor: 'ming-chengzu',
        summary: '郑和率庞大船队七下西洋，最远抵达非洲东海岸。',
        detail:
          '成祖为宣扬国威、经营朝贡贸易，命郑和率船队出使西洋。船队规模最大时有两百余艘、两万余人，访问东南亚、印度、阿拉伯与东非三十余国，带回香料、珍宝与长颈鹿，也调解诸国争端。',
        significance:
          '人类航海史上的空前壮举，比哥伦布早八十余年。但其政治动机强于经济驱动，宣德后远航终止，中国海洋事业转向内敛。',
        tags: ['郑和', '宝船', '朝贡贸易']
      },
      {
        id: 'ming-capital',
        year: 1421,
        era: '永乐十九年',
        title: '迁都北京',
        type: 'politics',
        emperor: 'ming-chengzu',
        summary: '明廷正式迁都北京，以南京为留都，形成“天子守国门”格局。',
        detail:
          '成祖以北平为龙兴之地，改称北京，营建紫禁城与天坛、太庙。永乐十九年正式迁都，北京成为全国政治中心，南京保留六部机构，称留都。',
        significance:
          '北京作为明清两代首都的地位确立，也强化了明朝对北方边防的经营。',
        tags: ['迁都', '紫禁城', '天子守国门']
      },
      {
        id: 'ming-tumu',
        year: 1449,
        era: '正统十四年',
        title: '土木堡之变',
        type: 'war',
        emperor: 'ming-yingzong',
        summary: '英宗亲征瓦剌，全军覆没于土木堡，皇帝被俘。',
        detail:
          '瓦剌也先分道南下，宦官王振怂恿英宗亲征。明军仓促出师，后勤混乱，在土木堡被瓦剌包围，二十余万大军溃败，英宗被俘，王振死于乱军。',
        significance:
          '明朝由盛转衰的标志性事件。于谦临危组织北京保卫战，击退瓦剌；景泰帝即位，英宗被尊为太上皇。',
        tags: ['土木堡', '王振', '也先', '于谦']
      },
      {
        id: 'ming-daliyi',
        year: 1524,
        era: '嘉靖三年',
        title: '大礼议',
        type: 'politics',
        emperor: 'ming-shizong',
        summary: '世宗为生父争名分，与杨廷和等阁臣决裂，左顺门廷杖震动朝野。',
        detail:
          '正德帝无嗣而崩，兴献王世子朱厚熜以藩王入继。以杨廷和为首的廷臣主张他过继给孝宗，称孝宗为“皇考”，生父为“皇叔考”。世宗坚持“继统不继嗣”，要尊生父兴献王为帝。矛盾在嘉靖三年爆发：二百余名官员跪伏左顺门哭谏，世宗下令廷杖，十余人当场毙命，百余人被贬。最终兴献王被追尊为“睿宗”，入太庙。',
        significance:
          '皇权对文官集团的重大胜利，嘉靖一朝阁臣倾附、议礼派得势。它也暴露了明代礼制与皇权之间的深层张力。',
        tags: ['嘉靖', '杨廷和', '张璁', '左顺门']
      },
      {
        id: 'ming-zhangjuzheng',
        year: 1573,
        era: '万历元年',
        title: '张居正改革',
        type: 'politics',
        emperor: 'ming-shenzong',
        summary: '张居正以考成法整饬官僚，推行一条鞭法，开创“万历中兴”。',
        detail:
          '神宗年幼即位，首辅张居正总揽朝政。他推行考成法，以三簿稽核官员；清丈田亩，推行一条鞭法，将赋役折银征收；重用戚继光、李成梁整顿边防，任用潘季驯治理黄河。',
        significance:
          '明朝中后期最有效的一次改革，财政与行政效率显著改善。张居正死后被清算，改革多废，但其赋税制度影响深远。',
        tags: ['张居正', '考成法', '一条鞭法']
      },
      {
        id: 'ming-three-campaigns',
        year: 1592,
        endYear: 1600,
        era: '万历二十年—二十八年',
        title: '万历三大征',
        type: 'war',
        emperor: 'ming-shenzong',
        summary: '宁夏、朝鲜、播州三役皆胜，却耗尽国力，辽东危机由此加深。',
        detail:
          '其一宁夏之役：哱拜据宁夏叛乱，李如松等率军水淹宁夏城，平定叛乱。其二朝鲜之役：丰臣秀吉两度侵朝，明军入援，平壤大捷后经碧蹄馆受挫，议和破裂再战，最终露梁海战大破日军，邓子龙、李舜臣战死。其三播州之役：播州土司杨应龙反叛，李化龙调八路大军合围海龙囤，杨应龙自焚。',
        significance:
          '三战皆胜，维护了东亚秩序与西南统一，但耗费白银千万两，辽东防务空虚，为努尔哈赤崛起与明朝灭亡埋下伏笔。',
        tags: ['宁夏之役', '朝鲜之役', '播州之役', '李如松']
      },
      {
        id: 'ming-sarhu',
        year: 1619,
        era: '万历四十七年',
        title: '萨尔浒之战',
        type: 'war',
        emperor: 'ming-shenzong',
        summary: '努尔哈赤以“凭尔几路来，我只一路去”大破明军四路合击。',
        detail:
          '明朝联合叶赫、朝鲜，兵分四路进剿后金。努尔哈赤集中八旗兵力，先破杜松于萨尔浒，再败马林、刘綎，南路李如柏不战而退。明军损失惨重，辽东局势逆转。',
        significance:
          '明清易代的关键战役。后金由防御转入进攻，明朝在辽东陷入战略被动。',
        tags: ['萨尔浒', '努尔哈赤', '辽东']
      },
      {
        id: 'ming-fall',
        year: 1644,
        era: '崇祯十七年',
        title: '甲申国变，明朝灭亡',
        type: 'war',
        emperor: 'ming-sizong',
        summary: '李自成攻入北京，崇祯帝自缢煤山；吴三桂引清军入关。',
        detail:
          '李自成在西安建大顺，东渡黄河，经居庸关直逼北京。崇祯帝拒绝南迁，城破后在煤山自缢。山海关总兵吴三桂引清军入关，李自成兵败西撤，清廷定都北京。',
        significance:
          '明朝作为全国性政权覆灭，清朝入主中原。南明政权在南方延续十余年，最终被清军平定。',
        tags: ['李自成', '崇祯', '煤山', '吴三桂']
      }
    ]
  },
  {
    id: 'qing',
    kind: 'dynasty',
    name: '清',
    fullName: '清朝',
    seal: '清',
    start: 1616,
    end: 1912,
    riverStart: 1644,
    riverEnd: 1912,
    capital: '盛京 → 北京',
    tagline: '康乾盛世，三千年未有之变局',
    intro:
      '从努尔哈赤建立后金，到皇太极改国号大清，再到顺治入关，清朝以少数民族政权入主中原，完成了空前规模的疆域整合。康雍乾三朝走向鼎盛，也埋下闭关与专制的隐患。鸦片战争之后，内忧外患接踵而至，帝制在辛亥革命的枪声中落幕。',
    theme: {
      bg: '#efe6c9',
      panel: '#f7f0d9',
      paper: '#f2e9ce',
      ink: '#26231a',
      muted: '#746b52',
      seal: '#a43a2c',
      river: '#b08a2e',
      accent: '#2e5645',
      line: 'rgba(46,86,69,.3)',
      wash: 'rgba(212,168,50,.12)',
      motif: 'qing'
    },
    emperors: [
      {
        id: 'qing-taizu',
        name: '努尔哈赤',
        title: '清太祖',
        era: '天命',
        start: 1616,
        end: 1626,
        reigns: [[1616, 1626]],
        bio: '建州女真首领，以十三副遗甲起兵，统一女真各部，创立八旗制度，1616年建立后金。萨尔浒之战后成为明朝在辽东的最大威胁。',
        portrait: { hat: 'qing', beard: 'full', face: 'square', age: 'old', expression: 'stern' }
      },
      {
        id: 'qing-taizong',
        name: '皇太极',
        title: '清太宗',
        era: '天聪—崇德',
        start: 1626,
        end: 1643,
        reigns: [[1626, 1643]],
        bio: '努尔哈赤第八子。改女真为满洲，建蒙古八旗与汉军八旗，1636年称帝，改国号为大清。松锦之战俘洪承畴，为入关奠定基础。',
        portrait: { hat: 'qing', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'qing-shizu',
        name: '福临',
        title: '清世祖',
        era: '顺治',
        start: 1643,
        end: 1661,
        reigns: [[1643, 1661]],
        bio: '六岁即位，由多尔衮摄政。1644年清军入关，迁都北京。亲政后整顿吏治，推行汉化，却也面临剃发易服、圈地等激烈矛盾。二十四岁病逝。',
        portrait: { hat: 'qing', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        id: 'qing-shengzu',
        name: '玄烨',
        title: '清圣祖',
        era: '康熙',
        start: 1661,
        end: 1722,
        reigns: [[1661, 1722]],
        bio: '八岁即位，十四岁亲政，智擒鳌拜。平三藩、收台湾、抗沙俄、征噶尔丹，编《康熙字典》《古今图书集成》，是清朝疆域与文治的奠基者。',
        portrait: { hat: 'qing', beard: 'long', face: 'square', age: 'old', expression: 'calm' }
      },
      {
        id: 'qing-shizong',
        name: '胤禛',
        title: '清世宗',
        era: '雍正',
        start: 1722,
        end: 1735,
        reigns: [[1722, 1735]],
        bio: '康熙第四子。以严猛治国，设军机处，推行摊丁入亩、耗羡归公、改土归流，整顿财政与吏治。勤政十三年，为乾隆盛世积累国力。',
        portrait: { hat: 'qing', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'qing-gaozong',
        name: '弘历',
        title: '清高宗',
        era: '乾隆',
        start: 1735,
        end: 1796,
        reigns: [[1735, 1796]],
        bio: '在位六十年，实际执政六十三年。平定准噶尔与大小和卓，修《四库全书》，号称“十全武功”。晚年宠信和珅，闭关自守，盛世表象下危机累积。',
        portrait: { hat: 'qing', beard: 'long', face: 'round', age: 'old', expression: 'mild' }
      },
      {
        id: 'qing-renzong',
        name: '颙琰',
        title: '清仁宗',
        era: '嘉庆',
        start: 1796,
        end: 1820,
        reigns: [[1796, 1820]],
        bio: '乾隆第十五子。亲政后诛和珅，力图整饬吏治，但白莲教起义、天理教攻入紫禁城、鸦片走私等问题接踵而至，清朝由盛转衰。',
        portrait: { hat: 'qing', beard: 'short', face: 'round', age: 'mature', expression: 'calm' }
      },
      {
        id: 'qing-xuanzong',
        name: '旻宁',
        title: '清宣宗',
        era: '道光',
        start: 1820,
        end: 1850,
        reigns: [[1820, 1850]],
        bio: '以节俭著称，却无力应对鸦片问题。林则徐虎门销烟后，英国发动鸦片战争，清朝战败，签订《南京条约》，中国进入近代。',
        portrait: { hat: 'qing', beard: 'short', face: 'lean', age: 'old', expression: 'mild' }
      },
      {
        id: 'qing-wenzong',
        name: '奕詝',
        title: '清文宗',
        era: '咸丰',
        start: 1850,
        end: 1861,
        reigns: [[1850, 1861]],
        bio: '在位期间太平天国运动爆发，英法联军攻入北京，火烧圆明园。签《北京条约》，割让九龙司。避难热河后病逝，留下顾命八大臣与两宫太后的权力斗争。',
        portrait: { hat: 'qing', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      },
      {
        id: 'qing-muzong',
        name: '载淳',
        title: '清穆宗',
        era: '同治',
        start: 1861,
        end: 1875,
        reigns: [[1861, 1875]],
        bio: '六岁即位，两宫太后垂帘听政。洋务运动兴起，镇压太平天国与捻军，史称“同治中兴”。亲政后不久病逝，年仅十九岁。',
        portrait: { hat: 'qing', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'qing-dezong',
        name: '载湉',
        title: '清德宗',
        era: '光绪',
        start: 1875,
        end: 1908,
        reigns: [[1875, 1908]],
        bio: '四岁即位，慈禧太后垂帘。甲午战败后支持戊戌变法，失败后被囚瀛台。庚子国变后推行清末新政，1908年先于慈禧一日去世。',
        portrait: { hat: 'qing', beard: 'none', face: 'oval', age: 'mature', expression: 'calm' }
      },
      {
        id: 'qing-xuantong',
        name: '溥仪',
        title: '宣统帝',
        era: '宣统',
        start: 1908,
        end: 1912,
        reigns: [[1908, 1912]],
        bio: '三岁即位，由隆裕太后与摄政王载沣主政。1911年辛亥革命爆发，1912年2月12日颁布退位诏书，中国两千余年帝制结束。',
        portrait: { hat: 'qing', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'qing-houjin',
        year: 1616,
        era: '天命元年',
        title: '努尔哈赤建立后金',
        type: 'war',
        emperor: 'qing-taizu',
        summary: '努尔哈赤在赫图阿拉称汗，建立后金，以八旗制度统合女真。',
        detail:
          '努尔哈赤统一建州、海西、东海女真各部，创立黄、白、红、蓝及镶四旗，后扩为八旗。1616年在赫图阿拉建立后金，年号天命，发布“七大恨”誓师反明。',
        significance:
          '清朝的前身由此建立，八旗制度成为其军事与社会组织的核心。',
        tags: ['后金', '八旗', '赫图阿拉']
      },
      {
        id: 'qing-name',
        year: 1636,
        era: '崇德元年',
        title: '皇太极改国号为大清',
        type: 'politics',
        emperor: 'qing-taizong',
        summary: '皇太极称帝，改国号大清，改女真为满洲，加速政权中原化。',
        detail:
          '皇太极在盛京称帝，改国号“大金”为“大清”，年号崇德，改族名女真为满洲。设置六部、都察院、理藩院，编蒙古八旗与汉军八旗，吸纳汉人文官。',
        significance:
          '后金从部落联盟式政权转型为具备中原王朝形态的帝国，为入关统治奠定制度基础。',
        tags: ['皇太极', '满洲', '盛京']
      },
      {
        id: 'qing-enter',
        year: 1644,
        era: '顺治元年',
        title: '清军入关',
        type: 'war',
        emperor: 'qing-shizu',
        summary: '吴三桂引清军入山海关，李自成兵败，清廷定都北京。',
        detail:
          '李自成攻入北京后，吴三桂在山海关举兵。多尔衮率清军与吴三桂合击李自成，一片石之战大顺军溃败。清军入关，顺治帝迁都北京，祭告天地，宣布继承明朝正统。',
        significance:
          '清朝入主中原，中国历史进入最后一个帝制王朝。剃发易服等政策引发长期抵抗。',
        tags: ['山海关', '吴三桂', '多尔衮', '李自成']
      },
      {
        id: 'qing-sanfan',
        year: 1681,
        era: '康熙二十年',
        title: '平定三藩',
        type: 'war',
        emperor: 'qing-shengzu',
        summary: '康熙帝历时八年平定吴三桂、尚可喜、耿精忠三藩之乱。',
        detail:
          '康熙十二年撤藩，吴三桂在云南起兵，尚之信、耿精忠响应，战火遍及南方。康熙帝坚持不妥协，分化瓦解叛军，重用绿营将领。康熙二十年，清军攻入昆明，三藩之乱平定。',
        significance:
          '清朝消除了入关以来最大的地方割据威胁，中央集权显著加强。',
        tags: ['吴三桂', '撤藩', '昆明']
      },
      {
        id: 'qing-taiwan',
        year: 1683,
        era: '康熙二十二年',
        title: '收复台湾',
        type: 'war',
        emperor: 'qing-shengzu',
        summary: '施琅率水师攻克澎湖，郑克塽投降，台湾纳入清朝版图。',
        detail:
          '康熙帝命施琅率水师两万余人进攻澎湖，大败郑军刘国轩部。郑克塽奉表投降。清廷设置台湾府，隶属福建省，派兵驻守。',
        significance:
          '台湾正式纳入中央王朝的行政体系，东南海疆得到整合。',
        tags: ['施琅', '澎湖', '台湾府']
      },
      {
        id: 'qing-nerchinsk',
        year: 1689,
        era: '康熙二十八年',
        title: '中俄尼布楚条约',
        type: 'diplomacy',
        emperor: 'qing-shengzu',
        summary: '中俄签订《尼布楚条约》，划定东段边界，清朝赢得北方和平。',
        detail:
          '雅克萨之战后，中俄在尼布楚谈判。索额图与戈洛文签订条约，规定以额尔古纳河、格尔必齐河与外兴安岭为界，毁雅克萨城，两国通商。',
        significance:
          '中国与欧洲国家签订的第一个边界条约，以法律形式确立了黑龙江流域的主权。',
        tags: ['尼布楚', '雅克萨', '索额图']
      },
      {
        id: 'qing-junji',
        year: 1729,
        era: '雍正七年',
        title: '设立军机处',
        type: 'politics',
        emperor: 'qing-shizong',
        summary: '雍正帝为西北用兵设军机处，后成为清朝最高决策中枢。',
        detail:
          '雍正七年对西北用兵，为求机密迅捷，设立军机房，后改称办理军机处。军机大臣由皇帝亲信兼任，跪受笔录，承旨拟谕，无独立决策权。',
        significance:
          '军机处使皇权绕过内阁与议政王大臣会议，君主专制达到顶峰，并延续至清末。',
        tags: ['军机处', '雍正', '君主专制']
      },
      {
        id: 'qing-xinjiang',
        year: 1755,
        endYear: 1759,
        era: '乾隆二十年—二十四年',
        title: '平定准噶尔与回部',
        type: 'war',
        emperor: 'qing-gaozong',
        summary: '清军两度西征，灭准噶尔汗国，平定大小和卓，统一新疆。',
        detail:
          '乾隆二十年，清军趁准噶尔内乱出兵，俘达瓦齐；阿睦尔撒纳旋即反叛，清军再度西征，至二十四年平定。随后兆惠等平定大小和卓叛乱，设伊犁将军，驻军屯田。',
        significance:
          '清朝完成对新疆的直接治理，奠定近代中国西北疆域的基础。',
        tags: ['准噶尔', '大小和卓', '伊犁将军']
      },
      {
        id: 'qing-macartney',
        year: 1793,
        era: '乾隆五十八年',
        title: '马戛尔尼使华',
        type: 'diplomacy',
        emperor: 'qing-gaozong',
        summary: '英国使团来华要求通商，礼仪之争后无功而返。',
        detail:
          '英国马戛尔尼使团以祝贺乾隆八十大寿为名来华，提出开放口岸、设立商馆、减免关税等要求。双方因跪拜礼仪争执，乾隆帝以“天朝物产丰盈，无所不有”回绝。',
        significance:
          '中西外交礼仪与贸易体系的正面碰撞。半个世纪后，英国以武力打开中国大门。',
        tags: ['马戛尔尼', '通商', '闭关']
      },
      {
        id: 'qing-opiumwar',
        year: 1840,
        endYear: 1842,
        era: '道光二十年—二十二年',
        title: '鸦片战争',
        type: 'war',
        emperor: 'qing-xuanzong',
        summary: '英国以武力打开中国大门，清朝签订《南京条约》。',
        detail:
          '林则徐虎门销烟后，英国派舰队侵华。清军屡败，定海、镇海、吴淞相继失守，英军兵临南京。1842年，清廷签订《南京条约》：割香港岛，赔款两千一百万银元，开放五口通商，协定关税。',
        significance:
          '中国近代史的开端。主权与关税自主权受损，中国被卷入资本主义世界体系。',
        tags: ['林则徐', '虎门销烟', '南京条约']
      },
      {
        id: 'qing-yuanmingyuan',
        year: 1860,
        era: '咸丰十年',
        title: '火烧圆明园',
        type: 'war',
        emperor: 'qing-wenzong',
        summary: '英法联军攻入北京，焚毁圆明园，清廷签订《北京条约》。',
        detail:
          '第二次鸦片战争期间，英法联军攻入北京，咸丰帝逃往热河。联军劫掠并焚毁圆明园，大火三日不熄。清廷被迫签订《北京条约》，增开天津等口岸，割让九龙司，允许公使驻京。',
        significance:
          '清朝的衰弱彻底暴露，圆明园之毁成为近代中国屈辱记忆的象征。',
        tags: ['英法联军', '圆明园', '北京条约']
      },
      {
        id: 'qing-jiawu',
        year: 1894,
        endYear: 1895,
        era: '光绪二十年—二十一年',
        title: '甲午战争',
        type: 'war',
        emperor: 'qing-dezong',
        summary: '北洋水师覆没，清朝签订《马关条约》，割让台湾。',
        detail:
          '日本借朝鲜东学党起义出兵，挑起战争。黄海海战中北洋水师损失惨重，威海卫之战全军覆没。1895年，李鸿章签订《马关条约》：割让台湾、澎湖，赔款两亿两白银，开放沙市、重庆等地。',
        significance:
          '洋务运动宣告破产，列强掀起瓜分中国的狂潮。台湾人民展开长达半个世纪的抗日斗争。',
        tags: ['甲午', '北洋水师', '马关条约', '台湾']
      },
      {
        id: 'qing-wuxu',
        year: 1898,
        era: '光绪二十四年',
        title: '戊戌变法',
        type: 'politics',
        emperor: 'qing-dezong',
        summary: '光绪帝与康有为、梁启超推行百日维新，被慈禧太后政变终结。',
        detail:
          '甲午战败后，康有为、梁启超等推动变法。光绪帝颁布“明定国是”诏，改革科举、创办新式学堂、裁汰冗官、编练新军。仅一百零三天，慈禧太后发动政变，囚禁光绪，谭嗣同等“戊戌六君子”遇害。',
        significance:
          '中国近代第一次自上而下的制度改革尝试。其失败说明体制内改良的空间已十分狭窄。',
        tags: ['康有为', '梁启超', '戊戌六君子']
      },
      {
        id: 'qing-boxer',
        year: 1900,
        era: '光绪二十六年',
        title: '庚子国变',
        type: 'war',
        emperor: 'qing-dezong',
        summary: '义和团运动与八国联军侵华，清廷签订《辛丑条约》。',
        detail:
          '义和团以“扶清灭洋”为口号在华北兴起，慈禧太后一度对外宣战。八国联军攻入北京，慈禧挟光绪西逃。1901年签订《辛丑条约》，赔款四亿五千万两，划定使馆界，拆除炮台。',
        significance:
          '中国完全沦为半殖民地半封建社会，清政府成为列强统治中国的工具。',
        tags: ['义和团', '八国联军', '辛丑条约']
      },
      {
        id: 'qing-xinhai',
        year: 1911,
        era: '宣统三年',
        title: '辛亥革命',
        type: 'politics',
        emperor: 'qing-xuantong',
        summary: '武昌起义爆发，各省响应，清王朝的统治土崩瓦解。',
        detail:
          '四川保路运动引发全国关注。10月10日，武昌新军起义，攻占湖广总督署，成立湖北军政府。此后湖南、陕西、江西等省相继独立，孙中山从海外归国，被推举为临时大总统。',
        significance:
          '推翻清朝统治的全国性革命，结束了延续两千余年的君主专制制度。',
        tags: ['武昌起义', '孙中山', '保路运动']
      },
      {
        id: 'qing-abdication',
        year: 1912,
        era: '宣统三年十二月',
        title: '清帝退位',
        type: 'politics',
        emperor: 'qing-xuantong',
        summary: '隆裕太后颁布退位诏书，清朝灭亡，中国帝制终结。',
        detail:
          '在袁世凯与革命党人的谈判下，清廷接受优待条件。1912年2月12日，隆裕太后以宣统帝名义颁布退位诏书，宣布“将统治权公诸全国，定为共和立宪国体”。',
        significance:
          '中国两千余年帝制正式结束，中华民国建立。中国历史进入共和与现代化的新阶段。',
        tags: ['退位诏书', '隆裕太后', '袁世凯', '帝制终结']
      }
    ]
  }
);
