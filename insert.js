const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');



let sql = `
insert into players("name","national","number","club_id") values ("Cristiano Ronald","Portugal","7","10")
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
