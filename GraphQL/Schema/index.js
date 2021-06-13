const {buildSchema} = require('graphql')

module.exports = buildSchema(`   
        type Shipwrecks {
            _id: ID!
            recrd: String!
            vesslterms: String!
            feature_type: String! 
            chart: String
            watlev: String 
            }
        input ShipwrecksInput {
          recrd: String!
          vesslterms: String!
          feature_type: String! 
          chart: String
          watlev: String 
          }
        
          type Query {
            shipwrecks:[Shipwrecks!]
          }
        
          type Mutation {
            createShipwrecks(shipwreck:ShipwrecksInput): Shipwrecks
          }
        
          schema {
            query: Query
            mutation: Mutation
          }
      `)

