var flag = '';
const root = document.querySelector(':root');

const vm = Vue.createApp({
    data() {
        return {
            text_h: 'text_h',
            text_content: 'text_content',
            template: '',
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
                    h: '要讓碳水攝取量不超標，可吃以下的「低醣食物」：',
                    content: `<ul>
                    <li>海鮮</li>
                    <li>低碳蔬菜（番茄、菠菜）</li>
                    <li>雞蛋</li>
                    <li>希臘優格</li>
                    <li>低醣水果（酪梨、藍莓）</li>
                    <li>橄欖油</li>
                    <li>堅果、種子</li>
                </ul>`,
                }
            ],
        }
    },
    methods: {
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
    }
}).mount('#MoreNews');
