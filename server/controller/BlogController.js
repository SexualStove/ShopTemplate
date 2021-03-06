const {Blog} = require('../models');
const nodemailer = require('nodemailer');


module.exports = {
    async createBlog (req, res) {
        try {
            const blogData = await Blog.create(req.body);
            console.log(req.body);
            res.send(blogData)
        } catch (err) {
            res.status(400).send({

            })
        }
    },

    async SendEmail(req, res) {
        try{
            console.log("I send the ting");
            // extract object from req
            let data = req.body;
            // console.log(data);

            await SendMail(data);

        } catch (err) {
            console.log(err);
            res.status(400).send({})
        }
        async function SendMail(data) {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing

            //let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtpauth.discountdomains.co.nz",
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'contact@inhouseweb.nz', // generated ethereal user
                    pass: 'buster' // generated ethereal password
                }
            });

            // Process order data

            let OrderString = "";

            OrderString += "Name:&emsp;&emsp;&emsp;" + data.Name + "<br>";
            OrderString += "Phone:&nbsp;&ensp;&emsp;&emsp;" + data.Phone + "<br>";
            OrderString += "Email:&ensp;&emsp;&emsp;&ensp;&nbsp;"+data.Email + "<br>";
            OrderString += "PlateNo:&emsp;&ensp;&ensp;"+data.Plate + "<br>";
            OrderString += "Order Time:&ensp;"+data.TimeOf + "<br><br>";

            for (var i = 0; i < data.Order.length; i++) {
                OrderString += data.Order[i][0] + ": x" + data.Order[i][1] + "<br>";
            }

            OrderString += "Total Price: &emsp;$"+ data.Total.toFixed(2);

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Not Fred Foo 👻" <contact@inhouseweb.nz>', // sender address
                to: "rt_condon@hotmail.com, inhouseweb@hotmail.com", // list of receivers
                subject: "New Order: " + data.Name, // Subject line
                text: "this be the ordders", // plain text body
                html: OrderString // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
    },
    async getBlog (req,res) {
        try{
            const blogId = req.params.blogId;

            const blog = await Blog.findOne({
                where: {
                    id: blogId
                }
            });
            console.log('HERE IS THE ERROR', blog.dataValues);
            if(!blog) {
                console.log("DO I GET HERE");
                res.status(403).send({
                    error: ' Blog Post does not exist'
                })
            }
            const blogJson = blog.toJSON();

            res.send({
                blog: blogJson
            })


        } catch (e) {
            res.status(400).send({
                error: e
            })
        }
    },
    async getAll (req,res) {
        try{
            const allBlogs = await Blog.findAll();
            res.send({
                Blogs: allBlogs
            })
        } catch (e) {
            console.log(e)
        }
    },
    async uploadThumbnail (req,res) {
        try {
            const upload = await Blog.upsert(req.body, {
                where: {
                    Title: req.body.Title
                }
            });
            console.log(upload);
            res.send({
                message: upload
            })
        } catch (e) {
            console.log(e)
        }
    },

};