import express from "express";
const router = express.Router({ mergeParams: true });

// router.use(
//   (req, res, next) => {
//     console.log("user middleware 1");
//     next("router");
//   },
//   (req, res, next) => {
//     console.log("user middleware 2");
//   }
// );

router.get("/:id", (req, res) => {
  res.send("main user" + req.params.id + req.params.user);
});

console.log("user routes");

router.put("/", (req, res) => {
  res.send("put req user");
});

router.delete("/", (req, res) => {
  res.send("delete req user");
});

export default router;
