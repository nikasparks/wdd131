const chooseTheme = document.querySelector("select, option");
const imgLogo = document.querySelector(".BYU-logo");
const bodyTheme = document.body

function changeTheme(){
    let value = chooseTheme.value;
    console.log(value);

    if (value === 'dark'){
        document.body.classList.add('dark');
        // imgLogo.setAttribute('src', 'images/byui-logo_white.png');
        // imgLogo.setAttribute('alt', 'BYU-I logo in white');
    }else{
        document.body.classList.remove('dark');
        // imgLogo.setAttribute('src', 'images/byui-logo_blue.webp');
        // imgLogo.setAttribute('alt', 'BYU-I Logo');
    }
}


chooseTheme.addEventListener('click', changeTheme);