//Defines properties of each type
const typeDefs = `
type User {
    _id: ID!
    name: String!
    username: String!

        email: String!
        password: String!
        bookCount: String!
        savedBooks: String!

}

type Book {
    _id: ID!
    name: String!
    bookId: String!
    authors: [String!]
    description: String!
    title: String!
    image: String!
    link: String!
}

type Query {
    me: User
}

type Auth {
    token: String!
    user: User
}
type Mutation {
    login(email:String!, password:String! ):Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
  }
  `;

module.exports = typeDefs;
