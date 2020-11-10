const mongoose = require('mongoose');
/*mongoose.connect('mongodb+srv://zoubida:zoubida@cluster0.z40hd.mongodb.net/chefclub?retryWrites=true&w=majority', {*/
// mongoose.connect('mongodb://localhost/chefclub', {
mongoose.connect('mongodb://127.0.0.1/MYData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('MongoDb est bien lancé');
})

module.exports = mongoose;