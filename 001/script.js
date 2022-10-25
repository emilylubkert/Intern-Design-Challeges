const logOutBtn = document.getElementById('logout');
const backBtn = document.getElementById('back-btn');

const logOut = () => {
  console.log('log out');
};

const goBack = () => {
  console.log('go back');
};

logOutBtn.addEventListener('click', logOut, false);
backBtn.addEventListener('click', goBack, false);
