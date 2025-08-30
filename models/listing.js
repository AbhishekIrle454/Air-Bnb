 const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },  
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/brown-wooden-house-on-body-of-water-under-blue-sky-during-daytime-KenpE6DO1l0",
        set:(v)=>v===""?"https://unsplash.com/photos/brown-wooden-house-on-body-of-water-under-blue-sky-during-daytime-KenpE6DO1l0"
        :v,
    }, 
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;