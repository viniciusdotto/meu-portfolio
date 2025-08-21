const title = document.querySelector('.title') as HTMLElement;
const experience = document.querySelector('.experience') as HTMLElement;
const education = document.querySelector('.formacao') as HTMLElement;

const titleButton = document.getElementById('inicio-button') as HTMLElement;
const experienceButton = document.getElementById('experience-button') as HTMLElement;
const educationButton = document.getElementById('formacao-button') as HTMLElement;

titleButton.addEventListener('click', (): void => {
    title.style.display = 'grid';
    experience.style.display = 'none';
    education.style.display = 'none';
    titleButton.classList.add('active');
    experienceButton.classList.remove('active'); 
    educationButton.classList.remove('active');
});

experienceButton.addEventListener('click', (): void => {
    title.style.display = 'none';
    experience.style.display = 'grid';
    education.style.display = 'none';
    titleButton.classList.remove('active');
    experienceButton.classList.add('active'); 
    educationButton.classList.remove('active');
});

educationButton.addEventListener('click', (): void => {
    title.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = 'grid';
    titleButton.classList.remove('active');
    experienceButton.classList.remove('active'); 
    educationButton.classList.add('active');
});