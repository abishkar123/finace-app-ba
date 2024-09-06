import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    
    personalDetails: {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    income: {
        salary: { type: Number, required: true },
        otherIncome: { type: Number, default: 0 }
    },
    expenses: {
        rent: { type: Number, required: true },
        utilities: { type: Number, required: true },
        otherExpenses: { type: Number, default: 0 }
    },
    assets: [{
        type: { type: String, required: true },
        value: { type: Number, required: true }
    }],
    liabilities: [{
        type: { type: String, required: true },
        amount: { type: Number, required: true }
    }]
}, { timestamps: true });

export default mongoose.model('form', FormSchema);
