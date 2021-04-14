let fullClassRoom = [
    {name: "Андрей", surename: "Тимошенко", age: 28, homeWorkInMonth: 9},
    {name: "Александр", surename: "Литвиненко", age: 26, homeWorkInMonth: 8},
    {name: "Александр", surename: "Грико", age: 24, homeWorkInMonth: 7},
    {name: "Александр", surename: "Гетьманский", age: 25, homeWorkInMonth: 8},
    {name: "Наталья", surename: "Горошко", age: 23, homeWorkInMonth: 8},
    {name: "Артем", surename: "Шевчук", age: 23, homeWorkInMonth: 9},
    {name: "Иванна", surename: "Зимина", age: 28, homeWorkInMonth: 6},
    {name: "Владимир", surename: "Антоненко", age: 27, homeWorkInMonth: 4},
    {name: "Николай", surename: "Зайченко", age: 29, homeWorkInMonth: 9},
    {name: "Петр", surename: "Пусикотиков", age: 21, homeWorkInMonth: 1},
    {name: "Ирина", surename: "Кошатикова", age: 31, homeWorkInMonth: 5},
    {name: "Алексей", surename: "Брутолисов", age: 19, homeWorkInMonth: 3},
    {name: "Макар", surename: "Племяников", age: 18, homeWorkInMonth: 6},
    {name: "Сергей", surename: "Начальников", age: 45, homeWorkInMonth: 2}
]

const showAllStudentsBtn = document.querySelector('.students-btn');
const showfilterStudentsBtn = document.querySelector('.filterByHomeWork-btn');
const studentsContainer = document.querySelector('.students-container');
const homeworkForApril = 9;

const showStudents = (students) => {
    let studentsHTML;

    studentsHTML = students.reduce((htmlText, student, index) => {
        htmlText += `<div class = "student-container">
            <div class="naumber-student">№: ${index + 1}</div>
            <div class="name-student">Имя: ${student.name} ${student.surename}</div>
            <div class="age-student"> ${student.age} лет</div>
            <div class="homeWork-student">Сданые домашние задание за месяц: ${student.homeWorkInMonth}</div>
        </div>`

    return htmlText;
    },'');

    studentsContainer.innerHTML = studentsHTML;
}

showAllStudentsBtn.addEventListener('click', ()=> {
    showStudents(fullClassRoom);
});

showfilterStudentsBtn.addEventListener('click', ()=> {
    const procentOfHW = parseInt(homeworkForApril * 0.8); //Приводим к целому числу
    const students = fullClassRoom.filter((student)=>{
        if (student.homeWorkInMonth >= procentOfHW) return student;
    });

    showStudents(students);
})
