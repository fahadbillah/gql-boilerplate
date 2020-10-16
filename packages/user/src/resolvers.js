import { EmailAddressResolver } from 'graphql-scalars';

function getUsers(root, args, context) {
  console.log('#########################', root, args, context);
}
function addUsers(root, args, context) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@', root, args, context);
  args.input.id = '1234';
  return args.input;
}

export default {
  EmailAddress: EmailAddressResolver,
  Query: {
    getUser: getUsers,
    getUsers,
  },
  Mutation: {
    addUser: addUsers,
    addUsers,
  },
};
