let sections = document.querySelectorAll('.modal_section');
// 開啟和關閉時要重新設定top
let flag = 1;

sections.forEach((element, index) => {

    element.onclick = () => {
        flag++;
        if (flag % 2 == 0) {

            let Ltotal = 0;
            for (let i = 0; i < index; i++) {
                Ltotal += 130
            }
            // console.log(Ltotal);
            fs_Time(0, -1 * Ltotal, 0);
            function fs_Time(Lstart, Lend) {

                //alert(Lstart +","+Lend);
                if (Lstart >= Lend) {
                    // <-----Section Img----->
                    element.style.top = Lstart + 'px';
                    setTimeout(() => { fs_Time(Lstart - 3, Lend) }, 1);
                }
                else {
                    // <-----Content----->
                    document.querySelector('.content' + (index + 1)).classList.toggle('DisplayBlock');
                    fs_Time_content(-400, 0, 0);
                    var Lvalue = 0
                    function fs_Time_content(Lstart, Lend, Lopacity) {
                        // <---淡入特效--->
                        // Lvalue++
                        // if (Lvalue == 5) {
                        //     Lvalue = 0
                        //     Lopacity += 0.1
                        //     document.querySelector('.content' + (index + 1)).style.opacity = Lopacity;
                        //     console.log(document.querySelector('.content' + (index + 1)).style.opacity, Lopacity);
                        // }

                        //alert(Lstart +","+Lend);
                        if (Lstart < Lend) {
                            document.querySelector('.content' + (index + 1)).style.top = Lstart + 'px';
                            setTimeout(() => { fs_Time_content(Lstart + 4, Lend, Lopacity) }, 3);
                        }
                    }
                }
            }
            element.classList.toggle('title');

        } else {
            element.style.top = 0 + 'px';
            element.classList.toggle('title');
            document.querySelector('.content' + (index + 1)).classList.toggle('DisplayBlock');
        }
    }
});