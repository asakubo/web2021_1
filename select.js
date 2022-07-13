const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql= `
select players.id,players.name,players.national,players.number,clubs.name as name2 from players  inner join clubs on players.club_id=clubs.id order by players.club_id;
`
let sql0 ="select id ,name,number from players"



db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log(data.id+':'+data.name+':'+data.national +':'+data.name2+':'+data.number);
		}
	});
});
