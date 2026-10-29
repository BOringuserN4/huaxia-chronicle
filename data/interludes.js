/* 卷外：分裂与过渡时期 */
window.HISTORY_DATA.push(
  {
    id: 'xin',
    kind: 'interlude',
    name: '新',
    fullName: '新朝',
    seal: '新',
    start: 9,
    end: 23,
    riverStart: 9,
    riverEnd: 23,
    tagline: '托古改制的十五年',
    intro:
      '王莽以外戚与儒生领袖的身份代汉建新，试图以《周礼》为蓝本重建一个“大同”世界。土地王田、五均六筦、频繁改币，理想与现实的落差迅速撕裂社会。绿林、赤眉并起，新朝在十五年间覆灭。',
    theme: {
      bg: '#e8e0d1',
      panel: '#f0e9dc',
      paper: '#eae2d3',
      ink: '#28231c',
      muted: '#746a5a',
      seal: '#8c4a32',
      river: '#6d6a48',
      accent: '#5e6449',
      line: 'rgba(94,100,73,.3)',
      wash: 'rgba(140,74,50,.08)',
      motif: 'xin'
    },
    periods: [
      { name: '新', start: 9, end: 23, lane: 0, color: '#8c4a32' }
    ],
    figures: [
      {
        name: '王莽',
        title: '新朝皇帝',
        bio: '外戚出身，以谦恭俭朴与儒家理想赢得声望。代汉后推行王田、五均六筦、改币等新政，因脱离实际与用兵失当而失败。',
        portrait: { hat: 'mian', beard: 'long', face: 'lean', age: 'old', expression: 'calm' }
      },
      {
        name: '刘秀',
        title: '昆阳之战主帅',
        bio: '汉室宗亲，昆阳之战以少胜多，一战成名。后经营河北，建立东汉，是为光武帝。',
        portrait: { hat: 'mian', beard: 'short', face: 'square', age: 'young', expression: 'calm' }
      },
      {
        name: '樊崇',
        title: '赤眉军领袖',
        bio: '琅琊人，率赤眉军转战山东、河南，攻入长安，推翻更始政权，后降东汉。',
        portrait: { hat: 'guan', beard: 'full', face: 'square', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'xin-usurp',
        year: 9,
        era: '始建国元年',
        title: '王莽代汉，托古改制',
        type: 'politics',
        context: '新',
        summary: '王莽称帝建新，推行王田、五均六筦与频繁改币。',
        detail:
          '王莽以“安汉公”“假皇帝”身份逐步掌权，最终代汉称帝。他依《周礼》推行新政：将土地收归王田、禁止买卖，改奴婢为“私属”，实行五均六筦控制工商业，又多次变更币制。',
        significance:
          '一场以儒家理想改造帝国的宏大实验。政策脱离现实、朝令夕改，加之对外战争，迅速激化社会矛盾。',
        tags: ['王莽', '王田制', '五均六筦']
      },
      {
        id: 'xin-revolt',
        year: 17,
        era: '天凤四年',
        title: '绿林、赤眉起义',
        type: 'society',
        context: '新',
        summary: '荆州绿林山与山东赤眉军相继起兵，天下大乱。',
        detail:
          '荆州饥荒，王匡、王凤率众据绿林山起义；琅琊樊崇在莒县起兵，以染红眉毛为标识，称赤眉军。各地豪强与刘氏宗室也纷纷举兵。',
        significance:
          '新朝的基层统治迅速瓦解，反莽力量由流民武装扩展为全国性的政权争夺。',
        tags: ['绿林', '赤眉', '樊崇']
      },
      {
        id: 'xin-kunyang',
        year: 23,
        era: '地皇四年',
        title: '昆阳之战',
        type: 'war',
        context: '新',
        summary: '刘秀以万余守军内外夹击，大破王莽四十二万大军。',
        detail:
          '王莽派王邑、王寻率大军围昆阳，号称百万。刘秀率十三骑突围求援，又率三千敢死队冲击新军中坚，恰逢风雨大作，新军溃散，王寻被杀。',
        significance:
          '新朝主力覆灭，各地纷纷杀官响应。刘秀由此声名鹊起，为东汉建立奠定基础。',
        tags: ['昆阳', '刘秀', '王邑']
      },
      {
        id: 'xin-fall',
        year: 23,
        era: '地皇四年',
        title: '新朝覆灭',
        type: 'politics',
        context: '新',
        summary: '绿林军攻入长安，王莽死于乱军，新朝灭亡。',
        detail:
          '昆阳战后，绿林军分两路进攻洛阳、长安。长安市民暴动，攻入未央宫，王莽逃至渐台，被商人杜吴杀死，新朝灭亡。更始帝刘玄迁都长安。',
        significance:
          '新朝十五年而亡。随后赤眉入关、刘秀崛起，天下再经十余年才重归统一。',
        tags: ['长安', '渐台', '更始']
      }
    ]
  },
  {
    id: 'three-kingdoms',
    kind: 'interlude',
    name: '三国',
    fullName: '三国',
    seal: '三',
    start: 220,
    end: 280,
    riverStart: 220,
    riverEnd: 280,
    tagline: '滚滚长江东逝水',
    intro:
      '东汉崩溃后，曹魏、蜀汉、东吴三分天下。这是一个人才辈出、谋略与忠义被反复书写的时代：官渡、赤壁、夷陵、五丈原，战争塑造了地理，也塑造了后世的中国叙事。',
    theme: {
      bg: '#e9dfcd',
      panel: '#f3ead9',
      paper: '#ece2d0',
      ink: '#272019',
      muted: '#766858',
      seal: '#973b2f',
      river: '#7d5b43',
      accent: '#4f6659',
      line: 'rgba(79,102,89,.3)',
      wash: 'rgba(151,59,47,.07)',
      motif: 'three'
    },
    periods: [
      { name: '曹魏', start: 220, end: 266, lane: 0, color: '#8e3d32' },
      { name: '蜀汉', start: 221, end: 263, lane: 1, color: '#4f6659' },
      { name: '东吴', start: 222, end: 280, lane: 2, color: '#49647a' }
    ],
    figures: [
      {
        name: '曹操',
        title: '魏武帝（追尊）',
        bio: '“治世之能臣，乱世之奸雄”。挟天子以令诸侯，统一北方，兴屯田、唯才是举，是建安文学的开创者。生前未称帝，曹丕追尊为魏武帝。',
        portrait: { hat: 'mian', beard: 'short', face: 'lean', age: 'old', expression: 'stern' }
      },
      {
        name: '刘备',
        title: '蜀汉昭烈帝',
        bio: '汉室宗亲，三顾茅庐得诸葛亮，联孙抗曹，取荆益二州，建立蜀汉。为关羽复仇发动夷陵之战，大败后病逝白帝城。',
        portrait: { hat: 'mian', beard: 'long', face: 'square', age: 'mature', expression: 'calm' }
      },
      {
        name: '孙权',
        title: '东吴大帝',
        bio: '继承父兄基业，据江东六郡。赤壁联刘抗曹，夷陵败刘备，晚年猜忌，二宫之争使东吴内耗。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'old', expression: 'calm' }
      },
      {
        name: '诸葛亮',
        title: '蜀汉丞相',
        bio: '隆中对策定三分，赤壁联吴，治蜀严明。刘备死后辅佐刘禅，六出祁山，病逝五丈原。',
        portrait: { hat: 'guan', beard: 'long', face: 'lean', age: 'mature', expression: 'calm' }
      }
    ],
    events: [
      {
        id: 'tk-wei',
        year: 220,
        era: '建安二十五年',
        title: '曹丕代汉，曹魏建立',
        type: 'politics',
        context: '曹魏',
        summary: '曹丕接受汉献帝禅让，定都洛阳，东汉正式灭亡。',
        detail:
          '曹操去世后，曹丕继承魏王之位，随即迫使汉献帝禅让，称帝建魏，改元黄初，定都洛阳。他采纳陈群建议，推行九品中正制，确立士族选官的新格局。',
        significance:
          '汉朝四百年国祚结束，三国时代正式开始。九品中正制深刻影响了此后数百年的门阀政治。',
        tags: ['曹丕', '禅让', '九品中正制']
      },
      {
        id: 'tk-shu',
        year: 221,
        era: '章武元年',
        title: '刘备称帝，蜀汉建立',
        type: 'politics',
        context: '蜀汉',
        summary: '刘备在成都称帝，国号汉，以继承汉室正统自居。',
        detail:
          '曹丕代汉后，刘备在成都即皇帝位，国号仍为汉，史称蜀汉，以诸葛亮为丞相。同年，刘备以替关羽复仇为名东征孙权。',
        significance:
          '三国鼎立的政治格局进一步成形。蜀汉以“汉”为国号，成为汉室正统的象征。',
        tags: ['刘备', '成都', '汉室']
      },
      {
        id: 'tk-wu',
        year: 222,
        era: '黄武元年',
        title: '孙权称王，东吴立国',
        type: 'politics',
        context: '东吴',
        summary: '孙权受魏封为吴王，后于229年正式称帝。',
        detail:
          '夷陵之战后，孙权脱离魏的臣属关系，称吴王，建元黄武。229年正式称帝，定都建业，国号吴。东吴依靠长江天险与江东士族，维持最长久的国祚。',
        significance:
          '三国最后一个政权完成称帝程序，鼎立之势完全确立。',
        tags: ['孙权', '建业', '吴王']
      },
      {
        id: 'tk-yiling',
        year: 222,
        era: '章武二年',
        title: '夷陵之战',
        type: 'war',
        context: '蜀汉',
        summary: '陆逊火烧连营，刘备大败，蜀汉元气大伤。',
        detail:
          '刘备率大军东征孙权，连营数百里。东吴大都督陆逊坚守不战，待蜀军疲惫，以火攻突袭，连破四十余营。刘备退守白帝城，次年病逝。',
        significance:
          '三国三大战役的最后一战。蜀汉失去荆州与精锐，诸葛亮此后只能以攻为守。',
        tags: ['夷陵', '陆逊', '火烧连营']
      },
      {
        id: 'tk-north',
        year: 228,
        endYear: 234,
        era: '建兴六年—十二年',
        title: '诸葛亮北伐',
        type: 'war',
        context: '蜀汉',
        summary: '诸葛亮六出祁山，与曹魏争夺关中，病逝五丈原。',
        detail:
          '诸葛亮在平定南中后率军北伐，先后出祁山、攻陈仓、战街亭。马谡失街亭，第一次北伐功败垂成。此后诸葛亮屡次出征，与司马懿对峙于渭南，最终病逝五丈原。',
        significance:
          '“鞠躬尽瘁，死而后已”的典范。北伐虽未成功，却以攻为守延续了蜀汉国祚。',
        tags: ['诸葛亮', '祁山', '五丈原']
      },
      {
        id: 'tk-gaoping',
        year: 249,
        era: '正始十年',
        title: '高平陵之变',
        type: 'politics',
        context: '曹魏',
        summary: '司马懿发动政变，诛曹爽，曹魏大权落入司马氏之手。',
        detail:
          '曹爽排挤司马懿，独揽朝政。司马懿装病麻痹曹爽，趁其陪幼帝曹芳祭扫高平陵时发动政变，控制洛阳，指曹爽谋反，夷其三族。',
        significance:
          '曹魏政权名存实亡，司马氏父子逐步清除异己，为西晋代魏铺路。',
        tags: ['司马懿', '曹爽', '高平陵']
      },
      {
        id: 'tk-shuhan-fall',
        year: 263,
        era: '景耀六年',
        title: '蜀汉灭亡',
        type: 'war',
        context: '蜀汉',
        summary: '邓艾偷渡阴平，兵临成都，刘禅出降。',
        detail:
          '司马昭命钟会、邓艾伐蜀。钟会与姜维对峙剑阁，邓艾率军偷渡阴平，翻越摩天岭，攻克江油、绵竹，直抵成都。刘禅听从谯周建议出降，蜀汉灭亡。',
        significance:
          '三国鼎立开始瓦解。姜维假降钟会图谋复国，失败被杀。',
        tags: ['邓艾', '刘禅', '阴平']
      },
      {
        id: 'tk-jin',
        year: 280,
        era: '太康元年',
        title: '西晋灭吴，三国归晋',
        type: 'war',
        context: '东吴',
        summary: '王濬楼船下益州，吴主孙皓投降，三国时代结束。',
        detail:
          '西晋司马炎命杜预、王濬等六路伐吴。王濬率楼船顺江东下，攻克武昌、建业，孙皓面缚舆榇出降。吴国灭亡，中国重归统一。',
        significance:
          '持续六十年的三国分裂结束。但西晋的统一仅维持十余年，便陷入八王之乱。',
        tags: ['王濬', '孙皓', '建业']
      }
    ]
  },
  {
    id: 'jin',
    kind: 'interlude',
    name: '两晋',
    fullName: '西晋 · 东晋',
    seal: '晋',
    start: 266,
    end: 420,
    riverStart: 280,
    riverEnd: 420,
    tagline: '衣冠南渡，风流魏晋',
    intro:
      '司马炎代魏建晋，短暂统一后迅速陷入八王之乱与永嘉之祸。中原士族大规模南渡，东晋在江南重建政权，与北方十六国对峙。玄学清谈、书法艺术与门阀政治，共同构成魏晋风度的复杂底色。',
    theme: {
      bg: '#e6e6de',
      panel: '#f1f1ea',
      paper: '#e9e9e1',
      ink: '#252823',
      muted: '#6d7268',
      seal: '#8f3e31',
      river: '#566a77',
      accent: '#596d7b',
      line: 'rgba(89,109,123,.3)',
      wash: 'rgba(89,109,123,.08)',
      motif: 'jin'
    },
    periods: [
      { name: '西晋', start: 266, end: 316, lane: 0, color: '#7b5a45' },
      { name: '东晋', start: 317, end: 420, lane: 1, color: '#596d7b' }
    ],
    figures: [
      {
        name: '司马炎',
        title: '晋武帝',
        bio: '司马懿之孙，代魏建晋，灭吴统一。大封宗室、纵容奢靡，为八王之乱埋下祸根。',
        portrait: { hat: 'mian', beard: 'short', face: 'round', age: 'mature', expression: 'calm' }
      },
      {
        name: '王导',
        title: '东晋丞相',
        bio: '琅琊王氏领袖，辅佐司马睿南渡建康，联络江南士族，奠定“王与马，共天下”的格局。',
        portrait: { hat: 'guan', beard: 'long', face: 'lean', age: 'old', expression: 'calm' }
      },
      {
        name: '谢安',
        title: '东晋名相',
        bio: '陈郡谢氏领袖，淝水之战中坐镇建康，以镇定从容稳定人心。风流儒雅，是魏晋名士的典范。',
        portrait: { hat: 'guan', beard: 'short', face: 'oval', age: 'mature', expression: 'mild' }
      },
      {
        name: '祖逖',
        title: '北伐名将',
        bio: '闻鸡起舞，率部北伐，收复黄河以南大片失地。因朝廷猜忌、后援不继，忧愤而卒。',
        portrait: { hat: 'guan', beard: 'full', face: 'square', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'jin-founded',
        year: 266,
        era: '泰始二年',
        title: '司马炎代魏建晋',
        type: 'politics',
        context: '西晋',
        summary: '司马炎受魏禅让，建立西晋，定都洛阳。',
        detail:
          '司马昭死后，其子司马炎继承晋王之位，随即迫使魏元帝曹奂禅让，称帝建晋，改元泰始。他大封宗室为王，试图以血缘屏藩皇室。',
        significance:
          '曹魏灭亡，司马氏完成三代人的权力积累。宗室分封却为日后的八王之乱埋下伏笔。',
        tags: ['司马炎', '代魏', '洛阳']
      },
      {
        id: 'jin-unify',
        year: 280,
        era: '太康元年',
        title: '灭吴统一',
        type: 'war',
        context: '西晋',
        summary: '晋军六路伐吴，孙皓出降，中国结束三国分裂。',
        detail:
          '晋武帝命杜预、王浑、王濬等六路大军伐吴。王濬楼船自益州顺江而下，攻克建业，孙皓投降。西晋统一全国，出现短暂的“太康之治”。',
        significance:
          '三国时代结束，但西晋的统一仅维持三十余年，随即陷入更长期的分裂。',
        tags: ['灭吴', '王濬', '太康']
      },
      {
        id: 'jin-eight',
        year: 291,
        endYear: 306,
        era: '元康元年—光熙元年',
        title: '八王之乱',
        type: 'war',
        context: '西晋',
        summary: '宗室诸王为争夺中央权力混战十六年，西晋元气尽失。',
        detail:
          '晋惠帝愚钝，贾后干政，先后杀杨骏、司马亮、卫瓘，又害太子。赵王司马伦篡位，引发齐王、成都王、河间王、长沙王、东海王等诸王混战，战火遍及中原。',
        significance:
          '西晋统治集团自相残杀，军力与民生凋敝，北方各族势力乘机而起，直接导致永嘉之乱。',
        tags: ['八王之乱', '贾后', '晋惠帝']
      },
      {
        id: 'jin-yongjia',
        year: 311,
        era: '永嘉五年',
        title: '永嘉之乱',
        type: 'war',
        context: '西晋',
        summary: '匈奴刘曜、石勒攻破洛阳，晋怀帝被俘，西晋走向灭亡。',
        detail:
          '八王之乱后，匈奴刘渊建立汉赵。其子刘聪派刘曜、石勒南下，在宁平城歼灭晋军主力，攻破洛阳，俘晋怀帝，焚掠宫室，史称“永嘉之乱”。316年长安陷落，西晋灭亡。',
        significance:
          '中原士民大规模南迁，“衣冠南渡”改变了中国的人口与文化版图。',
        tags: ['永嘉', '刘曜', '衣冠南渡']
      },
      {
        id: 'jin-east',
        year: 317,
        era: '建武元年',
        title: '东晋建立',
        type: 'politics',
        context: '东晋',
        summary: '司马睿在建康称晋王，次年称帝，依靠王导等士族重建晋室。',
        detail:
          '西晋灭亡后，琅琊王司马睿在王导、王敦辅佐下于建康称晋王，次年称帝，史称东晋。南北士族共同拥戴，形成“王与马，共天下”的门阀政治格局。',
        significance:
          '华夏政权在江南延续，经济文化重心加速南移。门阀士族成为东晋政治的主导力量。',
        tags: ['司马睿', '王导', '建康']
      },
      {
        id: 'jin-feishui',
        year: 383,
        era: '太元八年',
        title: '淝水之战',
        type: 'war',
        context: '东晋',
        summary: '谢安、谢玄以八万晋军大破前秦八十余万大军。',
        detail:
          '前秦苻坚统一北方后南下，号称投鞭断流。东晋以谢玄率北府兵迎战。晋军求秦军后撤以便渡河，秦军阵脚大乱，朱序在阵后高呼“秦兵败矣”，前秦溃败，苻坚逃回北方。',
        significance:
          '东晋转危为安，前秦瓦解，北方重新陷入分裂。以少胜多的经典战例，也使谢氏门第达到顶峰。',
        tags: ['淝水', '谢安', '谢玄', '苻坚']
      },
      {
        id: 'jin-fall',
        year: 420,
        era: '元熙二年',
        title: '刘裕代晋',
        type: 'politics',
        context: '东晋',
        summary: '刘裕受禅称帝，建立刘宋，东晋灭亡，南朝开始。',
        detail:
          '刘裕出身寒门，以北府兵起家，平定孙恩、卢循，灭南燕、后秦，威望日隆。元熙二年，他迫使晋恭帝禅让，建立宋朝，史称刘宋。',
        significance:
          '门阀政治走向衰落，寒门武人掌握政权。中国进入南北朝对峙时期。',
        tags: ['刘裕', '刘宋', '禅让']
      }
    ]
  },
  {
    id: 'north-south',
    kind: 'interlude',
    name: '南北朝',
    fullName: '南北朝',
    seal: '南',
    start: 420,
    end: 589,
    riverStart: 420,
    riverEnd: 589,
    tagline: '南朝四百八十寺，多少楼台烟雨中',
    intro:
      '南朝宋、齐、梁、陈更替于江南，北朝魏、齐、周争雄于中原。这是民族大融合与佛教大发展的时代，也是门阀衰落、寒门崛起、制度重建的时代。最终，北周的制度遗产由隋朝继承，完成南北统一。',
    theme: {
      bg: '#e7e2d5',
      panel: '#f2eee2',
      paper: '#eae4d7',
      ink: '#26221b',
      muted: '#71695b',
      seal: '#8f4233',
      river: '#7c6d58',
      accent: '#6b6250',
      line: 'rgba(107,98,80,.32)',
      wash: 'rgba(143,66,51,.07)',
      motif: 'north-south'
    },
    periods: [
      { name: '南朝宋', start: 420, end: 479, lane: 0, color: '#8f4233' },
      { name: '南朝齐', start: 479, end: 502, lane: 0, color: '#a96a4a' },
      { name: '南朝梁', start: 502, end: 557, lane: 0, color: '#8b7550' },
      { name: '南朝陈', start: 557, end: 589, lane: 0, color: '#6f7c5e' },
      { name: '北魏', start: 386, end: 534, lane: 1, color: '#596d7b' },
      { name: '东魏 / 西魏', start: 534, end: 557, lane: 1, color: '#6e6b82' },
      { name: '北齐', start: 550, end: 577, lane: 2, color: '#7c5a6a' },
      { name: '北周', start: 557, end: 581, lane: 2, color: '#4f675f' }
    ],
    figures: [
      {
        name: '刘裕',
        title: '宋武帝',
        bio: '寒门出身的北伐名将，灭南燕、后秦，代晋建宋。刘宋是南朝疆域最大、国力最强的政权。',
        portrait: { hat: 'guan', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        name: '拓跋宏',
        title: '北魏孝文帝',
        bio: '迁都洛阳，推行均田制、三长制与汉化改革，改鲜卑姓为汉姓，促进民族融合。',
        portrait: { hat: 'mian', beard: 'none', face: 'oval', age: 'young', expression: 'calm' }
      },
      {
        name: '萧衍',
        title: '梁武帝',
        bio: '博学多才，崇佛三次舍身同泰寺。在位近五十年，晚年因侯景之乱饿死台城。',
        portrait: { hat: 'guan', beard: 'long', face: 'lean', age: 'old', expression: 'mild' }
      },
      {
        name: '宇文邕',
        title: '北周武帝',
        bio: '诛权臣宇文护，灭北齐，统一北方。推行府兵制与灭佛政策，为隋唐制度奠定基础。',
        portrait: { hat: 'mian', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'ns-founded',
        year: 420,
        era: '永初元年',
        title: '刘裕代晋，南朝开始',
        type: 'politics',
        context: '南朝宋',
        summary: '刘裕建立刘宋，东晋灭亡，南朝宋齐梁陈的序列开启。',
        detail:
          '刘裕以军功崛起，控制东晋朝政后受禅称帝，建立宋，定都建康。他整顿吏治、抑制豪强、减轻赋役，为南朝奠定了相对稳定的开端。',
        significance:
          '寒门武将取代门阀士族掌握皇权，南朝政治格局为之一变。',
        tags: ['刘裕', '刘宋', '建康']
      },
      {
        id: 'ns-north-unify',
        year: 439,
        era: '太延五年',
        title: '北魏统一北方',
        type: 'war',
        context: '北魏',
        summary: '太武帝拓跋焘灭北凉，结束十六国分裂，与南朝形成对峙。',
        detail:
          '北魏太武帝拓跋焘先后灭夏、北燕、北凉，统一黄河流域。他重用崔浩等汉臣，崇道抑佛，发动“太武灭佛”，并多次南征。',
        significance:
          '北方结束十六国混战，形成稳定的北朝政权，南北对峙格局确立。',
        tags: ['北魏', '拓跋焘', '统一北方']
      },
      {
        id: 'ns-xiaowen',
        year: 494,
        era: '太和十八年',
        title: '孝文帝迁都洛阳',
        type: 'politics',
        context: '北魏',
        summary: '北魏迁都洛阳，推行全面汉化，促进民族融合。',
        detail:
          '孝文帝以南征为名率军南下，抵达洛阳后宣布迁都。随后推行改革：改鲜卑姓为汉姓（拓跋改元），禁胡服胡语，行均田制与三长制，鼓励鲜卑贵族与汉人士族通婚。',
        significance:
          '北魏汉化改革加速了北方民族融合，也埋下六镇鲜卑不满与北魏分裂的种子。',
        tags: ['孝文帝', '汉化', '洛阳']
      },
      {
        id: 'ns-houjing',
        year: 548,
        endYear: 552,
        era: '太清二年—承圣元年',
        title: '侯景之乱',
        type: 'war',
        context: '南朝梁',
        summary: '侯景起兵反梁，攻破建康，梁武帝饿死台城，江南残破。',
        detail:
          '东魏降将侯景因求娶王谢士族之女被拒，起兵反梁。他渡江攻破建康，围台城，梁武帝萧衍饿死。侯景纵兵屠掠，江南士族遭受毁灭性打击，随后被陈霸先、王僧辩击败。',
        significance:
          '南朝经济文化遭到重创，门阀士族进一步衰落，陈霸先得以建立陈朝。',
        tags: ['侯景', '台城', '梁武帝']
      },
      {
        id: 'ns-north-unite',
        year: 577,
        era: '建德六年',
        title: '北周灭北齐',
        type: 'war',
        context: '北周',
        summary: '周武帝宇文邕灭北齐，统一北方，为隋朝统一奠定基础。',
        detail:
          '北周武帝宇文邕亲政后，整顿府兵，灭佛充实财政，于建德六年攻破邺城，灭北齐。北方重新统一，北周成为最强大的政权。',
        significance:
          '北周整合关中与关东，制度与军事优势明显。其外戚杨坚最终代周建隋。',
        tags: ['宇文邕', '北齐', '邺城']
      },
      {
        id: 'ns-sui',
        year: 581,
        era: '大象三年',
        title: '杨坚代周建隋',
        type: 'politics',
        context: '北周',
        summary: '杨坚受禅建立隋朝，北周灭亡，南北统一进入倒计时。',
        detail:
          '周宣帝暴崩，幼主静帝即位，外戚杨坚以丞相身份辅政，平定尉迟迥等反抗后受禅称帝，建立隋朝。随后着手整顿制度、积蓄力量，准备南征。',
        significance:
          '北周的制度遗产被隋朝继承。八年后隋灭陈，结束近三百年分裂。',
        tags: ['杨坚', '代周', '隋朝']
      }
    ]
  },
  {
    id: 'five-dynasties',
    kind: 'interlude',
    name: '五代十国',
    fullName: '五代十国',
    seal: '五',
    start: 907,
    end: 979,
    riverStart: 907,
    riverEnd: 960,
    tagline: '五十三年，八姓十四君',
    intro:
      '唐朝灭亡后，中原相继出现后梁、后唐、后晋、后汉、后周五代，南方与河东则有十国并立。武人夺权、契丹南下、燕云割让，使这一时期成为中国历史上最动荡的分裂时代之一。后周世宗柴荣的改革，为北宋统一准备了条件。',
    theme: {
      bg: '#e8e0d0',
      panel: '#f2ebdc',
      paper: '#eae2d2',
      ink: '#28221a',
      muted: '#756a58',
      seal: '#8d3b2e',
      river: '#6e5b70',
      accent: '#5f5a6b',
      line: 'rgba(95,90,107,.3)',
      wash: 'rgba(141,59,46,.07)',
      motif: 'five'
    },
    periods: [
      { name: '后梁', start: 907, end: 923, lane: 0, color: '#8d3b2e' },
      { name: '后唐', start: 923, end: 936, lane: 0, color: '#6b7b5a' },
      { name: '后晋', start: 936, end: 947, lane: 0, color: '#7b6a4f' },
      { name: '后汉', start: 947, end: 951, lane: 0, color: '#5d6b7b' },
      { name: '后周', start: 951, end: 960, lane: 0, color: '#8a5d4a' },
      { name: '十国', start: 902, end: 979, lane: 1, color: '#8b8270' }
    ],
    figures: [
      {
        name: '朱温',
        title: '后梁太祖',
        bio: '黄巢旧部，降唐后逐步控制中原，弑昭宗、废哀帝，建立后梁。猜忌好杀，最终被其子所弑。',
        portrait: { hat: 'futou', beard: 'full', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        name: '李存勖',
        title: '后唐庄宗',
        bio: '李克用之子，灭后梁、建后唐，骁勇善战，却宠信伶人、猜忌功臣，最终死于兵变。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'young', expression: 'stern' }
      },
      {
        name: '石敬瑭',
        title: '后晋高祖',
        bio: '以割让燕云十六州、称契丹为父为代价换取皇位，留下长期的地缘隐患。',
        portrait: { hat: 'futou', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        name: '柴荣',
        title: '后周世宗',
        bio: '后周世宗，励精图治，整顿军政、发展生产、南征北战，被誉为“五代第一明君”，为北宋统一奠定基础。',
        portrait: { hat: 'futou', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'fd-founded',
        year: 907,
        era: '开平元年',
        title: '朱温代唐，后梁建立',
        type: 'politics',
        context: '后梁',
        summary: '朱温废唐哀帝，建立后梁，五代十国时代开始。',
        detail:
          '宣武节度使朱温控制中原多年，弑唐昭宗、废哀帝，自立为帝，国号梁，定都开封。河东李克用、李存勖父子仍奉唐正朔，与后梁长期对抗。',
        significance:
          '唐朝灭亡，中国进入五代十国的分裂时期。武人政治与政权短命更迭成为时代特征。',
        tags: ['朱温', '后梁', '开封']
      },
      {
        id: 'fd-tang',
        year: 923,
        era: '同光元年',
        title: '李存勖灭梁，后唐建立',
        shortTitle: '后唐建立',
        type: 'war',
        context: '后唐',
        summary: '李存勖奇袭汴梁，灭后梁，建立后唐，定都洛阳。',
        detail:
          '晋王李存勖在柏乡、魏州等战中重创后梁，后称帝建唐，史称后唐。同年奇袭汴梁，后梁末帝自杀，后梁灭亡。后唐一度统一北方。',
        significance:
          '沙陀军事集团入主中原，后唐成为五代中疆域最广的政权。',
        tags: ['李存勖', '后唐', '汴梁']
      },
      {
        id: 'fd-yanyun',
        year: 936,
        era: '清泰三年',
        title: '石敬瑭割让燕云十六州',
        shortTitle: '割让燕云十六州',
        type: 'diplomacy',
        context: '后晋',
        summary: '石敬瑭借契丹兵灭后唐，割燕云十六州，自称“儿皇帝”。',
        detail:
          '后唐河东节度使石敬瑭起兵反叛，向契丹求援，许诺割让燕云十六州、称臣称子。契丹耶律德光率军南下，灭后唐，立石敬瑭为后晋皇帝。',
        significance:
          '燕云十六州自此脱离中原政权四百余年，北方门户洞开，深刻影响宋辽关系。',
        tags: ['石敬瑭', '燕云十六州', '契丹']
      },
      {
        id: 'fd-liao',
        year: 947,
        era: '开运四年',
        title: '契丹灭后晋，改国号辽',
        shortTitle: '契丹灭后晋',
        type: 'war',
        context: '后晋',
        summary: '耶律德光攻入开封，灭后晋，在汴梁称帝，改国号为辽。',
        detail:
          '后晋出帝石重贵不愿称臣，契丹三次南下。947年，耶律德光攻破开封，后晋灭亡。他在汴梁称帝，改国号大辽，但因纵兵劫掠、水土不服，不久北撤，病死于途中。',
        significance:
          '契丹一度入主中原，中原民众奋起反抗。辽朝由此成为北宋的长期北方强敌。',
        tags: ['耶律德光', '辽朝', '开封']
      },
      {
        id: 'fd-zhou',
        year: 951,
        era: '广顺元年',
        title: '郭威建后周',
        type: 'politics',
        context: '后周',
        summary: '郭威在澶州兵变后建立后周，开启五代最后的改革。',
        detail:
          '后汉隐帝诛杀功臣，郭威起兵，澶州兵变黄袍加身，建立后周。郭威革除苛政、减轻赋税、整顿军纪，为后周世宗柴荣的改革奠定基础。',
        significance:
          '后周是五代中最有作为的政权，其改革直接为北宋统一与制度重建所继承。',
        tags: ['郭威', '后周', '澶州']
      },
      {
        id: 'fd-chairong',
        year: 954,
        era: '显德元年',
        title: '周世宗柴荣改革',
        type: 'politics',
        context: '后周',
        summary: '柴荣整军经武、均田减税、限制佛教，志在统一天下。',
        detail:
          '柴荣即位后，在高平之战击退北汉与契丹联军，随后整顿禁军，裁汰老弱；推行均田、减轻赋税，治理黄河，限制佛教。他南征南唐、北伐契丹，收复部分失地。',
        significance:
          '“五代第一明君”的改革使后周国力大增，为赵匡胤统一中国准备了制度与军事基础。',
        tags: ['柴荣', '高平之战', '改革']
      },
      {
        id: 'fd-song',
        year: 960,
        era: '显德七年',
        title: '陈桥兵变，北宋建立',
        type: 'politics',
        context: '后周',
        summary: '赵匡胤黄袍加身，代周建宋，五代十国走向终结。',
        detail:
          '柴荣早逝，幼主柴宗训即位。殿前都点检赵匡胤借北汉、契丹南侵之机率军出征，在陈桥驿被部下黄袍加身，回师开封，受禅建立宋朝。',
        significance:
          '五代结束，北宋随后用近二十年时间平定各割据政权，重新统一中原与南方。',
        tags: ['赵匡胤', '陈桥兵变', '北宋']
      }
    ]
  }
);
