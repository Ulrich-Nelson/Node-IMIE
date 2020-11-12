const mongoose = require('mongoose');
/*mongoose.connect('mongodb+srv://Nelson:kiEIAi5Xp2SYu7Yj@cluster0.cdevd.mongodb.net/ChefClub?retryWrites=true&w=majority', {*/
// mongoose.connect('mongodb://localhost/chefclub', {
mongoose.connect('mongodb://localhost/MYData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB est bien lancé........');
})

module.exports = mongoose;