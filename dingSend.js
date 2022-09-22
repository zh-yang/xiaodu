const DingdingBot = require('dingtalk-robot-sender')
function sendVerson(content) {
    const robot = new DingdingBot({
        webhook: `https://oapi.dingtalk.com/robot/send?access_token=5bcb79d7e31e6a2e71a2ed7c3feae137bdd9df19200a4fcc3d28551e1fb69ec8`,
        secret: `SEC06b3e71cf67d4fc43b5edce2e61b78f72f1dddd3709187d66f7b833ceb72fa47`
    })
    let textContent = {
        msgtype: 'text',
        text: {
            content
        },
        at: {
            atMobiles: [], // 需要艾特的群成员的手机号
            isAtAll: false
        }
    }
    robot.send(textContent).then((res) => {
        if (!res.data.errcode) {
            console.log(chalk.bgGreen(`钉钉通知发送成功，任务全部完成！`))
        } else {
            console.log(res.data)
        }
    })
}