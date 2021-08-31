// Imports
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const models = require("../models");

// Constants - REGEX
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[+=,;.\-])([a-zA-Z0-9+=,;.\-]){8,20}$/;
const ALIAS_REGEX = /^[a-zA-ZÀ-ÿ1-9]{5,12}$/;

// Routes
module.exports = {
  register: (req, res) => {
    // Params
    const email = req.body.email;
    const alias = req.body.alias;
    const password = req.body.password;
    const service = req.body.service;
    const urlPicture = req.body.urlPicture;
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

    // Search if user already exist with email adress
    models.User.findOne({
      attributes: ["email"],
      where: { email: email },
    })
      .then((emailFound) => {
        if (!emailFound) {
          // If not exist with email adress, search if alias already exist
          models.User.findOne({
            attributes: ["alias"],
            where: { alias: alias },
          })
            .then((aliasFound) => {
              if (!aliasFound) {
                // If alias does not exist, crypt password and create user
                bcrypt.hash(password, 5, (error, bcryptedPassword) => {
                  const newUser = models.User.create({
                    email: email,
                    alias: alias,
                    password: bcryptedPassword,
                    service: service,
                    urlPicture: urlPicture,
                    isModerator: isModerator,
                  })
                    .then((newUser) => {
                      // If user is well create, return new user object
                      return res.status(201).json({
                        userId: newUser.id,
                      });
                    })
                    .catch((error) => {
                      return res.status(500).json({ error: "Cannot add user" });
                    });
                });
              } else {
                return res.status(409).json({ error: "Alias already use" });
              }
            })
            .catch((error) => {
              return res.status(500).json({ error: "Unable To verify user" });
            });
        } else {
          return res.status(409).json({ error: "Email already use" });
        }
      })
      .catch((error) => {
        return res.status(500).json({ error: "Unable To verify user" });
      });
  },

  // ------------------------
  // ------------------------
  // ------------------------
  login: (req, res) => {
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
    models.User.findOne({
      where: { email: email },
    }).then((userFound) => {
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
    });
  },

  // ------------------------
  // ------------------------
  // ------------------------
  getUserProfile: (req, res) => {
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Control token
    if (userId < 0) return res.status(400).json({ error: "wrong token" });

    // Search user with id and get this attributes list
    models.User.findOne({
      attributes: [
        "id",
        "email",
        "alias",
        "service",
        "urlPicture",
        "isModerator",
      ],
      where: { id: userId },
    })
      .then((user) => {
        if (user) {
          // if user found, send back all attributes
          res.status(201).json(user);
        } else {
          res.status(404).json({ error: "user not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "cannot fetch user" });
      });
  },

  // ------------------------
  // ------------------------
  // ------------------------
  updateUserProfile: (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Params
    const alias = req.body.alias;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const service = req.body.service;
    const urlPicture = req.body.urlPicture;

    // Search for User
    models.User.findOne({
      attributes: ["id", "email", "alias", "password", "service", "urlPicture"],
      where: { id: userId },
    })
      .then((userFound) => {
        if (userFound) {
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
                    bcrypt.hash(newPassword, 5, (error, bcryptedPassword) => {
                      // Update profile with informations
                      userFound
                        .update({
                          alias: alias ? alias : userFound.alias,
                          password: bcryptedPassword
                            ? bcryptedPassword
                            : userFound.password,
                          service: service ? service : userFound.service,
                          urlPicture: urlPicture
                            ? urlPicture
                            : userFound.urlPicture,
                        })
                        .then((userFound) => {
                          // Then response with the profile data updated
                          if (userFound) {
                            return res.status(201).json(userFound);
                          } else {
                            return res
                              .status(500)
                              .json({ error: "cannot update user profile" });
                          }
                        })
                        .catch((err) => {
                          res.status(500).json({ error: "cannot update user" });
                        });
                    });
                  }
                } else {
                  return res.status(400).json({ error: "Invalid password" });
                }
              }
            );
          } else {
            // else if there is no password to save, update others informations
            userFound
              .update({
                alias: alias ? alias : userFound.alias,
                service: service ? service : userFound.service,
                urlPicture: urlPicture ? urlPicture : userFound.urlPicture,
              })
              .then((userFound) => {
                // Then response with the profile data updated
                if (userFound) {
                  return res.status(201).json(userFound);
                } else {
                  return res
                    .status(500)
                    .json({ error: "cannot update user profile" });
                }
              })
              .catch((err) => {
                res.status(500).json({ error: "cannot update user" });
              });
          }
        } else {
          res.status(404).json({ error: "user not found" });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  deleteUserProfile: (req, res) => {
    // control userID == user to erase or isModerator == true
  },
};
