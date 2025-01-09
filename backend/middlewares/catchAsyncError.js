module.exports = func => (req, res, next)=>
        Promise.resolve(func(req, res, next)).catch(next)


// for handling the promise statement of async-await