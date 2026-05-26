const mongoose=require('mongoose')
const {Schema}=mongoose
const menuSchema=new Schema({
    label:{
        type:String,

    },
    href:{
        type:String
    }
})
const headerSchema=new Schema({
    
    logo:{
        type:String,
        required: true
    },
    menu:[menuSchema],
    cta:{
        btnText: String,
        href: String
    },
    seeting:{
        sticky:{
            type:boolean,
            default:true

        },
        backGroundColor:{
            type:String,
            default: "#ffffff"
        },
        textColor:{
            type:String,
            default:"#000000"
        },
        padding:{
            type:String,
            default:"12px"
        },
        gap:{
            type:String,
            default:"12px"
        }
    }
})