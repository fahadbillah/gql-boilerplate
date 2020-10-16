import { gql } from 'apollo-server-express';

export default gql`
  scalar EmailAddress

  enum Sex {
    MALE
    FEMALE
    OTHER
  }

  input UserInput {
    firstName: String!
    lastName: String!
    dob: String!
    sex: Sex!
    email: EmailAddress
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    dob: String!
    sex: Sex!
    email: EmailAddress
  }

  type Query{
    getUser(id: ID): User
    getUsers(ids: [ID]): [User]
  }

  type Mutation {
    addUser(input: UserInput): User
    addUsers(inputs: [UserInput]): [User]
  }
`;
