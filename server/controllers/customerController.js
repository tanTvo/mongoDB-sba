







//home
exports.homepage = async (req, res) =>{


    const locals = {
        title: 'NodeJs',
        description: 'Free Nodejs User Management System'
    }
 res.render('index', locals);
};


exports.addCustomer= async (req, res) =>{


    const locals = {
        title: 'Add New Customer - NodeJs',
        description: 'Free Nodejs User Management System'
    }
 res.render('customer/add', locals);
};