

//工具函数 休眠相应秒数
function delay(second){
    sleep(second*1000);
}
//启动学习强国
function start_qg(){
    console.setSize(400, 400);
    console.show();
    console.info("启动学习强国");
    app.launchApp("学习强国");
    click_index();
}
//点击主页学习按钮，回到主页
function click_index(){
    while (!id("home_bottom_tab_button_work").exists()) {//20201001 学习按钮文字属性由"学习"改为 "工作"，以下所有点击学习按钮加载主页均同步修改
        id("home_bottom_tab_button_work").findOne().click();//点击主页正下方的"学习"按钮
        console.log("等待加载出主页");
        delay(1);
        continue;/*break;exists(); back();*/
         }
        console.log("加载成功。。")
}


start_qg();