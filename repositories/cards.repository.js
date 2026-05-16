const prisma = require("../prisma/prismaClient");


const create = async (cards) => {
  return await prisma.cards.create({
    data: {
      userId: cards.userId ,
      limit: cards.limit,    
    },
  });
};


module.exports = create;