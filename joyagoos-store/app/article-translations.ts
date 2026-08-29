import type { ArticleSlug } from "./article-data";
import type { Locale } from "./site-data";

type LocalArticle = {
  description: string;
  sections: readonly (readonly [string, string])[];
  sources: readonly string[];
};

export const articleTranslations: Partial<Record<Locale, Record<ArticleSlug, LocalArticle>>> = {
  zh: {
    "joyagoo-how-to-buy-guide": {
      description:"基于 Joyagoo 官方帮助中心整理的完整购买指南，覆盖商品链接、订单状态、仓库 QC、退货期限、仓储、打包和国际运输。",
      sections:[
        ["先理解 Joyagoo 的角色","Joyagoo 将自己描述为中国电商商品的购物代理：买家提交商品链接，平台代购，卖家把商品寄到中国仓库，仓库做可见范围内的检查并拍照，确认后的商品可暂存并合并为国际包裹。它不是原始制造商，也通常无法控制卖家库存、发货速度或批次。因此应同时保存当前商品页、下单时选择的准确规格和实际入库商品的仓库证据；外部表格只用于发现商品，付款前必须重新核对名称、颜色、尺码、版本、数量、国内运费和卖家说明。"],
        ["提交商品链接和准确规格","官方购物流程从商品链接开始，但关键工作发生在提交之前。先确认图片和价格对应的具体颜色、尺码或配件，再与当前页面的规格选择器逐项对照；最低展示价可能属于另一规格。重要选择应原样记录，必要时保存带日期的截图。卖家提供尺寸时要与自己已有商品比较，不能只依赖 S、M 或欧码标签。订单备注应补充而不是推翻选择器内容，并把商品付款、国内运费与后续国际运费分开理解。"],
        ["正确理解每个订单状态","官方帮助中心把流程分为 Purchased、Seller Sent、Stock Arrived 和 QC Completed 等状态。Purchased 表示代理已下单或正在处理，并不等于卖家已经发货；Seller Sent 表示卖家已寄往 Joyagoo 仓库；Stock Arrived 表示仓库收到商品并准备检查；QC Completed 表示检查图片可以查看。应以自己账户中的实时状态为准，其他买家的快速案例不是服务时效承诺。状态长时间不动时，用订单号和具体问题联系支持，不要重复下单。"],
        ["把 QC 照片当作证据，而不是保证","仓库会检查明显缺陷、核对尺码并提供多张商品照片。先确认商品类型、颜色、尺码标签、版本和数量，再查看正反面、侧面、鞋底或底部、标签、五金和关键特写；合身度重要时，应把测量数据与自己已有且合身的商品比较。光线和角度会改变颜色与比例判断，所以要从多张图片寻找一致证据。QC 不能测试长期耐用性、保证合身、鉴定真伪或预测未来批次，它只帮助判断这一次到货的可见状况和订单准确性。"],
        ["在公布的退货期限内行动","Joyagoo 当前退货政策写明，符合条件的商品应在状态变为 QC Completed 后五天，也就是 120 小时内提出申请。这个期限并非无条件承诺：商品必须符合资格，页面仍显示退货按钮，卖家同意并遵守相关平台规则，而且可能产生退货运费或服务费。提出售后时要指出准确问题并附对应图片，例如尺码标签错误、颜色不符或具体位置出现裂纹。政策可能变化，最终以实时账户操作和官方帮助中心为准。"],
        ["利用仓储时间合理合包","官方仓储政策目前写明，商品状态变为 Stored 后可免费存放 90 天；已提交但尚未支付国际运费的包裹另有 30 天免费期限，并可能提供付费延长。仓储让不同卖家的商品分批到达后再合包，但并非包得越多越安全。应把路线资格和保护需求相容的商品合并，限制品、易碎品或特别体积大的商品可能更适合分开。记录整组商品中最早的到期日，延长期限和费用应在账户中实时确认。"],
        ["从实时选项选择包装和线路","商品确认并入库后，可选择商品、填写地址、提交包裹并从当前可用线路中选择。线路取决于目的地和商品组合，限制品可能使部分线路消失。比较时不能只看首个价格，还要检查实际重量或体积重量计费、尺寸限制、追踪、保险、赔付条件和时效范围。去除装饰包装可能降低体积，但鞋、箱包、电子产品和易碎配件仍需要保护。预打包是付费服务，可在发出前更新重量和费用；最终计费仍由仓库或物流商的实际测量决定。"],
        ["追踪包裹并保留带日期的记录","包裹发出后，追踪信息会出现在用户中心的 Parcel 区域，也可结合承运商官网或 17TRACK 查看；国际转运期间更新可能延迟。保存包裹号、线路、申报信息、保险选择、打包尺寸、计费重量和付款记录，能帮助区分普通延迟与地址或线路问题。公开时效只是估计，不是保证到达日期。收到包裹时，如外包装有损坏，应在开箱前拍照，再按订单清单核对内容；完整记录也能帮助下一次比较预估重量和实际重量。"],
      ],
      sources:["Joyagoo 官方购物指南","Joyagoo 官方仓储期限说明","Joyagoo 官方退货政策","Joyagoo 官方预打包说明"],
    },
    "joyagoo-qc-photo-checklist": {
      description:"用结构化的 Joyagoo QC 照片清单核对商品身份、规格、测量、可见做工、运输风险和可执行的下一步。",
      sections:[
        ["先核对订单准确性","仓库照片必须与实时订单记录比较，而不是凭印象判断。先核对商品名称、颜色、尺码、版本和数量，并同时打开当前卖家页面、订单规格和仓库图片。先做身份判断，再看标识、车线和表面细节，可以避免花很多时间研究做工后才发现尺码标签或颜色根本不符。官方流程说明 QC 发生在 Stock Arrived 之后，因此应以自己订单中的这一组图片作为实际到货证据。"],
        ["使用固定的看图顺序","每件商品都按正面、背面、左侧、右侧、顶部、底部和特写的固定顺序检查，更容易发现缺失视角。鞋类要看鞋底、后跟、鞋头、鞋舌、鞋垫和尺码标签；服装要看袖口、领口、下摆、内标、印花或刺绣；配饰要看扣件、五金、边缘、表面、肩带和附件。关键区域缺失时，应在可操作期限内通过真实订单申请针对性的补充照片，并在购买增值照片前确认当前费用。"],
        ["检查对称和对齐","商品平放且居中时更容易判断对称。比较左右两侧、拼片高度、鞋孔、口袋位置、缝线路径和图案对齐，不要把单张斜角照片当成测量证据。跨多张图片重复出现的偏斜，比只在一张广角照片中出现的差异更值得重视。区分布料褶皱与结构错位、金属反光与深划痕，并记录问题所在的图片编号，方便代理快速定位。"],
        ["把颜色差异与灯光影响分开","仓库灯光、相机处理和背景颜色会改变面料、皮革与金属的呈现。应从多张图片比较颜色；白平衡可能把米白拍成纯白、黑色拍成藏蓝、银色拍得偏暖。卖家页面可以用来确认所选色号，但不能要求屏幕之间完全一致。重点找明显不符，例如错误配色、不同面板、缺少对比或与订单完全不对应。若颜色是决定因素，应申请中性光线下的清晰图片，并同时比较缝线颜色、五金表面和标签文字等稳定参照。"],
        ["用实测数据判断合身度","尺码标签不等于合身保证。服装可比较胸宽、肩宽、衣长、袖长、腰围和裆长；鞋类的鞋垫长度通常比印刷尺码更有参考价值，但鞋型和鞋头仍会影响穿着。确认卷尺起点、终点和拉直方式，松弛或倾斜的卷尺会产生误导。平铺胸宽通常要乘二才能近似围度，同时还要考虑弹性、内衬和预期版型。测量是更强的证据，但不是绝对预测。"],
        ["优先寻找与运输有关的缺陷","优先关注运输中可能恶化的问题：裂纹、脱落五金、弯折部件、开线、薄弱包装、液体泄漏和被压变形的结构。轻微表面痕迹与结构问题的风险不同。减少包装体积前要判断零售包装是否承担保护作用，鞋、定型包、电子产品和易碎配件往往仍需防护。合包时还要考虑重物对柔软或易碎商品的挤压；加固和隔离应解决明确风险，因为每一层材料也会增加重量或尺寸。"],
        ["正确看待社区图片","社区帖子和其他买家的照片可用于了解常见检查点，但不能证明你仓库里的具体商品。卖家可能更换批次、工厂、材料、规格或页面，同一链接的两次订单也可能不同。把社区内容用于建立检查清单，最终保留或退货决定仍应依据当前商品页、自己的订单记录和自己的仓库照片。测评应说明日期、目的地、卖家链接、重量、原图和是否有激励；缺少背景不代表经历虚假，但限制了结论能否推广。"],
        ["在证据仍有效时作出决定","当前官方退货政策对符合条件的商品给出 QC Completed 后五天、120 小时的申请期限。应尽快查看图片并确认实时订单中仍有退货按钮，把订单信息、照片和沟通记录保存在一起。接受商品要记录理由；不接受时要指出具体不符或缺陷，不要只说“质量不好”。卖家同意、商品资格、退货运费和服务费都可能影响结果，因此清单用于支持账户内的操作，不能替代当前平台规则。"],
        ["保留简洁的 QC 决策记录","一份有效记录只需包含订单号、卖家链接、所选规格、QC 完成时间、图片组、申请的测量和最终决定，再补充接受理由或准确的售后请求。这样可以避免多件商品同时仓储时产生记忆冲突，也方便后续规划包裹和撰写真实测评。公开内容前应遮蔽地址、姓名和订单标识；引用政策时链接当前官方页面并注明核查日期，同时把个人经历与可验证的政策事实明确分开。"],
      ],
      sources:["Joyagoo 官方购物指南","Joyagoo 官方退货政策","Joyagoo 官方增值服务说明"],
    },
    "joyagoo-actual-vs-volumetric-weight": {
      description:"理解实际重量、包裹尺寸、线路除数和包装选择如何共同改变 Joyagoo 国际运费估算。",
      sections:[
        ["商品价格只是第一项成本","表格首先显示商品价格，但国际运费在包裹阶段另行计算。官方说明目的地、可用线路、商品限制、最终打包重量和尺寸都会影响金额。轻但蓬松的外套或带大鞋盒的鞋可能占用很多运输空间。预算应把商品付款、中国国内运费、仓库增值服务和国际运费分开记录，并把每件商品看作未来包裹的一部分，而不是孤立的低价商品。"],
        ["理解最终实际重量","实际重量是包裹完成后放到秤上的物理重量，包括商品、保留的卖家包装、防护材料和外箱。多个卫衣、重鞋或金属配件会很快增加重量，商品页保存的重量可能只是估计并且不含最终包装。接近线路重量上限时应留出余量，因为小幅增加可能进入下一计费档。是否拆盒要根据包装是装饰还是结构保护决定，不能一律删除。"],
        ["理解体积重量","体积重量反映包裹占用的运输空间。Joyagoo 公布的一般公式是厘米长 × 宽 × 高，再按物流商使用 5000、6000、7000 或 8000 的除数计算；除数不是所有线路通用。部分线路会比较实际重量和体积重量并收取较高者，还可能有门槛、取整或国家规则。比如 50 × 40 × 30 厘米为 60000 立方厘米，除以 6000 得 10 千克，这只是数学示例，不是某条线路报价。"],
        ["识别制造体积的商品","原鞋盒、羽绒服、定型手袋、礼盒、电子产品保护包装和易碎物品，会显著增加尺寸而不一定同等增加重量。购买前可把商品标记为高密度、可压缩、定型、易碎或受限，以判断它主要影响实际重量、体积、线路还是保护需求。混合包裹中最硬、最长的商品往往决定最低尺寸，其他软商品可以填充周围空间，却无法缩短它。"],
        ["把拆除包装视为取舍","去除不必要的零售包装可能降低体积，但保护程度必须与商品匹配。普通 T 恤可能只需要干净袋子，鞋和定型包可能变形，电子产品与配饰可能需要缓冲。目标不是绝对最小的箱子，而是在国际运输中仍能保护已确认商品的最小合理包裹。包装指示应具体，例如保留鞋内支撑但移除外层展示套，而不是简单写“拆掉所有盒子”。"],
        ["区分预估与最终计费重量","提交包裹时通常先根据仓储商品和预计包装得到预估计费重量；打包后仓库重新称重并测量。若物流商不调整，仓库数据用于计费；若物流商复核并修改，则物流商数据成为最终依据，发出后可在包裹详情查看。拆包装可能降低重量或尺寸，加固则可能增加。应把初始估算、最终尺寸和物流商调整后的重量放在同一记录中比较。"],
        ["不要只比较线路首价","线路比较应同时包括商品资格、计费方式、时效范围、追踪频率、保险、赔付、重量与尺寸上限以及目的地覆盖。低价线路如果包裹不符合条件或保护不足，就没有实际意义。官方称重表显示，不同线路可能使用不同除数、门槛或实际重量规则；必须阅读账户中当时显示的线路说明。如果某件商品让所有首选线路消失，单独运输可能比强行合包更合理。"],
        ["使用预打包并提交前复核","Joyagoo 当前把预打包列为付费增值服务：仓库先按要求打包所选商品，再更新重量和运费并通知用户。官方页面列出的价格为每个包裹 3 美元，但费用必须实时确认。使用前列出每件商品、仓储重量、包装要求、限制和保留盒子的理由，再以实际重量与体积重量两种情景比较线路。预打包提高发货前证据质量，但不能消除物流复测、海关或运输风险。"],
        ["完成一次包裹计算示例","假设包裹尺寸为 45 × 35 × 25 厘米，实际重量 5.8 千克，体积为 39375 立方厘米。除以 6000 约为 6.56 千克，除以 7000 约为 5.63 千克；若线路按两者较高值计费，前者由体积决定，后者则实际重量略高。这只是数学示例。实际选择必须使用账户中当前线路的除数、门槛和取整规则，并同时比较保护和商品资格。"],
      ],
      sources:["Joyagoo 官方实际重量与体积重量说明","Joyagoo 官方各运输线路称重标准","Joyagoo 官方预打包说明","Joyagoo 官方增值服务说明"],
    },
    "joyagoo-link-verification-guide": {
      description:"通过实时状态、商品身份、规格结构、图片一致性和最终去向，逐项核验 Joyagoo 表格中的每个链接。",
      sections:[
        ["先检查实时页面","卖家删除商品、修改访问设置或替换页面后，保存的链接可能失效。依赖表格行之前先打开最终页面，确认它正常显示商品，而不是错误页、登录墙或无关跳转。仅返回成功状态还不够，页面内容也必须与预期商品一致。重要链接应记录核验日期，失效链接应删除或明确标记；需要账号才能查看、包含推荐跳转或移动端表现不同，都应如实说明。"],
        ["让名称、图片和去向一致","最重要的完整性检查是商品名称、首图和最终页面是否描述同一件商品。鞋类卡片不能因为链接能打开就跳到服装页面。比较明显外观、配色、型号、材质和分类；使用裁切预览时要保留足够识别特征。商品页变化时，预览图和文案必须一起更新，并在内部记录卡片标题、图片来源、最终地址和核验日期。多规格商品应描述为“进入该商品页”，而不是保证照片中的规格永远可用。"],
        ["检查规格选择结构","许多页面同时包含颜色、尺码、版本或不同价格档。卡片展示的好看规格可能并不是最低价对应规格。打开选择器，确认预览对应哪一项、该项目前是否可选以及价格是否不同。规格命名不清时应标记为待核验，不要自行猜测。服装应保留卖家尺码表或引导用户查看，不能把标签转换成没有证据的合身结论；电子产品应记录插头、电压、电池和兼容性。"],
        ["把参考价与应付总额分开","商品页价格不一定包含中国国内运费、增值服务、汇率换算、支付处理、退货运费和国际物流。美元显示有助于浏览，但汇率和实时价格会变化，所以必须标为参考并引导用户到当前详情页确认。Joyagoo 官方流程把商品下单与后续包裹提交、国际运费分开，这说明表格行不能承诺最终总价。高流量价格应注明核验日期，无法维护时宁可删除；使用“起”价时要说明展示规格可能更贵。"],
        ["按来源质量核验图片","应使用与准确目标页面相连的图片，并保持合理比例；模糊缩略图会遮蔽规格差异，不应在无关卡片之间重复同一张分类图。设置图片尺寸可减少布局跳动，非首屏图片可延迟加载。GIF 或 WebP 若是商品页首图，要确认公开环境能加载；失效热链只能用同一商品页的素材替换。替代文字应识别商品而不是堆砌关键词。流程截图应有说明、来源和访问日期，并避免泄露账户信息。"],
        ["把分类当作导航，而不是证明","商品属于正确分类并不代表它与卡片完全匹配。分类帮助缩小选择，但每个商品仍要核对详情页。分类快捷入口应打开对应的实时分类，并诚实描述；若只打开单个商品，就应标为起点。分类页应围绕真实比较问题组织，例如规格结构、合身证据、包装体积、限制和检查点，避免制造只替换关键词的空洞页面，并自然链接到相关 QC 或运输指南。"],
        ["控制所有外部去向","外部指南需要明确的目标策略：商品卡片、搜索、分类和行动按钮只应指向预定商品目录或真实操作流程。更换主目标后要审计隐藏卡片、页脚和脚本，避免仍指向旧域名或无关代理。外链文字应说明去向并保持统一打开方式。事实来源链接与商业商品路径应视觉和语义分开，让读者知道一个用于支持声明，另一个用于继续购物。"],
        ["按计划重新核验","高价值卡片应定期复查，优先处理首页推荐、热门分类和有点击的链接。有效审计记录应包含来源地址、最终地址、响应、商品名、图片匹配、规格状态、价格时间戳和下次复核日；不再匹配时删除或替换。维护少量准确入口比不断增加未核验行更有价值。客户测评还应记录平台、日期、目的地、包裹信息和是否获得激励，并把个人经历与官方规则分开。"],
        ["把链接页面组成有用的主题集群","完整购买指南应先解释整体流程，再链接到 QC、退货时限、仓储、实际与体积重量以及线路比较等专页。分类页可按用户意图连接最相关指南：鞋类连接尺码和鞋盒体积，服装连接实测，电子产品连接兼容性与运输限制。每页回答一个主要问题，为操作性事实引用官方政策，并给出合理下一步。搜索可见度来自持续维护的实用信息和清晰关系，而不是在每句话重复 Joyagoo 或批量制造相似薄页。"],
      ],
      sources:["Joyagoo 官方购物指南","Joyagoo 官方首页"],
    },
  },
};

