const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');



let sql = `
insert into club ("name","club_id") values ("K.De Bryne","3");
`
let sql = `
insert into club ("name") values ("Mancher.C");
`





db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
