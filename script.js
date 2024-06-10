let flag = 0; //light theme
function changetheme() {
    if (flag == 0) {
        document.getElementById('theme').innerHTML = "Light Theme";
        document.documentElement.style.setProperty('--textcolor', 'white');
        document.documentElement.style.setProperty('--bgcolor', 'hsl(0, 0%, 9%)');
        document.documentElement.style.setProperty('--ulcolor', 'hsl(0, 0%, 50%)');
        document.documentElement.style.setProperty('--bordercolor', 'rgba(255,255,255,0.5)');
        flag = 1;
    }
    else {
        document.getElementById('theme').innerHTML = "Dark Theme";
        document.documentElement.style.setProperty('--textcolor', 'black');
        document.documentElement.style.setProperty('--bgcolor', 'white');
        document.documentElement.style.setProperty('--ulcolor', 'hsl(0, 0%, 0%)');
        document.documentElement.style.setProperty('--bordercolor', 'rgba(0,0,0,0.5)');

        flag = 0;
    }
}