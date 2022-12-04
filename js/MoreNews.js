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
                    h: '5大低碳飲食祕訣',
                    content: `1. 不需複雜計算熱量，避開澱粉類就好!<br>
                                2. 選擇好的蛋白質食物！<br>
                                3. 搭配優質油脂食用！<br>
                                4. 嚴禁攝取大量含砂糖的食物！<br>
                                5. 充分攝取低碳蔬菜、多喝水！`,
                }, {
                    id: 2,
                    img: './images/image2.png',
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
                }, {
                    id: 3,
                    img: './images/image3.png',
                    h: '主題3',
                    content: 'To day is the good for being',
                }, {
                    id: 4,
                    img: './images/image4.png',
                    h: '主題4',
                    content: '4',
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
                this.text_content = this.datas[idx - 1].content;

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
