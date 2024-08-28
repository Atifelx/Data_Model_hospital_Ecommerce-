import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: True,
    },
    diagnosedWith: {
      type: String,
      required: True,
    },

    address: {
      type: String,
      required: True,
    },
    age: {
      type: String,
      required: True,
    },
    bloodGroup: {
      type: String,
      required: True,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: True,
    },
    AdmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: True,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
