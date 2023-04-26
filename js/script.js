// <!-----------------------main Start--------------------------------->
var flag = "";
var flag2 = 1;
const root = document.querySelector(":root");
let oldTop = 0;
window.onscroll = () => {
  var nowTop = document.documentElement.scrollTop;
  if (nowTop > oldTop) {
    document.querySelector("nav").classList.add("nav_active");
  } else {
    document.querySelector("nav").classList.remove("nav_active");
  }
  oldTop = nowTop;
};

// <!-----------------------Vue Start--------------------------------->
const app = Vue.createApp({
  data() {
    return {
      text_h: "",
      text_content: "",
      Lsum: 0,
      select_value: "減脂系列",
      product_ary: [],
      datas: [
        {
          id: 1,
          img: "./images/image1.png",
          h: "低碳便當設計比賽",
          content: `
                    張老闆希望讓更多年輕人知道健康的重要性，而推廣了低碳餐盒，但吃久了就會想換別的吃
                    ，那不如自己親手做一個低碳便當，不僅能更了解低碳的知識，也能吃得健康我們介由低碳
                    便碳設計比賽了解現在年輕人口味，自製低碳便當~請大家自己動手做一餐低碳便當，把食
                    材、成品的圖片上傳，填寫食材、使用多少克、還有食材的碳排放量，製作過程不僅能了解
                    低碳知識，也能吃得健康，請大家踴躍參與。<a href="./file/創意低碳便當設計.docx" download>點我下載報名表</a>
                        `,
        },
        {
          id: 2,
          img: "./images/image2.png",
          h: "減碳大作戰 !",
          content: `
          我們還有設計出有趣的平台遊戲，遊戲名稱為減碳大作戰。遊戲內容主要是以玩家操控角色躲避
          高碳食物吃到低碳食物，介由玩遊戲的方式讓玩家了解到什麼是低碳食物什麼是高碳食物。
          <a href='https://reurl.cc/MR5yM4' target="_blank">減碳大作戰</a>
                    `,
        },
        {
          id: 3,
          img: "./images/image3.png",
          h: "碳計算APP無線版",
          content: `
                    為了讓我們可以簡單得知我們一餐含多少碳足跡，於是我們製作了碳計算App可以輸入公克數目的方式來獲得碳足跡，
                    可能會覺得說網站上不就有一個排碳計算機了?不過這是一個可以不用網路也可以使用的<b>「減碳計算APP無線版!」</b>
                    只要點擊下方連結就可以下載
                    <a href='./file/carbon.apk' download>點我下載減碳計算APP無線版</a>
                    `,
        },
        {
          id: 4,
          img: "./images/image4.png",
          h: "AI減碳相機",
          content: `
                    如果你是一個不想自己查食物碳排並且手機沒有下載減碳計算APP無線版的話，我們強力推薦您這款「AI減碳相機」!，
                    AI的部分主要是用網路上一個軟體要teachable的軟體，可以透過上傳圖片的方式生成模型，就可以使用網站的攝像頭
                    來去辨識出是什麼食物。
                    <a href='https://reurl.cc/EGl1mR' target="_blank">點我去AI減碳相機</a>
                    `,
        },
        {
          id: 5,
          img: "./images/image5.png",
          h: "LINE貼圖",
          content: `
                    為了可以在日常生活中呼籲更多人減碳，我們設計出可愛的動物LINE貼圖，可以到LINE貼圖小鋪看看喔!
                    只要在LINE的官方的貼圖小鋪裡搜尋「減碳」，就可以看到我們可愛動物LINE貼圖了喔!
                    <a href='https://store.line.me/stickershop/product/22416348/zh-Hant' target="_blank">點我去LINE貼圖減碳小動物</a>
                    `,
        },
        {
          id: 6,
          img: "./images/image6.png",
          h: "Youtube減碳小短片",
          content: `
                    美日一碳排，關注我們!
                    <a href='https://www.youtube.com/@pcf 0517' target="_blank">點我去我們的Youtube官網</a>
                    `,
        },
      ],
      shopingCart_toggle_img: "<i class='bi bi-cart4'></i>",
      select_container: ["減脂系列", "增肌系列", "豪華系列"],
      products: [
        {
          // 減脂系列
          img: "./images/元氣滿滿雞肉餐.jpg",
          name: "減脂滿滿雞肉餐",
          price: 130,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "禽肉 6kg/1 kg",
        },
        {
          img: "./images/元氣滿滿豬肉餐.jpg",
          name: "減脂滿滿豬肉餐",
          price: 130,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "豬肉 7kg/1 kg",
        },
        {
          img: "./images/元氣滿滿魚肉餐.jpg",
          name: "減脂滿滿魚肉餐",
          price: 130,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "1kg魚肉5kg碳",
        },
        {
          img: "./images/元氣滿滿烤鯖魚.jpg",
          name: "減脂滿滿烤鯖魚",
          price: 150,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "1kg魚肉5kg碳",
        },
        {
          img: "./images/元氣滿滿泡菜豬.jpg",
          name: "減脂滿滿泡菜豬",
          price: 150,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "豬肉 7kg/1 kg",
        },
        {
          img: "./images/元氣滿滿牛肉餐.jpg",
          name: "減脂滿滿牛肉餐",
          price: 160,
          amount: 0,
          product_class: "減脂系列",
          carbon_content: "牛肉 60kg/1 kg",
        },
        {
          // 增肌系列
          img: "./images/元氣滿滿雞肉餐.jpg",
          name: "增肌滿滿雞肉餐",
          price: 150,
          amount: 0,
          product_class: "增肌系列",
          carbon_content: "禽肉 6kg/1 kg",
        },
        {
          img: "./images/元氣滿滿豬肉餐.jpg",
          name: "增肌滿滿豬肉餐",
          price: 150,
          amount: 0,
          product_class: "增肌系列",
          carbon_content: "豬肉 7kg/1 kg",
        },
        {
          img: "./images/元氣滿滿魚肉餐.jpg",
          name: "增肌滿滿魚肉餐",
          price: 150,
          amount: 0,
          product_class: "增肌系列",
          carbon_content: "魚肉 5kg/1 kg",
        },
        {
          img: "./images/元氣滿滿烤鯖魚.jpg",
          name: "增肌滿滿烤鯖魚",
          price: 170,
          amount: 0,
          product_class: "增肌系列",
          carbon_content: "魚肉 5kg/1 kg",
        },
        {
          img: "./images/元氣滿滿牛肉餐.jpg",
          name: "增肌滿滿牛肉餐",
          price: 180,
          amount: 0,
          product_class: "增肌系列",
          carbon_content: "牛肉 60kg/1 kg",
        },
        {
          // 豪華系列
          img: "./images/元氣滿滿烤鮭魚.jpg",
          name: "豪華滿滿烤鮭魚",
          price: 180,
          amount: 0,
          product_class: "豪華系列",
          carbon_content: "魚肉 5kg/1 kg",
        },
        {
          img: "./images/元氣滿滿松阪豬.jpg",
          name: "豪華滿滿松阪豬",
          price: 180,
          amount: 0,
          product_class: "豪華系列",
          carbon_content: "豬肉 7kg/1 kg",
        },
      ],
      slide_id: 0,
      slide: [
        {
          title: "碳中和",
          english: "Carbon Neutralp",
          content: `「碳中和」（Carbon Neutral）指的是，企業、組織或政府在特定一段時間的二氧化碳排放量，透過植樹、使用再生能源等方式累積的減碳量相互抵銷、清除。
                不同於淨零排放是強調「人為造成的溫室氣體排放量」。 也就是說，在特定期間內，「碳排放量」與「碳清除量」相等、無增無減，達成「碳中和」的狀態。
                `,
          color: "#7da9d5d9",
          class: "btn-outline-danger",
        },
        {
          title: "淨零排放",
          english: "Net Zero",
          content: `「淨零排放」指的是在特定一段時間內，全球人為造成的溫室氣體排放量，扣除人為移除的量等於零。 也就是，淨零並不是不排放，而是盡力讓人為造成的溫室氣體排放極小化。
                為了達到淨零排放，許多政府和企業會透過負碳技術（利用碳捕集封存、再利用CCS、CCUS）、自然碳匯（森林碳匯、海洋吸附）等方式抵消碳排放。
                `,
          color: "#c3c076",
          class: "btn-outline-success",
        },
        {
          title: "台灣的淨零碳排政策",
          english: "Taiwan",
          content:
            "2022年3月30日，在眾人的期盼下，行政院國家發展委員會公布了「台灣2050淨零排放路徑及策略」，預計在2030年前編列約9000億預算，執行能源、產業、生活、社會四大轉型策略，以及科技研發、氣候法制兩大治理基礎，並輔以12項關鍵戰略，計畫於2050年與世界同步邁向淨零目標。",
          color: "#d3a5a5",
          class: "btn-outline-info",
        },
        {
          title: "低碳飲食",
          english: "Low Carb Diet",
          content: `低碳飲食是在每日飲食中減少碳水化合物的攝取量，並提高蛋白質、油脂、纖維質在飲食中的比重，低碳飲食全名為低碳水化合物飲食，也稱作低醣飲食，顧名思義就是降低碳水化合物，也就是醣類的攝取量，提高天然蛋白質及優良脂質的攝取。
                低碳飲食近年來很熱門，它沒有生酮飲食嚴格、也不需要精確計算熱量，是比較彈性、簡單的減重方式。
                `,
          color: "#b1aacb",
          class: "btn-outline-info",
        },
      ],
      computer_now: "first",
      computers: [
        {
          name: "小麥和黑麥",
          carbon: 14,
          amount: "",
          class: "first",
        },
        {
          name: "玉米",
          carbon: 1,
          amount: "",
          class: "first",
        },
        {
          name: "米",
          carbon: 4,
          amount: "",
          class: "first",
        },
        {
          name: "木薯",
          carbon: 1,
          amount: "",
          class: "first",
        },
        {
          name: "牛肉",
          carbon: 60,
          amount: "",
          class: "second",
        },
        {
          name: "羊肉",
          carbon: 24,
          amount: "",
          class: "second",
        },
        {
          name: "蝦",
          carbon: 12,
          amount: "",
          class: "second",
        },
        {
          name: "豬肉",
          carbon: 7,
          amount: "",
          class: "second",
        },
        {
          name: "禽肉",
          carbon: 6,
          amount: "",
          class: "second",
        },
        {
          name: "魚肉",
          carbon: 3,
          amount: "",
          class: "second",
        },
        {
          name: "蛋",
          carbon: 4.5,
          amount: "",
          class: "second",
        },
        {
          name: "豆漿",
          carbon: 0.9,
          amount: "",
          class: "second",
        },
        {
          name: "根莖類蔬菜",
          carbon: 0.4,
          amount: "",
          class: "third",
        },
        {
          name: "胡蘿蔔",
          carbon: 0.8,
          amount: "",
          class: "third",
        },
        {
          name: "豌豆",
          carbon: 0.9,
          amount: "",
          class: "third",
        },
        {
          name: "黑木耳",
          carbon: 1.25,
          amount: "",
          class: "third",
        },
        {
          name: "夏雪菇",
          carbon: 1.25,
          amount: "",
          class: "third",
        },
        {
          name: "杏鮑菇",
          carbon: 1,
          amount: "",
          class: "third",
        },
        {
          name: "鮑魚菇",
          carbon: 1,
          amount: "",
          class: "third",
        },
        {
          name: "番茄",
          carbon: 14,
          amount: "",
          class: "fourth",
        },
        {
          name: "香蕉",
          carbon: 0.7,
          amount: "",
          class: "fourth",
        },
        {
          name: "蘋果",
          carbon: 0.4,
          amount: "",
          class: "fourth",
        },
        {
          name: "柑橘類水果",
          carbon: 0.3,
          amount: "",
          class: "fourth",
        },
        {
          name: "奶酪",
          carbon: 21,
          amount: "",
          class: "fifth",
        },
        {
          name: "牛奶",
          carbon: 3,
          amount: "",
          class: "fifth",
        },
        {
          name: "花生",
          carbon: 25,
          amount: "",
          class: "sixth",
        },
        {
          name: "橄欖油",
          carbon: 6,
          amount: "",
          class: "sixth",
        },
        {
          name: "棕櫚油",
          carbon: 8,
          amount: "",
          class: "sixth",
        },
        {
          name: "堅果",
          carbon: 0.3,
          amount: "",
          class: "sixth",
        },
        {
          name: "咖啡",
          carbon: 0.4,
          amount: "",
          class: "sixth",
        },
      ],
      information: [
        {
          title: "年齡層的影響",
          english: "Age group",
          content:
            "年齡層一般女生會多於男生，年齡層的話大概都是普遍上班族，像以年輕人的角度來講吃的口味一般就會比較重，所以比較容易乎略飲食的均衡問題，低碳餐飲客的喜愛度會很高，固定的客源，回頭客回頭率很高。",
        },
        {
          title: "價格方面",
          english: "Price",
          content:
            "明明健康餐的東西既不調味又不油炸，為什麼這麼貴，像是低碳飲食類的東西，其實這些飲食他會變貴是有一個有個很大的原因就是食材的新鮮度、而且沒有調味食材就要更新鮮，才會讓人覺得好吃。",
        },
        {
          title: "食物的出產地",
          english: "Origin",
          content:
            "我們都採用在地的新鮮食材，我們家的豬肉吃起來是沒有腥味的那種，我們的活菌豬吃的飼料跟一般的不一樣，這也就是我們低碳便當會比一般便當貴的原因，想要健康又想要好吃，食材就要新鮮，選擇在地的食材。",
        },
      ],

      test_change: 0,
      sorts: ["A", "B", "C", "D"],
      ans: ["@", "C", "A", "B", "D", "A"],
      tests: [
        {
          title:
            '<h1 style="font-weight:800;color:#0fd9b6;"><i class="bi bi-controller"></i> 減碳知識王</h1>',
          question: "",
          options: [],
          user: "",
          show: true,
        },
        {
          title: "碳中和",
          question: "什麼是碳中和（carbon neutral）？",
          options: [
            "鹼性和酸性飲料加在一起的過程",
            "碳治狼自創的呼吸法",
            "經過低碳能源、植樹等消除二氧化碳的方式正負抵消",
            "以上接是",
          ],
          user: "",
          show: true,
        },
        {
          title: "低碳飲食（１）",
          question:
            "低碳飲食全名為「 」，也稱作「 」？<br>請在「 」填入正確的字詞。",
          options: [
            "低碳水化合物飲食，低醣飲食",
            "飢不擇食，暴飲暴食",
            "生酮飲食，阿金飲食",
            "對食，日蝕",
          ],
          user: "",
          show: true,
        },
        {
          title: "低碳飲食（２）",
          question:
            "「 」近年來很熱門，它沒有生酮飲食嚴格、也不需要精確計算熱量，是比較彈性、簡單的減重方式。<br>請在「 」填入正確的字詞。",
          options: ["區域飲食", "低碳飲食", "歐尼舒飲食", "地中海飲食"],
          user: "",
          show: true,
        },
        {
          title: "食物的碳排名（１）",
          question: "請選出以下碳排量最高的食物？",
          options: ["咖啡", "鳳梨釋迦", "青江菜", "牛肉"],
          user: "",
          show: true,
        },
        {
          title: "食物的碳排名（２）",
          question: "請選出以下碳排量最低的食物？",
          options: ["堅果", "羊肉", "魚肉", "巧克力"],
          user: "",
          show: true,
        },
      ],
      userName: "",
      userGmail: "",
      usercontent: "",
    };
  },
  computed: {
    carbon_sum() {
      let compute_total = 0;
      this.computers.forEach((computer) => {
        compute_total += computer.amount * computer.carbon;
      });
      compute_total =
        compute_total != 0 ? `總排碳量：${compute_total.toFixed(1)}g` : "";
      return compute_total;
    },
    test_result() {
      let test_total = 0;
      const fraction = 100 / (this.tests.length - 1);
      // console.log(this.tests);
      this.tests.forEach((test, i) => {
        test_total += test.user === this.ans[i] ? fraction : 0;
      });
      return test_total.toFixed(1);
    },
  },
  methods: {
    fs_click_modalMoveTop(idx) {
      // console.log(idx);
      const modalBody = document.querySelector(".modal-body");
      modalBody.classList.toggle("active");
      modalBody.scrollTop = 0;

      if (flag == "") {
        flag = idx;
        //取root裡的--MoreNews_container_height
        MoreNews_container_height = getComputedStyle(root)
          .getPropertyValue("--MoreNews_container_height")
          .slice(0, -2);
        // slice(start,end) 取字串某個部分
        root.style.setProperty(
          "--move",
          `${((idx - 1) * MoreNews_container_height + 10 * (idx - 1)) * -1}px`
        );

        document.getElementById(idx).classList.toggle("top_title_modal");
        document
          .querySelector(".MoreNews_content")
          .classList.toggle("MoreNews_content_active");
        fs_Lopacty(0);

        function fs_Lopacty(Lstart) {
          document.querySelector(".MoreNews_content").style.opacity = Lstart;
          setTimeout(() => {
            if (Lstart < 1) fs_Lopacty(Lstart + 0.1);
          }, 30);
        }
        // 更改Content內容裡的文字
        this.text_h = this.datas[idx - 1].h;
        this.text_content =
          this.datas[idx - 1].content +
          ` <button type="button" class="btn btn-secondary">Close</button>`;
      } else if (flag == idx || idx == "close") {
        fs_transition(flag);
      }

      function fs_transition(idx) {
        document.getElementById(idx).classList.toggle("top_title_modal");
        document
          .querySelector(".MoreNews_content")
          .classList.toggle("MoreNews_content_active");
        document.querySelector(".MoreNews_content").style.opacity = 0;
        flag = "";
      }
    },
    fs_submit() {
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.amount;
        product.amount = 0;
      });
      alert("非常感謝您的訂購!\r總計:" + total);
      total = 0;
      this.Lsum = 0;
    },
    fs_updateValue(product, amount) {
      if (flag2 == 1) {
        this.$refs.sum_box.classList.toggle("sum_box_active");
        document
          .querySelector(".shopingCart_toggle")
          .classList.toggle("shopingCart_toggle_active");
        this.shopingCart_toggle_img =
          '<i class="bi bi-arrow-left-square-fill"></i>';
        flag2++;
      }
      if (amount < 0) return;
      product.amount = amount;
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.amount;
      });
      this.Lsum = total;
    },
    fs_shopingCartToggle() {
      document.querySelector(".sum_box").classList.toggle("sum_box_active");
      document
        .querySelector(".shopingCart_toggle")
        .classList.toggle("shopingCart_toggle_active");
      if (flag2 % 2 == 0) {
        this.shopingCart_toggle_img = "<i class='bi bi-cart4'></i>";
      } else {
        this.shopingCart_toggle_img =
          '<i class="bi bi-arrow-left-square-fill"></i>';
      }
      flag2++;
    },
    fs_gameAgain() {
      this.test_change = 0;
      this.tests.forEach((test) => {
        test.show = true;
        test.user = "";
      });
    },
    fs_footerSubmit() {
      if (
        this.userName != "" &&
        this.userGmail != "" &&
        this.usercontent != ""
      ) {
        this.userName = this.userGmail = this.usercontent = "";
        alert("我們己經接收到您的留言!\r");
      } else {
        console.log("請填完整填寫資料");
      }
    },
  },
}).mount("#app");
// <!--------------------------------------------------------main End-------------------------------------------------------->

// <!--------------------------------------------------------chart Start-------------------------------------------------------->
Chart.defaults.font.size = 18;

var chart = new Chart(document.getElementById("myChart"), {
  type: "polarArea",
  data: {
    labels: [
      "排骨便當",
      "松阪豬低碳餐盒",
      "鯖魚便當",
      "魚肉餐低碳餐盒",
      "雞腿便當",
      "雞肉低碳餐盒",
    ],
    datasets: [
      {
        data: [17, 14, 21, 13, 18, 17],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});
// <!--------------------------------------------------------chart End-------------------------------------------------------->
