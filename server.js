
//=============================================
//basic server create
// const koa = require('koa');
// const app=new koa();
// app.use((ctx)=>ctx.body='koa jhgbcallimg');

// app.listen(3000,()=>{
//     console.log("server is walking")
// })
// =============================================

// const koa = require('koa');
// const json = require('koa-json');
// const krouter = require('koa-router')

// const app = new koa();
// const router = new krouter();

// app.use(json());

// // app.use(ctx => ctx.body = { msg: 'koa jhgbcallimg' });


// router.get('/test',ctx=>(ctx.body='hellotest'));

// app.use(router.routes()).use(router.allowedMethods());

// app.listen(3000)


//==================================
// router.get("/pk/:id",(ctx)=>{
// ctx.body=ctx.params

// })

// app.use(router.routes()).use(router.allowedMethods());

// app.listen(3000)

// ====================================
//crud
const koa = require('koa');
const koarouter=require('koa-router')
const app=new koa();
const router=new koarouter();
const bodyparser = require('koa-bodyparser')

// app.use((ctx)=>ctx.body='koa jhgbcallimg');
app.use(bodyparser())

const data=[
    {"id":1,"name":"a"},
    {"id":2,"name":"b"},
    {"id":3,"name":"c"}
]
// ===========================
let read=(ctx)=>{

    ctx.body=data 
}
router.get('/',read)
// ===========================
const add=(ctx)=>{
const uin=ctx.request.body;
// const {id,name}=ctx.request.body
data.push(uin)
ctx.body="data added";

}
router.post('/add',add)
// ===========================
const update=(ctx)=>{
let uin=ctx.request.body  
const index=data.findIndex((e)=>e.id===uin.id)
let msg;
if(index===-1)
{
data.push(uin)
msg="data added"
}
else{
    data[index]=uin;
    msg="data updated"
}
ctx.body=msg
}
router.put('/update',update)
// ===========================

const deletedata=(ctx)=>{
    let uin=ctx.request.body //userinput
    const index=data.findIndex((e)=>e.id===uin.id)
    let msg;
    if(index===-1)
    {
    msg="data not found"
    } 
    else{
        delete data[index];
        msg="data deleted"
    }
    ctx.body=msg
    }
router.delete('/delete',deletedata)
// ===========================
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("port running");
})
// ===========================