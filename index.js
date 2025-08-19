const title = document.querySelector('.title');
const experience = document.querySelector('.experience');
const education = document.querySelector('.formacao');

const titleButton = document.getElementById('inicio-button');
const experienceButton = document.getElementById('experience-button');
const educationButton = document.getElementById('formacao-button');

titleButton.addEventListener('click', () => {
    title.style.display = 'grid';
    experience.style.display = 'none';
    education.style.display = 'none';
});

experienceButton.addEventListener('click', () => {
    title.style.display = 'none';
    experience.style.display = 'grid';
    education.style.display = 'none';
});

educationButton.addEventListener('click', () => {
    title.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = 'grid';
});