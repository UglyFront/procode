const express = require("express")
const cors = require("cors")
const router = express.Router()
const nodemailer = require('nodemailer')

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(router)

app.use(express.json())

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ivanserov360@gmail.com",
      pass: "dav48177",
    },
})


router.get("/mail", async (req, res) => {

    let {name, phone, email, city} = req.query
 
    if (name && phone && email) {
      let result = await transporter.sendMail({
        from: 'ProCode SITE',
        to:  ['ProCode99@yandex.ru', "denpogoda@gmail.com"],
        subject: 'ProCode SITE ЗАЯВКА',
        html:
          `
          <h1>${name} из города ${city} оставил заявку, его контакты: ${phone}, ${email}</h1>
          `,
      })
    
      console.log(result)
      res.status(200).json()
    }
    else {
      res.status(400).json("Ошибка")
    }

    
  
})

router.get("/cb", async (req, res) => {

  let {n, p, q} = req.query


  if (n && p && q) {
    let result = await transporter.sendMail({
      from: 'ProCode SITE',
      to: ['ProCode99@yandex.ru', "denpogoda@gmail.com"],
      subject: 'ProCode SITE ОБРАТНЫЙ ЗВОНОК',
      html:
        `
        <h1>${n} просит Вас перезвонить вопрос ${q}, его телефон ${p}</h1>
        `,
    })
    console.log(result)
    res.status(200).json("ok")
  }
  else {
    res.status(400).json('Ошибка')
  }

})




router.get("/home", (req, res) => {
  res.status(200).render("./index.html")
})


router.get("/secondPage", (req, res) => {
  console.log(__dirname)
  res.status(200).render("./secondPage.html")
})


app.listen(2222, () => {
    console.log(`start on 2222`)
})