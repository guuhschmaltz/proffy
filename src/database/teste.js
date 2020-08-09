const Database = require('./db')
const createProffy = require('./createProffy')

//CRUD
Database.then(async (db) => {
//Inserir
proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"11999999999",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

}

classValue = {
    subject: 1,
    cost: "20",
    // o proffy id virá pelo banco de dados
}

classScheduleValue = [
    // o class id virá pelo banco de dados após cadastrarmos a class
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
]

// await createProffy(db,{proffyValue,classValue,classScheduleValue})

//Consultar os dados inseridos

//Todos os proffys
const selectedProffys = await db.all("SELECT * FROM proffys")
//console.log(selectedProffys)

//Consultar as classes de um determinado professor e trazer junto os dados do professor

const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.* 
    FROM proffys
    join classes on (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)
//console.log(selectClassesAndProffys)

// o horário que a pessoa trabalha é das 8h - 18h
// o horário do time_from é (8h) precisa ser menor ou igual ao horário solicitado
// o time_to precisa ser acima

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    from class_schedule 
    WHERE class_schedule.class_id = 1 
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "420"
    AND class_schedule.time_to > "420"
`)
//console.log(selectClassesSchedules)


})