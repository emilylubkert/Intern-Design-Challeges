const emailBtn = document.getElementById('cont-btn');
const appleBtn = document.getElementById('apple-btn');
const googleBtn = document.getElementById('google-btn');

const signInWithEmail = () => {
  console.log('sign in with email');
};

const signInWithApple = () => {
  console.log('sign in with apple id');
};

const signInWithGoogle = () => {
  console.log('sign in with google');
};

emailBtn.addEventListener('click', signInWithEmail, false);
appleBtn.addEventListener('click', signInWithApple, false);
googleBtn.addEventListener('click', signInWithGoogle, false);
