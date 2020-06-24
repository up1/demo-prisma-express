const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const server = express();
server.use(express.json());

server.post("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    res.send(newUser);
  } catch (error) {
    res.sendStatus(500);
  }
});

server.listen(3000, () => {
  console.log("Started ....");
});
