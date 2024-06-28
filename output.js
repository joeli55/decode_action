//1719546207955
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