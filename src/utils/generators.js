const myBirthDate = "2000-03-16";
const yearInMs = 3.15576e10;

export const generateRandomTime = () => {
  const hrs = Math.round(Math.random() * 24);
  const mins = Math.round(Math.random() * 60);
  const hFormat = hrs < 10 ? "0" : "";
  const mFormat = mins < 10 ? "0" : "";
  const amPm = hrs < 12 ? "AM" : "PM";
  const is12 = hrs % 12 === 0;

  return amPm === "AM" && !is12
    ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
    : "AM" && is12
    ? String(12 + ":" + mFormat + mins + " " + amPm)
    : is12
    ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
    : String(hFormat + (hrs - 12) + ":" + mFormat + mins + " " + amPm);
};

export const getAge = () => Math.floor((new Date() - new Date(myBirthDate).getTime()) / yearInMs);
