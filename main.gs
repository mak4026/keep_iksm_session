const props = PropertiesService.getScriptProperties();
const iksm = props.getProperty("iksm_session");

const USER_LANG = "ja-jp";
const URL = "https://app.splatoon2.nintendo.net/api/results";

function callSplatNetAPI() {
  const cookie = "iksm_session=" + iksm;
  const headers = {
    'x-unique-id': '6463509894502868281',
    'x-requested-with': 'XMLHttpRequest',
    'x-timezone-offset': '0',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; Pixel Build/NJH47D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
    'Accept': '*/*',
    'Referer': 'https://app.splatoon2.nintendo.net/results',
    'Accept-Language': USER_LANG,
    'Cookie': cookie
  }
  const options = {
    "method": "get",
    "headers": headers
  };
  const res = UrlFetchApp.fetch(URL, options);
  Logger.log(res.getContentText());
}