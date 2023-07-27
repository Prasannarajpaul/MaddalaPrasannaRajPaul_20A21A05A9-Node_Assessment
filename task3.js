var nodemailer=require('nodemailer');
//install nodemailer as $ npm i nodemailer
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mprasannarajpaul@gmail.com',
        pass:'fduuhgsomzzajcsg'
    }
});
var mailOptions={
    from:'mprasannarajpaul@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'5 Node JS tasks',
    text:'Created a new repository and the link of the repository is "https://github.com/Prasannarajpaul/MaddalaPrasannaRajPaul_20A21A05A9-Node_Assessment"'
} ;
transport.sendMail(mailOptions, function(error, info){
    if(err) {console.error(err.message)}
    console.log('mail sent' + info.response)
})