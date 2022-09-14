const express = require('express')
const app = express();
const cors = require('cors')


 
app.use(express.json())
app.use(cors())
const db=require('./models');

// Posts Routers
const postRouter = require('./routes/Posts');

app.use("/posts",postRouter);

//comments router
const commentsRouter = require('./routes/Comments');

app.use("/comments",commentsRouter);

//Users Router
const UsersRouter = require('./routes/Users');

app.use("/auth",UsersRouter);








db.sequelize.sync().then(()=>{
    app.listen(3001 ,()=>{
        console.log("server running on port 3001");
    })
})