export type ArticleTopic = "spreadsheet" | "guide" | "qc" | "shipping";

export const articleTopics: Record<ArticleSlug, ArticleTopic> = {
  "joyagoo-how-to-buy-guide":"guide",
  "joyagoo-qc-photo-checklist":"qc",
  "joyagoo-actual-vs-volumetric-weight":"shipping",
  "joyagoo-link-verification-guide":"spreadsheet",
};

export const articleOverviews: Record<Exclude<Locale,"zh">, Record<ArticleTopic,string>> = {
  de:{
    guide:"Der offizielle Ablauf führt vom aktuellen Produktlink über Kauf, Verkäuferversand, Wareneingang und QC bis zu Lagerung und internationalem Paket. Prüfe die Live-Variante vor der Zahlung, beachte für geeignete Artikel das veröffentlichte Rückgabefenster von fünf Tagen beziehungsweise 120 Stunden nach QC Completed und plane mit 90 Tagen kostenloser Artikellagerung sowie 30 Tagen für ein eingereichtes, unbezahltes Paket. Live-Konto und Hilfecenter haben immer Vorrang.",
    qc:"Lagerfotos sind Belege für den tatsächlich eingegangenen Artikel, aber keine Garantie für Passform, Haltbarkeit oder Echtheit. Prüfe Identität, Ansichten, Maße, sichtbare Verarbeitung und versandrelevante Schäden in fester Reihenfolge; fehlende entscheidende Details sollten innerhalb des verfügbaren Aktionsfensters gezielt nachgefragt werden. Für geeignete Artikel nennt die aktuelle Richtlinie fünf Tage beziehungsweise 120 Stunden nach QC Completed.",
    shipping:"Internationale Fracht hängt vom fertigen Paket ab. Vergleiche tatsächliches Gewicht mit Volumengewicht; Joyagoo nennt Länge × Breite × Höhe in Zentimetern geteilt durch 5.000, 6.000, 7.000 oder 8.000, abhängig von Linie und Anbieter. Verpackungsentfernung, Schutz und Rehearsal Packing verändern Maße und Gewicht, deshalb gelten die aktuellen Routendaten und die endgültige Messung.",
    spreadsheet:"Jeder Eintrag muss auf einer aktuell erreichbaren Seite geprüft werden. Name, Vorschaubild, Produktkategorie, gewählte Variante und Zielseite müssen zusammenpassen; Preise in USD bleiben Referenzwerte und schließen spätere Gebühren nicht automatisch ein. Bilder, Kategorien und ausgehende Ziele sind regelmäßig zu kontrollieren, während Quellenlinks für Fakten klar von kommerziellen Produktrouten getrennt bleiben.",
  },
  pl:{
    guide:"Oficjalny proces prowadzi od aktualnego linku produktu przez zakup, wysyłkę sprzedawcy, przyjęcie do magazynu i QC aż do przechowywania oraz paczki międzynarodowej. Przed płatnością sprawdź wariant na żywo; dla kwalifikujących się produktów opublikowane okno zwrotu wynosi pięć dni, czyli 120 godzin od QC Completed. Obecna polityka podaje też 90 dni darmowego przechowywania produktu i 30 dni dla zgłoszonej, nieopłaconej paczki.",
    qc:"Zdjęcia magazynowe są dowodem dotyczącym otrzymanego egzemplarza, ale nie gwarantują dopasowania, trwałości ani autentyczności. W stałej kolejności sprawdź tożsamość, wszystkie widoki, wymiary, widoczne wykonanie i wady ważne w transporcie; brakujące kluczowe ujęcia zgłaszaj w aktualnym oknie działania. Dla uprawnionych produktów polityka opisuje pięć dni, czyli 120 godzin po QC Completed.",
    shipping:"Koszt międzynarodowy zależy od gotowej paczki. Porównaj wagę rzeczywistą z objętościową; Joyagoo podaje wzór długość × szerokość × wysokość w centymetrach, podzielone przez 5000, 6000, 7000 albo 8000 zależnie od linii. Usuwanie opakowań, zabezpieczenia i rehearsal packing zmieniają wagę oraz wymiary, więc decydują bieżące warunki trasy i końcowy pomiar.",
    spreadsheet:"Każdy wiersz trzeba sprawdzić na aktualnie dostępnej stronie. Nazwa, pierwsze zdjęcie, kategoria, wariant i adres docelowy muszą opisywać ten sam produkt; ceny w USD są orientacyjne i nie obejmują automatycznie późniejszych opłat. Obrazy, skróty kategorii i linki wychodzące wymagają regularnego audytu, a źródła faktów powinny być oddzielone od komercyjnych tras produktowych.",
  },
  es:{
    guide:"El proceso oficial va del enlace actual del producto a la compra, el envío del vendedor, la llegada al almacén, el QC, el almacenamiento y el paquete internacional. Confirma la variante en vivo antes de pagar; para artículos elegibles, la política publicada indica cinco días o 120 horas desde QC Completed. También señala 90 días de almacenamiento gratuito por artículo y 30 días para un paquete presentado pero aún no pagado.",
    qc:"Las fotos del almacén son pruebas del artículo recibido, no una garantía de ajuste, durabilidad o autenticidad. Revisa en un orden fijo la identidad, las vistas, las medidas, la fabricación visible y los defectos relevantes para el transporte; solicita imágenes concretas cuando falte una zona decisiva. Para artículos elegibles, la política actual describe cinco días o 120 horas después de QC Completed.",
    shipping:"El transporte internacional depende del paquete terminado. Compara peso real y volumétrico; Joyagoo publica largo × ancho × alto en centímetros dividido por 5000, 6000, 7000 u 8000 según la línea. Retirar embalaje, reforzar y usar rehearsal packing cambia peso y dimensiones, por lo que mandan las condiciones actuales de la ruta y la medición final.",
    spreadsheet:"Cada fila debe comprobarse en una página accesible y actual. Nombre, imagen principal, categoría, variante y destino tienen que corresponder al mismo producto; los importes en USD son referencias y no incluyen automáticamente todos los costes posteriores. Audita imágenes, accesos de categoría y enlaces externos con regularidad, y separa las fuentes editoriales de las rutas comerciales.",
  },
  it:{
    guide:"Il flusso ufficiale parte dal link attuale del prodotto e passa per acquisto, spedizione del venditore, arrivo in magazzino, QC, deposito e pacco internazionale. Verifica la variante dal vivo prima del pagamento; per i prodotti idonei la politica pubblicata indica cinque giorni, cioè 120 ore, da QC Completed. Sono inoltre indicati 90 giorni di deposito gratuito per l'articolo e 30 giorni per un pacco inviato ma non pagato.",
    qc:"Le foto del magazzino sono prove dell'esemplare ricevuto, non una garanzia di vestibilità, durata o autenticità. Controlla con una sequenza fissa identità, viste, misure, lavorazione visibile e difetti rilevanti per il trasporto; richiedi immagini mirate se manca una zona decisiva. Per i prodotti idonei la politica attuale descrive cinque giorni, ossia 120 ore, dopo QC Completed.",
    shipping:"La spedizione internazionale dipende dal pacco finito. Confronta peso reale e volumetrico; Joyagoo pubblica lunghezza × larghezza × altezza in centimetri diviso per 5000, 6000, 7000 o 8000 secondo la linea. Rimozione dell'imballaggio, rinforzo e rehearsal packing cambiano peso e misure, quindi valgono le condizioni attuali della rotta e la misurazione finale.",
    spreadsheet:"Ogni riga deve essere verificata su una pagina attuale e raggiungibile. Nome, prima immagine, categoria, variante e destinazione devono descrivere lo stesso prodotto; i prezzi in USD sono riferimenti e non includono automaticamente i costi successivi. Controlla periodicamente immagini, categorie e link in uscita, separando le fonti dei fatti dalle rotte commerciali.",
  },
  fr:{
    guide:"Le parcours officiel va du lien produit actuel à l'achat, l'expédition vendeur, l'arrivée en entrepôt, le QC, le stockage et le colis international. Vérifiez la variante en direct avant paiement ; pour les articles admissibles, la politique publiée indique cinq jours, soit 120 heures, après QC Completed. Elle mentionne aussi 90 jours de stockage gratuit par article et 30 jours pour un colis soumis mais non payé.",
    qc:"Les photos d'entrepôt constituent des preuves sur l'article reçu, sans garantir taille, durabilité ou authenticité. Vérifiez dans un ordre fixe identité, vues, mesures, fabrication visible et défauts importants pour le transport ; demandez une image ciblée si une zone décisive manque. Pour les articles admissibles, la politique actuelle décrit cinq jours, soit 120 heures, après QC Completed.",
    shipping:"Le transport international dépend du colis terminé. Comparez poids réel et poids volumétrique ; Joyagoo publie longueur × largeur × hauteur en centimètres, divisées par 5 000, 6 000, 7 000 ou 8 000 selon la ligne. Retrait d'emballage, renfort et rehearsal packing modifient poids et dimensions : les conditions de route actuelles et la mesure finale font foi.",
    spreadsheet:"Chaque ligne doit être contrôlée sur une page actuelle et accessible. Nom, première image, catégorie, variante et destination doivent décrire le même produit ; les prix en USD restent indicatifs et n'incluent pas automatiquement tous les frais ultérieurs. Auditez régulièrement images, catégories et liens sortants, et séparez clairement les sources factuelles des routes commerciales.",
  },
  pt:{
    guide:"O processo oficial vai do link atual do produto à compra, envio do vendedor, chegada ao armazém, QC, armazenamento e encomenda internacional. Confirme a variante ao vivo antes de pagar; para artigos elegíveis, a política publicada indica cinco dias ou 120 horas após QC Completed. Também refere 90 dias de armazenamento gratuito por artigo e 30 dias para uma encomenda submetida mas ainda não paga.",
    qc:"As fotos do armazém são provas do artigo recebido, não uma garantia de tamanho, durabilidade ou autenticidade. Verifique numa ordem fixa identidade, vistas, medidas, acabamento visível e defeitos relevantes para transporte; peça imagens específicas se faltar uma área decisiva. Para artigos elegíveis, a política atual descreve cinco dias ou 120 horas depois de QC Completed.",
    shipping:"O transporte internacional depende da encomenda final. Compare peso real e volumétrico; a Joyagoo publica comprimento × largura × altura em centímetros dividido por 5000, 6000, 7000 ou 8000 conforme a linha. Remoção de embalagem, reforço e rehearsal packing alteram peso e dimensões, por isso prevalecem as condições atuais da rota e a medição final.",
    spreadsheet:"Cada linha deve ser confirmada numa página atual e acessível. Nome, primeira imagem, categoria, variante e destino têm de descrever o mesmo produto; preços em USD são referências e não incluem automaticamente custos posteriores. Audite imagens, atalhos de categoria e links externos com regularidade, mantendo fontes factuais separadas das rotas comerciais.",
  },
  ro:{
    guide:"Fluxul oficial pornește de la legătura actuală a produsului și continuă cu achiziția, expedierea vânzătorului, sosirea în depozit, QC, stocarea și coletul internațional. Verifică varianta live înainte de plată; pentru produsele eligibile, politica publicată indică cinci zile sau 120 de ore după QC Completed. Sunt menționate și 90 de zile de stocare gratuită și 30 de zile pentru un colet trimis, dar neplătit.",
    qc:"Fotografiile din depozit sunt dovezi despre articolul primit, nu garanții de potrivire, durabilitate sau autenticitate. Verifică într-o ordine fixă identitatea, toate unghiurile, măsurile, execuția vizibilă și defectele relevante la transport; cere imagini țintite dacă lipsește o zonă decisivă. Pentru produsele eligibile, politica actuală descrie cinci zile sau 120 de ore după QC Completed.",
    shipping:"Transportul internațional depinde de coletul final. Compară greutatea reală cu cea volumetrică; Joyagoo publică lungime × lățime × înălțime în centimetri, împărțite la 5000, 6000, 7000 sau 8000 în funcție de rută. Eliminarea ambalajului, întărirea și rehearsal packing modifică greutatea și dimensiunile, deci contează condițiile curente și măsurarea finală.",
    spreadsheet:"Fiecare rând trebuie verificat pe o pagină actuală și accesibilă. Numele, prima imagine, categoria, varianta și destinația trebuie să descrie același produs; prețurile în USD sunt orientative și nu includ automat toate costurile ulterioare. Verifică periodic imaginile, categoriile și legăturile externe și separă sursele factuale de rutele comerciale.",
  },
  sv:{
    guide:"Det officiella flödet går från den aktuella produktlänken via köp, säljarfrakt, lagerankomst och QC till lagring och internationellt paket. Kontrollera live-varianten före betalning; för kvalificerade varor anger den publicerade policyn fem dagar eller 120 timmar efter QC Completed. Den anger också 90 dagars kostnadsfri varulagring och 30 dagar för ett inskickat men obetalt paket.",
    qc:"Lagerbilder är underlag för den mottagna varan, inte en garanti för passform, hållbarhet eller äkthet. Kontrollera identitet, vyer, mått, synligt utförande och fraktrelaterade fel i en fast ordning; begär en riktad bild om ett avgörande område saknas. För kvalificerade varor beskriver den aktuella policyn fem dagar eller 120 timmar efter QC Completed.",
    shipping:"Internationell frakt beror på det färdiga paketet. Jämför faktisk vikt med volymvikt; Joyagoo publicerar längd × bredd × höjd i centimeter delat med 5000, 6000, 7000 eller 8000 beroende på linje. Borttagning av emballage, förstärkning och rehearsal packing ändrar vikt och mått, så aktuella ruttvillkor och slutlig mätning gäller.",
    spreadsheet:"Varje rad ska kontrolleras på en aktuell och tillgänglig sida. Namn, första bild, kategori, variant och destination måste beskriva samma produkt; USD-priser är referenser och inkluderar inte automatiskt senare kostnader. Granska bilder, kategorilänkar och externa mål regelbundet och håll faktakällor tydligt åtskilda från kommersiella produktvägar.",
  },
};
