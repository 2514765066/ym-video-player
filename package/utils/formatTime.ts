//格式化时间
export const formatTime = (seconde: number) => {
  if (seconde < 0) {
    return "00:00";
  }

  const hours = Math.floor(seconde / 3600);

  const minutes = Math.floor((seconde % 3600) / 60);

  const seconds = Math.floor(seconde % 60);

  // 返回格式化的字符串（始终两位数字）
  if (hours == 0) {
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const pad = (num: number | string) => {
  return num.toString().padStart(2, "0");
};
