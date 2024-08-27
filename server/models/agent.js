const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AgentSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, maxLength: 100 },
    address: {type: String}, 
    contact_num: {type: String, required: true},
    email: {type: String},
    state: {type: String, required: true}, 
    areas_covered: [ { type: String } ],
    rate: {type: String}
})

AgentSchema.virtual("name").get(function() {
    let fullName = "";
    if(this.first_name && this.last_name) {
        fullName = `${this.first_name} ${this.last_name}`; 
    }
    return fullName; 
})

module.exports = mongoose.model("Agent", AgentSchema) 