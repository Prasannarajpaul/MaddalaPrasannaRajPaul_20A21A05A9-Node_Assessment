const {createDatabase, createTable}=require('./task2-1');

function database(){
    try{
        //creating database
        createDatabase();
        console.log('Database created successfully');

        //creating the table
        createTable();
        console.log('Table created successfully');

    }
    catch(error){
        console.error("Error:" + error.message)
    }
}
//calling database function
database();