//1719545817741
const _0x498282 = _0x30b43("顺丰速运"),
  _0x2ee780 = require("got"),
  _0x337dc4 = require("crypto-js"),
  {
    CookieJar: _0x8563d9
  } = require("tough-cookie"),
  _0x227f56 = "sfsy",
  _0x1503f0 = /[\n]/,
  _0x1dedb5 = [_0x227f56 + "Url"],
  _0x250edc = process.env[_0x227f56 + "Bee"] || "false",
  _0x222269 = process.env[_0x227f56 + "2024Draw"] || "false",
  _0x435878 = 8000,
  _0x22ee57 = 3;
const _0xf9929f = 2.15,
  _0x52d8af = "sfsy",
  _0x514d83 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x37d309 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x52d8af + ".json",
  _0xfd445 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  _0x347ba0 = "wwesldfs29aniversaryvdld29",
  _0x306e5f = "MCS-MIMP-CORE",
  _0x1b9811 = "czflqdlhbxcx",
  _0x15b8c4 = "YEAR_END_2023";
const _0x161f4e = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
  },
  _0x3e23fa = "ANNIVERSARY_2024",
  _0x2ad825 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单"];
let _0x4eeebe = [],
  _0x15695d = {};
class _0x31e93d {
  constructor() {
    this.index = _0x498282.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x5b84a4 = {
      limit: 0
    };
    const _0x5f15ae = {
      Connection: "keep-alive"
    };
    const _0xf8cf0d = {
      retry: _0x5b84a4,
      timeout: _0x435878,
      followRedirect: false,
      headers: _0x5f15ae
    };
    this.got = _0x2ee780.extend(_0xf8cf0d);
  }
  log(_0x1bb977, _0x42cd13 = {}) {
    var _0x1432e2 = "",
      _0x848bf9 = _0x498282.userCount.toString().length;
    if (this.index) {
      _0x1432e2 += "账号[" + _0x498282.padStr(this.index, _0x848bf9) + "]";
    }
    if (this.name) {
      _0x1432e2 += "[" + this.name + "]";
    }
    _0x498282.log(_0x1432e2 + _0x1bb977, _0x42cd13);
  }
  async request(_0xc22133) {
    const _0x5cde65 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x127746 = ["TimeoutError"];
    var _0x1ba570 = null,
      _0x3da0cd = 0,
      _0x81e7f0 = _0xc22133.fn || _0xc22133.url;
    _0xc22133.method = _0xc22133?.["method"]?.["toUpperCase"]() || "GET";
    let _0x122096;
    while (_0x3da0cd < _0x22ee57) {
      try {
        _0x3da0cd++;
        _0x122096 = null;
        let _0x389036 = null,
          _0x148969 = _0xc22133?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x435878,
          _0x4f346c = false;
        await new Promise(async _0x4779e1 => {
          setTimeout(() => {
            _0x4f346c = true;
            _0x4779e1();
          }, _0x148969);
          await this.got(_0xc22133).then(_0x13c868 => {
            _0x1ba570 = _0x13c868;
          }, _0x4ba868 => {
            _0x389036 = _0x4ba868;
            _0x1ba570 = _0x4ba868.response;
            _0x122096 = _0x389036?.["code"];
          });
          _0x4779e1();
        });
        if (_0x4f346c) {
          this.log("[" + _0x81e7f0 + "]请求超时(" + _0x148969 / 1000 + "秒)，重试第" + _0x3da0cd + "次");
        } else {
          if (_0x127746.includes(_0x389036?.["name"])) {
            this.log("[" + _0x81e7f0 + "]请求超时(" + _0x389036.code + ")，重试第" + _0x3da0cd + "次");
          } else {
            if (_0x5cde65.includes(_0x389036?.["code"])) {
              this.log("[" + _0x81e7f0 + "]请求错误(" + _0x389036.code + ")，重试第" + _0x3da0cd + "次");
            } else {
              let _0xaa0777 = _0x1ba570?.["statusCode"] || 999,
                _0x27a54b = _0xaa0777 / 100 | 0;
              if (_0x27a54b > 3) {
                this.log("请求[" + _0x81e7f0 + "]返回[" + _0xaa0777 + "]");
              }
              if (_0x27a54b <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x359848) {
        _0x359848.name == "TimeoutError" ? this.log("[" + _0x81e7f0 + "]请求超时，重试第" + _0x3da0cd + "次") : this.log("[" + _0x81e7f0 + "]请求错误(" + _0x359848.message + ")，重试第" + _0x3da0cd + "次");
      }
    }
    if (_0x1ba570 == null) {
      return Promise.resolve({
        statusCode: _0x122096 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x45b49e,
      headers: _0x393704,
      body: _0x3aa43d
    } = _0x1ba570;
    if (_0x3aa43d) {
      try {
        _0x3aa43d = JSON.parse(_0x3aa43d);
      } catch {}
    }
    const _0x5e69af = {
      statusCode: _0x45b49e,
      headers: _0x393704,
      result: _0x3aa43d
    };
    return Promise.resolve(_0x5e69af);
  }
}
let _0x8b5b71 = new _0x31e93d();
class _0x5e10bc extends _0x31e93d {
  constructor(_0x40f163) {
    super();
    this.refreshUrl = _0x40f163;
    this.cookieJar = new _0x8563d9();
    this.deviceId = _0x498282.randomPattern("xxxxxxxx-xxxx-xxxx");
    this.jika_black = false;
    this.anniversary_black = false;
    const _0x13bcc6 = {
      "User-Agent": _0xfd445
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x13bcc6
    });
  }
  getSign(_0x496cc6 = {}) {
    let _0x28dd73 = Date.now(),
      _0x1d1deb = "token=" + _0x347ba0 + "&timestamp=" + _0x28dd73 + "&sysCode=" + _0x306e5f,
      _0x5407cf = _0x337dc4.MD5(_0x1d1deb).toString();
    const _0x28b39f = {
      sysCode: _0x306e5f,
      timestamp: _0x28dd73,
      signature: _0x5407cf
    };
    return _0x28b39f;
  }
  async refresh_cookie(_0x156877 = {}) {
    let _0xa01286 = false;
    try {
      let _0x4cf1f6 = {
          fn: "refresh_cookie",
          method: "get",
          url: this.refreshUrl
        },
        {
          statusCode: _0x2d1522,
          headers: _0x24057b
        } = await this.request(_0x4cf1f6);
      if (_0x2d1522 == 302) {
        for (let _0x3f4c49 of _0x24057b["set-cookie"]) {
          if (_0x3f4c49.includes("_login_mobile_")) {
            let _0x4eb3c0 = _0x3f4c49.match(/_login_mobile_=(\d+);/);
            _0x4eb3c0 && (this.name = _0x4eb3c0[1]);
            break;
          }
        }
        _0xa01286 = true;
        this.log("登录成功");
      } else {
        this.log("登录失败[" + _0x2d1522 + "]");
      }
    } catch (_0x21fc65) {
      console.log(_0x21fc65);
    } finally {
      return _0xa01286;
    }
  }
  async personalInfo(_0x536626 = {}) {
    try {
      let _0x5e92f6 = {
          fn: "personalInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/personalInfo",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4c9396
        } = await this.request(_0x5e92f6);
      if (_0x4c9396?.["success"]) {
        const _0x4d4c2e = {
          notify: true
        };
        this.log("积分: " + _0x4c9396.obj.availablePoints, _0x4d4c2e);
      } else {
        this.log("查询账号信息失败: " + (_0x4c9396?.["errorMessage"] || (_0x4c9396 ? JSON.stringify(_0x4c9396) : "无返回")));
      }
    } catch (_0x4a17a2) {
      console.log(_0x4a17a2);
    }
  }
  async queryUserInfo(_0x349d01 = {}) {
    try {
      let _0x58a8fe = {
          fn: "queryUserInfo",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~queryUserInfo",
          headers: {
            ...this.getSign()
          },
          json: {
            sysCode: "ESG-CEMP-CORE",
            optionalColumns: ["usablePoint", "cycleSub", "leavePoint"],
            token: "zeTLTYeG0bLetfRk"
          }
        },
        {
          result: _0x130ff1
        } = await this.request(_0x58a8fe);
      if (_0x130ff1?.["success"]) {
        let {
            usablePoint: _0x4deb2e,
            cycleAdd: _0x17527f,
            cycleSub: _0xe7682,
            leavePoint: _0x1b63e4,
            pointClearCycle: _0x318a13
          } = _0x130ff1.obj,
          _0x2cbeb7 = "积分: " + _0x4deb2e,
          _0x535386 = _0x1b63e4 - _0xe7682;
        _0x535386 > 0 && (_0x2cbeb7 += ", 有" + _0x535386 + "积分将在" + _0x318a13 + "过期");
        const _0x508e5b = {
          notify: true
        };
        this.log(_0x2cbeb7, _0x508e5b);
      } else {
        this.log("查询账号信息失败: " + (_0x130ff1?.["errorMessage"] || (_0x130ff1 ? JSON.stringify(_0x130ff1) : "无返回")));
      }
    } catch (_0x2623d0) {
      console.log(_0x2623d0);
    }
  }
  async automaticSignFetchPackage(_0x47388a = {}) {
    try {
      let _0x3f682c = {
          fn: "automaticSignFetchPackage",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
          headers: {
            ...this.getSign()
          },
          json: {
            comeFrom: _0x498282.get(_0x47388a, "comeFrom", "vioin"),
            channelFrom: _0x498282.get(_0x47388a, "channelFrom", "SFAPP")
          }
        },
        {
          result: _0x538bc2
        } = await this.request(_0x3f682c);
      if (_0x538bc2?.["success"]) {
        _0x538bc2?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x538bc2?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得: " + _0x538bc2?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x39067f => _0x39067f.packetName)?.["join"](", "));
        await this.queryPointTaskAndSignFromES();
        const _0x562d32 = {
          channelType: 3
        };
        await this.queryPointTaskAndSignFromES(_0x562d32);
        await this.queryUserInfo();
      } else {
        this.log("查询签到失败: " + (_0x538bc2?.["errorMessage"] || (_0x538bc2 ? JSON.stringify(_0x538bc2) : "无返回")));
      }
    } catch (_0x53c3eb) {
      console.log(_0x53c3eb);
    }
  }
  async queryPointTaskAndSignFromES(_0x148ce4 = {}) {
    try {
      let _0x112e76 = {
          fn: "queryPointTaskAndSignFromES",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
          headers: {
            ...this.getSign()
          },
          json: {
            deviceId: this.deviceId,
            channelType: String(_0x498282.get(_0x148ce4, "channelType", 1))
          }
        },
        {
          result: _0x114003
        } = await this.request(_0x112e76);
      if (_0x114003?.["success"]) {
        for (let _0x51f437 of _0x114003.obj.taskTitleLevels) {
          switch (_0x51f437.status) {
            case 2:
              if (_0x2ad825.includes(_0x51f437.title)) {
                break;
              }
              await this.finishTask(_0x51f437);
            case 1:
              await this.fetchIntegral(_0x51f437);
              break;
            case 3:
              break;
            default:
              this.log("任务[" + _0x51f437.title + "] -- 未知状态[" + _0x51f437.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x114003?.["errorMessage"] || (_0x114003 ? JSON.stringify(_0x114003) : "无返回")));
      }
    } catch (_0x500d5d) {
      console.log(_0x500d5d);
    }
  }
  async finishTask(_0x27ea9e, _0x4610a7 = {}) {
    try {
      const _0x4dbaa9 = {
        taskCode: _0x27ea9e.taskCode
      };
      let _0x180960 = {
          fn: "finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            ...this.getSign()
          },
          json: _0x4dbaa9
        },
        {
          result: _0xf6a659
        } = await this.request(_0x180960);
      _0xf6a659?.["success"] ? this.log("完成任务[" + _0x27ea9e.title + "]成功") : this.log("完成任务[" + _0x27ea9e.title + "]失败: " + (_0xf6a659?.["errorMessage"] || (_0xf6a659 ? JSON.stringify(_0xf6a659) : "无返回")));
    } catch (_0x3fe1f4) {
      console.log(_0x3fe1f4);
    }
  }
  async fetchIntegral(_0x5ba47b, _0x2ae9c0 = {}) {
    try {
      let _0x56effd = {
          fn: "fetchIntegral",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
          headers: {
            ...this.getSign()
          },
          json: {
            strategyId: _0x5ba47b.strategyId,
            taskId: _0x5ba47b.taskId,
            taskCode: _0x5ba47b.taskCode,
            deviceId: this.deviceId
          }
        },
        {
          result: _0x878efd
        } = await this.request(_0x56effd);
      _0x878efd?.["success"] ? this.log("领取任务[" + _0x5ba47b.title + "]奖励: " + _0x878efd.obj.point + "积分") : this.log("领取任务[" + _0x5ba47b.title + "]奖励失败: " + (_0x878efd?.["errorMessage"] || (_0x878efd ? JSON.stringify(_0x878efd) : "无返回")));
    } catch (_0x3fe576) {
      console.log(_0x3fe576);
    }
  }
  async queryPointTaskAndSign(_0x105581 = {}) {
    try {
      let _0x5b9cac = {
          fn: "queryPointTaskAndSign",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/queryPointTaskAndSign",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x498282.get(_0x105581, "channel", "SFAPP"),
            pageType: _0x498282.get(_0x105581, "pageType", "APP_MINE_TASK")
          }
        },
        {
          result: _0xc76c5
        } = await this.request(_0x5b9cac);
      if (_0xc76c5?.["success"]) {
        for (let _0x2cbce4 of _0xc76c5?.["obj"]?.["taskTitleLevels"] || []) {
          if (_0x2ad825.includes(_0x2cbce4.title)) {
            continue;
          }
          await this.scanPageToRecord(_0x2cbce4);
          await this.fetchPoint(_0x2cbce4);
        }
      } else {
        this.log("查询旧版任务失败: " + (_0xc76c5?.["errorMessage"] || (_0xc76c5 ? JSON.stringify(_0xc76c5) : "无返回")));
      }
    } catch (_0xb6e79b) {
      console.log(_0xb6e79b);
    }
  }
  async scanPageToRecord(_0x139919, _0x29aa0a = {}) {
    try {
      let _0x3ee442 = {
          fn: "scanPageToRecord",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/scanPageToRecord",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x498282.get(_0x29aa0a, "channel", "SFAPP"),
            pageType: _0x139919.pageType
          }
        },
        {
          result: _0x5c6cbc
        } = await this.request(_0x3ee442);
      _0x5c6cbc?.["success"] ? this.log("完成任务[" + _0x139919.title + "]成功") : this.log("完成任务[" + _0x139919.title + "]失败: " + (_0x5c6cbc?.["errorMessage"] || (_0x5c6cbc ? JSON.stringify(_0x5c6cbc) : "无返回")));
    } catch (_0x49f393) {
      console.log(_0x49f393);
    }
  }
  async fetchPoint(_0x18b1d6, _0xd11fb6 = {}) {
    try {
      let _0x388b40 = {
          fn: "fetchPoint",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/appTask/fetchPoint",
          headers: {
            ...this.getSign()
          },
          json: {
            channel: _0x498282.get(_0xd11fb6, "channel", "SFAPP"),
            pageType: _0x18b1d6.pageType,
            deviceId: this.deviceId
          }
        },
        {
          result: _0xc75096
        } = await this.request(_0x388b40);
      _0xc75096?.["success"] ? this.log("领取任务[" + _0x18b1d6.title + "]奖励成功") : this.log("领取任务[" + _0x18b1d6.title + "]奖励失败: " + (_0xc75096?.["errorMessage"] || (_0xc75096 ? JSON.stringify(_0xc75096) : "无返回")));
    } catch (_0x438e2f) {
      console.log(_0x438e2f);
    }
  }
  async personalInfoNew(_0x580d3b = {}) {
    try {
      let _0x4d844d = {
          fn: "personalInfoNew",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~personalInfoNew",
          headers: {
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3a5664
        } = await this.request(_0x4d844d);
      if (_0x3a5664?.["success"]) {
        this.userId = _0x3a5664.obj.userId;
        const _0x358010 = {
          notify: true
        };
        this.log("积分: " + _0x3a5664.obj.availablePoints, _0x358010);
      } else {
        this.log("查询账号积分失败: " + (_0x3a5664?.["errorMessage"] || (_0x3a5664 ? JSON.stringify(_0x3a5664) : "无返回")));
      }
    } catch (_0x4feb7d) {
      console.log(_0x4feb7d);
    }
  }
  async bee_indexData(_0x4073bf = {}) {
    try {
      let _0x5cd18f = _0x498282.randomList(_0x4eeebe.filter(_0x3007b6 => _0x3007b6 != this.userId));
      const _0x3ff6c5 = {
        inviteUserId: _0x5cd18f
      };
      let _0x46dbf6 = {
        fn: "bee_indexData",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        headers: {
          platform: "MINI_PROGRAM",
          ...this.getSign()
        },
        json: _0x3ff6c5
      };
      {
        let {
          result: _0x2bc0ea
        } = await this.request(_0x498282.copy(_0x46dbf6));
        if (_0x2bc0ea?.["success"]) {
          _0x2bc0ea?.["obj"]?.["friendAwards"]?.["length"] && this.log("获得奖励: " + _0x2bc0ea.obj.friendAwards.map(_0x4dade0 => _0x4dade0.name).join(","));
          let _0x2851d4 = _0x2bc0ea?.["obj"]?.["gameNum"] || 0;
          this.log("可以采蜜冒险" + _0x2851d4 + "次");
          while (_0x2851d4-- > 0) {
            await this.bee_gameReport();
          }
          await this.bee_taskDetail();
        } else {
          const _0x287abd = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x2bc0ea?.["errorMessage"] || (_0x2bc0ea ? JSON.stringify(_0x2bc0ea) : "无返回")), _0x287abd);
          return;
        }
      }
      {
        let {
          result: _0x2a36cd
        } = await this.request(_0x498282.copy(_0x46dbf6));
        if (_0x2a36cd?.["success"]) {
          for (let _0x584f of _0x2a36cd?.["obj"]?.["taskDetail"] || []) {
            await this.bee_receiveHoney(_0x584f);
          }
        } else {
          const _0x329f56 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x2a36cd?.["errorMessage"] || (_0x2a36cd ? JSON.stringify(_0x2a36cd) : "无返回")), _0x329f56);
          return;
        }
      }
      {
        let {
          result: _0x32b032
        } = await this.request(_0x498282.copy(_0x46dbf6));
        if (_0x32b032?.["success"]) {
          const _0x173598 = {
            notify: true
          };
          this.log("采蜜游戏丰蜜: " + (_0x32b032?.["obj"]?.["usableHoney"] || 0), _0x173598);
        } else {
          const _0x7b45f8 = {
            notify: true
          };
          this.log("进入采蜜游戏主页失败: " + (_0x32b032?.["errorMessage"] || (_0x32b032 ? JSON.stringify(_0x32b032) : "无返回")), _0x7b45f8);
          return;
        }
      }
    } catch (_0x229a77) {
      console.log(_0x229a77);
    }
  }
  async bee_receiveHoney(_0xcb089f, _0x1800eb = {}) {
    try {
      const _0x1da232 = {
        taskType: _0xcb089f.type
      };
      let _0x4ea6b2 = {
          fn: "bee_receiveHoney",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x1da232
        },
        {
          result: _0x3bf0e0
        } = await this.request(_0x4ea6b2);
      _0x3bf0e0?.["success"] ? this.log("领取[" + _0xcb089f.type + "]奖励获得: " + _0xcb089f.value + "丰蜜") : this.log("领取[" + _0xcb089f.type + "]奖励失败: " + (_0x3bf0e0?.["errorMessage"] || (_0x3bf0e0 ? JSON.stringify(_0x3bf0e0) : "无返回")));
    } catch (_0xec7c0f) {
      console.log(_0xec7c0f);
    }
  }
  async bee_gameReport(_0xd6f7d9 = {}) {
    try {
      let _0x95ca26 = 20;
      const _0x27c68c = {
        gatherHoney: _0x95ca26
      };
      let _0x35bc94 = {
          fn: "bee_gameReport",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x27c68c
        },
        {
          result: _0x186105
        } = await this.request(_0x35bc94);
      _0x186105?.["success"] ? this.log("采蜜冒险获得" + _0x95ca26 + "丰蜜") : this.log("采蜜冒险失败: " + (_0x186105?.["errorMessage"] || (_0x186105 ? JSON.stringify(_0x186105) : "无返回")));
    } catch (_0xda3c0e) {
      console.log(_0xda3c0e);
    }
  }
  async bee_taskDetail(_0x29b5b0 = {}) {
    try {
      let _0x4274fb = {
          fn: "bee_taskDetail",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xf5e39c
        } = await this.request(_0x4274fb);
      if (_0xf5e39c?.["success"]) {
        for (let _0x2c0824 of _0xf5e39c.obj.list) {
          if (!_0x2c0824.taskCode) {
            continue;
          }
          switch (_0x2c0824.status) {
            case 2:
              if (_0x2ad825.includes(_0x2c0824.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x2c0824);
            case 1:
            case 3:
              break;
            default:
              this.log("任务[" + _0x2c0824.title + "] -- 未知状态[" + _0x2c0824.status + "]");
              break;
          }
        }
      } else {
        this.log("查询任务失败: " + (_0xf5e39c?.["errorMessage"] || (_0xf5e39c ? JSON.stringify(_0xf5e39c) : "无返回")));
      }
    } catch (_0x5dcb0f) {
      console.log(_0x5dcb0f);
    }
  }
  async bee_finishTask(_0x47f5cc, _0x3a865d = {}) {
    try {
      const _0x1c576c = {
        taskCode: _0x47f5cc.taskCode
      };
      let _0x527489 = {
          fn: "bee_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x1c576c
        },
        {
          result: _0x4a17bf
        } = await this.request(_0x527489);
      _0x4a17bf?.["success"] ? this.log("完成采蜜任务[" + _0x47f5cc.taskType + "]成功") : this.log("完成采蜜任务[" + _0x47f5cc.taskType + "]失败: " + (_0x4a17bf?.["errorMessage"] || (_0x4a17bf ? JSON.stringify(_0x4a17bf) : "无返回")));
    } catch (_0x2558f8) {
      console.log(_0x2558f8);
    }
  }
  async superWelfare_receiveRedPacket(_0x2bff0f = {}) {
    try {
      const _0x2d2086 = {
        channel: _0x1b9811
      };
      let _0x274311 = {
          fn: "superWelfare_receiveRedPacket",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x2d2086
        },
        {
          result: _0x449b16
        } = await this.request(_0x274311);
      if (_0x449b16?.["success"]) {
        let _0x4e3fcf = _0x449b16?.["obj"]?.["giftList"];
        if (_0x449b16?.["obj"]?.["extraGiftList"]?.["length"]) {
          _0x4e3fcf = _0x4e3fcf.concat(_0x449b16.obj.extraGiftList);
        }
        let _0x1bc3b0 = _0x4e3fcf?.["map"](_0x48e7ae => _0x48e7ae.giftName)?.["join"](", ") || "",
          _0x31f80c = _0x449b16?.["obj"]?.["receiveStatus"] == 1 ? "领取成功" : "已领取过";
        const _0x4ef70e = {
          notify: true
        };
        this.log("超值福利签到[" + _0x31f80c + "]: " + _0x1bc3b0, _0x4ef70e);
      } else {
        this.log("超值福利签到失败: " + (_0x449b16?.["errorMessage"] || (_0x449b16 ? JSON.stringify(_0x449b16) : "无返回")));
      }
    } catch (_0x63e4e1) {
      console.log(_0x63e4e1);
    }
  }
  async jika2024_taskList(_0x5ad526 = {}) {
    try {
      let _0x4a6081 = {
          fn: "jika2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {
            activityCode: _0x15b8c4,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x2f1060
        } = await this.request(_0x4a6081);
      if (_0x2f1060?.["success"]) {
        let _0x171c34 = _0x2f1060?.["obj"] || [];
        for (let _0x384614 of _0x171c34.filter(_0x4f40b6 => _0x4f40b6.status == 1)) {
          if (this.jika_black) {
            return;
          }
          for (let _0x57af79 = 0; _0x57af79 < _0x384614.canReceiveTokenNum; _0x57af79++) {
            await this.jika2024_fetchMixTaskReward(_0x384614);
          }
        }
        for (let _0xc0ad3b of _0x171c34.filter(_0x45070d => _0x45070d.status == 2)) {
          if (this.jika_black) {
            return;
          }
          switch (_0xc0ad3b.taskType) {
            case "PLAY_ACTIVITY_GAME":
              {
                this.log("开始玩新年集卡猜成语");
                for (let _0x83d197 = 1; _0x83d197 <= 10; _0x83d197++) {
                  let _0x3919e0 = Math.floor(Math.random() * 3000) + 1000;
                  await _0x498282.wait(_0x3919e0);
                  await this.jika2024_chengyu_win(_0x83d197);
                }
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0xe4fd7b = 0; _0xe4fd7b < _0xc0ad3b.restFinishTime && !this.jika_black; _0xe4fd7b++) {
                  await this.jika2024_finishTask(_0xc0ad3b);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询新年集卡任务失败: " + (_0x2f1060?.["errorMessage"] || (_0x2f1060 ? JSON.stringify(_0x2f1060) : "无返回")));
      }
    } catch (_0x2aab7c) {
      console.log(_0x2aab7c);
    }
  }
  async jika2024_finishTask(_0xe8e314, _0x290b6c = {}) {
    try {
      const _0xcf777 = {
        taskCode: _0xe8e314.taskCode
      };
      let _0x3dacfb = {
          fn: "jika2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0xcf777
        },
        {
          result: _0x517238
        } = await this.request(_0x3dacfb);
      _0x517238?.["success"] ? (this.log("完成新年集卡任务[" + _0xe8e314.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0xe8e314)) : this.log("完成新年集卡任务[" + _0xe8e314.taskName + "]失败: " + (_0x517238?.["errorMessage"] || (_0x517238 ? JSON.stringify(_0x517238) : "无返回")));
    } catch (_0x40595c) {
      console.log(_0x40595c);
    }
  }
  async jika2024_fetchMixTaskReward(_0xa718f4, _0x1e5c67 = {}) {
    try {
      const _0x381779 = {
        taskType: _0xa718f4.taskType,
        activityCode: _0x15b8c4,
        channelType: "MINI_PROGRAM"
      };
      let _0x58a083 = {
          fn: "jika2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonNoLoginPost/~memberNonactivity~yearEnd2023TaskService~fetchMixTaskReward",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x381779
        },
        {
          result: _0x4080a0
        } = await this.request(_0x58a083);
      if (_0x4080a0?.["success"]) {
        let _0x1257df = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x4080a0.obj;
        for (let _0x350c62 of receivedAccountList) {
          _0x1257df.push("" + (_0x161f4e[_0x350c62.currency] || "[" + _0x350c62.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x1257df.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("领取任务[" + _0xa718f4.taskName + "]奖励: " + _0x1257df.join(", "));
      } else {
        let _0xb4cf0f = _0x4080a0?.["errorMessage"] || (_0x4080a0 ? JSON.stringify(_0x4080a0) : "无返回");
        this.log("领取任务[" + _0xa718f4.taskName + "]奖励失败: " + _0xb4cf0f);
        _0xb4cf0f?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x1a895c) {
      console.log(_0x1a895c);
    }
  }
  async jika2024_getAward(_0x2f0eca, _0x331591 = {}) {
    try {
      const _0x31f41f = {
        cardType: _0x2f0eca
      };
      let _0x300ee0 = {
          fn: "jika2024_getAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GardenPartyService~getAward",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x31f41f
        },
        {
          result: _0x2e3119
        } = await this.request(_0x300ee0);
      if (_0x2e3119?.["success"]) {
        let _0x4618ca = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x2e3119.obj;
        for (let _0x2de6a2 of receivedAccountList) {
          _0x4618ca.push("" + (_0x161f4e[_0x2de6a2.currency] || "[" + _0x2de6a2.currency + "]"));
        }
        turnedAward?.["couponName"] && _0x4618ca.push("[优惠券]" + turnedAward?.["couponName"]);
        this.log("逛集市领卡奖励: " + _0x4618ca.join(", "));
      } else {
        let _0x5122eb = _0x2e3119?.["errorMessage"] || (_0x2e3119 ? JSON.stringify(_0x2e3119) : "无返回");
        this.log("逛集市领卡失败: " + _0x5122eb);
        _0x5122eb?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
      }
    } catch (_0x1c8159) {
      console.log(_0x1c8159);
    }
  }
  async jika2024_chengyu_index(_0x495d46 = {}) {
    try {
      let _0x175767 = {
          fn: "jika2024_chengyu_index",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~index",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xd63882
        } = await this.request(_0x175767);
      if (_0xd63882?.["success"]) {
        if (_0xd63882?.["obj"]?.["bigCardFlag"]) {
          this.log("今天已完成新年集卡猜成语");
        } else {
          this.log("开始玩新年集卡猜成语");
          for (let _0x4aa3ab = 1; _0x4aa3ab <= 10; _0x4aa3ab++) {
            let _0xf2df21 = Math.floor(Math.random() * 3000) + 1000;
            await _0x498282.wait(_0xf2df21);
            await this.jika2024_chengyu_win(_0x4aa3ab);
          }
        }
      } else {
        this.log("查询新年集卡猜成语任务失败: " + (_0xd63882?.["errorMessage"] || (_0xd63882 ? JSON.stringify(_0xd63882) : "无返回")));
      }
    } catch (_0x5e4198) {
      console.log(_0x5e4198);
    }
  }
  async jika2024_chengyu_win(_0x35d90b, _0x134d25 = {}) {
    try {
      const _0x4edf5b = {
        index: _0x35d90b
      };
      let _0x13cbbd = {
          fn: "jika2024_chengyu_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023GuessIdiomService~win",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x4edf5b
        },
        {
          result: _0x469ed0
        } = await this.request(_0x13cbbd);
      if (_0x469ed0?.["success"]) {
        let {
          isAward: _0x5145d9,
          currencyDTOList: _0x54e604
        } = _0x469ed0?.["obj"];
        if (_0x5145d9) {
          let _0xd77579 = [];
          for (let _0x47250f of _0x54e604) {
            _0xd77579.push("" + (_0x161f4e[_0x47250f.currency] || "[" + _0x47250f.currency + "]"));
          }
          this.log("猜成语第" + _0x35d90b + "关通关成功: " + _0xd77579.join(", "));
        } else {
          this.log("猜成语第" + _0x35d90b + "关通关成功");
        }
      } else {
        let _0x2a9766 = _0x469ed0?.["errorMessage"] || (_0x469ed0 ? JSON.stringify(_0x469ed0) : "无返回");
        this.log("猜成语第" + _0x35d90b + "关失败: " + _0x2a9766);
        _0x2a9766?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x457889) {
      console.log(_0x457889);
    }
  }
  async jika2024_cardStatus(_0x2523dd = {}) {
    try {
      let _0x21bb67 = {
          fn: "jika2024_cardStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~cardStatus",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xed0b9c
        } = await this.request(_0x21bb67);
      if (_0xed0b9c?.["success"]) {
        let _0x3d1d3e = _0xed0b9c?.["obj"]?.["accountList"] || [];
        if (_0x3d1d3e?.["length"]) {
          this.cards = _0x3d1d3e.filter(_0x3b3440 => _0x3b3440.balance > 0);
          this.cards.sort((_0xf9139, _0x5b26dc) => {
            return _0x5b26dc.balance - _0xf9139.balance;
          });
          let _0x1520c1 = [];
          for (let _0x3c6877 of this.cards) {
            let _0x4cd8ce = _0x161f4e[_0x3c6877.currency] || "[" + _0x3c6877.currency + "]";
            _0x1520c1.push(_0x4cd8ce + "X" + _0x3c6877.balance);
          }
          const _0x11baf1 = {
            notify: true
          };
          this.log("年卡: " + _0x1520c1.join(", "), _0x11baf1);
          if (this.cards.filter(_0x19c598 => _0x19c598.balance > 0).filter(_0x4eb3a6 => _0x4eb3a6.currency == "COMMON_CARD").length > 0) {
            const _0x19c30b = {
              notify: true
            };
            this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x19c30b);
            return;
          }
          while (this.cards.filter(_0x54637d => _0x54637d.balance > 0).length >= 3 && !this.jika_black) {
            await this.jika2024_collectDrawAward();
          }
        } else {
          const _0x1fb97b = {
            notify: true
          };
          this.log("还没有收集到年卡", _0x1fb97b);
        }
      } else {
        this.log("查询已收集年卡失败: " + (_0xed0b9c?.["errorMessage"] || (_0xed0b9c ? JSON.stringify(_0xed0b9c) : "无返回")));
      }
    } catch (_0x4fefd9) {
      console.log(_0x4fefd9);
    }
  }
  async jika2024_collectDrawAward(_0x113815 = {}) {
    try {
      let _0x1dfad7 = this.cards.filter(_0x1e68e3 => _0x1e68e3.balance > 0).map(_0x5a2ccc => _0x5a2ccc.currency);
      if (_0x1dfad7.length > 6) {
        _0x1dfad7 = _0x1dfad7.slice(0, 6);
      }
      const _0x12a01d = {
        accountList: _0x1dfad7
      };
      let _0x4d98d8 = {
          fn: "jika2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~yearEnd2023CardService~collectDrawAward",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x12a01d
        },
        {
          result: _0xc0a66d
        } = await this.request(_0x4d98d8);
      if (_0xc0a66d?.["success"]) {
        let {
          productName: _0x3e16a3
        } = _0xc0a66d?.["obj"];
        const _0x5ea0ad = {
          notify: true
        };
        this.log("使用" + _0x1dfad7.length + "种年卡合成: " + _0x3e16a3, _0x5ea0ad);
        for (let _0x507ac3 of this.cards) {
          _0x1dfad7.includes(_0x507ac3.currency) && (_0x507ac3.balance -= 1);
        }
      } else {
        let _0x15f99f = _0xc0a66d?.["errorMessage"] || (_0xc0a66d ? JSON.stringify(_0xc0a66d) : "无返回");
        this.log("使用" + _0x1dfad7.length + "种年卡合成失败: " + _0x15f99f);
        _0x15f99f?.["includes"]("系统繁忙") && (this.jika_black = true);
      }
    } catch (_0x35e056) {
      console.log(_0x35e056);
    }
  }
  async jika2024_task(_0x138a18 = {}) {
    await this.jika2024_cardStatus();
  }
  async anniversary2024_weeklyGiftStatus(_0x135197 = {}) {
    try {
      let _0x3ef809 = {
          fn: "anniversary2024_weeklyGiftStatus",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~weeklyGiftStatus",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x4524b3
        } = await this.request(_0x3ef809);
      if (_0x4524b3?.["success"]) {
        let _0x14e44e = _0x4524b3?.["obj"]?.["weeklyGiftList"] || [];
        for (let _0x54b02f of _0x14e44e) {
          if (!_0x54b02f.received) {
            let _0x50589a = new Date(_0x54b02f.receiveStartTime),
              _0x13e779 = new Date(_0x54b02f.receiveEndTime),
              _0x58b6ef = Date.now();
            _0x58b6ef >= _0x50589a.getTime() && _0x58b6ef <= _0x13e779.getTime() && (await this.anniversary2024_receiveWeeklyGift());
          }
        }
      } else {
        let _0x2042e4 = _0x4524b3?.["errorMessage"] || (_0x4524b3 ? JSON.stringify(_0x4524b3) : "无返回");
        this.log("查询每周领券失败: " + _0x2042e4);
        (_0x2042e4?.["includes"]("系统繁忙") || _0x2042e4?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x2cc97a) {
      console.log(_0x2cc97a);
    }
  }
  async anniversary2024_receiveWeeklyGift(_0x2f8979 = {}) {
    try {
      let _0x3e7e0f = {
          fn: "anniversary2024_receiveWeeklyGift",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024IndexService~receiveWeeklyGift",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x102fa0
        } = await this.request(_0x3e7e0f);
      if (_0x102fa0?.["success"]) {
        let _0x35434d = _0x102fa0?.["obj"]?.["map"](_0x2191bd => _0x2191bd.productName);
        this.log("每周领券: " + _0x35434d.join(", "));
      } else {
        let _0xb0525e = _0x102fa0?.["errorMessage"] || (_0x102fa0 ? JSON.stringify(_0x102fa0) : "无返回");
        this.log("每周领券失败: " + _0xb0525e);
        (_0xb0525e?.["includes"]("系统繁忙") || _0xb0525e?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
      }
    } catch (_0x2eb104) {
      console.log(_0x2eb104);
    }
  }
  async anniversary2024_taskList(_0x3fca76 = {}) {
    try {
      let _0x314eee = {
          fn: "anniversary2024_taskList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {
            activityCode: _0x3e23fa,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x1ff688
        } = await this.request(_0x314eee);
      if (_0x1ff688?.["success"]) {
        let _0x4fc8a2 = _0x1ff688?.["obj"] || [];
        for (let _0x21d120 of _0x4fc8a2.filter(_0x7794b5 => _0x7794b5.status == 1)) {
          if (this.anniversary_black) {
            return;
          }
          for (let _0x4b711b = 0; _0x4b711b < _0x21d120.canReceiveTokenNum; _0x4b711b++) {
            await this.anniversary2024_fetchMixTaskReward(_0x21d120);
          }
        }
        for (let _0x44401e of _0x4fc8a2.filter(_0x429f11 => _0x429f11.status == 2)) {
          if (this.anniversary_black) {
            return;
          }
          switch (_0x44401e.taskType) {
            case "PLAY_ACTIVITY_GAME":
            case "PLAY_HAPPY_ELIMINATION":
            case "PARTAKE_SUBJECT_GAME":
              {
                break;
              }
            case "FOLLOW_SFZHUNONG_VEDIO_ID":
              {
                break;
              }
            case "BROWSE_VIP_CENTER":
            case "GUESS_GAME_TIP":
            case "CREATE_SFID":
            case "CLICK_MY_SETTING":
            case "CLICK_TEMPLATE":
            case "REAL_NAME":
            case "SEND_SUCCESS_RECALL":
            case "OPEN_SVIP":
            case "OPEN_FAST_CARD":
            case "FIRST_CHARGE_NEW_EXPRESS_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              {
                break;
              }
            default:
              {
                for (let _0x344f48 = 0; _0x344f48 < _0x44401e.restFinishTime && !this.anniversary_black; _0x344f48++) {
                  await this.anniversary2024_finishTask(_0x44401e);
                }
                break;
              }
          }
        }
      } else {
        this.log("查询任务失败: " + (_0x1ff688?.["errorMessage"] || (_0x1ff688 ? JSON.stringify(_0x1ff688) : "无返回")));
      }
    } catch (_0x100064) {
      console.log(_0x100064);
    }
  }
  async anniversary2024_finishTask(_0x1b1dcb, _0x53c97f = {}) {
    try {
      const _0x579cb4 = {
        taskCode: _0x1b1dcb.taskCode
      };
      let _0x432ea7 = {
          fn: "anniversary2024_finishTask",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x579cb4
        },
        {
          result: _0x2d38ba
        } = await this.request(_0x432ea7);
      _0x2d38ba?.["success"] ? (this.log("完成任务[" + _0x1b1dcb.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x1b1dcb)) : this.log("完成任务[" + _0x1b1dcb.taskName + "]失败: " + (_0x2d38ba?.["errorMessage"] || (_0x2d38ba ? JSON.stringify(_0x2d38ba) : "无返回")));
    } catch (_0x5277d3) {
      console.log(_0x5277d3);
    }
  }
  async anniversary2024_fetchMixTaskReward(_0xa0b476, _0x46ea2d = {}) {
    try {
      let _0x1d6721 = {
          fn: "anniversary2024_fetchMixTaskReward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TaskService~fetchMixTaskReward",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {
            taskType: _0xa0b476.taskType,
            activityCode: _0x3e23fa,
            channelType: "MINI_PROGRAM"
          }
        },
        {
          result: _0x1e24af
        } = await this.request(_0x1d6721);
      if (_0x1e24af?.["success"]) {
        let _0xda1e66 = [],
          {
            receivedAccountList = [],
            turnedAward = {}
          } = _0x1e24af?.["obj"]?.["account"];
        for (let _0x1d0cd4 of receivedAccountList) {
          _0xda1e66.push("[" + _0x1d0cd4.currency + "]X" + _0x1d0cd4.amount);
        }
        turnedAward?.["productName"] && _0xda1e66.push("[优惠券]" + turnedAward?.["productName"]);
        this.log("领取任务[" + _0xa0b476.taskName + "]奖励: " + _0xda1e66.join(", "));
      } else {
        let _0x5103fe = _0x1e24af?.["errorMessage"] || (_0x1e24af ? JSON.stringify(_0x1e24af) : "无返回");
        this.log("领取任务[" + _0xa0b476.taskName + "]奖励失败: " + _0x5103fe);
        _0x5103fe?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x19f493) {
      console.log(_0x19f493);
    }
  }
  async anniversary2024_unbox(_0x39c130 = {}) {
    try {
      let _0x851b11 = {
          fn: "anniversary2024_unbox",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~unbox",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1694f6
        } = await this.request(_0x851b11);
      if (_0x1694f6?.["success"]) {
        let _0x1fd1ee = [],
          _0x31c7d8 = _0x1694f6?.["obj"]?.["account"]?.["receivedAccountList"] || [];
        for (let _0x3a5eb6 of _0x31c7d8) {
          _0x1fd1ee.push("[" + _0x3a5eb6.currency + "]X" + _0x3a5eb6.amount);
        }
        this.log("拆盒子: " + (_0x1fd1ee.join(", ") || "空气"));
      } else {
        let _0x53129a = _0x1694f6?.["errorMessage"] || (_0x1694f6 ? JSON.stringify(_0x1694f6) : "无返回");
        this.log("拆盒子失败: " + _0x53129a);
        _0x53129a?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x286e89) {
      console.log(_0x286e89);
    }
  }
  async anniversary2024_game_list(_0x2959c3 = {}) {
    try {
      let _0x102f9e = {
          fn: "anniversary2024_game_list",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GameParkService~list",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3624bd
        } = await this.request(_0x102f9e);
      if (_0x3624bd?.["success"]) {
        let {
          topicPKInfo: _0x14ad68,
          searchWordInfo: _0x4f6bc7,
          happyEliminationInfo: _0x288f8d
        } = _0x3624bd?.["obj"];
        !_0x14ad68?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
        if (!_0x4f6bc7?.["isPassFlag"] || !_0x4f6bc7?.["isFinishDailyFlag"]) {
          this.log("开始找字游戏");
          for (let _0xd76ae6 = 1; _0xd76ae6 <= 10; _0xd76ae6++) {
            let _0x45cebb = Math.floor(Math.random() * 2000) + 1000;
            await _0x498282.wait(_0x45cebb);
            if (!(await this.anniversary2024_SearchWord_win(_0xd76ae6))) {
              break;
            }
          }
        }
        if (!_0x288f8d?.["isPassFlag"] || !_0x288f8d?.["isFinishDailyFlag"]) {
          this.log("开始消消乐");
          for (let _0x53a4a4 = 1; _0x53a4a4 <= 30; _0x53a4a4++) {
            let _0x445c7e = Math.floor(Math.random() * 2000) + 1000;
            await _0x498282.wait(_0x445c7e);
            if (!(await this.anniversary2024_HappyElimination_win(_0x53a4a4))) {
              break;
            }
          }
        }
      } else {
        let _0x3469dd = _0x3624bd?.["errorMessage"] || (_0x3624bd ? JSON.stringify(_0x3624bd) : "无返回");
        this.log("查询游戏状态失败: " + _0x3469dd);
        _0x3469dd?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
      }
    } catch (_0x937bc5) {
      console.log(_0x937bc5);
    }
  }
  async anniversary2024_SearchWord_win(_0x23eaae, _0x2b1747 = {}) {
    let _0x422851 = true;
    try {
      const _0x13df42 = {
        index: _0x23eaae
      };
      let _0x5b931b = {
          fn: "anniversary2024_SearchWord_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024SearchWordService~win",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x13df42
        },
        {
          result: _0x5d96f6
        } = await this.request(_0x5b931b);
      if (_0x5d96f6?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x5d96f6?.["obj"];
        if (currencyDTOList?.["length"]) {
          let _0x569826 = [];
          for (let _0x484041 of currencyDTOList) {
            _0x569826.push("[" + _0x484041.currency + "]X" + _0x484041.amount);
          }
          this.log("找字游戏第" + _0x23eaae + "关通关成功: " + _0x569826.join(", "));
        } else {
          this.log("找字游戏第" + _0x23eaae + "关通关成功");
        }
      } else {
        let _0x2251f8 = _0x5d96f6?.["errorMessage"] || (_0x5d96f6 ? JSON.stringify(_0x5d96f6) : "无返回");
        this.log("找字游戏第" + _0x23eaae + "关失败: " + _0x2251f8);
        _0x2251f8?.["includes"]("系统繁忙") && (_0x422851 = false);
      }
    } catch (_0x1ae455) {
      console.log(_0x1ae455);
    } finally {
      return _0x422851;
    }
  }
  async anniversary2024_HappyElimination_win(_0x51eeaf, _0x4d8425 = {}) {
    let _0x4e6c30 = true;
    try {
      const _0x5f1359 = {
        index: _0x51eeaf
      };
      let _0x2dc701 = {
          fn: "anniversary2024_HappyElimination_win",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024HappyEliminationService~win",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x5f1359
        },
        {
          result: _0x328a88
        } = await this.request(_0x2dc701);
      if (_0x328a88?.["success"]) {
        let {
          isAward: _0x2a4ea7,
          currencyDTOList: _0x346915
        } = _0x328a88?.["obj"];
        if (_0x2a4ea7) {
          let _0x40be29 = [];
          for (let _0x2fc143 of _0x346915) {
            _0x40be29.push("[" + _0x2fc143.currency + "]X" + _0x2fc143.amount);
          }
          this.log("消消乐第" + _0x51eeaf + "关通关成功: " + _0x40be29.join(", "));
        } else {
          this.log("消消乐第" + _0x51eeaf + "关通关成功");
        }
      } else {
        let _0xe5d26e = _0x328a88?.["errorMessage"] || (_0x328a88 ? JSON.stringify(_0x328a88) : "无返回");
        this.log("消消乐第" + _0x51eeaf + "关失败: " + _0xe5d26e);
        _0xe5d26e?.["includes"]("系统繁忙") && (_0x4e6c30 = false);
      }
    } catch (_0x4bf0c6) {
      console.log(_0x4bf0c6);
    } finally {
      return _0x4e6c30;
    }
  }
  async anniversary2024_TopicPk_topicList(_0x8a7a1d = {}) {
    try {
      let _0x4ddba4 = {
          fn: "anniversary2024_TopicPk_topicList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~topicList",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x3a8a78
        } = await this.request(_0x4ddba4);
      if (_0x3a8a78?.["success"]) {
        let _0x288010 = _0x3a8a78?.["obj"]?.["topics"] || [],
          _0x4196e0 = _0x288010?.["filter"](_0x310dfb => !_0x310dfb?.["choose"])?.[0]?.["index"] || 1;
        for (let _0x2491d4 = parseInt(_0x4196e0); _0x2491d4 <= 12; _0x2491d4++) {
          let _0xeed821 = Math.floor(Math.random() * 2000) + 2000;
          await _0x498282.wait(_0xeed821);
          if (!(await this.anniversary2024_TopicPk_chooseSide(_0x2491d4))) {
            break;
          }
        }
      } else {
        let _0x4381ec = _0x3a8a78?.["errorMessage"] || (_0x3a8a78 ? JSON.stringify(_0x3a8a78) : "无返回");
        this.log("查询话题PK赛记录失败: " + _0x4381ec);
        _0x4381ec?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x3a8489) {
      console.log(_0x3a8489);
    }
  }
  async anniversary2024_queryAccountStatus_refresh(_0x4d544e = {}) {
    try {
      let _0x12f375 = {
        fn: "anniversary2024_queryAccountStatus_refresh",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          platform: "MINI_PROGRAM",
          ...this.getSign()
        },
        json: {}
      };
      await this.request(_0x12f375);
    } catch (_0x7814b0) {
      console.log(_0x7814b0);
    }
  }
  async anniversary2024_TopicPk_chooseSide(_0x327558, _0x54933b = {}) {
    let _0x2d983c = true;
    try {
      const _0x1d3496 = {
        index: _0x327558,
        choose: 0
      };
      let _0x1f6386 = {
          fn: "anniversary2024_TopicPk_chooseSide",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024TopicPkService~chooseSide",
          headers: {
            channel: "31annizyw",
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x1d3496
        },
        {
          result: _0x32701e
        } = await this.request(_0x1f6386);
      if (_0x32701e?.["success"]) {
        let {
          currencyDTOList = []
        } = _0x32701e?.["obj"];
        if (currencyDTOList.length) {
          let _0x3f8498 = [];
          for (let _0x5cc969 of currencyDTOList) {
            _0x3f8498.push("[" + _0x5cc969.currency + "]X" + _0x5cc969.amount);
          }
          this.log("话题PK赛第" + _0x327558 + "个话题选择成功: " + _0x3f8498.join(", "));
        } else {
          this.log("话题PK赛第" + _0x327558 + "个话题选择成功");
        }
      } else {
        let _0x71ac11 = _0x32701e?.["errorMessage"] || (_0x32701e ? JSON.stringify(_0x32701e) : "无返回");
        this.log("话题PK赛第" + _0x327558 + "个话题失败: " + _0x71ac11);
        _0x71ac11?.["includes"]("系统繁忙") && (_0x2d983c = false);
      }
    } catch (_0x52171e) {
      console.log(_0x52171e);
    } finally {
      return _0x2d983c;
    }
  }
  async anniversary2024_titleList(_0x3afe29 = {}) {
    try {
      let _0x3e0fc1 = {
          fn: "anniversary2024_titleList",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            channel: "31annizyw",
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x1541c6
        } = await this.request(_0x3e0fc1);
      if (_0x1541c6?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x1541c6?.["obj"],
          _0x3fd7d6 = _0x498282.time("yyyy-MM-dd"),
          _0x5e7d03 = guessTitleInfoList.filter(_0x400166 => _0x400166.gameDate == _0x3fd7d6);
        if (_0x5e7d03.length > 0) {
          let _0x3b7048 = _0x5e7d03[0];
          if (_0x3b7048.answerStatus) {
            this.log("今日已回答过竞猜");
          } else {
            let _0xcf3a05 = _0x15695d?.["answer"]?.[_0x3fd7d6];
            _0x15695d?.["answer"]?.[_0x3fd7d6] && (await this.anniversary2024_answer(_0x3b7048, _0xcf3a05));
          }
        } else {
          this.log("没有查询到今日竞猜题目");
        }
      } else {
        let _0x25e9ee = _0x1541c6?.["errorMessage"] || (_0x1541c6 ? JSON.stringify(_0x1541c6) : "无返回");
        this.log("查询每日口令竞猜失败: " + _0x25e9ee);
      }
    } catch (_0x339c89) {
      console.log(_0x339c89);
    }
  }
  async anniversary2024_titleList_award(_0x18c8f0 = {}) {
    try {
      let _0x9bcb6b = {
          fn: "anniversary2024_titleList_award",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~titleList",
          headers: {
            channel: "31annizyw",
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0x543c24
        } = await this.request(_0x9bcb6b);
      if (_0x543c24?.["success"]) {
        let {
            guessTitleInfoList = []
          } = _0x543c24?.["obj"],
          _0x225b88 = _0x498282.time("yyyy-MM-dd"),
          _0x29933a = guessTitleInfoList.filter(_0x26eb5e => _0x26eb5e.gameDate == _0x225b88);
        if (_0x29933a.length > 0) {
          let _0x38424a = _0x29933a[0];
          if (_0x38424a.answerStatus) {
            let _0x148fff = [],
              {
                awardList = [],
                puzzleList = []
              } = _0x38424a;
            _0x148fff = _0x148fff.concat(awardList.map(_0x38ebc7 => _0x38ebc7.productName));
            _0x148fff = _0x148fff.concat(puzzleList.map(_0x44586f => "[" + _0x44586f.currency + "]X" + _0x44586f.amount));
            const _0x4c21db = {
              notify: true
            };
            this.log("口令竞猜奖励: " + (_0x148fff.join(", ") || "空气"), _0x4c21db);
          } else {
            this.log("今日还没回答竞猜");
          }
        } else {
          this.log("没有查询到今日竞猜奖励");
        }
      } else {
        let _0x5dfb55 = _0x543c24?.["errorMessage"] || (_0x543c24 ? JSON.stringify(_0x543c24) : "无返回");
        this.log("查询每日口令竞猜奖励失败: " + _0x5dfb55);
      }
    } catch (_0x550b05) {
      console.log(_0x550b05);
    }
  }
  async anniversary2024_answer(_0xdf2d89, _0x311925, _0x53473c = {}) {
    try {
      const _0x4ec9e2 = {
        period: _0xdf2d89.period,
        answerInfo: _0x311925
      };
      let _0x142c9a = {
          fn: "anniversary2024_answer",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024GuessService~answer",
          headers: {
            channel: "31annizyw",
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x4ec9e2
        },
        {
          result: _0x51e767
        } = await this.request(_0x142c9a);
      if (_0x51e767?.["success"]) {
        this.log("口令竞猜回答成功");
        await this.anniversary2024_titleList_award();
      } else {
        let _0x4d870a = _0x51e767?.["errorMessage"] || (_0x51e767 ? JSON.stringify(_0x51e767) : "无返回");
        this.log("口令竞猜回答失败: " + _0x4d870a);
      }
    } catch (_0x367477) {
      console.log(_0x367477);
    }
  }
  async anniversary2024_queryAccountStatus(_0x41e204 = {}) {
    try {
      let _0x35d175 = {
        fn: "anniversary2024_queryAccountStatus",
        method: "post",
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
        headers: {
          channel: "31annisy",
          platform: "MINI_PROGRAM",
          ...this.getSign()
        },
        json: {}
      };
      {
        let {
          result: _0x59b884
        } = await this.request(_0x35d175);
        if (_0x59b884?.["success"]) {
          let _0x44f8de = _0x59b884?.["obj"]?.["accountCurrencyList"] || [],
            _0x2f0748 = _0x44f8de.filter(_0x2cad8e => _0x2cad8e.currency == "UNBOX_CHANCE"),
            _0x6621e7 = _0x2f0748?.[0]?.["balance"] || 0;
          this.log("可以拆" + _0x6621e7 + "次盒子");
          while (_0x6621e7-- > 0) {
            await this.anniversary2024_unbox();
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x59b884?.["errorMessage"] || (_0x59b884 ? JSON.stringify(_0x59b884) : "无返回")));
        }
      }
      {
        let {
          result: _0x454693
        } = await this.request(_0x35d175);
        if (_0x454693?.["success"]) {
          let _0x54ecd9 = _0x454693?.["obj"]?.["accountCurrencyList"] || [];
          _0x54ecd9 = _0x54ecd9.filter(_0x1987bc => _0x1987bc.currency != "UNBOX_CHANCE");
          if (_0x54ecd9?.["length"]) {
            this.cards = _0x54ecd9;
            let _0x35aea2 = [];
            for (let _0x2faa70 of this.cards) {
              _0x35aea2.push("[" + _0x2faa70.currency + "]X" + _0x2faa70.balance);
            }
            const _0x5873f5 = {
              notify: true
            };
            this.log("拼图: " + _0x35aea2.join(", "), _0x5873f5);
            this.cards.sort((_0x5a84f1, _0x219bac) => {
              return _0x219bac.balance - _0x5a84f1.balance;
            });
          } else {
            const _0x58685d = {
              notify: true
            };
            this.log("还没有收集到拼图", _0x58685d);
          }
        } else {
          this.log("查询已收集拼图失败: " + (_0x454693?.["errorMessage"] || (_0x454693 ? JSON.stringify(_0x454693) : "无返回")));
        }
      }
    } catch (_0x30860a) {
      console.log(_0x30860a);
    }
  }
  async anniversary2024_queryAccountStatus_card(_0x5527be = {}) {
    try {
      let _0x411d5b = {
          fn: "anniversary2024_queryAccountStatus_card",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~queryAccountStatus",
          headers: {
            channel: "31annizyw",
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: {}
        },
        {
          result: _0xc7034f
        } = await this.request(_0x411d5b);
      if (_0xc7034f?.["success"]) {
        let _0x53dfad = _0xc7034f?.["obj"]?.["accountCurrencyList"] || [];
        _0x53dfad = _0x53dfad.filter(_0x2d56cd => _0x2d56cd.currency != "UNBOX_CHANCE");
        if (_0x53dfad?.["length"]) {
          this.cards = _0x53dfad.sort((_0x28a885, _0x22f3a9) => {
            return _0x22f3a9.balance - _0x28a885.balance;
          });
          let _0x53c2f1 = [];
          for (let _0x204799 of this.cards) {
            _0x53c2f1.push("[" + _0x204799.currency + "]X" + _0x204799.balance);
          }
          const _0x50be55 = {
            notify: true
          };
          this.log("拼图: " + _0x53c2f1.join(", "), _0x50be55);
          while (this.cards.filter(_0x2d0685 => _0x2d0685.balance > 0).length >= 3 && !this.anniversary_black) {
            await this.anniversary2024_collectDrawAward();
          }
        } else {
          const _0x57abaa = {
            notify: true
          };
          this.log("还没有收集到拼图", _0x57abaa);
        }
      } else {
        this.log("查询已收集拼图失败: " + (_0xc7034f?.["errorMessage"] || (_0xc7034f ? JSON.stringify(_0xc7034f) : "无返回")));
      }
    } catch (_0x3290e6) {
      console.log(_0x3290e6);
    }
  }
  async anniversary2024_collectDrawAward(_0x5c78dd = {}) {
    try {
      this.cards = this.cards.sort((_0x8993f0, _0x4b0d9a) => {
        return _0x4b0d9a.balance - _0x8993f0.balance;
      });
      let _0x494572 = this.cards.filter(_0x34f46b => _0x34f46b.balance > 0).map(_0x41f679 => _0x41f679.currency);
      if (_0x494572.length == 9) {
        _0x494572 = _0x494572.slice(0, 9);
      } else {
        if (_0x494572.length >= 7) {
          _0x494572 = _0x494572.slice(0, 7);
        } else {
          if (_0x494572.length >= 5) {
            _0x494572 = _0x494572.slice(0, 5);
          } else {
            _0x494572.length >= 3 && (_0x494572 = _0x494572.slice(0, 3));
          }
        }
      }
      const _0x4b5d1f = {
        accountList: _0x494572
      };
      let _0x12c788 = {
          fn: "anniversary2024_collectDrawAward",
          method: "post",
          url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~anniversary2024CardService~collectDrawAward",
          headers: {
            platform: "MINI_PROGRAM",
            ...this.getSign()
          },
          json: _0x4b5d1f
        },
        {
          result: _0x298dce
        } = await this.request(_0x12c788);
      if (_0x298dce?.["success"]) {
        let {
          productName: _0x12a51c
        } = _0x298dce?.["obj"];
        const _0x176d0a = {
          notify: true
        };
        this.log("使用" + _0x494572.length + "种卡合成: " + _0x12a51c, _0x176d0a);
        for (let _0x27bcda of this.cards) {
          _0x494572.includes(_0x27bcda.currency) && (_0x27bcda.balance -= 1);
        }
      } else {
        let _0x1d340b = _0x298dce?.["errorMessage"] || (_0x298dce ? JSON.stringify(_0x298dce) : "无返回");
        this.log("使用" + _0x494572.length + "种年卡合成失败: " + _0x1d340b);
        _0x1d340b?.["includes"]("系统繁忙") && (this.anniversary_black = true);
      }
    } catch (_0x24121d) {
      console.log(_0x24121d);
    }
  }
  async anniversary2024_task(_0x21f7f3 = {}) {
    await this.anniversary2024_weeklyGiftStatus();
    if (this.anniversary_black) {
      return;
    }
    await this.anniversary2024_game_list();
    await this.anniversary2024_taskList();
    await this.anniversary2024_queryAccountStatus();
  }
  async anniversary2024_draw_task(_0x1b3626 = {}) {
    await this.anniversary2024_queryAccountStatus_card();
  }
  async userTask(_0x4f84fb = {}) {
    _0x498282.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.refresh_cookie())) {
      return;
    }
    await this.superWelfare_receiveRedPacket();
    await this.automaticSignFetchPackage();
    if (_0x250edc == "true") {
      await this.bee_indexData();
    }
    if (_0x222269 == "true") {
      await this.anniversary2024_draw_task();
    }
  }
}
!(async () => {
  if (!(await _0x189f98())) {
    return;
  }
  await _0x4f730f();
  _0x498282.read_env(_0x5e10bc);
  let _0x2d0882 = _0x250edc == "true" ? "运行" : "不运行";
  _0x498282.log("");
  const _0x287df9 = {
    notify: true
  };
  _0x498282.log("采蜜游戏目前设置为: " + _0x2d0882, _0x287df9);
  _0x498282.log("");
  for (let _0x449f6c of _0x498282.userList) {
    await _0x449f6c.userTask();
  }
})().catch(_0x447790 => _0x498282.log(_0x447790)).finally(() => _0x498282.exitNow());
async function _0x189f98(_0x27c8e0 = 0) {
  let _0x167b5a = false;
  try {
    let _0xc4e0cb = {
        fn: "auth",
        method: "get",
        url: _0x514d83,
        timeout: 20000
      },
      {
        statusCode: _0x41181a,
        result: _0xa244bf
      } = await _0x8b5b71.request(_0xc4e0cb);
    if (_0x41181a != 200) {
      _0x27c8e0++ < MAX_AUTH_RETRY && (_0x167b5a = await _0x189f98(_0x27c8e0));
      return _0x167b5a;
    }
    if (_0xa244bf?.["code"] == 0) {
      _0xa244bf = JSON.parse(_0xa244bf.data.file.data);
      if (_0xa244bf?.["commonNotify"] && _0xa244bf.commonNotify.length > 0) {
        const _0x45d11e = {
          notify: true
        };
        _0x498282.log(_0xa244bf.commonNotify.join("\n") + "\n", _0x45d11e);
      }
      _0xa244bf?.["commonMsg"] && _0xa244bf.commonMsg.length > 0 && _0x498282.log(_0xa244bf.commonMsg.join("\n") + "\n");
      if (_0xa244bf[_0x52d8af]) {
        let _0x2d53bc = _0xa244bf[_0x52d8af];
        _0x2d53bc.status == 0 ? _0xf9929f >= _0x2d53bc.version ? (_0x167b5a = true, _0x498282.log(_0x2d53bc.msg[_0x2d53bc.status]), _0x498282.log(_0x2d53bc.updateMsg), _0x498282.log("现在运行的脚本版本是：" + _0xf9929f + "，最新脚本版本：" + _0x2d53bc.latestVersion)) : _0x498282.log(_0x2d53bc.versionMsg) : _0x498282.log(_0x2d53bc.msg[_0x2d53bc.status]);
      } else {
        _0x498282.log(_0xa244bf.errorMsg);
      }
    } else {
      _0x27c8e0++ < MAX_AUTH_RETRY && (_0x167b5a = await _0x189f98(_0x27c8e0));
    }
  } catch (_0x55210c) {
    _0x498282.log(_0x55210c);
  } finally {
    return _0x167b5a;
  }
}
async function _0x4f730f() {
  let _0x166cf3 = false;
  try {
    let _0x513d7a = {
        fn: "auth",
        method: "get",
        url: _0x37d309
      },
      {
        statusCode: _0x2ae0f7,
        result: _0xcd1540
      } = await _0x8b5b71.request(_0x513d7a);
    if (_0x2ae0f7 != 200) {
      return Promise.resolve();
    }
    _0xcd1540?.["code"] == 0 && (_0xcd1540 = JSON.parse(_0xcd1540.data.file.data), _0x4eeebe = _0xcd1540?.["inviteUserId"] || _0x4eeebe, _0x15695d = _0xcd1540?.["anniversary_2024"] || _0x15695d);
  } catch (_0x2b5850) {
    _0x498282.log(_0x2b5850);
  } finally {
    return _0x166cf3;
  }
}
function _0x30b43(_0x1d9c73) {
  return new class {
    constructor(_0x5a1d54) {
      this.name = _0x5a1d54;
      this.startTime = Date.now();
      const _0x29ad56 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x29ad56);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x2d1ba1, _0x370119 = {}) {
      let _0x2dda7a = {
        console: true
      };
      Object.assign(_0x2dda7a, _0x370119);
      if (_0x2dda7a.time) {
        let _0xf4b375 = _0x2dda7a.fmt || "hh:mm:ss";
        _0x2d1ba1 = "[" + this.time(_0xf4b375) + "]" + _0x2d1ba1;
      }
      if (_0x2dda7a.notify) {
        this.notifyStr.push(_0x2d1ba1);
      }
      if (_0x2dda7a.console) {
        console.log(_0x2d1ba1);
      }
    }
    get(_0x4eb2d3, _0x4dba70, _0x5c8268 = "") {
      let _0xa96c4a = _0x5c8268;
      _0x4eb2d3?.["hasOwnProperty"](_0x4dba70) && (_0xa96c4a = _0x4eb2d3[_0x4dba70]);
      return _0xa96c4a;
    }
    pop(_0xb1cc06, _0x1cc463, _0x284150 = "") {
      let _0x13413a = _0x284150;
      _0xb1cc06?.["hasOwnProperty"](_0x1cc463) && (_0x13413a = _0xb1cc06[_0x1cc463], delete _0xb1cc06[_0x1cc463]);
      return _0x13413a;
    }
    copy(_0x143881) {
      return Object.assign({}, _0x143881);
    }
    read_env(_0x430a83) {
      let _0x173447 = _0x1dedb5.map(_0x1ec776 => process.env[_0x1ec776]);
      for (let _0x2cc04f of _0x173447.filter(_0x3f1e4c => !!_0x3f1e4c)) {
        for (let _0x5d5bf1 of _0x2cc04f.split(_0x1503f0).filter(_0x1bc77a => !!_0x1bc77a)) {
          if (this.userList.includes(_0x5d5bf1)) {
            continue;
          }
          this.userList.push(new _0x430a83(_0x5d5bf1));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x38ddbf = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1dedb5.map(_0x37e90f => "[" + _0x37e90f + "]").join("或"), _0x38ddbf);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x2db657, _0x359929, _0x45202d = {}) {
      while (_0x359929.idx < _0x498282.userList.length) {
        let _0x3b2756 = _0x498282.userList[_0x359929.idx++];
        if (!_0x3b2756.valid) {
          continue;
        }
        await _0x3b2756[_0x2db657](_0x45202d);
      }
    }
    async threadTask(_0x8bd401, _0x1bbf08) {
      let _0x39d8eb = [];
      let _0x25bbe3 = {
        idx: 0
      };
      while (_0x1bbf08--) {
        _0x39d8eb.push(this.threads(_0x8bd401, _0x25bbe3));
      }
      await Promise.all(_0x39d8eb);
    }
    time(_0x20d1a3, _0x51590e = null) {
      let _0x1de30c = _0x51590e ? new Date(_0x51590e) : new Date(),
        _0x9f2e98 = {
          "M+": _0x1de30c.getMonth() + 1,
          "d+": _0x1de30c.getDate(),
          "h+": _0x1de30c.getHours(),
          "m+": _0x1de30c.getMinutes(),
          "s+": _0x1de30c.getSeconds(),
          "q+": Math.floor((_0x1de30c.getMonth() + 3) / 3),
          S: this.padStr(_0x1de30c.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x20d1a3) && (_0x20d1a3 = _0x20d1a3.replace(RegExp.$1, (_0x1de30c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xe00c16 in _0x9f2e98) new RegExp("(" + _0xe00c16 + ")").test(_0x20d1a3) && (_0x20d1a3 = _0x20d1a3.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x9f2e98[_0xe00c16] : ("00" + _0x9f2e98[_0xe00c16]).substr(("" + _0x9f2e98[_0xe00c16]).length)));
      return _0x20d1a3;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x303e20 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x303e20.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x196326, _0x25d5c0, _0x33657a = {}) {
      let _0xe11c2a = _0x33657a.padding || "0",
        _0x564e26 = _0x33657a.mode || "l",
        _0x3924af = String(_0x196326),
        _0x17695f = _0x25d5c0 > _0x3924af.length ? _0x25d5c0 - _0x3924af.length : 0,
        _0x3ace40 = "";
      for (let _0x5dd34e = 0; _0x5dd34e < _0x17695f; _0x5dd34e++) {
        _0x3ace40 += _0xe11c2a;
      }
      _0x564e26 == "r" ? _0x3924af = _0x3924af + _0x3ace40 : _0x3924af = _0x3ace40 + _0x3924af;
      return _0x3924af;
    }
    json2str(_0x2301fb, _0xfcd579, _0x5dbc81 = false) {
      let _0x2f9c3f = [];
      for (let _0x4f8ab2 of Object.keys(_0x2301fb).sort()) {
        let _0x509057 = _0x2301fb[_0x4f8ab2];
        if (_0x509057 && _0x5dbc81) {
          _0x509057 = encodeURIComponent(_0x509057);
        }
        _0x2f9c3f.push(_0x4f8ab2 + "=" + _0x509057);
      }
      return _0x2f9c3f.join(_0xfcd579);
    }
    str2json(_0x51e792, _0x577bb8 = false) {
      let _0x54cbd1 = {};
      for (let _0x28c6ab of _0x51e792.split("&")) {
        if (!_0x28c6ab) {
          continue;
        }
        let _0x3d6c9a = _0x28c6ab.indexOf("=");
        if (_0x3d6c9a == -1) {
          continue;
        }
        let _0x58f4b6 = _0x28c6ab.substr(0, _0x3d6c9a),
          _0x1ff2e3 = _0x28c6ab.substr(_0x3d6c9a + 1);
        if (_0x577bb8) {
          _0x1ff2e3 = decodeURIComponent(_0x1ff2e3);
        }
        _0x54cbd1[_0x58f4b6] = _0x1ff2e3;
      }
      return _0x54cbd1;
    }
    randomPattern(_0x23eda7, _0x160df8 = "abcdef0123456789") {
      let _0x5ef06d = "";
      for (let _0x30688c of _0x23eda7) {
        if (_0x30688c == "x") {
          _0x5ef06d += _0x160df8.charAt(Math.floor(Math.random() * _0x160df8.length));
        } else {
          _0x30688c == "X" ? _0x5ef06d += _0x160df8.charAt(Math.floor(Math.random() * _0x160df8.length)).toUpperCase() : _0x5ef06d += _0x30688c;
        }
      }
      return _0x5ef06d;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2e7fcb, _0x68f10b = "abcdef0123456789") {
      let _0x3544e9 = "";
      for (let _0x1fa7e3 = 0; _0x1fa7e3 < _0x2e7fcb; _0x1fa7e3++) {
        _0x3544e9 += _0x68f10b.charAt(Math.floor(Math.random() * _0x68f10b.length));
      }
      return _0x3544e9;
    }
    randomList(_0xfd9466) {
      if (!_0xfd9466.length) {
        return null;
      }
      let _0x469a69 = Math.floor(Math.random() * _0xfd9466.length);
      return _0xfd9466[_0x469a69];
    }
    wait(_0x4af509) {
      return new Promise(_0x5a2640 => setTimeout(_0x5a2640, _0x4af509));
    }
    async exitNow() {
      await this.showmsg();
      let _0x248f44 = Date.now(),
        _0x14fec3 = (_0x248f44 - this.startTime) / 1000;
      this.log("");
      const _0x3be224 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x14fec3 + "秒", _0x3be224);
      process.exit(0);
    }
    normalize_time(_0x2a4784, _0x53e788 = {}) {
      let _0x2cc7e4 = _0x53e788.len || default_timestamp_len;
      _0x2a4784 = _0x2a4784.toString();
      let _0x5a08a0 = _0x2a4784.length;
      while (_0x5a08a0 < _0x2cc7e4) {
        _0x2a4784 += "0";
      }
      _0x5a08a0 > _0x2cc7e4 && (_0x2a4784 = _0x2a4784.slice(0, 13));
      return parseInt(_0x2a4784);
    }
    async wait_until(_0x208ad2, _0x2ae341 = {}) {
      let _0x1d5a32 = _0x2ae341.logger || this,
        _0x2fec05 = _0x2ae341.interval || default_wait_interval,
        _0x17f160 = _0x2ae341.limit || default_wait_limit,
        _0x358fbd = _0x2ae341.ahead || default_wait_ahead;
      if (typeof _0x208ad2 == "string" && _0x208ad2.includes(":")) {
        if (_0x208ad2.includes("-")) {
          _0x208ad2 = new Date(_0x208ad2).getTime();
        } else {
          let _0x2da811 = this.time("yyyy-MM-dd ");
          _0x208ad2 = new Date(_0x2da811 + _0x208ad2).getTime();
        }
      }
      let _0x3a8c3f = this.normalize_time(_0x208ad2) - _0x358fbd,
        _0x4c5b56 = this.time("hh:mm:ss.S", _0x3a8c3f),
        _0x3c7907 = Date.now();
      _0x3c7907 > _0x3a8c3f && (_0x3a8c3f += 86400000);
      let _0x1c6a42 = _0x3a8c3f - _0x3c7907;
      if (_0x1c6a42 > _0x17f160) {
        const _0x299e07 = {
          time: true
        };
        _0x1d5a32.log("离目标时间[" + _0x4c5b56 + "]大于" + _0x17f160 / 1000 + "秒,不等待", _0x299e07);
      } else {
        const _0x30de78 = {
          time: true
        };
        _0x1d5a32.log("离目标时间[" + _0x4c5b56 + "]还有" + _0x1c6a42 / 1000 + "秒,开始等待", _0x30de78);
        while (_0x1c6a42 > 0) {
          let _0x330731 = Math.min(_0x1c6a42, _0x2fec05);
          await this.wait(_0x330731);
          _0x3c7907 = Date.now();
          _0x1c6a42 = _0x3a8c3f - _0x3c7907;
        }
        const _0x3f814a = {
          time: true
        };
        _0x1d5a32.log("已完成等待", _0x3f814a);
      }
    }
    async wait_gap_interval(_0x5f3253, _0xe0e68e) {
      let _0x158219 = Date.now() - _0x5f3253;
      _0x158219 < _0xe0e68e && (await this.wait(_0xe0e68e - _0x158219));
    }
  }(_0x1d9c73);
}
const _0x41d484 = _0x269d;
function _0x269d(_0x99336b, _0x39d680) {
  const _0x34a5a8 = _0x5655();
  _0x269d = function (_0x2f1afb, _0x280ae6) {
    _0x2f1afb = _0x2f1afb - 308;
    let _0x519f46 = _0x34a5a8[_0x2f1afb];
    return _0x519f46;
  };
  return _0x269d(_0x99336b, _0x39d680);
}
(function (_0x32976c, _0x5afd9c) {
  const _0x5f1cd4 = _0x269d,
    _0x16ab0e = _0x32976c();
  while (true) {
    try {
      const _0x1b5e46 = -parseInt(_0x5f1cd4(1370)) / 1 + parseInt(_0x5f1cd4(1133)) / 2 + -parseInt(_0x5f1cd4(793)) / 3 * (-parseInt(_0x5f1cd4(1413)) / 4) + parseInt(_0x5f1cd4(1673)) / 5 + parseInt(_0x5f1cd4(1169)) / 6 + parseInt(_0x5f1cd4(1544)) / 7 * (parseInt(_0x5f1cd4(1035)) / 8) + parseInt(_0x5f1cd4(997)) / 9 * (-parseInt(_0x5f1cd4(756)) / 10);
      if (_0x1b5e46 === _0x5afd9c) {
        break;
      } else {
        _0x16ab0e.push(_0x16ab0e.shift());
      }
    } catch (_0x3f15a8) {
      _0x16ab0e.push(_0x16ab0e.shift());
    }
  }
})(_0x5655, 700898);
const _0x473183 = _0x3f1673(_0x41d484(418)),
  _0x111d70 = require(_0x41d484(1145)),
  _0x1c4152 = require("crypt" + _0x41d484(761)),
  {
    CookieJar: _0x103ffe
  } = require("tough" + _0x41d484(1579) + "ie"),
  _0x10cc17 = _0x41d484(336) + _0x41d484(1730) + "m",
  _0x1f100a = ["\n", "&", "@"],
  _0x38e245 = [_0x10cc17 + (_0x41d484(1438) + "e")],
  _0x48f157 = 50000,
  _0x2b866d = 3;
const _0x3afb60 = 1.12,
  _0x1612dd = _0x41d484(336) + _0x41d484(1730) + "m",
  _0x437d5f = _0x41d484(1285) + _0x41d484(1405) + "afxcy" + _0x41d484(1054) + _0x41d484(1368) + "t/api" + "/user" + _0x41d484(620) + _0x41d484(941) + _0x41d484(1621) + _0x41d484(1584) + _0x41d484(867) + _0x41d484(1141) + _0x41d484(491) + _0x41d484(1339) + "valid" + _0x41d484(1369) + "git/b" + _0x41d484(976) + _0x41d484(407) + _0x41d484(1180) + _0x41d484(1294),
  _0x1f6cac = "https" + _0x41d484(1405) + _0x41d484(781) + _0x41d484(1054) + _0x41d484(1368) + _0x41d484(474) + "/user" + _0x41d484(620) + _0x41d484(941) + _0x41d484(1621) + _0x41d484(1584) + _0x41d484(867) + _0x41d484(1141) + "red-d" + "epot/" + "valid" + _0x41d484(1369) + _0x41d484(934) + "lob/m" + "aster" + "/" + _0x1612dd + _0x41d484(1294),
  _0x56f9c7 = "Mozil" + _0x41d484(1350) + _0x41d484(439) + "hone;" + _0x41d484(911) + "iPhon" + "e OS " + _0x41d484(804) + _0x41d484(697) + _0x41d484(869) + _0x41d484(1606) + _0x41d484(317) + _0x41d484(420) + "Kit/6" + _0x41d484(1208) + "15 (K" + _0x41d484(1538) + _0x41d484(852) + _0x41d484(723) + "o) Mo" + _0x41d484(504) + _0x41d484(561) + _0x41d484(1646) + _0x41d484(313) + _0x41d484(878) + _0x41d484(1271) + _0x41d484(855) + _0x41d484(840) + _0x41d484(1077),
  _0x49391d = 5,
  _0x59125e = 13,
  _0x435828 = 1000,
  _0x1f4c96 = 3600000,
  _0x511e08 = 100,
  _0x2a54a1 = _0x41d484(1310) + _0x41d484(796) + _0x41d484(1112) + _0x41d484(1396) + _0x41d484(1317) + _0x41d484(1620) + _0x41d484(485) + "17c68" + _0x41d484(339) + "30a2b" + _0x41d484(1569) + _0x41d484(593) + _0x41d484(1068) + "0ab1e" + _0x41d484(1752) + _0x41d484(1075) + _0x41d484(672) + _0x41d484(862) + "5299d" + _0x41d484(714) + _0x41d484(338) + _0x41d484(319) + "372a6" + _0x41d484(806) + "a397e" + _0x41d484(1410) + _0x41d484(669) + _0x41d484(1172) + _0x41d484(1404) + _0x41d484(639) + "2f346" + _0x41d484(546) + _0x41d484(1344) + _0x41d484(1680) + _0x41d484(708) + _0x41d484(1653) + "c28b3" + _0x41d484(1095) + "e6",
  _0x3047ab = _0x41d484(912) + _0x41d484(473) + _0x41d484(352) + _0x41d484(963) + _0x41d484(936) + _0x41d484(954) + _0x41d484(1503) + "e",
  _0x233ff0 = "10000002",
  _0x2a484f = _0x41d484(1343) + "DL8RK" + "vc",
  _0x2004f4 = _0x41d484(600) + _0x41d484(1723) + _0x41d484(629) + "7",
  _0xd2903c = _0x41d484(1044) + _0x41d484(1516) + _0x41d484(1018) + "g",
  _0x51e2c0 = _0x41d484(1725),
  _0x172ae7 = _0x41d484(1725),
  _0x12d517 = _0x41d484(527),
  _0xbf394d = _0x41d484(1210) + _0x41d484(1510) + _0x41d484(1726) + _0x41d484(894) + _0x41d484(1644) + _0x41d484(606) + _0x41d484(1355) + _0x41d484(1266) + _0x41d484(405),
  _0x21d9da = _0x41d484(423) + _0x41d484(1688),
  _0x5192df = _0x41d484(1249) + _0x41d484(333) + _0x41d484(1236) + _0x41d484(368) + _0x41d484(1354) + "m",
  _0x31a2cd = process[_0x41d484(1551)][_0x10cc17 + _0x41d484(1011)] || _0x473183[_0x41d484(1346) + "mUuid"](),
  _0x25479b = [9, 10, 11, 12, 13],
  _0x3aa919 = 1000,
  _0x4e3cbe = 5000,
  _0x2395cd = _0x41d484(1329) + _0x41d484(316),
  _0x3dfd7a = _0x41d484(1020) + "2",
  _0x2dc5b2 = "";
let _0x1045cc = [_0x41d484(1140) + _0x41d484(578) + _0x41d484(1183) + "sZQYj" + "Nw==", "6"],
  _0x117e7f = [],
  _0x492f02 = 14,
  _0x4a0787 = [6640, 6641];
function _0x5655() {
  const _0x17110f = ["红包余额:", "ing", "eMsg", "mToke", "秒)，重试", "eTime", "ReadT", "RXRKp", "ECXzu", "MkgKo", "Week", "elid", "23/co", "VaCGu", "RkpfK", "8b9cb", "Runin", "cket", "isBig", "uthin", "ZGciO", "ign_h", "ldfFr", "pAFKK", "sList", "key", "until", "ookie", "tes--", "pqiEg", "时间: ", "联通云盘可", "entiv", "_onli", "nfo", "dyCEG", "mber", "mtOtt", "Video", "8_sha", "stDes", "getCo", "d_tok", "thori", "bfWky", "userC", "TRXfv", "subst", "VUdpP", "taskD", "HTML,", "...", "到失败[", "inclu", "userT", "Mddhh", "7pfQhDi", "rTask", "zYxUt", "fEahY", "mount", "y6mA=", "1|4|3", "env", "d_ver", "福利魔方获", "toStr", "Cnynd", "khWLt", "ly/ap", "MM-dd", "/rabb", "taskN", "giYzA", "nserv", "roqDN", "XKzCu", "sign", "templ", "-fron", "point", "d2736", "询任务失败", "wrpJN", "rinde", "getMi", "Slide", "onLin", "dSPDB", "bcpPW", "nin/g", "-cook", "jlRiA", "lotte", "脚本版本是", "/acti", "t/val", "/basi", "XFQqn", "rTHvk", "jdcTY", "ead", "rtext", "resul", "eANQa", "PciEd", "RbJBd", "未参加", "acces", "CrAMf", "ivity", "抽奖次数失", "timeo", "SPYyB", "YgMDb", "加抽奖次数", "nProp", "playS", " OS X", "]奖励失败", "ate_r", "Signe", "ityTy", " 推送 =", "incen", "nnelI", "dNoti", "28_qu", "e_wor", "recei", "Statu", "name", "7d252", "rojec", "retur", "ter/s", "阅光宝盒[", "in_ur", "查询阅读区", "_unif", "latLi", "lates", "yEipM", "y-fro", "sid", "kPYSc", "SgTjx", "bJSZo", "gqpcu", "ll/au", "ifyco", "edRXu", "ket失败", "ipeli", "Tzrco", "19D62", "zwI-X", "MD5", "8 uni", "OUND", "Conne", "://m.", "sstok", "t/v1/", "d_doD", "b121d", "split", "8_lot", "order", "Info", "ELTAP", "15000", "EAI_A", "jPgaV", "始刷阅读时", "ningR", "-pafs", "阅读区话费", "/inde", "j/uni", "auth2", "XYdfq", "nse", "-mcss", "hBnmX", "4498400WzTYdy", "authI", "VanpF", "BB979", "k/doT", "count", "threa", "050c7", "sbXru", "ableA", "agent", "lplav", "ity/v", "charA", "阅光宝盒查", "56789", "it_qu", "mberI", "stoke", "yTick", "ityNu", "联通畅游今", "联通畅游签", "_quer", "decry", "MsBkn", "JSpR+", "ESC", "xjeNp", "LfAJg", "er/v2", "ViRDw", "8_que", "adSta", "t.100", "00000", "loc", "uZDuY", "mPatt", "bvkLM", "?acti", "dQyNS", "=1001", "catch", "/fini", "m/tas", "VGvrn", "limit", "CBC", ".com", "e!@#1", "PhtjU", "225", "t3zhj", "rBolH", "盒任务[", "联通云盘抽", "Unico", "get_e", "afrMd", "1/tim", "draw_", "eWhBo", "可用立减金", "areCe", "://ga", "OGqDH", "Obkyh", "五折日抽奖", "prize", "块验证成功", "repla", "sysLX", "CsxTB", "userL", "FyGkH", "dType", "vity/", "询可领取任", "cc5a7", "ketAc", "阅光宝盒今", "pTApW", "p/bub", "DATA", "ARWFa", "TROQI", "assig", "nyRkV", "jgukE", "查询阅光宝", "slice", "联通支付日", "ox_re", "获取tok", "join_", "lHTve", "com{v", "WNBkC", "okie", "00003", ") App", "ad_se", "29381", "hh:mm", "登录成功", "vityI", "zed", "r/v2/", "Hidde", "odBCB", "day01", "worea", "date", "param", "rJdHb", "阅光宝盒去", "yuiop", "/ttlx", "dpVYl", "china", "=&cli", "c5a11", "5da71", "0000", "time", "jyyt", "ter/g", "imes", "it/lo", "到成功", "llise", "tate", "]查询抽奖", "GARam", "|0|4|", "50c-4", "签到, 已", "KyJWg", "pad", "clien", "Acces", "ime", "lize_", "token", "YMxkg", "bizFr", "DgndI", "联通畅游抽", "resol", "lts", "; Dom", "hjklz", "4|0|3", "cs/do", "YLcwd", "长 ===", "yFlag", "ntent", "searc", "json2", "mStri", "etCon", "code", "ESyKR", "daySi", "penPl", "zChan", "BmIux", "fmt", "tyId", "，共运行了", "FrdUZ", "ANfaT", "SuOkq", "-prox", "ding_", "打卡:", "ter", "OyBfd", "/v2/a", "mAqyy", "versi", "ain=", "ifyDr", "/app/", "pi/ap", "k/lv-", "STATU", "_a0", "grRkL", "aster", "QPyJm", "红包任务了", "5&cha", "encry", "Gbsxy", "get_l", "eTask", "cutiv", "mXCmk", "RSP_C", "中国联通", "Biz", "leWeb", "TTLXJ", "sVZXk", "01234", "mould", "hOpJt", "]抽奖失败", "side", "store", " 00:0", "sendN", "VpAmo", "eryBu", "kIn/?", "task/", "FKVJx", "额失败[", "YItEs", "JAuam", "0 (iP", "toFix", "skip", "rptid", "奖: ", "aBvwS", "bFSXO", "nXJhR", "领取任务[", "Platf", "kBYWh", "rabbl", "zTxie", "aHdOg", "wRedi", "ryAva", "tMsg", "tId", "询任务状态", "x.htm", "chers", "messa", "查询中奖奖", "wohom", "PtkkM", "MsEzY", "福利魔方今", "SIdeA", "询状态失败", "pKUjD", "签到状态失", "Unit", "inter", "bizOb", "8fd-2", "t/api", "tatus", "sign_", "xCfvC", "vYjcw", "ileSe", "nishA", "yActi", "ionFl", "PQcdO", "&bizF", "a5845", "dAKkk", "index", "ox_dr", "umber", "1|2|5", "red-d", "zhXRD", "RqpGI", "bbleT", "最早过期立", "mode", "welfa", "deYHq", "actco", "45678", "天已抽奖", "Count", "RSP_D", "bile/", "rgwEw", "11891", "unico", "woaut", "b/?we", "23/dr", "tInfo", "respo", "miYFu", "lider", "deoAd", "o.cn/", "询签到失败", "om/ci", "AiNAV", "bgMbi", "oZrzm", "uuid", "User-", "]抽奖: ", "GInZL", "sjNiK", "party", "bigAc", "nfoLi", "联通畅游滑", "ogin", "IYoAP", "获取rpt", "d_add", "rxEPd", "get_w", "smrNf", "day", "sort", "peesV", "]奖励成功", "_user", "esTok", "rptId", "查询打卡失", "96583", "rainb", "zEyNa", "file", "nbvuH", "QFCbz", "NQHnF", "locat", "awNew", "成功: ", "onMsg", "xindu", "om/wo", "品错误[", "EloFB", "15E14", "未领取", "bow/q", "XxtXV", "filte", "d_rea", "str2j", "/acco", "erCas", "oqsBG", "00100", "nId", "6D3-B", "取acce", "game_", "Utf8", "iPhon", "BOC2/", "lATMn", "cHlTR", "]请求超时", "fcMyo", "nToke", "oginT", "e/dis", "醒兔子失败", "getAc", "/open", "t-Id", "linkt", "jfeMb", "nth", "1afb4", "nterv", "taskL", "28_au", "pelin", "ask", "nce", "updat", "tqswW", "完成任务[", "OGmDM", "]领取奖励", "ceive", "fG5aM", "GYvjN", "Bubbl", "xMgWZ", "/quer", "erty", "联通云盘查", " hh:m", "typ_s", "刷新读小说", "ous", "://ac", "mainT", "chann", "/leaf", "commo", "bizCh", "de=22", "199", "ter/t", "LhtJA", "rDraw", "]可以抽奖", "23456", "bow/u", "YHIrO", "gap_i", "poWzl", "ity", "nJaAy", "str", "龟兔赛跑报", "e_c@1", "45004", "kxuMB", "thChe", "tUnau", "ize", "-mps-", "ata", "nutes", "FkfXb", "ViXWa", "it_jo", "AES", "nEeYx", "wfHoa", "auth/", "mplet", "10.co", "sdkuu", "没有可领取", "abcde", "ttlxj", "askip", "rect", "edqTQ", "wIZKh", "d_tas", "login", "m/App", "p/tas", "eUZsX", "c3c3c", "Azxsg", "QAQsI", "2d4df", "msgIn", "oread", "JDqkI", "pMont", "copy", "om=", "Msbtr", "M_TOK", "gHBEn", "enId", ".cn/a", "82E-3", "taskR", "ityId", "lmf_d", "JBcPk", "ave", "topst", "khFZB", "signI", "pzWyD", "oupIn", "Sxflf", "获取SES", "2 lik", "nt/v1", "ryTic", "]打卡增加", "all", "m:ss", "orize", "ail.w", "UStlR", "isSig", "28_un", "d5c50", "bnqZH", "010.c", "inRun", "iddle", "请求[", "c08c2", "KiZnj", "floor", "h/bin", "PFWMt", "st_ti", "抽奖: ", "28_ta", "|0|2", " Geck", "d_acc", "getDa", "DqhGR", "日抽奖: ", "it_fi", "醒兔子抽奖", "ID_CO", "CcjyB", "签到区今天", "TSAzs", "Month", "ZGCPG", "hOKHc", "rvice", "等待2分钟", ")，重试第", "apiac", "rabbi", "]请求错误", "yyyy-", "ddRea", "yData", "ZTMFV", "avIsH", "encod", "s-Tok", "nin/d", "HOtor", "/cloc", "reque", "xGqdx", "ghLqV", "108330NKKuct", "getTi", "HsUhK", "set_c", "未找到变量", "o-js", "aCtNm", "减金: ", "epay_", "taskV", "endTi", "_auth", "开宝箱: ", "oup", "paddi", "ryCha", "vSgSi", "userI", "utf-8", "jyenE", "exten", "eryAc", "notif", "ry_ti", "dAllb", "afxcy", "veSta", "padSt", "Check", "tus", "doTas", "天可以抽奖", "任务[", "ay.10", "excha", "zqoAn", "tery", "2088228Riovej", "nth_2", "]返回[", "3821b", "登录失败[", "gojHr", "yJDxU", "ngeRe", "get", "元 -- ", "dTask", "16_1_", "maxNu", "5a1a9", "SFAWs", "csesU", "aKSjv", "auth", "heEaV", "kBXEk", "utErr", "sessi", "qTCYz", "/wake", "back/", "vePri", "otify", "tEnMb", "20210", "xxx-x", "msg", "norma", "今日(", ".com.", "List", "ynmoN", "8_win", "SEjKw", "times", "bahjA", "get_f", "AAnze", "dayOf", "cAyHJ", "MsWdO", "hPara", "龟兔赛跑唤", "@10.0", "unt/l", "Zgaag", "openP", "in?ac", "ialGr", "sdSkQ", "benef", "/hist", "jquau", "en失败[", "wNew", " like", "连续签到", "ice.m", "one_c", "ction", "eKTaF", "RkNzw", "json", "JOSlK", "ance", "69e79", "=====", "d_dra", "Code", "yNumb", "idcod", "enId失", "e Mac", "ahead", "push", "oAddN", "ENID", "Pcomw", "estTa", "ioouq", "reduc", "ersio", "ntegr", "://10", "d_api", "mList", "app_s", "mUuid", "OKIE", "9999", "keys", "d_que", "]成功", "://ep", "联通畅游查", "d_aut", "reCen", "Hhe6k", "done", "nneli", "xshug", "8_bin", "品失败[", "retry", "activ", "itAct", "]失败[", "/rest", "share", "28_wi", "nCode", "DrawI", "m/Sig", "ion", " CPU ", "73b13", "度: ", "getMe", "gJzzi", "owMou", "get_b", "p/sig", "wDstY", "d_use", "etail", "gCShP", "b.wos", "log", "龟兔赛跑今", "play/", "parse", "serPa", "LOFxi", "日可以抽奖", "idDaP", "fCkcW", "询积分失败", "git/b", "group", "4e2-4", "avail", "lIqFc", "Yitje", "imei", "xcy/p", "0.030", "\n----", "点抽奖失败", "taskI", "izcha", "uENOd", "gPqOV", "d_get", "bow/?", "OhTKo", "val", "福利魔方查", "8cbcc", "idx", "1|7|2", "MXEoI", "jmHlV", "gify", "UserS", "TtMoD", "follo", "126-9", "游戏失败[", "IJrtv", "getHo", "s_tok", "getTa", "ZCMPN", "nit", "st-we", "ame", "抽奖失败[", "jFrFK", "tivit", "lob/m", "MzGIG", "P_900", "conso", "kWCgp", "dTime", "RPEBx", "etAcc", "视频失败[", "FEgsD", "keep-", "账号[", "] ---", "oken", "hsmGB", "查询失败[", "领取阅光宝", "j/hel", "getSe", "askLi", "号)已打卡", "2493SVoQPn", "myLhY", "://we", "，重试第", "日抽奖失败", "n失败[", "签到区查询", "web/h", "bView", "/gett", "gin", "_logi", "MDkkd", "owUni", "Uuid", "ox_qu", "logge", "stop", "bbdoc", "hfFSj", "以抽奖", "Strin", "bleTa", "10000", "Name", "结果失败[", "Time", "error", "28ZFR", "mobil", "ENOTF", "bicKu", "join", "NELVk", "进入主页失", "signM", "eeVid", "ymobi", "7782920lPgNMw", "veNum", "XTZUP", "jIZrr", "aUpOp", "zsIxM", "check", "登录已过期", "keRab", "16-By", "hasco", "aram", "New", "奖失败[", "l?cha", "OCQVe", "ateNa", "raw", "unt", ".codi", "p/use", "XPuUe", "h/lot", "FjsKz", "MEjzc", "bile", "cn/we", "ignIn", "DQB", "已完成等待", "Recor", "moonb", "toUpp", "f2e30", "奖状态[", "optio", "actNa", "]看视频增", "bit", "Rabbi", "01b4d", "veTas", "300}", "n=web", "联通畅游登", "hTAgC", "BGKft", "Nudpk", "版本：", "yDraw", "eryRe", "jHRuc", "f0123", "desc", "ken", "bizKe", "sourc", "bopLN", ":ss", "ueryU", "f31ec", "ntinu", "yStr", "need_", "Hex", "nelCo", "ltcy_", "/phon", "点抽奖: ", "1/inc", "ciphe", "tongd", "signR", "KSqEf", "eJar", "DEBmj", "25&bi", "50e6f", "cn/ng", "yyyyM", "id失败[", "h/win", "hPvdQ", "lhsdp", "tamp", "flmf_", "DrawT", "le/lo", "天天领现金", "lOcgX", "HwDaH", "DrawP", "conds", "nkAWL", "tiveT", "zEqWl", "aDIwF", "JMMCV", "1816048EjaxEj", "ned", "now", "vity4", "aKVub", "个账号", "essag", "mcGM6", "e/sha", "://pa", "y-web", "话费红包余", "got", "nning", "MXdYk", "QMbYE", "Handh", "nMsg", "打卡失败[", "eryCu", "eRDIx", "龟兔赛跑进", "ixin.", "zUOBr", "330", "annel", "desmo", "|2|1", "EMVJv", "bWvgC", "amoun", "DpBcW", "strin", "query", "mmss", "hQdIQ", "5000652kYbaMs", "heade", "TwZoL", "c0179", "curre", "signS", "appMo", "VpFaQ", "-part", "zFqDJ", "EfSXM", "/code", "jsMeT", "gogLa", "XPOJn", "PajEj", "nifyD", "city", "tnRRt", "wNxtm", "w_tas", "pLrBs", "UuTZr", "yAvai", "ninAp", "rewar", "VXAIb", "MIBUn", "gVVho", "0:00", "TAPP_", "gHNLz", "TrPfl", "GAMEL", "查询开宝箱", "uLsjv", "jGErX", "eNew.", "nwuGa", "05.1.", "eActi", "6-WfV", "map", "statu", "t_wor", "ZkqQk", "d=GAM", "mes", "cess/", "from", "录失败[", "om/ps", "WepAS", "奖错误[", "valid", "PCDUV", "QrAoy", "ject", "unTok", "成任务错误", "exitN", "start", "me.wo", "j/que", "ecs_t", "erSee", "form", "asdfg", "/onLi", "task", "\n====", "addUs", "essto", "readt", "dActi", "ne.ht", "klulg", "wait", "data", "final", "qwert", "unitA", "OJOjp", "KZcoj", "阅读活动[", "Gzrjc", "kEmre", "getMo", "NavIs", "Id_co", "联通云盘完", "KZDAq", "EcBOR", "tCode", "ount", "d_log", "shout", "I_4K7", "read_", "usabl", "neNew", "/join", "n:iph", "eader", "VVOLU", "p/com", "hasOw", "award", "it_wa", "共找到", "FtswH", "disri", "iphon", "WlNla", "rom=2", "xxxxx", "https", "eryCh", "获取tic", "stId", "ECONN", "yrwXK", "]获得: ", "福利魔方签", "INUSE", ".json", "阅光宝盒抽", "url", "fQciv", "patch", "rInde", "rLFwD", "ctNam", "mtIRC", "TOKEN", "块验证失败", "f_tas", "INHEp", "alue", "---- ", "]: ", "d82ac", "Msg", "getta", "today", "bindl", "awRea", "nDhOi", "684d2", "_task", "]运行结束", "ox_co", "ech.h", "_para", "tore.", "proCo", "num", "sCode", "kilhw", "ddleU", "10010", "次数失败[", "e/vou", "wrqRA", "t_flm", "ZpoVh", "ekSlo", "GAIN", "UOmvk", "日查询抽奖", "epot/", "lCode", "rid", "tVers", "7k1Hc", "31cec", "JoRNz", "rando", "]还有", "wait_", "test", "la/5.", "eryUs", "=welf", "uthor", "xcvbn", "CzRTL", "m-pro", "tNJzy", "ShTQm", "exit", "imesP", "csKvY", "min", "metho", "的阅光宝盒", "ODE", "成任务成功", "11841", "ng.ne", "Code/", "1304524GbCCFq", "Uezlv", "GVXwq", "eceiv", "pop", "签到区签到", "bkCke", "904-8", "lable", "scanT", "mon/s", "nNoti", "YLYQX", "VpbiL", "dNumb", "cooki", "tEveB", "produ", "qdnia", "IunMa", "etry", "des", "离目标时间", "6DF47", "Activ", "010.w", "05f6c", "pay_a", "今天无法完", "28_lo", "iegiV", "post", "23/re", "ediiD", "f01df", "://le", "sk/qu", "dyjyJ", "-auth", "TipCo", "b16ce", "save", "YvGoD", "8ntAsfe", "ctivi", "resTi", "readT", "失败[", "eryMi", "onId", "Times", "id失败", "clIiY", "newLo", "ttery", "edWgQ", "21010", "XdeOH", "BmPJh", "23/qu", "ories", "enc", "ticke", "YSeSN", "type", "/rain", "qhFuD", "vityD", "Cooki", "lMwEA", "m/mob", "erPag", "NcCrz", "h_log", "dbgNC", "_wore", "eNum", "LmlLh", "OKhvs", "to_ur", "zuxyd", "meta", "shid=", "yxchc", "SeeVi", "务失败[", "htm", "xPos", "成任务失败", "WyLPG", "EAngf", "tcode", "Type", "-----", "w_id", "ecord", "defau", "ViewN", "rejec", "entid", "prYDw", "开宝箱失败", "lengt", "IgxVD", "WCbsF", "ist", "取sid失", "eWBpz", "28日五折", "y.100", "ead_d", "ern", "GRHhg", "mVqhi", "nnelT", "yId", "tinuo", "ltyp_"];
  _0x5655 = function () {
    return _0x17110f;
  };
  return _0x5655();
}
const _0xc55fa4 = 7;
function _0x547bed(_0x26deca, _0x2e14a0, _0x24a41b, _0x310a6b, _0x45d823, _0x103554) {
  const _0x3e6975 = _0x41d484;
  return _0x1c4152[_0x26deca][_0x3e6975(411) + "pt"](_0x1c4152.enc[_0x3e6975(576)].parse(_0x310a6b), _0x1c4152[_0x3e6975(1431)][_0x3e6975(576)][_0x3e6975(927)](_0x45d823), {
    mode: _0x1c4152.mode[_0x2e14a0],
    padding: _0x1c4152.pad[_0x24a41b],
    iv: _0x1c4152.enc.Utf8.parse(_0x103554)
  })[_0x3e6975(1105) + _0x3e6975(1590)][_0x3e6975(1554) + _0x3e6975(1489)](_0x1c4152[_0x3e6975(1431)][_0x3e6975(1099)]);
}
function _0x182347(_0x2ca5e7, _0x23f7b9, _0x61d007, _0x52e50f, _0x3a99ba, _0x3f8200) {
  const _0xa29c1d = _0x41d484;
  return _0x1c4152[_0x2ca5e7][_0xa29c1d(1697) + "pt"]({
    ciphertext: _0x1c4152.enc.Hex[_0xa29c1d(927)](_0x52e50f)
  }, _0x1c4152.enc[_0xa29c1d(576)].parse(_0x3a99ba), {
    mode: _0x1c4152.mode[_0x23f7b9],
    padding: _0x1c4152[_0xa29c1d(355)][_0x61d007],
    iv: _0x1c4152[_0xa29c1d(1431)][_0xa29c1d(576)][_0xa29c1d(927)](_0x3f8200)
  })[_0xa29c1d(1554) + _0xa29c1d(1489)](_0x1c4152[_0xa29c1d(1431)][_0xa29c1d(576)]);
}
class _0x4be77f {
  constructor() {
    const _0x4815a9 = _0x41d484;
    const _0x580959 = {
      vYjcw: _0x4815a9(986) + "alive"
    };
    this.index = _0x473183[_0x4815a9(773) + "dx"]++;
    this[_0x4815a9(1619)] = "";
    this[_0x4815a9(1223)] = false;
    const _0x535a3e = {
      limit: 0
    };
    const _0x3c06fd = {};
    _0x3c06fd[_0x4815a9(1648) + _0x4815a9(856)] = _0x580959[_0x4815a9(478)];
    const _0x1f9e1b = {
      retry: _0x535a3e,
      timeout: _0x48f157
    };
    _0x1f9e1b.retry = _0x535a3e;
    _0x1f9e1b.timeout = _0x48f157;
    _0x1f9e1b[_0x4815a9(962) + _0x4815a9(453) + _0x4815a9(661)] = false;
    _0x1f9e1b[_0x4815a9(1170) + "rs"] = _0x3c06fd;
    this[_0x4815a9(1145)] = _0x111d70.extend(_0x1f9e1b);
  }
  [_0x41d484(924)](_0x53d442, _0x4c208e = {}) {
    const _0x876ebc = _0x41d484,
      _0x3defec = {};
    _0x3defec[_0x876ebc(1727)] = function (_0x33362a, _0x21bb2e) {
      return _0x33362a + _0x21bb2e;
    };
    const _0x260e99 = _0x3defec;
    var _0x47f4a9 = "",
      _0x2c239e = _0x473183["userC" + _0x876ebc(1263)]["toStr" + _0x876ebc(1489)]()[_0x876ebc(1472) + "h"];
    if (this[_0x876ebc(487)]) {
      _0x47f4a9 += _0x876ebc(987) + _0x473183.padStr(this.index, _0x2c239e) + "]";
    }
    if (this[_0x876ebc(1619)]) {
      _0x47f4a9 += "[" + this[_0x876ebc(1619)] + "]";
    }
    _0x473183[_0x876ebc(924)](_0x260e99[_0x876ebc(1727)](_0x47f4a9, _0x53d442), _0x4c208e);
  }
  [_0x41d484(759) + _0x41d484(1515)](_0x3b3ec6, _0x1428f3, _0x329fe0, _0x22ae26, _0x2edd35 = {}) {
    const _0x4db201 = _0x41d484;
    this[_0x4db201(1385) + "eJar"].setCookieSync(_0x3b3ec6 + "=" + _0x1428f3 + (_0x4db201(367) + _0x4db201(399)) + _0x329fe0 + ";", "" + _0x22ae26);
  }
  async request(_0x184746) {
    const _0x4ec591 = _0x41d484,
      _0x1cb181 = {
        khFZB: function (_0x68490, _0x3c39ed, _0xfb9ba4) {
          return _0x68490(_0x3c39ed, _0xfb9ba4);
        },
        eKTaF: function (_0x5b86fa) {
          return _0x5b86fa();
        },
        aUpOp: _0x4ec591(1289) + "RESET",
        feWHC: "EADDR" + _0x4ec591(1293),
        OCQVe: _0x4ec591(1027) + _0x4ec591(1647),
        qdnia: _0x4ec591(1660) + _0x4ec591(1336),
        IJrtv: "Timeo" + _0x4ec591(813) + "or",
        VaCGu: "GET",
        xGqdx: _0x4ec591(1285) + _0x4ec591(391) + "y-age" + "nt",
        YItEs: function (_0x261332, _0x5928cf) {
          return _0x261332 < _0x5928cf;
        },
        nkAWL: function (_0x298843, _0x3f6196) {
          return _0x298843 / _0x3f6196;
        },
        aPRfC: function (_0x2fae7f, _0x50c20b) {
          return _0x2fae7f > _0x50c20b;
        },
        pTApW: function (_0x5bbcf3, _0x470eb1) {
          return _0x5bbcf3 || _0x470eb1;
        }
      },
      _0x49e8c5 = [_0x1cb181[_0x4ec591(1039)], _0x1cb181.feWHC, _0x1cb181[_0x4ec591(1050)], _0x1cb181[_0x4ec591(1388)]],
      _0x276ad9 = [_0x1cb181[_0x4ec591(965)]];
    var _0x47cdf5 = null,
      _0x3898b8 = 0,
      _0x159bef = _0x184746.fn || _0x184746.url;
    _0x184746[_0x4ec591(1363) + "d"] = _0x184746?.["method"]?.[_0x4ec591(1067) + _0x4ec591(569) + "e"]() || _0x1cb181[_0x4ec591(1501)];
    let _0x4160b5;
    while (_0x1cb181[_0x4ec591(437)](_0x3898b8, _0x2b866d)) {
      try {
        _0x3898b8++;
        _0x4160b5 = null;
        let _0x488039 = null,
          _0x2c7e26 = _0x184746?.["timeout"] || this[_0x4ec591(1145)]?.[_0x4ec591(1466) + _0x4ec591(366)]?.[_0x4ec591(1070) + "ns"]?.[_0x4ec591(1600) + "ut"]?.[_0x4ec591(753) + "st"] || _0x48f157,
          _0x452777 = false;
        await new Promise(async _0x181f2a => {
          const _0x1c3d2b = _0x4ec591;
          _0x1cb181[_0x1c3d2b(691)](setTimeout, () => {
            _0x452777 = true;
            _0x181f2a();
          }, _0x2c7e26);
          await this.got(_0x184746).then(_0x4a467c => {
            _0x47cdf5 = _0x4a467c;
          }, _0x292f21 => {
            const _0x64e8ea = _0x1c3d2b;
            _0x488039 = _0x292f21;
            _0x47cdf5 = _0x292f21[_0x64e8ea(512) + _0x64e8ea(1670)];
            _0x4160b5 = _0x488039?.[_0x64e8ea(379)];
          });
          _0x1cb181[_0x1c3d2b(857)](_0x181f2a);
        });
        if (_0x452777) {
          this[_0x4ec591(924)]("[" + _0x159bef + (_0x4ec591(581) + "(") + _0x2c7e26 / 1000 + (_0x4ec591(1492) + "第") + _0x3898b8 + "次");
        } else {
          if (_0x276ad9[_0x4ec591(1541) + _0x4ec591(1391)](_0x488039?.[_0x4ec591(1619)])) {
            this.log("[" + _0x159bef + "]请求超时(" + _0x488039[_0x4ec591(379)] + _0x4ec591(739) + _0x3898b8 + "次");
          } else {
            if (_0x49e8c5[_0x4ec591(1541) + _0x4ec591(1391)](_0x488039?.[_0x4ec591(379)])) {
              this[_0x4ec591(924)]("[" + _0x159bef + (_0x4ec591(742) + "(") + _0x488039[_0x4ec591(379)] + _0x4ec591(739) + _0x3898b8 + "次");
            } else {
              let _0x536478 = _0x47cdf5?.[_0x4ec591(1212) + _0x4ec591(1326)] || 999,
                _0x1d9475 = _0x1cb181[_0x4ec591(1128)](_0x536478, 100) | 0;
              if (_0x1cb181.aPRfC(_0x1d9475, 3)) {
                this[_0x4ec591(924)](_0x4ec591(713) + _0x159bef + _0x4ec591(795) + _0x536478 + "]");
              }
              if (_0x1d9475 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x275a8c) {
        _0x275a8c[_0x4ec591(1619)] == _0x1cb181[_0x4ec591(965)] ? this[_0x4ec591(924)]("[" + _0x159bef + ("]请求超时" + _0x4ec591(1000)) + _0x3898b8 + "次") : this[_0x4ec591(924)]("[" + _0x159bef + "]请求错误(" + _0x275a8c[_0x4ec591(460) + "ge"] + _0x4ec591(739) + _0x3898b8 + "次");
      }
    }
    if (_0x47cdf5 == null) {
      return Promise.resolve({
        statusCode: _0x1cb181[_0x4ec591(1755)](_0x4160b5, -1),
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x3b8d91,
      headers: _0x3e1fdb,
      body: _0x4804b4
    } = _0x47cdf5;
    if (_0x4804b4) {
      try {
        _0x4804b4 = JSON.parse(_0x4804b4);
      } catch {}
    }
    const _0x2164e4 = {};
    _0x2164e4[_0x4ec591(1212) + _0x4ec591(1326)] = _0x3b8d91;
    _0x2164e4[_0x4ec591(1170) + "rs"] = _0x3e1fdb;
    _0x2164e4[_0x4ec591(1591) + "t"] = _0x4804b4;
    return Promise[_0x4ec591(365) + "ve"](_0x2164e4);
  }
}
let _0x80845b = new _0x4be77f();
class _0x244555 extends _0x4be77f {
  constructor(_0x22a2e7) {
    const _0x2fcb59 = _0x41d484,
      _0x38684e = {};
    _0x38684e[_0x2fcb59(1204)] = function (_0x2eb796, _0x2f4b9f) {
      return _0x2eb796 + _0x2f4b9f;
    };
    _0x38684e[_0x2fcb59(468)] = _0x2fcb59(336) + "unico" + "m-";
    _0x38684e[_0x2fcb59(1425)] = _0x2fcb59(1303) + _0x2fcb59(730) + _0x2fcb59(885);
    _0x38684e[_0x2fcb59(486)] = "UNICO" + _0x2fcb59(680) + _0x2fcb59(873);
    _0x38684e[_0x2fcb59(1735)] = _0x2fcb59(656) + "id";
    const _0x1eec24 = _0x38684e;
    super();
    this[_0x2fcb59(1385) + _0x2fcb59(1109)] = new _0x103ffe();
    const _0x2fe5e0 = {};
    _0x2fe5e0[_0x2fcb59(523) + "Agent"] = _0x56f9c7;
    this[_0x2fcb59(1145)] = this[_0x2fcb59(1145)][_0x2fcb59(776) + "d"]({
      cookieJar: this[_0x2fcb59(1385) + _0x2fcb59(1109)],
      headers: _0x2fe5e0
    });
    let _0x27b59d = _0x22a2e7[_0x2fcb59(1654)]("#");
    this["token" + _0x2fcb59(1521) + "ne"] = _0x27b59d[0];
    this["unico" + _0x2fcb59(1491) + _0x2fcb59(572)] = _0x473183[_0x2fcb59(1346) + _0x2fcb59(377) + "ng"](32);
    this[_0x2fcb59(360) + _0x2fcb59(1258) + _0x2fcb59(315)] = _0x1eec24[_0x2fcb59(1204)](_0x1eec24[_0x2fcb59(468)], _0x473183[_0x2fcb59(1346) + _0x2fcb59(377) + "ng"](32, _0x1eec24[_0x2fcb59(1204)](_0x21d9da, _0x5192df))[_0x2fcb59(1067) + _0x2fcb59(569) + "e"]());
    this[_0x2fcb59(544)] = "";
    this[_0x2fcb59(1186)] = [];
    this[_0x2fcb59(1333) + _0x2fcb59(1305) + "k"] = 0;
    this[_0x2fcb59(1213) + _0x2fcb59(1480) + _0x2fcb59(1052)] = 0;
    this[_0x2fcb59(1098) + _0x2fcb59(1267) + _0x2fcb59(741) + "t"] = false;
    this["need_" + _0x2fcb59(1267) + "moonb" + "ox"] = false;
    this[_0x2fcb59(759) + _0x2fcb59(1515)](_0x1eec24[_0x2fcb59(1425)], this[_0x2fcb59(360) + _0x2fcb59(1258) + _0x2fcb59(315)]);
    this[_0x2fcb59(759) + "ookie"](_0x1eec24[_0x2fcb59(486)], this[_0x2fcb59(507) + _0x2fcb59(1491) + _0x2fcb59(572)]);
    this[_0x2fcb59(759) + _0x2fcb59(1515)](_0x1eec24.eWhBo, this[_0x2fcb59(507) + "mToke" + _0x2fcb59(572)]);
  }
  ["set_c" + _0x41d484(1515)](_0x184fd4, _0xcb8301, _0x14a17b = {}) {
    const _0x3901f5 = _0x41d484,
      _0x53382e = {};
    _0x53382e[_0x3901f5(1302)] = _0x3901f5(1329) + _0x3901f5(1722);
    const _0x5c5f74 = _0x53382e;
    let _0x4a8488 = _0x14a17b?.["domain"] || _0x5c5f74[_0x3901f5(1302)],
      _0x3dd713 = _0x14a17b?.[_0x3901f5(1173) + "ntUrl"] || _0x3901f5(1285) + _0x3901f5(890) + _0x3901f5(789) + "010.c" + "om";
    super[_0x3901f5(759) + "ookie"](_0x184fd4, _0xcb8301, _0x4a8488, _0x3dd713, _0x14a17b);
  }
  [_0x41d484(917) + _0x41d484(946) + _0x41d484(896) + _0x41d484(1522)]() {
    const _0x50182a = _0x41d484,
      _0x425304 = {};
    _0x425304[_0x50182a(622) + _0x50182a(1158) + _0x50182a(865)] = _0x172ae7;
    _0x425304[_0x50182a(1280) + _0x50182a(419)] = _0x12d517;
    _0x425304["unionSessi" + _0x50182a(1419)] = "";
    _0x425304.stType = "";
    _0x425304[_0x50182a(1528) + "mobil" + "e"] = "";
    _0x425304[_0x50182a(1091) + "e"] = "";
    _0x425304[_0x50182a(544)] = this[_0x50182a(544)];
    _0x425304[_0x50182a(1432) + "t"] = "";
    _0x425304[_0x50182a(1106) + _0x50182a(1227) + _0x50182a(682)] = this["tokenId_co" + _0x50182a(315)];
    _0x425304[_0x50182a(557) + _0x50182a(583) + "nId"] = this.sdkuuid;
    let _0x5e8f2c = JSON[_0x50182a(1165) + _0x50182a(959)](_0x425304);
    return _0x5e8f2c;
  }
  [_0x41d484(1731) + _0x41d484(1397) + _0x41d484(1507) + "fo"]() {
    const _0x212ef3 = _0x41d484,
      _0x3d4d1f = {};
    _0x3d4d1f[_0x212ef3(1026) + "e"] = "";
    _0x3d4d1f[_0x212ef3(814) + _0x212ef3(1419)] = this[_0x212ef3(814) + _0x212ef3(1419)];
    _0x3d4d1f.tokenId = this[_0x212ef3(360) + "Id"];
    _0x3d4d1f[_0x212ef3(773) + "d"] = "";
    return JSON[_0x212ef3(1165) + _0x212ef3(959)](_0x3d4d1f);
  }
  [_0x41d484(833) + _0x41d484(687) + _0x41d484(645)](_0x2c6bc2 = _0x41d484(497) + _0x41d484(893) + _0x41d484(394)) {
    const _0x4e6d3a = _0x41d484,
      _0x1bde23 = {};
    _0x1bde23[_0x4e6d3a(1632)] = this[_0x4e6d3a(1120) + _0x4e6d3a(1632)];
    _0x1bde23[_0x4e6d3a(499) + "de"] = _0x2c6bc2;
    return _0x1bde23;
  }
  encode_woread(_0x51ff44) {
    const _0x11a50d = _0x41d484,
      _0x265b7c = {
        hTAgC: function (_0x2b11e0, _0x3bc716, _0x27670d, _0x1a4926, _0x2036d0, _0x380741, _0x2f8396) {
          return _0x2b11e0(_0x3bc716, _0x27670d, _0x1a4926, _0x2036d0, _0x380741, _0x2f8396);
        },
        QrAoy: _0x11a50d(650),
        GInZL: "Pkcs7",
        LOFxi: _0x11a50d(774),
        lMwEA: "base64"
      };
    let _0x4d1926 = _0x265b7c[_0x11a50d(1080)](_0x547bed, _0x265b7c[_0x11a50d(1225)], _0x11a50d(1721), _0x265b7c[_0x11a50d(525)], JSON[_0x11a50d(1165) + _0x11a50d(959)](_0x51ff44), _0x2004f4, _0xd2903c);
    return Buffer[_0x11a50d(1218)](_0x4d1926, _0x265b7c[_0x11a50d(929)])[_0x11a50d(1554) + _0x11a50d(1489)](_0x265b7c[_0x11a50d(1439)]);
  }
  [_0x41d484(536) + _0x41d484(674) + _0x41d484(1322) + "m"]() {
    const _0x3e1c8a = _0x41d484;
    const _0x5d530e = {
      hfFSj: _0x3e1c8a(1114) + _0x3e1c8a(1543) + _0x3e1c8a(1167)
    };
    return {
      timestamp: _0x473183.time(_0x5d530e[_0x3e1c8a(1016)]),
      token: this[_0x3e1c8a(328) + _0x3e1c8a(1530) + "en"],
      userid: this[_0x3e1c8a(328) + _0x3e1c8a(920) + _0x3e1c8a(1341)],
      userId: this[_0x3e1c8a(328) + _0x3e1c8a(920) + "rid"],
      userIndex: this[_0x3e1c8a(328) + _0x3e1c8a(920) + _0x3e1c8a(1299) + "x"],
      userAccount: this.mobile,
      verifyCode: this[_0x3e1c8a(328) + _0x3e1c8a(1552) + _0x3e1c8a(1638) + "de"]
    };
  }
  [_0x41d484(413) + _0x41d484(614) + _0x41d484(1509) + _0x41d484(1272)](_0x4307b0) {
    const _0x4f356a = _0x41d484,
      _0x359046 = {};
    _0x359046[_0x4f356a(1178)] = function (_0xd605ab, _0x3f9ad3) {
      return _0xd605ab + _0x3f9ad3;
    };
    _0x359046[_0x4f356a(675)] = function (_0x45c6cb, _0x24ecb6) {
      return _0x45c6cb * _0x24ecb6;
    };
    _0x359046[_0x4f356a(1082)] = function (_0x384919, _0x128fa2) {
      return _0x384919 + _0x128fa2;
    };
    _0x359046[_0x4f356a(384)] = function (_0x369fd0, _0x5c6fcc) {
      return _0x369fd0 + _0x5c6fcc;
    };
    const _0x15465f = _0x359046;
    let _0x3c8213 = Date[_0x4f356a(1135)](),
      _0x5008aa = _0x15465f[_0x4f356a(1178)](Math[_0x4f356a(716)](_0x15465f[_0x4f356a(675)](89999, Math.random())), 100000),
      _0x225dfa = _0x3dfd7a,
      _0x2284be = _0x2dc5b2,
      _0x3b8e70 = _0x1c4152[_0x4f356a(1645)](_0x15465f[_0x4f356a(1082)](_0x15465f[_0x4f356a(1082)](_0x15465f[_0x4f356a(384)](_0x4307b0 + _0x3c8213, _0x5008aa), _0x225dfa), _0x2284be))[_0x4f356a(1554) + _0x4f356a(1489)]();
    const _0x14d978 = {};
    _0x14d978[_0x4f356a(1513)] = _0x4307b0;
    _0x14d978[_0x4f356a(1415) + "me"] = _0x3c8213;
    _0x14d978.reqSeq = _0x5008aa;
    _0x14d978[_0x4f356a(619) + "el"] = _0x225dfa;
    _0x14d978[_0x4f356a(398) + "on"] = _0x2284be;
    _0x14d978[_0x4f356a(1565)] = _0x3b8e70;
    return _0x14d978;
  }
  async onLine(_0x45ee81 = {}) {
    const _0x2f76b7 = _0x41d484,
      _0x51e845 = {};
    _0x51e845[_0x2f76b7(1335)] = "onLine";
    _0x51e845[_0x2f76b7(1124)] = _0x2f76b7(1281) + _0x2f76b7(638) + _0x2f76b7(942) + "0";
    _0x51e845[_0x2f76b7(693)] = _0x2f76b7(1314) + "ist";
    _0x51e845[_0x2f76b7(493)] = _0x2f76b7(577) + "e";
    _0x51e845[_0x2f76b7(751)] = function (_0x5b783b, _0x18aebb) {
      return _0x5b783b == _0x18aebb;
    };
    const _0x314ed2 = _0x51e845;
    let _0x56a588 = false;
    try {
      let _0x5b497a = {
          fn: _0x314ed2.ekSlo,
          method: _0x2f76b7(1401),
          url: _0x2f76b7(1285) + _0x2f76b7(1649) + _0x2f76b7(356) + "t.100" + _0x2f76b7(655) + _0x2f76b7(1440) + _0x2f76b7(479) + "rvice" + _0x2f76b7(1237) + _0x2f76b7(1244) + "m",
          form: {
            token_online: this[_0x2f76b7(360) + "_onli" + "ne"],
            reqtime: _0x473183[_0x2f76b7(341)](_0x2f76b7(743) + _0x2f76b7(1558) + _0x2f76b7(613) + _0x2f76b7(702)),
            appId: _0x2a54a1,
            version: _0x314ed2[_0x2f76b7(1124)],
            step: _0x314ed2[_0x2f76b7(693)],
            isFirstInstall: 0,
            deviceModel: _0x314ed2.RqpGI
          }
        },
        {
          result: _0x2e17f8,
          statusCode: _0x496dc8
        } = await this.request(_0x5b497a),
        _0x335619 = _0x473183[_0x2f76b7(801)](_0x2e17f8, _0x2f76b7(379), _0x496dc8);
      _0x314ed2[_0x2f76b7(751)](_0x335619, 0) ? (_0x56a588 = true, this[_0x2f76b7(1223)] = true, this[_0x2f76b7(1026) + "e"] = _0x2e17f8?.[_0x2f76b7(1159) + _0x2f76b7(1060)], this.name = _0x2e17f8?.["desmo" + _0x2f76b7(1060)], this["ecs_t" + _0x2f76b7(989)] = _0x2e17f8?.[_0x2f76b7(1233) + _0x2f76b7(989)], this[_0x2f76b7(1186)] = _0x2e17f8?.["list"], this[_0x2f76b7(924)](_0x2f76b7(321))) : (this[_0x2f76b7(1223)] = false, this[_0x2f76b7(924)](_0x2f76b7(797) + _0x335619 + "]"));
    } catch (_0x21c451) {
      console[_0x2f76b7(924)](_0x21c451);
    } finally {
      return _0x56a588;
    }
  }
  async ["openP" + _0x41d484(1628) + "neNew"](_0x67f0b1, _0x440bac = {}) {
    const _0x215aef = _0x41d484,
      _0x12b456 = {};
    _0x12b456[_0x215aef(371)] = _0x215aef(801);
    _0x12b456[_0x215aef(1592)] = _0x215aef(1434);
    _0x12b456[_0x215aef(1260)] = _0x215aef(1432) + "t";
    const _0x246508 = _0x12b456,
      _0x3127c8 = {
        ticket: ""
      };
    _0x3127c8.ticket = "";
    _0x3127c8[_0x215aef(1434)] = "";
    _0x3127c8[_0x215aef(1709)] = "";
    let _0x1efe85 = _0x3127c8;
    try {
      const _0x315e18 = {};
      _0x315e18[_0x215aef(1449) + "l"] = _0x67f0b1;
      const _0x3ab58c = {
        fn: _0x215aef(843) + _0x215aef(1628) + _0x215aef(1269)
      };
      _0x3ab58c.fn = _0x215aef(843) + _0x215aef(1628) + _0x215aef(1269);
      _0x3ab58c[_0x215aef(1363) + "d"] = _0x246508[_0x215aef(371)];
      _0x3ab58c[_0x215aef(1296)] = _0x215aef(1285) + _0x215aef(1649) + "clien" + "t.100" + "10.co" + "m/mob" + "ileSe" + _0x215aef(737) + _0x215aef(588) + _0x215aef(448) + "orm/o" + _0x215aef(382) + "atLin" + _0x215aef(1206) + _0x215aef(1456);
      _0x3ab58c[_0x215aef(375) + _0x215aef(838) + "ms"] = _0x315e18;
      let _0x3268b5 = _0x3ab58c,
        {
          headers: _0x2e53d2,
          statusCode: _0xc9bef3
        } = await this[_0x215aef(753) + "st"](_0x3268b5);
      if (_0x2e53d2?.[_0x215aef(553) + _0x215aef(910)]) {
        let _0x5c1c17 = new URL(_0x2e53d2["locat" + _0x215aef(910)]),
          _0x320ed1 = _0x5c1c17[_0x215aef(375) + _0x215aef(838) + "ms"][_0x215aef(801)](_0x246508[_0x215aef(1592)]) || "02",
          _0x301b80 = _0x5c1c17[_0x215aef(375) + _0x215aef(838) + "ms"][_0x215aef(801)](_0x246508.KZDAq);
        !_0x301b80 && this[_0x215aef(924)](_0x215aef(1287) + _0x215aef(1640));
        const _0x39e557 = {
          loc: _0x2e53d2[_0x215aef(553) + _0x215aef(910)]
        };
        _0x39e557.loc = _0x2e53d2[_0x215aef(553) + _0x215aef(910)];
        _0x39e557[_0x215aef(1432) + "t"] = _0x301b80;
        _0x39e557[_0x215aef(1434)] = _0x320ed1;
        _0x1efe85 = _0x39e557;
      } else {
        this.log(_0x215aef(1287) + _0x215aef(1640) + "[" + _0xc9bef3 + "]");
      }
    } catch (_0x1ad196) {
      console[_0x215aef(924)](_0x1ad196);
    } finally {
      return _0x1efe85;
    }
  }
  async [_0x41d484(1312) + _0x41d484(441)](_0x1baaf4 = {}) {
    const _0x876027 = _0x41d484,
      _0x36999b = {};
    _0x36999b[_0x876027(1453)] = _0x876027(1312) + _0x876027(441);
    _0x36999b[_0x876027(1184)] = "post";
    const _0x11e0cc = _0x36999b;
    let _0x57b465 = _0x473183[_0x876027(1346) + _0x876027(377) + "ng"](32)[_0x876027(1067) + "erCas" + "e"]();
    try {
      const _0x303fb1 = {};
      _0x303fb1[_0x876027(1026) + "e"] = this[_0x876027(1026) + "e"];
      _0x303fb1.orderId = _0x57b465;
      const _0x486fb5 = {
        fn: _0x11e0cc[_0x876027(1453)]
      };
      _0x486fb5.fn = _0x11e0cc[_0x876027(1453)];
      _0x486fb5[_0x876027(1363) + "d"] = _0x11e0cc[_0x876027(1184)];
      _0x486fb5.url = _0x876027(1285) + _0x876027(1649) + _0x876027(356) + _0x876027(1707) + _0x876027(655) + _0x876027(1718) + "kcall" + _0x876027(817) + _0x876027(690) + _0x876027(1430) + _0x876027(1006) + _0x876027(660);
      _0x486fb5[_0x876027(1235)] = _0x303fb1;
      let _0x3fb5ee = _0x486fb5;
      await this.request(_0x3fb5ee);
    } catch (_0x1e4941) {
      console[_0x876027(924)](_0x1e4941);
    } finally {
      return _0x57b465;
    }
  }
  async [_0x41d484(1734) + _0x41d484(1615) + "eryCh" + "ance"](_0x15f789 = {}) {
    const _0x4c7d4e = _0x41d484,
      _0x142d12 = {};
    _0x142d12[_0x4c7d4e(1477)] = _0x4c7d4e(340);
    const _0x122d02 = _0x142d12;
    try {
      const _0x359cb5 = {
        fn: _0x4c7d4e(1734) + "28_qu" + _0x4c7d4e(1286) + _0x4c7d4e(861)
      };
      _0x359cb5.fn = _0x4c7d4e(1734) + "28_qu" + _0x4c7d4e(1286) + _0x4c7d4e(861);
      _0x359cb5[_0x4c7d4e(1363) + "d"] = "post";
      _0x359cb5[_0x4c7d4e(1296)] = "https" + _0x4c7d4e(1649) + _0x4c7d4e(356) + _0x4c7d4e(1707) + _0x4c7d4e(655) + _0x4c7d4e(666) + "Month" + _0x4c7d4e(1557) + _0x4c7d4e(676) + "h/que" + "ryCha" + _0x4c7d4e(599);
      let _0x576d31 = _0x359cb5,
        {
          result: _0x24b1ef,
          statusCode: _0x135e0f
        } = await this[_0x4c7d4e(753) + "st"](_0x576d31),
        _0x28a35e = _0x473183[_0x4c7d4e(801)](_0x24b1ef, _0x4c7d4e(1212) + "s", _0x135e0f);
      if (_0x28a35e == _0x122d02[_0x4c7d4e(1477)]) {
        let _0x3e7df0 = parseInt(_0x24b1ef?.[_0x4c7d4e(1247)]?.["allRe" + _0x4c7d4e(618) + _0x4c7d4e(344)] || 0);
        this[_0x4c7d4e(924)](_0x4c7d4e(1478) + _0x4c7d4e(930) + _0x3e7df0 + "次");
        let _0x9fdaae = false;
        while (_0x3e7df0-- > 0) {
          if (_0x9fdaae) {
            await _0x473183[_0x4c7d4e(1246)](8000);
          }
          _0x9fdaae = true;
          await this[_0x4c7d4e(1734) + _0x4c7d4e(1399) + _0x4c7d4e(1424)]();
        }
      } else {
        let _0x5f0ad2 = _0x24b1ef?.[_0x4c7d4e(460) + "ge"] || _0x24b1ef?.[_0x4c7d4e(823)] || "";
        this[_0x4c7d4e(924)](_0x4c7d4e(1478) + _0x4c7d4e(1338) + "次数失败[" + _0x28a35e + _0x4c7d4e(1309) + _0x5f0ad2);
      }
    } catch (_0x217f30) {
      console.log(_0x217f30);
    }
  }
  async [_0x41d484(1734) + "28_lo" + _0x41d484(1424)](_0x25736c = {}) {
    const _0x1603aa = _0x41d484,
      _0xc7da6b = {
        kBYWh: _0x1603aa(1734) + _0x1603aa(1399) + _0x1603aa(1424)
      };
    _0xc7da6b.kBYWh = _0x1603aa(1734) + _0x1603aa(1399) + _0x1603aa(1424);
    _0xc7da6b[_0x1603aa(635)] = _0x1603aa(1212) + "s";
    _0xc7da6b[_0x1603aa(1207)] = function (_0xaf14f7, _0xf3d2ef) {
      return _0xaf14f7 == _0xf3d2ef;
    };
    const _0x5721dc = _0xc7da6b;
    try {
      const _0x5d901b = {
        fn: _0x5721dc[_0x1603aa(449)],
        method: "post"
      };
      _0x5d901b.fn = _0x5721dc[_0x1603aa(449)];
      _0x5d901b.method = "post";
      _0x5d901b[_0x1603aa(1296)] = "https" + _0x1603aa(1649) + _0x1603aa(356) + _0x1603aa(1707) + _0x1603aa(655) + _0x1603aa(666) + _0x1603aa(734) + _0x1603aa(1557) + _0x1603aa(676) + _0x1603aa(1057) + _0x1603aa(792);
      let _0x54474d = _0x5d901b,
        {
          result: _0x1f0a5b,
          statusCode: _0x5b78eb
        } = await this[_0x1603aa(753) + "st"](_0x54474d),
        _0x5a45fe = _0x473183[_0x1603aa(801)](_0x1f0a5b, _0x5721dc[_0x1603aa(635)], _0x5b78eb);
      if (_0x5721dc[_0x1603aa(1207)](_0x5a45fe, "0000")) {
        let _0x2e5ced = _0x473183[_0x1603aa(801)](_0x1f0a5b?.["data"], _0x1603aa(379), -1);
        if (_0x1f0a5b?.["data"]?.["uuid"]) {
          await _0x473183[_0x1603aa(1246)](2000);
          await this[_0x1603aa(1734) + _0x1603aa(906) + _0x1603aa(1146) + "Recor" + "d"](_0x1f0a5b[_0x1603aa(1247)][_0x1603aa(522)]);
        } else {
          let _0x5ee980 = _0x1f0a5b?.[_0x1603aa(1247)]?.["message"] || _0x1f0a5b?.[_0x1603aa(1247)]?.["msg"] || "";
          this.log(_0x1603aa(1478) + _0x1603aa(1001) + "[" + _0x2e5ced + _0x1603aa(1309) + _0x5ee980);
        }
      } else {
        let _0xe7ef8a = _0x1f0a5b?.[_0x1603aa(460) + "ge"] || _0x1f0a5b?.[_0x1603aa(823)] || "";
        this[_0x1603aa(924)](_0x1603aa(1478) + "日抽奖失败" + "[" + _0x5a45fe + _0x1603aa(1309) + _0xe7ef8a);
      }
    } catch (_0x3d3493) {
      console[_0x1603aa(924)](_0x3d3493);
    }
  }
  async [_0x41d484(1734) + "28_wi" + _0x41d484(1146) + _0x41d484(1065) + "d"](_0x2577a1, _0x58824c = {}) {
    const _0x1d5441 = _0x41d484,
      _0x1e2d41 = {};
    _0x1e2d41[_0x1d5441(422)] = _0x1d5441(1734) + _0x1d5441(906) + _0x1d5441(1146) + _0x1d5441(1065) + "d";
    _0x1e2d41[_0x1d5441(1748)] = _0x1d5441(1401);
    _0x1e2d41[_0x1d5441(974)] = _0x1d5441(1212) + "s";
    _0x1e2d41.FEgsD = function (_0x2d71a8, _0x22e3fb) {
      return _0x2d71a8 == _0x22e3fb;
    };
    _0x1e2d41[_0x1d5441(1762)] = "0000";
    const _0x1acf90 = _0x1e2d41;
    try {
      const _0x40e81f = {};
      _0x40e81f["reque" + _0x1d5441(1288)] = _0x2577a1;
      const _0x2305c2 = {
        fn: _0x1acf90[_0x1d5441(422)]
      };
      _0x2305c2.fn = _0x1acf90[_0x1d5441(422)];
      _0x2305c2[_0x1d5441(1363) + "d"] = _0x1acf90.FyGkH;
      _0x2305c2[_0x1d5441(1296)] = _0x1d5441(1285) + _0x1d5441(1649) + "clien" + _0x1d5441(1707) + "10.co" + _0x1d5441(666) + _0x1d5441(734) + _0x1d5441(1557) + _0x1d5441(676) + _0x1d5441(1116) + _0x1d5441(1663) + _0x1d5441(1465);
      _0x2305c2[_0x1d5441(1235)] = _0x40e81f;
      let _0x1cf19b = _0x2305c2,
        {
          result: _0x40da5d,
          statusCode: _0x1008da
        } = await this.request(_0x1cf19b),
        _0xfcf083 = _0x473183[_0x1d5441(801)](_0x40da5d, _0x1acf90[_0x1d5441(974)], _0x1008da);
      if (_0x1acf90.FEgsD(_0xfcf083, _0x1acf90[_0x1d5441(1762)])) {
        let _0x167901 = _0x473183[_0x1d5441(801)](_0x40da5d?.[_0x1d5441(1247)], _0x1d5441(379), -1);
        if (_0x1acf90[_0x1d5441(985)](_0x167901, _0x1acf90[_0x1d5441(1762)])) {
          const _0x5eff2f = {};
          _0x5eff2f[_0x1d5441(778) + "y"] = true;
          this[_0x1d5441(924)](_0x1d5441(1478) + _0x1d5441(727) + _0x40da5d?.[_0x1d5441(1247)]?.[_0x1d5441(1742) + _0x1d5441(1021)]?.[_0x1d5441(1744) + "ce"](/\t/g, ""), _0x5eff2f);
        } else {
          let _0x217601 = _0x40da5d?.[_0x1d5441(1247)]?.[_0x1d5441(460) + "ge"] || _0x40da5d?.[_0x1d5441(1247)]?.[_0x1d5441(823)] || "";
          this.log("查询28日" + _0x1d5441(1741) + _0x1d5441(1022) + _0x167901 + _0x1d5441(1309) + _0x217601);
        }
      } else {
        let _0x4a4611 = _0x40da5d?.[_0x1d5441(460) + "ge"] || _0x40da5d?.["msg"] || "";
        this.log("查询28日" + _0x1d5441(1741) + "结果失败[" + _0xfcf083 + _0x1d5441(1309) + _0x4a4611);
      }
    } catch (_0x4c9df8) {
      console[_0x1d5441(924)](_0x4c9df8);
    }
  }
  async [_0x41d484(659) + _0x41d484(767) + _0x41d484(703)](_0x55ea7a, _0x516954, _0x230c53, _0x5e3a33 = {}) {
    const _0x5b1aa5 = _0x41d484,
      _0x5e3172 = {};
    _0x5e3172[_0x5b1aa5(820)] = _0x5b1aa5(659) + _0x5b1aa5(767) + _0x5b1aa5(703);
    _0x5e3172.wIZKh = _0x5b1aa5(1401);
    _0x5e3172[_0x5b1aa5(603)] = _0x5b1aa5(1285) + _0x5b1aa5(890) + "ay.10" + "010.c" + "om";
    _0x5e3172[_0x5b1aa5(842)] = "https" + _0x5b1aa5(890) + _0x5b1aa5(789) + _0x5b1aa5(710) + _0x5b1aa5(518) + "-mps-" + _0x5b1aa5(971) + "b/";
    _0x5e3172[_0x5b1aa5(647)] = _0x5b1aa5(719) + _0x5b1aa5(1505);
    _0x5e3172[_0x5b1aa5(477)] = "status";
    _0x5e3172[_0x5b1aa5(1130)] = function (_0x2a077a, _0x13275d) {
      return _0x2a077a == _0x13275d;
    };
    const _0x16fedc = _0x5e3172;
    try {
      let _0xfe1fad = {
          fn: _0x16fedc.tEnMb,
          method: _0x16fedc[_0x5b1aa5(663)],
          url: _0x5b1aa5(1285) + "://ep" + "ay.10" + _0x5b1aa5(710) + _0x5b1aa5(558) + _0x5b1aa5(1668) + _0x5b1aa5(396) + _0x5b1aa5(1353) + _0x5b1aa5(643),
          headers: {
            Origin: _0x16fedc.OGmDM,
            Referer: _0x230c53
          },
          json: {
            response_type: _0x5b1aa5(442),
            client_id: _0x3047ab,
            redirect_uri: _0x16fedc.Zgaag,
            login_hint: {
              credential_type: _0x16fedc[_0x5b1aa5(647)],
              credential: _0x55ea7a,
              st_type: _0x516954,
              force_logout: true,
              source: _0x5b1aa5(883) + _0x5b1aa5(342)
            },
            device_info: {
              token_id: "china" + _0x5b1aa5(507) + _0x5b1aa5(1356) + "-" + Date[_0x5b1aa5(1135)]() + "-" + _0x473183[_0x5b1aa5(1346) + _0x5b1aa5(377) + "ng"](13),
              trace_id: _0x473183["rando" + _0x5b1aa5(377) + "ng"](32)
            }
          }
        },
        {
          result: _0x11cc57
        } = await this.request(_0xfe1fad),
        _0x691e29 = _0x473183[_0x5b1aa5(801)](_0x11cc57, _0x16fedc[_0x5b1aa5(477)], -1);
      if (_0x16fedc.zEqWl(_0x691e29, 200)) {
        await this[_0x5b1aa5(659) + _0x5b1aa5(767) + _0x5b1aa5(784)]();
      } else {
        let _0x3cac97 = _0x11cc57?.[_0x5b1aa5(460) + "ge"] || _0x11cc57?.[_0x5b1aa5(823)] || "";
        this.log(_0x5b1aa5(1123) + _0x5b1aa5(696) + "SION失" + "败[" + _0x691e29 + "]: " + _0x3cac97);
      }
    } catch (_0x56b119) {
      console[_0x5b1aa5(924)](_0x56b119);
    }
  }
  async ["ttlxj" + _0x41d484(767) + _0x41d484(784)](_0x2913da = {}) {
    const _0x3d053c = _0x41d484,
      _0x41f291 = {
        afrMd: _0x3d053c(1401),
        QMbYE: _0x3d053c(379)
      };
    _0x41f291.afrMd = _0x3d053c(1401);
    _0x41f291.QMbYE = _0x3d053c(379);
    _0x41f291[_0x3d053c(408)] = function (_0x26103c, _0x519883) {
      return _0x26103c == _0x519883;
    };
    _0x41f291[_0x3d053c(1517)] = _0x3d053c(340);
    _0x41f291[_0x3d053c(775)] = function (_0x1295c7, _0x11b23d) {
      return _0x1295c7 == _0x11b23d;
    };
    _0x41f291[_0x3d053c(1300)] = _0x3d053c(1426) + _0x3d053c(571);
    const _0x573d7d = _0x41f291;
    try {
      let _0x1f4911 = {
          fn: _0x3d053c(659) + _0x3d053c(767) + _0x3d053c(784),
          method: _0x573d7d[_0x3d053c(1732)],
          url: _0x3d053c(1285) + _0x3d053c(890) + _0x3d053c(789) + _0x3d053c(710) + "om/ps" + _0x3d053c(1664) + _0x3d053c(1408) + "-fron" + _0x3d053c(1651) + _0x3d053c(653) + _0x3d053c(1041),
          headers: {
            bizchannelinfo: this[_0x3d053c(917) + "izcha" + "nneli" + "nfo"]()
          }
        },
        {
          result: _0x490b24
        } = await this[_0x3d053c(753) + "st"](_0x1f4911),
        _0x24b67d = _0x473183[_0x3d053c(801)](_0x490b24, _0x573d7d[_0x3d053c(1148)], -1);
      if (_0x573d7d.QPyJm(_0x24b67d, _0x573d7d[_0x3d053c(1517)])) {
        let {
          mobile: _0x24d385,
          sessionId: _0x27c8bc,
          tokenId: _0x1e4cca,
          userId: _0x439c22
        } = _0x490b24?.["data"]?.[_0x3d053c(1674) + _0x3d053c(1522)];
        const _0x43bfcd = {};
        _0x43bfcd[_0x3d053c(814) + "onId"] = _0x27c8bc;
        _0x43bfcd[_0x3d053c(360) + "Id"] = _0x1e4cca;
        _0x43bfcd[_0x3d053c(773) + "d"] = _0x439c22;
        Object.assign(this, _0x43bfcd);
        await this[_0x3d053c(659) + "_user" + _0x3d053c(908) + _0x3d053c(1522)]();
        await this[_0x3d053c(659) + "_quer" + _0x3d053c(1192) + _0x3d053c(1378)]();
      } else {
        if (_0x573d7d[_0x3d053c(775)](_0x24b67d, _0x573d7d.rLFwD)) {
          let _0x357a02 = _0x490b24?.[_0x3d053c(1247)]?.[_0x3d053c(508) + _0x3d053c(1443) + _0x3d053c(1625) + "l"];
          await this[_0x3d053c(659) + _0x3d053c(1008) + "n"](_0x357a02);
        } else {
          let _0x4ca1ab = _0x490b24?.[_0x3d053c(673) + _0x3d053c(427)] || _0x490b24?.[_0x3d053c(823)] || "";
          this[_0x3d053c(924)](_0x3d053c(1123) + "获取tok" + _0x3d053c(868) + "败[" + _0x24b67d + _0x3d053c(1309) + _0x4ca1ab);
        }
      }
    } catch (_0x8bbe87) {
      console[_0x3d053c(924)](_0x8bbe87);
    }
  }
  async [_0x41d484(659) + "_logi" + "n"](_0x1cd643, _0x172994 = {}) {
    const _0x47b2da = _0x41d484,
      _0xf26dd7 = {};
    _0xf26dd7[_0x47b2da(828)] = _0x47b2da(659) + _0x47b2da(1008) + "n";
    _0xf26dd7[_0x47b2da(1508)] = _0x47b2da(801);
    _0xf26dd7[_0x47b2da(1635)] = _0x47b2da(442);
    const _0x1ee52b = _0xf26dd7;
    try {
      _0x1cd643 += _0x47b2da(1285) + "://ep" + _0x47b2da(789) + _0x47b2da(710) + "om/ci" + _0x47b2da(1671) + _0x47b2da(1177) + _0x47b2da(1143) + _0x47b2da(752) + _0x47b2da(433) + _0x47b2da(362) + _0x47b2da(678) + _0x51e2c0 + ("&bizChanne" + _0x47b2da(1340) + "=") + _0x172ae7;
      let _0x2380b9 = {
          fn: _0x1ee52b.ynmoN,
          method: _0x1ee52b[_0x47b2da(1508)],
          url: _0x1cd643
        },
        {
          headers: _0x4b838d,
          statusCode: _0x4b98ee
        } = await this[_0x47b2da(753) + "st"](_0x2380b9);
      if (_0x4b838d?.[_0x47b2da(553) + "ion"]) {
        let _0x39ff77 = new URL(_0x4b838d[_0x47b2da(553) + "ion"]);
        this[_0x47b2da(544)] = _0x39ff77[_0x47b2da(375) + _0x47b2da(838) + "ms"][_0x47b2da(801)](_0x1ee52b[_0x47b2da(1635)]);
        this.rptId ? await this["ttlxj" + _0x47b2da(767) + _0x47b2da(784)]() : this[_0x47b2da(924)](_0x47b2da(1123) + _0x47b2da(533) + "id失败");
      } else {
        this[_0x47b2da(924)](_0x47b2da(1123) + _0x47b2da(533) + _0x47b2da(1115) + _0x4b98ee + "]");
      }
    } catch (_0x58f0f6) {
      console.log(_0x58f0f6);
    }
  }
  async ["ttlxj" + _0x41d484(542) + _0x41d484(908) + _0x41d484(1522)](_0x50e280 = {}) {
    const _0x3d5115 = _0x41d484,
      _0x3abd20 = {
        miYFu: "ttlxj_userDrawI" + _0x3d5115(1522)
      };
    _0x3abd20.miYFu = "ttlxj_userDrawI" + _0x3d5115(1522);
    _0x3abd20[_0x3d5115(579)] = "post";
    _0x3abd20[_0x3d5115(1561)] = _0x3d5115(379);
    _0x3abd20[_0x3d5115(1536)] = _0x3d5115(340);
    _0x3abd20[_0x3d5115(1428)] = function (_0x4b2f0f, _0xf05c1f) {
      return _0x4b2f0f + _0xf05c1f;
    };
    _0x3abd20[_0x3d5115(651)] = function (_0x3202d0, _0x4506e5) {
      return _0x3202d0 == _0x4506e5;
    };
    _0x3abd20[_0x3d5115(812)] = function (_0x5a03ea, _0x84a649) {
      return _0x5a03ea % _0x84a649;
    };
    const _0x48d24e = _0x3abd20;
    try {
      let _0x50768d = {
          fn: _0x48d24e[_0x3d5115(513)],
          method: _0x48d24e.lATMn,
          url: "https" + _0x3d5115(890) + _0x3d5115(789) + _0x3d5115(710) + "om/ci" + _0x3d5115(1671) + "-part" + _0x3d5115(1631) + _0x3d5115(698) + "/ttlx" + "j/use" + _0x3d5115(627) + _0x3d5115(1657),
          headers: {
            bizchannelinfo: this[_0x3d5115(917) + "izcha" + _0x3d5115(896) + _0x3d5115(1522)](),
            authinfo: this[_0x3d5115(1731) + _0x3d5115(1397) + "uthin" + "fo"]()
          }
        },
        {
          result: _0x1c7f1e
        } = await this[_0x3d5115(753) + "st"](_0x50768d),
        _0x39664a = _0x473183[_0x3d5115(801)](_0x1c7f1e, _0x48d24e[_0x3d5115(1561)], -1);
      if (_0x39664a == _0x48d24e.VUdpP) {
        let _0x3335bc = _0x1c7f1e?.[_0x3d5115(1247)]?.[_0x3d5115(835) + _0x3d5115(1498)],
          _0x1dfc9b = _0x48d24e.BmPJh(_0x3d5115(538), _0x3335bc),
          _0x3f0314 = _0x1c7f1e?.[_0x3d5115(1247)]?.[_0x1dfc9b] == "1";
        const _0x3ad3b2 = {};
        _0x3ad3b2[_0x3d5115(778) + "y"] = true;
        this[_0x3d5115(924)](_0x3d5115(1123) + "今天" + (_0x3f0314 ? "未" : "已") + "打卡", _0x3ad3b2);
        if (_0x3f0314) {
          let _0x164ef6 = new Date()[_0x3d5115(725) + "y"]();
          _0x48d24e.nEeYx(_0x48d24e[_0x3d5115(812)](_0x164ef6, 7), 0) ? await this["ttlxj" + _0x3d5115(1627) + "yDraw" + _0x3d5115(1047)]("C") : await this["ttlxj" + _0x3d5115(1627) + _0x3d5115(1084) + "New"]("B");
        }
      } else {
        let _0x17b9ee = _0x1c7f1e?.[_0x3d5115(823)] || "";
        this.log(_0x3d5115(1123) + _0x3d5115(991) + _0x39664a + _0x3d5115(1309) + _0x17b9ee);
      }
    } catch (_0x42ac70) {
      console[_0x3d5115(924)](_0x42ac70);
    }
  }
  async [_0x41d484(659) + _0x41d484(1627) + _0x41d484(1084) + "New"](_0x1fc27b, _0x37bed1 = {}) {
    const _0x41aac4 = _0x41d484,
      _0x598c73 = {};
    _0x598c73[_0x41aac4(1669)] = "ttlxj" + _0x41aac4(1627) + "yDraw" + _0x41aac4(1047);
    _0x598c73[_0x41aac4(1171)] = _0x41aac4(1401);
    _0x598c73.UuTZr = _0x41aac4(421) + _0x41aac4(821) + _0x41aac4(1157);
    _0x598c73[_0x41aac4(631)] = _0x41aac4(379);
    _0x598c73.rgwEw = function (_0x576119, _0x5a4363) {
      return _0x576119 == _0x5a4363;
    };
    _0x598c73.hKPPz = function (_0x2225de, _0x102be9) {
      return _0x2225de + _0x102be9;
    };
    const _0x19b2e6 = _0x598c73;
    try {
      let _0x2b20a1 = {
          fn: _0x19b2e6[_0x41aac4(1669)],
          method: _0x19b2e6.TwZoL,
          url: _0x41aac4(1285) + _0x41aac4(890) + "ay.10" + "010.c" + _0x41aac4(518) + _0x41aac4(1671) + "-part" + _0x41aac4(1631) + "nt/v1" + _0x41aac4(334) + _0x41aac4(1667) + "fyDra" + _0x41aac4(851),
          headers: {
            bizchannelinfo: this["get_b" + _0x41aac4(946) + _0x41aac4(896) + _0x41aac4(1522)](),
            authinfo: this["get_e" + _0x41aac4(1397) + _0x41aac4(1507) + "fo"]()
          },
          form: {
            drawType: _0x1fc27b,
            bizFrom: _0x51e2c0,
            activityId: _0x19b2e6[_0x41aac4(1191)]
          }
        },
        {
          result: _0x56e1bc
        } = await this[_0x41aac4(753) + "st"](_0x2b20a1),
        _0x6098a1 = _0x473183[_0x41aac4(801)](_0x56e1bc, _0x19b2e6[_0x41aac4(631)], -1);
      if (_0x19b2e6[_0x41aac4(505)](_0x6098a1, _0x41aac4(340)) && _0x56e1bc?.["data"]?.[_0x41aac4(1622) + _0x41aac4(907)] == 0) {
        let _0x24a104 = _0x56e1bc?.["data"]?.[_0x41aac4(1276) + "TipCo" + _0x41aac4(374)]?.["replace"](/xx/, _0x56e1bc?.["data"]?.["amount"]);
        const _0x34f51a = {
          notify: true
        };
        this[_0x41aac4(924)](_0x19b2e6.hKPPz(_0x41aac4(1123) + _0x41aac4(393), _0x24a104), _0x34f51a);
      } else {
        let _0x1c1864 = _0x56e1bc?.[_0x41aac4(1247)]?.[_0x41aac4(1622) + _0x41aac4(1150)] || _0x56e1bc?.[_0x41aac4(823)] || "";
        this[_0x41aac4(924)]("天天领现金" + _0x41aac4(1151) + (_0x56e1bc?.[_0x41aac4(1247)]?.[_0x41aac4(1622) + "nCode"] || _0x6098a1) + "]: " + _0x1c1864);
      }
    } catch (_0x20765d) {
      console.log(_0x20765d);
    }
  }
  async [_0x41d484(659) + "_h"](_0x2559c0 = {}) {
    const _0x1c3a21 = _0x41d484,
      _0x10e0c0 = {};
    _0x10e0c0[_0x1c3a21(736)] = _0x1c3a21(659) + "_h";
    _0x10e0c0[_0x1c3a21(1761)] = "post";
    _0x10e0c0[_0x1c3a21(444)] = _0x1c3a21(421) + _0x1c3a21(821) + _0x1c3a21(1157);
    const _0x32f348 = _0x10e0c0;
    try {
      let _0x2925fa = {
        fn: _0x32f348[_0x1c3a21(736)],
        method: _0x32f348[_0x1c3a21(1761)],
        url: _0x1c3a21(1285) + _0x1c3a21(890) + _0x1c3a21(789) + "010.c" + "om/ci" + _0x1c3a21(1671) + _0x1c3a21(1177) + _0x1c3a21(1631) + "nt/v1" + _0x1c3a21(334) + _0x1c3a21(993) + "p",
        headers: {
          bizchannelinfo: this[_0x1c3a21(917) + _0x1c3a21(946) + _0x1c3a21(896) + "nfo"](),
          authinfo: this[_0x1c3a21(1731) + "pay_a" + _0x1c3a21(1507) + "fo"]()
        },
        form: {
          bizFrom: _0x51e2c0,
          activityId: _0x32f348[_0x1c3a21(444)],
          uid: _0xbf394d
        }
      };
      await this[_0x1c3a21(753) + "st"](_0x2925fa);
    } catch (_0x4556ba) {
      console[_0x1c3a21(924)](_0x4556ba);
    }
  }
  async [_0x41d484(659) + _0x41d484(1696) + _0x41d484(1192) + _0x41d484(1378)](_0x78373f = {}) {
    const _0xb312b1 = _0x41d484,
      _0x427688 = {
        zPsuP: function (_0x23e8f6, _0x47f3df) {
          return _0x23e8f6 == _0x47f3df;
        },
        mAqyy: function (_0x23ad6d, _0x1cdf32) {
          return _0x23ad6d < _0x1cdf32;
        },
        MzGIG: function (_0x1098bb, _0xdd6dbc) {
          return _0x1098bb + _0xdd6dbc;
        },
        OyBfd: function (_0x5262e0, _0x55efe6) {
          return _0x5262e0(_0x55efe6);
        },
        BGKft: "post",
        KSqEf: _0xb312b1(379),
        eUZsX: "0000",
        sysLX: function (_0x24b7bc, _0x5cddbb) {
          return _0x24b7bc / _0x5cddbb;
        },
        nbvuH: function (_0x355413, _0x1cecaa) {
          return _0x355413 + _0x1cecaa;
        },
        eRDIx: _0xb312b1(429) + _0xb312b1(1198),
        kxuMB: function (_0x1058ac, _0xaa39ff) {
          return _0x1058ac < _0xaa39ff;
        },
        ViRDw: function (_0x1a33a5, _0x3186e5) {
          return _0x1a33a5 - _0x3186e5;
        },
        bcpPW: function (_0x25a1e1, _0x5e7fd1) {
          return _0x25a1e1 * _0x5e7fd1;
        },
        qhFuD: function (_0x1d55cb, _0x5ee524) {
          return _0x1d55cb * _0x5ee524;
        },
        kPYSc: function (_0x1c6cb8, _0x43e147) {
          return _0x1c6cb8 * _0x43e147;
        }
      };
    try {
      let _0x2842f3 = {
          fn: _0xb312b1(659) + _0xb312b1(1696) + "yAvai" + _0xb312b1(1378),
          method: _0x427688[_0xb312b1(1081)],
          url: "https" + _0xb312b1(890) + _0xb312b1(789) + _0xb312b1(710) + _0xb312b1(518) + "-mcss" + _0xb312b1(1177) + "y-fro" + _0xb312b1(698) + "/ttlx" + _0xb312b1(1232) + _0xb312b1(454) + "ilabl" + "e",
          headers: {
            bizchannelinfo: this["get_b" + _0xb312b1(946) + _0xb312b1(896) + "nfo"](),
            authinfo: this[_0xb312b1(1731) + "pay_a" + _0xb312b1(1507) + "fo"]()
          }
        },
        {
          result: _0x284680
        } = await this[_0xb312b1(753) + "st"](_0x2842f3),
        _0x44ea94 = _0x473183.get(_0x284680, _0x427688[_0xb312b1(1108)], -1);
      if (_0x427688.zPsuP(_0x44ea94, _0x427688[_0xb312b1(668)]) && _0x284680?.[_0xb312b1(1247)]?.[_0xb312b1(1622) + _0xb312b1(907)] == 0) {
        let _0x2676c4 = _0x284680?.[_0xb312b1(1247)]?.[_0xb312b1(937) + _0xb312b1(1682) + _0xb312b1(1548)] || 0;
        const _0x1e0008 = {
          notify: true
        };
        this.log(_0xb312b1(1736) + ": " + _0x427688[_0xb312b1(1745)](_0x2676c4, 100).toFixed(2) + "元", _0x1e0008);
        let _0x228f4c = [],
          _0x1f47b8 = Date.now();
        for (let _0x49b591 of _0x284680?.[_0xb312b1(1247)]?.["prize" + _0xb312b1(827)]?.["filter"](_0x54a72b => _0x54a72b[_0xb312b1(1212) + "s"] == "A")) {
          let _0x243947 = _0x49b591[_0xb312b1(766) + "me"],
            _0x460771 = new Date(_0x427688[_0xb312b1(977)](_0x427688[_0xb312b1(977)](_0x427688[_0xb312b1(977)](_0x427688[_0xb312b1(550)](_0x243947.slice(0, 4), "-"), _0x243947[_0xb312b1(1764)](4, 6)), "-") + _0x243947[_0xb312b1(1764)](6, 8), _0x427688[_0xb312b1(1153)])),
            _0x3df0f3 = _0x460771[_0xb312b1(757) + "me"]();
          if (_0x427688[_0xb312b1(640)](_0x427688[_0xb312b1(1704)](_0x3df0f3, _0x1f47b8), _0x427688[_0xb312b1(1577)](_0x427688[_0xb312b1(1436)](_0x427688[_0xb312b1(1633)](_0xc55fa4 * 24, 60), 60), 1000))) {
            let _0x1fdf83 = _0x473183[_0xb312b1(341)](_0xb312b1(743) + _0xb312b1(1558), _0x3df0f3);
            const _0x26c54f = {};
            _0x26c54f["times" + _0xb312b1(1119)] = _0x3df0f3;
            _0x26c54f[_0xb312b1(329)] = _0x1fdf83;
            _0x26c54f[_0xb312b1(1163) + "t"] = _0x49b591[_0xb312b1(1163) + "t"];
            _0x228f4c[_0xb312b1(871)](_0x26c54f);
          }
        }
        if (_0x228f4c[_0xb312b1(1472) + "h"]) {
          const _0xb748fa = {};
          _0xb748fa[_0xb312b1(831) + _0xb312b1(1119)] = 0;
          let _0x48c13b = _0xb748fa,
            _0x5e5d52 = _0x228f4c[_0xb312b1(877) + "e"](function (_0x4a4917, _0x106280) {
              const _0x1e8ea0 = _0xb312b1;
              (_0x427688.zPsuP(_0x48c13b[_0x1e8ea0(831) + _0x1e8ea0(1119)], 0) || _0x427688[_0x1e8ea0(397)](_0x106280[_0x1e8ea0(831) + _0x1e8ea0(1119)], _0x48c13b[_0x1e8ea0(831) + _0x1e8ea0(1119)])) && (_0x48c13b = _0x106280);
              return _0x427688.MzGIG(_0x4a4917, _0x427688[_0x1e8ea0(395)](parseFloat, _0x106280[_0x1e8ea0(1163) + "t"]));
            }, 0);
          const _0x5eab1e = {
            notify: true
          };
          this.log(_0xc55fa4 + ("天内过期立" + _0xb312b1(763)) + _0x5e5d52[_0xb312b1(440) + "ed"](2) + "元", _0x5eab1e);
          const _0x8af6e3 = {};
          _0x8af6e3[_0xb312b1(778) + "y"] = true;
          this.log(_0xb312b1(495) + _0xb312b1(763) + _0x48c13b[_0xb312b1(1163) + "t"] + _0xb312b1(802) + _0x48c13b.date + "过期", _0x8af6e3);
        } else {
          const _0x4b15d3 = {
            notify: true
          };
          this[_0xb312b1(924)](_0xc55fa4 + "天内没有过期的立减金", _0x4b15d3);
        }
      } else {
        let _0x2cf42b = _0x284680?.["data"]?.[_0xb312b1(1622) + "nMsg"] || _0x284680?.["msg"] || "";
        this.log(_0xb312b1(1123) + _0xb312b1(1151) + (_0x284680?.[_0xb312b1(1247)]?.[_0xb312b1(1622) + "nCode"] || _0x44ea94) + _0xb312b1(1309) + _0x2cf42b);
      }
    } catch (_0x55f813) {
      console[_0xb312b1(924)](_0x55f813);
    }
  }
  async ["epay_28_au" + _0x41d484(641) + "ck"](_0xdc0df2 = {}) {
    const _0x42ddfe = _0x41d484,
      _0x11235c = {};
    _0x11235c[_0x42ddfe(1118)] = "epay_" + _0x42ddfe(596) + _0x42ddfe(641) + "ck";
    _0x11235c.CsxTB = _0x42ddfe(1401);
    _0x11235c.lpefL = "code";
    _0x11235c[_0x42ddfe(326)] = function (_0x6ccf70, _0x34cafb) {
      return _0x6ccf70 == _0x34cafb;
    };
    _0x11235c[_0x42ddfe(791)] = "0000";
    _0x11235c[_0x42ddfe(1358)] = _0x42ddfe(1426) + "00100";
    const _0x32f38b = _0x11235c;
    try {
      let _0x5b5fc9 = {
          fn: _0x32f38b[_0x42ddfe(1118)],
          method: _0x32f38b[_0x42ddfe(1746)],
          url: _0x42ddfe(1285) + _0x42ddfe(890) + _0x42ddfe(789) + _0x42ddfe(710) + _0x42ddfe(1220) + "-pafs" + _0x42ddfe(1408) + _0x42ddfe(1567) + "t/v1/" + _0x42ddfe(653) + _0x42ddfe(1041),
          headers: {
            bizchannelinfo: this["get_b" + _0x42ddfe(946) + _0x42ddfe(896) + _0x42ddfe(1522)]()
          }
        },
        {
          result: _0x470146
        } = await this[_0x42ddfe(753) + "st"](_0x5b5fc9),
        _0x3b0050 = _0x473183[_0x42ddfe(801)](_0x470146, _0x32f38b.lpefL, -1);
      if (_0x32f38b.odBCB(_0x3b0050, _0x32f38b[_0x42ddfe(791)])) {
        let {
          mobile: _0x2a75c4,
          sessionId: _0x50fb6a,
          tokenId: _0x13810e,
          userId: _0x4e66fa
        } = _0x470146?.["data"]?.[_0x42ddfe(1674) + _0x42ddfe(1522)];
        const _0x469ea2 = {};
        _0x469ea2[_0x42ddfe(814) + "onId"] = _0x50fb6a;
        _0x469ea2[_0x42ddfe(360) + "Id"] = _0x13810e;
        _0x469ea2[_0x42ddfe(773) + "d"] = _0x4e66fa;
        Object.assign(this, _0x469ea2);
        await this[_0x42ddfe(764) + _0x42ddfe(1615) + _0x42ddfe(1351) + "erPag" + "e"]();
      } else {
        if (_0x32f38b[_0x42ddfe(326)](_0x3b0050, _0x32f38b[_0x42ddfe(1358)])) {
          let _0x110e5d = _0x470146?.[_0x42ddfe(1247)]?.[_0x42ddfe(508) + "h_log" + _0x42ddfe(1625) + "l"];
          await this[_0x42ddfe(764) + _0x42ddfe(1399) + "gin"](_0x110e5d);
        } else {
          let _0xd0310e = _0x470146?.[_0x42ddfe(673) + "side"] || _0x470146?.[_0x42ddfe(823)] || "";
          this.log(_0x42ddfe(308) + _0x42ddfe(310) + _0x42ddfe(868) + "败[" + _0x3b0050 + _0x42ddfe(1309) + _0xd0310e);
        }
      }
    } catch (_0x2c027a) {
      console[_0x42ddfe(924)](_0x2c027a);
    }
  }
  async [_0x41d484(764) + _0x41d484(1399) + _0x41d484(1007)](_0x42eb49, _0x595864 = {}) {
    const _0xf51ce8 = _0x41d484,
      _0x4777d5 = {};
    _0x4777d5[_0xf51ce8(951)] = _0xf51ce8(1114) + "M";
    _0x4777d5[_0xf51ce8(670)] = _0xf51ce8(764) + _0xf51ce8(1399) + _0xf51ce8(1007);
    _0x4777d5[_0xf51ce8(1147)] = _0xf51ce8(801);
    _0x4777d5[_0xf51ce8(1187)] = _0xf51ce8(442);
    const _0x2f017f = _0x4777d5;
    try {
      let _0x121fc0 = _0x473183[_0xf51ce8(341)](_0x2f017f[_0xf51ce8(951)]) + _0xf51ce8(1025);
      _0x42eb49 += _0xf51ce8(1285) + "://ep" + _0xf51ce8(789) + _0xf51ce8(710) + _0xf51ce8(518) + _0xf51ce8(1671) + "-part" + "y-web" + _0xf51ce8(1435) + _0xf51ce8(950) + _0xf51ce8(1566) + _0xf51ce8(1051) + "me=" + _0x121fc0 + (_0xf51ce8(484) + _0xf51ce8(1283) + _0xf51ce8(1111) + _0xf51ce8(383) + _0xf51ce8(1100) + _0xf51ce8(623) + _0xf51ce8(410) + _0xf51ce8(1484) + "ype=W" + _0xf51ce8(1063));
      const _0x440cbd = {
        fn: _0x2f017f[_0xf51ce8(670)]
      };
      _0x440cbd.fn = _0x2f017f[_0xf51ce8(670)];
      _0x440cbd[_0xf51ce8(1363) + "d"] = _0x2f017f[_0xf51ce8(1147)];
      _0x440cbd[_0xf51ce8(1296)] = _0x42eb49;
      let _0x4fed1e = _0x440cbd,
        {
          headers: _0x163e72,
          statusCode: _0x37479f
        } = await this.request(_0x4fed1e);
      if (_0x163e72?.[_0xf51ce8(553) + _0xf51ce8(910)]) {
        let _0x280565 = new URL(_0x163e72[_0xf51ce8(553) + _0xf51ce8(910)]);
        this[_0xf51ce8(544)] = _0x280565[_0xf51ce8(375) + "hPara" + "ms"][_0xf51ce8(801)](_0x2f017f[_0xf51ce8(1187)]);
        this[_0xf51ce8(544)] ? await this[_0xf51ce8(764) + _0xf51ce8(596) + _0xf51ce8(641) + "ck"]() : this[_0xf51ce8(924)]("联通支付日" + _0xf51ce8(533) + _0xf51ce8(1421));
      } else {
        this[_0xf51ce8(924)](_0xf51ce8(308) + _0xf51ce8(533) + _0xf51ce8(1115) + _0x37479f + "]");
      }
    } catch (_0x582287) {
      console[_0xf51ce8(924)](_0x582287);
    }
  }
  async [_0x41d484(764) + _0x41d484(1615) + _0x41d484(1351) + _0x41d484(1441) + "e"](_0x58351b = {}) {
    const _0x109217 = _0x41d484,
      _0x576dd7 = {
        FtswH: "post"
      };
    _0x576dd7.FtswH = "post";
    _0x576dd7[_0x109217(1601)] = _0x109217(379);
    _0x576dd7[_0x109217(560)] = function (_0x1c3014, _0x307852) {
      return _0x1c3014 == _0x307852;
    };
    _0x576dd7.legJP = _0x109217(340);
    const _0x4e8b7a = _0x576dd7;
    try {
      let _0xaad73c = _0x473183[_0x109217(341)](_0x109217(1114) + "M") + _0x109217(1025);
      const _0x1cb6f6 = {
        templateName: _0xaad73c
      };
      let _0x25e434 = {
          fn: _0x109217(764) + _0x109217(1615) + _0x109217(1351) + _0x109217(1441) + "e",
          method: _0x4e8b7a[_0x109217(1279)],
          url: _0x109217(1285) + _0x109217(890) + _0x109217(789) + "010.c" + _0x109217(518) + _0x109217(1671) + _0x109217(1177) + _0x109217(1631) + "nt/v1" + _0x109217(1435) + _0x109217(563) + _0x109217(1094) + _0x109217(928) + "ge",
          headers: {
            bizchannelinfo: this[_0x109217(917) + _0x109217(946) + "nneli" + _0x109217(1522)](),
            authinfo: this[_0x109217(1731) + _0x109217(1397) + "uthin" + "fo"]()
          },
          form: _0x1cb6f6
        },
        {
          result: _0x59f570
        } = await this[_0x109217(753) + "st"](_0x25e434),
        _0x2119db = _0x473183.get(_0x59f570, _0x4e8b7a[_0x109217(1601)], -1);
      if (_0x4e8b7a.EloFB(_0x2119db, _0x4e8b7a.legJP) && _0x4e8b7a.EloFB(_0x59f570?.["data"]?.["retur" + _0x109217(907)], 0)) {
        for (let _0x4a9f1d of _0x59f570?.["data"]?.["prize" + _0x109217(827)]?.["rainb" + _0x109217(916) + "ldInf" + "os"] || []) {
          _0x4a9f1d?.[_0x109217(547) + "owUni" + _0x109217(511) + "s"]?.[0]?.[_0x109217(1250) + _0x109217(1414) + _0x109217(386)] && (await this[_0x109217(764) + _0x109217(707) + _0x109217(400) + "aw"](_0x4a9f1d[_0x109217(547) + _0x109217(1010) + _0x109217(511) + "s"][0]));
          if (_0x4a9f1d?.[_0x109217(327) + _0x109217(1126) + _0x109217(1046)]) {
            await this[_0x109217(764) + _0x109217(1615) + _0x109217(1418) + "ddleU" + _0x109217(970)](_0xaad73c, _0x4a9f1d["mould" + _0x109217(1021)]);
            break;
          }
        }
      } else {
        let _0x155a34 = _0x59f570?.[_0x109217(460) + "ge"] || _0x59f570?.["msg"] || "";
        this[_0x109217(924)](_0x109217(308) + _0x109217(1031) + "败[" + _0x2119db + _0x109217(1309) + _0x155a34);
      }
    } catch (_0x4635e0) {
      console[_0x109217(924)](_0x4635e0);
    }
  }
  async [_0x41d484(764) + _0x41d484(1615) + _0x41d484(1418) + _0x41d484(1328) + _0x41d484(970)](_0x4cf8cf, _0x4417be, _0x305976 = {}) {
    const _0x476888 = _0x41d484,
      _0x1a9aaa = {};
    _0x1a9aaa[_0x476888(1297)] = _0x476888(764) + _0x476888(1615) + _0x476888(1418) + "ddleU" + _0x476888(970);
    _0x1a9aaa[_0x476888(807)] = _0x476888(1401);
    _0x1a9aaa[_0x476888(519)] = _0x476888(379);
    _0x1a9aaa[_0x476888(1357)] = function (_0x4cfc64, _0x29b154) {
      return _0x4cfc64 == _0x29b154;
    };
    const _0x11dbcc = _0x1a9aaa;
    try {
      const _0xb8eb13 = {};
      _0xb8eb13[_0x476888(901) + "ityId"] = _0x4cf8cf;
      _0xb8eb13["mould" + _0x476888(1021)] = _0x4417be;
      let _0x529dac = {
          fn: _0x11dbcc[_0x476888(1297)],
          method: _0x11dbcc[_0x476888(807)],
          url: _0x476888(1285) + "://ep" + _0x476888(789) + _0x476888(710) + _0x476888(518) + _0x476888(1671) + "-part" + _0x476888(1631) + _0x476888(698) + "/rain" + _0x476888(563) + "ueryM" + _0x476888(712) + _0x476888(470),
          headers: {
            bizchannelinfo: this[_0x476888(917) + _0x476888(946) + _0x476888(896) + _0x476888(1522)](),
            authinfo: this[_0x476888(1731) + _0x476888(1397) + "uthin" + "fo"]()
          },
          form: _0xb8eb13
        },
        {
          result: _0x48522a
        } = await this[_0x476888(753) + "st"](_0x529dac),
        _0x1012dc = _0x473183.get(_0x48522a, _0x11dbcc.AiNAV, -1);
      if (_0x11dbcc[_0x476888(1357)](_0x1012dc, _0x476888(340))) {
        let _0x3622c7 = _0x473183[_0x476888(341)]("dd");
        _0x48522a?.[_0x476888(1247)]?.[_0x3622c7] == "1" ? this.log("联通支付日" + _0x476888(825) + _0x3622c7 + _0x476888(996)) : await this[_0x476888(764) + "28_un" + "ifyDr" + "awNew"](_0x4cf8cf, _0x4417be);
      } else {
        let _0x96067 = _0x48522a?.["message"] || _0x48522a?.[_0x476888(823)] || "";
        this.log("联通支付日" + _0x476888(545) + "败[" + _0x1012dc + _0x476888(1309) + _0x96067);
      }
    } catch (_0x1b5cdf) {
      console[_0x476888(924)](_0x1b5cdf);
    }
  }
  async [_0x41d484(764) + _0x41d484(707) + "ifyDr" + "awNew"](_0x47ded6, _0xb05255, _0x464ae4 = {}) {
    const _0x4fe996 = _0x41d484,
      _0x5a5e7d = {};
    _0x5a5e7d[_0x4fe996(1556)] = _0x4fe996(1401);
    _0x5a5e7d[_0x4fe996(492)] = _0x4fe996(379);
    _0x5a5e7d.pGcrQ = function (_0x506650, _0x41227b) {
      return _0x506650 == _0x41227b;
    };
    const _0x5a5f26 = _0x5a5e7d;
    try {
      const _0x21a05b = {};
      _0x21a05b[_0x4fe996(362) + "om"] = _0x51e2c0;
      _0x21a05b[_0x4fe996(901) + _0x4fe996(686)] = _0x47ded6;
      _0x21a05b[_0x4fe996(424) + _0x4fe996(1021)] = _0xb05255;
      let _0x22fb83 = {
          fn: _0x4fe996(764) + _0x4fe996(707) + _0x4fe996(400) + _0x4fe996(554),
          method: _0x5a5f26[_0x4fe996(1556)],
          url: _0x4fe996(1285) + _0x4fe996(890) + "ay.10" + _0x4fe996(710) + _0x4fe996(518) + _0x4fe996(1671) + _0x4fe996(1177) + _0x4fe996(1631) + _0x4fe996(698) + _0x4fe996(1435) + "bow/u" + _0x4fe996(1185) + "rawNe" + "w",
          headers: {
            bizchannelinfo: this["get_b" + _0x4fe996(946) + _0x4fe996(896) + _0x4fe996(1522)](),
            authinfo: this[_0x4fe996(1731) + _0x4fe996(1397) + "uthin" + "fo"]()
          },
          form: _0x21a05b
        },
        {
          result: _0x4fdaf3
        } = await this[_0x4fe996(753) + "st"](_0x22fb83),
        _0x53355e = _0x473183.get(_0x4fdaf3, _0x5a5f26[_0x4fe996(492)], -1);
      if (_0x53355e == _0x4fe996(340) && _0x5a5f26.pGcrQ(_0x4fdaf3?.["data"]?.[_0x4fe996(1622) + "nCode"], 0)) {
        let _0x25a439 = _0x4fdaf3?.[_0x4fe996(1247)]?.[_0x4fe996(1276) + _0x4fe996(1409) + "ntent"]?.[_0x4fe996(1744) + "ce"](/xx/, _0x4fdaf3?.[_0x4fe996(1247)]?.[_0x4fe996(1163) + "t"]);
        const _0x4d8605 = {};
        _0x4d8605[_0x4fe996(778) + "y"] = true;
        this[_0x4fe996(924)](_0x4fe996(308) + "打卡:" + _0x25a439, _0x4d8605);
      } else {
        let _0x149223 = _0x4fdaf3?.["data"]?.[_0x4fe996(1622) + _0x4fe996(1150)] || _0x4fdaf3?.[_0x4fe996(823)] || "";
        this[_0x4fe996(924)](_0x4fe996(308) + "打卡失败[" + (_0x4fdaf3?.[_0x4fe996(1247)]?.[_0x4fe996(1622) + _0x4fe996(907)] || _0x53355e) + _0x4fe996(1309) + _0x149223);
      }
    } catch (_0x1d470d) {
      console[_0x4fe996(924)](_0x1d470d);
    }
  }
  async ["epay_" + _0x41d484(707) + _0x41d484(400) + "aw"](_0x7cea21, _0xda8b95 = {}) {
    const _0x2ec973 = _0x41d484,
      _0x287923 = {};
    _0x287923[_0x2ec973(1534)] = _0x2ec973(764) + _0x2ec973(707) + _0x2ec973(400) + "aw";
    _0x287923[_0x2ec973(1427)] = _0x2ec973(1401);
    _0x287923[_0x2ec973(958)] = _0x2ec973(379);
    _0x287923.mtOtt = function (_0x47561f, _0x5ce5c0) {
      return _0x47561f == _0x5ce5c0;
    };
    const _0x1d91a8 = _0x287923;
    try {
      const _0x5afe03 = {};
      _0x5afe03["activ" + _0x2ec973(686)] = _0x7cea21["unitA" + _0x2ec973(1414) + "tyId"];
      _0x5afe03[_0x2ec973(1506) + _0x2ec973(1394) + _0x2ec973(634)] = _0x7cea21["isBigActiv" + _0x2ec973(634)];
      _0x5afe03[_0x2ec973(528) + _0x2ec973(975) + "yId"] = _0x7cea21[_0x2ec973(528) + "tivit" + _0x2ec973(1485)];
      _0x5afe03[_0x2ec973(362) + "om"] = _0x51e2c0;
      let _0x1c5f2b = {
          fn: _0x1d91a8.TRXfv,
          method: _0x1d91a8.XdeOH,
          url: _0x2ec973(1285) + "://ep" + _0x2ec973(789) + _0x2ec973(710) + "om/ci" + _0x2ec973(1671) + "-part" + _0x2ec973(1631) + _0x2ec973(698) + _0x2ec973(1435) + _0x2ec973(630) + _0x2ec973(1185) + _0x2ec973(1052),
          headers: {
            bizchannelinfo: this[_0x2ec973(917) + _0x2ec973(946) + _0x2ec973(896) + _0x2ec973(1522)](),
            authinfo: this["get_e" + _0x2ec973(1397) + _0x2ec973(1507) + "fo"]()
          },
          form: _0x5afe03
        },
        {
          result: _0x405ad5
        } = await this.request(_0x1c5f2b),
        _0x59460d = _0x473183[_0x2ec973(801)](_0x405ad5, _0x1d91a8[_0x2ec973(958)], -1);
      if (_0x1d91a8[_0x2ec973(1525)](_0x59460d, _0x2ec973(340)) && _0x405ad5?.["data"]?.[_0x2ec973(1622) + "nCode"] == 0) {
        const _0x47270d = {};
        _0x47270d[_0x2ec973(778) + "y"] = true;
        this.log("联通支付日" + _0x2ec973(720) + (_0x405ad5?.[_0x2ec973(1247)]?.[_0x2ec973(1742) + "Name"] || ""), _0x47270d);
      } else {
        let _0x5d38d5 = _0x405ad5?.[_0x2ec973(1247)]?.[_0x2ec973(1622) + _0x2ec973(1150)] || _0x405ad5?.[_0x2ec973(823)] || "";
        this[_0x2ec973(924)](_0x2ec973(308) + _0x2ec973(973) + (_0x405ad5?.[_0x2ec973(1247)]?.[_0x2ec973(1622) + _0x2ec973(907)] || _0x59460d) + "]: " + _0x5d38d5);
      }
    } catch (_0x2e621c) {
      console[_0x2ec973(924)](_0x2e621c);
    }
  }
  async ["appMo" + _0x41d484(794) + "8_bin" + "d"](_0x25f272, _0x105a55 = {}) {
    const _0x3dfa36 = _0x41d484,
      _0x48d432 = {};
    _0x48d432[_0x3dfa36(1448)] = _0x3dfa36(1401);
    _0x48d432[_0x3dfa36(1316)] = "WeChat";
    const _0x4d3e88 = _0x48d432;
    try {
      const _0x3ec4e0 = {
        fn: _0x3dfa36(1175) + _0x3dfa36(794) + _0x3dfa36(898) + "d"
      };
      _0x3ec4e0.fn = _0x3dfa36(1175) + _0x3dfa36(794) + _0x3dfa36(898) + "d";
      _0x3ec4e0[_0x3dfa36(1363) + "d"] = _0x4d3e88[_0x3dfa36(1448)];
      _0x3ec4e0[_0x3dfa36(1296)] = _0x3dfa36(1285) + _0x3dfa36(617) + _0x3dfa36(975) + _0x3dfa36(1479) + _0x3dfa36(655) + _0x3dfa36(666) + "Month" + _0x3dfa36(1557) + _0x3dfa36(676) + _0x3dfa36(717) + "d";
      _0x3ec4e0[_0x3dfa36(1235)] = {};
      _0x3ec4e0[_0x3dfa36(1235)]["share" + _0x3dfa36(865)] = _0x25f272;
      _0x3ec4e0[_0x3dfa36(1235)].cl = _0x4d3e88[_0x3dfa36(1316)];
      let _0x1a167b = _0x3ec4e0,
        {
          result: _0x41a8fd
        } = await this[_0x3dfa36(753) + "st"](_0x1a167b);
    } catch (_0x335e2d) {
      console.log(_0x335e2d);
    }
  }
  async ["appMonth_28_que" + _0x41d484(771) + _0x41d484(599)](_0x417ebc = {}) {
    const _0x2dacf9 = _0x41d484,
      _0x4ae93b = {
        lplav: _0x2dacf9(1175) + _0x2dacf9(794) + _0x2dacf9(1705) + "ryCha" + "nce"
      };
    _0x4ae93b.lplav = _0x2dacf9(1175) + _0x2dacf9(794) + _0x2dacf9(1705) + "ryCha" + "nce";
    _0x4ae93b[_0x2dacf9(980)] = _0x2dacf9(1401);
    _0x4ae93b.ZCMPN = "status";
    _0x4ae93b[_0x2dacf9(1407)] = function (_0x465690, _0x3593ae) {
      return _0x465690 == _0x3593ae;
    };
    _0x4ae93b.CxwNq = function (_0x329a1c, _0x254426) {
      return _0x329a1c > _0x254426;
    };
    const _0xa87825 = _0x4ae93b;
    try {
      const _0x2e59af = {
        fn: _0xa87825[_0x2dacf9(1684)],
        method: _0xa87825[_0x2dacf9(980)]
      };
      _0x2e59af.fn = _0xa87825[_0x2dacf9(1684)];
      _0x2e59af.method = _0xa87825[_0x2dacf9(980)];
      _0x2e59af[_0x2dacf9(1296)] = _0x2dacf9(1285) + _0x2dacf9(617) + _0x2dacf9(975) + _0x2dacf9(1479) + _0x2dacf9(655) + _0x2dacf9(666) + _0x2dacf9(734) + _0x2dacf9(1557) + "pMont" + "h/que" + "ryCha" + _0x2dacf9(599);
      let _0x12ea3d = _0x2e59af,
        {
          result: _0x3da070
        } = await this[_0x2dacf9(753) + "st"](_0x12ea3d),
        _0x5c5561 = _0x473183[_0x2dacf9(801)](_0x3da070, _0xa87825[_0x2dacf9(969)], -1);
      if (_0xa87825.dyjyJ(_0x5c5561, _0x2dacf9(340))) {
        let {
          allRemainTimes: _0x6f226f,
          isUnicom: _0x58acc0
        } = _0x3da070?.[_0x2dacf9(1247)];
        if (_0x58acc0) {
          this.log(_0x2dacf9(308) + "可以开宝箱" + _0x6f226f + "次");
          while (_0xa87825.CxwNq(_0x6f226f--, 0)) {
            await this[_0x2dacf9(1175) + _0x2dacf9(794) + _0x2dacf9(1655) + "tery"]();
          }
        }
      } else {
        let _0x3f07cd = _0x3da070?.[_0x2dacf9(823)] || "";
        this[_0x2dacf9(924)](_0x2dacf9(308) + _0x2dacf9(1203) + _0x2dacf9(1330) + _0x5c5561 + "]: " + _0x3f07cd);
      }
    } catch (_0x6f6fb) {
      console[_0x2dacf9(924)](_0x6f6fb);
    }
  }
  async [_0x41d484(1175) + "nth_2" + _0x41d484(1655) + _0x41d484(792)](_0x3f6b18 = {}) {
    const _0x5a2a41 = _0x41d484,
      _0x5bff55 = {};
    _0x5bff55[_0x5a2a41(1532)] = _0x5a2a41(1175) + _0x5a2a41(794) + _0x5a2a41(1655) + _0x5a2a41(792);
    _0x5bff55[_0x5a2a41(1712)] = "post";
    _0x5bff55[_0x5a2a41(762)] = _0x5a2a41(1212) + "s";
    _0x5bff55.Tzrco = function (_0x44d218, _0x51f7a0) {
      return _0x44d218 == _0x51f7a0;
    };
    _0x5bff55.hQdIQ = "0000";
    const _0x1d0a3f = _0x5bff55;
    try {
      const _0x3aa28b = {
        fn: _0x1d0a3f[_0x5a2a41(1532)]
      };
      _0x3aa28b.fn = _0x1d0a3f[_0x5a2a41(1532)];
      _0x3aa28b[_0x5a2a41(1363) + "d"] = _0x1d0a3f[_0x5a2a41(1712)];
      _0x3aa28b.url = _0x5a2a41(1285) + _0x5a2a41(617) + "tivit" + _0x5a2a41(1479) + _0x5a2a41(655) + "m/App" + _0x5a2a41(734) + _0x5a2a41(1557) + "pMont" + _0x5a2a41(1057) + _0x5a2a41(792);
      let _0x63cb15 = _0x3aa28b,
        {
          result: _0x2890ca
        } = await this[_0x5a2a41(753) + "st"](_0x63cb15),
        _0x1a8128 = _0x473183[_0x5a2a41(801)](_0x2890ca, _0x1d0a3f[_0x5a2a41(762)], -1);
      if (_0x1d0a3f[_0x5a2a41(1642)](_0x1a8128, _0x1d0a3f[_0x5a2a41(1168)])) {
        let {
          code: _0x1cbdbb,
          uuid: _0x3084f8
        } = _0x2890ca?.[_0x5a2a41(1247)];
        _0x3084f8 ? await this[_0x5a2a41(1175) + _0x5a2a41(794) + _0x5a2a41(829) + _0x5a2a41(1663) + _0x5a2a41(1465)](_0x3084f8) : this[_0x5a2a41(924)]("联通支付日" + _0x5a2a41(1471) + "[" + _0x1cbdbb + "]");
      } else {
        let _0x2d254b = _0x2890ca?.[_0x5a2a41(823)] || "";
        this[_0x5a2a41(924)](_0x5a2a41(308) + _0x5a2a41(1471) + "[" + _0x1a8128 + _0x5a2a41(1309) + _0x2d254b);
      }
    } catch (_0x340381) {
      console[_0x5a2a41(924)](_0x340381);
    }
  }
  async [_0x41d484(1175) + "nth_2" + _0x41d484(829) + "ningR" + _0x41d484(1465)](_0x3e4c9f, _0x44aa2c = {}) {
    const _0x4bb5bb = _0x41d484,
      _0x3ea237 = {};
    _0x3ea237[_0x4bb5bb(1497)] = _0x4bb5bb(1175) + _0x4bb5bb(794) + "8_win" + "ningR" + _0x4bb5bb(1465);
    _0x3ea237[_0x4bb5bb(1221)] = _0x4bb5bb(1401);
    _0x3ea237.cUHac = _0x4bb5bb(1212) + "s";
    _0x3ea237[_0x4bb5bb(1447)] = function (_0x485ae0, _0x18f3aa) {
      return _0x485ae0 == _0x18f3aa;
    };
    _0x3ea237[_0x4bb5bb(1400)] = _0x4bb5bb(340);
    _0x3ea237[_0x4bb5bb(388)] = function (_0xb630af, _0x1192a2) {
      return _0xb630af == _0x1192a2;
    };
    const _0x5f3ad7 = _0x3ea237;
    try {
      const _0x5acd61 = {};
      _0x5acd61[_0x4bb5bb(753) + _0x4bb5bb(1288)] = _0x3e4c9f;
      const _0x3931f6 = {
        fn: _0x5f3ad7[_0x4bb5bb(1497)],
        method: _0x5f3ad7[_0x4bb5bb(1221)]
      };
      _0x3931f6.fn = _0x5f3ad7[_0x4bb5bb(1497)];
      _0x3931f6.method = _0x5f3ad7[_0x4bb5bb(1221)];
      _0x3931f6[_0x4bb5bb(1296)] = _0x4bb5bb(1285) + _0x4bb5bb(617) + _0x4bb5bb(975) + _0x4bb5bb(1479) + _0x4bb5bb(655) + _0x4bb5bb(666) + _0x4bb5bb(734) + _0x4bb5bb(1557) + _0x4bb5bb(676) + _0x4bb5bb(1116) + "ningR" + _0x4bb5bb(1465);
      _0x3931f6[_0x4bb5bb(1235)] = _0x5acd61;
      let _0x39704 = _0x3931f6,
        {
          result: _0x504578
        } = await this[_0x4bb5bb(753) + "st"](_0x39704),
        _0x8e4c55 = _0x473183[_0x4bb5bb(801)](_0x504578, _0x5f3ad7.cUHac, -1);
      if (_0x5f3ad7.LmlLh(_0x8e4c55, _0x5f3ad7[_0x4bb5bb(1400)])) {
        let {
          code: _0xd9d29f,
          prizeName: _0x1f21dc
        } = _0x504578?.[_0x4bb5bb(1247)];
        if (_0x5f3ad7[_0x4bb5bb(388)](_0xd9d29f, "0000")) {
          const _0xaeda27 = {};
          _0xaeda27[_0x4bb5bb(778) + "y"] = true;
          this[_0x4bb5bb(924)](_0x4bb5bb(308) + _0x4bb5bb(768) + _0x1f21dc, _0xaeda27);
        } else {
          let _0x792556 = _0x504578?.[_0x4bb5bb(1247)]?.[_0x4bb5bb(460) + "ge"] || "";
          this[_0x4bb5bb(924)](_0x4bb5bb(308) + "查询中奖奖" + _0x4bb5bb(899) + _0xd9d29f + _0x4bb5bb(1309) + _0x792556);
        }
      } else {
        let _0x43fd90 = _0x504578?.[_0x4bb5bb(823)] || "";
        this[_0x4bb5bb(924)](_0x4bb5bb(308) + _0x4bb5bb(461) + _0x4bb5bb(559) + _0x8e4c55 + _0x4bb5bb(1309) + _0x43fd90);
      }
    } catch (_0x3b5d9b) {
      console.log(_0x3b5d9b);
    }
  }
  async [_0x41d484(476) + "getCo" + _0x41d484(1096) + _0x41d484(616)](_0x55bda7 = {}) {
    const _0x1ce2ac = _0x41d484,
      _0x17d0dc = {};
    _0x17d0dc[_0x1ce2ac(1460)] = "post";
    _0x17d0dc[_0x1ce2ac(961)] = function (_0x3ea142, _0x53c720) {
      return _0x3ea142 == _0x53c720;
    };
    _0x17d0dc.JyTlW = "0000";
    const _0x92855a = _0x17d0dc;
    try {
      const _0x2b7e77 = {
        taskId: "",
        channel: ""
      };
      const _0x2f8b28 = {
        fn: "sign_" + _0x1ce2ac(1529) + _0x1ce2ac(1096) + "ous"
      };
      _0x2f8b28.fn = "sign_" + _0x1ce2ac(1529) + _0x1ce2ac(1096) + "ous";
      _0x2f8b28[_0x1ce2ac(1363) + "d"] = _0x92855a[_0x1ce2ac(1460)];
      _0x2f8b28[_0x1ce2ac(1296)] = "https" + _0x1ce2ac(617) + _0x1ce2ac(1707) + _0x1ce2ac(655) + _0x1ce2ac(909) + _0x1ce2ac(1193) + _0x1ce2ac(918) + _0x1ce2ac(1578) + _0x1ce2ac(378) + _0x1ce2ac(1486) + "us";
      _0x2f8b28[_0x1ce2ac(1235)] = _0x2b7e77;
      let _0xedc9ae = _0x2f8b28,
        {
          result: _0x154371
        } = await this[_0x1ce2ac(753) + "st"](_0xedc9ae),
        _0x10763c = _0x473183[_0x1ce2ac(801)](_0x154371, _0x1ce2ac(1212) + "s", -1);
      if (_0x92855a.TtMoD(_0x10763c, _0x92855a.JyTlW)) {
        let _0x24a679 = _0x154371?.[_0x1ce2ac(1247)]?.[_0x1ce2ac(1313) + _0x1ce2ac(1609) + "d"] || 0;
        const _0x4ad109 = {};
        _0x4ad109[_0x1ce2ac(778) + "y"] = true;
        this[_0x1ce2ac(924)](_0x1ce2ac(732) + (_0x92855a[_0x1ce2ac(961)](_0x24a679, "1") ? "未" : "已") + "签到", _0x4ad109);
        if (_0x24a679 == "1") {
          await this["sign_" + _0x1ce2ac(381) + "gn"]();
        }
      } else {
        let _0x1b7f5f = _0x154371?.[_0x1ce2ac(823)] || "";
        this[_0x1ce2ac(924)](_0x1ce2ac(1003) + _0x1ce2ac(469) + "败[" + _0x10763c + _0x1ce2ac(1309) + _0x1b7f5f);
      }
    } catch (_0x5a4e08) {
      console.log(_0x5a4e08);
    }
  }
  async [_0x41d484(476) + _0x41d484(381) + "gn"](_0x3b5e0b = {}) {
    const _0x2a06ee = _0x41d484,
      _0x238e91 = {
        aqXUg: _0x2a06ee(476) + _0x2a06ee(381) + "gn",
        SGzUf: _0x2a06ee(1401),
        zEyNa: "status",
        GARam: function (_0x156309, _0x53fb6e) {
          return _0x156309 == _0x53fb6e;
        }
      };
    _0x238e91.aqXUg = _0x2a06ee(476) + _0x2a06ee(381) + "gn";
    _0x238e91.SGzUf = _0x2a06ee(1401);
    _0x238e91.zEyNa = "status";
    _0x238e91.GARam = function (_0x156309, _0x53fb6e) {
      return _0x156309 == _0x53fb6e;
    };
    _0x238e91[_0x2a06ee(1758)] = "0000";
    const _0x5e9dcd = _0x238e91;
    try {
      const _0x581a94 = {};
      _0x581a94[_0x2a06ee(905) + "Cl"] = "";
      _0x581a94["share" + _0x2a06ee(865)] = "";
      const _0x5b5d54 = {
        fn: _0x5e9dcd.aqXUg
      };
      _0x5b5d54.fn = _0x5e9dcd.aqXUg;
      _0x5b5d54[_0x2a06ee(1363) + "d"] = _0x5e9dcd.SGzUf;
      _0x5b5d54[_0x2a06ee(1296)] = "https" + _0x2a06ee(617) + _0x2a06ee(1707) + _0x2a06ee(655) + _0x2a06ee(909) + "ninAp" + _0x2a06ee(918) + _0x2a06ee(750) + "aySig" + "n";
      _0x5b5d54[_0x2a06ee(1235)] = _0x581a94;
      let _0x298f33 = _0x5b5d54,
        {
          result: _0x11162f
        } = await this[_0x2a06ee(753) + "st"](_0x298f33),
        _0x107bf0 = _0x473183[_0x2a06ee(801)](_0x11162f, _0x5e9dcd[_0x2a06ee(548)], -1);
      if (_0x5e9dcd[_0x2a06ee(350)](_0x107bf0, _0x5e9dcd[_0x2a06ee(1758)])) {
        const _0x9ce43a = {};
        _0x9ce43a[_0x2a06ee(778) + "y"] = true;
        this[_0x2a06ee(924)](_0x2a06ee(1375) + "成功: " + _0x11162f?.[_0x2a06ee(1247)]?.[_0x2a06ee(1032) + _0x2a06ee(1139) + "e"], _0x9ce43a);
      } else {
        let _0xd2a710 = _0x11162f?.[_0x2a06ee(823)] || "";
        this.log("签到区签到失败[" + _0x107bf0 + "]: " + _0xd2a710);
      }
    } catch (_0x515203) {
      console[_0x2a06ee(924)](_0x515203);
    }
  }
  async [_0x41d484(476) + _0x41d484(1166) + _0x41d484(608) + _0x41d484(414)](_0x283b41 = {}) {
    const _0x4546e2 = _0x41d484,
      _0x48ef25 = {
        cqwYf: "post"
      };
    _0x48ef25.cqwYf = "post";
    _0x48ef25[_0x4546e2(498)] = function (_0x3cff86, _0x17d1a6) {
      return _0x3cff86 == _0x17d1a6;
    };
    _0x48ef25[_0x4546e2(1086)] = _0x4546e2(340);
    const _0x149c54 = _0x48ef25;
    try {
      const _0x57c5d4 = {
        fn: _0x4546e2(476) + _0x4546e2(1166) + _0x4546e2(608) + _0x4546e2(414)
      };
      _0x57c5d4.fn = _0x4546e2(476) + _0x4546e2(1166) + _0x4546e2(608) + _0x4546e2(414);
      _0x57c5d4[_0x4546e2(1363) + "d"] = _0x149c54.cqwYf;
      _0x57c5d4[_0x4546e2(1296)] = "https" + _0x4546e2(617) + _0x4546e2(1707) + _0x4546e2(655) + "m/Sig" + _0x4546e2(1193) + _0x4546e2(1756) + _0x4546e2(1019) + _0x4546e2(1406) + _0x4546e2(432) + _0x4546e2(494) + _0x4546e2(598);
      let _0x31c62f = _0x57c5d4,
        {
          result: _0x46c51c
        } = await this[_0x4546e2(753) + "st"](_0x31c62f),
        _0x3d6001 = _0x473183.get(_0x46c51c, _0x4546e2(1212) + "s", -1);
      if (_0x149c54.deYHq(_0x3d6001, _0x149c54[_0x4546e2(1086)])) {
        for (let _0x3c2d40 of _0x46c51c?.[_0x4546e2(1247)]?.[_0x4546e2(330) + _0x4546e2(1512)]?.[_0x4546e2(565) + "r"](_0x2fdbb8 => _0x2fdbb8["taskS" + _0x4546e2(348)] == 1)) {
          let _0x4fcce2 = await this[_0x4546e2(1312) + _0x4546e2(441)]();
          await this[_0x4546e2(476) + _0x4546e2(786) + "k"](_0x3c2d40, _0x4fcce2);
        }
      } else {
        let _0x1d3847 = _0x46c51c?.["msg"] || "";
        this.log(_0x4546e2(1003) + "气泡任务失" + "败[" + _0x3d6001 + _0x4546e2(1309) + _0x1d3847);
      }
    } catch (_0x55026b) {
      console[_0x4546e2(924)](_0x55026b);
    }
  }
  async [_0x41d484(476) + _0x41d484(786) + "k"](_0x3e84d4, _0x1b7dac, _0x4e32d4 = {}) {
    const _0x30d1ec = _0x41d484,
      _0x5c93d9 = {};
    _0x5c93d9[_0x30d1ec(726)] = _0x30d1ec(476) + _0x30d1ec(786) + "k";
    _0x5c93d9[_0x30d1ec(1376)] = _0x30d1ec(1401);
    _0x5c93d9[_0x30d1ec(1482)] = _0x30d1ec(1676) + _0x30d1ec(684) + "F03-4" + _0x30d1ec(573) + _0x30d1ec(1377) + _0x30d1ec(1643) + _0x30d1ec(1393) + "8";
    _0x5c93d9[_0x30d1ec(570)] = "status";
    _0x5c93d9[_0x30d1ec(1496)] = function (_0x17d2c6, _0x21c8a9) {
      return _0x17d2c6 == _0x21c8a9;
    };
    _0x5c93d9[_0x30d1ec(1164)] = "0000";
    const _0x317028 = _0x5c93d9;
    try {
      const _0x359a63 = {
        fn: _0x317028[_0x30d1ec(726)]
      };
      _0x359a63.fn = _0x317028[_0x30d1ec(726)];
      _0x359a63[_0x30d1ec(1363) + "d"] = _0x317028[_0x30d1ec(1376)];
      _0x359a63.url = _0x30d1ec(1285) + _0x30d1ec(617) + _0x30d1ec(1707) + _0x30d1ec(655) + _0x30d1ec(909) + _0x30d1ec(1193) + _0x30d1ec(667) + _0x30d1ec(1677) + "ask";
      _0x359a63[_0x30d1ec(1235)] = {};
      _0x359a63[_0x30d1ec(1235)].id = _0x3e84d4.id;
      _0x359a63[_0x30d1ec(1235)][_0x30d1ec(1656) + "Id"] = _0x1b7dac;
      _0x359a63[_0x30d1ec(1235)][_0x30d1ec(940)] = _0x317028[_0x30d1ec(1482)];
      _0x359a63[_0x30d1ec(1235)][_0x30d1ec(1742) + _0x30d1ec(1462)] = _0x3e84d4[_0x30d1ec(1194) + _0x30d1ec(1749)];
      _0x359a63[_0x30d1ec(1235)]["posit" + _0x30d1ec(482) + "ag"] = 0;
      let _0x513de0 = _0x359a63,
        {
          result: _0x84aeb4
        } = await this.request(_0x513de0),
        _0x29cffa = _0x473183[_0x30d1ec(801)](_0x84aeb4, _0x317028[_0x30d1ec(570)], -1);
      if (_0x317028[_0x30d1ec(1496)](_0x29cffa, _0x317028[_0x30d1ec(1164)])) {
        this[_0x30d1ec(924)](_0x30d1ec(602) + _0x3e84d4.actName + _0x30d1ec(1291) + _0x84aeb4?.[_0x30d1ec(1247)]?.[_0x30d1ec(1742) + _0x30d1ec(502)] + _0x84aeb4?.["data"]?.["prizeName"]);
      } else {
        let _0x5a08a9 = _0x84aeb4?.[_0x30d1ec(823)] || "";
        this.log(_0x30d1ec(602) + _0x3e84d4[_0x30d1ec(1071) + "me"] + _0x30d1ec(903) + _0x29cffa + "]: " + _0x5a08a9);
      }
    } catch (_0x37bb43) {
      console[_0x30d1ec(924)](_0x37bb43);
    }
  }
  async [_0x41d484(575) + "login"](_0x293430, _0x3c9a97 = {}) {
    const _0x5e2dde = _0x41d484,
      _0x49b43e = {};
    _0x49b43e[_0x5e2dde(540)] = _0x5e2dde(575) + _0x5e2dde(665);
    _0x49b43e[_0x5e2dde(601)] = _0x5e2dde(1401);
    _0x49b43e[_0x5e2dde(537)] = _0x5e2dde(1202) + _0x5e2dde(1199) + "90005";
    _0x49b43e[_0x5e2dde(1576)] = _0x5e2dde(543) + "en";
    _0x49b43e[_0x5e2dde(755)] = "code";
    _0x49b43e.wUMlL = function (_0x2cb716, _0x119811) {
      return _0x2cb716 == _0x119811;
    };
    const _0x2cf267 = _0x49b43e;
    try {
      const _0x3ddc1a = {
        fn: _0x2cf267[_0x5e2dde(540)],
        method: _0x2cf267[_0x5e2dde(601)]
      };
      _0x3ddc1a.fn = _0x2cf267[_0x5e2dde(540)];
      _0x3ddc1a.method = _0x2cf267[_0x5e2dde(601)];
      _0x3ddc1a[_0x5e2dde(1296)] = _0x5e2dde(1285) + _0x5e2dde(1738) + _0x5e2dde(1231) + _0x5e2dde(428) + ".cn/a" + _0x5e2dde(402) + "p//us" + _0x5e2dde(1703) + "/logi" + "n";
      _0x3ddc1a.headers = {};
      _0x3ddc1a[_0x5e2dde(859)] = {};
      _0x3ddc1a.headers[_0x5e2dde(619) + _0x5e2dde(1499)] = _0x2cf267[_0x5e2dde(537)];
      _0x3ddc1a[_0x5e2dde(859)]["ident" + _0x5e2dde(1610) + "pe"] = _0x2cf267[_0x5e2dde(1576)];
      _0x3ddc1a[_0x5e2dde(859)][_0x5e2dde(379)] = this[_0x5e2dde(1233) + _0x5e2dde(989)];
      _0x3ddc1a[_0x5e2dde(859)][_0x5e2dde(1432) + "t"] = _0x293430;
      _0x3ddc1a[_0x5e2dde(859)].uuid = _0x31a2cd;
      let _0x2c6803 = _0x3ddc1a,
        {
          result: _0x169407
        } = await this[_0x5e2dde(753) + "st"](_0x2c6803),
        _0x5369c5 = _0x473183[_0x5e2dde(801)](_0x169407, _0x2cf267[_0x5e2dde(755)], -1);
      if (_0x2cf267.wUMlL(_0x5369c5, 200)) {
        this[_0x5e2dde(575) + _0x5e2dde(360)] = _0x169407?.[_0x5e2dde(1247)]?.[_0x5e2dde(1596) + _0x5e2dde(967) + "en"];
        this[_0x5e2dde(1145)] = this[_0x5e2dde(1145)][_0x5e2dde(776) + "d"]({
          headers: {
            Authorization: this[_0x5e2dde(575) + _0x5e2dde(360)]
          }
        });
        await this[_0x5e2dde(575) + _0x5e2dde(914) + "mberI" + _0x5e2dde(1522)]();
        await this[_0x5e2dde(575) + _0x5e2dde(1107) + _0x5e2dde(1465)]();
        await this["game_" + _0x5e2dde(1581) + "ry"]();
        await this["game_" + _0x5e2dde(1605) + _0x5e2dde(689)]();
        await this[_0x5e2dde(575) + _0x5e2dde(595) + "ist"]();
        await this[_0x5e2dde(575) + _0x5e2dde(914) + _0x5e2dde(1690) + _0x5e2dde(1522)]();
        const _0x53aa13 = {};
        _0x53aa13[_0x5e2dde(778) + "y"] = true;
        this.log("联通畅游币: " + this[_0x5e2dde(1568)], _0x53aa13);
      } else {
        let _0x3130f5 = _0x169407?.[_0x5e2dde(823)] || "";
        this.log(_0x5e2dde(1079) + "录失败[" + _0x5369c5 + _0x5e2dde(1309) + _0x3130f5);
      }
    } catch (_0x26f977) {
      console[_0x5e2dde(924)](_0x26f977);
    }
  }
  async [_0x41d484(575) + _0x41d484(914) + _0x41d484(1690) + _0x41d484(1522)](_0x3d0ef7 = {}) {
    const _0x218c81 = _0x41d484,
      _0x421482 = {
        PCDUV: _0x218c81(575) + _0x218c81(914) + _0x218c81(1690) + _0x218c81(1522)
      };
    _0x421482.PCDUV = _0x218c81(575) + _0x218c81(914) + _0x218c81(1690) + _0x218c81(1522);
    _0x421482[_0x218c81(990)] = _0x218c81(801);
    _0x421482[_0x218c81(1028)] = "code";
    _0x421482.JBcPk = function (_0x1d7c3e, _0x4c1d21) {
      return _0x1d7c3e == _0x4c1d21;
    };
    const _0x43a305 = _0x421482;
    try {
      const _0x5998f9 = {
        fn: _0x43a305[_0x218c81(1224)]
      };
      _0x5998f9.fn = _0x43a305[_0x218c81(1224)];
      _0x5998f9[_0x218c81(1363) + "d"] = _0x43a305.hsmGB;
      _0x5998f9[_0x218c81(1296)] = _0x218c81(1285) + _0x218c81(1738) + _0x218c81(1231) + "store" + ".cn/a" + _0x218c81(402) + _0x218c81(1055) + _0x218c81(324) + _0x218c81(914) + "mberI" + _0x218c81(1522);
      let _0x1109e3 = _0x5998f9,
        {
          result: _0x20ff21
        } = await this[_0x218c81(753) + "st"](_0x1109e3),
        _0x3cff36 = _0x473183.get(_0x20ff21, _0x43a305.bicKu, -1);
      if (_0x43a305[_0x218c81(688)](_0x3cff36, 200)) {
        this[_0x218c81(1568)] = _0x20ff21?.[_0x218c81(1247)]?.[_0x218c81(773) + _0x218c81(879) + "al"];
      } else {
        let _0x1baa35 = _0x20ff21?.[_0x218c81(823)] || "";
        this[_0x218c81(924)]("联通畅游查" + _0x218c81(933) + "[" + _0x3cff36 + "]: " + _0x1baa35);
      }
    } catch (_0x2d10ec) {
      console[_0x218c81(924)](_0x2d10ec);
    }
  }
  async ["game_" + _0x41d484(1107) + _0x41d484(1465)](_0x1a0467 = {}) {
    const _0x375e5a = _0x41d484;
    const _0x9df7b1 = {
      yEipM: _0x375e5a(801),
      WNBkC: _0x375e5a(379),
      XFQqn: function (_0x33b030, _0x3cfd8c) {
        return _0x33b030 == _0x3cfd8c;
      }
    };
    try {
      const _0x529c5d = {
        fn: _0x375e5a(575) + _0x375e5a(1107) + _0x375e5a(1465)
      };
      _0x529c5d.fn = _0x375e5a(575) + _0x375e5a(1107) + _0x375e5a(1465);
      _0x529c5d[_0x375e5a(1363) + "d"] = _0x9df7b1[_0x375e5a(1630)];
      _0x529c5d[_0x375e5a(1296)] = _0x375e5a(1285) + "://ga" + "me.wo" + _0x375e5a(428) + _0x375e5a(683) + "pi/ap" + _0x375e5a(1055) + _0x375e5a(324) + _0x375e5a(1107) + "ecord";
      let _0x1f2a74 = _0x529c5d,
        {
          result: _0x4af41b
        } = await this[_0x375e5a(753) + "st"](_0x1f2a74),
        _0x3af6aa = _0x473183[_0x375e5a(801)](_0x4af41b, _0x9df7b1[_0x375e5a(314)], -1);
      if (_0x9df7b1[_0x375e5a(1586)](_0x3af6aa, 200)) {
        for (let _0x5e63c1 of _0x4af41b?.[_0x375e5a(1247)]) {
          if (_0x5e63c1[_0x375e5a(1135)] == 0) {
            continue;
          }
          this[_0x375e5a(924)](_0x375e5a(1694) + "天" + (_0x9df7b1[_0x375e5a(1586)](_0x5e63c1[_0x375e5a(1174) + _0x375e5a(475)], 2) ? "未" : "已") + "签到");
          if (_0x5e63c1["signS" + _0x375e5a(475)] == 2) {
            await this[_0x375e5a(575) + "signI" + "n"]();
          }
        }
      } else {
        let _0x5711a8 = _0x4af41b?.[_0x375e5a(823)] || "";
        this[_0x375e5a(924)](_0x375e5a(891) + _0x375e5a(517) + "[" + _0x3af6aa + _0x375e5a(1309) + _0x5711a8);
      }
    } catch (_0x29dfab) {
      console[_0x375e5a(924)](_0x29dfab);
    }
  }
  async [_0x41d484(575) + _0x41d484(692) + "n"](_0x1a6e44 = {}) {
    const _0xf75846 = _0x41d484,
      _0x38ce7b = {};
    _0x38ce7b[_0xf75846(1306)] = _0xf75846(575) + _0xf75846(692) + "n";
    _0x38ce7b[_0xf75846(463)] = "get";
    _0x38ce7b[_0xf75846(1580)] = "code";
    const _0x2ff70b = _0x38ce7b;
    try {
      const _0x591af4 = {
        fn: _0x2ff70b[_0xf75846(1306)]
      };
      _0x591af4.fn = _0x2ff70b[_0xf75846(1306)];
      _0x591af4[_0xf75846(1363) + "d"] = _0x2ff70b[_0xf75846(463)];
      _0x591af4[_0xf75846(1296)] = _0xf75846(1285) + "://ga" + "me.wo" + _0xf75846(428) + _0xf75846(683) + _0xf75846(402) + "p/use" + _0xf75846(324) + _0xf75846(692) + "n";
      let _0x33f26b = _0x591af4,
        {
          result: _0x220eca
        } = await this[_0xf75846(753) + "st"](_0x33f26b),
        _0x4ce812 = _0x473183[_0xf75846(801)](_0x220eca, _0x2ff70b.jlRiA, -1);
      if (_0x4ce812 == 200) {
        this[_0xf75846(924)](_0xf75846(1695) + _0xf75846(346));
      } else {
        let _0x58eeb7 = _0x220eca?.[_0xf75846(823)] || "";
        this.log(_0xf75846(1695) + _0xf75846(1540) + _0x4ce812 + _0xf75846(1309) + _0x58eeb7);
      }
    } catch (_0x310ecf) {
      console[_0xf75846(924)](_0x310ecf);
    }
  }
  async [_0x41d484(575) + _0x41d484(1041) + _0x41d484(1574) + "r"](_0x55756e = {}) {
    const _0x7fdb3f = _0x41d484,
      _0x684d01 = {
        YgMDb: _0x7fdb3f(1401)
      };
    _0x684d01.YgMDb = _0x7fdb3f(1401);
    _0x684d01[_0x7fdb3f(948)] = _0x7fdb3f(379);
    const _0x13f97c = _0x684d01;
    let _0x5054fa = false;
    try {
      const _0xebb9ec = {};
      _0xebb9ec[_0x7fdb3f(1457)] = 234;
      const _0x3f8925 = {
        fn: _0x7fdb3f(575) + _0x7fdb3f(1041) + _0x7fdb3f(1574) + "r",
        method: _0x13f97c[_0x7fdb3f(1602)],
        url: "https" + _0x7fdb3f(1738) + _0x7fdb3f(1231) + "store" + _0x7fdb3f(683) + _0x7fdb3f(402) + _0x7fdb3f(1274) + _0x7fdb3f(1380) + _0x7fdb3f(514) + "/chec" + "kSlid" + "er"
      };
      _0x3f8925.fn = _0x7fdb3f(575) + _0x7fdb3f(1041) + _0x7fdb3f(1574) + "r";
      _0x3f8925.method = _0x13f97c[_0x7fdb3f(1602)];
      _0x3f8925.url = "https" + _0x7fdb3f(1738) + _0x7fdb3f(1231) + "store" + _0x7fdb3f(683) + _0x7fdb3f(402) + _0x7fdb3f(1274) + _0x7fdb3f(1380) + _0x7fdb3f(514) + "/chec" + "kSlid" + "er";
      _0x3f8925[_0x7fdb3f(375) + _0x7fdb3f(838) + "ms"] = _0xebb9ec;
      let _0x4f52ae = _0x3f8925,
        {
          result: _0x3206b1
        } = await this[_0x7fdb3f(753) + "st"](_0x4f52ae),
        _0x5d7407 = _0x473183[_0x7fdb3f(801)](_0x3206b1, _0x13f97c[_0x7fdb3f(948)], -1);
      if (_0x5d7407 == 200) {
        this[_0x7fdb3f(924)](_0x7fdb3f(530) + _0x7fdb3f(1743));
      } else {
        let _0x270254 = _0x3206b1?.[_0x7fdb3f(823)] || "";
        this[_0x7fdb3f(924)]("联通畅游滑" + _0x7fdb3f(1304) + "[" + _0x5d7407 + _0x7fdb3f(1309) + _0x270254);
      }
    } catch (_0x5b67c) {
      console[_0x7fdb3f(924)](_0x5b67c);
    } finally {
      return _0x5054fa;
    }
  }
  async [_0x41d484(575) + "lotte" + "ry"](_0x355efd = {}) {
    const _0x4c5230 = _0x41d484,
      _0x585d1c = {};
    _0x585d1c[_0x4c5230(1412)] = _0x4c5230(575) + "lotte" + "ry";
    _0x585d1c[_0x4c5230(416)] = _0x4c5230(801);
    _0x585d1c[_0x4c5230(718)] = _0x4c5230(379);
    const _0x4f5706 = _0x585d1c;
    try {
      let _0x139c8a = {
          fn: _0x4f5706[_0x4c5230(1412)],
          method: _0x4f5706.mXCmk,
          url: _0x4c5230(1285) + _0x4c5230(1738) + _0x4c5230(1231) + _0x4c5230(428) + _0x4c5230(683) + _0x4c5230(402) + "p/use" + _0x4c5230(324) + _0x4c5230(847) + _0x4c5230(345) + _0x4c5230(1424),
          searchParams: {
            id: _0x473183.get(_0x355efd, "id", 1)
          }
        },
        {
          result: _0x3ac305
        } = await this[_0x4c5230(753) + "st"](_0x139c8a),
        _0xb56abd = _0x473183[_0x4c5230(801)](_0x3ac305, _0x4f5706[_0x4c5230(718)], -1);
      if (_0xb56abd == 200) {
        const _0x3b874f = {};
        _0x3b874f[_0x4c5230(778) + "y"] = true;
        this[_0x4c5230(924)](_0x4c5230(364) + _0x4c5230(443) + _0x3ac305?.[_0x4c5230(1247)]?.[_0x4c5230(1387) + _0x4c5230(1301) + "e"], _0x3b874f);
      } else {
        let _0x48194d = _0x3ac305?.[_0x4c5230(823)] || "";
        this[_0x4c5230(924)](_0x4c5230(364) + _0x4c5230(1048) + _0xb56abd + _0x4c5230(1309) + _0x48194d);
      }
    } catch (_0x178bbf) {
      console[_0x4c5230(924)](_0x178bbf);
    }
  }
  async [_0x41d484(575) + _0x41d484(595) + _0x41d484(1475)](_0x32b306 = {}) {
    const _0xb3d19a = _0x41d484,
      _0x5ea5f4 = {
        prYDw: _0xb3d19a(575) + "taskL" + "ist"
      };
    _0x5ea5f4.prYDw = _0xb3d19a(575) + "taskL" + "ist";
    _0x5ea5f4[_0xb3d19a(798)] = _0xb3d19a(801);
    _0x5ea5f4[_0xb3d19a(1639)] = function (_0x2c91c2, _0xdb3fd8) {
      return _0x2c91c2 == _0xdb3fd8;
    };
    const _0x3d69be = _0x5ea5f4;
    try {
      const _0x437409 = {
        fn: _0x3d69be[_0xb3d19a(1470)]
      };
      _0x437409.fn = _0x3d69be[_0xb3d19a(1470)];
      _0x437409[_0xb3d19a(1363) + "d"] = _0x3d69be.gojHr;
      _0x437409[_0xb3d19a(1296)] = "https" + _0xb3d19a(1738) + _0xb3d19a(1231) + "store" + _0xb3d19a(683) + _0xb3d19a(402) + "p/use" + "r/v2/" + _0xb3d19a(434) + "list";
      let _0x1aaa73 = _0x437409,
        {
          result: _0xa5a390
        } = await this[_0xb3d19a(753) + "st"](_0x1aaa73),
        _0x8481c6 = _0x473183[_0xb3d19a(801)](_0xa5a390, _0xb3d19a(379), -1);
      if (_0x3d69be[_0xb3d19a(1639)](_0x8481c6, 200)) {
        for (let _0x165d5e of _0xa5a390?.[_0xb3d19a(1247)]) {
          switch (_0x165d5e["recei" + _0xb3d19a(782) + _0xb3d19a(785)]) {
            case 0:
              break;
            case 1:
              await this["game_" + _0xb3d19a(685) + "eceiv" + "e"](_0x165d5e);
              break;
            case 2:
              break;
            default:
              _0x473183[_0xb3d19a(924)](_0xb3d19a(788) + _0x165d5e["taskN" + _0xb3d19a(972)] + "]未知状态[" + _0x165d5e[_0xb3d19a(1617) + _0xb3d19a(782) + "tus"] + "]");
              break;
          }
        }
      } else {
        let _0x2ea113 = _0xa5a390?.[_0xb3d19a(823)] || "";
        this[_0xb3d19a(924)](_0xb3d19a(891) + _0xb3d19a(1570) + "[" + _0x8481c6 + _0xb3d19a(1309) + _0x2ea113);
      }
    } catch (_0x3bfe05) {
      console[_0xb3d19a(924)](_0x3bfe05);
    }
  }
  async ["game_" + _0x41d484(685) + _0x41d484(1373) + "e"](_0x30b094, _0x1892e9 = {}) {
    const _0x536508 = _0x41d484,
      _0x18b8af = {
        MDkkd: _0x536508(575) + _0x536508(685) + "eceiv" + "e"
      };
    _0x18b8af.MDkkd = _0x536508(575) + _0x536508(685) + "eceiv" + "e";
    _0x18b8af[_0x536508(1197)] = "get";
    _0x18b8af[_0x536508(1588)] = _0x536508(379);
    _0x18b8af.KidZr = function (_0x363e71, _0x5e81d3) {
      return _0x363e71 == _0x5e81d3;
    };
    const _0x42a428 = _0x18b8af;
    try {
      const _0x3bc90f = {};
      _0x3bc90f[_0x536508(1387) + "ctId"] = _0x30b094[_0x536508(1387) + "ctId"];
      _0x3bc90f[_0x536508(945) + "d"] = _0x30b094.id;
      const _0x15ccfe = {
        fn: _0x42a428[_0x536508(1009)]
      };
      _0x15ccfe.fn = _0x42a428[_0x536508(1009)];
      _0x15ccfe[_0x536508(1363) + "d"] = _0x42a428.gVVho;
      _0x15ccfe[_0x536508(1296)] = _0x536508(1285) + _0x536508(1738) + _0x536508(1231) + _0x536508(428) + ".cn/a" + _0x536508(402) + "p/use" + _0x536508(324) + _0x536508(434) + _0x536508(1617) + "ve";
      _0x15ccfe[_0x536508(375) + _0x536508(838) + "ms"] = _0x3bc90f;
      let _0x359de5 = _0x15ccfe,
        {
          result: _0x5c9915
        } = await this[_0x536508(753) + "st"](_0x359de5),
        _0x583663 = _0x473183[_0x536508(801)](_0x5c9915, _0x42a428[_0x536508(1588)], -1);
      if (_0x42a428.KidZr(_0x583663, 200)) {
        this[_0x536508(924)](_0x536508(447) + _0x30b094[_0x536508(1560) + _0x536508(972)] + _0x536508(541));
      } else {
        let _0x4e610d = _0x5c9915?.[_0x536508(823)] || "";
        this[_0x536508(924)](_0x536508(447) + _0x30b094[_0x536508(1560) + "ame"] + (_0x536508(1607) + "[") + _0x583663 + _0x536508(1309) + _0x4e610d);
      }
    } catch (_0x317db3) {
      console.log(_0x317db3);
    }
  }
  async game_playSave(_0x43fc06 = {}) {
    const _0x2908d0 = _0x41d484,
      _0x47b6b4 = {};
    _0x47b6b4[_0x2908d0(731)] = _0x2908d0(575) + _0x2908d0(1605) + "ave";
    _0x47b6b4[_0x2908d0(1273)] = _0x2908d0(1401);
    _0x47b6b4[_0x2908d0(1724)] = _0x2908d0(423) + "56789";
    _0x47b6b4[_0x2908d0(832)] = _0x2908d0(379);
    _0x47b6b4[_0x2908d0(758)] = function (_0x2a0b0c, _0x4ebdfa) {
      return _0x2a0b0c == _0x4ebdfa;
    };
    const _0x3c5720 = _0x47b6b4;
    try {
      let _0x1401b6 = {
          fn: _0x3c5720[_0x2908d0(731)],
          method: _0x3c5720[_0x2908d0(1273)],
          url: "https" + _0x2908d0(1738) + _0x2908d0(1231) + _0x2908d0(428) + ".cn/a" + _0x2908d0(402) + "p/use" + _0x2908d0(324) + _0x2908d0(926) + _0x2908d0(1411),
          json: {
            cpGameId: _0x2908d0(1659) + _0x2908d0(624) + _0x473183[_0x2908d0(1346) + _0x2908d0(377) + "ng"](2, _0x3c5720[_0x2908d0(1724)])
          }
        },
        {
          result: _0x504c22
        } = await this[_0x2908d0(753) + "st"](_0x1401b6),
        _0x1f113e = _0x473183[_0x2908d0(801)](_0x504c22, _0x3c5720[_0x2908d0(832)], -1);
      if (!_0x3c5720[_0x2908d0(758)](_0x1f113e, 200)) {
        let _0x383659 = _0x504c22?.[_0x2908d0(823)] || "";
        this[_0x2908d0(924)]("联通畅游玩" + _0x2908d0(964) + _0x1f113e + _0x2908d0(1309) + _0x383659);
      }
    } catch (_0x3784bd) {
      console.log(_0x3784bd);
    }
  }
  async [_0x41d484(1120) + _0x41d484(665)](_0x539c0e, _0xf59850 = {}) {
    const _0x49c695 = _0x41d484,
      _0x146032 = {};
    _0x146032[_0x49c695(406)] = _0x49c695(801);
    _0x146032[_0x49c695(947)] = "sid";
    const _0xcf2f93 = _0x146032;
    try {
      const _0x125ee5 = {
        fn: "flmf_" + _0x49c695(665)
      };
      _0x125ee5.fn = "flmf_" + _0x49c695(665);
      _0x125ee5[_0x49c695(1363) + "d"] = _0xcf2f93.grRkL;
      _0x125ee5.url = _0x539c0e;
      let _0x4175da = _0x125ee5,
        {
          headers: _0x1da6c1,
          statusCode: _0x341cad
        } = await this[_0x49c695(753) + "st"](_0x4175da);
      if (_0x1da6c1?.["locat" + _0x49c695(910)]) {
        let _0x1f62f2 = new URL(_0x1da6c1[_0x49c695(553) + "ion"]);
        this["flmf_" + _0x49c695(1632)] = _0x1f62f2["searc" + _0x49c695(838) + "ms"][_0x49c695(801)](_0xcf2f93[_0x49c695(947)]);
        this[_0x49c695(1120) + _0x49c695(1632)] ? (await this[_0x49c695(1120) + _0x49c695(692) + "nInit"](), await this[_0x49c695(1120) + _0x49c695(595) + "ist"](), await this[_0x49c695(1120) + _0x49c695(1379) + _0x49c695(598)]()) : this[_0x49c695(924)](_0x49c695(1553) + _0x49c695(1476) + "败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x341cad + "]");
      }
    } catch (_0x543196) {
      console.log(_0x543196);
    }
  }
  async [_0x41d484(1120) + _0x41d484(692) + "nInit"](_0x35e867 = {}) {
    const _0xa7fbe7 = _0x41d484,
      _0xa87787 = {};
    _0xa87787[_0xa7fbe7(363)] = "flmf_" + _0xa7fbe7(692) + "nInit";
    _0xa87787.lIqFc = _0xa7fbe7(1285) + "://we" + _0xa7fbe7(1155) + _0xa7fbe7(590) + _0xa7fbe7(1321) + "k/lv-" + "apiac" + _0xa7fbe7(1217) + "welfa" + _0xa7fbe7(893) + _0xa7fbe7(1623) + _0xa7fbe7(1062) + "Init";
    _0xa87787[_0xa7fbe7(438)] = _0xa7fbe7(1591) + _0xa7fbe7(1262);
    _0xa87787[_0xa7fbe7(1555)] = function (_0xd5b047, _0x275c6a) {
      return _0xd5b047 == _0x275c6a;
    };
    _0xa87787[_0xa7fbe7(412)] = _0xa7fbe7(340);
    const _0x5a587a = _0xa87787;
    try {
      let _0x31938c = {
          fn: _0x5a587a[_0xa7fbe7(363)],
          method: "post",
          url: _0x5a587a[_0xa7fbe7(938)],
          form: this[_0xa7fbe7(833) + _0xa7fbe7(687) + _0xa7fbe7(645)]()
        },
        {
          result: _0x35a4c0
        } = await this[_0xa7fbe7(753) + "st"](_0x31938c),
        _0x51ac78 = _0x473183.get(_0x35a4c0, _0x5a587a[_0xa7fbe7(438)], -1);
      if (_0x5a587a.Cnynd(_0x51ac78, _0x5a587a[_0xa7fbe7(412)])) {
        this[_0xa7fbe7(924)](_0xa7fbe7(465) + "天" + (_0x35a4c0?.[_0xa7fbe7(1247)]?.[_0xa7fbe7(706) + _0xa7fbe7(1134)] ? "已" : "未") + (_0xa7fbe7(353) + _0xa7fbe7(853)) + _0x35a4c0?.[_0xa7fbe7(1247)]?.["conse" + _0xa7fbe7(415) + "eDays"] + "天");
        if (!_0x35a4c0?.[_0xa7fbe7(1247)]?.[_0xa7fbe7(706) + _0xa7fbe7(1134)]) {
          await this.flmf_signIn();
        }
      } else {
        let _0xeb1d25 = _0x35a4c0?.["resul" + _0xa7fbe7(455)] || "";
        this[_0xa7fbe7(924)](_0xa7fbe7(953) + "询签到失败" + "[" + _0x51ac78 + _0xa7fbe7(1309) + _0xeb1d25);
      }
    } catch (_0x33b84f) {
      console.log(_0x33b84f);
    }
  }
  async [_0x41d484(1120) + _0x41d484(692) + "n"](_0x580b7d = {}) {
    const _0x6e8357 = _0x41d484,
      _0x357684 = {};
    _0x357684[_0x6e8357(435)] = "flmf_" + _0x6e8357(692) + "n";
    _0x357684.Pcomw = "post";
    _0x357684[_0x6e8357(939)] = _0x6e8357(1591) + _0x6e8357(1262);
    _0x357684[_0x6e8357(815)] = _0x6e8357(340);
    const _0x42c189 = _0x357684;
    try {
      let _0x254374 = {
          fn: _0x42c189[_0x6e8357(435)],
          method: _0x42c189[_0x6e8357(874)],
          url: _0x6e8357(1285) + _0x6e8357(999) + "ixin." + _0x6e8357(590) + _0x6e8357(1321) + _0x6e8357(403) + _0x6e8357(740) + _0x6e8357(1217) + _0x6e8357(497) + _0x6e8357(893) + _0x6e8357(1623) + _0x6e8357(1062),
          form: this[_0x6e8357(833) + "lmf_d" + _0x6e8357(645)]()
        },
        {
          result: _0x4e0bf7
        } = await this[_0x6e8357(753) + "st"](_0x254374),
        _0x3fdf90 = _0x473183[_0x6e8357(801)](_0x4e0bf7, _0x42c189.Yitje, -1);
      if (_0x3fdf90 == _0x42c189[_0x6e8357(815)]) {
        this[_0x6e8357(924)](_0x6e8357(1292) + _0x6e8357(346));
      } else {
        let _0x5bf804 = _0x4e0bf7?.["resul" + _0x6e8357(455)] || "";
        this.log(_0x6e8357(1292) + "到失败[" + _0x3fdf90 + _0x6e8357(1309) + _0x5bf804);
      }
    } catch (_0xf3259b) {
      console[_0x6e8357(924)](_0xf3259b);
    }
  }
  async ["flmf_taskL" + _0x41d484(1475)](_0x833434 = {}) {
    const _0x106ee4 = _0x41d484,
      _0x27d31a = {};
    _0x27d31a[_0x106ee4(446)] = _0x106ee4(1401);
    _0x27d31a.mVqhi = _0x106ee4(1591) + _0x106ee4(1262);
    _0x27d31a.Gzrjc = function (_0x1ded95, _0x2187e7) {
      return _0x1ded95 == _0x2187e7;
    };
    _0x27d31a[_0x106ee4(1195)] = _0x106ee4(340);
    _0x27d31a.YlkCF = function (_0x3b2760, _0x5457e8) {
      return _0x3b2760 < _0x5457e8;
    };
    const _0x8b65be = _0x27d31a;
    try {
      let _0x278e72 = {
          fn: _0x106ee4(1120) + "taskL" + "ist",
          method: _0x8b65be.nXJhR,
          url: "https://weixin." + _0x106ee4(590) + _0x106ee4(1321) + _0x106ee4(403) + "apiac" + _0x106ee4(1217) + _0x106ee4(497) + _0x106ee4(893) + _0x106ee4(625) + "askLi" + "st",
          form: this[_0x106ee4(833) + _0x106ee4(687) + _0x106ee4(645)]()
        },
        {
          result: _0x26123f
        } = await this[_0x106ee4(753) + "st"](_0x278e72),
        _0x195d76 = _0x473183[_0x106ee4(801)](_0x26123f, _0x8b65be[_0x106ee4(1483)], -1);
      if (_0x8b65be[_0x106ee4(1254)](_0x195d76, _0x8b65be[_0x106ee4(1195)])) {
        for (let _0x38041d of _0x26123f?.[_0x106ee4(1247)]?.["taskI" + _0x106ee4(529) + "st"]) {
          for (let _0x3b911a of _0x38041d[_0x106ee4(945) + _0x106ee4(529) + "st"].filter(_0x43b8d7 => !_0x43b8d7[_0x106ee4(895)])) {
            for (let _0x51b7cb = _0x3b911a[_0x106ee4(1045) + _0x106ee4(1053)]; _0x8b65be.YlkCF(_0x51b7cb, _0x3b911a[_0x106ee4(1678)]); _0x51b7cb++) {
              await this[_0x106ee4(1120) + _0x106ee4(1182) + _0x106ee4(599)](_0x3b911a.id);
            }
          }
        }
      } else {
        let _0x679ec3 = _0x26123f?.[_0x106ee4(1591) + _0x106ee4(455)] || "";
        this.log(_0x106ee4(953) + _0x106ee4(1570) + "[" + _0x195d76 + _0x106ee4(1309) + _0x679ec3);
      }
    } catch (_0x4f73cc) {
      console.log(_0x4f73cc);
    }
  }
  async [_0x41d484(1120) + "scanT" + _0x41d484(598)]() {
    const _0x203b30 = _0x41d484;
    for (let _0x4fdaef of _0x25479b) {
      await this[_0x203b30(1120) + "gogLa" + _0x203b30(599)](_0x4fdaef);
    }
  }
  async [_0x41d484(1120) + _0x41d484(1182) + _0x41d484(599)](_0x1f6412, _0x2ac412 = {}) {
    const _0x1d3358 = _0x41d484,
      _0x189fbd = {};
    _0x189fbd[_0x1d3358(1345)] = _0x1d3358(1120) + _0x1d3358(1182) + _0x1d3358(599);
    _0x189fbd[_0x1d3358(1179)] = _0x1d3358(1401);
    _0x189fbd[_0x1d3358(1383)] = function (_0x2efb67, _0x4eb7ad) {
      return _0x2efb67 == _0x4eb7ad;
    };
    _0x189fbd.jsMeT = _0x1d3358(340);
    const _0x26519a = _0x189fbd;
    try {
      let _0x14e3b0 = {
          fn: _0x26519a.JoRNz,
          method: _0x26519a[_0x1d3358(1179)],
          url: _0x1d3358(1285) + _0x1d3358(999) + "ixin." + _0x1d3358(590) + _0x1d3358(1321) + _0x1d3358(403) + _0x1d3358(740) + _0x1d3358(1217) + _0x1d3358(497) + _0x1d3358(893) + _0x1d3358(343) + "ogLan" + "ce",
          form: {
            taskId: _0x1f6412,
            ...this[_0x1d3358(833) + _0x1d3358(687) + _0x1d3358(645)]()
          }
        },
        {
          result: _0x237d62
        } = await this[_0x1d3358(753) + "st"](_0x14e3b0);
      await _0x473183[_0x1d3358(1348) + _0x1d3358(632) + _0x1d3358(594) + "al"](this["t_flm" + _0x1d3358(1305) + "k"], _0x3aa919);
      let _0x4c1c6b = _0x473183.get(_0x237d62, _0x1d3358(1591) + _0x1d3358(1262), -1);
      this[_0x1d3358(1333) + _0x1d3358(1305) + "k"] = Date[_0x1d3358(1135)]();
      if (_0x26519a.VpbiL(_0x4c1c6b, _0x26519a[_0x1d3358(1181)])) {
        this[_0x1d3358(924)](_0x1d3358(602) + _0x1f6412 + "]成功");
      } else {
        let _0x53e04 = _0x237d62?.[_0x1d3358(1591) + _0x1d3358(455)] || "";
        this[_0x1d3358(924)]("完成任务[" + _0x1f6412 + _0x1d3358(903) + _0x4c1c6b + _0x1d3358(1309) + _0x53e04);
      }
    } catch (_0x2f474e) {
      console[_0x1d3358(924)](_0x2f474e);
    }
  }
  async [_0x41d484(328) + _0x41d484(881)](_0xd5f357) {
    const _0x4901aa = _0x41d484,
      _0x61070e = {};
    _0x61070e[_0x4901aa(811)] = _0x4901aa(1042);
    const _0x10d067 = _0x61070e;
    let _0x38fc65 = await this.request(_0x473183[_0x4901aa(677)](_0xd5f357)),
      _0xb4b301 = _0x38fc65?.["result"]?.["message"] || "";
    _0xb4b301?.["inclu" + _0x4901aa(1391)](_0x10d067[_0x4901aa(811)]) && (await this[_0x4901aa(328) + _0x4901aa(892) + "h"]()) && (await this[_0x4901aa(328) + _0x4901aa(1264) + "in"]()) && (_0x38fc65 = await this[_0x4901aa(753) + "st"](_0x473183[_0x4901aa(677)](_0xd5f357)));
    return _0x38fc65;
  }
  async ["worea" + _0x41d484(892) + "h"](_0x152c99 = {}) {
    const _0x165abe = _0x41d484,
      _0x356aa4 = {
        uRnsk: function (_0x370c48, _0x1bf240) {
          return _0x370c48 + _0x1bf240;
        },
        jGErX: _0x165abe(328) + _0x165abe(892) + "h"
      };
    _0x356aa4.uRnsk = function (_0x370c48, _0x1bf240) {
      return _0x370c48 + _0x1bf240;
    };
    _0x356aa4.jGErX = _0x165abe(328) + _0x165abe(892) + "h";
    _0x356aa4[_0x165abe(1433)] = _0x165abe(379);
    _0x356aa4[_0x165abe(1040)] = function (_0x3bd140, _0x31f85c) {
      return _0x3bd140 == _0x31f85c;
    };
    _0x356aa4[_0x165abe(431)] = _0x165abe(340);
    const _0x5a5bd2 = _0x356aa4;
    let _0x42b80d = false;
    try {
      let _0x4f7700 = _0x473183[_0x165abe(341)]("yyyyM" + _0x165abe(1543) + _0x165abe(1167));
      const _0x43b80e = {};
      _0x43b80e[_0x165abe(831) + _0x165abe(1119)] = _0x4f7700;
      let _0x52639a = this[_0x165abe(748) + _0x165abe(1616) + "ead"](_0x43b80e),
        _0x2c4213 = Date.now()["toStr" + _0x165abe(1489)](),
        _0x7f1fa0 = _0x1c4152[_0x165abe(1645)](_0x5a5bd2.uRnsk(_0x233ff0 + _0x2a484f, _0x2c4213))[_0x165abe(1554) + _0x165abe(1489)]();
      const _0x235f30 = {};
      _0x235f30[_0x165abe(1565)] = _0x52639a;
      const _0x4557ac = {
        fn: _0x5a5bd2[_0x165abe(1205)]
      };
      _0x4557ac.fn = _0x5a5bd2[_0x165abe(1205)];
      _0x4557ac[_0x165abe(1363) + "d"] = _0x165abe(1401);
      _0x4557ac[_0x165abe(1296)] = _0x165abe(1285) + _0x165abe(880) + _0x165abe(1395) + _0x165abe(674) + ".com." + "cn/ng" + _0x165abe(1445) + _0x165abe(318) + _0x165abe(737) + "/rest" + _0x165abe(401) + _0x165abe(653) + _0x233ff0 + "/" + _0x2c4213 + "/" + _0x7f1fa0;
      _0x4557ac[_0x165abe(859)] = _0x235f30;
      let _0x5b3cd3 = _0x4557ac,
        {
          result: _0xf83770
        } = await this[_0x165abe(753) + "st"](_0x5b3cd3),
        _0xfbd3d8 = _0x473183[_0x165abe(801)](_0xf83770, _0x5a5bd2[_0x165abe(1433)], -1);
      if (_0x5a5bd2[_0x165abe(1040)](_0xfbd3d8, _0x5a5bd2[_0x165abe(431)])) {
        _0x42b80d = true;
        this[_0x165abe(328) + _0x165abe(724) + _0x165abe(1241) + "ken"] = _0xf83770?.["data"]?.[_0x165abe(1596) + _0x165abe(1691) + "n"];
        this[_0x165abe(1145)] = this[_0x165abe(1145)].extend({
          headers: {
            accesstoken: this[_0x165abe(328) + _0x165abe(724) + _0x165abe(1241) + _0x165abe(1089)]
          }
        });
      } else {
        let _0x24fa68 = _0xf83770?.[_0x165abe(460) + "ge"] || "";
        this[_0x165abe(924)]("阅读专区获" + _0x165abe(574) + _0x165abe(1650) + _0x165abe(850) + _0xfbd3d8 + _0x165abe(1309) + _0x24fa68);
      }
    } catch (_0x2641d7) {
      console[_0x165abe(924)](_0x2641d7);
    } finally {
      return _0x42b80d;
    }
  }
  async [_0x41d484(328) + _0x41d484(1264) + "in"](_0x382510 = {}) {
    const _0x3c23c4 = _0x41d484,
      _0x594f2f = {};
    _0x594f2f[_0x3c23c4(626)] = "code";
    _0x594f2f.oXEHn = _0x3c23c4(340);
    const _0x3bc41b = _0x594f2f;
    let _0x4047d9 = false;
    try {
      let _0x36a7fa = {
          phone: this[_0x3c23c4(1026) + "e"],
          timestamp: _0x473183.time("yyyyMMddhh" + _0x3c23c4(1167))
        },
        _0x4e6a58 = this[_0x3c23c4(748) + "e_wor" + "ead"](_0x36a7fa);
      const _0x4cb443 = {
        sign: _0x4e6a58
      };
      const _0x5e8a61 = {
        fn: _0x3c23c4(328) + _0x3c23c4(1264) + "in"
      };
      _0x5e8a61.fn = _0x3c23c4(328) + _0x3c23c4(1264) + "in";
      _0x5e8a61[_0x3c23c4(1363) + "d"] = _0x3c23c4(1401);
      _0x5e8a61[_0x3c23c4(1296)] = _0x3c23c4(1285) + _0x3c23c4(880) + _0x3c23c4(1395) + _0x3c23c4(674) + _0x3c23c4(826) + _0x3c23c4(1113) + _0x3c23c4(1445) + _0x3c23c4(318) + _0x3c23c4(737) + _0x3c23c4(904) + _0x3c23c4(568) + _0x3c23c4(841) + _0x3c23c4(531);
      _0x5e8a61[_0x3c23c4(859)] = _0x4cb443;
      let _0x2d50e5 = _0x5e8a61,
        {
          result: _0x5e772e
        } = await this[_0x3c23c4(753) + "st"](_0x2d50e5),
        _0x2d4d35 = _0x473183[_0x3c23c4(801)](_0x5e772e, _0x3bc41b.LhtJA, -1);
      if (_0x2d4d35 == _0x3bc41b.oXEHn) {
        _0x4047d9 = true;
        let {
          userid: _0x10cd29,
          userindex: _0x5999f6,
          token: _0x302722,
          verifycode: _0x5f17aa
        } = _0x5e772e?.["data"];
        this[_0x3c23c4(328) + _0x3c23c4(1530) + "en"] = _0x302722;
        this[_0x3c23c4(328) + _0x3c23c4(1552) + "ifyco" + "de"] = _0x5f17aa;
        const _0x5a0612 = {};
        _0x5a0612["worea" + _0x3c23c4(920) + _0x3c23c4(1341)] = _0x10cd29;
        _0x5a0612[_0x3c23c4(328) + _0x3c23c4(920) + _0x3c23c4(1572) + "x"] = _0x5999f6;
        _0x5a0612[_0x3c23c4(328) + _0x3c23c4(1530) + "en"] = _0x302722;
        _0x5a0612[_0x3c23c4(328) + _0x3c23c4(1552) + _0x3c23c4(1638) + "de"] = _0x5f17aa;
        Object.assign(this, _0x5a0612);
      } else {
        let _0x3daa10 = _0x5e772e?.[_0x3c23c4(460) + "ge"] || "";
        this.log("阅读专区获取toke" + _0x3c23c4(1002) + _0x2d4d35 + _0x3c23c4(1309) + _0x3daa10);
      }
    } catch (_0x34708f) {
      console.log(_0x34708f);
    } finally {
      return _0x4047d9;
    }
  }
  async [_0x41d484(328) + _0x41d484(949) + "SeeVi" + _0x41d484(515) + _0x41d484(1384) + "er"](_0x4e3686, _0x2c239a = {}) {
    const _0x2d01c6 = _0x41d484,
      _0x2f87c7 = {
        RPEBx: "post"
      };
    _0x2f87c7.RPEBx = "post";
    _0x2f87c7[_0x2d01c6(957)] = _0x2d01c6(379);
    _0x2f87c7[_0x2d01c6(520)] = function (_0x5cf6ad, _0x3ec0e6) {
      return _0x5cf6ad == _0x3ec0e6;
    };
    const _0x7f6b70 = _0x2f87c7;
    try {
      let _0x545f97 = {
          activityIndex: _0x4e3686,
          ...this[_0x2d01c6(536) + _0x2d01c6(674) + _0x2d01c6(1322) + "m"]()
        },
        _0x15cce5 = this["encod" + _0x2d01c6(1616) + _0x2d01c6(1589)](_0x545f97);
      const _0x27caca = {};
      _0x27caca[_0x2d01c6(1565)] = _0x15cce5;
      const _0x25f486 = {
        fn: _0x2d01c6(328) + _0x2d01c6(949) + _0x2d01c6(1454) + _0x2d01c6(515) + _0x2d01c6(1384) + "er"
      };
      _0x25f486.fn = _0x2d01c6(328) + _0x2d01c6(949) + _0x2d01c6(1454) + _0x2d01c6(515) + _0x2d01c6(1384) + "er";
      _0x25f486[_0x2d01c6(1363) + "d"] = _0x7f6b70[_0x2d01c6(982)];
      _0x25f486[_0x2d01c6(1296)] = _0x2d01c6(1285) + _0x2d01c6(880) + "010.w" + _0x2d01c6(674) + ".com." + _0x2d01c6(1113) + _0x2d01c6(1445) + _0x2d01c6(318) + _0x2d01c6(737) + _0x2d01c6(904) + _0x2d01c6(1583) + _0x2d01c6(1750) + _0x2d01c6(994) + "eVide" + _0x2d01c6(872) + _0x2d01c6(489);
      _0x25f486[_0x2d01c6(859)] = _0x27caca;
      let _0x34d477 = _0x25f486,
        {
          result: _0x3cb2bf
        } = await this["worea" + _0x2d01c6(881)](_0x34d477),
        _0x540d42 = _0x473183[_0x2d01c6(801)](_0x3cb2bf, _0x7f6b70[_0x2d01c6(957)], -1);
      if (_0x7f6b70.bgMbi(_0x540d42, "0000")) {
        _0x7f6b70.bgMbi(_0x3cb2bf?.[_0x2d01c6(1247)], -1) && (await this[_0x2d01c6(328) + _0x2d01c6(534) + _0x2d01c6(960) + "eeVid" + "eo"](_0x4e3686));
      } else {
        let _0x41ef6d = _0x3cb2bf?.["message"] || "";
        this.log(_0x2d01c6(1253) + _0x4e3686 + (_0x2d01c6(349) + _0x2d01c6(984)) + _0x540d42 + "]: " + _0x41ef6d);
      }
    } catch (_0x4a7acf) {
      console[_0x2d01c6(924)](_0x4a7acf);
    }
  }
  async [_0x41d484(328) + _0x41d484(534) + _0x41d484(960) + "eeVid" + "eo"](_0x4ea424, _0x545bb9 = {}) {
    const _0x561428 = _0x41d484,
      _0x1fa4d6 = {};
    _0x1fa4d6[_0x561428(1058)] = _0x561428(328) + _0x561428(534) + _0x561428(960) + _0x561428(1033) + "eo";
    _0x1fa4d6[_0x561428(1252)] = _0x561428(1401);
    _0x1fa4d6.GYvjN = _0x561428(379);
    _0x1fa4d6[_0x561428(445)] = _0x561428(340);
    const _0x555458 = _0x1fa4d6;
    try {
      let _0xec6fe = _0x545bb9[_0x561428(1325)] || 5,
        _0x30cbfd = {
          activityIndex: _0x4ea424,
          num: _0xec6fe,
          ...this["get_w" + _0x561428(674) + _0x561428(1322) + "m"]()
        },
        _0x602a0a = this["encod" + _0x561428(1616) + _0x561428(1589)](_0x30cbfd);
      const _0x5e78ac = {
        sign: _0x602a0a
      };
      const _0x37dc40 = {
        fn: _0x555458[_0x561428(1058)]
      };
      _0x37dc40.fn = _0x555458[_0x561428(1058)];
      _0x37dc40[_0x561428(1363) + "d"] = _0x555458.KZcoj;
      _0x37dc40[_0x561428(1296)] = "https" + _0x561428(880) + _0x561428(1395) + _0x561428(674) + _0x561428(826) + _0x561428(1113) + _0x561428(1445) + _0x561428(318) + _0x561428(737) + _0x561428(904) + _0x561428(1583) + _0x561428(1750) + _0x561428(1240) + _0x561428(1234) + _0x561428(1526);
      _0x37dc40[_0x561428(859)] = _0x5e78ac;
      let _0x43a651 = _0x37dc40,
        {
          result: _0x51eceb
        } = await this[_0x561428(328) + _0x561428(881)](_0x43a651),
        _0x497a2d = _0x473183.get(_0x51eceb, _0x555458[_0x561428(607)], -1);
      if (_0x497a2d == _0x555458[_0x561428(445)]) {
        this[_0x561428(924)](_0x561428(1253) + _0x4ea424 + (_0x561428(1072) + _0x561428(1603) + "成功"));
      } else {
        let _0x3467d4 = _0x51eceb?.[_0x561428(460) + "ge"] || "";
        this.log(_0x561428(1253) + _0x4ea424 + (_0x561428(1072) + _0x561428(1603) + _0x561428(1417)) + _0x497a2d + _0x561428(1309) + _0x3467d4);
      }
    } catch (_0x30ff9f) {
      console[_0x561428(924)](_0x30ff9f);
    }
  }
  async ["worea" + _0x41d484(949) + "Activ" + _0x41d484(1693) + _0x41d484(1524)](_0xdf9a3f, _0x424a08 = {}) {
    const _0x29bcf9 = _0x41d484,
      _0x2d132f = {};
    _0x2d132f[_0x29bcf9(1196)] = _0x29bcf9(1401);
    _0x2d132f[_0x29bcf9(1382)] = _0x29bcf9(379);
    _0x2d132f[_0x29bcf9(834)] = function (_0x3cfd36, _0x391edc) {
      return _0x3cfd36 == _0x391edc;
    };
    _0x2d132f[_0x29bcf9(1201)] = function (_0x29d8be, _0x5c8dc6) {
      return _0x29d8be > _0x5c8dc6;
    };
    const _0x12aaf3 = _0x2d132f;
    try {
      let _0x4d80e6 = {
          activeIndex: _0xdf9a3f,
          ...this[_0x29bcf9(536) + _0x29bcf9(674) + "_para" + "m"]()
        },
        _0x43e2a2 = this[_0x29bcf9(748) + _0x29bcf9(1616) + _0x29bcf9(1589)](_0x4d80e6);
      const _0xf67443 = {
        sign: _0x43e2a2
      };
      const _0x22d6d5 = {
        fn: _0x29bcf9(328) + _0x29bcf9(949) + _0x29bcf9(1394) + _0x29bcf9(1693) + "mber"
      };
      _0x22d6d5.fn = _0x29bcf9(328) + _0x29bcf9(949) + _0x29bcf9(1394) + _0x29bcf9(1693) + "mber";
      _0x22d6d5[_0x29bcf9(1363) + "d"] = _0x12aaf3.MIBUn;
      _0x22d6d5[_0x29bcf9(1296)] = _0x29bcf9(1285) + _0x29bcf9(880) + _0x29bcf9(1395) + "oread" + _0x29bcf9(826) + _0x29bcf9(1113) + _0x29bcf9(1445) + _0x29bcf9(318) + _0x29bcf9(737) + _0x29bcf9(904) + _0x29bcf9(1583) + _0x29bcf9(1750) + _0x29bcf9(587) + "tivit" + _0x29bcf9(866) + "er";
      _0x22d6d5.json = _0xf67443;
      let _0x4ad477 = _0x22d6d5,
        {
          result: _0x263f50
        } = await this[_0x29bcf9(328) + "d_api"](_0x4ad477),
        _0x1e785b = _0x473183[_0x29bcf9(801)](_0x263f50, _0x12aaf3[_0x29bcf9(1382)], -1);
      if (_0x12aaf3[_0x29bcf9(834)](_0x1e785b, _0x29bcf9(340))) {
        let _0x224418 = _0x263f50?.[_0x29bcf9(1247)] || 0;
        this.log("阅读活动[" + _0xdf9a3f + _0x29bcf9(628) + _0x224418 + "次");
        while (_0x12aaf3.TrPfl(_0x224418--, 0)) {
          await this["woread_doD" + _0x29bcf9(1052)](_0xdf9a3f);
        }
      } else {
        let _0x4d1400 = _0x263f50?.["message"] || "";
        this[_0x29bcf9(924)](_0x29bcf9(1253) + _0xdf9a3f + (_0x29bcf9(349) + _0x29bcf9(1330)) + _0x1e785b + "]: " + _0x4d1400);
      }
    } catch (_0x43f7b3) {
      console[_0x29bcf9(924)](_0x43f7b3);
    }
  }
  async [_0x41d484(328) + _0x41d484(534) + _0x41d484(1121) + _0x41d484(344)](_0x3a5f59, _0x350aa9 = {}) {
    const _0x2df268 = _0x41d484,
      _0x204d30 = {
        WyLPG: _0x2df268(340)
      };
    _0x204d30.WyLPG = _0x2df268(340);
    _0x204d30[_0x2df268(1015)] = _0x2df268(886);
    const _0x4f79e3 = _0x204d30;
    try {
      let _0x52ef98 = {
          activetyindex: _0x3a5f59,
          ...this["get_w" + _0x2df268(674) + _0x2df268(1322) + "m"]()
        },
        _0x22f2f6 = this[_0x2df268(748) + _0x2df268(1616) + _0x2df268(1589)](_0x52ef98);
      const _0x224bc0 = {
        sign: _0x22f2f6
      };
      const _0x7ca7fa = {
        fn: _0x2df268(328) + _0x2df268(534) + "DrawT" + _0x2df268(344)
      };
      _0x7ca7fa.fn = _0x2df268(328) + _0x2df268(534) + "DrawT" + _0x2df268(344);
      _0x7ca7fa[_0x2df268(1363) + "d"] = _0x2df268(1401);
      _0x7ca7fa.url = _0x2df268(1285) + "://10" + _0x2df268(1395) + _0x2df268(674) + ".com." + _0x2df268(1113) + "_wore" + "ad_se" + "rvice" + _0x2df268(904) + _0x2df268(1585) + "cs/ad" + "dDraw" + _0x2df268(1420);
      _0x7ca7fa.json = _0x224bc0;
      let _0x13d8d7 = _0x7ca7fa;
      await _0x473183[_0x2df268(1348) + _0x2df268(632) + _0x2df268(594) + "al"](this[_0x2df268(1213) + _0x2df268(1480) + _0x2df268(1052)], _0x4e3cbe);
      let {
        result: _0x28305e
      } = await this[_0x2df268(328) + _0x2df268(881)](_0x13d8d7);
      this[_0x2df268(1213) + _0x2df268(1480) + _0x2df268(1052)] = Date[_0x2df268(1135)]();
      let _0x5af266 = _0x473183.get(_0x28305e, "code", -1);
      if (_0x5af266 == _0x4f79e3[_0x2df268(1459)]) {
        this[_0x2df268(924)](_0x2df268(1253) + _0x3a5f59 + (_0x2df268(700) + "抽奖次数成" + "功"));
      } else {
        if (_0x5af266 != _0x4f79e3.bbdoc) {
          let _0x4a1b27 = _0x28305e?.[_0x2df268(460) + "ge"] || "";
          this[_0x2df268(924)](_0x2df268(1253) + _0x3a5f59 + (_0x2df268(700) + _0x2df268(1599) + "败[") + _0x5af266 + _0x2df268(1309) + _0x4a1b27);
        }
      }
    } catch (_0x2d957e) {
      console[_0x2df268(924)](_0x2d957e);
    }
  }
  async [_0x41d484(328) + _0x41d484(1652) + _0x41d484(1052)](_0x3f9a24, _0x1ab9bd = {}) {
    const _0x2144a4 = _0x41d484,
      _0x4e5508 = {
        CrAMf: "code"
      };
    _0x4e5508.CrAMf = "code";
    _0x4e5508[_0x2144a4(652)] = function (_0x28000f, _0x29a9b2) {
      return _0x28000f == _0x29a9b2;
    };
    _0x4e5508[_0x2144a4(922)] = "0000";
    const _0x224ba4 = _0x4e5508;
    try {
      let _0x5d57b2 = {
          activeindex: _0x3f9a24,
          ...this[_0x2144a4(536) + "oread" + "_para" + "m"]()
        },
        _0x283e7a = this[_0x2144a4(748) + "e_wor" + _0x2144a4(1589)](_0x5d57b2);
      const _0x3acc78 = {};
      _0x3acc78[_0x2144a4(1565)] = _0x283e7a;
      let _0x3c9dd1 = {
        fn: _0x2144a4(328) + _0x2144a4(1652) + _0x2144a4(1052),
        method: _0x2144a4(1401),
        url: "https" + _0x2144a4(880) + "010.w" + "oread" + _0x2144a4(826) + "cn/ng" + _0x2144a4(1445) + "ad_se" + _0x2144a4(737) + _0x2144a4(904) + "/basi" + _0x2144a4(370) + "Draw",
        json: _0x3acc78
      };
      await _0x473183[_0x2144a4(1348) + _0x2144a4(632) + _0x2144a4(594) + "al"](this[_0x2144a4(1213) + _0x2144a4(1480) + _0x2144a4(1052)], _0x4e3cbe);
      let {
        result: _0x123c4f
      } = await this[_0x2144a4(328) + _0x2144a4(881)](_0x3c9dd1);
      this[_0x2144a4(1213) + _0x2144a4(1480) + _0x2144a4(1052)] = Date[_0x2144a4(1135)]();
      let _0xd9aed0 = _0x473183[_0x2144a4(801)](_0x123c4f, _0x224ba4[_0x2144a4(1597)], -1);
      if (_0x224ba4[_0x2144a4(652)](_0xd9aed0, _0x224ba4.gCShP)) {
        const _0x1d1f59 = {};
        _0x1d1f59[_0x2144a4(778) + "y"] = true;
        this[_0x2144a4(924)]("阅读活动[" + _0x3f9a24 + _0x2144a4(524) + (_0x123c4f?.["data"]?.["prizedesc"] || "空气"), _0x1d1f59);
      } else {
        let _0x53d783 = _0x123c4f?.[_0x2144a4(460) + "ge"] || "";
        this[_0x2144a4(924)](_0x2144a4(1253) + _0x3f9a24 + (_0x2144a4(426) + "[") + _0xd9aed0 + "]: " + _0x53d783);
      }
    } catch (_0x63f363) {
      console.log(_0x63f363);
    }
  }
  async [_0x41d484(328) + _0x41d484(888) + _0x41d484(699) + _0x41d484(1753) + "count"](_0x4381f7 = {}) {
    const _0x4b254d = _0x41d484,
      _0x3c2a2b = {};
    _0x3c2a2b[_0x4b254d(1332)] = _0x4b254d(328) + _0x4b254d(888) + _0x4b254d(699) + _0x4b254d(1753) + "count";
    _0x3c2a2b[_0x4b254d(998)] = _0x4b254d(1401);
    _0x3c2a2b[_0x4b254d(535)] = _0x4b254d(379);
    _0x3c2a2b[_0x4b254d(389)] = _0x4b254d(340);
    _0x3c2a2b.IYoAP = function (_0x115722, _0xad735d) {
      return _0x115722 / _0xad735d;
    };
    const _0x54fadb = _0x3c2a2b;
    try {
      let _0x4b17b9 = this["get_w" + _0x4b254d(674) + _0x4b254d(1322) + "m"](),
        _0x39fa7f = this[_0x4b254d(748) + _0x4b254d(1616) + _0x4b254d(1589)](_0x4b17b9);
      const _0x30da7e = {
        sign: _0x39fa7f
      };
      const _0x4d5c56 = {
        fn: _0x54fadb[_0x4b254d(1332)]
      };
      _0x4d5c56.fn = _0x54fadb[_0x4b254d(1332)];
      _0x4d5c56[_0x4b254d(1363) + "d"] = _0x54fadb[_0x4b254d(998)];
      _0x4d5c56[_0x4b254d(1296)] = _0x4b254d(1285) + _0x4b254d(880) + "010.w" + _0x4b254d(674) + _0x4b254d(826) + "cn/ng" + _0x4b254d(1445) + _0x4b254d(318) + _0x4b254d(737) + "/rest" + _0x4b254d(1102) + _0x4b254d(1331) + _0x4b254d(459) + _0x4b254d(610) + _0x4b254d(1692) + _0x4b254d(983) + "ount";
      _0x4d5c56[_0x4b254d(859)] = _0x30da7e;
      let _0x34c409 = _0x4d5c56,
        {
          result: _0xb6e2de
        } = await this[_0x4b254d(328) + _0x4b254d(881)](_0x34c409),
        _0x434ffd = _0x473183[_0x4b254d(801)](_0xb6e2de, _0x54fadb.rxEPd, -1);
      if (_0x434ffd == _0x54fadb[_0x4b254d(389)]) {
        let _0x3f2d6d = _0x54fadb[_0x4b254d(532)](_0xb6e2de?.[_0x4b254d(1247)]?.[_0x4b254d(1268) + _0x4b254d(1446)], 100)[_0x4b254d(440) + "ed"](2);
        const _0x5e8c50 = {};
        _0x5e8c50[_0x4b254d(778) + "y"] = true;
        this[_0x4b254d(924)](_0x4b254d(1665) + _0x4b254d(1488) + " " + _0x3f2d6d, _0x5e8c50);
      } else {
        let _0x30b8b3 = _0xb6e2de?.[_0x4b254d(460) + "ge"] || "";
        this[_0x4b254d(924)](_0x4b254d(1626) + _0x4b254d(1144) + _0x4b254d(436) + _0x434ffd + _0x4b254d(1309) + _0x30b8b3);
      }
    } catch (_0x5b5749) {
      console[_0x4b254d(924)](_0x5b5749);
    }
  }
  async [_0x41d484(328) + "d_add" + _0x41d484(1494) + _0x41d484(358)](_0x24298c = {}) {
    const _0x3a61f8 = _0x41d484,
      _0x3971a8 = {};
    _0x3971a8[_0x3a61f8(1371)] = "409672";
    _0x3971a8[_0x3a61f8(1162)] = "10683";
    _0x3971a8[_0x3a61f8(552)] = _0x3a61f8(328) + _0x3a61f8(534) + "ReadT" + _0x3a61f8(358);
    _0x3971a8[_0x3a61f8(1523)] = "post";
    _0x3971a8[_0x3a61f8(705)] = _0x3a61f8(379);
    _0x3971a8.ESyKR = function (_0x4721ea, _0x3ea5b2) {
      return _0x4721ea == _0x3ea5b2;
    };
    _0x3971a8[_0x3a61f8(551)] = function (_0x3446a4, _0x3a631a) {
      return _0x3446a4 / _0x3a631a;
    };
    _0x3971a8[_0x3a61f8(591)] = function (_0x2653b6, _0x443808) {
      return _0x2653b6 / _0x443808;
    };
    _0x3971a8[_0x3a61f8(1450)] = function (_0x5c0a53, _0x39e5f4) {
      return _0x5c0a53 >= _0x39e5f4;
    };
    _0x3971a8[_0x3a61f8(1563)] = function (_0x55f423, _0x300ae6) {
      return _0x55f423 * _0x300ae6;
    };
    _0x3971a8[_0x3a61f8(799)] = function (_0x1fce03, _0x27734f) {
      return _0x1fce03 * _0x27734f;
    };
    const _0xefd691 = _0x3971a8;
    try {
      let {
          readTime = 2,
          cntindex = _0xefd691[_0x3a61f8(1371)],
          cntIndex = _0xefd691[_0x3a61f8(1371)],
          cnttype = "1",
          cntType = 1,
          cardid = _0x3a61f8(506),
          catid = _0x3a61f8(1367) + "1",
          pageIndex = _0xefd691[_0x3a61f8(1162)],
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x24298c,
        _0x23b8a5 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this[_0x3a61f8(536) + "oread" + "_para" + "m"]()
        },
        _0x12b1c1 = this["encod" + _0x3a61f8(1616) + _0x3a61f8(1589)](_0x23b8a5);
      const _0x44915c = {};
      _0x44915c[_0x3a61f8(1565)] = _0x12b1c1;
      const _0x112d0d = {
        fn: _0xefd691[_0x3a61f8(552)]
      };
      _0x112d0d.fn = _0xefd691[_0x3a61f8(552)];
      _0x112d0d[_0x3a61f8(1363) + "d"] = _0xefd691[_0x3a61f8(1523)];
      _0x112d0d[_0x3a61f8(1296)] = "https://10" + _0x3a61f8(1395) + _0x3a61f8(674) + _0x3a61f8(826) + _0x3a61f8(1113) + _0x3a61f8(1445) + _0x3a61f8(318) + _0x3a61f8(737) + _0x3a61f8(904) + _0x3a61f8(848) + "ory/a" + _0x3a61f8(744) + _0x3a61f8(981);
      _0x112d0d[_0x3a61f8(859)] = _0x44915c;
      let _0xaaf1b8 = _0x112d0d,
        {
          result: _0x4d57dd
        } = await this.request(_0xaaf1b8),
        _0x3357a2 = _0x473183[_0x3a61f8(801)](_0x4d57dd, _0xefd691[_0x3a61f8(705)], -1);
      if (_0xefd691[_0x3a61f8(380)](_0x3357a2, _0x3a61f8(340))) {
        this.log(_0x3a61f8(615) + _0x3a61f8(1518) + _0xefd691[_0x3a61f8(551)](_0xefd691[_0x3a61f8(591)](_0x4d57dd?.["data"]?.["readt" + _0x3a61f8(358)], 60), 1000) + "分钟");
        _0xefd691[_0x3a61f8(1450)](_0x4d57dd?.["data"]?.[_0x3a61f8(1242) + _0x3a61f8(358)], _0xefd691[_0x3a61f8(1563)](_0xefd691[_0x3a61f8(799)](60, 60), 1000)) && (this[_0x3a61f8(1267) + _0x3a61f8(1014)] = true);
      } else {
        let _0x2df974 = _0x4d57dd?.[_0x3a61f8(460) + "ge"] || "";
        this[_0x3a61f8(924)](_0x3a61f8(615) + "时间失败[" + _0x3357a2 + _0x3a61f8(1309) + _0x2df974);
      }
    } catch (_0x394686) {
      console[_0x3a61f8(924)](_0x394686);
    }
  }
  async ["rabbl" + _0x41d484(1689) + _0x41d484(777) + "tivit" + _0x41d484(745)](_0x4aecf5 = {}) {
    const _0x519a9f = _0x41d484,
      _0x51504a = {
        nARzt: "post"
      };
    _0x51504a.nARzt = "post";
    _0x51504a[_0x519a9f(1161)] = _0x519a9f(379);
    _0x51504a[_0x519a9f(312)] = function (_0x5a4b0, _0x2e4c4a) {
      return _0x5a4b0 == _0x2e4c4a;
    };
    _0x51504a.aDIwF = _0x519a9f(340);
    _0x51504a[_0x519a9f(1245)] = function (_0x22d995, _0x55a2d1) {
      return _0x22d995 == _0x55a2d1;
    };
    _0x51504a[_0x519a9f(830)] = function (_0x4ac205, _0x57cce0) {
      return _0x4ac205 >= _0x57cce0;
    };
    const _0x18fa6d = _0x51504a;
    try {
      let _0x4a4da3 = {
          activeIndex: 26,
          ...this[_0x519a9f(536) + _0x519a9f(674) + _0x519a9f(1322) + "m"]()
        },
        _0x37f794 = this[_0x519a9f(748) + _0x519a9f(1616) + _0x519a9f(1589)](_0x4a4da3);
      const _0x50d8ef = {};
      _0x50d8ef[_0x519a9f(1565)] = _0x37f794;
      const _0x47dd07 = {
        fn: "rabblit_qu" + _0x519a9f(777) + _0x519a9f(975) + "yData",
        method: _0x18fa6d.nARzt
      };
      _0x47dd07.fn = "rabblit_qu" + _0x519a9f(777) + _0x519a9f(975) + "yData";
      _0x47dd07.method = _0x18fa6d.nARzt;
      _0x47dd07[_0x519a9f(1296)] = _0x519a9f(1285) + "://10" + "010.w" + "oread" + _0x519a9f(826) + "cn/ng" + _0x519a9f(1445) + "ad_se" + _0x519a9f(737) + _0x519a9f(904) + _0x519a9f(1559) + _0x519a9f(902) + _0x519a9f(1598) + _0x519a9f(610) + _0x519a9f(481) + _0x519a9f(1437) + _0x519a9f(645);
      _0x47dd07[_0x519a9f(859)] = _0x50d8ef;
      let _0x46078d = _0x47dd07,
        {
          result: _0x14844c
        } = await this["worea" + _0x519a9f(881)](_0x46078d),
        _0xb3852a = _0x473183[_0x519a9f(801)](_0x14844c, _0x18fa6d[_0x519a9f(1161)], -1);
      if (_0x18fa6d.lHTve(_0xb3852a, _0x18fa6d[_0x519a9f(1131)])) {
        let {
          totalcharpternums: _0x578846,
          totalreadnums: _0x2d1858,
          status: _0x1e7cc1,
          activitystatus: _0x24f81c
        } = _0x14844c?.[_0x519a9f(1247)];
        if (_0x18fa6d[_0x519a9f(1245)](_0x24f81c, 1)) {
          this[_0x519a9f(1098) + _0x519a9f(1267) + _0x519a9f(741) + "t"] = false;
          const _0x4cd145 = {
            notify: true
          };
          this.log(_0x519a9f(925) + "天已完成", _0x4cd145);
          return;
        }
        this["need_" + _0x519a9f(1267) + "rabbi" + "t"] = true;
        this[_0x519a9f(924)](_0x519a9f(1154) + _0x519a9f(913) + _0x2d1858 + "/" + _0x578846 + "分钟");
        if (_0x1e7cc1 == 1) {
          await this[_0x519a9f(450) + _0x519a9f(1277) + "keRab" + _0x519a9f(1073)]();
        }
        if (_0x18fa6d[_0x519a9f(830)](_0x2d1858, _0x578846)) {
          await this[_0x519a9f(450) + _0x519a9f(728) + _0x519a9f(480) + _0x519a9f(1414) + "ty"]();
        }
      } else {
        let _0x5b8b26 = _0x14844c?.[_0x519a9f(460) + "ge"] || "";
        _0x5b8b26?.[_0x519a9f(1541) + _0x519a9f(1391)](_0x519a9f(1595)) && !_0x4aecf5[_0x519a9f(311) + _0x519a9f(900)] && (await this[_0x519a9f(450) + _0x519a9f(649) + "inRun" + _0x519a9f(1489)]()) ? (_0x4aecf5[_0x519a9f(311) + _0x519a9f(900)] = true, await this[_0x519a9f(450) + _0x519a9f(1689) + _0x519a9f(777) + "tivit" + _0x519a9f(745)](_0x4aecf5)) : this.log("龟兔赛跑查" + _0x519a9f(467) + "[" + _0xb3852a + _0x519a9f(1309) + _0x5b8b26);
      }
    } catch (_0x1725d9) {
      console[_0x519a9f(924)](_0x1725d9);
    }
  }
  async [_0x41d484(450) + _0x41d484(649) + _0x41d484(711) + _0x41d484(1489)](_0x22fbe1 = {}) {
    const _0x1df712 = _0x41d484,
      _0x27a300 = {};
    _0x27a300[_0x1df712(1251)] = _0x1df712(1401);
    _0x27a300[_0x1df712(1587)] = _0x1df712(379);
    _0x27a300[_0x1df712(1334)] = function (_0x154af6, _0x2bdbcb) {
      return _0x154af6 == _0x2bdbcb;
    };
    const _0x3a1448 = _0x27a300;
    let _0x1552dc = false;
    try {
      let _0x3e2200 = {
          activeIndex: 26,
          ...this["get_w" + _0x1df712(674) + _0x1df712(1322) + "m"]()
        },
        _0x3b2a3e = this[_0x1df712(748) + _0x1df712(1616) + _0x1df712(1589)](_0x3e2200);
      const _0x1f9aac = {
        sign: _0x3b2a3e
      };
      const _0x31e9e0 = {
        fn: _0x1df712(450) + _0x1df712(649) + _0x1df712(711) + _0x1df712(1489)
      };
      _0x31e9e0.fn = _0x1df712(450) + _0x1df712(649) + _0x1df712(711) + _0x1df712(1489);
      _0x31e9e0[_0x1df712(1363) + "d"] = _0x3a1448.OJOjp;
      _0x31e9e0[_0x1df712(1296)] = _0x1df712(1285) + _0x1df712(880) + _0x1df712(1395) + _0x1df712(674) + _0x1df712(826) + _0x1df712(1113) + "_wore" + _0x1df712(318) + "rvice" + _0x1df712(904) + _0x1df712(1559) + _0x1df712(902) + _0x1df712(1598) + _0x1df712(1270) + _0x1df712(1504) + "g";
      _0x31e9e0[_0x1df712(859)] = _0x1f9aac;
      let _0x1ac992 = _0x31e9e0,
        {
          result: _0x41bcbf
        } = await this[_0x1df712(328) + _0x1df712(881)](_0x1ac992),
        _0x44fb6e = _0x473183[_0x1df712(801)](_0x41bcbf, _0x3a1448.rTHvk, -1);
      if (_0x3a1448[_0x1df712(1334)](_0x44fb6e, _0x1df712(340))) {
        _0x1552dc = true;
        this[_0x1df712(924)]("龟兔赛跑报名成功");
      } else {
        let _0x51c54d = _0x41bcbf?.[_0x1df712(460) + "ge"] || "";
        this[_0x1df712(924)](_0x1df712(637) + "名失败[" + _0x44fb6e + "]: " + _0x51c54d);
      }
    } catch (_0x28741e) {
      console[_0x1df712(924)](_0x28741e);
    } finally {
      return _0x1552dc;
    }
  }
  async [_0x41d484(450) + _0x41d484(1277) + "keRab" + _0x41d484(1073)](_0x4e103d = {}) {
    const _0xdef3ae = _0x41d484,
      _0x4324cc = {};
    _0x4324cc[_0xdef3ae(1661)] = _0xdef3ae(450) + "it_wa" + _0xdef3ae(1043) + _0xdef3ae(1073);
    _0x4324cc[_0xdef3ae(1740)] = "post";
    _0x4324cc[_0xdef3ae(1132)] = "code";
    _0x4324cc[_0xdef3ae(451)] = function (_0x14f969, _0x49b9c9) {
      return _0x14f969 == _0x49b9c9;
    };
    _0x4324cc.hBnmX = "0000";
    const _0x6c9389 = _0x4324cc;
    try {
      let _0x2573fa = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this[_0xdef3ae(536) + _0xdef3ae(674) + _0xdef3ae(1322) + "m"]()
        },
        _0x506eee = this[_0xdef3ae(748) + _0xdef3ae(1616) + _0xdef3ae(1589)](_0x2573fa);
      const _0x54aef2 = {
        sign: _0x506eee
      };
      const _0x2471ef = {
        fn: _0x6c9389.jPgaV
      };
      _0x2471ef.fn = _0x6c9389.jPgaV;
      _0x2471ef[_0xdef3ae(1363) + "d"] = _0x6c9389[_0xdef3ae(1740)];
      _0x2471ef[_0xdef3ae(1296)] = "https" + _0xdef3ae(880) + _0xdef3ae(1395) + _0xdef3ae(674) + _0xdef3ae(826) + _0xdef3ae(1113) + _0xdef3ae(1445) + _0xdef3ae(318) + _0xdef3ae(737) + _0xdef3ae(904) + "/rabb" + "itAct" + _0xdef3ae(1598) + _0xdef3ae(816) + _0xdef3ae(1074) + "t";
      _0x2471ef[_0xdef3ae(859)] = _0x54aef2;
      let _0xa8cd49 = _0x2471ef;
      await _0x473183["wait_" + _0xdef3ae(632) + _0xdef3ae(594) + "al"](this[_0xdef3ae(1213) + _0xdef3ae(1480) + _0xdef3ae(1052)], _0x4e3cbe);
      let {
        result: _0x2a0a1e
      } = await this[_0xdef3ae(328) + _0xdef3ae(881)](_0xa8cd49);
      this["t_wor" + _0xdef3ae(1480) + _0xdef3ae(1052)] = Date[_0xdef3ae(1135)]();
      let _0x346d4b = _0x473183.get(_0x2a0a1e, _0x6c9389.JMMCV, -1);
      if (_0x6c9389.zTxie(_0x346d4b, _0x6c9389[_0xdef3ae(1672)])) {
        const _0x3b6815 = {};
        _0x3b6815[_0xdef3ae(778) + "y"] = true;
        this.log(_0xdef3ae(839) + _0xdef3ae(729) + ": " + (_0x2a0a1e?.[_0xdef3ae(1247)]?.[_0xdef3ae(1742) + _0xdef3ae(1088)] || "空气"), _0x3b6815);
      } else {
        let _0x319e58 = _0x2a0a1e?.["message"] || "";
        this[_0xdef3ae(924)](_0xdef3ae(839) + _0xdef3ae(586) + "[" + _0x346d4b + "]: " + _0x319e58);
      }
    } catch (_0x5f2699) {
      console[_0xdef3ae(924)](_0x5f2699);
    }
  }
  async [_0x41d484(450) + "it_fi" + _0x41d484(480) + "ctivi" + "ty"](_0x352dfc = {}) {
    const _0x2e6d48 = _0x41d484,
      _0x139ff4 = {};
    _0x139ff4[_0x2e6d48(648)] = "rabbl" + _0x2e6d48(728) + _0x2e6d48(480) + "ctivi" + "ty";
    _0x139ff4.prgms = "post";
    _0x139ff4[_0x2e6d48(1546)] = function (_0x25bbbf, _0x576656) {
      return _0x25bbbf == _0x576656;
    };
    _0x139ff4[_0x2e6d48(876)] = "0000";
    const _0x371aa3 = _0x139ff4;
    try {
      let _0x5912db = {
          activeIndex: 26,
          ...this[_0x2e6d48(536) + _0x2e6d48(674) + _0x2e6d48(1322) + "m"]()
        },
        _0x314fe0 = this[_0x2e6d48(748) + "e_wor" + _0x2e6d48(1589)](_0x5912db);
      const _0x42cfcc = {};
      _0x42cfcc[_0x2e6d48(1565)] = _0x314fe0;
      const _0x2d2a60 = {
        fn: _0x371aa3[_0x2e6d48(648)]
      };
      _0x2d2a60.fn = _0x371aa3[_0x2e6d48(648)];
      _0x2d2a60[_0x2e6d48(1363) + "d"] = _0x371aa3.prgms;
      _0x2d2a60[_0x2e6d48(1296)] = _0x2e6d48(1285) + _0x2e6d48(880) + _0x2e6d48(1395) + _0x2e6d48(674) + _0x2e6d48(826) + _0x2e6d48(1113) + _0x2e6d48(1445) + "ad_se" + _0x2e6d48(737) + _0x2e6d48(904) + _0x2e6d48(1559) + _0x2e6d48(902) + _0x2e6d48(1598) + _0x2e6d48(1717) + "shAct" + _0x2e6d48(1598);
      _0x2d2a60[_0x2e6d48(859)] = _0x42cfcc;
      let _0x306ff1 = _0x2d2a60;
      await _0x473183[_0x2e6d48(1348) + _0x2e6d48(632) + _0x2e6d48(594) + "al"](this[_0x2e6d48(1213) + _0x2e6d48(1480) + _0x2e6d48(1052)], _0x4e3cbe);
      let {
        result: _0x43cb6b
      } = await this[_0x2e6d48(328) + _0x2e6d48(881)](_0x306ff1);
      this[_0x2e6d48(1213) + _0x2e6d48(1480) + "raw"] = Date[_0x2e6d48(1135)]();
      let _0x107d4f = _0x473183[_0x2e6d48(801)](_0x43cb6b, "code", -1);
      if (_0x371aa3[_0x2e6d48(1546)](_0x107d4f, _0x371aa3[_0x2e6d48(876)])) {
        this[_0x2e6d48(1098) + _0x2e6d48(1267) + "rabbi" + "t"] = false;
        const _0x4c325d = {
          notify: true
        };
        this[_0x2e6d48(924)]("龟兔赛跑终" + _0x2e6d48(1103) + (_0x43cb6b?.[_0x2e6d48(1247)]?.[_0x2e6d48(1742) + _0x2e6d48(1088)] || "空气"), _0x4c325d);
      } else {
        let _0x1c91d9 = _0x43cb6b?.[_0x2e6d48(460) + "ge"] || "";
        this[_0x2e6d48(924)]("龟兔赛跑终" + _0x2e6d48(944) + "[" + _0x107d4f + _0x2e6d48(1309) + _0x1c91d9);
      }
    } catch (_0x143194) {
      console[_0x2e6d48(924)](_0x143194);
    }
  }
  async ["moonb" + _0x41d484(1012) + _0x41d484(1152) + "rTask" + "Statu" + "s"](_0x23f4d6 = {}) {
    const _0x2d4d3e = _0x41d484,
      _0xc59587 = {
        EeUdo: "moonb" + _0x2d4d3e(1012) + "eryCu" + _0x2d4d3e(1545) + "Statu" + "s",
        MsWdO: _0x2d4d3e(1401),
        FIyUe: _0x2d4d3e(340),
        JKwPp: function (_0x1b203b, _0x6392a7) {
          return _0x1b203b(_0x6392a7);
        },
        TROQI: _0x2d4d3e(562)
      };
    try {
      let _0xaba87b = {
          activeIndex: _0x492f02,
          ...this[_0x2d4d3e(536) + _0x2d4d3e(674) + "_para" + "m"]()
        },
        _0x55e6c3 = this[_0x2d4d3e(748) + "e_wor" + _0x2d4d3e(1589)](_0xaba87b);
      const _0x539468 = {};
      _0x539468[_0x2d4d3e(1565)] = _0x55e6c3;
      const _0x1e8902 = {
        fn: _0xc59587.EeUdo
      };
      _0x1e8902.fn = _0xc59587.EeUdo;
      _0x1e8902[_0x2d4d3e(1363) + "d"] = _0xc59587[_0x2d4d3e(837)];
      _0x1e8902[_0x2d4d3e(1296)] = _0x2d4d3e(1285) + _0x2d4d3e(880) + "010.w" + _0x2d4d3e(674) + _0x2d4d3e(826) + _0x2d4d3e(1113) + "_wore" + _0x2d4d3e(318) + _0x2d4d3e(737) + _0x2d4d3e(904) + "/acti" + _0x2d4d3e(1136) + "23/qu" + _0x2d4d3e(1152) + _0x2d4d3e(1545) + _0x2d4d3e(1618) + "s";
      _0x1e8902.json = _0x539468;
      let _0x5ddc87 = _0x1e8902,
        {
          result: _0x30cab4
        } = await this.woread_api(_0x5ddc87),
        _0x17bb1d = _0x473183.get(_0x30cab4, _0x2d4d3e(379), -1);
      if (_0x17bb1d == _0xc59587.FIyUe) {
        for (let _0x327798 of _0x30cab4?.["data"] || []) {
          let {
            taskName: _0x21779a,
            currentValue: _0x99bbf4,
            taskValue: _0x5bb2bc
          } = _0x327798?.["taskD" + _0x2d4d3e(921)];
          switch (_0x327798["taskS" + _0x2d4d3e(475)]) {
            case 0:
              this["need_read_" + _0x2d4d3e(1066) + "ox"] = true;
              this.log("阅光宝盒[" + _0x21779a + "]进度: " + _0xc59587.JKwPp(parseInt, _0x99bbf4) + "/" + _0x5bb2bc + "分钟");
              break;
            case 2:
              await this["moonb" + _0x2d4d3e(1320) + _0x2d4d3e(654) + _0x2d4d3e(1209) + _0x2d4d3e(1076) + "k"](_0x327798);
            case 1:
              this[_0x2d4d3e(1098) + _0x2d4d3e(1267) + _0x2d4d3e(1066) + "ox"] = false;
              const _0x3a7531 = {};
              _0x3a7531[_0x2d4d3e(778) + "y"] = true;
              this[_0x2d4d3e(924)]("阅光宝盒任务[" + _0x21779a + "]已完成", _0x3a7531);
              break;
          }
        }
      } else {
        let _0x5af209 = _0x30cab4?.[_0x2d4d3e(460) + "ge"] || "";
        _0x5af209?.[_0x2d4d3e(1541) + _0x2d4d3e(1391)](_0xc59587[_0x2d4d3e(1759)]) && !_0x23f4d6["activ" + _0x2d4d3e(1608) + _0x2d4d3e(1390)] && (await this[_0x2d4d3e(1066) + _0x2d4d3e(1012) + "eryAc" + _0x2d4d3e(1129) + _0x2d4d3e(995) + "st"]()) ? (_0x23f4d6[_0x2d4d3e(901) + "ate_r" + "etry"] = true, await this[_0x2d4d3e(1066) + _0x2d4d3e(1012) + _0x2d4d3e(1152) + "rTask" + _0x2d4d3e(1618) + "s"](_0x23f4d6)) : this.log("阅光宝盒查" + _0x2d4d3e(457) + _0x2d4d3e(1417) + _0x17bb1d + "]: " + _0x5af209);
      }
    } catch (_0x18e0ba) {
      console.log(_0x18e0ba);
    }
  }
  async [_0x41d484(1066) + _0x41d484(1320) + _0x41d484(654) + _0x41d484(1209) + _0x41d484(1076) + "k"](_0x329af2, _0x2338ae = {}) {
    const _0x58c7f8 = _0x41d484,
      _0x4721f8 = {};
    _0x4721f8[_0x58c7f8(1473)] = _0x58c7f8(1401);
    _0x4721f8[_0x58c7f8(1059)] = _0x58c7f8(379);
    const _0x379791 = _0x4721f8;
    try {
      let _0x150493 = {
          taskId: _0x329af2.id,
          ...this["get_woread" + _0x58c7f8(1322) + "m"]()
        },
        _0x7a8d4a = this[_0x58c7f8(748) + "e_wor" + _0x58c7f8(1589)](_0x150493);
      const _0x329901 = {};
      _0x329901[_0x58c7f8(1565)] = _0x7a8d4a;
      const _0x8b5910 = {
        fn: "moonb" + _0x58c7f8(1320) + _0x58c7f8(654) + _0x58c7f8(1209) + _0x58c7f8(1076) + "k"
      };
      _0x8b5910.fn = "moonb" + _0x58c7f8(1320) + _0x58c7f8(654) + _0x58c7f8(1209) + _0x58c7f8(1076) + "k";
      _0x8b5910[_0x58c7f8(1363) + "d"] = _0x379791[_0x58c7f8(1473)];
      _0x8b5910[_0x58c7f8(1296)] = _0x58c7f8(1285) + _0x58c7f8(880) + _0x58c7f8(1395) + "oread" + _0x58c7f8(826) + "cn/ng" + "_wore" + "ad_se" + _0x58c7f8(737) + _0x58c7f8(904) + _0x58c7f8(1583) + _0x58c7f8(1136) + _0x58c7f8(1500) + _0x58c7f8(654) + _0x58c7f8(1209) + _0x58c7f8(1076) + "k";
      _0x8b5910[_0x58c7f8(859)] = _0x329901;
      let _0x4c882b = _0x8b5910,
        {
          result: _0x5063bf
        } = await this[_0x58c7f8(328) + _0x58c7f8(881)](_0x4c882b),
        _0xac4b52 = _0x473183[_0x58c7f8(801)](_0x5063bf, _0x379791[_0x58c7f8(1059)], -1);
      if (_0xac4b52 == _0x58c7f8(340)) {
        const _0x302529 = {
          notify: true
        };
        this[_0x58c7f8(924)](_0x58c7f8(1624) + _0x5063bf?.[_0x58c7f8(1247)]?.[_0x58c7f8(1537) + _0x58c7f8(921)]?.[_0x58c7f8(1560) + "ame"] + (_0x58c7f8(604) + _0x58c7f8(555)) + _0x5063bf?.[_0x58c7f8(1247)]?.[_0x58c7f8(790) + _0x58c7f8(800) + "sult"]?.["mater" + _0x58c7f8(845) + _0x58c7f8(694) + "fo"]?.[_0x58c7f8(935) + _0x58c7f8(1021)], _0x302529);
      } else {
        let _0x48ace2 = _0x5063bf?.["message"] || "";
        this[_0x58c7f8(924)](_0x58c7f8(1624) + _0x329af2?.[_0x58c7f8(1537) + _0x58c7f8(921)]?.[_0x58c7f8(1560) + _0x58c7f8(972)] + (_0x58c7f8(604) + _0x58c7f8(1417)) + _0xac4b52 + _0x58c7f8(1309) + _0x48ace2);
      }
    } catch (_0x549aeb) {
      console[_0x58c7f8(924)](_0x549aeb);
    }
  }
  async [_0x41d484(1066) + "ox_qu" + _0x41d484(777) + "tiveT" + "askLi" + "st"](_0xcf97b9 = {}) {
    const _0x130667 = _0x41d484,
      _0x21b8fa = {
        SuOkq: function (_0x47417f, _0x15b695) {
          return _0x47417f(_0x15b695);
        },
        GVXwq: function (_0x2c32fc, _0x22b512) {
          return _0x2c32fc - _0x22b512;
        },
        bnqZH: "moonb" + _0x130667(1012) + _0x130667(777) + _0x130667(1129) + _0x130667(995) + "st",
        IunMa: _0x130667(1401),
        GNgXo: _0x130667(379),
        RUHUN: function (_0x2cfd3e, _0x545844) {
          return _0x2cfd3e == _0x545844;
        },
        YMxkg: _0x130667(340)
      };
    try {
      let _0xcb5194 = {
          activeIndex: _0x492f02,
          ...this[_0x130667(536) + _0x130667(674) + _0x130667(1322) + "m"]()
        },
        _0x2d570e = this[_0x130667(748) + _0x130667(1616) + _0x130667(1589)](_0xcb5194);
      const _0x43ddd2 = {};
      _0x43ddd2[_0x130667(1565)] = _0x2d570e;
      const _0x29b27c = {
        fn: _0x21b8fa[_0x130667(709)],
        method: _0x21b8fa[_0x130667(1389)]
      };
      _0x29b27c.fn = _0x21b8fa[_0x130667(709)];
      _0x29b27c.method = _0x21b8fa[_0x130667(1389)];
      _0x29b27c[_0x130667(1296)] = _0x130667(1285) + _0x130667(880) + _0x130667(1395) + "oread" + _0x130667(826) + _0x130667(1113) + _0x130667(1445) + _0x130667(318) + "rvice" + "/rest" + _0x130667(1583) + _0x130667(1136) + _0x130667(1429) + _0x130667(777) + _0x130667(1129) + _0x130667(995) + "st";
      _0x29b27c.json = _0x43ddd2;
      let _0x316d92 = _0x29b27c,
        {
          result: _0xe007ec
        } = await this[_0x130667(328) + "d_api"](_0x316d92),
        _0x3d5bbd = _0x473183[_0x130667(801)](_0xe007ec, _0x21b8fa.GNgXo, -1);
      if (_0x21b8fa.RUHUN(_0x3d5bbd, _0x21b8fa[_0x130667(361)])) {
        let _0x42dc51 = _0xe007ec?.[_0x130667(1247)]?.[_0x130667(539)](function (_0x3d0a60, _0x1c2cfa) {
            const _0x58d969 = _0x130667;
            let _0x4eb2e9 = _0x21b8fa[_0x58d969(390)](parseInt, _0x1c2cfa[_0x58d969(1537) + _0x58d969(921)][_0x58d969(765) + "alue"]),
              _0x53366a = parseInt(_0x3d0a60["taskD" + _0x58d969(921)]["taskV" + _0x58d969(1307)]);
            return _0x21b8fa[_0x58d969(1372)](_0x4eb2e9, _0x53366a);
          }),
          _0x269e28 = _0x42dc51[_0x130667(565) + "r"](_0x2ab373 => _0x2ab373[_0x130667(805) + "m"] - _0x2ab373[_0x130667(1617) + _0x130667(1036)] > 0 && _0x2ab373[_0x130667(1537) + _0x130667(921)]["mater" + _0x130667(845) + _0x130667(769)]["group" + _0x130667(1021)][_0x130667(1541) + "des"]("红包"));
        _0x269e28?.["length"] ? await this[_0x130667(1066) + _0x130667(309) + "ceive" + "Activ" + "eTask"](_0x269e28) : (this[_0x130667(924)](_0x130667(657) + _0x130667(1364) + _0x130667(409)), this[_0x130667(1098) + "read_" + _0x130667(1066) + "ox"] = false);
      } else {
        let _0x178b8e = _0xe007ec?.[_0x130667(460) + "ge"] || "";
        this[_0x130667(924)](_0x130667(1687) + _0x130667(1751) + _0x130667(1455) + _0x3d5bbd + _0x130667(1309) + _0x178b8e);
      }
    } catch (_0x4d2ace) {
      console[_0x130667(924)](_0x4d2ace);
    }
  }
  async [_0x41d484(1066) + _0x41d484(309) + "ceive" + "Activ" + _0x41d484(414)](_0x52eeb6, _0x3326de = 0, _0x478555 = {}) {
    const _0x3e18e7 = _0x41d484,
      _0x26db64 = {};
    _0x26db64[_0x3e18e7(582)] = _0x3e18e7(1066) + _0x3e18e7(1012) + _0x3e18e7(777) + _0x3e18e7(1129) + "askLi" + "st";
    _0x26db64[_0x3e18e7(521)] = "post";
    _0x26db64[_0x3e18e7(809)] = _0x3e18e7(379);
    _0x26db64[_0x3e18e7(483)] = function (_0xeb23df, _0x43d3db) {
      return _0xeb23df == _0x43d3db;
    };
    _0x26db64[_0x3e18e7(858)] = "0000";
    _0x26db64[_0x3e18e7(1137)] = _0x3e18e7(1398) + "成";
    _0x26db64[_0x3e18e7(564)] = function (_0x23dc5d, _0x3bb4d2) {
      return _0x23dc5d > _0x3bb4d2;
    };
    _0x26db64[_0x3e18e7(1681)] = function (_0x2b17d1, _0x6b4d29) {
      return _0x2b17d1 + _0x6b4d29;
    };
    const _0x4119e4 = _0x26db64;
    try {
      let _0x5c86ba = {
          activeId: _0x492f02,
          taskId: _0x52eeb6[_0x3326de]["secon" + _0x3e18e7(803) + "Id"],
          ...this[_0x3e18e7(536) + _0x3e18e7(674) + _0x3e18e7(1322) + "m"]()
        },
        _0x24b87f = this["encod" + _0x3e18e7(1616) + _0x3e18e7(1589)](_0x5c86ba);
      const _0x36a9d7 = {};
      _0x36a9d7[_0x3e18e7(1565)] = _0x24b87f;
      const _0x222101 = {
        fn: _0x4119e4[_0x3e18e7(582)]
      };
      _0x222101.fn = _0x4119e4[_0x3e18e7(582)];
      _0x222101[_0x3e18e7(1363) + "d"] = _0x4119e4[_0x3e18e7(521)];
      _0x222101.url = "https" + _0x3e18e7(880) + _0x3e18e7(1395) + "oread" + _0x3e18e7(826) + _0x3e18e7(1113) + _0x3e18e7(1445) + "ad_se" + _0x3e18e7(737) + _0x3e18e7(904) + _0x3e18e7(1583) + "vity4" + _0x3e18e7(1402) + _0x3e18e7(605) + _0x3e18e7(1394) + "eTask";
      _0x222101[_0x3e18e7(859)] = _0x36a9d7;
      let _0x3f18d5 = _0x222101,
        {
          result: _0x474407
        } = await this[_0x3e18e7(328) + "d_api"](_0x3f18d5),
        _0x57b642 = _0x473183[_0x3e18e7(801)](_0x474407, _0x4119e4[_0x3e18e7(809)], -1);
      if (_0x4119e4[_0x3e18e7(483)](_0x57b642, _0x4119e4[_0x3e18e7(858)])) {
        this[_0x3e18e7(1098) + _0x3e18e7(1267) + _0x3e18e7(1066) + "ox"] = true;
        this[_0x3e18e7(924)](_0x3e18e7(992) + _0x3e18e7(1728) + _0x52eeb6?.[_0x3326de]?.[_0x3e18e7(1537) + _0x3e18e7(921)]?.["taskN" + _0x3e18e7(972)] + _0x3e18e7(889));
      } else {
        let _0x36df59 = _0x474407?.["message"] || "";
        this[_0x3e18e7(924)](_0x3e18e7(992) + "盒任务[" + _0x52eeb6?.[_0x3326de]?.[_0x3e18e7(1537) + _0x3e18e7(921)]?.[_0x3e18e7(1560) + "ame"] + _0x3e18e7(903) + _0x57b642 + _0x3e18e7(1309) + _0x36df59);
        _0x36df59?.[_0x3e18e7(1541) + _0x3e18e7(1391)](_0x4119e4[_0x3e18e7(1137)]) && _0x4119e4[_0x3e18e7(564)](_0x52eeb6?.[_0x3e18e7(1472) + "h"], _0x4119e4[_0x3e18e7(1681)](_0x3326de, 1)) && (await this["moonbox_re" + _0x3e18e7(605) + _0x3e18e7(1394) + _0x3e18e7(414)](_0x52eeb6, _0x4119e4.sbXru(_0x3326de, 1), _0x478555));
      }
    } catch (_0x40fddc) {
      console[_0x3e18e7(924)](_0x40fddc);
    }
  }
  async ["moonbox_qu" + _0x41d484(1085) + _0x41d484(1706) + _0x41d484(785)](_0x53242a = {}) {
    const _0x49b346 = _0x41d484,
      _0xe68f = {
        VpFaQ: _0x49b346(1066) + _0x49b346(1012) + "eryRe" + "adSta" + "tus"
      };
    _0xe68f.VpFaQ = _0x49b346(1066) + _0x49b346(1012) + "eryRe" + "adSta" + "tus";
    _0xe68f[_0x49b346(1282)] = _0x49b346(1401);
    _0xe68f[_0x49b346(1422)] = _0x49b346(340);
    const _0x24ba75 = _0xe68f;
    try {
      let _0x4f53f9 = {
          activeIndex: _0x492f02,
          ...this[_0x49b346(536) + "oread" + _0x49b346(1322) + "m"]()
        },
        _0x263af0 = this[_0x49b346(748) + _0x49b346(1616) + "ead"](_0x4f53f9);
      const _0x4fa7f5 = {};
      _0x4fa7f5[_0x49b346(1565)] = _0x263af0;
      const _0x34d7d2 = {
        fn: _0x24ba75[_0x49b346(1176)]
      };
      _0x34d7d2.fn = _0x24ba75[_0x49b346(1176)];
      _0x34d7d2[_0x49b346(1363) + "d"] = _0x24ba75[_0x49b346(1282)];
      _0x34d7d2[_0x49b346(1296)] = _0x49b346(1285) + "://10" + _0x49b346(1395) + "oread" + _0x49b346(826) + "cn/ng" + _0x49b346(1445) + _0x49b346(318) + _0x49b346(737) + _0x49b346(904) + _0x49b346(1583) + _0x49b346(1136) + _0x49b346(1429) + _0x49b346(1085) + "adSta" + _0x49b346(785);
      _0x34d7d2[_0x49b346(859)] = _0x4fa7f5;
      let _0x833a03 = _0x34d7d2,
        {
          result: _0x164cab
        } = await this[_0x49b346(328) + _0x49b346(881)](_0x833a03),
        _0x3f95b7 = _0x473183[_0x49b346(801)](_0x164cab, "code", -1);
      if (_0x3f95b7 == _0x24ba75.clIiY) {
        switch (_0x164cab?.[_0x49b346(1247)]) {
          case "2":
            {
              this[_0x49b346(924)](_0x49b346(332) + "阅读两分钟" + "抽奖");
              const _0x318752 = {};
              _0x318752[_0x49b346(1416) + _0x49b346(358)] = 2;
              await this[_0x49b346(328) + _0x49b346(534) + _0x49b346(1494) + "ime"](_0x318752);
              await this[_0x49b346(1066) + _0x49b346(488) + "awRea" + "dActi" + _0x49b346(818) + "ze"]();
              break;
            }
          case "3":
            {
              this[_0x49b346(924)]("阅光宝盒今" + _0x49b346(501));
              break;
            }
          case "4":
            {
              this[_0x49b346(924)](_0x49b346(1754) + _0x49b346(787));
              await this[_0x49b346(1066) + _0x49b346(488) + "awRea" + "dActi" + _0x49b346(818) + "ze"]();
              break;
            }
          default:
            {
              this[_0x49b346(924)](_0x49b346(1295) + _0x49b346(1069) + _0x164cab?.[_0x49b346(1247)] + "]");
              break;
            }
        }
      } else {
        let _0x280bb3 = _0x164cab?.[_0x49b346(460) + "ge"] || "";
        this.log(_0x49b346(1763) + "盒抽奖次数" + "失败[" + _0x3f95b7 + _0x49b346(1309) + _0x280bb3);
      }
    } catch (_0x4d4b0e) {
      console[_0x49b346(924)](_0x4d4b0e);
    }
  }
  async ["moonb" + _0x41d484(488) + "awRea" + "dActi" + "vePri" + "ze"](_0x2eec72 = {}) {
    const _0x3f92d9 = _0x41d484,
      _0x176092 = {
        RxZVE: _0x3f92d9(1401),
        KyJWg: _0x3f92d9(379)
      };
    _0x176092.RxZVE = _0x3f92d9(1401);
    _0x176092.KyJWg = _0x3f92d9(379);
    _0x176092[_0x3f92d9(1739)] = function (_0x1c0880, _0x2198ac) {
      return _0x1c0880 == _0x2198ac;
    };
    _0x176092[_0x3f92d9(931)] = _0x3f92d9(340);
    const _0x171794 = _0x176092;
    try {
      let _0x4558c9 = {
          activeIndex: _0x492f02,
          ...this["get_w" + _0x3f92d9(674) + _0x3f92d9(1322) + "m"]()
        },
        _0x2e62e0 = this[_0x3f92d9(748) + _0x3f92d9(1616) + _0x3f92d9(1589)](_0x4558c9);
      const _0x50b530 = {};
      _0x50b530[_0x3f92d9(1565)] = _0x2e62e0;
      const _0xf5936a = {
        fn: _0x3f92d9(1066) + _0x3f92d9(488) + _0x3f92d9(1315) + "dActi" + _0x3f92d9(818) + "ze",
        method: _0x171794.RxZVE
      };
      _0xf5936a.fn = _0x3f92d9(1066) + _0x3f92d9(488) + _0x3f92d9(1315) + "dActi" + _0x3f92d9(818) + "ze";
      _0xf5936a.method = _0x171794.RxZVE;
      _0xf5936a[_0x3f92d9(1296)] = _0x3f92d9(1285) + _0x3f92d9(880) + "010.w" + _0x3f92d9(674) + ".com." + _0x3f92d9(1113) + _0x3f92d9(1445) + _0x3f92d9(318) + _0x3f92d9(737) + _0x3f92d9(904) + _0x3f92d9(1583) + _0x3f92d9(1136) + _0x3f92d9(510) + _0x3f92d9(1315) + _0x3f92d9(1243) + _0x3f92d9(818) + "ze";
      _0xf5936a[_0x3f92d9(859)] = _0x50b530;
      let _0x505a0a = _0xf5936a,
        {
          result: _0x127afb
        } = await this[_0x3f92d9(328) + _0x3f92d9(881)](_0x505a0a),
        _0x4f7f03 = _0x473183.get(_0x127afb, _0x171794[_0x3f92d9(354)], -1);
      if (_0x171794.OGqDH(_0x4f7f03, _0x171794[_0x3f92d9(931)])) {
        const _0x20cd9d = {
          notify: true
        };
        this.log(_0x3f92d9(1295) + _0x3f92d9(443) + (_0x127afb?.[_0x3f92d9(1247)]?.[_0x3f92d9(1742) + _0x3f92d9(1088)] || JSON.stringify(_0x127afb)), _0x20cd9d);
      } else {
        let _0x15b66a = _0x127afb?.["message"] || "";
        this.log(_0x3f92d9(1295) + _0x3f92d9(1048) + _0x4f7f03 + _0x3f92d9(1309) + _0x15b66a);
      }
    } catch (_0x2fb358) {
      console.log(_0x2fb358);
    }
  }
  async ["ltyp_" + _0x41d484(665)](_0x2da72a, _0x18cdc7 = {}) {
    const _0x364cf3 = _0x41d484,
      _0xe7f2a2 = {};
    _0xe7f2a2[_0x364cf3(331)] = _0x364cf3(1487) + _0x364cf3(665);
    _0xe7f2a2[_0x364cf3(526)] = _0x364cf3(1401);
    _0xe7f2a2[_0x364cf3(746)] = _0x364cf3(1149) + "eldHa" + "llAut" + "oLogi" + "n";
    _0xe7f2a2[_0x364cf3(580)] = _0x364cf3(404) + "S";
    _0xe7f2a2[_0x364cf3(1502)] = function (_0x28fcfd, _0x1a382d) {
      return _0x28fcfd == _0x1a382d;
    };
    const _0xd5ebdf = _0xe7f2a2;
    try {
      const _0x42fcfc = {};
      _0x42fcfc["clien" + _0x364cf3(589)] = _0x2395cd;
      _0x42fcfc.accessToken = "";
      const _0x102291 = {};
      _0x102291[_0x364cf3(356) + _0x364cf3(456)] = _0x2395cd;
      _0x102291[_0x364cf3(1432) + "t"] = _0x2da72a;
      let _0x315172 = {
          fn: _0xd5ebdf[_0x364cf3(331)],
          method: _0xd5ebdf[_0x364cf3(526)],
          url: "https" + _0x364cf3(1142) + _0x364cf3(1562) + _0x364cf3(854) + "ail.w" + _0x364cf3(516) + "wohom" + _0x364cf3(585) + _0x364cf3(1298) + "er",
          headers: _0x42fcfc,
          json: {
            header: this[_0x364cf3(413) + _0x364cf3(614) + _0x364cf3(1509) + "eader"](_0xd5ebdf[_0x364cf3(746)]),
            body: _0x102291
          }
        },
        {
          result: _0x1639ca
        } = await this.request(_0x315172),
        _0x195e9d = _0x473183[_0x364cf3(801)](_0x1639ca, _0xd5ebdf.cHlTR, -1);
      if (_0xd5ebdf.RkpfK(_0x195e9d, 200)) {
        this[_0x364cf3(1487) + "token"] = _0x1639ca?.["RSP"]?.[_0x364cf3(1757)]?.[_0x364cf3(360)];
        for (let _0xb5eaf9 of _0x1045cc) {
          await this[_0x364cf3(1487) + _0x364cf3(1612) + _0x364cf3(1129) + _0x364cf3(344)](_0xb5eaf9);
          await this[_0x364cf3(1487) + _0x364cf3(1581) + "ry"](_0xb5eaf9);
        }
      } else {
        let _0x12108c = _0x1639ca?.[_0x364cf3(823)] || "";
        this[_0x364cf3(924)]("联通云盘登" + _0x364cf3(1219) + _0x195e9d + _0x364cf3(1309) + _0x12108c);
      }
    } catch (_0x314493) {
      console[_0x364cf3(924)](_0x314493);
    }
  }
  async [_0x41d484(1487) + _0x41d484(1612) + _0x41d484(1129) + _0x41d484(344)](_0x1de278, _0x14bd9f = {}) {
    const _0x1b2662 = _0x41d484,
      _0x47d7db = {};
    _0x47d7db[_0x1b2662(1361)] = _0x1b2662(1487) + _0x1b2662(1612) + "tiveT" + _0x1b2662(344);
    _0x47d7db.NcCrz = _0x1b2662(801);
    _0x47d7db[_0x1b2662(733)] = _0x1b2662(1612) + "tiveT" + _0x1b2662(1360) + _0x1b2662(1641) + "ne";
    _0x47d7db[_0x1b2662(860)] = "code";
    _0x47d7db[_0x1b2662(780)] = function (_0x4b3d0b, _0x592eb2) {
      return _0x4b3d0b == _0x592eb2;
    };
    _0x47d7db[_0x1b2662(1634)] = function (_0x3e5408, _0x1e8b15) {
      return _0x3e5408 < _0x1e8b15;
    };
    const _0x5e0ec4 = _0x47d7db;
    try {
      const _0x45b4eb = {};
      _0x45b4eb["clien" + _0x1b2662(589)] = _0x2395cd;
      _0x45b4eb[_0x1b2662(357) + _0x1b2662(749) + "en"] = this["ltyp_" + _0x1b2662(360)];
      const _0x59c5a2 = {
        fn: _0x5e0ec4.csKvY,
        method: _0x5e0ec4[_0x1b2662(1442)]
      };
      _0x59c5a2.fn = _0x5e0ec4.csKvY;
      _0x59c5a2.method = _0x5e0ec4[_0x1b2662(1442)];
      _0x59c5a2[_0x1b2662(1296)] = "https://pa" + _0x1b2662(1562) + _0x1b2662(854) + _0x1b2662(704) + _0x1b2662(516) + _0x1b2662(901) + _0x1b2662(1685) + _0x1b2662(1104) + _0x1b2662(1520) + _0x1b2662(1493) + "s";
      _0x59c5a2.headers = _0x45b4eb;
      _0x59c5a2[_0x1b2662(375) + _0x1b2662(838) + "ms"] = {};
      _0x59c5a2[_0x1b2662(375) + _0x1b2662(838) + "ms"][_0x1b2662(1090) + "y"] = _0x5e0ec4[_0x1b2662(733)];
      _0x59c5a2[_0x1b2662(375) + _0x1b2662(838) + "ms"][_0x1b2662(901) + "ityId"] = _0x1de278;
      let _0xf21509 = _0x59c5a2,
        {
          result: _0x5680e8
        } = await this[_0x1b2662(753) + "st"](_0xf21509),
        _0x52aaf7 = _0x473183[_0x1b2662(801)](_0x5680e8?.[_0x1b2662(1451)], _0x5e0ec4[_0x1b2662(860)], -1);
      if (_0x5e0ec4[_0x1b2662(780)](_0x52aaf7, 0)) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x5680e8?.["result"];
        if (isIncentiveTask) {
          for (let _0x52771c = incentiveTimeDone; _0x5e0ec4[_0x1b2662(1634)](_0x52771c, incentiveTimeTotal); _0x52771c++) {
            await this[_0x1b2662(1487) + _0x1b2662(1612) + _0x1b2662(1129) + _0x1b2662(598)](_0x1de278);
          }
        }
      } else {
        let _0x19735a = _0x5680e8?.["meta"]?.[_0x1b2662(460) + "ge"] || "";
        this[_0x1b2662(924)](_0x1b2662(612) + "询任务失败" + "[" + _0x52aaf7 + "]: " + _0x19735a);
      }
    } catch (_0x454b87) {
      console[_0x1b2662(924)](_0x454b87);
    }
  }
  async ["ltyp_" + _0x41d484(1612) + _0x41d484(1129) + _0x41d484(598)](_0x12f149, _0x31482d = {}) {
    const _0x3198a2 = _0x41d484,
      _0x312969 = {};
    _0x312969[_0x3198a2(1056)] = "ltyp_" + _0x3198a2(1612) + "tiveT" + _0x3198a2(598);
    _0x312969[_0x3198a2(609)] = _0x3198a2(1401);
    _0x312969[_0x3198a2(919)] = "incen" + _0x3198a2(1129) + "askPi" + _0x3198a2(597) + "e";
    _0x312969[_0x3198a2(466)] = _0x3198a2(379);
    _0x312969[_0x3198a2(1474)] = function (_0x450e6a, _0x141818) {
      return _0x450e6a == _0x141818;
    };
    _0x312969[_0x3198a2(1571)] = function (_0x3e5ed5, _0x16c12c) {
      return _0x3e5ed5 == _0x16c12c;
    };
    const _0x1f13e6 = _0x312969;
    try {
      const _0x11f76e = {};
      _0x11f76e[_0x3198a2(356) + _0x3198a2(589)] = _0x2395cd;
      _0x11f76e[_0x3198a2(357) + _0x3198a2(749) + "en"] = this[_0x3198a2(1487) + _0x3198a2(360)];
      const _0x3c4a17 = {};
      _0x3c4a17["activ" + _0x3198a2(686)] = _0x12f149;
      const _0x469d93 = {
        fn: _0x1f13e6.XPuUe,
        method: _0x1f13e6[_0x3198a2(609)]
      };
      _0x469d93.fn = _0x1f13e6.XPuUe;
      _0x469d93.method = _0x1f13e6[_0x3198a2(609)];
      _0x469d93[_0x3198a2(1296)] = _0x3198a2(1285) + "://pa" + _0x3198a2(1562) + _0x3198a2(854) + _0x3198a2(704) + _0x3198a2(516) + "activ" + _0x3198a2(1685) + _0x3198a2(1104) + _0x3198a2(1520) + _0x3198a2(414);
      _0x469d93[_0x3198a2(1170) + "rs"] = _0x11f76e;
      _0x469d93[_0x3198a2(859)] = {};
      _0x469d93[_0x3198a2(859)][_0x3198a2(1090) + "y"] = _0x1f13e6[_0x3198a2(919)];
      _0x469d93[_0x3198a2(859)][_0x3198a2(472) + _0x3198a2(1226)] = _0x3c4a17;
      let _0x49b5bb = _0x469d93,
        {
          result: _0x4f4c6e
        } = await this[_0x3198a2(753) + "st"](_0x49b5bb),
        _0x585bb6 = _0x473183[_0x3198a2(801)](_0x4f4c6e?.["meta"], _0x1f13e6.SIdeA, -1);
      if (_0x1f13e6[_0x3198a2(1474)](_0x585bb6, 0)) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x4f4c6e?.[_0x3198a2(1591) + "t"];
        _0x1f13e6[_0x3198a2(1571)](incentiveStatus, 1) ? this.log(_0x3198a2(1259) + _0x3198a2(1366)) : this[_0x3198a2(924)](_0x3198a2(1259) + _0x3198a2(1458) + "[" + incentiveStatus + _0x3198a2(1309) + incentiveMessage);
      } else {
        let _0x4c419a = _0x4f4c6e?.[_0x3198a2(1451)]?.[_0x3198a2(460) + "ge"] || "";
        this[_0x3198a2(924)](_0x3198a2(1259) + _0x3198a2(1228) + "[" + _0x585bb6 + _0x3198a2(1309) + _0x4c419a);
      }
    } catch (_0x6031e4) {
      console[_0x3198a2(924)](_0x6031e4);
    }
  }
  async [_0x41d484(1487) + _0x41d484(1581) + "ry_ti" + _0x41d484(1216)](_0xa4cd30, _0x1bb487 = {}) {
    const _0x4a69f0 = _0x41d484,
      _0x9c0512 = {};
    _0x9c0512[_0x4a69f0(1290)] = _0x4a69f0(1487) + _0x4a69f0(1581) + _0x4a69f0(779) + _0x4a69f0(1216);
    _0x9c0512[_0x4a69f0(1117)] = "get";
    _0x9c0512[_0x4a69f0(671)] = _0x4a69f0(417) + _0x4a69f0(1365);
    _0x9c0512[_0x4a69f0(1188)] = function (_0x38dc67, _0x376709) {
      return _0x38dc67 == _0x376709;
    };
    const _0x3f9a71 = _0x9c0512;
    try {
      const _0x4922c3 = {};
      _0x4922c3[_0x4a69f0(356) + _0x4a69f0(589)] = _0x2395cd;
      _0x4922c3[_0x4a69f0(360)] = this[_0x4a69f0(1487) + _0x4a69f0(360)];
      const _0x3e722b = {};
      _0x3e722b[_0x4a69f0(901) + "ityId"] = _0xa4cd30;
      const _0x3d30cd = {
        fn: _0x3f9a71.yrwXK,
        method: _0x3f9a71[_0x4a69f0(1117)]
      };
      _0x3d30cd.fn = _0x3f9a71.yrwXK;
      _0x3d30cd.method = _0x3f9a71[_0x4a69f0(1117)];
      _0x3d30cd[_0x4a69f0(1296)] = "https" + _0x4a69f0(1142) + "nserv" + _0x4a69f0(854) + _0x4a69f0(704) + "o.cn/" + _0x4a69f0(901) + "ity/v" + _0x4a69f0(1733) + "es";
      _0x3d30cd[_0x4a69f0(1170) + "rs"] = _0x4922c3;
      _0x3d30cd["searc" + _0x4a69f0(838) + "ms"] = _0x3e722b;
      let _0x328b26 = _0x3d30cd,
        {
          result: _0x53eec4
        } = await this[_0x4a69f0(753) + "st"](_0x328b26),
        _0x3c737f = _0x473183.get(_0x53eec4, _0x3f9a71.QAQsI, -1);
      if (_0x3f9a71[_0x4a69f0(1188)](_0x3c737f, 0)) {
        let {
          times = 0
        } = _0x53eec4?.[_0x4a69f0(1757)];
        this[_0x4a69f0(924)](_0x4a69f0(1519) + _0x4a69f0(1017) + times + "次");
        while (times-- > 0) {
          await this[_0x4a69f0(1487) + _0x4a69f0(1581) + "ry"](_0xa4cd30);
        }
      } else {
        let _0x45e8ec = _0x53eec4?.[_0x4a69f0(503) + _0x4a69f0(1700)] || "";
        this[_0x4a69f0(924)]("联通云盘查询抽奖次数" + _0x4a69f0(1417) + _0x3c737f + "]: " + _0x45e8ec);
      }
    } catch (_0x181483) {
      console[_0x4a69f0(924)](_0x181483);
    }
  }
  async [_0x41d484(1487) + _0x41d484(1581) + "ry"](_0x4f5fb4, _0x1c714d = {}) {
    const _0x5e595b = _0x41d484,
      _0x41759b = {};
    _0x41759b[_0x5e595b(1386)] = _0x5e595b(1487) + _0x5e595b(1581) + "ry";
    _0x41759b[_0x5e595b(1327)] = _0x5e595b(1401);
    _0x41759b[_0x5e595b(836)] = _0x5e595b(1423) + _0x5e595b(1424);
    _0x41759b[_0x5e595b(1214)] = _0x5e595b(379);
    _0x41759b[_0x5e595b(1719)] = function (_0x3e3706, _0x2e8fbf) {
      return _0x3e3706 == _0x2e8fbf;
    };
    const _0x2e8d87 = _0x41759b;
    try {
      const _0x2906f7 = {};
      _0x2906f7[_0x5e595b(356) + _0x5e595b(589)] = _0x2395cd;
      _0x2906f7[_0x5e595b(357) + _0x5e595b(749) + "en"] = this["ltyp_" + _0x5e595b(360)];
      const _0x3e8315 = {};
      _0x3e8315[_0x5e595b(901) + _0x5e595b(686)] = _0x4f5fb4;
      _0x3e8315.type = 3;
      const _0x4b1768 = {};
      _0x4b1768[_0x5e595b(1581) + "ry"] = _0x3e8315;
      const _0x112cb2 = {
        fn: _0x2e8d87[_0x5e595b(1386)]
      };
      _0x112cb2.fn = _0x2e8d87[_0x5e595b(1386)];
      _0x112cb2[_0x5e595b(1363) + "d"] = _0x2e8d87[_0x5e595b(1327)];
      _0x112cb2.url = _0x5e595b(1285) + _0x5e595b(1142) + _0x5e595b(1562) + _0x5e595b(854) + _0x5e595b(704) + "o.cn/" + _0x5e595b(462) + "e/v1/" + _0x5e595b(1581) + "ry";
      _0x112cb2[_0x5e595b(1170) + "rs"] = _0x2906f7;
      _0x112cb2[_0x5e595b(859)] = {};
      _0x112cb2[_0x5e595b(859)][_0x5e595b(1090) + "y"] = _0x2e8d87[_0x5e595b(836)];
      _0x112cb2[_0x5e595b(859)].bizObject = _0x4b1768;
      let _0x15be3a = _0x112cb2,
        {
          result: _0x221c41
        } = await this[_0x5e595b(753) + "st"](_0x15be3a),
        _0x11edac = _0x473183[_0x5e595b(801)](_0x221c41?.[_0x5e595b(1451)], _0x2e8d87[_0x5e595b(1214)], -1);
      if (_0x2e8d87.VGvrn(_0x11edac, 0)) {
        let {
          prizeName = ""
        } = _0x221c41?.[_0x5e595b(1591) + "t"];
        if (prizeName) {
          const _0x4e1362 = {};
          _0x4e1362[_0x5e595b(778) + "y"] = true;
          this.log(_0x5e595b(1729) + "奖: " + prizeName, _0x4e1362);
          await this[_0x5e595b(1487) + _0x5e595b(1581) + "ry"](_0x4f5fb4, _0x1c714d);
        }
      } else {
        let _0x139885 = _0x221c41?.["meta"]?.[_0x5e595b(460) + "ge"] || "";
        this.log(_0x5e595b(1729) + _0x5e595b(1222) + _0x11edac + _0x5e595b(1309) + _0x139885);
      }
    } catch (_0x1f2b8f) {
      console.log(_0x1f2b8f);
    }
  }
  async ["sign_" + _0x41d484(1238)]() {
    const _0x4bb224 = _0x41d484;
    await this["sign_" + _0x4bb224(1529) + _0x4bb224(1096) + _0x4bb224(616)]();
  }
  async [_0x41d484(1101) + _0x41d484(1238)]() {
    const _0x55e7ab = _0x41d484;
    let _0x4f897d = "https" + _0x55e7ab(999) + _0x55e7ab(923) + _0x55e7ab(1323) + _0x55e7ab(1061) + "b/flo" + "wGame" + _0x55e7ab(1666) + _0x55e7ab(458) + _0x55e7ab(1049) + _0x55e7ab(1613) + _0x55e7ab(1215) + _0x55e7ab(1658) + _0x55e7ab(978) + "06&pu" + _0x55e7ab(1452) + "99",
      {
        ticket: _0x2b79b9
      } = await this[_0x55e7ab(843) + _0x55e7ab(1628) + _0x55e7ab(1269)](_0x4f897d);
    if (!_0x2b79b9) {
      return;
    }
    await this[_0x55e7ab(575) + _0x55e7ab(665)](_0x2b79b9);
  }
  async ["ttlxj" + _0x41d484(1318)]() {
    const _0x587c27 = _0x41d484;
    this[_0x587c27(544)] = "";
    let _0x235282 = _0x587c27(1285) + _0x587c27(890) + _0x587c27(789) + "010.c" + "om/ci" + _0x587c27(644) + _0x587c27(971) + _0x587c27(509) + _0x587c27(1005) + _0x587c27(1257) + _0x587c27(325) + _0x587c27(1078) + _0x587c27(1467) + _0x587c27(747) + "idden",
      {
        ticket: _0x3db260,
        type: _0x26ff60,
        loc: _0x2329e5
      } = await this["openP" + _0x587c27(1628) + "neNew"](_0x235282);
    if (!_0x3db260) {
      return;
    }
    await this[_0x587c27(659) + _0x587c27(767) + _0x587c27(703)](_0x3db260, _0x26ff60, _0x2329e5);
  }
  async [_0x41d484(764) + _0x41d484(721) + "sk"]() {
    const _0x1f8453 = _0x41d484,
      _0x28d6ce = {};
    _0x28d6ce[_0x1f8453(1593)] = function (_0x1ea339, _0x2179dd) {
      return _0x1ea339 >= _0x2179dd;
    };
    _0x28d6ce[_0x1f8453(1200)] = function (_0x397318, _0x388403) {
      return _0x397318 <= _0x388403;
    };
    const _0x269996 = _0x28d6ce;
    this[_0x1f8453(544)] = "";
    let _0x20deb5 = new Date()[_0x1f8453(725) + "te"]();
    if (_0x269996[_0x1f8453(1593)](_0x20deb5, 26) && _0x269996[_0x1f8453(1200)](_0x20deb5, 28)) {
      await this["epay_" + _0x1f8453(596) + _0x1f8453(641) + "ck"]();
      if (_0x117e7f[_0x1f8453(1472) + "h"]) {
        let _0x3bf1da = _0x473183[_0x1f8453(1346) + _0x1f8453(882)](_0x117e7f);
        await this[_0x1f8453(1175) + _0x1f8453(794) + _0x1f8453(898) + "d"](_0x3bf1da);
      }
      await this[_0x1f8453(1175) + _0x1f8453(794) + _0x1f8453(1705) + "ryCha" + _0x1f8453(599)]();
    }
  }
  async ["draw_" + _0x41d484(721) + "sk"]() {
    const _0x4b89d7 = _0x41d484,
      _0x329777 = {};
    _0x329777[_0x4b89d7(679)] = function (_0x23e667, _0x3fe4af) {
      return _0x23e667 == _0x3fe4af;
    };
    const _0x2e5ed5 = _0x329777;
    let _0x5e6b18 = new Date().getDate();
    _0x2e5ed5[_0x4b89d7(679)](_0x5e6b18, 28) && (await this["draw_" + _0x4b89d7(1615) + _0x4b89d7(1286) + "ance"]());
  }
  async [_0x41d484(1120) + "task"]() {
    const _0x119683 = _0x41d484,
      _0x1bf490 = {};
    _0x1bf490[_0x119683(1125)] = function (_0x3365ee, _0x4b4a6a) {
      return _0x3365ee == _0x4b4a6a;
    };
    const _0x3e147d = _0x1bf490;
    if (_0x3e147d.HwDaH(this[_0x119683(1186)][_0x119683(565) + "r"](_0x26706d => _0x26706d[_0x119683(1324) + "de"] == "091")[_0x119683(1472) + "h"], 0)) {
      return;
    }
    let _0xa09585 = "https" + _0x119683(999) + _0x119683(1155) + _0x119683(590) + _0x119683(1321) + _0x119683(403) + _0x119683(1004) + "andHa" + _0x119683(1637) + "toLog" + _0x119683(844) + _0x119683(1461) + _0x119683(1352) + _0x119683(1737) + "nter",
      {
        loc: _0x2fa33c
      } = await this[_0x119683(843) + _0x119683(1628) + "neNew"](_0xa09585);
    if (!_0x2fa33c) {
      return;
    }
    await this[_0x119683(1120) + _0x119683(665)](_0x2fa33c);
  }
  async [_0x41d484(1487) + _0x41d484(1238)]() {
    const _0x5b5deb = _0x41d484;
    let _0x145942 = _0x5b5deb(1285) + _0x5b5deb(1142) + "nserv" + _0x5b5deb(854) + _0x5b5deb(704) + "o.cn/" + "h5/ac" + _0x5b5deb(975) + _0x5b5deb(1034) + _0x5b5deb(1122) + _0x5b5deb(1424) + _0x5b5deb(1713) + _0x5b5deb(322) + "d=Wza" + "R7KkU" + _0x5b5deb(1699) + "gDh7F" + _0x5b5deb(1549) + _0x5b5deb(337) + _0x5b5deb(1469) + _0x5b5deb(1715) + _0x5b5deb(1708) + "3&app" + "Name=" + _0x5b5deb(1265) + _0x5b5deb(1489),
      {
        ticket: _0x4ba53e
      } = await this[_0x5b5deb(843) + _0x5b5deb(1628) + _0x5b5deb(1269)](_0x145942);
    if (!_0x4ba53e) {
      return;
    }
    await this[_0x5b5deb(1487) + _0x5b5deb(665)](_0x4ba53e);
  }
  async [_0x41d484(328) + _0x41d484(864) + "w_tas" + "k"](_0x19c79b) {
    const _0x45df41 = _0x41d484;
    await this[_0x45df41(328) + "d_get" + _0x45df41(1454) + _0x45df41(515) + "dNumb" + "er"](_0x19c79b);
    await this["worea" + _0x45df41(534) + _0x45df41(1121) + _0x45df41(344)](_0x19c79b);
    await this["woread_get" + _0x45df41(1394) + _0x45df41(1693) + "mber"](_0x19c79b);
  }
  async ["worea" + _0x41d484(664) + "k"]() {
    const _0x2e8260 = _0x41d484;
    for (let _0x1e24da of _0x4a0787) {
      await this["worea" + _0x2e8260(864) + _0x2e8260(1189) + "k"](_0x1e24da);
    }
    await this[_0x2e8260(1066) + _0x2e8260(1012) + "eryRe" + _0x2e8260(1706) + _0x2e8260(785)]();
    await this["woread_que" + _0x2e8260(699) + _0x2e8260(1753) + "count"]();
  }
  async [_0x41d484(328) + _0x41d484(566) + _0x41d484(392) + _0x41d484(1238)]() {
    const _0x4d5bbe = _0x41d484,
      _0x58af5b = {};
    _0x58af5b[_0x4d5bbe(1255)] = function (_0x5a6dac, _0x1851a7) {
      return _0x5a6dac * _0x1851a7;
    };
    const _0x4a776a = _0x58af5b;
    while (this[_0x4d5bbe(1098) + _0x4d5bbe(1267) + _0x4d5bbe(741) + "t"] || this[_0x4d5bbe(1098) + _0x4d5bbe(1267) + _0x4d5bbe(1066) + "ox"]) {
      let _0x125ac2 = 2;
      const _0x560b54 = {};
      _0x560b54[_0x4d5bbe(1416) + _0x4d5bbe(358)] = _0x125ac2;
      await this[_0x4d5bbe(328) + _0x4d5bbe(534) + _0x4d5bbe(1494) + _0x4d5bbe(358)](_0x560b54);
      if (this["need_" + _0x4d5bbe(1267) + "moonb" + "ox"]) {
        await this["moonb" + _0x4d5bbe(1012) + _0x4d5bbe(1152) + _0x4d5bbe(1545) + _0x4d5bbe(1618) + "s"]();
      }
      if (this[_0x4d5bbe(1098) + _0x4d5bbe(1267) + "rabbi" + "t"]) {
        await this[_0x4d5bbe(450) + _0x4d5bbe(1689) + _0x4d5bbe(777) + _0x4d5bbe(975) + _0x4d5bbe(745)]();
      }
      (this[_0x4d5bbe(1098) + _0x4d5bbe(1267) + _0x4d5bbe(741) + "t"] || this[_0x4d5bbe(1098) + _0x4d5bbe(1267) + _0x4d5bbe(1066) + "ox"]) && (this[_0x4d5bbe(924)](_0x4d5bbe(738) + _0x4d5bbe(1539)), await _0x473183.wait(_0x4a776a[_0x4d5bbe(1255)](125, 1000)));
    }
  }
  async ["userL" + _0x41d484(584) + _0x41d484(598)]() {
    const _0x1b7c52 = _0x41d484;
    if (!(await this[_0x1b7c52(1575) + "e"]())) {
      return;
    }
    if (!(await this[_0x1b7c52(328) + _0x1b7c52(892) + "h"]())) {
      return;
    }
    if (!(await this["worea" + _0x1b7c52(1264) + "in"]())) {
      return;
    }
    await this[_0x1b7c52(1066) + _0x1b7c52(1012) + _0x1b7c52(1152) + _0x1b7c52(1545) + "Statu" + "s"]();
  }
  async [_0x41d484(1542) + _0x41d484(598)]() {
    const _0x1d5c48 = _0x41d484,
      _0xf493f3 = (_0x1d5c48(490) + _0x1d5c48(351) + "6|3")[_0x1d5c48(1654)]("|");
    let _0x5f4c86 = 0;
    while (true) {
      switch (_0xf493f3[_0x5f4c86++]) {
        case "0":
          await this["epay_" + _0x1d5c48(721) + "sk"]();
          continue;
        case "1":
          _0x473183[_0x1d5c48(924)](_0x1d5c48(943) + _0x1d5c48(1463) + _0x1d5c48(1463) + _0x1d5c48(1308) + _0x1d5c48(987) + this[_0x1d5c48(487)] + (_0x1d5c48(988) + _0x1d5c48(1463) + "-----" + _0x1d5c48(1463)));
          continue;
        case "2":
          await this[_0x1d5c48(659) + _0x1d5c48(1318)]();
          continue;
        case "3":
          await this[_0x1d5c48(328) + _0x1d5c48(664) + "k"]();
          continue;
        case "4":
          await this[_0x1d5c48(1734) + "28_ta" + "sk"]();
          continue;
        case "5":
          await this[_0x1d5c48(1487) + _0x1d5c48(1238)]();
          continue;
        case "6":
          await this[_0x1d5c48(1120) + _0x1d5c48(1238)]();
          continue;
      }
      break;
    }
  }
  async [_0x41d484(1542) + _0x41d484(875) + "sk"]() {
    const _0x1087a9 = _0x41d484;
    _0x473183[_0x1087a9(924)](_0x1087a9(943) + _0x1087a9(1463) + _0x1087a9(1463) + _0x1087a9(1308) + _0x1087a9(987) + this[_0x1087a9(487)] + (_0x1087a9(988) + _0x1087a9(1463) + _0x1087a9(1463) + "-----"));
    await this["ltyp_" + _0x1087a9(1238)]();
  }
}
!(async () => {
  const _0x49ffc4 = _0x41d484;
  if (!(await _0x1d5dea())) {
    return;
  }
  await _0x30140e();
  _0x473183[_0x49ffc4(1267) + _0x49ffc4(1551)](_0x244555);
  for (let _0x2f4fd0 of _0x473183[_0x49ffc4(1747) + _0x49ffc4(1475)]) {
    await _0x2f4fd0[_0x49ffc4(1747) + _0x49ffc4(584) + _0x49ffc4(598)]();
  }
  for (let _0x55e597 of _0x473183["userL" + _0x49ffc4(1475)][_0x49ffc4(565) + "r"](_0xb5055b => _0xb5055b.valid)) {
    await _0x55e597[_0x49ffc4(1542) + _0x49ffc4(598)]();
  }
  let _0x26277b = _0x473183[_0x49ffc4(1747) + _0x49ffc4(1475)][_0x49ffc4(565) + "r"](_0x3a18bd => _0x3a18bd.valid && _0x3a18bd[_0x49ffc4(328) + "d_ver" + _0x49ffc4(1638) + "de"] && (_0x3a18bd[_0x49ffc4(1098) + _0x49ffc4(1267) + _0x49ffc4(741) + "t"] || _0x3a18bd[_0x49ffc4(1098) + "read_" + "moonb" + "ox"]));
  if (_0x26277b.length) {
    let _0x56ec96 = [];
    _0x473183[_0x49ffc4(924)](_0x49ffc4(1239) + "=====" + "=== 开" + _0x49ffc4(1662) + _0x49ffc4(372) + _0x49ffc4(863) + "====");
    for (let _0x144430 of _0x26277b) {
      _0x56ec96[_0x49ffc4(871)](_0x144430[_0x49ffc4(328) + "d_rea" + "ding_" + _0x49ffc4(1238)]());
    }
    await Promise[_0x49ffc4(701)](_0x56ec96);
  }
})()[_0x41d484(1716)](_0x55db6b => _0x473183[_0x41d484(924)](_0x55db6b))[_0x41d484(1248) + "ly"](() => _0x473183.exitNow());
async function _0x1d5dea(_0x326b95 = 0) {
  const _0x255efb = _0x41d484,
    _0x490d10 = {
      hOpJt: _0x255efb(810),
      pAFKK: _0x255efb(801),
      MsEzY: function (_0x2bf630, _0x2858b9) {
        return _0x2bf630 != _0x2858b9;
      },
      csesU: function (_0x535f65, _0x85077c) {
        return _0x535f65 < _0x85077c;
      },
      pLrBs: function (_0x853eb0, _0x203455) {
        return _0x853eb0(_0x203455);
      },
      fEahY: function (_0x556c33, _0x5885a8) {
        return _0x556c33 == _0x5885a8;
      },
      poWzl: function (_0x33789b, _0x1e12a0) {
        return _0x33789b > _0x1e12a0;
      },
      dQyNS: function (_0x4c82a9, _0x24755a) {
        return _0x4c82a9 + _0x24755a;
      },
      YWYLs: function (_0x254166, _0x31e7e4) {
        return _0x254166 >= _0x31e7e4;
      },
      aHdOg: function (_0x533c75, _0xd45828) {
        return _0x533c75 < _0xd45828;
      },
      flrfb: function (_0x190426, _0x3ce7a2) {
        return _0x190426(_0x3ce7a2);
      }
    };
  let _0x2b3bd3 = false;
  try {
    const _0x27fd68 = {
      fn: _0x490d10[_0x255efb(425)]
    };
    _0x27fd68.fn = _0x490d10[_0x255efb(425)];
    _0x27fd68[_0x255efb(1363) + "d"] = _0x490d10[_0x255efb(1511)];
    _0x27fd68[_0x255efb(1296)] = _0x437d5f;
    _0x27fd68.timeout = 20000;
    let _0xb30bda = _0x27fd68,
      {
        statusCode: _0x3b0b80,
        result: _0x7dfc46
      } = await _0x80845b.request(_0xb30bda);
    if (_0x490d10[_0x255efb(464)](_0x3b0b80, 200)) {
      _0x490d10[_0x255efb(808)](_0x326b95++, _0x49391d) && (_0x2b3bd3 = await _0x490d10[_0x255efb(1190)](_0x1d5dea, _0x326b95));
      return _0x2b3bd3;
    }
    if (_0x490d10[_0x255efb(1547)](_0x7dfc46?.[_0x255efb(379)], 0)) {
      _0x7dfc46 = JSON[_0x255efb(927)](_0x7dfc46[_0x255efb(1247)][_0x255efb(549)].data);
      if (_0x7dfc46?.[_0x255efb(621) + _0x255efb(1381) + "fy"] && _0x490d10.poWzl(_0x7dfc46[_0x255efb(621) + "nNoti" + "fy"][_0x255efb(1472) + "h"], 0)) {
        const _0x169afc = {};
        _0x169afc[_0x255efb(778) + "y"] = true;
        _0x473183[_0x255efb(924)](_0x7dfc46.commonNotify.join("\n") + "\n", _0x169afc);
      }
      _0x7dfc46?.[_0x255efb(621) + _0x255efb(1150)] && _0x490d10[_0x255efb(633)](_0x7dfc46[_0x255efb(621) + _0x255efb(1150)][_0x255efb(1472) + "h"], 0) && _0x473183[_0x255efb(924)](_0x490d10[_0x255efb(1714)](_0x7dfc46.commonMsg[_0x255efb(1029)]("\n"), "\n"));
      if (_0x7dfc46[_0x1612dd]) {
        let _0x3e292e = _0x7dfc46[_0x1612dd];
        _0x490d10.fEahY(_0x3e292e[_0x255efb(1212) + "s"], 0) ? _0x490d10.YWYLs(_0x3afb60, _0x3e292e[_0x255efb(398) + "on"]) ? (_0x2b3bd3 = true, _0x473183[_0x255efb(924)](_0x3e292e[_0x255efb(823)][_0x3e292e[_0x255efb(1212) + "s"]]), _0x473183.log(_0x3e292e["updat" + _0x255efb(1490)]), _0x473183[_0x255efb(924)]("现在运行的" + _0x255efb(1582) + "：" + _0x3afb60 + ("，最新脚本" + _0x255efb(1083)) + _0x3e292e[_0x255efb(1629) + _0x255efb(1342) + _0x255efb(910)])) : _0x473183[_0x255efb(924)](_0x3e292e[_0x255efb(398) + _0x255efb(556)]) : _0x473183[_0x255efb(924)](_0x3e292e.msg[_0x3e292e[_0x255efb(1212) + "s"]]);
      } else {
        _0x473183[_0x255efb(924)](_0x7dfc46[_0x255efb(1024) + _0x255efb(1311)]);
      }
    } else {
      _0x490d10[_0x255efb(452)](_0x326b95++, _0x49391d) && (_0x2b3bd3 = await _0x490d10.flrfb(_0x1d5dea, _0x326b95));
    }
  } catch (_0x36b481) {
    _0x473183[_0x255efb(924)](_0x36b481);
  } finally {
    return _0x2b3bd3;
  }
}
async function _0x30140e() {
  const _0x588e1f = _0x41d484,
    _0x58d669 = {};
  _0x58d669[_0x588e1f(1261)] = _0x588e1f(801);
  _0x58d669.jIZrr = function (_0x1edb53, _0x21a354) {
    return _0x1edb53 != _0x21a354;
  };
  _0x58d669.rpogC = function (_0x364189, _0x399d78) {
    return _0x364189 == _0x399d78;
  };
  const _0x26f42f = _0x58d669;
  let _0x39b31a = false;
  try {
    const _0x441605 = {
      fn: _0x588e1f(968) + "skUrl",
      method: _0x26f42f[_0x588e1f(1261)]
    };
    _0x441605.fn = _0x588e1f(968) + "skUrl";
    _0x441605.method = _0x26f42f[_0x588e1f(1261)];
    _0x441605[_0x588e1f(1296)] = _0x1f6cac;
    let _0x435132 = _0x441605,
      {
        statusCode: _0x1a6124,
        result: _0x151259
      } = await _0x80845b[_0x588e1f(753) + "st"](_0x435132);
    if (_0x26f42f[_0x588e1f(1038)](_0x1a6124, 200)) {
      return Promise[_0x588e1f(365) + "ve"]();
    }
    if (_0x26f42f.rpogC(_0x151259?.[_0x588e1f(379)], 0)) {
      const _0x161b38 = (_0x588e1f(1550) + _0x588e1f(722)).split("|");
      let _0xfca9ab = 0;
      while (true) {
        switch (_0x161b38[_0xfca9ab++]) {
          case "0":
            if (_0x151259?.["woread_dra" + _0x588e1f(1464)]) {
              _0x4a0787 = _0x151259?.[_0x588e1f(328) + _0x588e1f(864) + _0x588e1f(1464)];
            }
            continue;
          case "1":
            _0x151259 = JSON.parse(_0x151259[_0x588e1f(1247)][_0x588e1f(549)][_0x588e1f(1247)]);
            continue;
          case "2":
            if (_0x151259?.[_0x588e1f(1175) + "nth_2" + _0x588e1f(1527) + "re"]) {
              _0x117e7f = _0x151259?.[_0x588e1f(1175) + _0x588e1f(794) + "8_sha" + "re"];
            }
            continue;
          case "3":
            if (_0x151259?.[_0x588e1f(1487) + _0x588e1f(1581) + "ry"]) {
              _0x1045cc = _0x151259?.[_0x588e1f(1487) + _0x588e1f(1581) + "ry"];
            }
            continue;
          case "4":
            if (_0x151259?.[_0x588e1f(1066) + "ox"]) {
              _0x492f02 = _0x151259?.[_0x588e1f(1066) + "ox"];
            }
            continue;
        }
        break;
      }
    }
  } catch (_0x201dd7) {
    _0x473183[_0x588e1f(924)](_0x201dd7);
  } finally {
    return _0x39b31a;
  }
}
function _0x3f1673(_0x4f3a6b) {
  const _0xa4eb1c = _0x41d484,
    _0x38d70a = {
      edqTQ: _0xa4eb1c(956) + "|6|0|" + "4|3|5",
      vDmss: _0xa4eb1c(320) + _0xa4eb1c(1093),
      fCkcW: function (_0x59f47e, _0x111164) {
        return _0x59f47e + _0x111164;
      },
      RcbaT: function (_0x227387, _0x2da606) {
        return _0x227387 > _0x2da606;
      },
      dbgNC: function (_0x12d5e8, _0x166514) {
        return _0x12d5e8 < _0x166514;
      },
      inFEq: function (_0x39dc86, _0x141f65) {
        return _0x39dc86 / _0x141f65;
      },
      ryFkO: function (_0xf491fe, _0x3c18ca) {
        return _0xf491fe + _0x3c18ca;
      },
      KiZnj: function (_0x1b0e1f, _0x10fbbc) {
        return _0x1b0e1f - _0x10fbbc;
      },
      pyIZZ: function (_0x32c6a1, _0x46f6e5) {
        return _0x32c6a1 + _0x46f6e5;
      },
      ZGCPG: function (_0x596abc, _0x4896d6) {
        return _0x596abc == _0x4896d6;
      },
      DEBmj: function (_0x32b012, _0x9a350d) {
        return _0x32b012 + _0x9a350d;
      },
      xshug: _0xa4eb1c(1239) + "=====" + _0xa4eb1c(863) + _0xa4eb1c(1611) + "=====" + _0xa4eb1c(863) + "===",
      VRqbA: function (_0x354d3f, _0x88425d) {
        return _0x354d3f(_0x88425d);
      },
      vSgSi: "./sen" + _0xa4eb1c(1614) + "fy",
      XTZUP: function (_0x2cfc77, _0x8282b) {
        return _0x2cfc77 > _0x8282b;
      },
      RXRKp: function (_0x42c809, _0x3ee0dd) {
        return _0x42c809 == _0x3ee0dd;
      },
      RbJBd: function (_0x3f813b, _0x271bf3) {
        return _0x3f813b + _0x271bf3;
      },
      SoCti: function (_0x3da8e2, _0xb5f44f) {
        return _0x3da8e2 && _0xb5f44f;
      },
      xjeNp: function (_0x215e5c, _0x266b00) {
        return _0x215e5c(_0x266b00);
      },
      XKzCu: function (_0x55a6f3, _0x162f9c) {
        return _0x55a6f3 * _0x162f9c;
      },
      UMtOJ: function (_0x15010c, _0x28f537) {
        return _0x15010c == _0x28f537;
      },
      NELVk: _0xa4eb1c(1284) + "xxx-x" + _0xa4eb1c(822) + _0xa4eb1c(822) + _0xa4eb1c(822) + "xxxxx" + "xxxxx" + "x",
      uZDuY: function (_0x4c961a, _0x2debd5) {
        return _0x4c961a < _0x2debd5;
      },
      khWhz: function (_0x489547, _0x50cd6b) {
        return _0x489547 * _0x50cd6b;
      },
      ebctb: function (_0x4121f4, _0x115d6e) {
        return _0x4121f4 / _0x115d6e;
      },
      bopLN: function (_0x5ad06b, _0x4750dc) {
        return _0x5ad06b < _0x4750dc;
      },
      gHBEn: function (_0x354cc8, _0xffd3d9) {
        return _0x354cc8(_0xffd3d9);
      },
      ediiD: _0xa4eb1c(1165) + "g",
      vsugA: _0xa4eb1c(743) + _0xa4eb1c(1558) + " ",
      zUOBr: function (_0x576684, _0x4addb3) {
        return _0x576684 + _0x4addb3;
      },
      gqpcu: function (_0x1122dc, _0x235adc) {
        return _0x1122dc - _0x235adc;
      },
      Sxflf: _0xa4eb1c(320) + ":ss.S",
      LfAJg: function (_0x6b9aaf, _0x36de55) {
        return _0x6b9aaf * _0x36de55;
      },
      VanpF: function (_0x238da8, _0x5abc85) {
        return _0x238da8 * _0x5abc85;
      },
      dpVYl: function (_0x5daf2a, _0x40d7e3) {
        return _0x5daf2a > _0x40d7e3;
      },
      MsBkn: function (_0x1603e, _0x4b49ff) {
        return _0x1603e / _0x4b49ff;
      },
      jquau: function (_0x13ef50, _0x26802d) {
        return _0x13ef50 > _0x26802d;
      },
      UOmvk: function (_0x30ec70, _0x13e85d) {
        return _0x30ec70 - _0x13e85d;
      },
      gJzzi: function (_0x3490d9, _0x22cd17) {
        return _0x3490d9 < _0x22cd17;
      },
      sdSkQ: function (_0x373a23, _0x374680) {
        return _0x373a23 - _0x374680;
      }
    };
  return new class {
    constructor(_0x480d17) {
      const _0x2b5009 = _0xa4eb1c,
        _0x2725fe = _0x38d70a[_0x2b5009(662)][_0x2b5009(1654)]("|");
      let _0x30773e = 0;
      while (true) {
        switch (_0x2725fe[_0x30773e++]) {
          case "0":
            this[_0x2b5009(778) + _0x2b5009(373)] = true;
            continue;
          case "1":
            this[_0x2b5009(1619)] = _0x480d17;
            continue;
          case "2":
            const _0x2f4b92 = {};
            _0x2f4b92[_0x2b5009(341)] = true;
            this.log("[" + this[_0x2b5009(1619)] + "]开始运行\n", _0x2f4b92);
            continue;
          case "3":
            this[_0x2b5009(1747) + _0x2b5009(1475)] = [];
            continue;
          case "4":
            this[_0x2b5009(773) + "dx"] = 0;
            continue;
          case "5":
            this[_0x2b5009(1533) + "ount"] = 0;
            continue;
          case "6":
            this[_0x2b5009(778) + _0x2b5009(1097)] = [];
            continue;
          case "7":
            this["start" + _0x2b5009(1023)] = Date[_0x2b5009(1135)]();
            continue;
        }
        break;
      }
    }
    [_0xa4eb1c(924)](_0x11eb01, _0x267188 = {}) {
      const _0x235206 = _0xa4eb1c,
        _0x52e76a = {};
      _0x52e76a[_0x235206(979) + "le"] = true;
      let _0xdcbd6c = _0x52e76a;
      Object[_0x235206(1760) + "n"](_0xdcbd6c, _0x267188);
      if (_0xdcbd6c.time) {
        let _0x22ec79 = _0xdcbd6c[_0x235206(385)] || _0x38d70a.vDmss;
        _0x11eb01 = _0x38d70a[_0x235206(932)]("[" + this.time(_0x22ec79) + "]", _0x11eb01);
      }
      if (_0xdcbd6c[_0x235206(778) + "y"]) {
        this[_0x235206(778) + "yStr"][_0x235206(871)](_0x11eb01);
      }
      if (_0xdcbd6c[_0x235206(979) + "le"]) {
        console[_0x235206(924)](_0x11eb01);
      }
    }
    get(_0x55d4b9, _0x58e5ee, _0xf9d427 = "") {
      const _0x199828 = _0xa4eb1c;
      let _0x1dd59d = _0xf9d427;
      _0x55d4b9?.[_0x199828(1275) + _0x199828(1604) + _0x199828(611)](_0x58e5ee) && (_0x1dd59d = _0x55d4b9[_0x58e5ee]);
      return _0x1dd59d;
    }
    [_0xa4eb1c(1374)](_0x31d445, _0x30becb, _0x46ed9d = "") {
      const _0x446385 = _0xa4eb1c;
      let _0x210592 = _0x46ed9d;
      _0x31d445?.[_0x446385(1275) + _0x446385(1604) + _0x446385(611)](_0x30becb) && (_0x210592 = _0x31d445[_0x30becb], delete _0x31d445[_0x30becb]);
      return _0x210592;
    }
    [_0xa4eb1c(677)](_0x4ae44f) {
      return Object.assign({}, _0x4ae44f);
    }
    [_0xa4eb1c(1267) + _0xa4eb1c(1551)](_0x3e38e7) {
      const _0x4375c2 = _0xa4eb1c;
      let _0x370898 = _0x38e245[_0x4375c2(1211)](_0x58baea => process[_0x4375c2(1551)][_0x58baea]);
      for (let _0x2bb191 of _0x370898[_0x4375c2(565) + "r"](_0xa1c386 => !!_0xa1c386)) {
        let _0x48092c = _0x1f100a[_0x4375c2(565) + "r"](_0x209891 => _0x2bb191.includes(_0x209891)),
          _0x317c56 = _0x38d70a.RcbaT(_0x48092c.length, 0) ? _0x48092c[0] : _0x1f100a[0];
        for (let _0xc504e2 of _0x2bb191.split(_0x317c56)[_0x4375c2(565) + "r"](_0xeab922 => !!_0xeab922)) {
          this[_0x4375c2(1747) + _0x4375c2(1475)][_0x4375c2(871)](new _0x3e38e7(_0xc504e2));
        }
      }
      this[_0x4375c2(1533) + _0x4375c2(1263)] = this[_0x4375c2(1747) + "ist"].length;
      if (!this[_0x4375c2(1533) + _0x4375c2(1263)]) {
        const _0x20765f = {};
        _0x20765f[_0x4375c2(778) + "y"] = true;
        this[_0x4375c2(924)](_0x4375c2(760) + "，请检查变" + "量" + _0x38e245[_0x4375c2(1211)](_0x3041d0 => "[" + _0x3041d0 + "]")[_0x4375c2(1029)]("或"), _0x20765f);
        return false;
      }
      this[_0x4375c2(924)](_0x4375c2(1278) + this[_0x4375c2(1533) + _0x4375c2(1263)] + _0x4375c2(1138));
      return true;
    }
    async [_0xa4eb1c(1679) + "ds"](_0x3744e5, _0x52a4a2, _0x12f649 = {}) {
      const _0x23ad22 = _0xa4eb1c;
      while (_0x38d70a[_0x23ad22(1444)](_0x52a4a2.idx, _0x473183[_0x23ad22(1747) + _0x23ad22(1475)][_0x23ad22(1472) + "h"])) {
        let _0x4d118c = _0x473183[_0x23ad22(1747) + "ist"][_0x52a4a2[_0x23ad22(955)]++];
        if (!_0x4d118c[_0x23ad22(1223)]) {
          continue;
        }
        await _0x4d118c[_0x3744e5](_0x12f649);
      }
    }
    async ["threa" + _0xa4eb1c(803)](_0x3d3bb8, _0x4edd82) {
      const _0x1618b3 = _0xa4eb1c;
      let _0x49bcd9 = [];
      const _0x3ef133 = {};
      _0x3ef133[_0x1618b3(955)] = 0;
      let _0x6b812 = _0x3ef133;
      while (_0x4edd82--) {
        _0x49bcd9[_0x1618b3(871)](this.threads(_0x3d3bb8, _0x6b812));
      }
      await Promise.all(_0x49bcd9);
    }
    [_0xa4eb1c(341)](_0x54e4a3, _0x181c14 = null) {
      const _0x59111d = _0xa4eb1c;
      let _0x5b7182 = _0x181c14 ? new Date(_0x181c14) : new Date(),
        _0x3bcb1c = {
          "M+": _0x5b7182.getMonth() + 1,
          "d+": _0x5b7182[_0x59111d(725) + "te"](),
          "h+": _0x5b7182[_0x59111d(966) + "urs"](),
          "m+": _0x5b7182[_0x59111d(1573) + _0x59111d(646)](),
          "s+": _0x5b7182[_0x59111d(994) + _0x59111d(1127)](),
          "q+": Math[_0x59111d(716)](_0x38d70a.inFEq(_0x38d70a.ryFkO(_0x5b7182[_0x59111d(1256) + _0x59111d(592)](), 3), 3)),
          S: this[_0x59111d(783) + "r"](_0x5b7182[_0x59111d(1573) + _0x59111d(347) + _0x59111d(1127)](), 3)
        };
      /(y+)/[_0x59111d(1349)](_0x54e4a3) && (_0x54e4a3 = _0x54e4a3[_0x59111d(1744) + "ce"](RegExp.$1, _0x38d70a.ryFkO(_0x5b7182.getFullYear(), "")[_0x59111d(1535) + "r"](_0x38d70a[_0x59111d(715)](4, RegExp.$1[_0x59111d(1472) + "h"]))));
      for (let _0x111f59 in _0x3bcb1c) new RegExp(_0x38d70a.pyIZZ("(", _0x111f59) + ")")[_0x59111d(1349)](_0x54e4a3) && (_0x54e4a3 = _0x54e4a3[_0x59111d(1744) + "ce"](RegExp.$1, _0x38d70a.ZGCPG(1, RegExp.$1[_0x59111d(1472) + "h"]) ? _0x3bcb1c[_0x111f59] : _0x38d70a[_0x59111d(1110)]("00", _0x3bcb1c[_0x111f59])[_0x59111d(1535) + "r"](("" + _0x3bcb1c[_0x111f59])[_0x59111d(1472) + "h"])));
      return _0x54e4a3;
    }
    async showmsg() {
      const _0x3dafa5 = _0xa4eb1c,
        _0x4f0f9f = (_0x3dafa5(369) + _0x3dafa5(1160)).split("|");
      let _0x492ea2 = 0;
      while (true) {
        switch (_0x4f0f9f[_0x492ea2++]) {
          case "0":
            if (!this[_0x3dafa5(778) + _0x3dafa5(1097)][_0x3dafa5(1472) + "h"]) {
              return;
            }
            continue;
          case "1":
            await _0x4f180e[_0x3dafa5(430) + _0x3dafa5(819)](this[_0x3dafa5(1619)], this[_0x3dafa5(778) + _0x3dafa5(1097)][_0x3dafa5(1029)]("\n"));
            continue;
          case "2":
            this[_0x3dafa5(924)](_0x38d70a[_0x3dafa5(897)]);
            continue;
          case "3":
            var _0x4f180e = _0x38d70a.VRqbA(require, _0x38d70a[_0x3dafa5(772)]);
            continue;
          case "4":
            if (!this[_0x3dafa5(778) + _0x3dafa5(373)]) {
              return;
            }
            continue;
        }
        break;
      }
    }
    [_0xa4eb1c(783) + "r"](_0x5ed456, _0x27f3b2, _0x582892 = {}) {
      const _0x5dc1d1 = _0xa4eb1c;
      let _0x1370ea = _0x582892[_0x5dc1d1(770) + "ng"] || "0",
        _0x1c80da = _0x582892[_0x5dc1d1(496)] || "l",
        _0x416b29 = String(_0x5ed456),
        _0x10ef65 = _0x38d70a.XTZUP(_0x27f3b2, _0x416b29[_0x5dc1d1(1472) + "h"]) ? _0x27f3b2 - _0x416b29[_0x5dc1d1(1472) + "h"] : 0,
        _0x273cec = "";
      for (let _0x318bb2 = 0; _0x318bb2 < _0x10ef65; _0x318bb2++) {
        _0x273cec += _0x1370ea;
      }
      _0x38d70a[_0x5dc1d1(1495)](_0x1c80da, "r") ? _0x416b29 = _0x38d70a[_0x5dc1d1(1594)](_0x416b29, _0x273cec) : _0x416b29 = _0x38d70a[_0x5dc1d1(1594)](_0x273cec, _0x416b29);
      return _0x416b29;
    }
    [_0xa4eb1c(376) + _0xa4eb1c(636)](_0x543081, _0x1f9a2, _0x137721 = false) {
      const _0xbd9ce8 = _0xa4eb1c;
      let _0x1c746a = [];
      for (let _0x54d0d3 of Object[_0xbd9ce8(887)](_0x543081)[_0xbd9ce8(539)]()) {
        let _0x57c4a8 = _0x543081[_0x54d0d3];
        if (_0x38d70a.SoCti(_0x57c4a8, _0x137721)) {
          _0x57c4a8 = _0x38d70a.xjeNp(encodeURIComponent, _0x57c4a8);
        }
        _0x1c746a[_0xbd9ce8(871)](_0x38d70a[_0xbd9ce8(1110)](_0x38d70a.fCkcW(_0x54d0d3, "="), _0x57c4a8));
      }
      return _0x1c746a[_0xbd9ce8(1029)](_0x1f9a2);
    }
    [_0xa4eb1c(567) + "son"](_0x115d1f, _0x2ce17e = false) {
      const _0x3131b6 = _0xa4eb1c;
      let _0x2a0120 = {};
      for (let _0x46c4e5 of _0x115d1f.split("&")) {
        if (!_0x46c4e5) {
          continue;
        }
        let _0x5aea2b = _0x46c4e5[_0x3131b6(487) + "Of"]("=");
        if (_0x38d70a[_0x3131b6(735)](_0x5aea2b, -1)) {
          continue;
        }
        let _0x2b36c5 = _0x46c4e5[_0x3131b6(1535) + "r"](0, _0x5aea2b),
          _0x1ced8a = _0x46c4e5[_0x3131b6(1535) + "r"](_0x38d70a.ryFkO(_0x5aea2b, 1));
        if (_0x2ce17e) {
          _0x1ced8a = _0x38d70a[_0x3131b6(1701)](decodeURIComponent, _0x1ced8a);
        }
        _0x2a0120[_0x2b36c5] = _0x1ced8a;
      }
      return _0x2a0120;
    }
    [_0xa4eb1c(1346) + _0xa4eb1c(1711) + "ern"](_0x2b9ef0, _0x3b8103 = _0xa4eb1c(658) + _0xa4eb1c(1087) + "45678" + "9") {
      const _0x1b18c0 = _0xa4eb1c;
      let _0x186bb6 = "";
      for (let _0x1267a6 of _0x2b9ef0) {
        if (_0x38d70a.RXRKp(_0x1267a6, "x")) {
          _0x186bb6 += _0x3b8103[_0x1b18c0(1686) + "t"](Math.floor(_0x38d70a[_0x1b18c0(1564)](Math[_0x1b18c0(1346) + "m"](), _0x3b8103.length)));
        } else {
          _0x38d70a.UMtOJ(_0x1267a6, "X") ? _0x186bb6 += _0x3b8103[_0x1b18c0(1686) + "t"](Math[_0x1b18c0(716)](Math[_0x1b18c0(1346) + "m"]() * _0x3b8103[_0x1b18c0(1472) + "h"]))["toUpp" + _0x1b18c0(569) + "e"]() : _0x186bb6 += _0x1267a6;
        }
      }
      return _0x186bb6;
    }
    [_0xa4eb1c(1346) + _0xa4eb1c(884)]() {
      const _0x4da4ba = _0xa4eb1c;
      return this[_0x4da4ba(1346) + "mPatt" + _0x4da4ba(1481)](_0x38d70a[_0x4da4ba(1030)]);
    }
    [_0xa4eb1c(1346) + _0xa4eb1c(377) + "ng"](_0x50c18c, _0x32fa03 = _0xa4eb1c(658) + _0xa4eb1c(1087) + _0xa4eb1c(500) + "9") {
      const _0x1f07cf = _0xa4eb1c;
      let _0x5be1af = "";
      for (let _0x4a1b37 = 0; _0x38d70a[_0x1f07cf(1710)](_0x4a1b37, _0x50c18c); _0x4a1b37++) {
        _0x5be1af += _0x32fa03[_0x1f07cf(1686) + "t"](Math.floor(_0x38d70a.XKzCu(Math.random(), _0x32fa03[_0x1f07cf(1472) + "h"])));
      }
      return _0x5be1af;
    }
    [_0xa4eb1c(1346) + _0xa4eb1c(882)](_0x578359) {
      const _0x45164d = _0xa4eb1c;
      let _0x871f35 = Math[_0x45164d(716)](_0x38d70a.khWhz(Math[_0x45164d(1346) + "m"](), _0x578359.length));
      return _0x578359[_0x871f35];
    }
    [_0xa4eb1c(1246)](_0x31a4f5) {
      return new Promise(_0x4f4889 => setTimeout(_0x4f4889, _0x31a4f5));
    }
    async [_0xa4eb1c(1229) + "ow"]() {
      const _0x172e44 = _0xa4eb1c;
      await this.showmsg();
      let _0x167f16 = Date.now(),
        _0x521f4a = _0x38d70a.ebctb(_0x167f16 - this[_0x172e44(1230) + _0x172e44(1023)], 1000);
      this[_0x172e44(924)]("");
      const _0x597c7c = {};
      _0x597c7c[_0x172e44(341)] = true;
      this[_0x172e44(924)]("[" + this.name + (_0x172e44(1319) + _0x172e44(387)) + _0x521f4a + "秒", _0x597c7c);
      process[_0x172e44(1359)](0);
    }
    [_0xa4eb1c(824) + _0xa4eb1c(359) + _0xa4eb1c(341)](_0x19836d, _0x4febcc = {}) {
      const _0x6845f2 = _0xa4eb1c;
      let _0x51a77b = _0x4febcc.len || _0x59125e;
      _0x19836d = _0x19836d["toStr" + _0x6845f2(1489)]();
      let _0x287328 = _0x19836d[_0x6845f2(1472) + "h"];
      while (_0x38d70a[_0x6845f2(1092)](_0x287328, _0x51a77b)) {
        _0x19836d += "0";
      }
      _0x38d70a[_0x6845f2(1037)](_0x287328, _0x51a77b) && (_0x19836d = _0x19836d.slice(0, 13));
      return _0x38d70a[_0x6845f2(681)](parseInt, _0x19836d);
    }
    async [_0xa4eb1c(1348) + _0xa4eb1c(1514)](_0x310408, _0x5f2793 = {}) {
      const _0x182bbc = _0xa4eb1c;
      let _0x30cf8e = _0x5f2793[_0x182bbc(1013) + "r"] || this,
        _0x44df3c = _0x5f2793[_0x182bbc(471) + _0x182bbc(952)] || _0x435828,
        _0x48d801 = _0x5f2793[_0x182bbc(1720)] || _0x1f4c96,
        _0x2d9d79 = _0x5f2793[_0x182bbc(870)] || _0x511e08;
      if (typeof _0x310408 == _0x38d70a[_0x182bbc(1403)] && _0x310408["inclu" + _0x182bbc(1391)](":")) {
        if (_0x310408.includes("-")) {
          _0x310408 = new Date(_0x310408).getTime();
        } else {
          let _0x261afc = this[_0x182bbc(341)](_0x38d70a.vsugA);
          _0x310408 = new Date(_0x38d70a[_0x182bbc(1156)](_0x261afc, _0x310408))[_0x182bbc(757) + "me"]();
        }
      }
      let _0xa098c1 = _0x38d70a[_0x182bbc(1636)](this[_0x182bbc(824) + _0x182bbc(359) + _0x182bbc(341)](_0x310408), _0x2d9d79),
        _0x1d2283 = this[_0x182bbc(341)](_0x38d70a[_0x182bbc(695)], _0xa098c1),
        _0x29ceeb = Date.now();
      _0x29ceeb > _0xa098c1 && (_0xa098c1 += _0x38d70a[_0x182bbc(1702)](_0x38d70a[_0x182bbc(1702)](_0x38d70a[_0x182bbc(1675)](24, 60), 60), 1000));
      let _0xca37cf = _0x38d70a[_0x182bbc(715)](_0xa098c1, _0x29ceeb);
      if (_0x38d70a[_0x182bbc(335)](_0xca37cf, _0x48d801)) {
        const _0x18f784 = {};
        _0x18f784[_0x182bbc(341)] = true;
        _0x30cf8e[_0x182bbc(924)]("离目标时间[" + _0x1d2283 + "]大于" + _0x48d801 / 1000 + "秒,不等待", _0x18f784);
      } else {
        const _0x3f011b = {};
        _0x3f011b[_0x182bbc(341)] = true;
        _0x30cf8e[_0x182bbc(924)](_0x182bbc(1392) + "[" + _0x1d2283 + _0x182bbc(1347) + _0x38d70a[_0x182bbc(1698)](_0xca37cf, 1000) + "秒,开始等待", _0x3f011b);
        while (_0x38d70a[_0x182bbc(849)](_0xca37cf, 0)) {
          let _0x347a17 = Math[_0x182bbc(1362)](_0xca37cf, _0x44df3c);
          await this[_0x182bbc(1246)](_0x347a17);
          _0x29ceeb = Date[_0x182bbc(1135)]();
          _0xca37cf = _0x38d70a[_0x182bbc(715)](_0xa098c1, _0x29ceeb);
        }
        const _0x3a6a26 = {};
        _0x3a6a26[_0x182bbc(341)] = true;
        _0x30cf8e[_0x182bbc(924)](_0x182bbc(1064), _0x3a6a26);
      }
    }
    async [_0xa4eb1c(1348) + "gap_i" + _0xa4eb1c(594) + "al"](_0x4f2774, _0x4b8a84) {
      const _0x2e9e1d = _0xa4eb1c;
      let _0x3383f5 = _0x38d70a[_0x2e9e1d(1337)](Date[_0x2e9e1d(1135)](), _0x4f2774);
      _0x38d70a[_0x2e9e1d(915)](_0x3383f5, _0x4b8a84) && (await this[_0x2e9e1d(1246)](_0x38d70a[_0x2e9e1d(846)](_0x4b8a84, _0x3383f5)));
    }
  }(_0x4f3a6b);
}