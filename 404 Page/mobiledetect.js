var md=new MobileDetect(window.navigator.userAgent),
keys=["iPad","NexusTablet","SamsungTablet","Kindle","SurfaceTablet","HPTablet","AsusTablet",
"BlackBerryTablet","HTCtablet","MotorolaTablet","NookTablet","AcerTablet","ToshibaTablet",
"LGTablet","FujitsuTablet","PrestigioTablet","LenovoTablet","YarvikTablet","MedionTablet",
"ArnovaTablet","IntensoTablet","IRUTablet","MegafonTablet","EbodaTablet","AllViewTablet",
"ArchosTablet","AinolTablet","SonyTablet","CubeTablet","CobyTablet","MIDTablet","SMiTTablet",
"RockChipTablet","FlyTablet","bqTablet","HuaweiTablet","NecTablet","PantechTablet",
"BronchoTablet","VersusTablet","ZyncTablet","PositivoTablet","NabiTablet","KoboTablet",
"DanewTablet","TexetTablet","PlaystationTablet","TrekstorTablet","PyleAudioTablet",
"AdvanTablet","DanyTechTablet","GalapadTablet","MicromaxTablet","KarbonnTablet","AllFineTablet",
"PROSCANTablet","YONESTablet","ChangJiaTablet","GUTablet","PointOfViewTablet","OvermaxTablet",
"HCLTablet","DPSTablet","VistureTablet","CrestaTablet","MediatekTablet","ConcordeTablet",
"GoCleverTablet","ModecomTablet","VoninoTablet","ECSTablet","StorexTablet","VodafoneTablet",
"EssentielBTablet","RossMoorTablet","iMobileTablet","TolinoTablet","AudioSonicTablet","AMPETablet"
,"SkkTablet","TecnoTablet","JXDTablet","iJoyTablet","Hudl","TelstraTablet","GenericTablet","iPhone",
"BlackBerry","HTC","Nexus","Dell","Motorola","Samsung","LG","Sony","Asus","Micromax","Palm","Vertu",
"Pantech","Fly","iMobile","SimValley","GenericPhone","AndroidOS","BlackBerryOS","PalmOS","SymbianOS",
"WindowsMobileOS","WindowsPhoneOS","iOS","MeeGoOS","MaemoOS","JavaOS","webOS","badaOS","BREWOS",
"Chrome","Dolfin","Opera","Skyfire","IE","Firefox","Bolt","TeaShark","Blazer","Safari","Tizen",
"UCBrowser","DiigoBrowser","Puffin","Mercury","GenericBrowser","DesktopMode","TV","WebKit","Bot",
"MobileBot","Console","Watch"],versionKeys=["Mobile","Build","Version","VendorID","iPad","iPhone",
"iPod","Kindle","Chrome","Coast","Dolfin","Firefox","Fennec","IE","NetFront","NokiaBrowser","Opera"
,"Opera Mini","Opera Mobi","UC Browser","MQQBrowser","MicroMessenger","Safari","Skyfire","Tizen",
"Webkit","Gecko","Trident","Presto","iOS","Android","BlackBerry","BREW","Java","Windows Phone OS",
"Windows Phone","Windows CE","Windows NT","Symbian","webOS"],
content=$(".content"),legend=$(".legend");if(md.mobile())$(".mobile .value").html(md.mobile()),
content.show(),legend.show();else{var alert=$(".desktop-alert");alert.select(".button").on("click",
function(a){a.preventDefault(),alert.hide(),content.show(),
legend.show()}),alert.show()}md.phone()&&$(".phone .value").html(md.phone()),md.tablet()&&$
(".tablet .value").html(md.tablet()),md.mobileGrade()&&$(".mobile-grade .value").html(md.mobileGrade()),md.os()&&$(".os .value").html(md.os()),md.userAgent()&&$(".user-agent .value").html(md.userAgent());var result;$.each(keys,function(a,b){result=md.is(b),
result&&$("#keys").append($('<div><span class="function">is</span>(<span class="string">\''+b+'\'</span>)<span class="less equal">=</span><span class="value boolean">'+result+"</span></div>"))}),$.each(versionKeys,function(a,b){result=md.version(b),result?$("#versions").append($('<div><span class="function">version</span>
(<span class="string">\''+b+'\'</span>)<span class="less equal">=</span><span class="value number">'+result+"</span></div>")):(result=md.versionStr(b),result&&$("#versions").append($('<div><span class="function">versionStr</span>(<span class="string">\''+b+'\'</span>)
<span class="less equal">=</span><span class="value">'+result+"</span></div>")))});