function kerisarTest() {
  console.log("Проверка консоли");
  const currentUrl = window.location.href;
  console.log("currentUrl", currentUrl);

  const jsTest = document.getElementById("jsTest");
  console.log("jsTest", jsTest);
  const buttonTest = document.createElement('button');
  buttonTest.classList.add('testButtonJs');
  jsTest.appendChild(buttonTest);
  const kerisarPicture = document.createElement('img');
  kerisarPicture.setAttribute('src',
    "https://thumb.cloud.mail.ru/weblink/thumb/xw1/LLmd/Qui7Xbp6g");
  jsTest.appendChild(kerisarPicture);
}
