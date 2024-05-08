







//home
exports.homepage = async (req, res) =>{


    const locals = {
        title: 'NodeJs',
        description: 'Free Nodejs User Management System'
    }
 res.render('index', locals);
};
