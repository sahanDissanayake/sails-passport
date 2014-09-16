module.exports = {

 schema: true,

    attributes: {
        username : { type: 'string', unique: true },
        email : { type: 'email', unique: true },
        passports : { collection: 'Passport', via: 'user' }
    }
};