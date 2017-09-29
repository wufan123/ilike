
const { deviceWidth, deviceHeight } = Dimensions.get('window')
module.exports =  {
   changeWidth(width){
        return width/375*deviceWidth
   },
   changeHeight(height){
       return deviceWidth/375*height
   }
}