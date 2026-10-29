/* 隋唐卷 */
window.HISTORY_DATA.push(
  {
    id: 'sui',
    kind: 'dynasty',
    name: '隋',
    fullName: '隋朝',
    seal: '隋',
    start: 581,
    end: 618,
    riverStart: 589,
    riverEnd: 618,
    capital: '大兴（长安）',
    tagline: '运河通南北，科举开千年',
    intro:
      '杨坚代周建隋，八年后灭陈，结束近三百年的南北分裂。三省六部、科举取士、大运河，都是它留给后世的制度遗产。然而炀帝急于求成，工程与征伐并起，强盛的帝国在三十八年间二世而亡。',
    theme: {
      bg: '#e9e4d4',
      panel: '#f3efe2',
      paper: '#ede8d9',
      ink: '#20241f',
      muted: '#6f7568',
      seal: '#8c3b2e',
      river: '#416b68',
      accent: '#416b68',
      line: 'rgba(65,107,104,.3)',
      wash: 'rgba(65,107,104,.08)',
      motif: 'sui'
    },
    emperors: [
      {
        id: 'sui-wendi',
        name: '杨坚',
        title: '隋文帝',
        era: '开皇—仁寿',
        start: 581,
        end: 604,
        reigns: [[581, 604]],
        bio: '北周外戚，受禅建隋。开皇九年灭陈，统一南北；废九品中正，行三省六部，创科举，轻徭薄赋，史称“开皇之治”。',
        portrait: { hat: 'futou', beard: 'long', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'sui-yangdi',
        name: '杨广',
        title: '隋炀帝',
        era: '大业',
        start: 604,
        end: 618,
        reigns: [[604, 618]],
        bio: '文帝次子。营洛阳、开运河、修长城、三征高句丽，功业与民力同时被推到极限。大业十四年，江都兵变，被宇文化及缢杀。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      }
    ],
    events: [
      {
        id: 'sui-founded',
        year: 581,
        era: '开皇元年',
        title: '杨坚代周建隋',
        type: 'politics',
        emperor: 'sui-wendi',
        summary: '北周外戚杨坚受禅称帝，改国号为隋，定都大兴。',
        detail:
          '北周宣帝暴崩，幼主静帝即位，外戚杨坚以丞相身份总揽朝政，平定尉迟迥等反对势力后受禅称帝。隋朝建立，北周宗室遭到清洗。',
        significance:
          '关陇集团内部完成权力更替。隋朝随后着手重建中央集权与统一南北。',
        tags: ['杨坚', '受禅', '大兴城']
      },
      {
        id: 'sui-unify',
        year: 589,
        era: '开皇九年',
        title: '隋灭陈，南北一统',
        type: 'war',
        emperor: 'sui-wendi',
        summary: '隋军渡江攻入建康，俘陈后主，结束近三百年分裂。',
        detail:
          '隋以晋王杨广为行军元帅，高颎为长史，贺若弼、韩擒虎分道渡江。陈后主陈叔宝仍与妃嫔宴饮，建康陷落后藏于枯井中被俘。',
        significance:
          '自西晋末年以来的南北分裂结束，中国重新归于统一，为盛唐的开放格局奠定基础。',
        tags: ['灭陈', '建康', '陈后主']
      },
      {
        id: 'sui-canal',
        year: 605,
        era: '大业元年',
        title: '开凿大运河',
        type: 'society',
        emperor: 'sui-yangdi',
        summary: '以洛阳为中心，贯通通济渠、邗沟、永济渠与江南河。',
        detail:
          '炀帝征发百万民夫，先后开凿通济渠、邗沟，改造永济渠，延伸江南河，形成北抵涿郡、南达余杭、全长两千余公里的大运河体系。',
        significance:
          '运河把黄河、淮河、长江、钱塘江流域连为一体，此后千余年都是帝制中国的经济命脉。',
        tags: ['大运河', '洛阳', '漕运']
      },
      {
        id: 'sui-keju',
        year: 605,
        era: '大业元年',
        title: '创设进士科',
        type: 'culture',
        emperor: 'sui-yangdi',
        summary: '以考试取士的进士科设立，科举制度正式成形。',
        detail:
          '隋文帝时废九品中正，令各州举人应考。炀帝大业元年设进士科，以试策取士，打破门第对仕途的垄断。',
        significance:
          '科举制从此延续一千三百年，成为帝制中国最重要的人才选拔与社会流动机制。',
        tags: ['科举', '进士科', '选官']
      },
      {
        id: 'sui-goguryeo',
        year: 612,
        endYear: 614,
        era: '大业八年—十年',
        title: '三征高句丽',
        type: 'war',
        emperor: 'sui-yangdi',
        summary: '百万大军三度东征，损失惨重，成为隋亡的导火索。',
        detail:
          '大业八年，炀帝亲征高句丽，号称百万之众，围攻辽东城不克，萨水之战隋军大溃。此后又两度出兵，均无功而返。徭役与兵役耗尽民力。',
        significance:
          '战争激化了社会矛盾，各地起义此起彼伏，强盛的隋帝国迅速滑向崩溃。',
        tags: ['高句丽', '辽东', '萨水']
      },
      {
        id: 'sui-revolt',
        year: 611,
        era: '大业七年',
        title: '长白山起义',
        type: 'society',
        emperor: 'sui-yangdi',
        summary: '王薄在长白山首举义旗，各地反隋力量迅速蔓延。',
        detail:
          '邹平人王薄以“知世郎”为号，在长白山起义，作《无向辽东浪死歌》，号召民众反抗征辽。此后瓦岗、河北、江淮等地的义军蜂起。',
        significance:
          '隋末农民战争全面爆发，隋朝的基层控制迅速瓦解。',
        tags: ['王薄', '瓦岗', '隋末起义']
      },
      {
        id: 'sui-fall',
        year: 618,
        era: '大业十四年',
        title: '江都兵变，隋亡',
        type: 'politics',
        emperor: 'sui-yangdi',
        summary: '宇文化及发动兵变缢杀炀帝；李渊在长安称帝，建立唐朝。',
        detail:
          '炀帝滞留江都，随行骁果军思归关中。宇文化及、司马德戡等发动兵变，缢杀炀帝。同年五月，李渊在长安受禅称帝，改国号为唐。',
        significance:
          '隋朝二世而亡。其制度遗产被唐朝全盘继承，成就了此后的贞观之治。',
        tags: ['江都兵变', '宇文化及', '李渊']
      }
    ]
  },
  {
    id: 'tang',
    kind: 'dynasty',
    name: '唐',
    fullName: '唐朝',
    seal: '唐',
    start: 618,
    end: 907,
    riverStart: 618,
    riverEnd: 907,
    capital: '长安',
    tagline: '九天阊阖开宫殿，万国衣冠拜冕旒',
    intro:
      '唐朝是中国帝制时代最开放、最绚烂的篇章之一。贞观之治与开元盛世，使长安成为世界性的都会；诗歌、书法、佛教、乐舞在此交汇。安史之乱后，藩镇、宦官、党争交织，帝国在余晖中又延续了一百四十余年。',
    theme: {
      bg: '#f0e0bf',
      panel: '#f8ecd2',
      paper: '#f2e3c6',
      ink: '#2a1d13',
      muted: '#806548',
      seal: '#ae3826',
      river: '#b87a3c',
      accent: '#b88938',
      line: 'rgba(184,137,56,.34)',
      wash: 'rgba(174,56,38,.08)',
      motif: 'tang'
    },
    emperors: [
      {
        id: 'tang-gaozu',
        name: '李渊',
        title: '唐高祖',
        era: '武德',
        start: 618,
        end: 626,
        reigns: [[618, 626]],
        bio: '太原留守，晋阳起兵后攻入长安，受隋恭帝禅让称帝。统一战争由李世民等人完成。玄武门之变后禅位，退居太上皇。',
        portrait: { hat: 'futou', beard: 'long', face: 'square', age: 'old', expression: 'calm' }
      },
      {
        id: 'tang-taizong',
        name: '李世民',
        title: '唐太宗',
        era: '贞观',
        start: 626,
        end: 649,
        reigns: [[626, 649]],
        bio: '通过玄武门之变即位。纳谏如流，任人唯贤，完善三省六部与科举，被四夷尊为“天可汗”。贞观之治成为后世治世的标杆。',
        portrait: { hat: 'futou', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-gaozong',
        name: '李治',
        title: '唐高宗',
        era: '永徽—弘道',
        start: 649,
        end: 683,
        reigns: [[649, 683]],
        bio: '太宗第九子。永徽年间有“永徽之治”，灭西突厥、高句丽，唐朝疆域达到极盛。晚年多病，武后逐渐参预朝政。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      },
      {
        id: 'tang-zhongzong',
        name: '李显',
        title: '唐中宗',
        era: '嗣圣、神龙—景龙',
        start: 684,
        end: 710,
        reigns: [[684, 684], [705, 710]],
        bio: '高宗第七子。嗣圣元年即位月余即被武则天废为庐陵王；神龙政变后复位，又纵容韦后与安乐公主干政，最终被毒杀。',
        portrait: { hat: 'futou', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'tang-ruizong',
        name: '李旦',
        title: '唐睿宗',
        era: '文明、景云—先天',
        start: 684,
        end: 712,
        reigns: [[684, 690], [710, 712]],
        bio: '高宗第八子。武后称帝时被降为皇嗣，中宗死后复位。在位期间太平公主与李隆基争权，最终禅位于玄宗。',
        portrait: { hat: 'futou', beard: 'short', face: 'oval', age: 'mature', expression: 'calm' }
      },
      {
        id: 'tang-wuzetian',
        name: '武曌',
        alias: '武则天',
        title: '则天大圣皇帝',
        era: '天授—神龙',
        start: 690,
        end: 705,
        reigns: [[690, 705]],
        bio: '中国历史上唯一的女皇帝。由才人、皇后、天后一路走向帝位，改国号为周，迁都洛阳。晚年任用酷吏，也提拔狄仁杰等贤臣。神龙政变后退位。',
        portrait: { hat: 'phoenix', beard: 'none', face: 'oval', age: 'mature', expression: 'stern', sex: 'f' }
      },
      {
        id: 'tang-xuanzong',
        name: '李隆基',
        title: '唐玄宗',
        era: '开元、天宝',
        start: 712,
        end: 756,
        reigns: [[712, 756]],
        bio: '早年励精图治，开创开元盛世；晚年宠信杨贵妃、李林甫、杨国忠，怠于政事。安史之乱爆发后仓皇入蜀，太子灵武即位，被尊为太上皇。',
        portrait: { hat: 'futou', beard: 'long', face: 'square', age: 'old', expression: 'mild' }
      },
      {
        id: 'tang-suzong',
        name: '李亨',
        title: '唐肃宗',
        era: '至德—宝应',
        start: 756,
        end: 762,
        reigns: [[756, 762]],
        bio: '安史之乱中于灵武即位，遥尊玄宗为太上皇。借用回纥兵收复两京，却使宦官李辅国掌握禁军，开唐代宦官专权之端。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'tang-daizong',
        name: '李豫',
        title: '唐代宗',
        era: '宝应—大历',
        start: 762,
        end: 779,
        reigns: [[762, 779]],
        bio: '收复洛阳、平定安史余部。在位期间吐蕃一度攻入长安，藩镇割据局面成形。诛宦官鱼朝恩，却未能扭转宦官掌兵之势。',
        portrait: { hat: 'futou', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'tang-dezong',
        name: '李适',
        title: '唐德宗',
        era: '建中—贞元',
        start: 779,
        end: 805,
        reigns: [[779, 805]],
        bio: '即位初锐意削藩，引发泾原兵变，被迫出奔奉天。此后对藩镇转取姑息，重用宦官，并推行两税法。',
        portrait: { hat: 'futou', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-shunzong',
        name: '李诵',
        title: '唐顺宗',
        era: '永贞',
        start: 805,
        end: 805,
        reigns: [[805, 805]],
        bio: '在位仅百余日。任用王叔文、王伾推行“永贞革新”，抑制宦官与藩镇，失败后被逼禅位。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'mild' }
      },
      {
        id: 'tang-xianzong',
        name: '李纯',
        title: '唐宪宗',
        era: '元和',
        start: 805,
        end: 820,
        reigns: [[805, 820]],
        bio: '励精图治，重用裴度、李愬，平定淮西、淄青等藩镇，史称“元和中兴”。晚年服食丹药，性情暴躁，被宦官所弑。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-muzong',
        name: '李恒',
        title: '唐穆宗',
        era: '长庆',
        start: 820,
        end: 824,
        reigns: [[820, 824]],
        bio: '宪宗第三子。即位后罢免裴度，销兵裁军，河北藩镇复叛。喜好游乐，在位四年而崩。',
        portrait: { hat: 'futou', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'tang-jingzong',
        name: '李湛',
        title: '唐敬宗',
        era: '宝历',
        start: 824,
        end: 826,
        reigns: [[824, 826]],
        bio: '十六岁即位，耽于击球、夜猎，不理朝政。在位两年，被宦官刘克明等弑于宫中。',
        portrait: { hat: 'futou', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'tang-wenzong',
        name: '李昂',
        title: '唐文宗',
        era: '大和—开成',
        start: 826,
        end: 840,
        reigns: [[826, 840]],
        bio: '勤勉好学，试图铲除宦官，发动“甘露之变”失败，反被宦官软禁。曾叹“受制于家奴”，郁郁而终。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'calm' }
      },
      {
        id: 'tang-wuzong',
        name: '李炎',
        title: '唐武宗',
        era: '会昌',
        start: 840,
        end: 846,
        reigns: [[840, 846]],
        bio: '重用李德裕，击破回鹘，平定泽潞，史称“会昌中兴”。会昌五年下令灭佛，拆寺毁像，佛教遭受重创。晚年服丹而崩。',
        portrait: { hat: 'futou', beard: 'short', face: 'square', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-xuanzong2',
        name: '李忱',
        title: '唐宣宗',
        era: '大中',
        start: 846,
        end: 859,
        reigns: [[846, 859]],
        bio: '装傻多年后由宦官拥立，即位后明察果决，整顿吏治，收复河湟，被百姓称为“小太宗”。晚年服丹中毒。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-yizong',
        name: '李漼',
        title: '唐懿宗',
        era: '咸通',
        start: 859,
        end: 873,
        reigns: [[859, 873]],
        bio: '骄奢淫逸，崇佛无度，迎佛骨耗费巨万。在位期间浙东裘甫、徐州庞勋相继起兵，唐朝危机加深。',
        portrait: { hat: 'futou', beard: 'short', face: 'round', age: 'mature', expression: 'mild' }
      },
      {
        id: 'tang-xizong',
        name: '李儇',
        title: '唐僖宗',
        era: '乾符—文德',
        start: 873,
        end: 888,
        reigns: [[873, 888]],
        bio: '十二岁即位，专事游乐，称宦官田令孜为“阿父”。黄巢攻入长安，他两度出奔。在位期间天下大乱，藩镇割据定型。',
        portrait: { hat: 'futou', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      },
      {
        id: 'tang-zhaozong',
        name: '李晔',
        title: '唐昭宗',
        era: '龙纪—天祐',
        start: 888,
        end: 904,
        reigns: [[888, 904]],
        bio: '力图复兴，重建禁军，却屡败于藩镇。先后被李茂贞、韩建、朱温挟持，最终被朱温弑杀。',
        portrait: { hat: 'futou', beard: 'short', face: 'lean', age: 'mature', expression: 'stern' }
      },
      {
        id: 'tang-aidi',
        name: '李柷',
        title: '唐哀帝',
        era: '天祐',
        start: 904,
        end: 907,
        reigns: [[904, 907]],
        bio: '十三岁被朱温立为傀儡皇帝。天祐四年禅位于朱温，唐朝灭亡，次年被毒杀。',
        portrait: { hat: 'futou', beard: 'none', face: 'round', age: 'young', expression: 'mild' }
      }
    ],
    events: [
      {
        id: 'tang-founded',
        year: 618,
        era: '武德元年',
        title: '晋阳起兵，唐朝建立',
        type: 'war',
        emperor: 'tang-gaozu',
        summary: '李渊父子自太原起兵，攻入长安，受禅建唐。',
        detail:
          '隋末天下大乱，李渊在李世民、刘文静等人推动下于晋阳起兵，南下渡河，攻占长安。李渊立隋炀帝之孙杨侑为帝，次年受禅称帝，改国号为唐。',
        significance:
          '唐朝建立，随后用数年时间扫平群雄，重新统一中国。',
        tags: ['晋阳', '李渊', '李世民']
      },
      {
        id: 'tang-xuanwu',
        year: 626,
        era: '武德九年',
        title: '玄武门之变',
        type: 'politics',
        emperor: 'tang-taizong',
        summary: '李世民伏杀太子李建成、齐王李元吉，随后即位。',
        detail:
          '太子李建成与秦王李世民矛盾激化。李世民率长孙无忌、尉迟敬德等埋伏于玄武门，射杀李建成、李元吉。李渊被迫立李世民为太子，不久禅位。',
        significance:
          '李世民登上皇位，开启贞观之治。政变的血腥与治世的清明，构成唐初最耐人寻味的历史张力。',
        tags: ['李世民', '李建成', '尉迟敬德']
      },
      {
        id: 'tang-tujue',
        year: 630,
        era: '贞观四年',
        title: '灭东突厥，天可汗',
        type: 'war',
        emperor: 'tang-taizong',
        summary: '李靖夜袭阴山，俘颉利可汗，四夷共尊太宗为“天可汗”。',
        detail:
          '李靖率三千骑夜袭定襄，又于阴山大破突厥。颉利可汗被俘，东突厥灭亡。西北各族君长入朝，共尊李世民为“天可汗”。',
        significance:
          '唐朝解除北方最大威胁，建立起以“天可汗”为象征的多民族秩序。',
        tags: ['李靖', '东突厥', '天可汗']
      },
      {
        id: 'tang-xuanzang',
        year: 629,
        endYear: 645,
        era: '贞观三年—十九年',
        title: '玄奘西行求法',
        type: 'culture',
        emperor: 'tang-taizong',
        summary: '玄奘孤身西行五万里，取经天竺，归国后译经讲学。',
        detail:
          '玄奘为求佛法真义，从长安出发，经河西、西域入天竺，在那烂陀寺研习瑜伽行派。贞观十九年携六百余部梵文经卷回到长安，此后主持译场，口述《大唐西域记》。',
        significance:
          '中印文化交流的巅峰事件，也为后世《西游记》提供了原型。',
        tags: ['玄奘', '大唐西域记', '佛教']
      },
      {
        id: 'tang-wencheng',
        year: 641,
        era: '贞观十五年',
        title: '文成公主入藏',
        type: 'diplomacy',
        emperor: 'tang-taizong',
        summary: '文成公主远嫁吐蕃赞普松赞干布，汉藏关系进入新阶段。',
        detail:
          '松赞干布遣使求婚，太宗以宗室女文成公主许嫁。公主携佛像、经卷、工艺与农作技术入藏，途经日月山，历时数月抵达逻些。',
        significance:
          '唐蕃和亲促进了两地的物质与文化交流，文成公主成为汉藏友好的象征。',
        tags: ['吐蕃', '松赞干布', '和亲']
      },
      {
        id: 'tang-wuzhou',
        year: 690,
        era: '天授元年',
        title: '武则天称帝',
        type: 'politics',
        emperor: 'tang-wuzetian',
        summary: '武则天改唐为周，自称圣神皇帝，定都洛阳。',
        detail:
          '武则天在高宗晚年已实际掌权，先后废中宗、睿宗。天授元年，她接受“圣母临人，永昌帝业”的劝进，正式称帝，改国号为周，史称武周。',
        significance:
          '中国历史上唯一的女皇帝。她打击门阀、扩大科举、提拔寒门，也以酷吏政治留下争议。',
        tags: ['武周', '洛阳', '女皇']
      },
      {
        id: 'tang-shenlong',
        year: 705,
        era: '神龙元年',
        title: '神龙政变',
        type: 'politics',
        emperor: 'tang-zhongzong',
        summary: '张柬之等逼武则天退位，中宗复位，恢复唐朝国号。',
        detail:
          '武则天晚年宠信张易之、张昌宗兄弟，朝政紊乱。宰相张柬之联合禁军将领李多祚等发动政变，诛二张，逼武则天禅位于中宗李显。',
        significance:
          '武周结束，唐朝复辟。但中宗复位后韦后与武三思干政，宫廷斗争并未平息。',
        tags: ['张柬之', '中宗复位', '李唐']
      },
      {
        id: 'tang-kaiyuan',
        year: 713,
        endYear: 741,
        era: '开元元年—二十九年',
        title: '开元盛世',
        type: 'society',
        emperor: 'tang-xuanzong',
        summary: '玄宗前期任贤纳谏，国力鼎盛，长安成为世界都会。',
        detail:
          '玄宗即位后先后任用姚崇、宋璟、张说、张九龄，整顿吏治，裁汰冗官，发展生产，改革兵制。杜甫诗云“稻米流脂粟米白，公私仓廪俱丰实”。',
        significance:
          '唐朝达到全盛，人口、经济、文化与国际影响力均臻顶峰，是中国古代盛世的代表。',
        tags: ['开元', '姚崇宋璟', '长安']
      },
      {
        id: 'tang-anlushan',
        year: 755,
        endYear: 763,
        era: '天宝十四载—广德元年',
        title: '安史之乱',
        type: 'war',
        emperor: 'tang-xuanzong',
        summary: '安禄山、史思明起兵，八年战乱使唐朝由盛转衰。',
        detail:
          '平卢、范阳、河东三镇节度使安禄山以“清君侧”为名在范阳起兵，攻陷洛阳、长安。玄宗奔蜀，马嵬驿兵变，杨国忠、杨贵妃死。肃宗灵武即位，借回纥兵平叛。',
        significance:
          '唐朝由盛转衰的转折点。藩镇割据、宦官专权、财政危机由此交织，中国经济重心加速南移。',
        tags: ['安禄山', '史思明', '马嵬驿']
      },
      {
        id: 'tang-liangshui',
        year: 780,
        era: '建中元年',
        title: '杨炎行两税法',
        type: 'politics',
        emperor: 'tang-dezong',
        summary: '废租庸调，按资产与田亩征税，一年分夏秋两次。',
        detail:
          '宰相杨炎针对均田制瓦解、租庸调难以为继的局面，推行两税法：以户等和资产定税，分夏、秋两季征收，简化税制，扩大税基。',
        significance:
          '中国赋税制度由“人丁为本”转向“资产为本”，影响此后千余年的财政结构。',
        tags: ['杨炎', '两税法', '赋税改革']
      },
      {
        id: 'tang-yongzhen',
        year: 805,
        era: '永贞元年',
        title: '永贞革新',
        type: 'politics',
        emperor: 'tang-shunzong',
        summary: '王叔文集团推行新政，百余日即遭宦官与藩镇反扑。',
        detail:
          '顺宗即位后，王叔文、王伾、柳宗元、刘禹锡等推行罢宫市、免欠税、抑宦官、削藩镇等改革。宦官俱文珍联合藩镇逼顺宗禅位，改革失败，二王八司马被贬。',
        significance:
          '中唐士人最后一次自上而下的自救尝试，失败后宦官专权与藩镇割据更加难以撼动。',
        tags: ['二王八司马', '柳宗元', '永贞']
      },
      {
        id: 'tang-huichang',
        year: 845,
        era: '会昌五年',
        title: '会昌灭佛',
        type: 'culture',
        emperor: 'tang-wuzong',
        summary: '武宗下令拆寺毁像、勒令僧尼还俗，佛教遭受重创。',
        detail:
          '唐武宗崇道抑佛，在道士赵归真等鼓动下，于会昌五年下诏灭佛。全国拆毁寺院四千六百余所，还俗僧尼二十六万余人，铜像钟磬熔铸钱币。',
        significance:
          '佛教“三武一宗”法难之一。寺院经济遭受打击，也深刻改变了中国佛教的宗派格局。',
        tags: ['会昌法难', '佛教', '武宗']
      },
      {
        id: 'tang-huangchao',
        year: 875,
        endYear: 884,
        era: '乾符二年—中和四年',
        title: '黄巢起义',
        type: 'society',
        emperor: 'tang-xizong',
        summary: '黄巢转战南北，攻入长安称帝，最终兵败狼虎谷。',
        detail:
          '黄巢响应王仙芝起兵，转战大半个中国，一度攻占广州。广明元年攻入长安，称帝建齐。唐廷借沙陀李克用等兵力反攻，黄巢败退，中和四年自刎于狼虎谷。',
        significance:
          '起义沉重打击了唐朝统治与门阀士族，也加速了藩镇割据与唐朝的灭亡。',
        tags: ['黄巢', '长安', '王仙芝']
      },
      {
        id: 'tang-fall',
        year: 907,
        era: '天祐四年',
        title: '朱温代唐',
        type: 'politics',
        emperor: 'tang-aidi',
        summary: '朱温逼哀帝禅位，建立后梁，唐朝灭亡。',
        detail:
          '宣武节度使朱温逐步控制中原，挟持昭宗、哀帝，诛杀朝臣，制造“白马驿之祸”。天祐四年，朱温废哀帝，自立为帝，国号梁，史称后梁。',
        significance:
          '延续二百八十九年的唐朝灭亡，中国进入五代十国的分裂时期。',
        tags: ['朱温', '后梁', '白马驿']
      }
    ]
  }
);
