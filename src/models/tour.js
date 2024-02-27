const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'SELECT * FROM matches WHERE tourId IN (SELECT id FROM tours WHERE name = ?)';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}