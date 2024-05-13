const { User, Book } = require('../models');

const resolvers = {
    Query: {
        tech: async () => {
            return User.find({});
        },
        matchups: async (parent, { _id }) => {
            const params = _id? { _id } : {};
            return Book.find(params);
        },
    },
    Mutation: {
        savedBook: async (parent, args) => {
            const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
          );
          return (updatedUser);
    },
    createUser: async (parent, { _id, userNum }) => {
        const user = await User.create(body);
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
  },
};

module.exports = resolvers;
