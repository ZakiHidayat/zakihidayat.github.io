const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const toggleclose = document.querySelector('.uil-multiply');
const toggleopen = document.querySelector('.uil-bars');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    logo.classList.toggle('active');
    toggleclose.classList.toggle('active');
    toggleopen.classList.toggle('active');
}