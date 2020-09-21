const router = new require("express").Router();
const UserModel = require("./../models/User");
const auth = require("./../auth");
const uploader = require("./../config/cloudinary");

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find().limit(100);
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", auth.authenticate, async (req, res, next) => {
  console.log(req.body);
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.patch(
  "/:id/avatar",
  uploader.single("avatar"),
  async (req, res, next) => {
    if (!req.file)
      return res
        .status(401)
        .json({ msg: "Avatar file object is needed here !!!" });

    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        { avatar: req.file.path },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
