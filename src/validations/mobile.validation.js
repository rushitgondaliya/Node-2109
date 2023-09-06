const joi =require("joi");

const createMobile ={
    body: joi.object().keys({
        shop_name : joi.string().required().trim(),
        mobile_company : joi.string().required().trim(),
        mobile_model : joi.string().required().trim(),
        bill_no:joi.number().required(),
    })
}

module.exports={
    createMobile
}