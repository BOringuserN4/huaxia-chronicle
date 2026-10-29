/* 两宋卷 */
window.HISTORY_DATA.push(
  {
    id: 'northern-song',
    kind: 'dynasty',
    name: '北宋',
    fullName: '北宋',
    seal: '宋',
    start: 960,
    end: 1127,
    riverStart: 960,
    riverEnd: 1127,
    capital: '开封（东京）',
    tagline: '与士大夫共治天下',
    intro:
      '陈桥兵变后，赵匡胤建立宋朝，以“强干弱枝”重构军政秩序。北宋重文抑武，士大夫政治、商品经济与市井文化空前繁荣；但冗官、冗兵、冗费与边患始终缠绕，最终在靖康之难中失去中原。',
    theme: {
      bg: '#e6ece3',
      panel: '#f1f4ec',
      paper: '#e9eee5',
      ink: '#222d29',
      muted: '#65756d',
      seal: '#9a4131',
      river: '#6f9183',
      accent: '#6f9183',
      line: 'rgba(111,145,131,.32)',
      wash: 'rgba(111,145,131,.1)',
      motif: 'song-north'
    },
    emperors: [
      {
        id: 'ns-taizu',
        name: '赵匡胤',
        title: '宋太祖',
        era: '建隆—开宝',
        start: 960,
        end: 976,
        reigns: [[960, 976]],
        bio: '后周殿前都点检，陈桥兵变黄袍加身。杯酒释兵权，分割相权与兵权，确立“强干弱枝”的国策，先南后北奠定统一格局。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'ns-taizong',
        name: '赵光义',
        title: '宋太宗',
        era: '太平兴国—至道',
        start: 976,
        end: 997,
        reigns: [[976, 997]],
        bio: '太祖之弟，“烛影斧声”中即位。灭北汉，完成局部统一；两次北伐辽国均遭惨败，转而守内虚外，扩大科举取士规模。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'round', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ns-zhenzong',
        name: '赵恒',
        title: '宋真宗',
        era: '咸平—乾兴',
        start: 997,
        end: 1022,
        reigns: [[997, 1022]],
        bio: '澶渊之盟后宋辽休战百余年。后期沉迷封禅祥瑞，东封西祀，耗费巨大，但亦推动文化事业与科举发展。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'oval', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ns-renzong',
        name: '赵祯',
        title: '宋仁宗',
        era: '天圣—嘉祐',
        start: 1022,
        end: 1063,
        reigns: [[1022, 1063]],
        bio: '在位四十二年，宽仁纳谏，士大夫政治臻于成熟。范仲淹、包拯、欧阳修、司马光等名臣辈出。庆历新政虽败，却开启变法思潮。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ns-yingzong',
        name: '赵曙',
        title: '宋英宗',
        era: '治平',
        start: 1063,
        end: 1067,
        reigns: [[1063, 1067]],
        bio: '濮王之子，由仁宗养入宫中。即位后爆发“濮议”，争论生父名分，朝臣分裂。在位四年，司马光开始编纂《资治通鉴》。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ns-shenzong',
        name: '赵顼',
        title: '宋神宗',
        era: '熙宁—元丰',
        start: 1067,
        end: 1085,
        reigns: [[1067, 1085]],
        bio: '锐意改革，支持王安石变法，以期富国强兵。变法引发新旧党争，虽部分改善财政，却未能根本扭转积贫积弱。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'ns-zhezong',
        name: '赵煦',
        title: '宋哲宗',
        era: '元祐—元符',
        start: 1085,
        end: 1100,
        reigns: [[1085, 1100]],
        bio: '十岁即位，高太后垂帘，尽废新法，史称“元祐更化”。亲政后改元绍圣，恢复新法，打击旧党，对外取得平夏城大捷。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        id: 'ns-huizong',
        name: '赵佶',
        title: '宋徽宗',
        era: '建中靖国—宣和',
        start: 1100,
        end: 1126,
        reigns: [[1100, 1126]],
        bio: '艺术家皇帝，瘦金体、院体画与汝窑瓷器都在其时代大放异彩。然重用蔡京、童贯，花石纲扰民，联金灭辽失策，终致靖康之祸。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ns-qinzong',
        name: '赵桓',
        title: '宋钦宗',
        era: '靖康',
        start: 1126,
        end: 1127,
        reigns: [[1126, 1127]],
        bio: '徽宗长子，金兵南下时受禅即位。战和不定，错失战机。靖康二年汴京陷落，与徽宗及宗室后妃数千人被掳北去。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'ns-chenqiao',
        year: 960,
        era: '建隆元年',
        title: '陈桥兵变',
        type: 'war',
        emperor: 'ns-taizu',
        summary: '赵匡胤黄袍加身，代周建宋，定都开封。',
        detail:
          '后周世宗柴荣早逝，幼主即位。殿前都点检赵匡胤借北汉、契丹联军南下之机率军出征，行至陈桥驿，部下以黄袍加身。回师开封，受周恭帝禅让，建立宋朝。',
        significance:
          '五代十国的武人政治走到转折点。宋朝随后以文制武，重塑国家权力结构。',
        tags: ['黄袍加身', '赵匡胤', '开封']
      },
      {
        id: 'ns-cupwine',
        year: 961,
        era: '建隆二年',
        title: '杯酒释兵权',
        type: 'politics',
        emperor: 'ns-taizu',
        summary: '太祖设宴劝退石守信等禁军将领，以富贵换兵权。',
        detail:
          '赵匡胤担心“黄袍加身”重演，宴请石守信、高怀德等禁军宿将，坦言“不如多积金帛田宅，以遗子孙”。诸将次日称病请辞，兵权归中央。',
        significance:
          '确立“强干弱枝”“重文抑武”的祖宗家法，终结了五代武将篡位的循环，也埋下宋朝军事积弱的伏笔。',
        tags: ['禁军', '重文抑武', '祖宗家法']
      },
      {
        id: 'ns-beihan',
        year: 979,
        era: '太平兴国四年',
        title: '灭北汉',
        type: 'war',
        emperor: 'ns-taizong',
        summary: '宋军攻破太原，北汉投降，五代十国割据局面结束。',
        detail:
          '宋太宗亲征北汉，围攻太原数月，北汉主刘继元出降。随后宋军乘胜北伐辽国，在高粱河之战中惨败，太宗中箭乘驴车南逃。',
        significance:
          '宋朝完成中原与南方的统一，却未能收复燕云十六州，北方防线长期处于被动。',
        tags: ['北汉', '太原', '高粱河']
      },
      {
        id: 'ns-chanyuan',
        year: 1004,
        era: '景德元年',
        title: '澶渊之盟',
        type: 'diplomacy',
        emperor: 'ns-zhenzong',
        summary: '宋辽约定兄弟之国，宋每年输银十万两、绢二十万匹。',
        detail:
          '辽军深入宋境，宰相寇准力主真宗亲征。宋军于澶州射杀辽将萧挞凛，双方议和：宋辽约为兄弟之国，以白沟河为界，宋岁输银绢，史称“澶渊之盟”。',
        significance:
          '宋辽此后百余年基本无大战，边贸繁荣；但“岁币”也成为宋朝外交的长期负担与争议焦点。',
        tags: ['澶渊', '寇准', '岁币']
      },
      {
        id: 'ns-qingli',
        year: 1043,
        era: '庆历三年',
        title: '庆历新政',
        type: 'politics',
        emperor: 'ns-renzong',
        summary: '范仲淹主持改革，整顿吏治，仅一年余即告失败。',
        detail:
          '仁宗面对冗官、冗兵与西夏边患，起用范仲淹、富弼、韩琦等推行新政，提出明黜陟、抑侥幸、精贡举、择官长等十事。因触犯官僚利益，被指“朋党”，新政中止。',
        significance:
          '北宋第一次系统性改革尝试，虽败犹荣，为熙宁变法提供了思想与人才准备。',
        tags: ['范仲淹', '庆历', '朋党']
      },
      {
        id: 'ns-wanganshi',
        year: 1069,
        era: '熙宁二年',
        title: '王安石变法',
        type: 'politics',
        emperor: 'ns-shenzong',
        summary: '青苗、募役、保甲、市易等新法次第推行，新旧党争激化。',
        detail:
          '神宗任命王安石为参知政事，设制置三司条例司，推行青苗法、农田水利法、募役法、保甲法、市易法等，意在富国强兵。新法遭到司马光、苏轼等旧党反对，执行中亦出现扰民弊病。',
        significance:
          '中国帝制后期最著名的改革运动之一。其成败争论延续近千年，也深刻影响了北宋后期的政治走向。',
        tags: ['王安石', '熙宁变法', '党争']
      },
      {
        id: 'ns-yuanyou',
        year: 1085,
        era: '元祐元年',
        title: '元祐更化',
        type: 'politics',
        emperor: 'ns-zhezong',
        summary: '高太后垂帘，司马光尽废新法，新旧党争进入循环。',
        detail:
          '神宗崩后，年仅十岁的哲宗即位，祖母高太后垂帘听政，起用司马光、吕公著等旧党，废除青苗、募役等新法，贬逐新党。司马光去世后旧党又分裂为洛、蜀、朔三党。',
        significance:
          '政策随太后与皇帝更替而反复，北宋政治陷入党争泥潭，行政效率与国家共识持续流失。',
        tags: ['司马光', '高太后', '旧党']
      },
      {
        id: 'ns-alliance',
        year: 1120,
        era: '宣和二年',
        title: '海上之盟',
        type: 'diplomacy',
        emperor: 'ns-huizong',
        summary: '宋金约定夹击辽国，宋廷收回燕云的幻想最终引狼入室。',
        detail:
          '徽宗遣马政等自登州渡海赴金，与金太祖约定：宋金夹攻辽国，事成后燕云十六州归宋，宋将原输辽岁币转输金。宋军攻辽屡败，暴露虚弱，金人由此轻视宋朝。',
        significance:
          '联金灭辽是北宋末年最致命的地缘误判。辽亡后，金军随即南下，靖康之祸接踵而至。',
        tags: ['宋金', '联金灭辽', '燕云']
      },
      {
        id: 'ns-jingkang',
        year: 1127,
        era: '靖康二年',
        title: '靖康之变',
        type: 'war',
        emperor: 'ns-qinzong',
        summary: '金军攻破汴京，徽钦二帝及宗室北掳，北宋灭亡。',
        detail:
          '金军两度南下，汴京城破。金人索取巨额金银，掳走徽宗、钦宗、后妃、宗室、工匠等数千人，以及大量典籍、仪器与珍宝，史称“靖康之耻”。',
        significance:
          '北宋灭亡，赵构在南方建立南宋。中原士民大规模南迁，中国的经济文化重心进一步南移。',
        tags: ['靖康之耻', '汴京', '徽钦二帝']
      }
    ]
  },
  {
    id: 'southern-song',
    kind: 'dynasty',
    name: '南宋',
    fullName: '南宋',
    seal: '宋',
    start: 1127,
    end: 1279,
    riverStart: 1127,
    riverEnd: 1271,
    capital: '临安（杭州）',
    tagline: '暖风熏得游人醉，直把杭州作汴州',
    intro:
      '靖康之后，赵构在南京应天府即位，后定都临安。南宋以半壁江山延续一百五十余年，商品经济、海外贸易与理学都在此发展成熟。岳飞北伐、采石大捷、崖山蹈海，构成这个王朝悲壮而复杂的面貌。',
    theme: {
      bg: '#e2e8ea',
      panel: '#eff3f3',
      paper: '#e6ecec',
      ink: '#1f2a30',
      muted: '#617077',
      seal: '#984238',
      river: '#526f86',
      accent: '#526f86',
      line: 'rgba(82,111,134,.3)',
      wash: 'rgba(82,111,134,.09)',
      motif: 'song-south'
    },
    emperors: [
      {
        id: 'ss-gaozong',
        name: '赵构',
        title: '宋高宗',
        era: '建炎—绍兴',
        start: 1127,
        end: 1162,
        reigns: [[1127, 1162]],
        bio: '徽宗第九子，靖康之变后南渡称帝。任用岳飞、韩世忠等抗金，又最终杀岳飞、订绍兴和议。在位三十六年，禅位于孝宗。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ss-xiaozong',
        name: '赵昚',
        title: '宋孝宗',
        era: '隆兴—淳熙',
        start: 1162,
        end: 1189,
        reigns: [[1162, 1189]],
        bio: '太祖一系，由高宗养子入继。即位后为岳飞平反，发动隆兴北伐，失败后转向内政，裁冗官、理财政，史称“乾淳之治”。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'ss-guangzong',
        name: '赵惇',
        title: '宋光宗',
        era: '绍熙',
        start: 1189,
        end: 1194,
        reigns: [[1189, 1194]],
        bio: '在位期间受制于皇后李凤娘，与太上皇孝宗失和，后期精神失常，不朝重华宫。绍熙五年被迫内禅。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ss-ningzong',
        name: '赵扩',
        title: '宋宁宗',
        era: '庆元—嘉定',
        start: 1194,
        end: 1224,
        reigns: [[1194, 1224]],
        bio: '由韩侂胄、赵汝愚拥立。庆元党禁打击朱熹等道学人士；开禧北伐失败，签嘉定和议。后期史弥远专权。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'ss-lizong',
        name: '赵昀',
        title: '宋理宗',
        era: '宝庆—景定',
        start: 1224,
        end: 1264,
        reigns: [[1224, 1264]],
        bio: '由史弥远拥立的宗室。亲政后崇理学，定朱熹为正统；联蒙灭金，又发动“端平入洛”失败，宋蒙战争全面爆发。',
        portrait: { hat: 'futou_song', beard: 'short', face: 'oval', age: 'mature', expression: 'calm' }
      },
      {
        id: 'ss-duzong',
        name: '赵禥',
        title: '宋度宗',
        era: '咸淳',
        start: 1264,
        end: 1274,
        reigns: [[1264, 1274]],
        bio: '理宗之侄，智力平平，即位后沉迷酒色，朝政尽委贾似道。襄阳围城六年而援兵不至，南宋防线崩溃。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'ss-gongdi',
        name: '赵㬎',
        title: '宋恭帝',
        era: '德祐',
        start: 1274,
        end: 1276,
        reigns: [[1274, 1276]],
        bio: '四岁即位，谢太后临朝。德祐二年，元军兵临临安，谢太后奉表投降，恭帝被掳往大都，后出家为僧。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'ss-duanzong',
        name: '赵昰',
        title: '宋端宗',
        era: '景炎',
        start: 1276,
        end: 1278,
        reigns: [[1276, 1278]],
        bio: '临安投降后，陆秀夫、张世杰等在福州拥立其为帝，流亡海上。辗转泉州、潮州、崖山，途中遇风浪惊病而崩。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'ss-bingdi',
        name: '赵昺',
        title: '宋末帝',
        era: '祥兴',
        start: 1278,
        end: 1279,
        reigns: [[1278, 1279]],
        bio: '南宋最后一位皇帝，七岁即位，退守崖山。祥兴二年，元军破崖山，陆秀夫负帝投海，南宋灭亡。',
        portrait: { hat: 'futou_song', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'ss-southward',
        year: 1127,
        era: '建炎元年',
        title: '建炎南渡',
        type: 'politics',
        emperor: 'ss-gaozong',
        summary: '赵构在应天府即位，重建宋室，随后定都临安。',
        detail:
          '靖康之变后，康王赵构在南京应天府即位，改元建炎。金军继续南下，宋廷一路南撤，经扬州、杭州，最终以临安为行在，建立偏安东南的南宋政权。',
        significance:
          '宋朝国祚得以延续，中原士民大规模南迁，江南的经济文化地位进一步上升。',
        tags: ['赵构', '临安', '南渡']
      },
      {
        id: 'ss-yuefei',
        year: 1140,
        endYear: 1141,
        era: '绍兴十年—十一年',
        title: '岳飞北伐与绍兴和议',
        type: 'war',
        emperor: 'ss-gaozong',
        summary: '岳飞郾城大捷后被迫班师，宋金签订绍兴和议，岳飞遇害。',
        detail:
          '岳飞率岳家军北伐，在郾城、颍昌大破金军“拐子马”，进军朱仙镇，直逼开封。高宗、秦桧连下十二道金牌召还，随后以“莫须有”罪名杀害岳飞。宋金议和，以淮水—大散关为界。',
        significance:
          '南宋收复中原的最好机会丧失。岳飞之死成为忠奸叙事与民族记忆的核心符号。',
        tags: ['岳飞', '郾城', '绍兴和议']
      },
      {
        id: 'ss-caishi',
        year: 1161,
        era: '绍兴三十一年',
        title: '采石之战',
        type: 'war',
        emperor: 'ss-gaozong',
        summary: '虞允文督师采石，以宋军水师大破金帝完颜亮南侵。',
        detail:
          '金主完颜亮率大军南侵，渡淮入江。南宋文臣虞允文至采石犒军，临危组织防御，以海鳅船冲击金军船队，金军大败。完颜亮后被部下所杀，金军北撤。',
        significance:
          '南宋转危为安，宋金对峙格局再延续数十年。',
        tags: ['虞允文', '完颜亮', '采石']
      },
      {
        id: 'ss-qingyuan',
        year: 1195,
        era: '庆元元年',
        title: '庆元党禁',
        type: 'politics',
        emperor: 'ss-ningzong',
        summary: '韩侂胄将朱熹等道学人士斥为“伪学”，理学遭禁。',
        detail:
          '宁宗即位后，韩侂胄排挤赵汝愚，进而打击朱熹及道学群体，称其为“伪学逆党”，列入党籍者五十九人，禁毁理学书籍，科举不得用道学之语。',
        significance:
          '理学在政治打压下反而获得道德声望。数十年后，朱熹理学被尊为官学，影响元明清数百年。',
        tags: ['朱熹', '韩侂胄', '伪学']
      },
      {
        id: 'ss-mongol',
        year: 1234,
        era: '端平元年',
        title: '联蒙灭金',
        type: 'diplomacy',
        emperor: 'ss-lizong',
        summary: '宋蒙联军攻破蔡州，金哀宗自缢，金朝灭亡。',
        detail:
          '金朝在蒙古打击下南迁蔡州。宋廷不顾“唇亡齿寒”之谏，与蒙古结盟，派孟珙率军合围蔡州。城破，金哀宗传位后自缢，金末帝死于乱军。',
        significance:
          '宋金百年世仇终结，但南宋由此直接面对更强大的蒙古。端平入洛失败后，宋蒙战争全面爆发。',
        tags: ['蔡州', '金哀宗', '孟珙']
      },
      {
        id: 'ss-linan',
        year: 1276,
        era: '德祐二年',
        title: '临安降元',
        type: 'war',
        emperor: 'ss-gongdi',
        summary: '元军兵临临安，谢太后奉传国玺投降，南宋朝廷瓦解。',
        detail:
          '元军攻破常州，逼近临安。谢太后与恭帝奉表投降，元将伯颜入城，掳恭帝、太后北去。陆秀夫、张世杰、文天祥等继续在南方抗元。',
        significance:
          '南宋中央政权覆灭，但抵抗并未结束。文天祥《过零丁洋》与崖山之战，成为宋朝最后的悲歌。',
        tags: ['伯颜', '谢太后', '文天祥']
      },
      {
        id: 'ss-yashan',
        year: 1279,
        era: '祥兴二年',
        title: '崖山海战',
        type: 'war',
        emperor: 'ss-bingdi',
        summary: '元军大破宋军，陆秀夫负幼帝投海，南宋灭亡。',
        detail:
          '张世杰率宋军千余艘战船退守崖山，以铁索连舟。元将张弘范、李恒断其水源，火攻与正面夹击，宋军大败。陆秀夫负赵昺投海，十万军民殉国，张世杰溺亡。',
        significance:
          '南宋彻底灭亡，元朝统一中国。“崖山之后”成为后世反复讨论的历史与文化命题。',
        tags: ['崖山', '陆秀夫', '张世杰']
      }
    ]
  }
);
