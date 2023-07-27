const filterFiles=require('./Node')

//dir name should be like this only
//"F:\VSC\Node JS\Test\Node-MaddalaPrasannaRajPaul\Node-lists"
const dir=process.argv[2]
const ext=process.argv[3]
filterFiles(dir, ext, (err, filteredFiles)=>{
    if (err) {console.error(err.message);}
    else{
        //console.log(filteredFiles)

        //to print each file
        filteredFiles.forEach(element => {
            console.log(element)
        });
    }
});
