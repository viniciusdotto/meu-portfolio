var title = document.querySelector('.title');
var experience = document.querySelector('.experience');
var education = document.querySelector('.formacao');
var titleButton = document.getElementById('inicio-button');
var experienceButton = document.getElementById('experience-button');
var educationButton = document.getElementById('formacao-button');
titleButton.addEventListener('click', function () {
    title.style.display = 'grid';
    experience.style.display = 'none';
    education.style.display = 'none';
    titleButton.classList.add('active');
    experienceButton.classList.remove('active');
    educationButton.classList.remove('active');
});
experienceButton.addEventListener('click', function () {
    title.style.display = 'none';
    experience.style.display = 'grid';
    education.style.display = 'none';
    titleButton.classList.remove('active');
    experienceButton.classList.add('active');
    educationButton.classList.remove('active');
});
educationButton.addEventListener('click', function () {
    title.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = 'grid';
    titleButton.classList.remove('active');
    experienceButton.classList.remove('active');
    educationButton.classList.add('active');
});
