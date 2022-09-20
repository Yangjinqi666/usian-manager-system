const http =require("http")

const server=http.createServer((req,res)=>{
  res.end("hello world vue3")
})

server.listen(4000)