const shipwrecks = require('../../Models/Shipwrecks')

module.exports = {
    shipwrecks : async () =>{
        try {
            const shipwreckFetched = await shipwrecks.find()
            return shipwreckFetched.map(shipwreck => {
              return {
                ...shipwreck._doc,
                _id: shipwreck.id,
               // createdAt: new Date(article._doc.createdAt).toISOString(),
              }
            })
          } catch (error) {
            throw error
          }
    }
}