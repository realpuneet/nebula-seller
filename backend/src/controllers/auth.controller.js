const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function to sanitize user object by removing password
const sanitizeUser = (user) => {
  const safe = user.toObject();
  delete safe.password;
  return safe;
};

const registerUser = async (req, res) => {
  const {
    username,
    email,
    fullname: { firstName, lastName },
    password,
  } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(422).json({
      message:
        isUserAlreadyExists.username === username
          ? "username already exists"
          : "email already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    fullname: {
      firstName,
      lastName,
    },
    password: hashPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
  httpOnly: true,
  secure: true,       // must be true in production
  sameSite: "None",   // required for cross-site cookies
});

  res.status(201).json({
    message: "User registered successfully",
  });
};

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

 res.cookie("token", token, {
  httpOnly: true,
  secure: true,       // must be true in production
  sameSite: "None",   // required for cross-site cookies
});

  res.status(200).json({
    message: "user logged in successfully",
    user: sanitizeUser(user),
  });
}

async function registerSeller(req, res) {
  const {
    username,
    email,
    fullname: { firstName, lastName },
    password,
  } = req.body;

  const isSellerAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isSellerAlreadyExists) {
    return res.status(422).json({
      message:
        isSellerAlreadyExists === username
          ? "username already exist!"
          : "email already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const seller = await userModel.create({
    username,
    email,
    fullname: {
      firstName,
      lastName,
    },
    password: hashPassword,
    role: "seller",
  });

  const token = jwt.sign({ id: seller._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
  httpOnly: true,
  secure: true,       // must be true in production
  sameSite: "None",   // required for cross-site cookies
});

  res.status(201).json({
    message: "Seller registered successfully!",
    seller: sanitizeUser(seller),
  });
}

async function loginSeller(req, res) {
  const { username, email, password } = req.body;

  const seller = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!seller) {
    return res.status(400).json({
      msg: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, seller.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      msg: "Invalid Credentials",
    });
  }

  const token = jwt.sign({ id: seller._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
  httpOnly: true,
  secure: true,       // must be true in production
  sameSite: "None",   // required for cross-site cookies
});

  res.status(200).json({
    msg: "Seller Logged In Successfully",
    seller: sanitizeUser(seller)
  });
}

async function logoutUser(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function updateUserRole(req, res) {
  try {
    const { role } = req.body;
    const userId = req.user._id;

    const user = await userModel.findByIdAndUpdate(
      userId,
      { role: role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User role updated successfully",
      user: sanitizeUser(user),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
  registerSeller,
  loginSeller,
  logoutUser,
  updateUserRole,
};
