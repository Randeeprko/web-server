const http =require('http')
let server = http.createServer((req,res) => {
	
		res.writeHead(200,{"Content-Type": "text/html"})
		switch(req.url){
			case "/login":
				res.write("<h2>Login page displayed</h2>")
				break;
			case "/about":
				res.write("<h2>About page displayed</h2>")
				break;
			case "/contact":
				res.write("<h2>Contact page displayed</h2>")
				break;
			default:
				res.write("<h2>Home page displayed</h2>")			
		}


		return res.end()
	})

server.listen(3000)

console.log("Created my first server")