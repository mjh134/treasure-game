// 寻宝游戏 · async/await 重写版
// 在原有四步（获取线索 → 解码 → 搜索神庙 → 开箱）基础上新增三个异步情节：
// 1. 拜访神秘老者（获得护身符，可抵御一次守卫）
// 2. 通过回声峡谷（并发收集三块宝石，Promise.all）
// 3. 解开石门谜题（答错则重试，最多三次）

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject(new Error("没有线索可以解码!"));
          return;
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error("糟糕!遇到了神庙守卫!"));
          return;
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }

  // ===== 新增情节 =====

  // 新情节1：拜访神秘老者，获得护身符（可抵挡一次守卫）
  static meetOldSage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error("老者今日闭门谢客..."));
          return;
        }
        resolve("神秘老者赠予你一枚守卫护身符...");
      }, 1200);
    });
  }

  // 新情节2：回声峡谷 —— 并发收集三块宝石
  static collectGem(name, ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`💎 ${name}`), ms);
    });
  }

  static async crossEchoValley() {
    const gems = await Promise.all([
      this.collectGem("烈焰宝石", 800),
      this.collectGem("寒冰宝石", 1200),
      this.collectGem("疾风宝石", 1000),
    ]);
    return `集齐三块宝石,唤醒石门: ${gems.join(" + ")}`;
  }

  // 新情节3：解开石门谜题（30% 概率答错，最多重试三次）
  static solveRiddle(attempt) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error(`石门轰鸣,谜题第 ${attempt} 次解答错误!`));
          return;
        }
        resolve("石门缓缓开启,神庙深处透出金光...");
      }, 1300);
    });
  }
}

async function findTreasure() {
  console.log("🏴‍☠️ 寻宝之旅开始!");

  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);

    const location = await TreasureMap.decodeAncientScript(clue);
    console.log(location);

    // 新情节1：拜访老者拿护身符，失败也不放弃寻宝
    let hasAmulet = false;
    try {
      const gift = await TreasureMap.meetOldSage();
      console.log(gift);
      hasAmulet = true;
    } catch (err) {
      console.warn("未能获得护身符:", err.message);
    }

    // 新情节2：并发收集宝石
    console.log(await TreasureMap.crossEchoValley());

    // 新情节3：石门谜题，最多重试三次
    let doorOpen = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        doorOpen = await TreasureMap.solveRiddle(attempt);
        break;
      } catch (err) {
        console.warn(err.message);
      }
    }
    if (!doorOpen) {
      throw new Error("三次谜题均未解开,寻宝失败...");
    }
    console.log(doorOpen);

    // 原有情节：搜索神庙（有护身符则可抵挡最多三次守卫）
    const maxTries = hasAmulet ? 3 : 1;
    let box = null;
    for (let i = 0; i < maxTries; i++) {
      try {
        box = await TreasureMap.searchTemple(location);
        break;
      } catch (err) {
        if (hasAmulet && i < maxTries - 1) {
          console.warn("守卫出现!护身符发挥作用,击退守卫,再次搜索...");
        }
      }
    }
    if (!box) {
      throw new Error("神庙搜索失败,被守卫赶了出来...");
    }
    console.log(box);

    console.log(await TreasureMap.openTreasureBox());
  } catch (error) {
    console.error("任务失败:", error.message);
  }
}

// 直接用 node 运行时自动开始寻宝；浏览器中供 index.html 调用
if (typeof window === "undefined") {
  findTreasure();
} else {
  window.TreasureMap = TreasureMap;
  window.findTreasure = findTreasure;
}
