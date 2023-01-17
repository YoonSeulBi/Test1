const messageContainer = document.querySelector("#d-day-message");
messageContainer.textContent = "D-Day를 입력해 주세요";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  // remaining === 0
  // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
  // 코드 작성 전 문장입력 : 수도코드
  if (remaining <= 0) {
    // console.log("타이머가 종료되었습니다.");
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    container.style.display = "none";
    messageContainer.style.display = "flex";
  } else if (isNaN(remaining)) {
    // 만약 잘못된 날짜가 들어왔다면 유효한 시간대가 아닙니다. 출력
    // console.log("유효한 시간대가 아닙니다.");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    container.style.display = "none";
    messageContainer.style.display = "flex";

    // 반환할때, 종료할때( 더이상 밑에까지 동작하지않게 )
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    }
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = remainingObj[timeKeys[i]];
    document.getElementById(tag).textContent = remainingObj[timeKeys];
    i++;
  }
};

const starter = function () {
  const intervalIdArr = [1, 2, 3];
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker();
  const intervalId = setInterval(counterMaker, 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
