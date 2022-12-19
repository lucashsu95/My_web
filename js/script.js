// <!--------------------------------------------------------main Start-------------------------------------------------------->
var flag = '';
var flag2 = 1;
const root = document.querySelector(':root');

const app = Vue.createApp({
    data() {
        return {
            text_h: '',
            text_content: '',
            Lsum: 0,
            select_value: '全部',
            check_box: [],
            datas: [
                {
                    id: 1,
                    img: './images/image1.png',
                    h: '新手必看！5大低碳飲食祕訣',
                    content: `1. 不需複雜計算熱量，避開澱粉類就好！
                    幾乎每一樣食物中都含有碳水化合物，像是我們作為三餐主食的白飯、麵包、烏龍麵、蕎麥麵等，就都是澱粉類食物。外食的時候，請選擇含碳水化合物量較少的餐點，或是將份量減半來享用。
                    2. 選擇好的蛋白質食物！
                    幾乎所有的肉類、魚類的碳水化合物含量都很低，建議以魚貝類、肉類、豆腐、蛋等蛋白質為主的料理。好的蛋白質食物，搭配低碳且富含食物纖維的蔬菜，就是完美的低碳菜單了！ 
                     
                    3. 搭配優質油脂食用！
                    一般在減重的時候，大家都會覺得不該吃油脂豐富的料理，例如豬排、雞皮、霜降牛排等。但這些看似高熱量的食物，其實碳水化合物含量很低，反而是執行低碳飲食時可以吃的食材喔！除了油脂豐富的料理之外，建議大家平時也可以攝取好油，將MCT油、亞麻仁籽油、紫蘇油、橄欖油、魚油等好油脂，拌入菜餚中食用。 
                     
                    4. 嚴禁攝取大量含砂糖的食物！
                    進行低碳飲食，除了醣類攝取要減少之外，更要避免「糖」類食物，尤其嚴禁將含有大量砂糖的甜點當作宵夜，如果晚上會嘴饞，可以挑選較低碳的食材，如水煮蛋、堅果、乳酪等食用。 
                     
                    5. 充分攝取低碳蔬菜、多喝水！
                    少吃碳水化合物，但食物纖維的攝取量也隨之減少的話，就很容易導致便祕。因此建議大家多吃蔬菜、海藻類，可以多攝取低碳蔬菜。另外，每天補充2000cc的水分也非常重要。 `,
                }, {
                    id: 2,
                    img: './images/image2.png',
                    h: '碳中和 (Carbon Neutral) 是什麼？',
                    content: `科學家早在 1960 年代就示警溫室氣體對地球的傷害，歷經超過 50 年的爭論與忽視，氣候變遷正以乾旱、暴雨、熱浪等極端型態威脅您我生存，各種因應措施也隨著危機浮上檯面，其中，訂定碳中和（Carbon Neutral）目標就是常見的手段之一。 碳中和，簡而言之，是企業、組織或政府在一定時間的二氧化碳排放量，與植樹、使用再生能源等方式所累積的減碳量相互抵換，過程中需透過碳盤查掌握碳排放量／碳足跡，接著採取減量措施或抵換行動，使大氣的碳排放量維持現狀、無增無減，達成「碳中和」的狀態。`,
                }, {
                    id: 3,
                    img: './images/image3.png',
                    h: '5大低碳飲食祕訣',
                    content: `1. 不需複雜計算熱量，避開澱粉類就好!<br>
                    2. 選擇好的蛋白質食物！<br>
                    3. 搭配優質油脂食用！<br>
                    4. 嚴禁攝取大量含砂糖的食物！<br>
                    5. 充分攝取低碳蔬菜、多喝水！`,
                }, {
                    id: 4,
                    img: './images/image4.png',
                    h: '🔥<低GI>餐盒介紹🔥',
                    content: `
                    <ul>
                    <li>🐂牛肉含有鉀、鐵、鋅維生素B6、B12及優質蛋白質，胺基酸組成
                         比豬肉更接近人體需要，能提高機體抗病能力，對生長發育及術
                         後，病後調養的人在補充失血、修復組織。所以牛肉有提高機體
                         免疫功能的效果，強筋健骨、暖胃、輔助鍛鍊肌肉幫助身體長肌
                         肉，抗氧化補充胺基酸，好處多多。</li>
                    <li>🥗毛豆有豐富的鉀，可以改善因為缺乏鉀離子造成的倦怠和食欲下
                         降。而且它比一般豆類有更多優質的蛋白質，被稱作植物肉。</li>
                    <li>🥦 花椰含有維生素A、B、C、E，以及鉀、硒、槲皮素、類胡蘿蔔
                          素等，強化視力、提高免疫力。</li>
                          <li>🌶 彩椒維生素C含量是所有蔬果中數一數二的，具有抗氧
                          化力，也是很好的食物。</li>
                          <li>🥢木耳鈣含量是肉類的70倍！營養師建議：每天吃10克「黑木耳」
                         能治便秘黑木耳富含多醣體，有血管清道夫」之稱！</li>
                         <li> 🥚雞蛋富含優質蛋白質、脂肪、卵磷脂及多種維生素和鐵、鈣、鉀
                         等人所需要的多種礦物質。</li>
                         <li>🥔馬鈴薯主要成分為澱粉，但是含豐富的維生素C與鉀，在歐洲被
                         稱為「大地的蘋果」。除了維生素C和鉀之外，還含有蛋白質、
                         醣類、維生素B1、鈣、鐵、鋅、鎂等營養素。馬鈴薯抗性澱粉
                         含量高連營養師都說讚！</li></ul>`,
                }
            ],
            shopingCart_toggle_img: "<i class='bi bi-cart4'></i>",
            products: [{
                // 減脂系列
                img: './images/元氣滿滿雞肉餐.jpg',
                name: '減脂滿滿雞肉餐',
                price: 130,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "禽肉 6kg/1 kg"
            }, {
                img: './images/元氣滿滿豬肉餐.jpg',
                name: '減脂滿滿豬肉餐',
                price: 130,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "豬肉 7kg/1 kg"
            }, {
                img: './images/元氣滿滿魚肉餐.jpg',
                name: '減脂滿滿魚肉餐',
                price: 130,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "1kg魚肉5kg碳"
            }, {
                img: './images/元氣滿滿烤鯖魚.jpg',
                name: '減脂滿滿烤鯖魚',
                price: 150,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "1kg魚肉5kg碳"
            }, {
                img: './images/元氣滿滿泡菜豬.jpg',
                name: '減脂滿滿泡菜豬',
                price: 150,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "豬肉 7kg/1 kg"
            }, {
                img: './images/元氣滿滿牛肉餐.jpg',
                name: '減脂滿滿牛肉餐',
                price: 160,
                amount: 0,
                product_class: '減脂系列',
                carbon_content: "牛肉 60kg/1 kg"
            }, {
                // 增肌系列
                img: './images/元氣滿滿雞肉餐.jpg',
                name: '增肌滿滿雞肉餐',
                price: 150,
                amount: 0,
                product_class: '增肌系列',
                carbon_content: "禽肉 6kg/1 kg"
            }, {
                img: './images/元氣滿滿豬肉餐.jpg',
                name: '增肌滿滿豬肉餐',
                price: 150,
                amount: 0,
                product_class: '增肌系列',
                carbon_content: "豬肉 7kg/1 kg"
            }, {
                img: './images/元氣滿滿魚肉餐.jpg',
                name: '增肌滿滿魚肉餐',
                price: 150,
                amount: 0,
                product_class: '增肌系列',
                carbon_content: "魚肉 5kg/1 kg"
            }, {
                img: './images/元氣滿滿烤鯖魚.jpg',
                name: '增肌滿滿烤鯖魚',
                price: 170,
                amount: 0,
                product_class: '增肌系列',
                carbon_content: "魚肉 5kg/1 kg"
            }, {
                img: './images/元氣滿滿牛肉餐.jpg',
                name: '增肌滿滿牛肉餐',
                price: 180,
                amount: 0,
                product_class: '增肌系列',
                carbon_content: "牛肉 60kg/1 kg"
            }, {
                // 豪華系列

                img: './images/元氣滿滿烤鮭魚.jpg',
                name: '豪華滿滿烤鮭魚',
                price: 180,
                amount: 0,
                product_class: '豪華系列',
                carbon_content: "魚肉 5kg/1 kg"
            }, {
                img: './images/元氣滿滿松阪豬.jpg',
                name: '豪華滿滿松阪豬',
                price: 180,
                amount: 0,
                product_class: '豪華系列',
                carbon_content: "豬肉 7kg/1 kg"
            }
            ],
            slide_id: 0,
            slide: [{
                title: '年齡層的影響',
                english: 'Age group',
                content: '年齡層一般女生會多於男生，年齡層的話大概都是普遍上班族，像以年輕人的角度來講吃的口味一般就會比較重，所以比較容易乎略飲食的均衡問題，低碳餐飲客的喜愛度會很高，固定的客源，回頭客回頭率很高。',
                btn: '搶先體驗',
                color: 'text-danger',
                class: 'btn-outline-danger'
            },
            {
                title: '價格方面',
                english: 'Price',
                content: '明明健康餐的東西既不調味又不油炸，為什麼這麼貴，像是低碳飲食類的東西，其實這些飲食他會變貴是有一個有個很大的原因就是食材的新鮮度、而且沒有調味食材就要更新鮮，才會讓人覺得好吃。',
                btn: '會員登入',
                color: 'text-success',
                class: 'btn-outline-success'
            },
            {
                title: '食物的出產地',
                english: 'Origin',
                content: '我們都採用在地的新鮮食材，我們家的豬肉吃起來是沒有腥味的那種，我們的活菌豬吃的飼料跟一般的不一樣，這也就是我們低碳便當會比一般便當貴的原因，想要健康又想要好吃，食材就要新鮮，選擇在地的食材。',
                btn: '聯絡我們',
                color: 'text-info',
                class: 'btn-outline-info'
            }],
        }
    }, methods: {

        fs_click_modalMoveTop(idx) {
            console.log();
            if (flag == '') {
                flag = idx;
                //取root裡的--MoreNews_container_height值
                MoreNews_container_height = getComputedStyle(root).getPropertyValue('--MoreNews_container_height').slice(0, -2);
                // slice(start,end) 取字串某個部分
                root.style.setProperty('--move', `${((idx - 1) * MoreNews_container_height + 10 * (idx - 1)) * -1}px`)
                document.getElementById(idx).classList.toggle('top_title_modal');
                document.querySelector('.MoreNews_content').classList.toggle('MoreNews_content_active');
                fs_Lopacty(0);

                function fs_Lopacty(Lstart) {
                    document.querySelector('.MoreNews_content').style.opacity = Lstart;
                    setTimeout(() => {
                        if (Lstart < 1) fs_Lopacty(Lstart + 0.1);
                    }, 30);
                }
                // 更改Content內容裡的文字
                this.text_h = this.datas[idx - 1].h;
                this.text_content = this.datas[idx - 1].content + ` <button type="button" class="btn btn-secondary">Close</button>`;

            } else if (flag == idx || idx == 'close') {
                fs_transition(flag);
            }

            function fs_transition(idx) {
                document.getElementById(idx).classList.toggle('top_title_modal');
                document.querySelector('.MoreNews_content').classList.toggle('MoreNews_content_active');
                document.querySelector('.MoreNews_content').style.opacity = 0;
                flag = '';
            }

        },
        fs_submit() {
            // console.log(this);
            let total = 0
            this.products.forEach(product => {
                total += product.price * product.amount
                product.amount = 0
            });

            alert('非常感謝您的訂購!\r總計:' + total);
            total = 0
            this.Lsum = 0
        },
        fs_updateValue(product, amount) {
            if (amount < 0) return
            product.amount = amount
            let total = 0
            this.products.forEach(product => {
                total += product.price * product.amount
            });
            this.Lsum = total;
        },
        fs_shopingCartToggle() {
            document.querySelector('.sum_box').classList.toggle('sum_box_active');
            document.querySelector('.shopingCart_toggle').classList.toggle('shopingCart_toggle_active');
            if (flag2 % 2 == 0){
                this.shopingCart_toggle_img = "<i class='bi bi-cart4'></i>";
            }else{
                this.shopingCart_toggle_img = '<i class="bi bi-arrow-left-square-fill"></i>';
            }
            flag2 ++;
        }
    }
}).mount('#app');
// <!--------------------------------------------------------main End-------------------------------------------------------->

// <!--------------------------------------------------------chart Start-------------------------------------------------------->
Chart.defaults.font.size = 18;
var chart = new Chart(document.getElementById('myChart'), {
    type: 'polarArea',
    data: {
        labels: ["排骨便當", "松阪豬低碳餐盒", "鯖魚便當", "魚肉餐低碳餐盒", "雞腿便當", "雞肉低碳餐盒"],
        datasets: [{
            data: [17, 14, 21, 13, 18, 17],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    }, options: {
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    }
});
// <!--------------------------------------------------------chart End-------------------------------------------------------->