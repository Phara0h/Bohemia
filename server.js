var express = require('express');
var app = express();

var employeesData = [
    {
        name: 'Mary Smith',
        title: 'Chair Organizer',
        profileImage: 'https://api.adorable.io/avatars/64/ChairOrganizer'
    },
    {
        name: 'Samantha Talbert',
        title: 'Senior Professional Stapler',
        profileImage: 'https://api.adorable.io/avatars/64/SeniorProfessionalStapler'
    },
    {
        name: 'Daniel Smith',
        title: 'Pen Dispensing Manager',
        profileImage: 'https://api.adorable.io/avatars/64/PenDispensingManager'
    },
    {
        name: 'Farid Khan',
        title: 'Pen Disposal Manager',
        profileImage: 'https://api.adorable.io/avatars/64/PenDisposalManager'
    },
    {
        name: 'Angela Mchale',
        title: 'Senior Executive of Pen Operations',
        profileImage: 'https://api.adorable.io/avatars/64/SeniorExecutiveofPenOperations'
    },

    {
        name: 'Mark Madrake',
        title: 'Writer',
        profileImage: 'https://api.adorable.io/avatars/64/Writer'
    }
]

// stop CORS from ruining a good time.
app.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/list/', express.static('web/empolyee-list/dist/Bohemia'));
app.use('/weapon/', express.static('web/weapons-loadout/dist/weapons-loadout'));

app.use(function(err, req, res, next)
{
    log.error(err.stack);
    res.status(500).json(
    {
        type: 'error',
        msg: err.message
    });
});

app.get('/api/employees', (req, res) =>
{
    process.nextTick(() =>
    {
        res.json(employeesData)
    })
});

app.listen(process.env.PORT || 80);