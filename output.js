//1747289973216
const iiI1I = new I111Il("联通彩铃抽奖"),
  ilIII = 1,
  IiII1I = 0,
  {
    v4: IIl1I1
  } = require("uuid"),
  IIi111 = IIl1I1();
let Ii11II = process.env.chinaUnicomCookie,
  iiI11 = "",
  lIlIli = "";
ckArr = Ii11II.split("&");
I1II11("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = Ii11II.split("&");
  await liIiiI();
  for (let iiilI = 0; iiilI < ckArr.length; iiilI++) {
    let lli1lI = iiilI + 1;
    console.log("------------- 开始【第 " + lli1lI + " 个账号】-------------");
    lIlIli = ckArr[iiilI].split("&");
    I1II11("【debug】 这是你第 " + lli1lI + " 账号信息:\n " + lIlIli);
    await I1II1I();
    await iiI1I.wait(1 * 2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = lIl11();
    const Ii1liI = require("axios");
    let liIilI = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?to_url=https://huodong.10155.com/h5/hdact5/ringChannel/",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + IIi111 + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + IIi111 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await Ii1liI.request(liIilI).catch(Ii1li1 => {
      wenb = Ii1li1.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    await iiI1I.wait(1 * 2000);
    console.log("" + num1 + "开始任务，非联通账号无法抽奖，懒得写跳过了");
    await iiI1I.wait(1 * 1000);
    await ilII1();
    await lIlIll();
    for (let iiil1 = hj; iiil1 < 2 - likeVideo; iiil1++) {
      recordId = "7" + hj + "655" + hj + hj + hj + "2" + hj + "25" + hj + "2117" + hj + "3979" + (iiil1 + likeVideo);
      await IiII11();
      await iiI1I.wait(1 * 1000);
    }
    for (let liIil1 = hj; liIil1 < 5 - completedVideo; liIil1++) {
      recordId = "7" + hj + "655" + hj + hj + hj + "2" + hj + "25" + hj + "2117" + hj + "3979" + (liIil1 + completedVideo);
      await I11liI();
      await iiI1I.wait(1 * 1000);
    }
    await ilIilI();
    await iiI1I.wait(1 * 1000);
    await iIlIl1();
    await iiI1I.wait(1 * 1000);
    await l111I1();
    await iiI1I.wait(1 * 1000);
    for (let ilII1I = hj; ilII1I < lotteryTime; ilII1I++) {
      await lli1iI();
      await iiI1I.wait(1 * 1000);
    }
  }
  await IIllii(iiI11);
})().catch(iiIlI1 => iiI1I.logErr(iiIlI1)).finally(() => iiI1I.done());
async function ilII1() {
  let lii1l = {
      "url": "https://huodong.10155.com/wo_activity/activity/t-biz-login/appLogin?ticket=" + ticket + "&activityId=1247&channelId=51f0338ae56265bf536b2dd7683f5ff7",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "pplication/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.10155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "pplication/x-www-form-urlencoded, text/plain, */*"
      },
      "body": "{}"
    },
    lii1i = await Il1l1i(lii1l, "ll");
  try {
    accessToken = lii1i.result.accessToken;
    console.log(accessToken);
  } catch (IIiIi1) {}
}
async function lIlIll() {
  let iiiii = {
      "url": "https://huodong.10155.com/wo_activity/aiAvatar/t-biz-ai-user-integral/getUserLotteryIntegral",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "pplication/x-www-form-urlencoded",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5." + hj + " (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.1" + hj + "155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "pplication/x-www-form-urlencoded, text/plain, */*"
      },
      "body": ""
    },
    iiiil = await Il1l1i(iiiii, "ll");
  try {
    likeVideo = iiiil.result.likeVideo;
    console.log("点赞视频任务" + likeVideo + "/2");
    completedVideo = iiiil.result.completedVideo;
    console.log("观看视频任务" + completedVideo + "/5");
    setRing = iiiil.result.setRing;
    console.log("设置彩铃任务" + setRing + "/1");
    share = iiiil.result.share;
    console.log("分享视频任务" + share + "/1暂时无法完成");
    lotteryTime = iiiil.result.lotteryTime;
  } catch (IIiIiI) {}
}
async function l111I1() {
  let ll1i = {
      "url": "https://huodong.10155.com/wo_activity/aiAvatar/t-biz-ai-user-integral/getUserLotteryIntegral",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "pplication/x-www-form-urlencoded",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5." + hj + " (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.10155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=" + hj + ".9",
        "Accept": "pplication/x-www-form-urlencoded, text/plain, */*"
      },
      "body": ""
    },
    lliII = await Il1l1i(ll1i, "ll");
  try {
    likeVideo = lliII.result.likeVideo;
    completedVideo = lliII.result.completedVideo;
    setRing = lliII.result.setRing;
    share = lliII.result.share;
    lotteryTime = lliII.result.lotteryTime;
    console.log("抽奖次数" + lotteryTime + "/10分享无法完成目前只能到9次");
  } catch (I1ii) {}
}
async function IiII11() {
  let I1Iiil = {
      "url": "https://huodong.10155.com/wo_activity/aiAvatar/integralRecord/addBrushingHistoryRecord",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.1" + hj + "155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "recordId=" + recordId + "&type=5"
    },
    I1Iiii = await Il1l1i(I1Iiil, "ll");
  try {
    console.log("点赞视频任务" + I1Iiii.result.isLottery);
  } catch (iIIi1) {}
}
async function I11liI() {
  let iIiIIi = {
      "url": "https://huodong.10155.com/wo_activity/aiAvatar/integralRecord/addBrushingHistoryRecord",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://huodong.1" + hj + "155.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.02" + hj + "0}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.1" + hj + "155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "recordId=" + recordId + "&type=2"
    },
    IlIill = await Il1l1i(iIiIIi, "ll");
  try {
    console.log("观看视频任务" + IlIill.result.isLottery);
  } catch (I1IiiI) {}
}
async function ilIilI() {
  let lIIli1 = {
      "url": "https://huodong.10155.com/wo_activity/activity/ring/brushingVideoSetMon",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.1" + hj + "155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "ringId=945150" + hj + "02" + hj + "240729522125" + hj + "&callType=1"
    },
    iIl11i = await Il1l1i(lIIli1, "ll");
  try {
    console.log("设置彩铃任务" + iIl11i.result.isLottery);
  } catch (iIiII1) {}
}
async function iIlIl1() {
  let Il11I1 = {
      "url": "https://huodong.10155.com/wo_activity/aiAvatar/integralRecord/shareBrushing",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.10155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "invitationCode=pqmet221&workId=945150002024" + hj + "7295221250"
    },
    i11liI = await Il1l1i(Il11I1, "ll");
  try {
    console.log("分享视频任务" + i11liI.result.isLottery);
  } catch (I1li) {}
}
async function lli1iI() {
  let iI11l = {
      "url": "https://huodong.10155.com/wo_activity/activity/t-biz-lottery-draw-prize/generalLotteryProduct",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://huodong.10155.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "Host": "huodong.10155.com",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": ""
    },
    IlIiiI = await Il1l1i(iI11l, "抽奖");
  try {
    console.log("抽奖获得" + IlIiiI.result.name);
  } catch (I1ll) {}
}
async function I1II1I() {
  let ll1iil = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0700}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + lIlIli + "&version=iphone_c%4011.0700"
    },
    lIIlli = await Il1l1i(ll1iil, "获取");
  try {
    t3_token = lIIlli.t3_token;
    private_token = lIIlli.private_token;
    ecs_token = lIIlli.ecs_token;
    num1 = lIIlli.list[0].num;
    cityCode = lIIlli.list[0].cityCode;
  } catch (IiI11l) {
    num1 = "1";
  }
}
async function iI1I() {
  let IiI11i = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    iIil1l = await IIlll1(IiI11i, "获取网络时间");
  try {
    shijian = iIil1l.data.t;
  } catch (I1Iil1) {}
}
async function liIiiI() {
  let iIllI1 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    lli11 = await IIlll1(iIllI1, "ll");
  hqsjc = lli11.ymsjc;
  gong = lli11.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("公告：" + lli11.gh), console.log("当前版本1.2，最新版本" + lli11.fwbbh), hj = lli11.fwbbh - 1.2, console.log("当前脚本有效期至" + liIii1(hqsjc));else {
    console.error(gong);
    process.exit();
  }
}
async function l11Iii(I1iiI, l111l1) {
  return new Promise(il1lii => {
    let llilii = [];
    if (I1iiI) {
      if (I1iiI.indexOf("@") !== -1) I1iiI.split("@").forEach(lll1li => {
        llilii.push(lll1li);
      });else {
        if (I1iiI.indexOf("\n") !== -1) {
          I1iiI.split("\n").forEach(Il1ll => {
            llilii.push(Il1ll);
          });
        } else llilii.push(I1iiI);
      }
      il1lii(llilii);
    } else {
      console.log("\n 【" + iiI1I.name + "】：未填写变量 " + l111l1);
    }
  });
}
async function IIllii(il1lll) {
  if (!il1lll) return;
  if (ilIII > 0) {
    if (iiI1I.isNode()) {
      let i1Il1l = require("./sendNotify");
      await i1Il1l.sendNotify(iiI1I.name, il1lll);
    } else iiI1I.msg(il1lll);
  } else console.log(il1lll);
}
function IIllil(IIi1I1) {
  IIi1I1 = IIi1I1 || 32;
  let i111II = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    I11Il1 = i111II.length,
    IiIIl1 = "";
  for (i = 0; i < IIi1I1; i++) IiIIl1 += i111II.charAt(Math.floor(Math.random() * I11Il1));
  return IiIIl1;
}
let Il1l1I = "";
function lIII(IiIIil) {
  Il1l1I = IiIIil;
}
function iI11(iilill) {
  if (Il1l1I === iilill) console.log("Reached mark " + iilill);else {
    console.log("Invalid mark: " + iilill);
  }
}
function liIii1(l1IIIl) {
  var iiiii1 = new Date(l1IIIl * 1000);
  var IiliII = iiiii1.getFullYear();
  var iIII = String(iiiii1.getMonth() + 1).padStart(2, "0");
  var IIill1 = String(iiiii1.getDate()).padStart(2, "0");
  var Iiii1I = String(iiiii1.getHours()).padStart(2, "0");
  var iI1I1 = String(iiiii1.getMinutes()).padStart(2, "0");
  var Ii11iI = String(iiiii1.getSeconds()).padStart(2, "0");
  var llllli = IiliII + "-" + iIII + "-" + IIill1 + " " + Iiii1I + ":" + iI1I1 + ":" + Ii11iI;
  return llllli;
}
function Iili11(iiIllI, iII1l1) {
  return Math.round(Math.random() * (iII1l1 - iiIllI) + iiIllI);
}
function I111II() {
  const IiliIi = new Date(),
    Iiii1i = IiliIi.getHours(),
    iiIlll = new Date(IiliIi.getFullYear(), IiliIi.getMonth(), IiliIi.getDate(), Iiii1i + 1, 0, 0, 0);
  return iiIlll.getTime();
}
function lII1() {
  const iII1lI = new Date(),
    lIll1i = iII1lI.getMinutes(),
    iiIlli = new Date(iII1lI.getFullYear(), iII1lI.getMonth(), iII1lI.getDate(), iII1lI.getHours(), lIll1i === 0 ? 1 : lIll1i + 1, 0, 0);
  if (iiIlli.getMinutes() === 0 && iiIlli.getHours() !== iII1lI.getHours()) {
    iiIlli.setDate(iII1lI.getDate() + (iiIlli.getHours() === 0 ? 1 : 0));
  }
  return iiIlli.getTime();
}
function iIlIlI() {
  return Math.round(new Date().getTime()).toString();
}
function lIl11() {
  const IIl1lI = new Date(),
    ilii1i = String(IIl1lI.getFullYear()).padStart(4, "0"),
    IiliIl = String(IIl1lI.getMonth() + 1).padStart(2, "0"),
    ilii1l = String(IIl1lI.getDate()).padStart(2, "0"),
    llllii = String(IIl1lI.getHours()).padStart(2, "0"),
    l11l = String(IIl1lI.getMinutes()).padStart(2, "0"),
    illiII = String(IIl1lI.getSeconds()).slice(0, 2);
  return ilii1i + IiliIl + ilii1l + llllii + l11l + illiII;
}
function ilIili() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function ilIill() {
  let IiIl1i = new Date();
  return h = IiIl1i.getHours(), h;
}
function Il1l1l() {
  let IIl1li = new Date();
  return m = IIl1li.getMinutes(), m;
}
function iIlIil(l11i = 3 * 1000) {
  return new Promise(lIlIII => {
    let il1I = {
      "url": "https://keai.icu/apiwyy/api"
    };
    iiI1I.get(il1I, async (IIili1, Ii11li, il11) => {
      try {
        il11 = JSON.parse(il11);
        console.log("\n 【网抑云时间】: " + il11.content + "  by--" + il11.music);
      } catch (lIiiI) {
        iiI1I.logErr(lIiiI, Ii11li);
      } finally {
        lIlIII();
      }
    }, l11i);
  });
}
async function IIlll1(lIlIIi, lIiI1l, llI1 = 3 * 1000) {
  return new Promise(iII1li => {
    let li1l1i = lIlIIi;
    if (!lIiI1l) {
      let lIiil = arguments.callee.toString(),
        iII1ll = /function\s*(\w*)/i,
        I1111i = iII1ll.exec(lIiil);
      lIiI1l = I1111i[1];
    }
    if (IiII1I) {
      console.log("\n 【debug】=============== 这是 " + lIiI1l + " 请求 url ===============");
      console.log(li1l1i);
    }
    iiI1I.get(li1l1i, async (iiiill, IIl1iI, Ii11ii) => {
      try {
        IiII1I && (console.log("\n\n 【debug】===============这是 " + lIiI1l + " 返回data=============="), console.log(Ii11ii), console.log("======"), console.log(JSON.parse(Ii11ii)));
        let llIl = JSON.parse(Ii11ii);
        iII1li(llIl);
      } catch (l111iI) {
        console.log(iiiill, IIl1iI);
      } finally {
        iII1li();
      }
    }, llI1);
  });
}
async function Il1l1i(ilii1, I11lI1, li1l1I = 2 * 100) {
  return new Promise(lII1ll => {
    let lIi1 = ilii1;
    if (!I11lI1) {
      let iIiI1l = arguments.callee.toString(),
        iIiI1i = /function\s*(\w*)/i,
        lIili = iIiI1i.exec(iIiI1l);
      I11lI1 = lIili[1];
    }
    IiII1I && (console.log("\n 【debug】=============== 这是 " + I11lI1 + " 请求 url ==============="), console.log(lIi1));
    iiI1I.post(lIi1, async (II1I1I, iIlIIi, ilIl1i) => {
      try {
        IiII1I && (console.log("\n\n 【debug】===============这是 " + I11lI1 + " 返回data=============="), console.log(ilIl1i), console.log("======"), console.log(JSON.parse(ilIl1i)));
        let iIlII1 = JSON.parse(ilIl1i);
        lII1ll(iIlII1);
      } catch (ilIIIl) {} finally {
        lII1ll();
      }
    }, li1l1I);
  });
}
function I1II11(...iil) {
  IiII1I && console.log(...iil);
}
function iI1(lII1I) {
  function iiIlil(ii1IiI, illl1) {
    return ii1IiI << illl1 | ii1IiI >>> 32 - illl1;
  }
  function il11il(lII1Ii, lII1Il) {
    var I11lI, l1ilil, l1l1ll, l1ilii, l1l1li;
    return l1l1ll = 2147483648 & lII1Ii, l1ilii = 2147483648 & lII1Il, I11lI = 1073741824 & lII1Ii, l1ilil = 1073741824 & lII1Il, l1l1li = (1073741823 & lII1Ii) + (1073741823 & lII1Il), I11lI & l1ilil ? 2147483648 ^ l1l1li ^ l1l1ll ^ l1ilii : I11lI | l1ilil ? 1073741824 & l1l1li ? 3221225472 ^ l1l1li ^ l1l1ll ^ l1ilii : 1073741824 ^ l1l1li ^ l1l1ll ^ l1ilii : l1l1li ^ l1l1ll ^ l1ilii;
  }
  function iiIlii(i1I1li, l11ilI, ii1Iil) {
    return i1I1li & l11ilI | ~i1I1li & ii1Iil;
  }
  function II1I11(Iii1l, IliIi, i1I1ll) {
    return Iii1l & i1I1ll | IliIi & ~i1I1ll;
  }
  function il11ii(illii, ii1Iii, Iii1i) {
    return illii ^ ii1Iii ^ Iii1i;
  }
  function Il1Il1(l11ill, iIi1iI, l1illi) {
    return iIi1iI ^ (l11ill | ~l1illi);
  }
  function iIll1I(l11, llIII, l11ili, iiIll, illiI, ii1Il1, lIlI11) {
    return l11 = il11il(l11, il11il(il11il(iiIlii(llIII, l11ili, iiIll), illiI), lIlI11)), il11il(iiIlil(l11, ii1Il1), llIII);
  }
  function iIIiI(l1I, li1I1i, l1illI, illi1, I1i1i1, liI11, lIlI1I) {
    return l1I = il11il(l1I, il11il(il11il(II1I11(li1I1i, l1illI, illi1), I1i1i1), lIlI1I)), il11il(iiIlil(l1I, liI11), li1I1i);
  }
  function Il1Ill(llII1, II1l1l, li1I1l, II1l1i, iiIlI, ii1IlI, i1I1) {
    return llII1 = il11il(llII1, il11il(il11il(il11ii(II1l1l, li1I1l, II1l1i), iiIlI), i1I1)), il11il(iiIlil(llII1, ii1IlI), II1l1l);
  }
  function Ii1il(I1Ii1l, l1i, l1l, I1Ii1i, iIIi1i, iIIi1l, lIlI1i) {
    return I1Ii1l = il11il(I1Ii1l, il11il(il11il(Il1Il1(l1i, l1l, I1Ii1i), iIIi1i), lIlI1i)), il11il(iiIlil(I1Ii1l, iIIi1l), l1i);
  }
  function Il1Ili(IIIiI1) {
    for (var ii1Ill, iiIl1 = IIIiI1.length, lIlI1l = iiIl1 + 8, ii1Ili = (lIlI1l - lIlI1l % 64) / 64, liI1l = 16 * (ii1Ili + 1), liI1i = new Array(liI1l - 1), I1Ii1I = 0, llIIl = 0; iiIl1 > llIIl;) ii1Ill = (llIIl - llIIl % 4) / 4, I1Ii1I = llIIl % 4 * 8, liI1i[ii1Ill] = liI1i[ii1Ill] | IIIiI1.charCodeAt(llIIl) << I1Ii1I, llIIl++;
    return ii1Ill = (llIIl - llIIl % 4) / 4, I1Ii1I = llIIl % 4 * 8, liI1i[ii1Ill] = liI1i[ii1Ill] | 128 << I1Ii1I, liI1i[liI1l - 2] = iiIl1 << 3, liI1i[liI1l - 1] = iiIl1 >>> 29, liI1i;
  }
  function Ii1ii(llIIi) {
    var IiI1Il,
      iiIii,
      IiI1Ii = "",
      iiIil = "";
    for (iiIii = 0; 3 >= iiIii; iiIii++) IiI1Il = llIIi >>> 8 * iiIii & 255, iiIil = "0" + IiI1Il.toString(16), IiI1Ii += iiIil.substr(iiIil.length - 2, 2);
    return IiI1Ii;
  }
  function lli1II(l1111I) {
    l1111I = l1111I.replace(/\r\n/g, "\n");
    for (var llill = "", iI1I11 = 0; iI1I11 < l1111I.length; iI1I11++) {
      var l11111 = l1111I.charCodeAt(iI1I11);
      128 > l11111 ? llill += String.fromCharCode(l11111) : l11111 > 127 && 2048 > l11111 ? (llill += String.fromCharCode(l11111 >> 6 | 192), llill += String.fromCharCode(63 & l11111 | 128)) : (llill += String.fromCharCode(l11111 >> 12 | 224), llill += String.fromCharCode(l11111 >> 6 & 63 | 128), llill += String.fromCharCode(63 & l11111 | 128));
    }
    return llill;
  }
  var iiiI1,
    lII1i,
    lII1l,
    i11lll,
    il11iI,
    i11lli,
    iiIll1,
    lll1I,
    IIIi1i,
    IIIi1l = [],
    l1i1ll = 7,
    l1i1li = 12,
    IlIl1l = 17,
    Ili1I = 22,
    I1IiII = 5,
    Ili11 = 9,
    iiIiI = 14,
    lIIlI1 = 20,
    ilill1 = 4,
    iIIiI1 = 11,
    IIIi1I = 16,
    l1i1lI = 23,
    I11 = 6,
    lll11 = 10,
    il1iil = 15,
    iiIi1 = 21;
  for (lII1I = lli1II(lII1I), IIIi1l = Il1Ili(lII1I), i11lli = 1732584193, iiIll1 = 4023233417, lll1I = 2562383102, IIIi1i = 271733878, iiiI1 = 0; iiiI1 < IIIi1l.length; iiiI1 += 16) lII1i = i11lli, lII1l = iiIll1, i11lll = lll1I, il11iI = IIIi1i, i11lli = iIll1I(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 0], l1i1ll, 3614090360), IIIi1i = iIll1I(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 1], l1i1li, 3905402710), lll1I = iIll1I(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 2], IlIl1l, 606105819), iiIll1 = iIll1I(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 3], Ili1I, 3250441966), i11lli = iIll1I(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 4], l1i1ll, 4118548399), IIIi1i = iIll1I(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 5], l1i1li, 1200080426), lll1I = iIll1I(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 6], IlIl1l, 2821735955), iiIll1 = iIll1I(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 7], Ili1I, 4249261313), i11lli = iIll1I(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 8], l1i1ll, 1770035416), IIIi1i = iIll1I(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 9], l1i1li, 2336552879), lll1I = iIll1I(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 10], IlIl1l, 4294925233), iiIll1 = iIll1I(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 11], Ili1I, 2304563134), i11lli = iIll1I(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 12], l1i1ll, 1804603682), IIIi1i = iIll1I(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 13], l1i1li, 4254626195), lll1I = iIll1I(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 14], IlIl1l, 2792965006), iiIll1 = iIll1I(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 15], Ili1I, 1236535329), i11lli = iIIiI(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 1], I1IiII, 4129170786), IIIi1i = iIIiI(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 6], Ili11, 3225465664), lll1I = iIIiI(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 11], iiIiI, 643717713), iiIll1 = iIIiI(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 0], lIIlI1, 3921069994), i11lli = iIIiI(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 5], I1IiII, 3593408605), IIIi1i = iIIiI(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 10], Ili11, 38016083), lll1I = iIIiI(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 15], iiIiI, 3634488961), iiIll1 = iIIiI(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 4], lIIlI1, 3889429448), i11lli = iIIiI(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 9], I1IiII, 568446438), IIIi1i = iIIiI(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 14], Ili11, 3275163606), lll1I = iIIiI(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 3], iiIiI, 4107603335), iiIll1 = iIIiI(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 8], lIIlI1, 1163531501), i11lli = iIIiI(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 13], I1IiII, 2850285829), IIIi1i = iIIiI(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 2], Ili11, 4243563512), lll1I = iIIiI(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 7], iiIiI, 1735328473), iiIll1 = iIIiI(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 12], lIIlI1, 2368359562), i11lli = Il1Ill(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 5], ilill1, 4294588738), IIIi1i = Il1Ill(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 8], iIIiI1, 2272392833), lll1I = Il1Ill(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 11], IIIi1I, 1839030562), iiIll1 = Il1Ill(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 14], l1i1lI, 4259657740), i11lli = Il1Ill(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 1], ilill1, 2763975236), IIIi1i = Il1Ill(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 4], iIIiI1, 1272893353), lll1I = Il1Ill(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 7], IIIi1I, 4139469664), iiIll1 = Il1Ill(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 10], l1i1lI, 3200236656), i11lli = Il1Ill(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 13], ilill1, 681279174), IIIi1i = Il1Ill(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 0], iIIiI1, 3936430074), lll1I = Il1Ill(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 3], IIIi1I, 3572445317), iiIll1 = Il1Ill(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 6], l1i1lI, 76029189), i11lli = Il1Ill(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 9], ilill1, 3654602809), IIIi1i = Il1Ill(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 12], iIIiI1, 3873151461), lll1I = Il1Ill(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 15], IIIi1I, 530742520), iiIll1 = Il1Ill(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 2], l1i1lI, 3299628645), i11lli = Ii1il(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 0], I11, 4096336452), IIIi1i = Ii1il(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 7], lll11, 1126891415), lll1I = Ii1il(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 14], il1iil, 2878612391), iiIll1 = Ii1il(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 5], iiIi1, 4237533241), i11lli = Ii1il(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 12], I11, 1700485571), IIIi1i = Ii1il(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 3], lll11, 2399980690), lll1I = Ii1il(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 10], il1iil, 4293915773), iiIll1 = Ii1il(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 1], iiIi1, 2240044497), i11lli = Ii1il(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 8], I11, 1873313359), IIIi1i = Ii1il(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 15], lll11, 4264355552), lll1I = Ii1il(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 6], il1iil, 2734768916), iiIll1 = Ii1il(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 13], iiIi1, 1309151649), i11lli = Ii1il(i11lli, iiIll1, lll1I, IIIi1i, IIIi1l[iiiI1 + 4], I11, 4149444226), IIIi1i = Ii1il(IIIi1i, i11lli, iiIll1, lll1I, IIIi1l[iiiI1 + 11], lll11, 3174756917), lll1I = Ii1il(lll1I, IIIi1i, i11lli, iiIll1, IIIi1l[iiiI1 + 2], il1iil, 718787259), iiIll1 = Ii1il(iiIll1, lll1I, IIIi1i, i11lli, IIIi1l[iiiI1 + 9], iiIi1, 3951481745), i11lli = il11il(i11lli, lII1i), iiIll1 = il11il(iiIll1, lII1l), lll1I = il11il(lll1I, i11lll), IIIi1i = il11il(IIIi1i, il11iI);
  var il1iii = Ii1ii(i11lli) + Ii1ii(iiIll1) + Ii1ii(lll1I) + Ii1ii(IIIi1i);
  return il1iii.toLowerCase();
}
function I111Il(I1111, i1Ii) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class llilI {
    constructor(iiII11) {
      this.env = iiII11;
    }
    ["send"](IlI1I1, lIIII1 = "GET") {
      IlI1I1 = "string" == typeof IlI1I1 ? {
        "url": IlI1I1
      } : IlI1I1;
      let lI11i1 = this.get;
      return "POST" === lIIII1 && (lI11i1 = this.post), new Promise((Ii1i1l, iI1li) => {
        lI11i1.call(this, IlI1I1, (ii11Ii, iiII1l, iiII1i) => {
          ii11Ii ? iI1li(ii11Ii) : Ii1i1l(iiII1l);
        });
      });
    }
    ["get"](iI1ill) {
      return this.send.call(this.env, iI1ill);
    }
    ["post"](Illiil) {
      return this.send.call(this.env, Illiil, "POST");
    }
  }
  return new class {
    constructor(Illiii, iI1ll) {
      this.name = Illiii;
      this.http = new llilI(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, iI1ll);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](iI1ili, I1Ill = null) {
      try {
        return JSON.parse(iI1ili);
      } catch {
        return I1Ill;
      }
    }
    ["toStr"](l1li, l1ll = null) {
      try {
        return JSON.stringify(l1li);
      } catch {
        return l1ll;
      }
    }
    ["getjson"](IlliiI, ilil) {
      let I11ill = ilil;
      const I1illI = this.getdata(IlliiI);
      if (I1illI) try {
        I11ill = JSON.parse(this.getdata(IlliiI));
      } catch {}
      return I11ill;
    }
    ["setjson"](IiiII1, lIli1) {
      try {
        return this.setdata(JSON.stringify(IiiII1), lIli1);
      } catch {
        return !1;
      }
    }
    ["getScript"](lIIl1l) {
      return new Promise(lIIl1i => {
        this.get({
          "url": lIIl1l
        }, (lll111, iIill1, Illili) => lIIl1i(Illili));
      });
    }
    ["runScript"](il1III, II1111) {
      return new Promise(lll11I => {
        let iI1il1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        iI1il1 = iI1il1 ? iI1il1.replace(/\n/g, "").trim() : iI1il1;
        let il1II1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        il1II1 = il1II1 ? 1 * il1II1 : 20;
        il1II1 = II1111 && II1111.timeout ? II1111.timeout : il1II1;
        const [II111I, IIii1] = iI1il1.split("@"),
          I11iii = {
            "url": "http://" + IIii1 + "/v1/scripting/evaluate",
            "body": {
              "script_text": il1III,
              "mock_type": "cron",
              "timeout": il1II1
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(I11iii, (iI1l1, I11iil, I11ilI) => lll11I(I11ilI));
      }).catch(iIilii => this.logErr(iIilii));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const Iil111 = this.path.resolve(this.dataFile),
          illI = this.path.resolve(process.cwd(), this.dataFile),
          lIIl11 = this.fs.existsSync(Iil111),
          Illil1 = !lIIl11 && this.fs.existsSync(illI);
        if (!lIIl11 && !Illil1) return {};
        {
          const Iil11I = lIIl11 ? Iil111 : illI;
          try {
            return JSON.parse(this.fs.readFileSync(Iil11I));
          } catch (iI1ii) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const l1IiII = this.path.resolve(this.dataFile),
          lil1Ii = this.path.resolve(process.cwd(), this.dataFile),
          IIiil = this.fs.existsSync(l1IiII),
          IIiii = !IIiil && this.fs.existsSync(lil1Ii),
          IiiI1l = JSON.stringify(this.data);
        IIiil ? this.fs.writeFileSync(l1IiII, IiiI1l) : IIiii ? this.fs.writeFileSync(lil1Ii, IiiI1l) : this.fs.writeFileSync(l1IiII, IiiI1l);
      }
    }
    ["lodash_get"](IiiI1i, IilIIi, II1IlI) {
      const lI11lI = IilIIi.replace(/\[(\d+)\]/g, ".$1").split(".");
      let IIilI = IiiI1i;
      for (const I1i1Ii of lI11lI) if (IIilI = Object(IIilI)[I1i1Ii], void 0 === IIilI) return II1IlI;
      return IIilI;
    }
    ["lodash_set"](lii111, I1i1Il, lI11il) {
      return Object(lii111) !== lii111 ? lii111 : (Array.isArray(I1i1Il) || (I1i1Il = I1i1Il.toString().match(/[^.[\]]+/g) || []), I1i1Il.slice(0, -1).reduce((iIi1Il, iIi1Ii, IlI111) => Object(iIi1Il[iIi1Ii]) === iIi1Il[iIi1Ii] ? iIi1Il[iIi1Ii] : iIi1Il[iIi1Ii] = Math.abs(I1i1Il[IlI111 + 1]) >> 0 == +I1i1Il[IlI111 + 1] ? [] : {}, lii111)[I1i1Il[I1i1Il.length - 1]] = lI11il, lii111);
    }
    ["getdata"](lil1I1) {
      let lliill = this.getval(lil1I1);
      if (/^@/.test(lil1I1)) {
        const [, i1liii, i1liil] = /^@(.*?)\.(.*?)$/.exec(lil1I1),
          lii11I = i1liii ? this.getval(i1liii) : "";
        if (lii11I) try {
          const iiIII1 = JSON.parse(lii11I);
          lliill = iiIII1 ? this.lodash_get(iiIII1, i1liil, "") : lliill;
        } catch (li1iII) {
          lliill = "";
        }
      }
      return lliill;
    }
    ["setdata"](lIIi1, I1i1II) {
      let l1IiIi = false;
      if (/^@/.test(I1i1II)) {
        const [, lil1II, l1IiIl] = /^@(.*?)\.(.*?)$/.exec(I1i1II),
          IIil1 = this.getval(lil1II),
          iIi1II = lil1II ? "null" === IIil1 ? null : IIil1 || "{}" : "{}";
        try {
          const Iill11 = JSON.parse(iIi1II);
          this.lodash_set(Iill11, l1IiIl, lIIi1);
          l1IiIi = this.setval(JSON.stringify(Iill11), lil1II);
        } catch (lliili) {
          const Iill1I = {};
          this.lodash_set(Iill1I, l1IiIl, lIIi1);
          l1IiIi = this.setval(JSON.stringify(Iill1I), lil1II);
        }
      } else l1IiIi = this.setval(lIIi1, I1i1II);
      return l1IiIi;
    }
    ["getval"](lI1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(lI1) : this.isQuanX() ? $prefs.valueForKey(lI1) : this.isNode() ? (this.data = this.loaddata(), this.data[lI1]) : this.data && this.data[lI1] || null;
    }
    ["setval"](iiIIII, li1iI1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(iiIIII, li1iI1) : this.isQuanX() ? $prefs.setValueForKey(iiIIII, li1iI1) : this.isNode() ? (this.data = this.loaddata(), this.data[li1iI1] = iiIIII, this.writedata(), !0) : this.data && this.data[li1iI1] || null;
    }
    ["initGotEnv"](i1lil1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      i1lil1 && (i1lil1.headers = i1lil1.headers ? i1lil1.headers : {}, void 0 === i1lil1.headers.Cookie && void 0 === i1lil1.cookieJar && (i1lil1.cookieJar = this.ckjar));
    }
    ["get"](lI11ii, lii11i = () => {}) {
      lI11ii.headers && (delete lI11ii.headers["Content-Type"], delete lI11ii.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (lI11ii.headers = lI11ii.headers || {}, Object.assign(lI11ii.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(lI11ii, (IIill, i1lili, ilIl1) => {
        !IIill && i1lili && (i1lili.body = ilIl1, i1lili.statusCode = i1lili.status);
        lii11i(IIill, i1lili, ilIl1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (lI11ii.opts = lI11ii.opts || {}, Object.assign(lI11ii.opts, {
        "hints": !1
      })), $task.fetch(lI11ii).then(li1iIl => {
        const {
          statusCode: lIii1I,
          statusCode: lliI1l,
          headers: lliI1i,
          body: liiI1
        } = li1iIl;
        lii11i(null, {
          "status": lIii1I,
          "statusCode": lliI1l,
          "headers": lliI1i,
          "body": liiI1
        }, liiI1);
      }, i1lill => lii11i(i1lill))) : this.isNode() && (this.initGotEnv(lI11ii), this.got(lI11ii).on("redirect", (lIIii, lIliII) => {
        try {
          if (lIIii.headers["set-cookie"]) {
            const lIIil = lIIii.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            lIIil && this.ckjar.setCookieSync(lIIil, null);
            lIliII.cookieJar = this.ckjar;
          }
        } catch (li1iIi) {
          this.logErr(li1iIi);
        }
      }).then(liilII => {
        const {
          statusCode: lIIl1,
          statusCode: lllII1,
          headers: iiIl1I,
          body: il111I
        } = liilII;
        lii11i(null, {
          "status": lIIl1,
          "statusCode": lllII1,
          "headers": iiIl1I,
          "body": il111I
        }, il111I);
      }, lliI11 => {
        const {
          message: ilIil,
          response: lllIII
        } = lliI11;
        lii11i(ilIil, lllIII, lllIII && lllIII.body);
      }));
    }
    ["post"](iiIl11, II1Iii = () => {}) {
      if (iiIl11.body && iiIl11.headers && !iiIl11.headers["Content-Type"] && (iiIl11.headers["Content-Type"] = "pplication/x-www-form-urlencoded;charset=utf-8"), iiIl11.headers && delete iiIl11.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (iiIl11.headers = iiIl11.headers || {}, Object.assign(iiIl11.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(iiIl11, (IiiI1I, II1IiI, IilIII) => {
        !IiiI1I && II1IiI && (II1IiI.body = IilIII, II1IiI.statusCode = II1IiI.status);
        II1Iii(IiiI1I, II1IiI, IilIII);
      });else {
        if (this.isQuanX()) iiIl11.method = "POST", this.isNeedRewrite && (iiIl11.opts = iiIl11.opts || {}, Object.assign(iiIl11.opts, {
          "hints": !1
        })), $task.fetch(iiIl11).then(i1I1I1 => {
          const {
            statusCode: lIIlI,
            statusCode: ilIiI,
            headers: liiIl1,
            body: IIIilI
          } = i1I1I1;
          II1Iii(null, {
            "status": lIIlI,
            "statusCode": ilIiI,
            "headers": liiIl1,
            "body": IIIilI
          }, IIIilI);
        }, III1I => II1Iii(III1I));else {
          if (this.isNode()) {
            this.initGotEnv(iiIl11);
            const {
              url: IiI,
              ...l11III
            } = iiIl11;
            this.got.post(IiI, l11III).then(ii1ll1 => {
              const {
                statusCode: i1I1II,
                statusCode: I11II,
                headers: IiI1ii,
                body: ii1llI
              } = ii1ll1;
              II1Iii(null, {
                "status": i1I1II,
                "statusCode": I11II,
                "headers": IiI1ii,
                "body": ii1llI
              }, ii1llI);
            }, ilIi1 => {
              const {
                message: lIIll,
                response: liiIlI
              } = ilIi1;
              II1Iii(lIIll, liiIlI, liiIlI && liiIlI.body);
            });
          }
        }
      }
    }
    ["time"](lIIli, lilli1 = null) {
      const IlIlIi = lilli1 ? new Date(lilli1) : new Date();
      let Iii = {
        "M+": IlIlIi.getMonth() + 1,
        "d+": IlIlIi.getDate(),
        "H+": IlIlIi.getHours(),
        "m+": IlIlIi.getMinutes(),
        "s+": IlIlIi.getSeconds(),
        "q+": Math.floor((IlIlIi.getMonth() + 3) / 3),
        "S": IlIlIi.getMilliseconds()
      };
      /(y+)/.test(lIIli) && (lIIli = lIIli.replace(RegExp.$1, (IlIlIi.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let l11IIi in Iii) new RegExp("(" + l11IIi + ")").test(lIIli) && (lIIli = lIIli.replace(RegExp.$1, 1 == RegExp.$1.length ? Iii[l11IIi] : ("00" + Iii[l11IIi]).substr(("" + Iii[l11IIi]).length)));
      return lIIli;
    }
    ["msg"](llll1l = I1111, i1lI1I = "", Iil = "", III11) {
      const IiI1iI = i1lI11 => {
        if (!i1lI11) return i1lI11;
        if ("string" == typeof i1lI11) return this.isLoon() ? i1lI11 : this.isQuanX() ? {
          "open-url": i1lI11
        } : this.isSurge() ? {
          "url": i1lI11
        } : void 0;
        if ("object" == typeof i1lI11) {
          if (this.isLoon()) {
            let i1i1i = i1lI11.openUrl || i1lI11.url || i1lI11["open-url"],
              IlIIiI = i1lI11.mediaUrl || i1lI11["media-url"];
            return {
              "openUrl": i1i1i,
              "mediaUrl": IlIIiI
            };
          }
          if (this.isQuanX()) {
            let llll1I = i1lI11["open-url"] || i1lI11.url || i1lI11.openUrl,
              IiI1i1 = i1lI11["media-url"] || i1lI11.mediaUrl;
            return {
              "open-url": llll1I,
              "media-url": IiI1i1
            };
          }
          if (this.isSurge()) {
            let i1lI1i = i1lI11.url || i1lI11.openUrl || i1lI11["open-url"];
            return {
              "url": i1lI1i
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(llll1l, i1lI1I, Iil, IiI1iI(III11)) : this.isQuanX() && $notify(llll1l, i1lI1I, Iil, IiI1iI(III11))), !this.isMuteLog) {
        let Il1 = ["", "==============📣系统通知📣=============="];
        Il1.push(llll1l);
        i1lI1I && Il1.push(i1lI1I);
        Iil && Il1.push(Iil);
        console.log(Il1.join("\n"));
        this.logs = this.logs.concat(Il1);
      }
    }
    ["log"](...illIi) {
      illIi.length > 0 && (this.logs = [...this.logs, ...illIi]);
      console.log(illIi.join(this.logSeparator));
    }
    ["logErr"](l11IIl, illIl) {
      const IIIill = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      IIIill ? this.log("", "❗️" + this.name + ", 错误!", l11IIl.stack) : this.log("", "❗️" + this.name + ", 错误!", l11IIl);
    }
    ["wait"](Ii1I) {
      return new Promise(iil1i => setTimeout(iil1i, Ii1I));
    }
    ["done"](liiIii = {}) {
      const iil1l = new Date().getTime(),
        IliiI1 = (iil1l - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + IliiI1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(liiIii);
    }
  }(I1111, i1Ii);
}