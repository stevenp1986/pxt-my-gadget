bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()

bitbot.select_model(bitbot.BBModels(BBModel.Auto))
bitbot.driveMilliseconds(600, 400)
bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 600, 400)

basic.forever(function () {

})
