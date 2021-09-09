// Imports
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwtUtils = require("../utils/jwt.utils");
const utils = require("../utils/utils");
const models = require("../models");

// Constants - REGEX
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[+=,;.\-])([a-zA-Z0-9+=,;.\-]){8,20}$/;
const ALIAS_REGEX = /^[a-zA-ZÀ-ÿ1-9]{5,12}$/;

// Routes
module.exports = {
  register: async (req, res) => {
    let userObject = req.body;
    // Params
    const email = userObject.email;
    const alias = userObject.alias;
    const password = userObject.password;
    const service = userObject.service;
    let urlPicture = userObject.urlPicture;
    const isModerator = false;

    // If One information is missing
    if (
      email == null ||
      alias == null ||
      password == null ||
      service == null ||
      urlPicture == null ||
      isModerator == null
    ) {
      return res.status(400).json({ error: "missing parameters" });
    }

    if (req.file) {
      urlPicture = `${req.protocol}://${req.get("host")}/mediaPostsStore/${
        req.file.filename
      }`;
    }

    // Control data sent with REGEX
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Email is not valid" });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ error: "Password is not valid" });
    }

    if (!ALIAS_REGEX.test(alias)) {
      return res.status(400).json({ error: "Alias is not valid" });
    }

    let emailFound = null;
    let aliasFound = null;
    let newUser = null;

    try {
      // Search if user already exist with email adress
      emailFound = await models.User.findOne({
        attributes: ["email"],
        where: { email: email },
      });
    } catch (err) {
      return res.status(500).json({ error: "unable to verify user" });
    }
    if (!emailFound) {
      try {
        // If not exist with email adress, search if alias already exist
        aliasFound = await models.User.findOne({
          attributes: ["alias"],
          where: { alias: alias },
        });
      } catch (err) {
        return res.status(500).json({ error: "unable to verify alias" });
      }
      if (!aliasFound) {
        // If alias does not exist, crypt password and create user
        bcrypt.hash(password, 5, async (error, bcryptedPassword) => {
          try {
            newUser = await models.User.create({
              email: email,
              alias: alias,
              password: bcryptedPassword,
              service: service,
              urlPicture: urlPicture,
              isModerator: isModerator,
            });
          } catch (err) {
            return res.status(500).json({ error: "Cannot add user" });
          }
          // if user is well create, send newUser Object or send an error
          if (newUser) {
            // Prepare response
            const newUserObject = {
              _id: newUser.id,
              token: jwtUtils.generateTokenForUser(newUser),
              email: newUser.email,
              alias: newUser.alias,
              service: newUser.service,
              urlPicture: newUser.urlPicture,
              time: utils.timestampTranslator(newUser.createdAt),
            };
            // Return new user object
            return res.status(201).json(newUserObject);
          } else {
            return res.status(500).json({ error: "Cannot add user" });
          }
        });
      } else {
        return res.status(409).json({ error: "Alias already use" });
      }
    } else {
      return res.status(409).json({ error: "Email already use" });
    }
  },

  // ------------------------
  // ------------------------
  // ------------------------
  login: async (req, res) => {
    // Params
    const email = req.body.email;
    const password = req.body.password;

    // If One information is missing
    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    // Control data sent with REGEX
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Email is not valid" });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ error: "Password is not valid" });
    }

    // Search if user with email adress
    let userFound = null;
    try {
      userFound = await models.User.findOne({
        where: { email: email },
      });
    } catch (err) {
      return res.status(500).json({ error: "unable to verify user" });
    }
    if (userFound) {
      // If user exist, compare password with userfound password
      bcrypt.compare(password, userFound.password, (errBcrypt, resBcrypt) => {
        if (resBcrypt) {
          //If passwords match, send back a token
          return res.status(200).json({
            userId: userFound.id,
            token: jwtUtils.generateTokenForUser(userFound),
          });
        } else {
          return res.status(400).json({ error: "Invalid password" });
        }
      });
    } else {
      return res.status(404).json({ error: "User not exist in db" });
    }
  },

  // ------------------------
  // ------------------------
  // ------------------------
  getUserProfile: async (req, res) => {
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Control token
    if (userId < 0) return res.status(400).json({ error: "wrong token" });

    let userFound = null;

    try {
      // Search user with id and get this attributes list
      userFound = await models.User.findOne({
        attributes: [
          "id",
          "email",
          "alias",
          "service",
          "urlPicture",
          "isModerator",
        ],
        where: { id: userId },
      });
    } catch (err) {
      return res.status(500).json({ error: "cannot fetch user" });
    }

    if (userFound) {
      // if user found, send back all attributes
      res.status(201).json(userFound);
    } else {
      res.status(404).json({ error: "user not found" });
    }
  },

  // ------------------------
  // ------------------------
  // ------------------------
  updateUserProfile: async (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Params
    const alias = req.body.alias;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const service = req.body.service;
    let urlPicture = req.body.urlPicture;
    let userFound = null;

    try {
      // Search for User
      userFound = await models.User.findOne({
        attributes: [
          "id",
          "email",
          "alias",
          "password",
          "service",
          "urlPicture",
          "isModerator",
        ],
        where: { id: userId },
      });
    } catch (err) {
      return res.status(500).json({ error: "unable to verify user" });
    }
    if (userFound) {
      if (req.file) {
        urlPicture = `${req.protocol}://${req.get("host")}/mediaPostsStore/${
          req.file.filename
        }`;
      }

      // Then if user found, check if there is a password to change
      if (newPassword) {
        // Then if new password is not null, compare old password with password stored
        bcrypt.compare(
          oldPassword,
          userFound.password,
          (errBcrypt, resBcrypt) => {
            if (resBcrypt) {
              // If passwords match compare old password with new password
              if (newPassword == oldPassword) {
                return res.status(400).json({ error: "Same password" });
              } else {
                // If new password and old password are differents, crypt it
                bcrypt.hash(newPassword, 5, async (error, bcryptedPassword) => {
                  try {
                    // Destroy media attached
                    const filename =
                      userFound.urlPicture.split("/mediaPostsStore/")[1];
                    console.log({ filename: filename });
                    fs.unlink(`mediaPostsStore/${filename}`, async () => {
                      // Update profile with informations
                      userFound = await userFound.update({
                        alias: alias ? alias : userFound.alias,
                        password: bcryptedPassword
                          ? bcryptedPassword
                          : userFound.password,
                        service: service ? service : userFound.service,
                        urlPicture: urlPicture
                          ? urlPicture
                          : userFound.urlPicture,
                      });
                    });
                  } catch (err) {
                    return res
                      .status(500)
                      .json({ error: "cannot update user" + err });
                  }
                  // Then response with the profile data updated
                  if (userFound) {
                    return res.status(201).json({
                      _id: userFound.id,
                      email: userFound.email,
                      alias: userFound.alias,
                      service: userFound.service,
                      urlPicture: userFound.urlPicture,
                      isModerator: userFound.isModerator,
                    });
                  } else {
                    return res
                      .status(500)
                      .json({ error: "cannot update user profile" });
                  }
                });
              }
            } else {
              return res.status(400).json({ error: "Invalid password" });
            }
          }
        );
      } else {
        // else if there is no password to save, update others informations
        try {
          userFound = await userFound.update({
            alias: alias ? alias : userFound.alias,
            service: service ? service : userFound.service,
            urlPicture: urlPicture ? urlPicture : userFound.urlPicture,
          });
        } catch (err) {
          return res.status(500).json({ error: "cannot update user" });
        }
        if (userFound) {
          // Then response with the profile data updated
          return res.status(201).json({
            _id: userFound.id,
            email: userFound.email,
            alias: userFound.alias,
            service: userFound.service,
            urlPicture: userFound.urlPicture,
            isModerator: userFound.isModerator,
          });
        } else {
          return res.status(500).json({ error: "cannot update user profile" });
        }
      }
    } else {
      res.status(404).json({ error: "user not found" });
    }
  },
  deleteUserProfile: async (req, res) => {
    console.log(
      " -------------------------" +
        " jesuis là : " +
        " -------------------------"
    );
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    console.log(
      " -------------------------" +
        " jesuis là : " +
        " -------------------------"
    );
    // Control token
    if (userId < 0) return res.status(400).json({ error: "wrong token" });

    // Params
    const userIdFromParams = parseInt(req.params.userId);

    // Control params feed post id
    if (userIdFromParams <= 0) {
      return res.status(400).json({ error: "invalid parameters" });
    }

    let userFound = null;
    try {
      // Search user with id and get this attributes list
      userFound = await models.User.findOne({
        attributes: [
          "id",
          "email",
          "alias",
          "service",
          "urlPicture",
          "isModerator",
        ],
        where: { id: userId },
      });
    } catch (err) {
      return res.status(500).json({ error: "cannot fetch user" });
    }

    if (userFound.isModerator === true || userId === userIdFromParams) {
      try {
        // Destroy media attached

        console.log(
          " -------------------------" +
            " userFound : " +
            userFound +
            " -------------------------"
        );
        console.log(
          " -------------------------" +
            " userFoundurlPicture : " +
            userFound.urlPicture +
            " -------------------------"
        );
        const filename = userFound.urlPicture.split("/mediaPostsStore/")[1];
        console.log({ filename: filename });
        fs.unlink(`mediaPostsStore/${filename}`, async () => {
          // Search user with id and get this attributes list;
          await models.User.destroy({
            where: { id: userId },
          });
        });
      } catch (err) {
        return res.status(500).json({ error: "cannot destroy user" });
      }
      return res.status(200).json({
        message: "Profile erased",
        userFound: {
          _id: userFound.id,
          email: userFound.email,
          alias: userFound.alias,
          service: userFound.service,
          urlPicture: userFound.urlPicture,
          isModerator: userFound.isModerator,
        },
      });
    } else {
      return res.status(500).json({ error: "access denied" });
    }
  },
  controlAuth: async (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Control token
    if (userId < 0) {
      return res.status(400).json({ error: "wrong token" });
    }
    let userFound = null;
    try {
      // Search user with id and get this attributes list
      userFound = await models.User.findOne({
        attributes: ["id"],
        where: { id: userId },
      });
    } catch (err) {
      return res.status(500).json({ error: "cannot find user" });
    }
    if (userFound) {
      return res.status(200).json({ success: "valid token" });
    } else {
      return res.status(500).json({ error: "user doesn't exist" });
    }
  },
};
