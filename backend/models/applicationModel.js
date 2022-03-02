const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String, 
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		default: null,
	},
	phone: {
		type: Number,
	},
	batch: {
		type: Schema.Types.ObjectId,
	},
	course: {
		type: Schema.Types.ObjectId,
	},
	startDate: {
		type: Date,
	},
	endDate: {
		type: Date,
	},
	isApproved: {
		type: String,
		enum: ["pending", "approved", "rejected"],
		default: "pending",
	},
});

module.exports=mongoose.model("applications",applicationSchema);