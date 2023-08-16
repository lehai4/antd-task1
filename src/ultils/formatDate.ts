import moment from "moment";
function getMinutes2Digits_version2(date: any) {
  return String(date.getMinutes()).padStart(2, "0");
}
function getHours2Digits_version2(date: any) {
  return String(date.getHours()).padStart(2, "0");
}

export const formatTimeStamp = (value: any) => {
  let date = new Date(value);
  let hours = getHours2Digits_version2(date);
  let minutes = getMinutes2Digits_version2(date);
  let formattedTime =
    moment(date).locale("vi").format("ll") + " " + hours + ":" + minutes;
  return formattedTime;
};
