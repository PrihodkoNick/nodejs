const log = require('./logger')(module);

const { greeting, days } = require('./server');

log('---------------------------')
greeting();
log(`Дней в году ${days}`);
log('---------------------------------');