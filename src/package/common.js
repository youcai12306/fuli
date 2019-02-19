import Cookies from 'js-cookie'

const IMG_Url = 'http://101.201.101.138:2600/file/' //公共的图片地址
const  HTTP_DETAIL = "http://101.201.101.138" //公共的接口地址
const  HTTP_DETAIL1 = "http://101.201.101.138"
const  HTTP_DETAIL2 = "http://getway.mayou365.com"
const isEnglish = Cookies.get('language') == 'en' ? 1 : 0;
export {IMG_Url,HTTP_DETAIL,HTTP_DETAIL1,isEnglish,HTTP_DETAIL2}