const mongoose = require('mongoose')

const Schema =  mongoose.Schema



const shipwreckSchema = new Schema(
  {
    recrd: {
      type: String,
      required: true,
    },

    vesslterms: {
      type: String,
      required: true,
    },

    feature_type: {
      type: String,
      required: true,
    },

    chart: {
      type: String,
      required: true,
    },

    watlev: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
  
module.exports = mongoose.model('Shipwreck', shipwreckSchema)